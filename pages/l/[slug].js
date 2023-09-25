"use strict";

import PropTypes from 'prop-types';
import { withTranslation } from '../../i18n';
import Head from 'next/head';
import Header from '../parts/header';
import Footer from '../parts/footer';
import { useEffect, useState } from 'react';
import AD2HS from '../parts/ad2hs';
import { useRouter } from 'next/router';
import Axios from 'axios';

const Link = () => {
    const router = useRouter();
    const [isID, setIsID] = useState(false)
    const { query } = router;
    const fetchLink = async () => {
        await Axios.post(
          "/getlink", {id:query?.slug}
        ).then(res => {
            if (res.data?.redirectUrl?.length !== undefined) {
                window.location.href = res.data?.redirectUrl
            } else {
                setIsID(true)
            }
        }).catch(err => console.log(err));
        // setPrices(response?.data[0]);
      };
    useEffect(() => {
        setIsID(false)
       fetchLink()
    }, [])

    return (
        <div id="page">
            <Head>
                <title>Link Shortener - DDLVid</title>    
                <meta name="description" content="DDLVID Link Redirection" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@ddl_vid" />
                <meta name="twitter:title" content="DDLVid - Shorten Link" />
                <meta name="twitter:description" content="DDLVID Link Redirection" />
                <meta name="twitter:creator" content="@ddl_vid" />
                <meta name="twitter:image" content="https://ddlvid.com/assets/images/og.png?2" /> 
                <meta property="og:title" content="DDLVid - Shorten Link" />
                <meta property="og:description" content="DDLVID Link Redirection" />
                <meta property="og:image" content="https://ddlvid.com/assets/images/og.png?2" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://ddlvid.com/privacy-policy" />
                <meta property="og:site_name" content="DDLVid" />
            </Head>
            <main>
                <Header />
                {
                    isID ? <div className='not-found-shortid'>
                        Result Not Found
                    </div> :  <div id="loader">
                       <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="180px" height="180px" viewBox="0 0 180 180" enableBackground="new 0 0 180 180">
                        <path d="M49.986 13.226v112.52c22.117-.295 44.354.8 66.374-1.098 19.947-1.902 41.022-7.9 51.93-20.97 11.94-14.11 12.673-31.538 10.12-47.56-2.545-13.692-12.094-27.54-29.344-34.23-21.655-9-47.3-8.797-71.487-8.663zm24.82 20.424c18.934-.976 44.055-1.7 56.95 3.657 13.55 6.04 23.03 16.99 23.768 28.652.987 9.275-1.6 19.22-10.546 26.22-7.87 6.88-18.644 12.106-30.958 13.452-13.216 1.822-26.715.882-40.06.823z"/>
                        <path d="M130.086 165.907V53.387c-22.117.295-44.354-.8-66.374 1.098-19.947 1.902-41.022 7.9-51.93 20.97-11.94 14.11-12.673 31.538-10.12 47.56 2.545 13.692 12.094 27.54 29.344 34.23 21.655 9 47.3 8.797 71.487 8.663zm-24.82-20.424c-18.934.976-44.055 1.7-56.95-3.657-13.55-6.04-23.03-16.99-23.768-28.652-.987-9.275 1.6-19.22 10.546-26.22 7.87-6.88 18.644-12.106 30.958-13.452 13.216-1.822 26.715-.882 40.06-.823z"/>
                    </svg>
                    </div>
                }
               
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

Link.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

Link.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Link)