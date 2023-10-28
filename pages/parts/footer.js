"use strict";

import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { i18n, Link, withTranslation } from '../../i18n';

const Footer = ({ t }) => {

    const [cookieBannerShow, setCookieBannerShow] = useState(true);

    useEffect(() => {
        if (typeof window === 'undefined' || typeof window !== 'undefined' && 'hideCookieBanner' in window.localStorage) {
            setCookieBannerShow(false);
        }
    }, []);

    const hideBanner = () => {
        window.localStorage.setItem('hideCookieBanner', true);
        setCookieBannerShow(false);
    }

    const changeLang = (e, lang) => {
        e.preventDefault();
        i18n.changeLanguage(lang);
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    const langs = {
        'en': 'English',
        'fr': 'Français',
        'pt': 'Português Brasileiro'
    };

    return ( <>
    <footer className="footer-distributed">



{/* <div className="footer-center">

  <div>
    <i className="fa fa-map-marker"></i>
    <p><span>21 Revolution Street</span> Rutland, VT</p>
  </div>

  <div>
    <i className="fa fa-phone"></i>
    <p>911</p>
  </div>

  <div>
    <i className="fa fa-envelope"></i>
    <p><a href="mailto:support@company.com">support@company.com</a></p>
  </div>

</div> */}

{/* <div className="footer-right">

  <p className="footer-company-about">
    <span>About this guy</span> Blah Blah..Blah blah bl;ah blah
  </p>

  <div className="footer-icons">

    <a href="#"><i className="fa fa-facebook"></i></a>
    <a href="#"><i className="fa fa-twitter"></i></a>
    <a href="#"><i className="fa fa-linkedin"></i></a>
    <a href="#"><i className="fa fa-github"></i></a>

  </div>

</div> */}

</footer>
<div id="footer">
            
            <div className="container">
                <div className="copy">
                    <img src='/assets/images/ddlvide-new-logo.png' />
                    Copyright &copy; DDLVid {new Date().getFullYear()}. {t('all_rights_reserved')}.
                    {" "}
                    <Link href="/privacy-policy"><a title={t('privacy_policy') + ' - DDLVid'}>{t('privacy_policy')}</a></Link>
                   
                </div>
                {/* <div className="right">
                    <div className="switch_lang">
                        {i18n.language ? (
                            <span className="lang">
                                <span className={"icon " + i18n.language}></span>
                                {langs[i18n.language]}
                            </span>
                        ) : null}
                        <div className="popup_langs">
                            <a href="/" title="DDLVid - Online Video Downloader" className="lang" onClick={(e) => changeLang(e, "en")}>
                                <span className="icon en"></span>
                                English
                            </a>
                            <a href="/fr" title="DDLVid - Téléchargeur de vidéos en ligne" className="lang" onClick={(e) => changeLang(e, "fr")}>
                                <span className="icon fr"></span>
                                Français
                            </a>
                            <a href="/pt" title="DDLVid - Download de Vídeos Online" className="lang" onClick={(e) => changeLang(e, "pt")}>
                                <span className="icon pt"></span>
                                Português Brasileiro
                            </a>
                        </div>
                    </div>
                </div> */}
                <div className="clear" />
            </div>
            {cookieBannerShow ? (
                <div id="cookiebanner" className="animated fadeInUp">
                    <div className="container">
                        <span>
                            {t('cookies_notice')} <Link href="/privacy-policy"><a title={t('privacy_policy') + ' - DDLVid'}>{t('privacy_policy')}</a></Link>
                        </span>
                        <button className="btn" onClick={() => hideBanner()}>{t('i_understand')}</button>
                    </div>
                </div>
            ) : null}
        </div>
    </>
      
    )
}

Footer.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('footer')(Footer)