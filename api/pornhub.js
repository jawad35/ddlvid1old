"use strict";

const axios = require('axios');
const { api_url } = require('../server');
const { h } = require('../hashMe');

const getDownloadUrlFromKey = async (key) => {
    const pageUrl = `https://www.pornhub.com/view_video.php?viewkey=${key}`;
    const res = await axios.get(pageUrl, {
        headers: {
            'user-agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.106 Safari/537.36"
        }
    });
    const html = res.data;

    let title = "PornHub Video";
    let arr = html.match(/og\:title\" content\=\"(.*?)\"/);
    if (arr && arr.length > 0) {
        title = arr[1];
    }
    
    const matches = html.match(new RegExp("qualityItems\_(.*?) = (.*?);\n"));
    if (matches) {
        const json = JSON.parse(matches[2]);
        return {
            title,
            urls: json
        }
    }

    return {
        title,
        urls: []
    };
};

const humanFileSize = (bytes, si=false, dp=1) => {
    const thresh = si ? 1000 : 1024;
    if (Math.abs(bytes) < thresh) {
        return bytes + ' B';
    }
    const units = si 
        ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'] 
        : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
    let u = -1;
    const r = 10**dp;
    do {
        bytes /= thresh;
        ++u;
    } while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < units.length - 1);
    return bytes.toFixed(dp) + ' ' + units[u];
}

const get_filesize = async (url) => {
    const r = await axios.head(url);
    return humanFileSize(r.headers['content-length']);
};

const get_pornhub = async (url) => {
    var regex = /viewkey\=(\w+)/i;
    const match = regex.exec(url);
    let id = null;
    if (match && match.length > 1) {
        id = match[1];
    } else {
        return {
            success: false,
            result: null,
            error: "URL invalid"
        }
    }
    const info = await getDownloadUrlFromKey(id);
    const urls = info.urls;
    const videos = [];
    for (let i = 0; i < urls.length; i++) {
        const item = urls[i];
        //const size = await get_filesize(item.url);
        if (item.url != "") {
            videos.push({
                quality: item.text,
                url: api_url + "/api/v1/download-video?u=" + encodeURIComponent(item.url) + "&h=" + encodeURIComponent(h(item.url)) + "&t=" + encodeURIComponent(info.title),
                //size
            })
        }
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

    return videos;
};

// get_pornhub("https://www.pornhub.com/view_video.php?viewkey=ph5ecb2f450f28d").then((res) => {
//     console.log(res)
// })

module.exports = {
    get_pornhub
};
