"use strict";

const axios = require('axios');
// const { api_url } = require('../server');
const api_url = "";
const { h } = require('../hashMe');
const mcache = require('memory-cache');
const SignatureDecryptor = require("./yb_signature");

var base_url = "";
var sig = new SignatureDecryptor();
const user_agent = "Mozilla/5.0 (X11; Linux x86_64; rv:68.0) Gecko/20100101 Firefox/68.0";

const get_baseurl = async () => {
    return base_url;
}

const get_ybcookie = async () => {
    var fs = require('fs');
    return new Promise((resolve) => {
        fs.readFile("../yb_cookie.txt", 'utf8', function(err, data) {
            if (err) throw err;
            resolve(data.replace(/\n/g, ''));
        });      
    });
};

const ybCurl = async (url) => {
    const cookie = await get_ybcookie();

    const exec = require('child_process').exec;
    return new Promise((resolve) => {
        let command = "curl '" + url + "' -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8' -H 'Accept-Language: en-US,en;q=0.5' --compressed -H 'Connection: keep-alive' -H 'Cookie: " + cookie + "' -H 'Upgrade-Insecure-Requests: 1' -H 'TE: Trailers'";
        exec(command, function(error, stdout, stderr){
            resolve(stdout); 
        });
    })
}

async function get_signature_function(signature) {
    const url = await get_baseurl();
	var base_js_text = await axios.get(url)
    base_js_text = base_js_text.data.replace(/(\r\n|\n|\r)/gm,"");
    sig.getCryptoFunctions(base_js_text);
    return sig.decrypt(signature);
}

const get_youtube = async (url) => {
    url = url.replace("/shorts/", "/watch?v=");

    var r, arr, rx = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
    arr = url.match(rx);
    if (arr.length > 0) {
        url = "https://www.youtube.com/watch?v=" + arr[1] + "&has_verified=1";
        try {
            r = await ybCurl(url)
            if (r.indexOf("ytInitialPlayerResponse") < 0) {
                throw 'mp4 not found!';
            }

            const relative_url = r.match(/"(\/[^"]+\/base.js)"/)[1];
            if (!relative_url)
                throw 'could not find base.js url in watch_text';
            base_url = 'https://www.youtube.com' + relative_url;
            
        } catch(err) {
            return {
                success: false,
                result: null,
                error: "RATE_LIMIT"
            }
        }
        var json = r.match(/ytInitialPlayerResponse\s*=\s*([^\n]+?});/);
        if (json && json.length > 1) {
            json = JSON.parse(json[1]);

            const title = json.videoDetails.title;
            const thumb = json.videoDetails.thumbnail.thumbnails[0].url;
            const streams = json.streamingData;
            let video = null;
            let audio = null;
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
                        const signature = await get_signature_function(s);
                        video = video + "&sig=" + signature;
                    }
                    break;
                }
            }
            if (video) {
                video = api_url + "/api/v1/youtube-mp4?u=" + encodeURIComponent(video) + "&h=" +encodeURIComponent(h(video)) + "&t=" + encodeURIComponent(title)
            }
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
                        const signature = await get_signature_function(s);
                        url = url + "&sig=" + signature;
                    }
                    audio = api_url + "/api/v1/youtube-mp3?u=" + encodeURIComponent(url) + "&h=" +encodeURIComponent(h(url)) + "&t=" + encodeURIComponent(title);
                }
            }
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
    return {
        success: false,
        result: null
    }
}

get_youtube("https://www.youtube.com/watch?v=rAh7q6qGaL4").then((res) => {
    console.log(res);
})

module.exports = {
    get_youtube
};
