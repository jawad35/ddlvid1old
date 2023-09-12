"use strict";

const axios = require('axios');
//const { api_url } = require('../server');
//const { h } = require('../hashMe');

var api_url = "";
var h = () => {}

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

const get_triller = async (url) => {
    try {
        let r = await axios.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:68.0) Gecko/20100101 Firefox/68.0'
            }
        })
        let data = r.data;
        var regex = /data-id="(.*?)"/i;
        var match = regex.exec(data);
        if (match && match.length > 1) {
            r = await axios.get("https://v.triller.co/v1.5/api/videos/" + match[1]);
            if (r.data.status && r.data.videos.length > 0) {
                const video = r.data.videos[0];
                return {
                    success: true,
                    result: {
                        title: video.description,
                        video: video.video_url,
                        thumb: ("thumbnail_url" in video) ? video.thumbnail_url : null,
                        audio: ("audio_url" in video) ? video.audio_url : null
                    }
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

// get_triller("https://v.triller.co/yPkrz4").then((res) => {
//     console.log(res);
// });

module.exports = {
    get_triller
};