"use strict";

import Head from 'next/head';
import PropTypes from 'prop-types';
import { withTranslation } from '../i18n';
import Header from './parts/header';
import Footer from './parts/footer';
import { useState, useEffect } from 'react';
import AD2HS from './parts/ad2hs';
import AboutUsJson from '../public/static/locales/en/about.json'
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
                    <div className="responsive-container-block bigContainer">
  <div className="responsive-container-block Container">
    <img className="mainImg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/eaboutus1.svg" />
    <div className="allText aboveText">
      <p className="text-blk headingText">
        Our Mission
      </p>
      <p className="text-blk subHeadingText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <p className="text-blk description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum pulvinar ullamcorper suspendisse ac eget. Pellentesque tempus leo in ullamcorper quis vestibulum ligula elementum ut.
      </p>
      <button className="explore">
        Explore
      </button>
    </div>
  </div>
  <div className="responsive-container-block Container bottomContainer">
    <img className="mainImg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/xpraup2.svg" />
    <div className="allText bottomText">
      <p className="text-blk headingText">
        Our Vision
      </p>
      <p className="text-blk subHeadingText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <p className="text-blk description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum pulvinar ullamcorper suspendisse ac eget. Pellentesque tempus leo in ullamcorper quis vestibulum ligula elementum ut.
      </p>
      <button className="explore">
        Explore
      </button>
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

About.getInitialProps = async () => ({
    namespacesRequired: ['contact'],
})

About.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('contact')(About)