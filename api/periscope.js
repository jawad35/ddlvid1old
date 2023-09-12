"use strict";

const axios = require('axios');
const { api_url } = require('../server');
const { h } = require('../hashMe');

const get_periscope = async (url) => {
    try {
        let r = await axios.get(url, {
            headers: {
                "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:68.0) Gecko/20100101 Firefox/68.0",
                "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
                "Accept-Language": "en-US,en;q=0.5",
                "Upgrade-Insecure-Requests": "1"
            }
        })

        let data = r.data;
        let video_id = data.match(/pscp.tv\/w\/(.*?)\//);
        if (video_id && video_id.length > 1) {
            video_id = video_id[1];

            r = await axios.get("https://proxsee.pscp.tv/api/v2/accessVideoPublic?broadcast_id=" + video_id + "&replay_redirect=false&latest_replay_playlist=true", {
                headers: {
                    "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:68.0) Gecko/20100101 Firefox/68.0",
                    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
                    "Accept-Language": "en-US,en;q=0.5",
                    "Upgrade-Insecure-Requests": "1"
                }
            })

            data = r.data;
            let video = null;
            if ("hls_url" in data) {
                video = data.hls_url;
            }
            if ("replay_url" in data) {
                video = data.replay_url;
            }
            if (video) {
                return {
                    success: true,
                    result: {
                        title: data.broadcast.status,
                        thumb: data.broadcast.image_url,
                        video: api_url + "/api/v1/pscp-download?u=" + encodeURIComponent(video) + "&h=" + encodeURIComponent(h(video)) + "&t=" + encodeURIComponent(data.broadcast.status)
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

// get_periscope("https://www.pscp.tv/7luckybts/1OyJAgDPllgKb").then(res => {
//     console.log(res.result);
// });

module.exports = {
    get_periscope
};