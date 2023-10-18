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

const texttophotosPage = ({ t }) => {

  const [text, setText] = useState('');
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [prices, setPrices] = useState([]);
  const [Photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [iscopied, setIsCopied] = useState(false);
  const [subscriptionData, setSubscriptionData] = useState([]);
  const [state, setState] = useContext(UserContext);
  const [isPatreonModal, setIsPatreonModal] = useState(false);


  const texttophotosPage = async (e) => {
    setIsLoading(true)
    setPhotos([])
    setError(null);
    if (text !== "") {
      const { data: response } = await Axios.post(
        "/texttophotos", {text}
      );
      if (response?.photos?.length !== 0) {
        setPhotos(response?.photos)
      } else {
        setError("Result Not Found")
      }
      setIsLoading(false)
    } else {
      setError('Text is required.');
      setIsLoading(false)
    }
    return false;
  }
  function downloadImage(image) {
    fetch(image)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.blob();
      })
      .then(blob => {
        const url = URL.createObjectURL(blob);
        // Create an anchor element to trigger the download
        const a = document.createElement('a');
        a.href = url;
        a.download = 'image.jpg'; // You can set the desired filename here
        document.body.appendChild(a);
        a.click();
        // Clean up the URL object after download
        URL.revokeObjectURL(url);
      })
      .catch(error => {
        console.error('Error downloading the image:', error);
      });
  }
  
  // Call the function to initiate the download when needed
  const fetchPrices = async () => {
    const { data: response } = await Axios.get(
      "/prices"
    );
    setPrices(response?.data[2]);
  };
  // const fetchSubscriptionData = async () => {
  //   const { data: response } = await Axios.get(
  //     "/subscription"
  //   );
  //   setSubscriptionData(response)
  // };

  const AfterClosePatreon = () => {
    setIsPatreonModal(false)
    if (state?.data) {
      setIsCopied(false)
      texttophotosPage()
    } else {
      setIsModalOpen(true)
      setError("")
    }
  }
  const CheckURlValidation = () => {
    if (!state?.data) {
      setIsAccountModal(true)
      setError("")
    } else {
      setIsModalOpen(false)
      setIsPatreonModal(true)
      setError("")
    }
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
                <img className='banner_image' src={"/assets/images/main-ddlvid-banner.jpeg"} alt={"Image Crashed"} style={{ width: '100%', height: 'auto' }} />
                <h1>{t('textvideo-headline')}</h1>
                <div className="desc">
                  {lntobr(t('textvideo-sub-headline'))}
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
                      placeholder="Please enter text"
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      type='text'
                      required
                      autoComplete="off"
                      className={(error) ? 'has-error' : null}
                    />
                    <div className="download">
                      <button disabled={isLoading} onClick={() => CheckURlValidation()}>{t('btn-text')}</button>
                    </div>

                    {error ? <div className="error_message" onClick={() => setError(null)}>{error}</div> : null}
                  </div>
                </div>
               <div style={{marginTop:'30px'}}>
               {
                      isLoading && <ApiLoader/>
                    }
               </div>
              </div>
            </div>
          </div>
          {
            Photos &&   <div className='text_video_section'>
           {
            Photos?.map((img, index) =>{
                return <div key={index} className="text-images-wrapper">
<div>
<img src={img ? img : "/assets/images/imageError.png"} alt={"Image Crashed"} onError={"/assets/images/imageError.png"} />
<p className='text-center'>
                        <button onClick={() => downloadImage(img)} >Download</button>
                    </p>
</div>

</div>
            })
           }
      </div>
          }
        
         {
          isModalOpen &&  <LoginModal setIsModalOpen={setIsModalOpen}/>
         }
          {
                isPatreonModal && <PatreonModal setIsAccountModal={setIsPatreonModal} MainFunc={AfterClosePatreon}/>
               }
          <div className="section5">
            <div className="container">
              <div className="img" />
                <h2>{t('best_text_to_video_conerter')}</h2>
                <p>
                  {lntobr(t('text_video_des'))}
                </p>
            </div>
          </div>
          <div className='blog-article container'>
          <img src={"/assets/images/ddlvide-image.jpeg"} alt={"Image Crashed"} style={{ width: '100%', height: 'auto' }} />
          <p>
                  {lntobr(t('text_video_des'))}
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
                }}>{t('start_text_video')}</a>
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

texttophotosPage.getInitialProps = async () => ({
  namespacesRequired: ['urlshortener'],
})

texttophotosPage.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('text-to-photos')(texttophotosPage)