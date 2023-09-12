"use strict";

import AD2HSBanner from '../parts/ad2hs-banner';
import PropTypes from 'prop-types';
import { withTranslation } from '../../i18n';
import {InlineShareButtons} from 'sharethis-reactjs';

const Template = ({ t, result, site, link, showEmailForm }) => {
    if (result) {
        return (
            <div className="card">
                <div className="video_infos">
                    {"title" in result ? (
                        <div className="info info_title">
                            {site ? (
                                <span>
                                    <span className={"site " + site}>{site}</span>{' '}
                                </span>
                            ) : null}
                            {result.title.split("\n").map((text, i) => (
                                <div key={i}>{text}<br/></div>
                            ))}
                        </div>
                    ) : null}

                    <div style={{marginTop: 30, marginBottom: 30}}>
                        <InlineShareButtons
                            config={{
                                alignment: 'left',
                                color: 'social',
                                enabled: true,
                                font_size: 16,
                                labels: 'cta',
                                language: 'en',
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
                                show_total: false,
                                size: 40,
                                url: 'https://ddlvid.com/download?link=' + encodeURIComponent(link),
                                property: '5f0be2eb7df6de00133235b5'
                            }}
                        />
                    </div>
                </div>
                <AD2HSBanner />
                <div className="videos">
                    {"videos" in result ? (
                        <div>
                            {site === "twitter" ? (
                                <div>
                                    <div className="video">
                                        <video src={result.featured_video} width="100%" height="320" controls muted></video>
                                    </div>
                                </div>
                            ) : null}

                            {result.videos.map((video, i) => (
                                <div key={i}>
                                    {site === "twitter" ? (
                                        <div>
                                            <p>
                                                <a onClick={() => {
                                                    showEmailForm(video.download);
                                                }} className={"btn btn-download btn-" + video.quality.toLowerCase() }>
                                                    {t('download')} ({t(video.quality)})
                                                </a>
                                            </p>
                                        </div>
                                    ) : (
                                        <div>
                                            <div className="video">
                                                <video src={video} width="100%" height="320" controls muted></video>
                                            </div>

                                            <p>
                                                <a onClick={() => {
                                                    showEmailForm(video);
                                                }} target="_blank" className="btn btn-download">
                                                    {t('download')}
                                                </a>
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    ) : null}
                    {"video" in result ? (
                        <div>
                            <div className="video">
                                <video src={result.video} width="100%" height="320" controls muted></video>
                            </div>
                            
                            {"download" in result && result.download ? (
                                <p>
                                    <a onClick={() => {
                                        showEmailForm(result.download);
                                    }} target="_blank" className="btn btn-download">
                                        {t('download')}
                                    </a>
                                </p>
                            ) : (
                                <p>
                                    <a onClick={() => {
                                        showEmailForm(result.video);
                                    }} target="_blank" className="btn btn-download">
                                        {t('download')}
                                    </a>
                                </p>
                            )}
                        </div>
                    ) : null}
                    {"gif" in result ? (
                        <div>
                            <div className="video">
                                <img src={result.gif} alt={result.title} style={{ width: '100%', height: 'auto' }} />
                            </div>

                            <p>
                                {/* <a href="https://go.nordvpn.net/aff_c?offer_id=15&aff_id=87658&source=ddlvid.com" target="_blank" download={result.title + ".gif"} className="btn btn-download btn-ad">
                                    Download with High Speed! Get NordVPN Offer!
                                </a> */}
                                <a href={result.gif} target="_blank" download={result.title + ".gif"} className="btn btn-download" onClick={() => showEmailForm(result.gif)}>
                                    {t('download')}
                                </a>
                            </p>
                        </div>
                    ) : null}
                </div>
            </div>
        )
    } 
    
    return null;
}

Template.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('download')(Template)
