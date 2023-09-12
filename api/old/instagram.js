"use strict";

const axios = require('axios');
const { api_url } = require('../server');
const { h } = require('../hashMe');

const random_user_id = () => {
    let result = [];
    let hexRef = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
    for (let n = 0; n < 11; n++) {
      result.push(hexRef[Math.floor(Math.random() * 16)]);
    }
    return result.join('');
}

const get_instagram = async (url) => {
    var regex = /instagram.com\/(\w+)\/(.*?)\//i;
    const match = regex.exec(url + "/");
    if (match && match.length > 1) {
        url = "http://142.93.245.245:5009/get-post?shortcode=" + match[2];
    } else {
        return {
            success: false,
            result: null
        }
    }

    try {
        const r = await axios.get(url)

        let data = r.data;
        if (typeof data !== "string" && "graphql" in data) {
            if ("shortcode_media" in data.graphql) {
                data = data.graphql.shortcode_media;
            }
        }

        if (typeof data !== "string" && "data" in data) {
            if ("shortcode_media" in data.data) {
                data = data.data.shortcode_media;
            }
        }

        if (typeof data !== "string" && "display_url" in data) {
            let thumb = data.display_url;
            let title = "Instagram Video";
            if ("edge_media_to_caption" in data && data.edge_media_to_caption.edges && data.edge_media_to_caption.edges.length > 0) {
                title = data.edge_media_to_caption.edges[0].node.text;
            }
            let videos = [];
            if ("is_video" in data && data.is_video) {
                if ("video_url" in data) {
                    var video_url = data.video_url;
                    video_url = api_url + "/api/v1/download-video?u=" + encodeURIComponent(video_url) + "&h=" + encodeURIComponent(h(video_url)) + "&t=" + encodeURIComponent(title);
                    videos.push({
                        url: video_url,
                        type: 'video'
                    });
                }
                if ("edge_sidecar_to_children" in data && data.edge_sidecar_to_children.edges && data.edge_sidecar_to_children.edges.length > 0) {
                    for (var i = 0; i < data.edge_sidecar_to_children.edges.length; i++) {
                        var edge_sidecar_to_children_edge = data.edge_sidecar_to_children.edges[i].node;
                        if ("video_url" in edge_sidecar_to_children_edge) {
                            var video_url = edge_sidecar_to_children_edge.video_url;
                            video_url = api_url + "/api/v1/download-video?u=" + encodeURIComponent(video_url) + "&h=" + encodeURIComponent(h(video_url)) + "&t=" + encodeURIComponent(title);
                            videos.push({
                                url: video_url,
                                type: 'video'
                            });
                        }
                    }
                }
            } else {
                if ("display_url" in data) {
                    var video_url = data.display_url;
                    video_url = api_url + "/api/v1/download-image?u=" + encodeURIComponent(video_url) + "&h=" + encodeURIComponent(h(video_url)) + "&t=" + encodeURIComponent(title);
                    videos.push({
                        url: video_url,
                        type: 'image'
                    });
                }
            }

            return {
                success: true,
                result: {
                    title,
                    videos,
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