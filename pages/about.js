"use strict";

import Head from 'next/head';
import PropTypes from 'prop-types';
import { withTranslation } from '../i18n';
import Header from './parts/header';
import Footer from './parts/footer';
import { useState, useEffect } from 'react';
import AD2HS from './parts/ad2hs';
import AboutUsJson from '../public/static/locales/en/about.json'
const lntobr = (str) => {
    return str.split("\n").map(function(item, i) {
      return (
        <span key={i}>{item}<br/></span>
      )
    }); 
  };
const About = ({ t }) => {

    useEffect(() => {
        if (window.location.host.indexOf("localhost") < 0 && window.location.host.indexOf("127.0.0.1") < 0) {
            window._gaq = window._gaq || [];
            window._gaq.push(['_setAccount', 'UA-162923642-1']);
            window._gaq.push(['_trackPageview']);
        
            (function() {
                var ga = window.document.createElement('script');
                ga.type = 'text/javascript';
                ga.async = true;
                ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
                var s = window.document.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(ga, s);
            })();
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])

    return (
        <div id="contact">
            <Head>
                <title>{t('about_us')} - DDLVid</title>
                <meta name="description" content={t('meta_description')} />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@ddl_vid" />
                <meta name="twitter:title" content={'DDLVid - ' + t('about_us')} />
                <meta name="twitter:description" content={t('meta_description')} />
                <meta name="twitter:creator" content="@ddl_vid" />
                <meta name="twitter:image" content="https://ddlvid.com/assets/images/og.png?2" /> 
                <meta property="og:title" content={'DDLVid - ' + t('about_us')} />
                <meta property="og:description" content={t('meta_description')} />
                <meta property="og:image" content="https://ddlvid.com/assets/images/og.png?2" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://ddlvid.com/contact" />
                <meta property="og:site_name" content="DDLVid" />
                <link rel="alternate" hrefLang="en" href="https://ddlvid.com/" />
                <link rel="alternate" hrefLang="x-default" href="https://ddlvid.com/contact" />
                <link rel="alternate" hrefLang="en-au" href="https://ddlvid.com/contact" />
                <link rel="alternate" hrefLang="en-in" href="https://ddlvid.com/contact" />
                <link rel="alternate" hrefLang="en-br" href="https://ddlvid.com/contact" />
                <link rel="alternate" hrefLang="en-co" href="https://ddlvid.com/contact" />
                <link rel="alternate" hrefLang="en-mx" href="https://ddlvid.com/contact" />
                <link rel="alternate" hrefLang="en-pe" href="https://ddlvid.com/contact" />
                <link rel="alternate" hrefLang="fr" href="https://ddlvid.com/fr/contact" />
                <link rel="alternate" hrefLang="pt" href="https://ddlvid.com/pt/contact" />
                <link rel="canonical" href="https://ddlvid.com/contact" />    
            </Head>
            <main>
                <Header />
                <div id="content">
                    <div id="pageContent" className="container">
                        <h1>{AboutUsJson.about_us}</h1>
                        <p className="sub_title">{AboutUsJson.meta_description}</p>
                    </div>
                    <div className="responsive-container-block bigContainer card">
  <div className="responsive-container-block Container">
                <h2>{t('title')}</h2>
                <div>
                <p>
                  {lntobr(t('content'))}
                </p>
                </div>
               
    {/* <div className="allText aboveText">
      <p className="text-blk headingText">
        Welcome to DDLVid.com!
      </p>
      <p className="text-blk description">
        We are a team of developers who love platforms like X (Twitter). Youtube, Tiktok and we know the importance of being able to SAFELY download videos from latforms without the worry of malwares and viruses being placed on your computer, that's why we created the DDLVid Downloader!
      </p>
      <p className="text-blk description">
      3 years on from the site being created and we have safely downloaded millions of videos for our users across the World & introduced our Twitter & Telegram bots to make the downloading process even easier.
      </p>
      <p className="text-blk description">
      As we progress into an online SAAS tools website we have now introduced our URL link shortening service & we still have some great tools & AI features up our sleeves.
      </p>
      <p className="text-blk description">
      Thanks for trusting us, the World's safest video downloader service.
      </p>
    </div> */}
    {/* <img src={"/assets/images/ddlvide-image.jpeg"} alt={"Image Crashed"} style={{ width: '100%', height: 'auto', marginTop:'30px' }} /> */}
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

About.getInitialProps = async () => ({
    namespacesRequired: ['contact'],
})

About.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('about')(About)