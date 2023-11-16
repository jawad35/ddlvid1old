"use strict";

import Head from 'next/head';
import { Router, withTranslation } from '../i18n';
import Header from './parts/header';
import Footer from './parts/footer';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import AD2HS from './parts/ad2hs';
import { useRouter } from 'next/router';

const Download = () => {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(true);
    const router = useRouter();
    const VideoDownloader = async() => {
        const supported = true
        if (router?.query?.link !== "") {
          if (supported) {
            const { data: response } = await Axios.post(
              "/videodownload", {link:router?.query?.link, socialName:'twitter.com'}
            );
            console.log(response, 'hek8489')
            if (response?.data?.video_url) {
                Router.push({
                  pathname: "/downloader",
                  query: { link:response?.data?.video_url, description:response?.data?.description, success: response?.data?.success}
                });
                }
         
            } else {
            //  setError('Link not supported yet. please try later');
            }
          
          } else {
            // setError('Link not supported yet.');
          }
      }

    useEffect(() => {
       VideoDownloader()
       return
    }, [])
    return (
        <div id="download">
            {result ? (
                <Head>
                    <title>{result.title} - DDLVid</title>
                    <meta property="og:title" content={result.title} />
                    <meta property="og:description" content="Click Here To Download" />
                    <meta property="og:image" content="https://ddlvid.com/icon.png" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content={"https://ddlvid.com/download?router?.query?.link=" + encodeURIComponent(router?.query?.link)} />
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



export default withTranslation('download')(Download)
