"use strict";

import PropTypes from 'prop-types';
import { withTranslation } from '../i18n';
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
import CheckOutModal from './parts/checkoutmodal';
import LoginModal from './parts/loginmodal';
import PatreonModal from './parts/patreonmodal';
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
  const [isPatreonModal, setIsPatreonModal] = useState(false);

  const [state, setState] = useContext(UserContext);

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
  // const fetchSubscriptionData = async () => {
  //   const { data: response } = await Axios.get(
  //     "/subscription"
  //   );
  //   setSubscriptionData(response)
  // };

  // const AfterClosePatreon = () => {
  //   setIsPatreonModal(false)
  //   if (validator.isURL(link)) {
  //     if (state?.data) {
  //       setIsCopied(false)
  //       setIsShortUrl(false)
  //       LinkShortener()
  //     } else {
  //       setIsModalOpen(true)
  //       setError("")
  //     }
  //   } else {
  //     setError("Please Enter a Valid Url")
  //   }
  // }

  const CheckURlValidation = () => {
    LinkShortener()
    // setIsModalOpen(false)
    // setIsAccountModal(false)
    // setIsPatreonModal(true)
    setError("")
    // if (!state?.data) {
    //   setIsModalOpen(true)
    //   // setIsAccountModal(true)
    //   setError("")
    // } else {
    //   setIsModalOpen(false)
    //   // setIsAccountModal(false)
    //   setIsPatreonModal(true)
    //   setError("")
    // }
  }
  useEffect(() => {
    if (state?.data) {
      // fetchSubscriptionData()
      fetchPrices()
    }
  }, [state])
  
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
                {/* <img className='banner_image' src={"/assets/images/main-ddlvid-banner.jpeg"} alt={"Image Crashed"} style={{ width: '100%', height: 'auto' }} /> */}
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
          isModalOpen &&  <LoginModal setIsModalOpen={setIsModalOpen}/>
         }
          {/* {
                isPatreonModal && <PatreonModal setIsAccountModal={setIsPatreonModal} MainFunc={AfterClosePatreon}/>
               } */}
         {/* {
          isModalOpen &&  <CheckOutModal MainFunc={LinkShortener} setIsModalOpen={setIsModalOpen} priceId={prices?.id}/>
         } */}
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
          {/* <img src={"/assets/images/ddlvide-image.jpeg"} alt={"Image Crashed"} style={{ width: '100%', height: 'auto' }} /> */}
          <p className='blog-article-text'>
          We are adding services to The World's Best Video Downloader & created the safest URL shortener on the planet, no Malware or spam adverts on your computer for your total peace of mind!
          <br/>
          <p style={{margin:'15px 0px'}}>
          We have safely been offering SAAS tools to our millions of users for over 3 years now so, jump on in & join the DDLVid community now!
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