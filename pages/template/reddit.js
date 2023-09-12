"use strict";

import AD2HSBanner from '../parts/ad2hs-banner';
import PropTypes from 'prop-types';
import { withTranslation } from '../../i18n';
import {InlineShareButtons} from 'sharethis-reactjs';

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
                    {"video" in result ? (
                        <div>
                            {result.audio ? (
                                <div>
                                    <p>{t('video')} :</p>
                                    <div className="video">
                                        <video src={result.video} id="player" width="100%" height="320" controls muted></video>
                                    </div>
                                    <p>{t('audio')} :</p>
                                    <div className="video">
                                        <audio src={result.audio} id="audio" width="100%" controls></audio>
                                    </div>
                                    <div className="download-buttons">
                                        <a onClick={() => window.open(result.download, '_blank')} target="_blank" className="btn btn-download">
                                            {t('download_video_with_sound')}
                                        </a>
                                        <a onClick={() => window.open(result.video, '_blank')} target="_blank" className="btn btn-download">
                                            {t('download_video_without_sound')}
                                        </a>
                                        <a onClick={() => {
                                            window.open(result.audio, '_blank')
                                        }} target="_blank" className="btn btn-download btn-download-audio">
                                            {t('download_audio')}
                                        </a>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <div className="video">
                                        <video src={result.video} id="player" width="100%" height="320" controls muted></video>
                                    </div>
                                    <div className="download-buttons">
                                        <a onClick={() => {
                                            window.open(result.video, '_blank')
                                        }} target="_blank" className="btn btn-download">
                                            {t('download_video')}
                                        </a>
                                    </div>
                                </div>
                            )}
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