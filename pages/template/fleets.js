"use strict";

import AD2HSBanner from '../parts/ad2hs-banner';
import PropTypes from 'prop-types';
import { withTranslation } from '../../i18n';
import {InlineShareButtons} from 'sharethis-reactjs';
import { showPopup } from '../../popup';

const Template = ({ t, result, site, link }) => {
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
                            {result.videos.map((video, i) => (
                                <div key={i}>
                                    {video.type === "image" ? (
                                        <div>
                                            <div className="thumbImage" style={{height:320}}>
                                                <img src={video.url} alt={result.title} />
                                            </div>
                                            <p>
                                                <a onClick={() => {
                                                    showPopup();
                                                    window.location = video.url;
                                                }} className={"btn btn-download"}>
                                                    {t('download')}
                                                </a>
                                            </p>
                                        </div>
                                    ) : (
                                        <div>
                                            <div className="video">
                                                <video src={video.url} width="100%" height="320" controls muted></video>
                                            </div>
                                            <p>
                                                <a onClick={() => {
                                                    showPopup();
                                                    window.location = video.url;
                                                }} target="_blank" className="btn btn-download">
                                                    {t('download')}
                                                </a>
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                            {result.videos.length === 0 ? (
                                <div style={{textAlign: 'center'}}>No fleets found.</div>
                            ) : null}
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