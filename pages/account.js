"use strict";

import Head from 'next/head';
import Router from 'next/router';
import PropTypes from 'prop-types';
import { withTranslation } from '../i18n';
import Header from './parts/header';
import Footer from './parts/footer';
import { useState, useEffect } from 'react';
import AD2HS from './parts/ad2hs';
import axios from 'axios';
import ReCAPTCHA from "react-google-recaptcha";

const recaptchaRef = React.createRef();

const Account = ({ t }) => {
console.log(t)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signUpEmail, setSignUpEmail] = useState('');
    const [signUpPassword, setSignUpPassword] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');
    const [isSignUpPage, setIsSignUpPage] = useState(false);
    const Navigator = Router
    useEffect(() => {
        if (window.location.host.indexOf("localhost") < 0 && window.location.host.indexOf("127.0.0.1") < 0) {
            window._gaq = window._gaq || [];
            window._gaq.push(['_setAccount', 'UA-162923642-1']);
            window._gaq.push(['_trackPageview']);

            (function() {
                var ga = window.document.createElement('script');
                ga.type = 'text/javascript';
                ga.async = true;
                ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
                var s = window.document.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(ga, s);
            })();
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])

    const validateEmail = (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    const Login = () => {
        if (password?.length < 6) {
           return setError("Password Should be greater than 5 characters.")
        } else {
            setError("")
        }
        if (email !== '' && password !== '') {
            if (validateEmail(email)) {
                setLoading(true);
                setSuccess(false);
                setError("");
                axios.post("/login", {
                    email,
                    password
                }).then(res => {

                    if (res.data.success) {
                        console.log(res)
                        setLoading(false);
                        setSuccess(true);
                        setEmail("");
                        setPassword("");
                        localStorage.setItem("token", res.data.data.token);
                        axios.defaults.headers.common[
                            "authorization"
                          ] = `Bearer ${res.data.data.token}`;
                        // Navigator.push('/')
                        window.location.href = "/"
                       } else {
                        setLoading(false);
                        setError(res.data?.errors[0]?.msg);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                })
                .catch(() => {
                    console.log("------------------ 5: in account.js ----------------")

                    setLoading(false);
                    setError('Please try again later.');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                });
            } else {
                console.log("------------------ 6: in account.js ----------------")

                setLoading(false);
                setError('Email is invalid.');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        } else {
            console.log("------------------ 7: in account.js ----------------")

            setLoading(false);
            setError('All fields are required.');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };
    const SignUp = () => {

        if (name !== '' && signUpEmail !== '' && signUpPassword !== '') {
            if (signUpPassword?.length < 6) {
                return setError("Password Should be greater than 5 characters.")
             } else {
                setError("")
             }
            if (validateEmail(signUpEmail)) {
                setLoading(true);
                setSuccess(false);
                setError("");
                axios.post("/signup", {
                    name,
                    email:signUpEmail,
                    password:signUpPassword
                }).then(res => {
                    if (res.data.success) {
                        setLoading(false);
                        setSuccess(true);
                        setIsSignUpPage(false)
                        setName("");
                        setSignUpEmail("");
                        setSignUpPassword("");
                    } else {
                        setLoading(false);
                        setError(res.data?.errors[0]?.msg);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                })
                .catch(() => {
                    setLoading(false);
                    setError('Please try again later.');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                });
            } else {
                setLoading(false);
                setError('Email is invalid.');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        } else {
            setLoading(false);
            setError('All fields are required.');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };
    return (
        <div id="contact">
            <Head>
                <title>{t('contact_us')} - DDLVid</title>
                <meta name="description" content={t('meta_description')} />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@ddl_vid" />
                <meta name="twitter:title" content={'DDLVid - ' + t('contact_us')} />
                <meta name="twitter:description" content={t('meta_description')} />
                <meta name="twitter:creator" content="@ddl_vid" />
                <meta name="twitter:image" content="https://ddlvid.com/assets/images/og.png?2" />
                <meta property="og:title" content={'DDLVid - ' + t('contact_us')} />
                <meta property="og:description" content={t('meta_description')} />
                <meta property="og:image" content="https://ddlvid.com/assets/images/og.png?2" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://ddlvid.com/contact" />
                <meta property="og:site_name" content="DDLVid" />
                <link rel="alternate" hrefLang="en" href="https://ddlvid.com/" />
                <link rel="alternate" hrefLang="x-default" href="https://ddlvid.com/contact" />
                <link rel="alternate" hrefLang="en-au" href="https://ddlvid.com/contact" />
                <link rel="alternate" hrefLang="en-in" href="https://ddlvid.com/contact" />
                <link rel="alternate" hrefLang="en-br" href="https://ddlvid.com/contact" />
                <link rel="alternate" hrefLang="en-co" href="https://ddlvid.com/contact" />
                <link rel="alternate" hrefLang="en-mx" href="https://ddlvid.com/contact" />
                <link rel="alternate" hrefLang="en-pe" href="https://ddlvid.com/contact" />
                <link rel="alternate" hrefLang="fr" href="https://ddlvid.com/fr/contact" />
                <link rel="alternate" hrefLang="pt" href="https://ddlvid.com/pt/contact" />
                <link rel="canonical" href="https://ddlvid.com/contact" />
            </Head>
            <main>
                <Header />
                <div id="content">
                    <div id="pageContent" className="container">
                        <h1>{isSignUpPage ? "Sign Up" : "Login"}</h1>
                        <p className="sub_title">{isSignUpPage ? "Please create your account" : "Please enter your login details"}</p>

                        <div className="card">
                           {
                            isSignUpPage ?  <form onSubmit={async (e) => {
                                e.preventDefault();
                                // const token = await recaptchaRef.current.executeAsync();
                                SignUp();
                            }}>
                                <div className="form contactForm">
                                    {error !== '' ? (
                                        <div className="errorMessage">
                                            {error}
                                        </div>
                                    ) : null}
                                    {success ? (
                                        <div className="successMessage">
                                            User has been Created successfully! Please login Now.
                                        </div>
                                    ) : null}
                                    <div className="field">
                                        <label>
                                            {t('name')}
                                            <input
                                                type="text"
                                                placeholder=""
                                                disabled={(loading)}
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                        </label>
                                    </div>
                                    <div className="field">
                                        <label>
                                            {t('email')}
                                            <input
                                                type="email"
                                                placeholder=""
                                                disabled={(loading)}
                                                value={signUpEmail}
                                                onChange={(e) => setSignUpEmail(e.target.value)}
                                            />
                                        </label>
                                    </div>
                                    <div className="field">
                                        <label>
                                            Password
                                            <input
                                                type="password"
                                                placeholder=""
                                                disabled={(loading)}
                                                value={signUpPassword}
                                                onChange={(e) => setSignUpPassword(e.target.value)}
                                            />
                                        </label>
                                    </div>
                                    <ReCAPTCHA
                                        ref={recaptchaRef}
                                        sitekey="6LfMW7sZAAAAAL86vnqAj-TChfp9T4h3GtPqugw5"
                                        size="invisible"
                                    />
                                    <div className="footer">
                                        {loading ? (
                                            <div className="loader loader-svg">
                                                <svg width="120" height="30" viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg" fill="#407BFF">
                                                    <circle cx="15" cy="15" r="15">
                                                        <animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite" />
                                                        <animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite" />
                                                    </circle>
                                                    <circle cx="60" cy="15" r="9" fillOpacity="0.3">
                                                        <animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9" calcMode="linear" repeatCount="indefinite" />
                                                        <animate attributeName="fill-opacity" from="0.5" to="0.5" begin="0s" dur="0.8s" values=".5;1;.5" calcMode="linear" repeatCount="indefinite" />
                                                    </circle>
                                                    <circle cx="105" cy="15" r="15">
                                                        <animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite" />
                                                        <animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite" />
                                                    </circle>
                                                </svg>
                                            </div>
                                        ) : (
                                            <input type="submit" value={t('Sign Up')} className="btn" />
                                        )}
                                    </div>
                                    <p>Already have an account? <a style={{color:'#0093E9'}} onClick={() =>
                                    {
                                        if (isSignUpPage) {
                                            setIsSignUpPage(false)
                                        } else {
                                            setIsSignUpPage(true)
                                        }
                                    }
                                    }>Login</a></p>
                                </div>
                            </form> :  <form onSubmit={async (e) => {
                                e.preventDefault();
                                // const token = await recaptchaRef.current.executeAsync();
                                // Login(token);
                                Login()
                            }}>
                                <div className="form contactForm">
                                    {error !== '' ? (
                                        <div className="errorMessage">
                                            {error}
                                        </div>
                                    ) : null}
                                    {/* {success ? (
                                        <div className="successMessage">
                                            Login has been sent successfully.
                                        </div>
                                    ) : null} */}
                                    <div className="field">
                                        <label>
                                            {t('email')}
                                            <input
                                                type="email"
                                                placeholder=""
                                                disabled={(loading)}
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </label>
                                    </div>
                                    <div className="field">
                                        <label>
                                            Password
                                            <input
                                                type="password"
                                                placeholder=""
                                                disabled={(loading)}
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </label>
                                    </div>
                                    <ReCAPTCHA
                                        ref={recaptchaRef}
                                        sitekey="6LfMW7sZAAAAAL86vnqAj-TChfp9T4h3GtPqugw5"
                                        size="invisible"
                                    />
                                    <div className="footer">
                                        {loading ? (
                                            <div className="loader loader-svg">
                                                <svg width="120" height="30" viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg" fill="#407BFF">
                                                    <circle cx="15" cy="15" r="15">
                                                        <animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite" />
                                                        <animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite" />
                                                    </circle>
                                                    <circle cx="60" cy="15" r="9" fillOpacity="0.3">
                                                        <animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9" calcMode="linear" repeatCount="indefinite" />
                                                        <animate attributeName="fill-opacity" from="0.5" to="0.5" begin="0s" dur="0.8s" values=".5;1;.5" calcMode="linear" repeatCount="indefinite" />
                                                    </circle>
                                                    <circle cx="105" cy="15" r="15">
                                                        <animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite" />
                                                        <animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite" />
                                                    </circle>
                                                </svg>
                                            </div>
                                        ) : (
                                            <input type="submit" value={t('Login')} className="btn" />
                                        )}
                                    </div>
                                    <p>Don’t have an account? <a style={{color:'#0093E9'}} onClick={() =>
                                    {
                                        if (isSignUpPage) {
                                            setIsSignUpPage(false)
                                        } else {
                                            setIsSignUpPage(true)
                                        }
                                    }
                                    }>Sign Up</a></p>
                                </div>
                            </form>
                           }
                        </div>
                    </div>
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

Account.getInitialProps = async () => ({
    namespacesRequired: ['contact'],
})

Account.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('contact')(Account)
