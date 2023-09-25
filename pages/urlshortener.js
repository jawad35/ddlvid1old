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
import validator from 'validator';
import Copy from "copy-to-clipboard";
import ApiLoader from './parts/apiloader';
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
  const [isShortUrl, setIsShortUrl] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [iscopied, setIsCopied] = useState(false);
  const [subscriptionData, setSubscriptionData] = useState([]);

  const Navigator = Router
  const [state, setState] = useContext(UserContext);
 
  const CreateStripeSession = async () => {
    const { data: response } = await Axios.post(
      "",
      {
        priceId: prices.id,
      }
    );
    Navigator.push(response.url)
    // window.location.href = response.url;
  };


//   const LinkShortener = async (e) => {
//     // Replace 'YOUR_API_KEY' with your actual Short.io API key
//  const apiKey = 'sk_szSN6p07mPvExEZA';
//  const longUrl = 'https://example.com'; // The URL you want to shorten
 
//  // Define the API endpoint
//  const apiUrl = 'https://api.short.io/links';
 
//  // Create an object with the data to send in the POST request
//  const postData = {
//    originalURL: longUrl,
//    domain: 'link.try123.com', // Replace with your Short.io custom domain
//  };
 
//  // Make the API request
//  fetch(apiUrl, {
//    method: 'POST',
//    headers: {
//      'Content-Type': 'application/json',
//      'Authorization': `Bearer ${apiKey}`,
//    },
//    body: JSON.stringify(postData),
//  })
//    .then(response => response.json())
//    .then(data => {
//      // The short URL will be in the 'data.link' property of the response
//      console.log('Short URL:', data.link);
//    })
//    .catch(error => {
//      console.error('Error creating short URL:', error);
//    });
//    }

  const LinkShortener = async (e) => {
    setIsLoading(true)
    setError(null);
    if (link !== "") {
      const { data: response } = await Axios.post(
        "/shorturl", {link}
      );
      setIsShortUrl(response?.url)
      setIsLoading(false)
    } else {
      setError('Link is required.');
      setIsLoading(false)
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
        setIsCopied(false)
        setIsShortUrl(false)
        LinkShortener()
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
                <h1>{t('shortener_headline')}</h1>
                <div className="desc">
                  {lntobr(t('shortener_sub_headline'))}
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
                      <button disabled={isLoading} onClick={() => CheckURlValidation()}>{t('get_url_btn')}</button>
                    </div>
                    {
                      isLoading && <ApiLoader/>
                    }
                    {error ? <div className="error_message" onClick={() => setError(null)}>{error}</div> : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {
            isShortUrl &&   <div className='short_url_section'>
            <p>Here is your shorten url</p>
            <p className='shorten_url'>
              {isShortUrl}
            </p>
            <p>
            <button onClick={() => {
              Copy(isShortUrl)
              setIsCopied(true)
            }}>{iscopied ? "Copied" :"Copy"}</button>
            </p>
      </div>
          }
        
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
              <div>You must have to login before checkout <Link  href="/login"><a style={{color:'#0093E9'}}>Login!</a></Link></div>
              <p style={{textAlign: 'center'}}>
                  <button onClick={() => {
                    if (state?.data) {
                      if (state?.data && subscriptionData?.length === 0) {
                        CreateStripeSession()
                      } else {
                          LinkShortener()
                      }
                    } else {
                      Navigator.push('/login')
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
                <h2>{t('best_free_online_url_shortener')}</h2>
                <p>
                  {lntobr(t('url_shorten_des'))}
                </p>
            </div>
          </div>
          <div className='blog-article container'>
          <img src={"/assets/images/ddlvide-image.jpeg"} alt={"Image Crashed"} style={{ width: '100%', height: 'auto' }} />
          <p className='blog-article-text'>
          We are adding services to The World's Best Video Downloader & created the safest URL shortener on the planet, no Malware or spam adverts on your computer for your total peace of mind!
          <br/>
          <p style={{margin:'15px 0px'}}>
          We have safely been offering SAAS tools to our millions of users for over 3 years now so, jump on in & join the DDLVid community now! please insert banner and image same as on every page!
          </p>
          </p>
            <p style={{textAlign:'center'}}>
            <button>Read More</button>
              </p>  
          </div>
          <div className="section8">
            <div className="container">
              <div className="start">
                <a className="btn" onClick={() => {
                  window.document.querySelector("#link").focus();
                  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                }}>{t('start_shortener')}</a>
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

Home.getInitialProps = async () => ({
  namespacesRequired: ['urlshortener'],
})

Home.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('urlshortener')(Home)