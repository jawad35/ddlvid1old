"use strict";

var api_url = "";
var yb_cookies = "VISITOR_INFO1_LIVE=z3J-tzCMVcM; __Secure-3PSID=3QduDInC1-cfiUsWohAOu4D9uixMdDmicLZsMj_AZ6dCwxdY1sIBs9p9WMBcIo2HQ9IOEA.; __Secure-3PAPISID=DqoWw5xFjsvngz2h/ARUBTwmX_EKSJX2FN; PREF=f5=20030&f6=400&al=en+fr+ar-MA; _ga=GA1.2.930716832.1596102468; __Secure-3PSIDCC=AJi4QfG9QxZwqj9ofmGMUJ2tDcgY9or9UJlFdLqsSCvLHHayU9uZit8u2iFp0BeZA0ozLILOqF6c; GPS=1; SID=3QduDInC1-cfiUsWohAOu4D9uixMdDmicLZsMj_AZ6dCwxdYOINQcsWStlUdz6JES7oTWA.; HSID=Aszrt6uJVPw1tTCjU; SSID=A-P3HrNiEjDXyFX08; APISID=BcWoHHrzCe2Aa8TO/AS-IJRyJ9-03nLn0Z; SAPISID=DqoWw5xFjsvngz2h/ARUBTwmX_EKSJX2FN; LOGIN_INFO=AFmmF2swRAIgE9iuSARY-XESRaabY7v5jllao-6BRjKfxa2INVntqIQCIF37oEm---SknOvsvtmqznzmXplpChE35DNw3UOKD2hH:QUQ3MjNmek5LbHdfOFRvOUdOQU1rWVdrWlN6aEtmSTV1eHh1VWZTSFpfRmt5YUtaRUMxdkQxb0ZNVFB3X29kd04xUE1UOWp1aTVvSnVITVhwd0Z5a25ZY0dLV0N3MWd4djVYcjkwLWtmMVd5LW0wc2pZTEhpNlhxeVdSMkwwZnNTYmhhV055Y09VaWpzaHZUQ1QxVGo4VGZJRGcyR0JBN2Vhd01FdENXdzNJV3drX1dPVEY5bjFz; YSC=vmLWNSTcPGE; SIDCC=AJi4QfENDAd7Azc6ZgXQctAIWhmZ3rAhmTVxl2WE2nlXUqwO34Eioq0bZNRZ8ewWdKSbp2VT_g";
var h = () => {};

const user_agent = "Mozilla/5.0 (X11; Linux x86_64; rv:68.0) Gecko/20100101 Firefox/68.0";
var cookies = yb_cookies;

const ybCurl = (url) => {
    const exec = require('child_process').exec;
    return new Promise((resolve) => {
        exec("curl '" + url + "' -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8' -H 'Accept-Language: en-US,en;q=0.5' --compressed -H 'Connection: keep-alive' -H 'Cookie: " + cookies + "' -H 'Upgrade-Insecure-Requests: 1' -H 'TE: Trailers'", function(error, stdout, stderr){
            resolve(stdout); 
        });
    })
}

async function get_signature_function(watch_text) {
	const relative_url = watch_text.match(/"(\/[^"]+\/base.js)"/)[1]
	if (!relative_url)
        throw 'could not find base.js url in watch_text';
	const base_js_text = await ybCurl('https://www.youtube.com' + relative_url, {
        headers: {
            "User-Agent": user_agent,
            "Cookie": cookies
        }
    })
		.then(r => r)
	return extract_signature_function(base_js_text)
}

function extract_signature_function(base_js_text) {
    base_js_text = base_js_text.replace(/\n/g, "");
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
    const data = base_js_text.match(new RegExp(`var ${obj_name}={.+?};`))[0];
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
    arr = url.match(rx);
    if (arr && arr.length > 0) {
        url = "https://www.youtube.com/watch?v=" + arr[1] + "&has_verified=1";
        try {
            r = await ybCurl(url)
            if (r.indexOf("mp4a") < 0) {
                throw 'mp4 not found!';
            }
        } catch(err) {
            return {
                success: false,
                result: null,
                error: "RATE_LIMIT"
            }
        }
	console.log(r)
	r = r.replace('window["ytInitialPlayerResponse"]', 'var ytInitialPlayerResponse');
        var json = r.match(/var ytInitialPlayerResponse = (.*);\n/);
        if (json && json.length > 1) {
            json = JSON.parse(json[1].split("</script>")[0]);
            //json = JSON.parse(json.args.player_response);
            const title = json.videoDetails.title;
            const thumb = json.videoDetails.thumbnail.thumbnails[0].url;
            const streams = json.streamingData;
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
                            const signature = (await get_signature_function(r))(s);
                            //const signature = await get_sig(r.data, s);
                            video = video + "&sig=" + signature;
                        }
                        break;
                    }
                }
                if (video) {
                    video = api_url + "/api/v1/youtube-mp4?u=" + encodeURIComponent(video) + "&h=" +encodeURIComponent(h(video)) + "&t=" + encodeURIComponent(title)
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
                            audio = api_url + "/api/v1/youtube-mp3?u=" + encodeURIComponent(url) + "&h=" +encodeURIComponent(h(url)) + "&t=" + encodeURIComponent(title);
                        }
                    }
                }
            } else {
                if ("hlsManifestUrl" in streams) {
                    video = streams.hlsManifestUrl
                    video = api_url + "/api/v1/ythls-download?u=" + encodeURIComponent(streams.hlsManifestUrl) + "&h=" +encodeURIComponent(h(streams.hlsManifestUrl)) + "&t=" + encodeURIComponent(title);
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

module.exports = {
    get_youtube
};
