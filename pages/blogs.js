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

const Home = ({ t }) => {

  const [link, setLink] = useState('');
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [prices, setPrices] = useState([]);
  const [subscriptionData, setSubscriptionData] = useState([]);

  const Navigator = Router
  const [state, setState] = useContext(UserContext);
 
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
        window._gaq?.push(['_trackEvent', 'notSupported', link]);
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
  const fetchSubscriptionData = async () => {
    const { data: response } = await Axios.get(
      "/subscription"
    );
    setSubscriptionData(response)
  };

  const CheckURlValidation = () => {
    if (validator.isURL(link)) {
      if (state?.data && subscriptionData?.length !==0) {
        VideoDownloader()
      } else {
        setIsModalOpen(true)
        setError("")
      }
    } else {
      setError("Please Enter a Valid Url")
    }
  }
  useEffect(() => {
    if (state?.data) {
      fetchSubscriptionData()
      fetchPrices()
    }
  }, [state])
  useEffect(() => {
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
                <h1>Articles</h1>
              </div>
            </div>
          </div>
          <div className='blog-article container'>
          <img src={"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"} alt={"Image Crashed"} style={{ width: '100%', height: 'auto' }} />
          <p className='blog-article-text'>
          There are a lot of things that are happening in this code. Let me explain to you what this is. First of all, we are sending a GET request using. Then we are converting the response from JSON to JavaScript object. We are doing this because initially our response is in JSON format and we have to convert it into a JavaScript object to be able to use it. So we do that using method. This is what our object looks like after conversion from JSON.
          <br/>
          <p style={{margin:'15px 0px'}}>
          There are a lot of things that are happening in this code. Let me explain to you what this is. First of all, we are sending a GET request using. Then we are converting the response from JSON to JavaScript object. We are doing this because initially our response is in JSON format and we have to convert it into a JavaScript object to be able to use it. So we do that using method. This is what our object looks like after conversion from JSON.
          </p>
            <br/>
            Feel free to use the code and do some experiments. Or you can make your own version of the free URL shortener by making changes to the layout or design and maybe adding more functionality to it....
            </p> 
            <p style={{textAlign:'center'}}>
            <button>Read More</button>
              </p>  
          </div>
          <div className='blog-article container'>
          <img src={"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"} alt={"Image Crashed"} style={{ width: '100%', height: 'auto' }} />
          <p className='blog-article-text'>
          There are a lot of things that are happening in this code. Let me explain to you what this is. First of all, we are sending a GET request using. Then we are converting the response from JSON to JavaScript object. We are doing this because initially our response is in JSON format and we have to convert it into a JavaScript object to be able to use it. So we do that using method. This is what our object looks like after conversion from JSON.
          <br/>
          <p style={{margin:'15px 0px'}}>
          There are a lot of things that are happening in this code. Let me explain to you what this is. First of all, we are sending a GET request using. Then we are converting the response from JSON to JavaScript object. We are doing this because initially our response is in JSON format and we have to convert it into a JavaScript object to be able to use it. So we do that using method. This is what our object looks like after conversion from JSON.

          </p>
            <br/>
            Feel free to use the code and do some experiments. Or you can make your own version of the free URL shortener by making changes to the layout or design and maybe adding more functionality to it....
            </p> 
            <p style={{textAlign:'center'}}>
            <button>Read More</button>
              </p>  
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

Home.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

Home.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Home)