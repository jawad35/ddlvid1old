"use strict";

const twitter = require("./twitter");
const instagram = require("./instagram");
const youtube = require("./yb");
const tiktok = require("./tiktok");
const facebook = require("./facebook");
const vimeo = require("./vimeo");
const linkedin = require("./linkedin");
const reddit = require("./reddit");
const pinterest = require("./pinterest");
const okru = require("./okru");
const pornhub = require("./pornhub");
const periscope = require("./periscope");
const vk = require("./vk");
const triller = require("./triller");
//const generic = require("./generic");

const downloader = async (url) => {

    console.log("download_url", url);

    let video = null;

    if (typeof url === "undefined") {
        return {
            success: false,
            result: null,
            error_message: "URL field is required"
        };
    }
    
    url = url.replace("/https", "https");

    var purl;
    
    try {
        purl = new URL(url);

        const purl_harr = purl.hostname.split(".");
        if (purl_harr.length === 3) {
            purl.hostname = purl_harr[1] + "." + purl_harr[2]; // remove subdomain
        }
    } catch(res) {
        return {
            success: false,
            result: null,
            error_message: "URL is invalid."
        };
    }

    if (purl.hostname === "twitter.com" || purl.hostname === "t.co") {
        if (url.indexOf("/status/") < 0 && url.indexOf("t.co") < 0) {
            video = await twitter.get_fleets(url);
            video.site = "fleets";
        } else {
            video = await twitter.get_tweet(url);
            video.site = "twitter";
        }
    }
    if (purl.hostname === "instagram.com") {
        var arr = url.replace("https://","").replace("http://","").split("?");
        var r = [];
        arr = arr[0].split("/");
        arr.forEach(s => {
            if (s !== "") {
                r.push(s);
            }
        });
        if (r.length === 2) {
            url = "https://www.instagram.com/stories/" + r[1];
        }
        if (url.indexOf("instagram.com/stories/") < 0) {
            video = await instagram.get_instagram(url);
            video.site = "instagram";
        } else {
            video = await instagram.get_instagram_stories(url);
            video.site = "instagram";
        }
    }
    if (purl.hostname === "tiktok.com") {
        video = await tiktok.get_tiktok(url);
        video.site = "tiktok";
    }
    if (purl.hostname === "facebook.com" && url.indexOf("facebook.com/stories") < 0 || purl.hostname === "fb.watch" || purl.hostname === "fbwat.ch") {
        video = await facebook.get_facebook(url);
        video.site = "facebook";
    }
    if ((purl.hostname === "youtube.com" || purl.hostname === "youtu.be")) {
        video = await youtube.get_youtube(url);
        video.site = "youtube";
    }
    if (purl.hostname === "vimeo.com") {
        video = await vimeo.get_vimeo(url);
        video.site = "vimeo";
    }
    if (purl.hostname === "linkedin.com") {
        video = await linkedin.get_linkedin(url);
        video.site = "linkedin";
    }
    if (purl.hostname === "reddit.com") {
        video = await reddit.get_reddit(url);
        video.site = "reddit";
    }
    if (purl.hostname === "pornhub.com") {
        video = await pornhub.get_pornhub(url);
        video.site = "pornhub";
    }
    if (purl.hostname === "pin.it" || url.indexOf("pinterest") >= 0) {
        video = await pinterest.get_pinterest(url);
        video.site = "pinterest";
    }
    if (purl.hostname === "ok.ru") {
        video = await okru.get_okru(url);
        video.site = "okru";
    }
    if (purl.hostname === "periscope.tv" || purl.hostname === "pscp.tv") {
        video = await periscope.get_periscope(url);
        video.site = "periscope";
    }
    if (purl.hostname === "vk.com") {
        video = await vk.get_vk(url);
        video.site = "vk";
    }
    if (purl.hostname === "triller.co") {
        video = await triller.get_triller(url);
        video.site = "triller";
    }
    // if (!video) {
    //     if (original) {
    //         video = await generic.get_original_video(url);
    //     } else {
    //         video = await generic.get_video(url);
    //     }
    //     video.site = "generic";
    // }

    if (!video) {
        video = {
            success: false,
            result: null,
            error_message: "Site not supported yet."
        };
    }

    return video;
};

// downloader("https://youtu.be/wdn1O621RhM").then((r) => {
//     console.log(r);
// })

module.exports = {
    downloader
};