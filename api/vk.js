"use strict";

const axios = require('axios');
const { api_url } = require('../server');
const { h } = require('../hashMe');

const get_vk = async (url) => {
    try {
        const r = await axios.get(url, {
            headers: {
                "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:68.0) Gecko/20100101 Firefox/68.0"
            }
        })
        let data = r.data;

        let title = "VK Video";
        let arr = data.match(/og\:title\" content\=\"(.*?)\"/);
        if (arr && arr.length > 0) {
            title = arr[1];
        }

        let thumb = null;
        arr = data.match(/og\:image\" content\=\"(.*?)\"/);
        if (arr && arr.length > 0) {
            thumb = arr[1];
        }

        let videos = [];
        arr = [...data.matchAll(/\"cache(.*?)\"\:\"(.*?)\"/g)];
        if (arr && arr.length > 0) {
            for (let i = 0; i < arr.length; i++) {
                const video = arr[i];
                if (video.length > 2) {
                    var video_url = JSON.parse('"' + video[2] + '"');
                    videos.push({
                        quality: video[1] + 'p',
                        url: video_url,
                        download: api_url + "/api/v1/download-video?u=" + encodeURIComponent(video_url) + "&h=" + encodeURIComponent(h(video_url)) + "&t=" + encodeURIComponent(title)
                    })
                }
            }
        }

        if (videos.length > 0) {
            return {
                success: true,
                result: {
                    title,
                    thumb,
                    videos
                }
            }
        }

        return {
            success: false,
            result: null
        }
    } catch (error) {
        return {
            success: false,
            result: null,
            error: "TechnicalError"
        }
    }
};

// get_vk("https://vk.com/video-45745333_456298069").then((res) => {
//     console.log(res);
// });

module.exports = {
    get_vk
};