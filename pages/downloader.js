"use strict";

import PropTypes from 'prop-types';
import Head from 'next/head';
import { Router, withTranslation } from '../i18n';
import Header from './parts/header';
import Footer from './parts/footer';
import AD2HS from './parts/ad2hs';
import { useRouter } from 'next/router';
import Axios from 'axios';
import VideoDownloader from './parts/VideoDownloaders';

const Download = ({ t}) => {

    const router = useRouter();
    const { query } = router;
    console.log(query)
// Function to download a file
// async function downloadFile(url, filename) {
//   try {
//     // Fetch the file
//     const response = await fetch(url);
    
//     // Check if the request was successful
//     if (response.status === 200) {
//       throw new Error(`Unable to download file. HTTP status: ${response.status}`);
//     }

//     // Get the Blob data
//     const blob = await response.blob();

//     // Create a download link
//     const downloadLink = document.createElement('a');
//     downloadLink.href = URL.createObjectURL(blob);
//     downloadLink.download = filename;

//     // Trigger the download
//     document.body.appendChild(downloadLink);
//     downloadLink.click();

//     // Clean up
//     setTimeout(() => {
//       URL.revokeObjectURL(downloadLink.href);
//       document.body.removeChild(downloadLink);
//     }, 100);
//   } catch (error) {
//     console.error('Error downloading the file:', error.message);
//   }
// }

// Usage

// useEffect(() => {
// downloadFile("https://v39.tiktokcdn-us.com/11b63b0ea93a389bea06382f85579035/65109c18/video/tos/useast2a/tos-useast2a-ve-0068c001/oUkePDg1EoOGBDNEIwJxjBAuQRf1wJN5pQWzrh/?a=1233&ch=0&cr=13&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=704&bt=352&bti=OUBzOTg7QGo0NzZAL3AjLTAzYCM1NTNg&cs=0&ds=6&ft=_rbUxBnZq8Zmo_RC~Q_vjFiEnreLrus&mime_type=video_mp4&qs=4&rc=NjdpN2ZoPDU4O2ZkaTo4aUBpMzNyeDY6ZnJ3bTMzNzczM0AwLjMxYF4uXi4xXjMxNWE0YSMwNF4zcjQwX2xgLS1kMTZzcw%3D%3D&l=202309241425297778D9A64D9B058D2F84&btag=e00018000", 'image.jpg');

// }, [])
const localDownload = async (url, backup_url, filename, ext) => {
    if (typeof ext === "undefined") {
        ext = ".mp4";
    }
    if (filename === "") {
        filename = (new Date()).getTime() + ext;
    }
    try {
        const config = {
            responseType: 'blob'
        };
        const r = await Axios.get(url, config);
        const blob = new Blob([r.data]);
        const link = window.document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = "DDLVID.COM-" + filename;
        link.click();
    } catch (error) {
        console.log(error)
        // window.location = backup_url;
    }
};
    return (
        <div id="download">
            {query?.description !== "undefined" ? (
                <Head>
                    <title>{query?.description === "undefined" ? "Video" : query?.description} - DDLVid</title>
                    <meta property="og:title" content={query?.description === "undefined" ? "Video" : query?.description} />
                    <meta property="og:description" content="Click Here To Download" />
                    <meta property="og:image" content="https://ddlvid.com/icon.png" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content={"https://ddlvid.com/download?link=" + encodeURIComponent(query?.link)} />
                    <meta property="og:site_name" content="DDLVid" />
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:site" content="@ddl_vid" />
                    <meta name="twitter:title" content="Click Here To Download" />
                    <meta name="twitter:description" content={query?.description === "undefined" ? "Video" : query?.description} />
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
                    <div className="downloadContent">

                        {query?.success ==="true" ? (
                            <div className="container card">
                                <div className='desc video_downloader_page_title'>
                                    {
                                        query?.description !== "undefined" && <span>{query.description}</span>
                                    }
                                </div>
                                {/* <div className="promo" style={{
                                    textAlign: "center",
                                    fontWeight: "bold",
                                    fontSize: "18px",
                                    margin: "20px 0"
                                }}>
                                    <a  href="https://v39.tiktokcdn-us.com/11b63b0ea93a389bea06382f85579035/65109c18/video/tos/useast2a/tos-useast2a-ve-0068c001/oUkePDg1EoOGBDNEIwJxjBAuQRf1wJN5pQWzrh/?a=1233&ch=0&cr=13&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=704&bt=352&bti=OUBzOTg7QGo0NzZAL3AjLTAzYCM1NTNg&cs=0&ds=6&ft=_rbUxBnZq8Zmo_RC~Q_vjFiEnreLrus&mime_type=video_mp4&qs=4&rc=NjdpN2ZoPDU4O2ZkaTo4aUBpMzNyeDY6ZnJ3bTMzNzczM0AwLjMxYF4uXi4xXjMxNWE0YSMwNF4zcjQwX2xgLS1kMTZzcw%3D%3D&l=202309241425297778D9A64D9B058D2F84&btag=e00018000.mp4" download="downloaded_video.mp4">⚡️🔒 Download with Lightning Speed and Unbreakable Security! Get 59% off NordVPN + 3 extra months! 💪🌐</a>
                                </div> */}
                               <div className='video_downloader_container'>
                               <video controls>
                               <source src={`${query?.link}`} />
                                </video >
                                </div> 
                               {
                                query?.audio !== "undefined" &&  <div className='audio_downloader_container'>
                                <p>You can download audio music here:</p>
                           <audio controls>
                           <source src={`${query?.audio}`} type="audio/mpeg" />
                            </audio>
                            </div>
                            
                               }
                               <VideoDownloader videoUrl={query?.link} title={query?.description}/>
                                {/* <div className='video_downloader_page_note'>
                                    <strong>How to download the video?</strong>
                                    <br/>
                                    <span>Click right three dots to download video</span>
                                </div> */}
                                {/* <a href={query?.link} download={"video.mp4"}>Download</a> */}
                            </div>
                        ) : (
                            <div className="card">
                                <div className="error_description">
                                    <div className="container">
                                        <div className="error">{t('404_headline')} :/</div>
                                        <p>{t('404_body1')}</p>
                                        <p>{t('404_body2')}</p>
                                    </div>
                                </div>
                            </div>
                        )}
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


Download.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('download')(Download)
