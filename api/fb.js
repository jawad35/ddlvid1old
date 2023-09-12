"use strict";

const axios = require('axios');

const get_redirect = async (url) => {
    var r = await axios({
        url,
        headers: {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-language": "fr,en-US;q=0.9,en;q=0.8",
            "cache-control": "max-age=0",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "same-origin",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1"
        }
    });
    return r.request.res.responseUrl;
};

const get_info = async (url) => {
    const Entities = require('html-entities').XmlEntities;
    const entities = new Entities();

    var r = await axios({
        url: "https://www.facebook.com/plugins/post.php?href=" + encodeURIComponent(url),
        headers: {
	    "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:68.0) Gecko/20100101 Firefox/68.0",
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-language": "fr,en-US;q=0.9,en;q=0.8",
            "cache-control": "max-age=0",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "same-origin",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1"
        }
    });

    var video_url = "";
    var video_hd_url = "";

    var arr = r.data.match(/\"sd_src_no_ratelimit\":\"(.*?)\"/i);
    if (arr && arr.length > 0) {
        video_url = JSON.parse('"' + arr[1] + '"');
    } else {
        var arr = r.data.match(/\"sd_src\":\"(.*?)\"/i);
        if (arr && arr.length > 0) {
            video_url = JSON.parse('"' + arr[1] + '"');
        }
    }

    var arr = r.data.match(/\"hd_src_no_ratelimit\":\"(.*?)\"/i);
    if (arr && arr.length > 0) {
        video_hd_url = JSON.parse('"' + arr[1] + '"');
    } else {
        var arr = r.data.match(/\"hd_src\":\"(.*?)\"/i);
        if (arr && arr.length > 0) {
            video_hd_url = JSON.parse('"' + arr[1] + '"');
        }
    }
    var title = "Facebook Video";
    var arr = r.data.match(/\<a href=\"https\:\/\/www.facebook.com\/watch\/(.*?)\"\>(.*?)\<\/a\>/);
    if (arr && arr.length > 1) {
        title = entities.decode( arr[2] );
    }

    if (video_url === "") {
        return get_info2(url);
    }

    return {
        title,
        video_url,
        video_hd_url
    };

};

const get_info2 = async (url) => {
    const Entities = require('html-entities').XmlEntities;
    const entities = new Entities();

    var r = await axios({
        url,
        headers: {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-language": "fr,en-US;q=0.9,en;q=0.8",
            "cache-control": "max-age=0",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "same-origin",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1"
        }
    });

    var video_url = "";
    var video_hd_url = "";

    
    var arr = r.data.match(/\"video\"\:\[(.*?)\]/i);
    if (arr && arr.length > 0) {
        var vids = JSON.parse('[' + arr[1] + ']');
        for (let i = 0; i < arr.length; i++) {
            video_url = vids[i].url;
            if (vids[i].mime_codec.indexOf("video/mp4") >= 0) {
                break;
            }
        }
    }

    var title = "Facebook Video";
    var arr = r.data.match(/\"og\:description\" content\=\"(.*?)\"/);
    if (arr && arr.length > 0) {
        title = entities.decode(arr[1]);
    }

    return {
        title,
        video_url,
        video_hd_url
    };

};

const get_facebook = async (url) => {
    try {
        url = url.replace("/m.facebook.com", "/www.facebook.com");
        url = url.replace("/mobile.facebook.com", "/www.facebook.com");
        url = url.replace("/0.facebook.com", "/www.facebook.com");
        
        if (url.indexOf("fb.watch") >= 0 || url.indexOf("fbwat.ch") >= 0) {
            url = await get_redirect(url);
        }

        const videos = [];
        var info = await get_info(url, false);
        if (info) {
            if (info.video_hd_url !== "") {
                videos.push({
                    quality: "HD",
                    url: info.video_hd_url,
                    download: api_url + "/api/v1/download-video?u=" + encodeURIComponent(info.video_hd_url) + "&h=" + encodeURIComponent(h(info.video_hd_url)) + "&t=" + encodeURIComponent((new Date()).getTime())
                })
            }
            if (info.video_url !== "") {
                videos.push({
                    quality: "SD",
                    url: info.video_url,
                    download: api_url + "/api/v1/download-video?u=" + encodeURIComponent(info.video_url) + "&h=" + encodeURIComponent(h(info.video_url)) + "&t=" + encodeURIComponent((new Date()).getTime())
                })
            }
            if (videos.length > 0) {
                return {
                    success: true,
                    result: {
                        title: info.title,
                        videos,
                        thumb: null,
                        audio: null
                    }
                }
            }    
        }   

        return {
            success: false,
            result: null
        }
    } catch (error) {
        console.log(error)
        return {
            success: false,
            result: null,
            error: "TechnicalError"
        }
    }
};

// get_facebook("https://www.facebook.com/agtauditions/videos/259604532140718").then(res => {
//     console.log(res.result);
// });

get_info("https://www.facebook.com/agtauditions/videos/259604532140718").then((r) => console.log(r));
