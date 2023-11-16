"use strict";

const { api_url } = require('../server');
const { h } = require('../hashMe');

const axios = require('axios');
const mcache = require('memory-cache');

const headers = {
    "authorization": "Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA"
};

const custom_headers = async () => {
    let h = headers;
    let cachedBody = mcache.get("twitter_guest_token");
    if (cachedBody) {
        h['x-guest-token'] = cachedBody;
    } else {
        const token = await get_guest_token();
        mcache.put("twitter_guest_token", token, 100 * 1000);
        h['x-guest-token'] = token;
    }
    return h;
}

const get_proxy = async () => {
    var fs = require('fs');
    return new Promise((resolve) => {
        fs.readFile("proxy.txt", 'utf8', function(err, data) {
            if (err) throw err;
            if (data != "") {
                data = data.split("\n");
                data = data[Math.floor(Math.random() * data.length)];
                resolve(new URL(data));
            } else {
                resolve(null);
            }
        });      
    });
};

const get_guest_token = async () => {
    const r = await axios.post("https://api.twitter.com/1.1/guest/activate.json", {}, {
        headers
    })
    return ("guest_token" in r.data) ? r.data.guest_token : ""
};


const get_user_id = async (username) => {
    const h = await custom_headers();
    const url = "https://twitter.com/i/api/graphql/esn6mjj-y68fNAj45x5IYA/UserByScreenName?variables=%7B%22screen_name%22%3A%22" + username.toLowerCase() + "%22%2C%22withHighlightedLabel%22%3Atrue%7D";
    try {
        const r = await axios.get(url, {
            headers: h
        })
        if ("data" in r.data && "user" in r.data.data) {
            const user = r.data.data.user;
            return user.rest_id;
        }
    } catch(err) {}
    return null;
};

        
const get_tweet = async (id) => {
    var p = await get_proxy();
    let proxy = {
        host: p.hostname,
        port: p.port
    }
    if (p.username !== '') {
        proxy.auth = {
            username: p.username,
            password: p.password 
        }
    }

    if (id.indexOf("t.co") >= 0) {
        try {
            const rr = await axios({
                url: id,
                headers: {
                    "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:68.0) Gecko/20100101 Firefox/68.0"
                },
                proxy
            })
            id = rr.request.res.responseUrl;
            var regex = /status\/(\d+)/i;
            const match = regex.exec(rr.data);
            if (match && match.length > 1) {
                id = match[1];
            } else {
                return {
                    success: false,
                    result: null,
                    error_message: "Twitter URL is invalid."
                }
            }
        } catch(err) {
            return {
                success: false,
                result: null,
                error_message: "Twitter URL is invalid."
            }
        }
    } else {
        if (id.indexOf("twitter.com") >= 0) {
            var regex = /status\/(\d+)/i;
            const match = regex.exec(id);
            if (match && match.length > 1) {
                id = match[1];
            } else {
                return {
                    success: false,
                    result: null,
                    error_message: "Twitter URL is invalid."
                }
            }
        }
    }
    let url = "https://twttrapi.p.rapidapi.com/get-tweet?tweet_id=" + id;
    try {
        let r = await axios.get(url, {
            headers: {
                'X-RapidAPI-Key': '07adaaa04emshebef44a15906b7cp11a4f2jsn8ecaa19035b4',
                'X-RapidAPI-Host': 'twttrapi.p.rapidapi.com'
            }
        })
        
        let data = r.data.data.tweet_result.result.legacy;
        let result = null;

        if (typeof data !== "undefined" && "extended_entities" in data) {
            let text = "";
            if ("text" in data) {
                text = data.text;
            }
            if ("full_text" in data) {
                text = data.full_text;
            }
            text = text.replace(/(?:https?|ftp):\/\/[\n\S]+/g, '');
            result = {
                id,
                title: text,
                videos: [],
                thumb: null
            };
            const entites = data.extended_entities;
            if ("media" in entites) {
                const medias = entites.media;
                medias.forEach(media => {
                    if ("media_url_https" in media) {
                        result.thumb = media.media_url_https;
                    }
                    if ("video_info" in media) {
                        media.video_info.variants.forEach(video => {
                            if (video.content_type === "video/mp4") {
                                let quality = "Low";
                                let index = 2;
                                if (video.bitrate >= 800000 && video.bitrate < 1200000) {
                                    quality = "Medium";
                                    index = 1;
                                }
                                if (video.bitrate >= 1200000) {
                                    quality = "High";
                                    index = 0;
                                }
                                result.videos.push({
                                    bitrate: video.bitrate,
                                    url: video.url,
                                    download: video.url,
                                    quality,
                                    index
                                });
                            }
                        });
                    }
                });
                result.videos.sort(function(a, b){
                    return a.index - b.index;
                });
                result.featured_video = null;
                if (result.videos.length > 0) {
                    result.featured_video = result.videos[0].url;
                }
            }
                
            if (result.videos.length === 0) {
                return {
                    success: false,
                    result: null
                }
            } else {
                return {
                    success: true,
                    result
                }
            }
        }

        if ("quoted_status_id_str" in data && data.quoted_status_id_str) {
            return get_tweet(data.quoted_status_id_str);
        }
    
        return {
            success: false,
            result
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

const get_fleets = async (url) => {
    url = url.split("#")[0];
    url = url.split("?")[0];
    url = url + "/";
    var username = "";
    var regex = /twitter.com\/(.*?)\//i;
    const match = regex.exec(url);
    if (match && match.length > 1) {
        username = match[1];
    } else {
        return {
            success: false,
            result: null,
            error: "Username not found."
        }
    }
    const user_id = await get_user_id(username);
    if (!user_id) {
        return {
            success: false,
            result: null,
            error: "User not found."
        }
    }
    const r = await axios.get("https://api.twitter.com/fleets/v1/user_fleets?user_id=" + user_id + "&exclude_user_data=true", {
        headers: {
            "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:68.0) Gecko/20100101 Firefox/68.0",
            "Accept": "*/*",
            "Accept-Language": "en-US,en;q=0.5",
            "authorization": "Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA",
            "x-twitter-auth-type": "OAuth2Session",
            "x-twitter-client-language": "en",
            "x-twitter-active-user": "yes",
            "content-type": "application/x-www-form-urlencoded",
            "x-csrf-token": "812ef74fa8c41b861dc8923a1bd4760b71bb2a104b52c8fb3ac1057cb94add7d8b209fc70bf2d1356f6f0fe83f896a0d056f69dba26a7bbb0fe1c49449724357dd11bad67087c04f868cc17baf2b07b9",
            "Cache-Control": "max-age=0",
            'Cookie': 'personalization_id="v1_ZtbplK22EvJvu392ASSK5g=="; guest_id=v1%3A160958672604797146; gt=1345330381726375936; ct0=812ef74fa8c41b861dc8923a1bd4760b71bb2a104b52c8fb3ac1057cb94add7d8b209fc70bf2d1356f6f0fe83f896a0d056f69dba26a7bbb0fe1c49449724357dd11bad67087c04f868cc17baf2b07b9; _twitter_sess=BAh7CyIKZmxhc2hJQzonQWN0aW9uQ29udHJvbGxlcjo6Rmxhc2g6OkZsYXNo%250ASGFzaHsABjoKQHVzZWR7ADoPY3JlYXRlZF9hdGwrCONs2MJ2AToMY3NyZl9p%250AZCIlMTkwMjEwOWFjNjRmMTllNDVmYTAxNTM5MmVkZmEzMzA6B2lkIiVlZDUx%250AN2MxNzMxNDBjZmNkN2E2ZDA1NDFmOWRjNjIxMjofbGFzdF9wYXNzd29yZF9j%250Ab25maXJtYXRpb24iFTE2MDk1ODY4NDczNTIwMDA6HnBhc3N3b3JkX2NvbmZp%250Acm1hdGlvbl91aWQiGDEzNDUzMzA1ODI4ODUxNzUyOTc%253D--81f6e07d399b3680fc4ba6d291493cb6f2a1e9ce; kdt=Vg440njw7db84ukMByDF3RrPpdJQreeBYsZEqWzh; twid=u%3D1345330582885175297; auth_token=362e0434e143e78c4df7fd6abffcc715a3717208',
            'TE': 'Trailers'
        }
    })
    const videos = [];
    if ("fleet_threads" in r.data) {
        const fleet_threads = r.data.fleet_threads;
        for (let i = 0; i < fleet_threads.length; i++) {
            const fleets = fleet_threads[i].fleets;
            for (let ii = 0; ii < fleets.length; ii++) {
                const media = fleets[ii];
                var url = "";
                if (media.media_key.media_category === "TWEET_IMAGE") {
                    url = media.media_entity.media_url_https;
                    url = api_url + "/api/v1/download-image?u=" + encodeURIComponent(url) + "&h=" + encodeURIComponent(h(url)) + "&t=" + encodeURIComponent(username + "_" + (new Date()).getTime());
                    videos.push({
                        url,
                        type: "image"
                    })
                }
                if (media.media_key.media_category === "TWEET_VIDEO") {
                    for (let u = 0; u < media.media_entity.media_info.video_info.variants.length; u++) {
                        const vidLink = media.media_entity.media_info.video_info.variants[u];
                        if (vidLink.content_type === "video/mp4") {
                            url = vidLink.url;
                        }
                    }
                    if (url !== "") {
                        url = api_url + "/api/v1/download-video?u=" + encodeURIComponent(url) + "&h=" + encodeURIComponent(h(url)) + "&t=" + encodeURIComponent(username + "_" + (new Date()).getTime());
                        videos.push({
                            url,
                            type: "video"
                        })
                    }
                }
            }
        }
    }
    return {
        success: true,
        result: {
            title: "@" + username + " Fleets",
            videos,
            thumb: null
        }
    }
};

module.exports = {
    get_tweet,
    get_fleets
};
