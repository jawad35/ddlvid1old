"use strict";

import { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { i18n, Link, withTranslation, Router } from '../../i18n';
import { UserContext } from '../../Context';

const Header = ({ t }) => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [theme, setTheme] = useState("light");
    const [state, setState] = useContext(UserContext);
    
    const handleLogout = () => {
        setState({ data: null, loading: false, error: null });
        localStorage.removeItem("token");
        Router.push("/");
      };
    useEffect(() => {
        if (typeof window !== "undefined") {
            if ("theme" in window.localStorage) {
                window.document.querySelector("html").classList.add(window.localStorage.theme);
                setTheme(window.localStorage.theme);
            } else {
                if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    window.document.querySelector("html").classList.add("dark");
                    setTheme("dark");
                }
            }
        }
    }, []);

    const updateTheme = (theme) => {
        setTheme(theme);
        window.document.querySelector("html").classList.remove("light");
        window.document.querySelector("html").classList.remove("dark");
        window.document.querySelector("html").classList.add(theme);
        window.localStorage.setItem("theme", theme);
    };

    const langs = [
        {
            title: 'English',
            value: 'en'
        },
        {
            title: 'Français',
            value: 'fr'
        },
        {
            title: 'Português Brasileiro',
            value: 'pt'
        }
    ];

    return (
        <div id="header">
            <div className="container">
                <div id="logo">
                    <Link href="/">
                        <a className="logo" title={t('headline')}>
                        </a>
                    </Link>
                </div>

                <div id="nav" className={(showMobileMenu) ? 'show-menu' : null}>
                    {/* <div id="lang">
                        <select
                            value={i18n.language}
                            onChange={(e) => {
                                i18n.changeLanguage(e.target.value);
                                setShowMobileMenu(false);
                            }}
                            aria-label={t('site_language')}
                        >
                            {langs.map((lang) => {
                                return <option value={lang.value} key={lang.value}>{lang.title}</option>
                            })}
                        </select>
                    </div> */}
                    <ul>
                        <li>
                            <Link href="/"><a onClick={() => setShowMobileMenu(false)} title={t('home') + ' - DDLVid'}>{t('home')}</a></Link>
                        </li>
                        <li>
                            <Link href="/urlshortener"><a onClick={() => setShowMobileMenu(false)} title={t('url_shortener')}>{t('url_shortener')}</a></Link>
                        </li>
                         <li>
                            <Link href="/about"><a onClick={() => setShowMobileMenu(false)} title={t('about_us') + ' - DDLVid'}>{t('about_us')}</a></Link>
                        </li>
                        <li>
                            <Link href="/contact"><a onClick={() => setShowMobileMenu(false)} title={t('contact_us')}>{t('contact_us')}</a></Link>
                        </li>
                        {/* <li>
                            <Link href="/blogs"><a onClick={() => setShowMobileMenu(false)} title={t('blogs')}>{t('blogs')}</a></Link>
                        </li> */}
                        <li>
                            {
                                state.data ? <a onClick={() =>  handleLogout()}>Logout</a> : <Link href="/login"><a onClick={() => setShowMobileMenu(false)} title={t('login')}>{t('login')}</a></Link>
                            }
                        </li>
                        {/* <li>
                            <a href="https://telegram.me/ddlvid_bot" title="DDLVid Telegram Bot" target="_blank">Telegram</a>
                        </li> */}
                    </ul>
                </div>
                
                {theme === "light" ? (
                    <a onClick={() => updateTheme("dark")} className="theme dark"><i></i> <span>{t('dark_mode')}</span></a>
                ) : (
                    <a onClick={() => updateTheme("light")} className="theme light"><i></i> <span>{t('light_mode')}</span></a>
                )}
                
                <a href="https://telegram.me/ddlvid_bot" id="telegramBot" target="_blank">DDLVid Telegram Bot</a>

                <span className="mobileMenuButton" onClick={() => setShowMobileMenu(!showMobileMenu)}></span>
                {showMobileMenu ? <div className="mobileMenuOverlay" onClick={() => setShowMobileMenu(false)} /> : null}

                <div className="clear" />
            </div>
        </div>
    )
}

Header.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('header')(Header)