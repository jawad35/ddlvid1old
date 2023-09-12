"use strict";

const axios = require('axios');

const decodeHTMLEntities = (text) => {
    var entities = [
        ['amp', '&'],
        ['apos', '\''],
        ['#x27', '\''],
        ['#x2F', '/'],
        ['#39', '\''],
        ['#47', '/'],
        ['lt', '<'],
        ['gt', '>'],
        ['nbsp', ' '],
        ['quot', '"']
    ];

    for (var i = 0, max = entities.length; i < max; ++i) 
        text = text.replace(new RegExp('&'+entities[i][0]+';', 'g'), entities[i][1]);

    return text;
};

const get_real_pin_url = async (url) => {
    const r = await axios.get(url, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1'
        }
    })
    return r.request.res.responseUrl;
};

const get_pinterest = async (url) => {
    try {
        if (url.indexOf("pin.it") >= 0) {
            url = await get_real_pin_url(url);
        }
        var id = "";
        var regex = /pin\/(\d+)/i;
        const match = regex.exec(url);
        if (match && match.length > 1) {
            id = match[1];
        }
        url = "https://www.pinterest.com/pin/" + id + "/";

        const r = await axios.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1'
            }
        })

        let data = r.data;
        data = decodeHTMLEntities(data.replace(/\n/g, " "));
        let title = "Pinterest Video";
        let video = null;
        let title_arr = data.match(/<title(.*?)>(.*?)<\/title>/);
        if (title_arr && title_arr.length > 2) {
            title = title_arr[2];
        }
        
        let video_arr = data.match(/https\:\/\/v.pinimg.com\/videos\/(.*?)\.mp4/);
        if (video_arr && video_arr.length > 1) {
            video = "https://v.pinimg.com/videos/" + video_arr[1] + ".mp4";
        }
        
        if (video && video !== "") {
            return {
                success: true,
                result: {
                    title,
                    video,
                    thumb: "https://s.pinimg.com/images/facebook_share_image.png"
                }
            }
        }

        video_arr = data.match(/https\:\/\/i.pinimg.com\/(.*?)\.gif/);
        if (video_arr && video_arr.length > 1) {
            video = "https://i.pinimg.com/" + video_arr[1] + ".gif";
        }

        if (video && video !== "") {
            return {
                success: true,
                result: {
                    title,
                    gif: video,
                    thumb: video
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

// get_pinterest("https://pin.it/6db672o").then(res => {
//     console.log(res.result);
// });

module.exports = {
    get_pinterest
};