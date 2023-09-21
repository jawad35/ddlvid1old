"use strict";

import PropTypes from 'prop-types';
import { Trans } from 'react-i18next';
import { Router, withTranslation, Link } from '../i18n';
import {StickyShareButtons} from 'sharethis-reactjs';
import Head from 'next/head';
import { useState, useEffect, useContext } from 'react';
import Header from './parts/header';
import Footer from './parts/footer';
import AD2HS from './parts/ad2hs';
import Axios from 'axios';
import { UserContext } from '../Context';
import validator from 'validator'
// import Banner from '../public/assets/images/ddlvide-new-logo.png'
const lntobr = (str) => {
  return str.split("\n").map(function(item, i) {
    return (
      <span key={i}>{item}<br/></span>
    )
  }); 
};

const VideoDownloader = ({ t }) => {

  const [link, setLink] = useState('');
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [prices, setPrices] = useState([]);
  const Navigator = Router
  const [state, setState] = useContext(UserContext);
  const CheckURlValidation = () => {
    if (validator.isURL(link)) {
      setIsModalOpen(true)
      setError("")
    } else {
      setError("Please Enter a Valid Url")
    }
  }
  const CreateStripeSession = async () => {
    const { data: response } = await Axios.post(
      "/session",
      {
        priceId: prices.id,
      }
    );
    Navigator.push(response.url)
    // window.location.href = response.url;
  };
  const VideoDownloader = (e) => {
    if (typeof e !== "undefined") {
      e.preventDefault();
    }
    setError(null);
    if (link !== "") {
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
        if (link.toLowerCase().indexOf(supported_sites[i]) >= 0) {
          supported = true;
          break;
        }      
      }
      if (supported) {
        Router.push({
          pathname: "/download",
          query: { link }
        });
      } else {
        setError('Link not supported yet.');
        window._gaq.push(['_trackEvent', 'notSupported', link]);
      }
    } else {
      setError('Link is required.');
    }
    return false;
  }
  const fetchPrices = async () => {
    const { data: response } = await Axios.get(
      "/prices"
    );
    console.log(response?.data[2]);
    setPrices(response?.data[2]);
  };

console.log(prices)
  useEffect(() => {
    fetchPrices()
    if ("twttr" in window) {
      window.twttr.widgets.load();
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

    if (window.location.hash != "") {
      var elem = document.querySelector(window.location.hash+"-section");
      if (elem) {
        window.scrollTo({
          top: elem.offsetTop,
          behavior: 'smooth',
        })
      }
    }

    setLink("");
  }, [])
  
  return (
    <div className="home">
          {
            isModalOpen && <div className='backdrop' onClick={() => setIsModalOpen(false)}></div>
          }

      <Head>
        <title>{t('headline')} - DDLVid</title>
        <meta name="description" content={t('meta_description')} />
        <meta name="keywords" content="twitter video downloader,facebook video downloader,tiktok video downloader,instagram video downloader,youtube video downloader" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@ddl_vid" />
        <meta name="twitter:title" content={'DDLVid - ' + t('headline')} />
        <meta name="twitter:description" content={t('meta_description')} />
        <meta name="twitter:creator" content="@ddl_vid" />
        <meta name="twitter:image" content="https://ddlvid.com/assets/images/og.png?2" /> 
        <meta property="og:title" content={'DDLVid - ' + t('headline')} />
        <meta property="og:description" content={t('meta_description')} />
        <meta property="og:image" content="https://ddlvid.com/assets/images/og.png?2" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ddlvid.com/" />
        <meta property="og:site_name" content="DDLVid" />
        <link rel="alternate" hrefLang="en" href="https://ddlvid.com/" />
        <link rel="alternate" hrefLang="x-default" href="https://ddlvid.com/" />
        <link rel="alternate" hrefLang="fr" href="https://ddlvid.com/fr" />
        <link rel="alternate" hrefLang="pt" href="https://ddlvid.com/pt" />
        <link rel="canonical" href="https://ddlvid.com/" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
{
  "@context": "http://schema.org/",
  "@type": "SoftwareApplication",
  "applicationCategory": "MultimediaApplication",
  "operatingSystem":["Windows","macOS","Android","iOS"],
  "screenshot": "https://ddlvid.com/assets/images/og.png?2",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingCount": "5510",
    "reviewCount": "5510",
    "bestRating": "5",
    "ratingValue": "4.8",
    "worstRating": "1",
    "alternateName": "DDLVid Online Video Downloader",
    "mainEntityOfPage": "https://ddlvid.com/",
    "name": "DDLVid"
  },
  "alternativeHeadline": "DDLVid",
  "copyrightYear": "${new Date().getFullYear()}",
  "headline": "DDLVid",
  "keywords": "DDLVid, online video downloader, video downloader",
  "offers": {
    "@type": "Offer",
    "price": "0.0",
    "priceCurrency": "USD",
    "alternateName": "DDLVid",
    "description": "DDLVid Online Video Downloader",
    "mainEntityOfPage": "https://ddlvid.com/",
    "name": "DDLVid"
  },
  "alternateName": "DDLVid",
  "mainEntityOfPage": "https://ddlvid.com/",
  "name": "DDLVid"
}
        `}}></script>
      </Head>

      <main>
        <Header />
        
        <div id="content">
          <div className="section1">
            <div className="container">
              <div className="headline">
                <img className='banner_image' src={"/assets/images/main-ddlvid-banner.jpeg"} alt={"Image Crashed"} style={{ width: '100%', height: 'auto' }} />
                <h1>{t('headline')}</h1>
                <div className="desc">
                  {lntobr(t('sub_headline'))}
                </div>
                <StickyShareButtons
                  config={{
                    alignment: 'left',
                    color: 'social',
                    enabled: true,
                    font_size: 16,
                    labels: 'counts',
                    language: 'en',
                    min_count: 0,
                    networks: [
                      'whatsapp',
                      'messenger',
                      'reddit',
                      'twitter',
                      'facebook',
                      'linkedin'
                    ],
                    padding: 12,
                    radius: 4,
                    show_total: true,
                    show_mobile: true,
                    show_toggle: true,
                    size: 48,
                    top: 160,
                    url: 'https://ddlvid.com/',
                    property: '5f0be2eb7df6de00133235b5'
                  }}
                />
                <div>
                  <div className="field">
                    <input
                      name="link"
                      id="link"
                      placeholder="https://"
                      value={link}
                      onChange={(e) => setLink(e.target.value)}
                      type='url'
                      pattern="https?://.+"
                      required
                      autoComplete="off"
                      className={(error) ? 'has-error' : null}
                    />
                    <div className="download">
                      <button onClick={() => CheckURlValidation()}>{t('get_the_video')}</button>
                    </div>
                    {error ? <div className="error_message" onClick={() => setError(null)}>{error}</div> : null}
                  </div>
                </div>
                <div className="supported_sites">
                  <span className="site twitter">Twitter</span>{' '}
                  <span className="site facebook">Facebook</span>{' '}
                  <span className="site instagram">Instagram</span>{' '}
                  <span className="site tiktok">TikTok</span>{' '}
                  <span className="site youtube">Youtube</span>{' '}
                  <span className="site reddit">Reddit</span>{' '}
                  <span className="site pinterest">Pinterest</span>{' '}
                  <span className="site linkedin">LinkedIn</span>{' '}
                  <span className="site vimeo">Vimeo</span>
                </div>
                <div className="list_supported_sites">
                  <Link href="/supported-websites"><a>{t('list_supported_websites')}</a></Link>
                </div>

                {/* <div className="promo" style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: "18px",
                    margin: "20px 0"
                }}>
                    <a href="https://go.nordvpn.net/aff_c?offer_id=15&aff_id=87658&source=ddlvid.com" style={{color:"#d73030"}} target="_blank">⚡️🔒 Download with Lightning Speed and Unbreakable Security! Get 59% off NordVPN + 3 extra months! 💪🌐</a>
                </div> */}
              </div>
            </div>
          </div>
         {
          isModalOpen &&  <div id="emailForm">
          <span className='close' onClick={() => setIsModalOpen(false)}>x</span>
          <div className="container checkoutwrapper">
              <h3>Checkout</h3>
              <div className='checkout-price'>
                Join DDLVID <span className='check-price-label'>$3.99</span>/mo
              </div>
             <div>
              <p>Here's what Included</p>
              <div className='chechout-items'>
                <div className='c-item'>
                  - Unlimited High Quality video Downloads
                </div>
                <div className='c-item'>
                  - Unlimited Url Shortens
                </div>
                <div className='c-item'>
                  - Safest Online Community, No Malware or advertise
                </div>
                <div className='c-item'>
                  - Discord Access
                </div>
                <div className='c-item'>
                  - Meme Club Membership
                </div>
                <div className='c-item'>
                  - Twitter and Telegram Bot Usage
                </div>
              </div>
             {/* <p>
                  <input
                      type="email"
                      placeholder="Enter your email address"
                      // onChange={(e) => setEmail(e.target.value)}
                  />
              </p> */}
              <strong style={{marginTop:'40px'}}>Note:</strong>
              <div>You must have to login before checkout <Link  href="/account"><a style={{color:'#0093E9'}}>Login!</a></Link></div>
              <p style={{textAlign: 'center'}}>
                  <button onClick={() => {
                    if (state?.data) {
                      CreateStripeSession()
                    } else {
                      Navigator.push('/account')
                    }
                  }}>Checkout</button>
              </p>
             </div>
          </div>
      </div>
         }
          <div className="section5">
            <div className="container">
              <div className="img" />
                <h2>{t('best_free_online_video_downloader')}<br/>{t('trusted_by_millions')}</h2>
                <p>
                  {lntobr(t('home_desc'))}
                </p>
            </div>
          </div>
          {/* <div className="section6 section6_0">
            <div className="container">
              <h2>{t('discover_ddlvid')}</h2>
              <div className="row">
                <div className="col s6">
                  <div className="icon videos"></div>
                  <div className="title">{t('download_videos_from_famous_sites')}</div>
                </div>
                <div className="col s6">
                  <div className="icon youtube"></div>
                  <div className="title">{t('download_convert_youtube_mp3')}</div>
                </div>
              </div>
              <div className="row">
                <div className="col s6">
                  <div className="icon tiktok"></div>
                  <div className="title">{t('download_tiktok_without_watermark')}</div>
                </div>
                <div className="col s6">
                  <div className="icon stories"></div>
                  <div className="title">{t('download_facebook_instagram_stories')}</div>
                </div>
              </div>
              <div className="more">
                {t('and_many_more_to_come')}
                <div className="big">{t('this_is_just_the_start')}</div>
              </div>
            </div>
          </div> */}
          {/* <div className="section6 section6_1">
            <div className="container">
              <h2>{t('how_to_download_a_video')}</h2>
              <div className="row">
                <div className="col s4">
                  <div className="icon copy"></div>
                  <p><strong>{t('copy_video_url')}</strong></p>
                  <p>
                    <Trans
                      i18nKey="copy_video_url_details"
                      components={{ a: <a /> }}
                    />
                  </p>
                </div>
                <div className="col s4">
                  <div className="icon paste"></div>
                  <p><strong>{t('paste_link')}</strong></p>
                  <p>{t('paste_link_details')}</p>
                </div>
                <div className="col s4">
                  <div className="icon download"></div>
                  <p><strong>{t('download_the_video')}</strong></p>
                  <p>{t('download_the_video_details')}</p>
                </div>
              </div>
            </div>
          </div> */}
          <div className="section7">
            <div className="container">
              <h2>{t('download_videos_using_our_bots')}</h2>
              <div className="row">
                <div className="col s6">
                  <div className="icon twitter"></div>
                  <div className="details">
                    <p><strong>{t('twitter_bot')}</strong></p>
                    <p>
                      <Trans
                        i18nKey="twitter_bot_details"
                        components={{ em: <em /> }}
                      />
                    </p>
                  </div>
                  <p className="cta"><a href="https://twitter.com/ddl_vid1" target="_blank" className="btn">{t('follow_ddl_vid')}</a></p>
                </div>
                <div className="col s6">
                  <div className="icon telegram"></div>
                  <div className="details">
                    <p><strong>{t('telegram_bot')}</strong></p>
                    <p>
                      <Trans
                          i18nKey="telegram_bot_details"
                          components={{ em: <em /> }}
                        />
                    </p>
                  </div>
                  <p className="cta"><a href="https://telegram.me/ddlvid_bot" target="_blank" className="btn">{t('send_message_to_ddlvid_bot')}</a></p>
                </div>
              </div>
            </div>
          </div>
          <div className="section8">
            <div className="container">
              <div className="start">
                <a className="btn" onClick={() => {
                  window.document.querySelector("#link").focus();
                  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                }}>{t('start_downloading')}</a>
              </div>
            </div>
          </div>
        </div>
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

VideoDownloader.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

VideoDownloader.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common')(VideoDownloader)