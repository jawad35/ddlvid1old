"use strict";

import PropTypes from 'prop-types';
import { withTranslation } from '../i18n';
import Head from 'next/head';
import Header from './parts/header';
import Footer from './parts/footer';
import { useEffect } from 'react';
import AD2HS from './parts/ad2hs';

const Page = () => {

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
    }, [])

    return (
        <div id="page">
            <Head>
                <title>Privacy Policy - DDLVid</title>    
                <meta name="description" content="DDLVid takes your data privacy seriously. Our privacy policy explains who we are, how we collect, share and use Personal Information." />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@ddl_vid" />
                <meta name="twitter:title" content="DDLVid - Privacy Policy" />
                <meta name="twitter:description" content="DDLVid takes your data privacy seriously. Our privacy policy explains who we are, how we collect, share and use Personal Information." />
                <meta name="twitter:creator" content="@ddl_vid" />
                <meta name="twitter:image" content="https://ddlvid.com/assets/images/og.png?2" /> 
                <meta property="og:title" content="DDLVid - Privacy Policy" />
                <meta property="og:description" content="DDLVid takes your data privacy seriously. Our privacy policy explains who we are, how we collect, share and use Personal Information." />
                <meta property="og:image" content="https://ddlvid.com/assets/images/og.png?2" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://ddlvid.com/privacy-policy" />
                <meta property="og:site_name" content="DDLVid" />
            </Head>
            <main>
                <Header />
                <div id="content">
                    <div id="pageContent" className="container">
                        <h1>Privacy Policy</h1>
                        
                        <p>This Privacy Policy governs the manner in which DDLVid collects, uses, maintains and discloses information collected from users (each, a "User") of the http://ddlvid.com website ("Site").</p>

                        <h2>Non-personal identification information</h2>

                        <p>We may collect non-personal identification information about Users whenever they interact with our Site using Google Analytics. Non-personal identification information may include the browser name, the type of computer and technical information about Users means of connection to our Site, such as the operating system and the Internet service providers utilized and other similar information.</p>

                        <h2>Web browser cookies</h2>

                        <p>Our Site may use "cookies" to enhance User experience. User's web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. User may choose to set their web browser to refuse cookies, or to alert you when cookies are being sent. If they do so, note that some parts of the Site may not function properly.</p>

                        <h2>How we use collected information</h2>

                        <p>DDLVid.com may collect and use Users personal information for the following purposes:</p>

                        <ul>
                            <li><strong>To run and operate our Site</strong><br/> We may need your information display content on the Site correctly.</li>
                            <li><strong>To improve customer service</strong><br/> Information you provide helps us respond to your customer service requests and support needs more efficiently.</li>
                            <li><strong>To improve our Site</strong><br/> We may use feedback you provide to improve our products and services.</li>
                        </ul>

                        <h2>Your acceptance of these terms</h2>

                        <p>By using this Site, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our Site. Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes.</p>

                        <h2>Contacting us</h2>

                        <p>If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please <a href="mailto:contact@aimadnet.com?Subject=DDLVid">Contact Us.</a></p>
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

Page.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

Page.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Page)