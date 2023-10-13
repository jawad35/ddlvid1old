"use strict";

import Router from 'next/router';
import App from 'next/app';
import NProgress from 'nprogress';
import { appWithTranslation } from '../i18n';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../public/assets/css/nprogress.css';
import '../public/assets/css/animate.css';
import '../public/assets/css/style.css';
import '../public/assets/css/paymentsuccess.css';
import '../public/assets/css/chip.css';
import '../public/assets/css/footer.css';
import '../public/assets/css/dark.css';
import ReactGA from "react-ga4";
import { UserProvider } from '../Context';
NProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', url => {
    NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());
ReactGA.initialize("G-9PHR0VTQ1R");
function MyApp({ Component, pageProps }) {
    ReactGA.event({
        category: "vistors",
        action: "visit",
        label: "vists"
    })
    return <UserProvider>
        <ToastContainer/>
        <Component {...pageProps} />
    </UserProvider>
}

MyApp.getInitialProps = async (appContext) => {
    const appProps = await App.getInitialProps(appContext)
    return { ...appProps }
}

export default appWithTranslation(MyApp)
