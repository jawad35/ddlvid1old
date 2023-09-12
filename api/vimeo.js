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

const get_vimeo = async (url) => {
    try {
        let r = await axios.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:68.0) Gecko/20100101 Firefox/68.0'
            }
        })

        let data = r.data;
        let title = "Vimeo Video";
        let thumb = null;
        let video = null;
        let title_arr = data.match(/<title>(.*)<\/title>/);
        if (title_arr && title_arr.length > 1) {
            title = decodeHTMLEntities(title_arr[1]);
        }

        let thumb_url = data.match(/i.vimeocdn.com(.*?).jpg/);
        if (thumb_url && thumb_url.length > 1) {
            thumb = "https://i.vimeocdn.com" + thumb_url[1] + ".jpg";
        }
        
        var urls = data.match(/\"player\"\:\{\"config_url\"\:\"(.*?)\"/);
        if (urls && urls.length > 1) {
            let config = urls[1].replace(/\\\//g, "/");
            r = await axios.get(config, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:68.0) Gecko/20100101 Firefox/68.0'
                }
            })
            data = r.data;
            if ("request" in data && "files" in data.request && "progressive" in data.request.files) {
                if (data.request.files.progressive.length > 0) {
                    video = data.request.files.progressive[0].url;
                }
            }
            if ("video" in data && "thumbs" in data.video && "base" in data.video.thumbs) {
                thumb = data.video.thumbs.base;
            }
            if ("video" in data && "title" in data.video) {
                title = data.video.title;
            }
        }

        if (video && video !== "") {
            return {
                success: true,
                result: {
                    title,
                    video,
                    thumb
                }
            }
        } else {
            return {
                success: false,
                result: null
            }
        }
    } catch (error) {
        return {
            success: false,
            result: null,
            error: "TechnicalError"
        }
    }
};

module.exports = {
    get_vimeo
};