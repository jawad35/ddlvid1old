"use strict";

import PropTypes from 'prop-types';
import Head from 'next/head';
import { Router, withTranslation } from '../i18n';
import Header from './parts/header';
import Footer from './parts/footer';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import AD2HS from './parts/ad2hs';
import TemplateGeneric from './template/generic';
import TemplateFacebook from './template/facebook';
import TemplateTikTok from './template/tiktok';
import TemplateYoutube from './template/youtube';
import TemplateReddit from './template/reddit';
import TemplatePornhub from './template/pornhub';
import TemplateInstagram from './template/instagram';
import TemplateFleets from './template/fleets';

const { h } = require("../hashMe");

const Download = ({ t, _loading, _success, _result, _site, link }) => {

    const [currentLink, setCurrentLink] = useState(link);
    const [new_link, setNewLink] = useState("");
    const [loading, setLoading] = useState(_loading);
    const [result, setResult] = useState(_result);
    const [success, setSuccess] = useState(_success);
    const [site, setSite] = useState(_site);
    const [error, setError] = useState(null);
    const [showEmailForm, setShowEmailForm] = useState(false);
    const [email, setEmail] = useState("");
    const [redirectLink, setRedirectLink] = useState("https://www.patreon.com/ddlvid");

    const submit = (e) => {
        e.preventDefault();
        setError(null);
        if (new_link !== "") {
            const supported_sites = [
                "youtube.com",
                "youtu.be",
                "twitter.com",
                "linkedin.com",
                "facebook.com",
                "fb.com",
                "tiktok.com",
                "vimeo.com",
                "pornhub.com",
                "instagram.com",
                "reddit.com",
                "pinterest.com",
                "pin.it",
                "ok.ru",
                "periscope.tv",
                "pscp.tv",
                "t.co",
                "fb.watch",
                "fbwat.ch",
                "vk.com",
                "triller.co"
            ];
            var supported = false;
            for (let i = 0; i < supported_sites.length; i++) {
                if (new_link.toLowerCase().indexOf(supported_sites[i]) >= 0) {
                    supported = true;
                    break;
                }      
            }
            if (supported) {
                // window.open('https://dooloust.net/4/4681318', '_blank');
                Router.push({
                    pathname: "/download",
                    query: { link: new_link }
                });
                load(new_link);
            } else {
                setError('Link not supported yet.');
                window._gaq.push(['_trackEvent', 'notSupported', new_link]);
            }
        } else {
            setError('Link is required.');
        }
        return false;
    }

    const load = async (l) => {
        window.document.querySelector("#download").classList.add("loading");
        setLoading(true);
        var r;
        r = await Axios.get("/api/v1/download?url=" + encodeURIComponent(l) + "&h=" + encodeURIComponent(h(l)));
        setSuccess(r.data.success);
        setResult(r.data.result);
        setSite(r.data.site);
        setCurrentLink(l);
        setLoading(false);
        window.document.querySelector("#download").classList.remove("loading");

        setTimeout(() => {
            if (typeof window !== "undefined") {
                const videos = window.document.querySelectorAll("video");
                for (let i = 0; i < videos.length; i++) {
                    videos[i].load();
                }
            }
        }, 1);
    }

    const loadInstagram = async (url) => {
        if (url.indexOf("/p/") > 0) {
            return await loadInstagramPost(url);
        }
        try {
            const rr = await Axios.get(url);
            var arr = url.replace("https://","").replace("http://","").split("?");
            var r = [];
            arr = arr[0].split("/");
            arr.forEach(s => {
                if (s !== "") r.push(s);
            });
            if (r.length === 2) {
                url = "https://www.instagram.com/stories/" + r[1];
            }
            if (url.indexOf("instagram.com/stories/") >= 0) {
                var user_id = null;
                var username = "";
                var regex = /\"id\"\:\"(\d+)\"/i;
                var match = regex.exec(rr.data);
                if (match && match.length > 1) {
                    user_id = match[1];
                }
                regex = /\"alternateName\"\:\"\@(.*?)\"/i;
                match = regex.exec(rr.data);
                if (match && match.length > 1) {
                    username = match[1];
                }
                if (user_id) {
                    return await loadInstagramStories(username, user_id);
                } else {
                    return {
                        success: false,
                        result: null,
                        site: "instagram"
                    }
                }
            } else {
                return await loadInstagramPost(url);
            }
        } catch(err) {
            return {
                success: false,
                result: null,
                site: "instagram"
            }
        }
    };

    const loadInstagramStories = async (username, user_id) => {
        const r = await Axios.get("/api/v1/get-insta-stories?username=" + encodeURIComponent(username) + "&user_id=" + encodeURIComponent(user_id) + "&h=" + encodeURIComponent(h(user_id)));
        return r.data;
    }

    const loadInstagramPost = async (url) => {
        var regex = /instagram.com\/(\w+)\/(.*?)\//i;
        var match = regex.exec(url + "/");
        if (match && match.length > 1) {
            try {
                let title = "Instagram Video";
                let thumb = "";
                let videos = [];

                const r = await Axios.get("https://www.instagram.com/graphql/query/?query_hash=55a3c4bad29e4e20c20ff4cdfd80f5b4&variables=" + encodeURIComponent(JSON.stringify({
                    "shortcode": match[2]
                })));
                const data = r.data.data.shortcode_media;

                if ("edge_media_to_caption" in data && data.edge_media_to_caption.edges && data.edge_media_to_caption.edges.length > 0) {
                    title = data.edge_media_to_caption.edges[0].node.text;
                }

                if ("display_url" in data) {
                    thumb = data.display_url;
                }

                if ("is_video" in data && data.is_video) {    
                    if ("video_url" in data) {
                        var video_url = data.video_url;
                        video_url = "https://d.ddlvid.com/api/v1/download-video?u=" + encodeURIComponent(video_url) + "&h=" + encodeURIComponent(h(video_url)) + "&t=" + encodeURIComponent(title);
                        videos.push({
                            url: video_url,
                            type: 'video'
                        });
                    }
                } else {
                    if ("display_url" in data) {
                        var video_url = data.display_url;
                        video_url = "https://d.ddlvid.com/api/v1/download-image?u=" + encodeURIComponent(video_url) + "&h=" + encodeURIComponent(h(video_url)) + "&t=" + encodeURIComponent(title);
                        videos.push({
                            url: data.display_url,
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
                    },
                    site: "instagram"
                }
            } catch(err) {}
        }

        return {
            success: false,
            result: null,
            site: "instagram"
        }
    }

    useEffect(() => {
        if ("twttr" in window) {
            try {
                window.twttr.widgets.load();
            } catch(e) {}
        }

        if (window.location.host.indexOf("localhost") < 0 && window.location.host.indexOf("127.0.0.1") < 0) {
            window._gaq = window._gaq || [];
            window._gaq.push(['_setAccount', 'UA-162923642-1']);
            window._gaq.push(['_trackPageview']);
      
            var bounceKiller = {
              trackScrolling: true,
              scrollingPercentageNumber: 25,
              logInterval: 10,
              trackEvents: true,
              trackMaxTime: true,
              trackMaxTimeSec: 900
            };
            window.scrollTrackEnd = false;
            window.ScrollMatrix = new Array();
      
            function TrackingLogTime(a) {
                return a[0] == 50 ? (parseInt(a[1]) + 1) + ":00" : (a[1] || "0") + ":" + (parseInt(a[0]) + 10)
            }
      
            if (bounceKiller.trackEvents) {
                function startTimeTracking(a) {
                    window.intervalObj = window.setInterval(function() {
                        a = TrackingLogTime(a.split(":").reverse());
                        window._gaq.push(['_trackEvent', "Time", "LOG", a]);
                    }, bounceKiller.logInterval * 1000)
      
                    if (bounceKiller.trackMaxTime) {
                        window.trackMaxTimeTimeout = setTimeout(function() {
                            clearInterval(window.intervalObj);
                        }, bounceKiller.trackMaxTimeSec * 1000)
                    }
                }
                window.document.addEventListener("DOMContentLoaded", function() { 
                    startTimeTracking("00");
                })
            }
      
              if (bounceKiller.trackScrolling) {
                  window.Frequency = bounceKiller.scrollingPercentageNumber;
                  window.Repentance = 100 / bounceKiller.scrollingPercentageNumber;
                  window.ScrollMatrix = new Array();
                  for (var ix = 0; ix < window.Repentance; ix++) {
                      window.ScrollMatrix[ix] = [window.Frequency, "false"];
                      window.Frequency = bounceKiller.scrollingPercentageNumber + window.Frequency;
                  }
              };
      
              var scrollFunc = function(){
                if (bounceKiller.trackScrolling) {
                    if (!window.scrollTrackEnd) {
                        window._gaq.push(['_trackEvent', "Scroll", "LOG", "scrolled"]);
                        window.scrollTrackEnd = true;
                    }
                }
                if (bounceKiller.trackScrolling) {
                    var body = window.document.body,
                        html = window.document.documentElement;
      
                    var documentHeight = Math.max( body.scrollHeight, body.offsetHeight, 
                                    html.clientHeight, html.scrollHeight, html.offsetHeight );
                                    
                    for (var iz = 0; iz < window.ScrollMatrix.length; iz++) {
                        if ((window.scrollY + window.innerHeight >= documentHeight * window.ScrollMatrix[iz][0] / 100) && (window.ScrollMatrix[iz][1] == "false")) {
                            window.ScrollMatrix[iz][1] = "true";
                            window._gaq.push(['_trackEvent', "Percentage Page Scroll", "LOG", window.ScrollMatrix[iz][0] + "%", {
                              nonInteraction: false
                            }])
                        }
                    }
                }
            }
      
            window.addEventListener('scroll', scrollFunc, true);
      
            (function() {
              var ga = window.document.createElement('script');
              ga.type = 'text/javascript';
              ga.async = true;
              ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
              var s = window.document.getElementsByTagName('script')[0];
              s.parentNode.insertBefore(ga, s);
            })();
        }

        load(link);

    }, [])

    // useEffect(() => {
    //     const script = document.createElement('script');
    //     script.src = 'https://upgulpinon.com/1?z=4692603';
    //     document.body.appendChild(script);
    //     return () => {
    //         document.body.removeChild(script);
    //     }
    // }, [link])      

    const localDownload = async (url, backup_url, filename, ext) => {
        if (typeof ext === "undefined") {
            ext = ".mp4";
        }
        if (filename === "") {
            filename = (new Date()).getTime() + ext;
        }
        try {
            const config = {
                responseType: 'blob'
            };
            setLoading(true);
            const r = await Axios.get(url, config);
            const blob = new Blob([r.data]);
            const link = window.document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = "DDLVID.COM-" + filename;
            setLoading(false);
            link.click();
        } catch (error) {
            setLoading(false);
            window.location = backup_url;
        }
    };

    let Template = TemplateGeneric;
    if (site === "facebook" || site === "vk") {
        Template = TemplateFacebook;
    }
    if (site === "tiktok") {
        Template = TemplateTikTok;
    }
    if (site === "youtube") {
        Template = TemplateYoutube;
    }
    if (site === "reddit") {
        Template = TemplateReddit;
    }
    if (site === "pornhub") {
        Template = TemplatePornhub;
    }
    if (site === "instagram") {
        Template = TemplateInstagram;
    }
    if (site === "fleets") {
        Template = TemplateFleets;
    }

    return (
        <div id="download">
            {result ? (
                <Head>
                    <title>{result.title} - DDLVid</title>
                    <meta property="og:title" content={result.title} />
                    <meta property="og:description" content="Click Here To Download" />
                    <meta property="og:image" content="https://ddlvid.com/icon.png" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content={"https://ddlvid.com/download?link=" + encodeURIComponent(link)} />
                    <meta property="og:site_name" content="DDLVid" />
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:site" content="@ddl_vid" />
                    <meta name="twitter:title" content="Click Here To Download" />
                    <meta name="twitter:description" content={result.title} />
                    <meta name="twitter:creator" content="@ddl_vid" />
                    <meta name="twitter:image" content="https://ddlvid.com/icon.png" /> 
                    <meta name="robots" content="noindex" />
                    <meta name="googlebot" content="noindex" />
                </Head>
            ) : (
                <Head>
                    <title>DDLVid - Online Video Downloader</title>
                </Head>
            )}

            <main>
                
                <Header />

                {loading ? (
                    <div id="loader">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="180px" height="180px" viewBox="0 0 180 180" enableBackground="new 0 0 180 180">
                            <path d="M49.986 13.226v112.52c22.117-.295 44.354.8 66.374-1.098 19.947-1.902 41.022-7.9 51.93-20.97 11.94-14.11 12.673-31.538 10.12-47.56-2.545-13.692-12.094-27.54-29.344-34.23-21.655-9-47.3-8.797-71.487-8.663zm24.82 20.424c18.934-.976 44.055-1.7 56.95 3.657 13.55 6.04 23.03 16.99 23.768 28.652.987 9.275-1.6 19.22-10.546 26.22-7.87 6.88-18.644 12.106-30.958 13.452-13.216 1.822-26.715.882-40.06.823z"/>
                            <path d="M130.086 165.907V53.387c-22.117.295-44.354-.8-66.374 1.098-19.947 1.902-41.022 7.9-51.93 20.97-11.94 14.11-12.673 31.538-10.12 47.56 2.545 13.692 12.094 27.54 29.344 34.23 21.655 9 47.3 8.797 71.487 8.663zm-24.82-20.424c-18.934.976-44.055 1.7-56.95-3.657-13.55-6.04-23.03-16.99-23.768-28.652-.987-9.275 1.6-19.22 10.546-26.22 7.87-6.88 18.644-12.106 30.958-13.452 13.216-1.822 26.715-.882 40.06-.823z"/>
                        </svg>
                    </div>
                ) : null}

                {!loading ? (
                    <div className="downloadContent">

                        {success ? (
                            <div className="container">
                                {/* <div className="promo" style={{
                                    textAlign: "center",
                                    fontWeight: "bold",
                                    fontSize: "18px",
                                    margin: "20px 0"
                                }}>
                                    <a href="https://go.nordvpn.net/aff_c?offer_id=15&aff_id=87658&source=ddlvid.com" target="_blank">⚡️🔒 Download with Lightning Speed and Unbreakable Security! Get 59% off NordVPN + 3 extra months! 💪🌐</a>
                                </div> */}

                                <Template
                                    result={result}
                                    site={site}
                                    link={link}
                                    localDownload={localDownload}
                                    showEmailForm={(link) => {
                                        setRedirectLink(link);
                                        if (!window.sessionStorage.getItem("emailForm")) {
                                            window.sessionStorage.setItem("emailForm", true);
                                            setShowEmailForm(true)
                                        } else {
                                            window.location = link;
                                        }
                                    }}
                                />                        
                                
                                {showEmailForm ? (
                                    <div id="emailForm">
                                        <span className='close' onClick={() => setShowEmailForm(false)}>x</span>
                                        <div className="container">
                                            <h3>Fill in your email for the download. Happy downloading!</h3>
                                            <p>
                                                <input
                                                    type="email"
                                                    placeholder="Enter your email address"
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                            </p>
                                            <p style={{textAlign: 'right'}}>
                                                <button onClick={() => {
                                                    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                                                    if (email.match(validRegex)) {
                                                        setLoading(true);
                                                        Axios.get("/api/subscribe?email=" + encodeURIComponent(email)).then(() => {
                                                            setLoading(false);
                                                            setShowEmailForm(false);
                                                            window.location = redirectLink;
                                                        })
                                                    }
                                                }}>Download</button>
                                            </p>
                                        </div>
                                    </div>
                                ) : null}

                                <div className="downloadForm">
                                    <div className="container">
                                        <form action="/download" method="get" onSubmit={submit}>
                                            <div className="field">
                                                <input
                                                    name="link"
                                                    id="link"
                                                    placeholder="https://"
                                                    value={new_link}
                                                    onChange={(e) => setNewLink(e.target.value)}
                                                    pattern="https?://.+"
                                                    required
                                                    aria-label={t('link_to_download')}
                                                    autoComplete="off"
                                                />
                                                <div className="download">
                                                    <button type="submit">{t('get_a_new_video')}</button>
                                                </div>
                                                {error ? <div className="error_message">{error}</div> : null}
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                
                            </div>
                        ) : (
                            <div className="card">
                                <div className="error_description">
                                    <div className="container">
                                        <div className="error">{t('404_headline')} :/</div>
                                        <p>{t('404_body1')}</p>
                                        <p>{t('404_body2')}</p>

                                        {/* <div className="promo" style={{
                                            textAlign: "center",
                                            fontWeight: "bold",
                                            fontSize: "18px",
                                            margin: "60px 0"
                                        }}>
                                            <a href="https://go.nordvpn.net/aff_c?offer_id=15&aff_id=87658&source=ddlvid.com" target="_blank">⚡️🔒 Download with Lightning Speed and Unbreakable Security! Get 59% off NordVPN + 3 extra months! 💪🌐</a>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ) : null}

            </main>
            
            <Footer />
            
            <AD2HS />

            <style jsx global>{`
                html,
                body {
                padding: 0;
                margin: 0;
                font-family: "Plex", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
                    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
                }

                * {
                box-sizing: border-box;
                }
                *:focus {
                outline: none;
                }
            `}</style>
        </div>
    )
}

Download.getInitialProps = async ({ query, req, res }) => {
    const baseUrl = req ? `${req.protocol}://${req.get("Host")}` : "";
    const { h } = require("../hashMe");

    if ('link' in query) {
        return {
            namespacesRequired: ['common'],
            _success: null,
            _result: null,
            _site: "generic",
            _loading: true,
            link: query.link
        }

    } else {
        if (typeof window !== "undefined") {
            window.location = "/";
        } else if (typeof res !== "undefined") {
            res.redirect('/');
        }
        return { 
            namespacesRequired: ['common'],
            _loading: false,
            success: false
        }
    }
}
  
Download.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('download')(Download)
