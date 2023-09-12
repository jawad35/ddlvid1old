"use strict";

const axios = require('axios');
const { api_url } = require('../server');
const { h } = require('../hashMe');

const get_direct_link = (u) => {
    const url = new URL(u);
    if (url.searchParams.get('uri')) {
        return url.searchParams.get('uri');
    } else {
        return u;
    }
}

const get_instagram = async (url) => {
    try {
        const r = await axios.get("http://62.171.132.255:8019/download?url=" + encodeURIComponent(url));
        let data = r.data;

        if ("url" in data) {
            let videos = [];
            for (let i = 0; i < data.url.length; i++) {
                videos.push({
                    url: get_direct_link(data.url[i].url),
                    type: 'video'
                })
            }

            return {
                success: true,
                result: {
                    title: data.meta.title,
                    videos,
                    thumb: get_direct_link(data.thumb)
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

const get_user_id = async (username) => {
    let url = "http://142.93.245.245:5009/get-user?username=" + username;
    try {
        const r = await axios.get(url)
        return r.data.graphql.user.id;
    } catch (error) {
        return "";
    }
};

const get_instagram_stories = async (url) => {
    try {
        url = (url + "/").replace("//", "/");
        var regex = /instagram.com\/(.*?)\//i;
        if (url.indexOf("/stories/") > 0) {
            regex = /instagram.com\/stories\/(.*?)\//i;
        }
        const match = regex.exec(url);
        let username = "";
        if (match && match.length > 1) {
            username = match[1];
        }
        const user_id = await get_user_id(username);
        
        if (user_id !== "") {
            url = 'http://142.93.245.245:5009/user-stories?user_id=' + user_id;
            const r = await axios.get(url)
            let data = r.data;

            if ("graphql" in data) {
                data = data.graphql;
            }

            if ("data" in data) {
                data = data.data;
            }

            if ("reels_media" in data) {
                data = data.reels_media[0];
                if ("items" in data && data.items.length > 0) {
                    let videos = [];
                    for (let i = 0; i < data.items.length; i++) {
                        var video = data.items[i];
                        if (video.__typename === "GraphStoryVideo" && video.video_resources.length > 0) {
                            var video_url = video.video_resources[0].src;
                            video_url = api_url + "/api/v1/download-video?u=" + encodeURIComponent(video_url) + "&h=" + encodeURIComponent(h(video_url)) + "&t=" + encodeURIComponent(username + " instagram story");
                            videos.push({
                                url: video_url,
                                type: 'video'
                            });
                        } 
                        if (video.__typename === "GraphStoryImage") {
                            var video_url = video.display_url;
                            video_url = api_url + "/api/v1/download-image?u=" + encodeURIComponent(video_url) + "&h=" + encodeURIComponent(h(video_url)) + "&t=" + encodeURIComponent(username + " instagram story");
                            videos.push({
                                url: video_url,
                                type: 'image'
                            });
                        }
                    }
                    return {
                        success: true,
                        result: {
                            title: "@" + username + " instagram stories",
                            videos
                        }
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

// get_instagram_stories("https://www.instagram.com/stories/rifka.bjm/2412865772684972126/").then((res) => {
//     console.log(res);
// });

module.exports = {
    get_instagram,
    get_instagram_stories
};