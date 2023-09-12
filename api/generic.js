"use strict";

const youtubedl = require('youtube-dl')

const downloadVideoAsync = (url, original) => {
    return new Promise((resolve) => {
        const options = [];
        youtubedl.getInfo(url, options, (err, info) => {
            if (err) {
                resolve({
                    success: false,
                    result: null
                });
            } else {
                var video_url = info.url;
                if (video_url.indexOf(".m3u8") > 0) {
                    for (let i = 0; i < info.formats.length; i++) {
                        var format = info.formats[i];
                        if (format.format.indexOf("hls") < 0) {
                            video_url = format.url;
                        }
                    }
                }

                if (original) {
                    resolve({
                        success: true,
                        result: {
                            http_headers: info.http_headers,
                            title: info.title,
                            original_video: video_url
                        }
                    });
                } else {
                    resolve({
                        success: true,
                        result: {
                            title: info.title,
                            video: url,
                            download: url,
                            thumb: info.thumbnail
                        }
                    });
                }
            }
        });
    })
}

const get_video = async (url) => {    
    let video = await downloadVideoAsync(url, false);
    return video;
}

const get_original_video = async (url) => {    
    let video = await downloadVideoAsync(url, true);
    return video;
}

// get_video("https://www.pornhub.com/view_video.php?viewkey=ph5ecfd57a2698a").then((res) => {
//     console.log(res);
// })

module.exports = {
    get_video,
    get_original_video
};