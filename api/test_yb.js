"use strict";

const mcache = require('memory-cache');
const axios = require('axios');

const get_baseurl = async () => {
    let cachedBody = mcache.get("youtube_baseurl");
    if (cachedBody) {
        return cachedBody;
    } else {
        const r = await ybCurl("https://www.youtube.com/watch?v=ttWQK5VXskA");
        const relative_url = r.match(/"(\/[^"]+\/base.js)"/)[1];
	    if (!relative_url)
            throw 'could not find base.js url in watch_text';
        const url = 'https://www.youtube.com' + relative_url;
        mcache.put("youtube_baseurl", url, 1000 * 1000);
        return url;
    }
}

const get_ybcookie = async () => {
    var fs = require('fs');
    return new Promise((resolve) => {
        fs.readFile("../yb_cookie.txt", 'utf8', function(err, data) {
            if (err) throw err;
console.log(data);
            resolve(data.replace(/\n/g, ''));
        });      
    });
};

const ybCurl = async (url) => {
    const cookie = await get_ybcookie();

    const exec = require('child_process').exec;
    return new Promise((resolve) => {
        exec("curl '" + url + "' -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8' -H 'Accept-Language: en-US,en;q=0.5' --compressed -H 'Connection: keep-alive' -H 'Cookie: " + cookie + "' -H 'Upgrade-Insecure-Requests: 1' -H 'TE: Trailers'", function(error, stdout, stderr){
            // --proxy http://62.171.132.255:8128

console.log(url, stdout, "curl '" + url + "' -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8' -H 'Accept-Language: en-US,en;q=0.5' --compressed -H 'Connection: keep-alive' -H 'Cookie: " + cookie + "' -H 'Upgrade-Insecure-Requests: 1' -H 'TE: Trailers'");

            resolve(stdout); 
        });
    })
}

async function get_signature_function() {
    const cookie = await get_ybcookie();

    const url = await get_baseurl();
    //const url = "https://www.youtube.com/s/player/7bc032d0/player_ias.vflset/en_US/base.js";
	const base_js_text = await axios.get(url, {
        headers: {
            'user-agent': '',
            Cookie: cookie
        }
    })
        .then(r => r.data)
	return extract_signature_function(base_js_text)
}

function extract_signature_function(base_js_text) {
    base_js_text = base_js_text.replace(/(\r\n|\n|\r)/gm,"");
    const sigfun_text = base_js_text.match(/function...{[^{}]+split\(""\)[^{}]+join\(""\)}/)[0];
    var sigarr = sigfun_text.split(";");
    var sigresult = [];
    for (let i = 1; i < sigarr.length - 1; i++) {
        var obj_name = sigarr[i].split(".")[0];
        var sigarritem = sigarr[i].split(".")[1].replace("(", ",").replace(")", ",").split(",");
        var fun_name = sigarritem[0];
        var param1 = sigarritem[1];
        var param2 = sigarritem[2];
        sigresult.push([fun_name, param1, param2]);
    }
    const data = base_js_text.match(new RegExp(`var ${obj_name}\=\{(.*?)\}\}`))[0];
	const scramble_calls = sigresult.map(([fun_name, arg1, arg2]) => [fun_name, Number(arg1), Number(arg2)]);
    const scramble_names = [...new Set(scramble_calls.map(([fun_name]) => fun_name))]
	const name_to_fun = Object.fromEntries(
        scramble_names.map(fun_name => {
            const fun_pattern = new RegExp(`${fun_name}:function.+?}`)
            const fun_text = data.match(fun_pattern)[0]
            const [, fun] = SCRAMBLES.find(([key]) => fun_text.includes(key))
            return [fun_name, fun]
        })
    )
	return string =>
		scramble_calls.reduce(
			(chars, [fun_name, arg1, arg2]) =>
				name_to_fun[fun_name](
					isNaN(arg1) ? chars : arg1,
					isNaN(arg2) ? chars : arg2
				)
			, string.split('')
		).join('')
}

const SCRAMBLES = Object.entries({
	'reverse': (a, b) => {
		a.reverse()
		return a
	},
	'splice':  (a, b) => {
		a.splice(0, b)
		return a
	},
	'length':  (a, b) => {
		const c = a[0]
		a[0] = a[b % a.length]
		a[b] = c
		return a
	}
})

const get_youtube_playlist = async (url) => {
    try {
        const r = await ybCurl(url)
        var rx = /window\[\"ytInitialData\"\] \= \{(.*)\}/;
        var arr = r.match(rx);
        if (arr && arr.length > 0) {
            var json = JSON.parse('{' + arr[1] + '}');

            var title = json.microformat.microformatDataRenderer.title;
            var thumb = json.microformat.microformatDataRenderer.thumbnail.thumbnails[0].url;
            var videos = [];

            var contents = json.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents;
            var items = contents[0].itemSectionRenderer.contents[0].playlistVideoListRenderer.contents;

            for (let i = 0; i < items.length; i++) {
                var item = items[i];
                videos.push({
                    title: item.playlistVideoRenderer.title.runs[0].text,
                    thumb: item.playlistVideoRenderer.thumbnail.thumbnails[0].url.split("?")[0],
                    length: item.playlistVideoRenderer.lengthText.simpleText,
                    url: "/download?link=" + encodeURIComponent("https://www.youtube.com/watch?v=" + item.playlistVideoRenderer.videoId)
                })            
            }

            return {
                success: true,
                result: {
                    title,
                    videos,
                    thumb
                }
            }
        }

        return {
            success: false,
            result: null
        }

    } catch(err) {
        return {
            success: false,
            result: null
        }
    }
}

const get_youtube = async (url) => {   

    if (url.indexOf("/playlist") >= 0) {
        return get_youtube_playlist(url);
    }

    url = url.replace("/shorts/", "/watch?v=");

    var r, arr, rx = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
    var player = {};
    arr = url.match(rx);
    if (arr && arr.length > 0) {
        url = "https://www.youtube.com/get_video_info?html5=1&video_id=" + arr[1] + "&el=detailpage";
        try {
            r = await ybCurl(url);
console.log(r);
            const purl = new URL(url + "&" + r);
            player = JSON.parse(purl.searchParams.get("player_response"));
        } catch(err) {
            return {
                success: false,
                result: null,
                error: "RATE_LIMIT"
            }
        }
        if (player && "videoDetails" in player) {
            const title = player.videoDetails.title;
            const thumb = player.videoDetails.thumbnail.thumbnails[0].url;
            const streams = player.streamingData;
            let video = null;
            let audio = null;
            if ("formats" in streams) {
                for (let i = 0; i < streams.formats.length; i++) {
                    const format = streams.formats[i];
                    if (format.mimeType.indexOf("mp4a") >= 0) {
                        if ("url" in format) {
                            video = format.url;
                        } else {
                            var cipher;
                            if ("signatureCipher" in format) {
                                cipher = format.signatureCipher;
                            } else {
                                cipher = format.cipher;
                            }
                            var arr = cipher.split("&");
                            var s = "";
                            for (let j = 0; j < arr.length; j++) {
                                if (arr[j].indexOf("url=") >= 0) {
                                    video = decodeURIComponent(arr[j].split("url=")[1]);
                                }
                                if (arr[j].indexOf("s=") >= 0) {
                                    s = decodeURIComponent(arr[j].split("s=")[1]);
                                }
                            }
                            const signature = (await get_signature_function())(s);
                            //const signature = await get_sig(r.data, s);
                            video = video + "&sig=" + signature;
                        }
                        break;
                    }
                }
     
                if ("adaptiveFormats" in streams) {
                    for (let i = 0; i < streams.adaptiveFormats.length; i++) {
                        const format = streams.adaptiveFormats[i];
                        if (format.mimeType.indexOf("mp4a") >= 0) {
                            var url = null;
                            if ("url" in format) {
                                url = format.url;
                            } else {
                                var cipher;
                                if ("signatureCipher" in format) {
                                    cipher = format.signatureCipher;
                                } else {
                                    cipher = format.cipher;
                                }
                                var arr = cipher.split("&");
                                var s = "";
                                for (let j = 0; j < arr.length; j++) {
                                    if (arr[j].indexOf("url=") >= 0) {
                                        url = decodeURIComponent(arr[j].split("url=")[1]);
                                    }
                                    if (arr[j].indexOf("s=") >= 0) {
                                        s = decodeURIComponent(arr[j].split("s=")[1]);
                                    }
                                }
                                const signature = (await get_signature_function(r))(s);
                                // const signature = await get_sig(r.data, s);
                                url = url + "&sig=" + signature;
                            }
                            audio = url;
                        }
                    }
                }
            } else {
                if ("hlsManifestUrl" in streams) {
                    video = streams.hlsManifestUrl
                }
            }
            if (video) {
                return {
                    success: true,
                    result: {
                        title,
                        video,
                        audio,
                        thumb
                    }
                }
            }
        }
    }
    return {
        success: false,
        result: null
    }
}

get_youtube("https://www.youtube.com/watch?v=ttWQK5VXskA").then((res) => {
    console.log(res);
})

