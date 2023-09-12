"use strict";

import Router from 'next/router';
import App from 'next/app';
import NProgress from 'nprogress';
import { appWithTranslation } from '../i18n';

import '../public/assets/css/nprogress.css';
import '../public/assets/css/animate.css';
import '../public/assets/css/style.css';
import '../public/assets/css/dark.css';

NProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', url => {
    NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}

MyApp.getInitialProps = async (appContext) => {
    const appProps = await App.getInitialProps(appContext)
    return { ...appProps }
}

export default appWithTranslation(MyApp)
