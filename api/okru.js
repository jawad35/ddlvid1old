"use strict";

const axios = require('axios');
const { api_url } = require('../server');
const { h } = require('../hashMe');

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

const get_okru = async (url) => {
    try {
        const r = await axios.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
                'Cookie': 'bci=2248948090884175067; _statid=0e386871-90eb-4184-acf4-4948ae3f8da6; tmr_reqNum=25; tmr_lvid=ad527853e7b95341c50925303e4a08ff; tmr_lvidTS=1602391818827; DCAPS=dpr%5E2%7Cvw%5E375%7Csw%5E375%7C; JSESSIONID=9feaaa5ee738066d25b9b5a65b0a4357c1b1fb6e07d9ac5c.8136eeba; SERVERID=61ea67c0256e8c8888360e9b0b2071a6|X5mDS; reg_conf_ph_y=1; AUTHCODE=gwmIzksiwqDD-9sI_G0uyB5Lpr3duhgsBD-deb71Mbl7FjLbktFtnpn2FSioHPVF3HTvaQNW6P-mXeiWKzntUeuVljMv6-Z0aD1JCtFkKnNZyoPmqg3OENx_GcKglDR1BE0cFS6nBb31xP8_3; community-lang=en; __seed=-48798736'
            }
        })

        let data = r.data;
        let video = data.match(/data-video=\"(.*?)\"/);
        if (video && video.length > 1) {
            if (video[1] !== "") {
                video = JSON.parse(decodeHTMLEntities(video[1]));
                let videoURL = video.videoSrc;
                videoURL = videoURL.replace("/dk?", "/dk/video.mp4?");
                videoURL = videoURL.replace("st.mq=2", "st.mq=3");
                videoURL = videoURL.replace("st.hls=on", "st.hls=off");
                return {
                    success: true,
                    result: {
                        title: video.videoName,
                        video: api_url + "/api/v1/download-video?u=" + encodeURIComponent(videoURL) + "&h=" + encodeURIComponent(h(videoURL)) + "&t=" + encodeURIComponent(video.videoName),
                        thumb: video.videoPosterSrc
                    }
                }
            }
        }
        
        return {
            success: false,
            result: null,
        }
    } catch (error) {
        return {
            success: false,
            result: null,
            error: "TechnicalError"
        }
    }
};

// get_okru("https://ok.ru/live/1105961492147").then(res => {
//     console.log(res.result);
// });

module.exports = {
    get_okru
};