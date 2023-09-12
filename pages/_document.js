"use strict";

import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
      const initialProps = await Document.getInitialProps(ctx)
      return { ...initialProps }
    }
    
    render() {
      const contentLangs = {
        'en': 'en-us',
        'fr': 'fr-fr'
      };
      let current_lang = "en";
      try {
        current_lang = this.props.__NEXT_DATA__.props.initialLanguage;
      } catch(error) {}

      return (
        <Html prefix="og: http://ogp.me/ns#" lang={current_lang} className={current_lang}>
          <Head>            
            {current_lang in contentLangs ? (
              <meta httpEquiv="content-language" content={contentLangs[current_lang]} />
            ) : null}
            <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
            <link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png?1" />
            <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png?1" />
            <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png?1" />
            <meta name="norton-safeweb-site-verification" content="xextvxxe567ucntutpt-126m97wekium7o8-56l6q6ynjt24i9sy8k7fn30zzzux2mzoaa8s16pd3axdp0lpbnjv4ajx37vo15mj76ztl2b8mdg5geld0a4200oz15pb" />
            <link rel="manifest" href="/manifest.json?1" />
            <script type='text/javascript' src='https://platform-api.sharethis.com/js/sharethis.js#property=5f0be2eb7df6de00133235b5&cms=sop' async='async'></script>
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      )
    }
  }
  
  export default MyDocument