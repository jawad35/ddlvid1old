"use strict";

import AD2HSBanner from '../parts/ad2hs-banner';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { withTranslation } from '../../i18n';
import {InlineShareButtons} from 'sharethis-reactjs';
import { showPopup } from '../../popup';

const Template = ({ t, result, site, link }) => {
    if (result) {
        const [quality, setQuality] = useState(result.videos[0].quality);
        
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
                                property: '5f0be2eb7df6de00133235b5',
                            }}
                        />
                    </div>
                </div>
                <AD2HSBanner />
                <div className="videos video-with-quality">
                    {result.videos.length > 1 ? (
                        <div id="quality">
                            {result.videos.map((video, i) => (
                                <button
                                    key={i}
                                    onClick={() => setQuality(video.quality)}
                                    className={(quality === video.quality) ? "btn btn-active" : "btn"}
                                >
                                    {video.quality}
                                </button>
                            ))}
                        </div>
                    ) : null}
                    <div>
                        {result.videos.map((video, i) => (
                            <div key={i}>
                                {video.quality === quality ? (
                                    <div className="animate-fadeIn">
                                        <div className="video">
                                            <video src={video.url} width="100%" height="320" controls muted></video>
                                        </div>
                                        <div className="download-buttons">
                                            <a onClick={() => {
                                                showPopup();
                                                window.location = video.url;
                                            }} target="_blank" className={"btn btn-download"}>
                                                {t('download_video')}
                                            </a>
                                        </div>
                                    </div>
                                ) : null}
                            </div>
                        ))}
                    </div>
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