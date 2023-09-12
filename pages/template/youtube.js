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
                <div className="youtube-video">
                    {"videos" in result ? (
                        <>
                            <div className="list">
                                {result.videos.map((video, i) => (
                                    <div key={i} className="item">
                                        <div className="row">
                                            <div className="col s4">
                                                <div className="thumb">
                                                    <img src={video.thumb} alt={video.title} />
                                                </div>
                                            </div>
                                            <div className="col s8">
                                                <div className="details">
                                                    <div className="title">{video.title}</div>
                                                    <div className="length">{video.length}</div>
                                                </div>
                                                <div className="footer">
                                                    <a className="btn" target="_blank" onClick={() => showEmailForm(video.url)}>Download Video</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    ) : null}
                    {"video" in result ? (
                        <div>
                            <div className="video">
                                <video src={result.video} width="100%" height="320" controls muted></video>
                            </div>
                            <div className="download-buttons">
                                <a onClick={() => {
                                    showEmailForm(result.video);
                                }} className={"btn btn-download"}>
                                    {t('download_video')}
                                </a>
                                {"audio" in result && result.audio ? (
                                    <a onClick={() => {
                                        showEmailForm(result.audio);
                                    }} className={"btn btn-download btn-download-audio"}>
                                        {t('download_mp3')}
                                    </a>
                                ) : null}
                            </div>
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
