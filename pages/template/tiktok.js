"use strict";

import AD2HSBanner from '../parts/ad2hs-banner';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { withTranslation } from '../../i18n';
import {InlineShareButtons} from 'sharethis-reactjs';
import { showPopup } from '../../popup';

const Template = ({ t, result, site, link, showEmailForm }) => {
    if (result) {
        const [withoutWatermark, setWithoutWatermark] = useState((result.original_video) ? true : false);
        
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
                <div className="videos video-tiktok">
                    <div id="quality">
                        {result.original_video ? (
                            <button
                                onClick={() => setWithoutWatermark(true)}
                                className={(withoutWatermark === true) ? "btn btn-active btn-icon btn-without-watermark" : "btn btn-icon btn-without-watermark"}
                            >
                                {t('without_watermark')}
                            </button>
                        ) : null}
                        <button
                            onClick={() => setWithoutWatermark(false)}
                            className={(withoutWatermark === false) ? "btn btn-active btn-icon btn-with-watermark" : "btn btn-icon btn-with-watermark"}
                        >
                            {t('with_watermark')}
                        </button>
                    </div>
                    <div>
                        {result.original_video ? (
                            <div>
                                {withoutWatermark === true ? (
                                    <div className="animate-fadeIn">
                                        <div className="video">
                                            <video src={result.download_original_video} width="100%" height="320" controls muted></video>
                                        </div>
                                        <p>
                                            <a onClick={() => {
                                                showEmailForm(result.download_original_video);
                                            }} target="_blank" className={"btn btn-download"}>
                                                {t('download')}
                                            </a>
                                        </p>
                                    </div>
                                ) : null}
                            </div>
                        ) : null}
                        <div>
                            {withoutWatermark === false ? (
                                <div className="animate-fadeIn">
                                    <div className="video">
                                        <video src={result.download_video} width="100%" height="320" controls muted></video>
                                    </div>
                                    <p>
                                        <a onClick={() => {
                                            showEmailForm(result.download_video);
                                        }} target="_blank" className={"btn btn-download"}>
                                            {t('download')}
                                        </a>
                                    </p>
                                </div>
                            ) : null}
                        </div>
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
