"use strict";

import PropTypes from 'prop-types';
import { useState } from 'react';
import { withTranslation } from '../i18n';
import Head from 'next/head';
import Header from './parts/header';
import Footer from './parts/footer';
import { useEffect } from 'react';
import AD2HS from './parts/ad2hs';

const Page = ({ t }) => {

    const [search, setSearch] = useState('');

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

    const supported_sites = [
        {
            icon: 'twitter',
            title: 'Twitter',
            desc: 'Download Twitter Videos/GIFs & Fleets.',
            link: null,
        },
        // {
        //     icon: 'youtube',
        //     title: 'Youtube',
        //     desc: 'Download Youtube Videos MP4, Convert Youtube Video to MP3.',
        //     link: null,
        // },
        {
            icon: 'instagram',
            title: 'Instagram',
            desc: 'Download Instagram Videos & Stories.',
            link: null,
        },
        {
            icon: 'facebook',
            title: 'Facebook',
            desc: 'Download Facebook Videos & Stories.',
            link: null,
        },
        {
            icon: 'tiktok',
            title: 'TikTok',
            desc: 'Download TikTok Videos Without Watermark.',
            link: null,
        },
        {
            icon: 'reddit',
            title: 'Reddit',
            desc: 'Download Reddit Videos With Audio.',
            link: null,
        },
        {
            icon: 'pinterest',
            title: 'Pinterest',
            desc: 'Download Pinterest Videos & GIFs.',
            link: null,
        },
        {
            icon: 'vimeo',
            title: 'Vimeo',
            desc: 'Download Vimeo Videos.',
            link: null,
        },
        {
            icon: 'periscope',
            title: 'Periscope',
            desc: 'Download Periscope Live Replays MP4.',
            link: null,
        },
        {
            icon: 'okru',
            title: 'OK.RU',
            desc: 'Download OK.RU Videos.',
            link: null,
        },
        {
            icon: 'linkedin',
            title: 'LinkedIn',
            desc: 'Download LinkedIn Videos.',
            link: null,
        },
        {
            icon: 'vk',
            title: 'VK',
            desc: 'Download VK Videos.',
            link: null,
        },
        {
            icon: 'pornhub',
            title: 'PornHub',
            desc: 'Download PornHub Videos.',
            link: null,
        },
        {
            icon: 'triller',
            title: 'Triller',
            desc: 'Download Triller Videos.',
            link: null,
        },
    ];

    return (
        <div id="supported_sites">
            <Head>
                <title>{t('supported_websites')} - DDLVid</title>    
                <meta name="description" content={t('meta_description')} />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@ddl_vid" />
                <meta name="twitter:title" content={'DDLVid - ' + t('supported_websites')} />
                <meta name="twitter:description" content={t('meta_description')} />
                <meta name="twitter:creator" content="@ddl_vid" />
                <meta name="twitter:image" content="https://ddlvid.com/assets/images/og.png?2" /> 
                <meta property="og:title" content={'DDLVid - ' + t('supported_websites')} />
                <meta property="og:description" content={t('meta_description')} />
                <meta property="og:image" content="https://ddlvid.com/assets/images/og.png?2" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://ddlvid.com/supported-websites" />
                <meta property="og:site_name" content="DDLVid" />
                <link rel="alternate" hrefLang="en" href="https://ddlvid.com/supported-websites" />
                <link rel="alternate" hrefLang="x-default" href="https://ddlvid.com/supported-websites" />
                <link rel="alternate" hrefLang="fr" href="https://ddlvid.com/fr/supported-websites" />
                <link rel="alternate" hrefLang="pt" href="https://ddlvid.com/pt/supported-websites" />
            </Head>
            <main>
                <Header />
                <div id="content">
                    <div id="pageContent" className="container">
                        <h1>{t('supported_websites')}</h1>
                        
                        <div className="card supported_websites">
                            <div className="search">
                                <input
                                    type="text" 
                                    placeholder={t("search") + '...'}
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </div>
                            <div className="results">
                                <div className="items">
                                    {supported_sites.map((site, i) => {
                                        if (site.title.toLowerCase().indexOf(search.toLowerCase()) >= 0) {
                                            return (
                                                <div className="item" key={i}>
                                                    <div className="row">
                                                        <div className="col s4">
                                                            <span className={"icon " + site.icon}></span>
                                                            <span className="title">{site.title}</span>
                                                        </div>
                                                        <div className="col s8">
                                                            {t(site.title.toLowerCase().replace(".", "") + "_details")}
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        } else {
                                            return null;
                                        }
                                    })}
                                </div>
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

Page.getInitialProps = async () => ({
    namespacesRequired: ['supported-websites'],
})

Page.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('supported-websites')(Page)