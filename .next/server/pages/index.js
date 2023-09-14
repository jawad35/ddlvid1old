module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./i18n.js":
/*!*****************!*\
  !*** ./i18n.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const NextI18Next = __webpack_require__(/*! next-i18next */ "next-i18next").default;
module.exports = new NextI18Next({
  strictMode: false,
  defaultLanguage: 'en',
  otherLanguages: ['fr', 'pt'],
  localeSubpaths: {
    fr: 'fr',
    pt: 'pt'
  },
  interpolation: {
    escapeValue: false
  }
});

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var sharethis_reactjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sharethis-reactjs */ "sharethis-reactjs");
/* harmony import */ var sharethis_reactjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sharethis_reactjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _parts_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parts/header */ "./pages/parts/header.js");
/* harmony import */ var _parts_footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parts/footer */ "./pages/parts/footer.js");
/* harmony import */ var _parts_ad2hs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./parts/ad2hs */ "./pages/parts/ad2hs.js");




var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









// import Banner from '../public/assets/images/ddlvid-logo.png'
const lntobr = str => {
  return str.split("\n").map(function (item, i) {
    return __jsx("span", {
      key: i
    }, item, __jsx("br", null));
  });
};
const Home = ({
  t
}) => {
  const {
    0: link,
    1: setLink
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: error,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const submit = e => {
    if (typeof e !== "undefined") {
      e.preventDefault();
    }
    setError(null);
    if (link !== "") {
      const supported_sites = ["youtube.com", "youtu.be", "twitter.com", "linkedin.com", "facebook.com", "fb.com", "tiktok.com", "vimeo.com", "pornhub.com", "instagram.com", "reddit.com", "pinterest.com", "pin.it", "ok.ru", "periscope.tv", "pscp.tv", "t.co", "fb.watch", "fbwat.ch", "vk.com", "triller.co"];
      var supported = false;
      for (let i = 0; i < supported_sites.length; i++) {
        if (link.toLowerCase().indexOf(supported_sites[i]) >= 0) {
          supported = true;
          break;
        }
      }
      if (supported) {
        _i18n__WEBPACK_IMPORTED_MODULE_4__["Router"].push({
          pathname: "/download",
          query: {
            link
          }
        });
      } else {
        setError('Link not supported yet.');
        window._gaq.push(['_trackEvent', 'notSupported', link]);
      }
    } else {
      setError('Link is required.');
    }
    return false;
  };
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if ("twttr" in window) {
      window.twttr.widgets.load();
    }
    if (window.location.host.indexOf("localhost") < 0 && window.location.host.indexOf("127.0.0.1") < 0) {
      window._gaq = window._gaq || [];
      window._gaq.push(['_setAccount', 'UA-162923642-1']);
      window._gaq.push(['_trackPageview']);
      var bounceKiller = {
        trackScrolling: true,
        scrollingPercentageNumber: 25,
        logInterval: 10,
        trackEvents: true,
        trackMaxTime: true,
        trackMaxTimeSec: 900
      };
      window.scrollTrackEnd = false;
      window.ScrollMatrix = new Array();
      function TrackingLogTime(a) {
        return a[0] == 50 ? parseInt(a[1]) + 1 + ":00" : (a[1] || "0") + ":" + (parseInt(a[0]) + 10);
      }
      if (bounceKiller.trackEvents) {
        function startTimeTracking(a) {
          window.intervalObj = window.setInterval(function () {
            a = TrackingLogTime(a.split(":").reverse());
            window._gaq.push(['_trackEvent', "Time", "LOG", a]);
          }, bounceKiller.logInterval * 1000);
          if (bounceKiller.trackMaxTime) {
            window.trackMaxTimeTimeout = setTimeout(function () {
              clearInterval(window.intervalObj);
            }, bounceKiller.trackMaxTimeSec * 1000);
          }
        }
        window.document.addEventListener("DOMContentLoaded", function () {
          startTimeTracking("00");
        });
      }
      if (bounceKiller.trackScrolling) {
        window.Frequency = bounceKiller.scrollingPercentageNumber;
        window.Repentance = 100 / bounceKiller.scrollingPercentageNumber;
        window.ScrollMatrix = new Array();
        for (var ix = 0; ix < window.Repentance; ix++) {
          window.ScrollMatrix[ix] = [window.Frequency, "false"];
          window.Frequency = bounceKiller.scrollingPercentageNumber + window.Frequency;
        }
      }
      ;
      var scrollFunc = function () {
        if (bounceKiller.trackScrolling) {
          if (!window.scrollTrackEnd) {
            window._gaq.push(['_trackEvent', "Scroll", "LOG", "scrolled"]);
            window.scrollTrackEnd = true;
          }
        }
        if (bounceKiller.trackScrolling) {
          var body = window.document.body,
            html = window.document.documentElement;
          var documentHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
          for (var iz = 0; iz < window.ScrollMatrix.length; iz++) {
            if (window.scrollY + window.innerHeight >= documentHeight * window.ScrollMatrix[iz][0] / 100 && window.ScrollMatrix[iz][1] == "false") {
              window.ScrollMatrix[iz][1] = "true";
              window._gaq.push(['_trackEvent', "Percentage Page Scroll", "LOG", window.ScrollMatrix[iz][0] + "%", {
                nonInteraction: false
              }]);
            }
          }
        }
      };
      window.addEventListener('scroll', scrollFunc, true);
      (function () {
        var ga = window.document.createElement('script');
        ga.type = 'text/javascript';
        ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = window.document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(ga, s);
      })();
    }
    if (window.location.hash != "") {
      var elem = document.querySelector(window.location.hash + "-section");
      if (elem) {
        window.scrollTo({
          top: elem.offsetTop,
          behavior: 'smooth'
        });
      }
    }
    setLink("");
  }, []);
  return __jsx("div", {
    className: "jsx-235026066" + " " + "home"
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, null, __jsx("title", {
    className: "jsx-235026066"
  }, t('headline'), " - DDLVid"), __jsx("meta", {
    name: "description",
    content: t('meta_description'),
    className: "jsx-235026066"
  }), __jsx("meta", {
    name: "keywords",
    content: "twitter video downloader,facebook video downloader,tiktok video downloader,instagram video downloader,youtube video downloader",
    className: "jsx-235026066"
  }), __jsx("meta", {
    name: "twitter:card",
    content: "summary",
    className: "jsx-235026066"
  }), __jsx("meta", {
    name: "twitter:site",
    content: "@ddl_vid",
    className: "jsx-235026066"
  }), __jsx("meta", {
    name: "twitter:title",
    content: 'DDLVid - ' + t('headline'),
    className: "jsx-235026066"
  }), __jsx("meta", {
    name: "twitter:description",
    content: t('meta_description'),
    className: "jsx-235026066"
  }), __jsx("meta", {
    name: "twitter:creator",
    content: "@ddl_vid",
    className: "jsx-235026066"
  }), __jsx("meta", {
    name: "twitter:image",
    content: "https://ddlvid.com/assets/images/og.png?2",
    className: "jsx-235026066"
  }), __jsx("meta", {
    property: "og:title",
    content: 'DDLVid - ' + t('headline'),
    className: "jsx-235026066"
  }), __jsx("meta", {
    property: "og:description",
    content: t('meta_description'),
    className: "jsx-235026066"
  }), __jsx("meta", {
    property: "og:image",
    content: "https://ddlvid.com/assets/images/og.png?2",
    className: "jsx-235026066"
  }), __jsx("meta", {
    property: "og:type",
    content: "website",
    className: "jsx-235026066"
  }), __jsx("meta", {
    property: "og:url",
    content: "https://ddlvid.com/",
    className: "jsx-235026066"
  }), __jsx("meta", {
    property: "og:site_name",
    content: "DDLVid",
    className: "jsx-235026066"
  }), __jsx("link", {
    rel: "alternate",
    hrefLang: "en",
    href: "https://ddlvid.com/",
    className: "jsx-235026066"
  }), __jsx("link", {
    rel: "alternate",
    hrefLang: "x-default",
    href: "https://ddlvid.com/",
    className: "jsx-235026066"
  }), __jsx("link", {
    rel: "alternate",
    hrefLang: "fr",
    href: "https://ddlvid.com/fr",
    className: "jsx-235026066"
  }), __jsx("link", {
    rel: "alternate",
    hrefLang: "pt",
    href: "https://ddlvid.com/pt",
    className: "jsx-235026066"
  }), __jsx("link", {
    rel: "canonical",
    href: "https://ddlvid.com/",
    className: "jsx-235026066"
  }), __jsx("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: {
      __html: `
{
  "@context": "http://schema.org/",
  "@type": "SoftwareApplication",
  "applicationCategory": "MultimediaApplication",
  "operatingSystem":["Windows","macOS","Android","iOS"],
  "screenshot": "https://ddlvid.com/assets/images/og.png?2",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingCount": "5510",
    "reviewCount": "5510",
    "bestRating": "5",
    "ratingValue": "4.8",
    "worstRating": "1",
    "alternateName": "DDLVid Online Video Downloader",
    "mainEntityOfPage": "https://ddlvid.com/",
    "name": "DDLVid"
  },
  "alternativeHeadline": "DDLVid",
  "copyrightYear": "${new Date().getFullYear()}",
  "headline": "DDLVid",
  "keywords": "DDLVid, online video downloader, video downloader",
  "offers": {
    "@type": "Offer",
    "price": "0.0",
    "priceCurrency": "USD",
    "alternateName": "DDLVid",
    "description": "DDLVid Online Video Downloader",
    "mainEntityOfPage": "https://ddlvid.com/",
    "name": "DDLVid"
  },
  "alternateName": "DDLVid",
  "mainEntityOfPage": "https://ddlvid.com/",
  "name": "DDLVid"
}
        `
    },
    className: "jsx-235026066"
  })), __jsx("main", {
    className: "jsx-235026066"
  }, __jsx(_parts_header__WEBPACK_IMPORTED_MODULE_7__["default"], null), __jsx("div", {
    id: "content",
    className: "jsx-235026066"
  }, __jsx("div", {
    className: "jsx-235026066" + " " + "section1"
  }, __jsx("div", {
    className: "jsx-235026066" + " " + "container"
  }, __jsx("div", {
    className: "jsx-235026066" + " " + "headline"
  }, __jsx("img", {
    src: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/secured-attachments/messaging_message/attachment/e70e96a8b4686600d5ec53d6583d33ae-39319921694634323078/DDLVID-1.png?__cld_token__=exp=1694694046~hmac=92e7e953e740f099dbc59a908b618fc0fc471a628d18f2778fee948c79876c75",
    alt: "Image Crashed",
    style: {
      width: '100%',
      height: 'auto'
    },
    className: "jsx-235026066" + " " + 'banner_image'
  }), __jsx("h1", {
    className: "jsx-235026066"
  }, t('headline')), __jsx("div", {
    className: "jsx-235026066" + " " + "desc"
  }, lntobr(t('sub_headline'))), __jsx(sharethis_reactjs__WEBPACK_IMPORTED_MODULE_5__["StickyShareButtons"], {
    config: {
      alignment: 'left',
      color: 'social',
      enabled: true,
      font_size: 16,
      labels: 'counts',
      language: 'en',
      min_count: 0,
      networks: ['whatsapp', 'messenger', 'reddit', 'twitter', 'facebook', 'linkedin'],
      padding: 12,
      radius: 4,
      show_total: true,
      show_mobile: true,
      show_toggle: true,
      size: 48,
      top: 160,
      url: 'https://ddlvid.com/',
      property: '5f0be2eb7df6de00133235b5'
    }
  }), __jsx("form", {
    action: "/download",
    method: "get",
    onSubmit: submit,
    className: "jsx-235026066"
  }, __jsx("div", {
    className: "jsx-235026066" + " " + "field"
  }, __jsx("input", {
    name: "link",
    id: "link",
    placeholder: "https://",
    value: link,
    onChange: e => setLink(e.target.value),
    pattern: "https?://.+",
    required: true,
    "aria-label": t('link_to_download'),
    autoComplete: "off",
    className: "jsx-235026066" + " " + ((error ? 'has-error' : null) || "")
  }), __jsx("div", {
    className: "jsx-235026066" + " " + "download"
  }, __jsx("button", {
    type: "submit",
    className: "jsx-235026066"
  }, t('get_the_video'))), error ? __jsx("div", {
    onClick: () => setError(null),
    className: "jsx-235026066" + " " + "error_message"
  }, error) : null)), __jsx("div", {
    className: "jsx-235026066" + " " + "supported_sites"
  }, __jsx("span", {
    className: "jsx-235026066" + " " + "site twitter"
  }, "Twitter"), ' ', __jsx("span", {
    className: "jsx-235026066" + " " + "site facebook"
  }, "Facebook"), ' ', __jsx("span", {
    className: "jsx-235026066" + " " + "site instagram"
  }, "Instagram"), ' ', __jsx("span", {
    className: "jsx-235026066" + " " + "site tiktok"
  }, "TikTok"), ' ', __jsx("span", {
    className: "jsx-235026066" + " " + "site youtube"
  }, "Youtube"), ' ', __jsx("span", {
    className: "jsx-235026066" + " " + "site reddit"
  }, "Reddit"), ' ', __jsx("span", {
    className: "jsx-235026066" + " " + "site pinterest"
  }, "Pinterest"), ' ', __jsx("span", {
    className: "jsx-235026066" + " " + "site linkedin"
  }, "LinkedIn"), ' ', __jsx("span", {
    className: "jsx-235026066" + " " + "site vimeo"
  }, "Vimeo")), __jsx("div", {
    className: "jsx-235026066" + " " + "list_supported_sites"
  }, __jsx(_i18n__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    href: "/supported-websites"
  }, __jsx("a", {
    className: "jsx-235026066"
  }, t('list_supported_websites'))))))), __jsx("div", {
    className: "jsx-235026066" + " " + "section5"
  }, __jsx("div", {
    className: "jsx-235026066" + " " + "container"
  }, __jsx("div", {
    className: "jsx-235026066" + " " + "img"
  }), __jsx("h2", {
    className: "jsx-235026066"
  }, t('best_free_online_video_downloader'), __jsx("br", {
    className: "jsx-235026066"
  }), t('trusted_by_millions')), __jsx("p", {
    className: "jsx-235026066"
  }, lntobr(t('home_desc'))))), __jsx("div", {
    className: "jsx-235026066" + " " + "section7"
  }, __jsx("div", {
    className: "jsx-235026066" + " " + "container"
  }, __jsx("h2", {
    className: "jsx-235026066"
  }, t('download_videos_using_our_bots')), __jsx("div", {
    className: "jsx-235026066" + " " + "row"
  }, __jsx("div", {
    className: "jsx-235026066" + " " + "col s6"
  }, __jsx("div", {
    className: "jsx-235026066" + " " + "icon twitter"
  }), __jsx("div", {
    className: "jsx-235026066" + " " + "details"
  }, __jsx("p", {
    className: "jsx-235026066"
  }, __jsx("strong", {
    className: "jsx-235026066"
  }, t('twitter_bot'))), __jsx("p", {
    className: "jsx-235026066"
  }, __jsx(react_i18next__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
    i18nKey: "twitter_bot_details",
    components: {
      em: __jsx("em", {
        className: "jsx-235026066"
      })
    }
  }))), __jsx("p", {
    className: "jsx-235026066" + " " + "cta"
  }, __jsx("a", {
    href: "https://twitter.com/ddl_vid1",
    target: "_blank",
    className: "jsx-235026066" + " " + "btn"
  }, t('follow_ddl_vid')))), __jsx("div", {
    className: "jsx-235026066" + " " + "col s6"
  }, __jsx("div", {
    className: "jsx-235026066" + " " + "icon telegram"
  }), __jsx("div", {
    className: "jsx-235026066" + " " + "details"
  }, __jsx("p", {
    className: "jsx-235026066"
  }, __jsx("strong", {
    className: "jsx-235026066"
  }, t('telegram_bot'))), __jsx("p", {
    className: "jsx-235026066"
  }, __jsx(react_i18next__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
    i18nKey: "telegram_bot_details",
    components: {
      em: __jsx("em", {
        className: "jsx-235026066"
      })
    }
  }))), __jsx("p", {
    className: "jsx-235026066" + " " + "cta"
  }, __jsx("a", {
    href: "https://telegram.me/ddlvid_bot",
    target: "_blank",
    className: "jsx-235026066" + " " + "btn"
  }, t('send_message_to_ddlvid_bot'))))))), __jsx("div", {
    className: "jsx-235026066" + " " + "section8"
  }, __jsx("div", {
    className: "jsx-235026066" + " " + "container"
  }, __jsx("div", {
    className: "jsx-235026066" + " " + "start"
  }, __jsx("a", {
    onClick: () => {
      window.document.querySelector("#link").focus();
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    },
    className: "jsx-235026066" + " " + "btn"
  }, t('start_downloading'))))))), __jsx(_parts_footer__WEBPACK_IMPORTED_MODULE_8__["default"], null), __jsx(_parts_ad2hs__WEBPACK_IMPORTED_MODULE_9__["default"], null), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "235026066"
  }, "html,body{padding:0;margin:0;font-family:\"Plex\",-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen, Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;}*{box-sizing:border-box;}*:focus{outline:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxDbGllbnRzIFBhbmVsXFxXZWIgRGV2ZWxvcG1lbnRcXGRkbHZpZDFvbGRcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5YnlCLEFBSXFCLEFBT1ksQUFHVCxVQVRKLEdBVVgsTUFSd0UsR0FLeEUseUlBSkEiLCJmaWxlIjoiRDpcXENsaWVudHMgUGFuZWxcXFdlYiBEZXZlbG9wbWVudFxcZGRsdmlkMW9sZFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBUcmFucyB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIHdpdGhUcmFuc2xhdGlvbiwgTGluayB9IGZyb20gJy4uL2kxOG4nO1xyXG5pbXBvcnQge1N0aWNreVNoYXJlQnV0dG9uc30gZnJvbSAnc2hhcmV0aGlzLXJlYWN0anMnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vcGFydHMvaGVhZGVyJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL3BhcnRzL2Zvb3Rlcic7XHJcbmltcG9ydCBBRDJIUyBmcm9tICcuL3BhcnRzL2FkMmhzJztcclxuLy8gaW1wb3J0IEJhbm5lciBmcm9tICcuLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9kZGx2aWQtbG9nby5wbmcnXHJcbmNvbnN0IGxudG9iciA9IChzdHIpID0+IHtcclxuICByZXR1cm4gc3RyLnNwbGl0KFwiXFxuXCIpLm1hcChmdW5jdGlvbihpdGVtLCBpKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8c3BhbiBrZXk9e2l9PntpdGVtfTxici8+PC9zcGFuPlxyXG4gICAgKVxyXG4gIH0pOyBcclxufTtcclxuXHJcbmNvbnN0IEhvbWUgPSAoeyB0IH0pID0+IHtcclxuXHJcbiAgY29uc3QgW2xpbmssIHNldExpbmtdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IHN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIGUgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG4gICAgc2V0RXJyb3IobnVsbCk7XHJcbiAgICBpZiAobGluayAhPT0gXCJcIikge1xyXG4gICAgICBjb25zdCBzdXBwb3J0ZWRfc2l0ZXMgPSBbXHJcbiAgICAgICAgXCJ5b3V0dWJlLmNvbVwiLFxyXG4gICAgICAgIFwieW91dHUuYmVcIixcclxuICAgICAgICBcInR3aXR0ZXIuY29tXCIsXHJcbiAgICAgICAgXCJsaW5rZWRpbi5jb21cIixcclxuICAgICAgICBcImZhY2Vib29rLmNvbVwiLFxyXG4gICAgICAgIFwiZmIuY29tXCIsXHJcbiAgICAgICAgXCJ0aWt0b2suY29tXCIsXHJcbiAgICAgICAgXCJ2aW1lby5jb21cIixcclxuICAgICAgICBcInBvcm5odWIuY29tXCIsXHJcbiAgICAgICAgXCJpbnN0YWdyYW0uY29tXCIsXHJcbiAgICAgICAgXCJyZWRkaXQuY29tXCIsXHJcbiAgICAgICAgXCJwaW50ZXJlc3QuY29tXCIsXHJcbiAgICAgICAgXCJwaW4uaXRcIixcclxuICAgICAgICBcIm9rLnJ1XCIsXHJcbiAgICAgICAgXCJwZXJpc2NvcGUudHZcIixcclxuICAgICAgICBcInBzY3AudHZcIixcclxuICAgICAgICBcInQuY29cIixcclxuICAgICAgICBcImZiLndhdGNoXCIsXHJcbiAgICAgICAgXCJmYndhdC5jaFwiLFxyXG4gICAgICAgIFwidmsuY29tXCIsXHJcbiAgICAgICAgXCJ0cmlsbGVyLmNvXCJcclxuICAgICAgXTtcclxuICAgICAgdmFyIHN1cHBvcnRlZCA9IGZhbHNlO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1cHBvcnRlZF9zaXRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChsaW5rLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzdXBwb3J0ZWRfc2l0ZXNbaV0pID49IDApIHtcclxuICAgICAgICAgIHN1cHBvcnRlZCA9IHRydWU7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9ICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgaWYgKHN1cHBvcnRlZCkge1xyXG4gICAgICAgIFJvdXRlci5wdXNoKHtcclxuICAgICAgICAgIHBhdGhuYW1lOiBcIi9kb3dubG9hZFwiLFxyXG4gICAgICAgICAgcXVlcnk6IHsgbGluayB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0RXJyb3IoJ0xpbmsgbm90IHN1cHBvcnRlZCB5ZXQuJyk7XHJcbiAgICAgICAgd2luZG93Ll9nYXEucHVzaChbJ190cmFja0V2ZW50JywgJ25vdFN1cHBvcnRlZCcsIGxpbmtdKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0RXJyb3IoJ0xpbmsgaXMgcmVxdWlyZWQuJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKFwidHd0dHJcIiBpbiB3aW5kb3cpIHtcclxuICAgICAgd2luZG93LnR3dHRyLndpZGdldHMubG9hZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh3aW5kb3cubG9jYXRpb24uaG9zdC5pbmRleE9mKFwibG9jYWxob3N0XCIpIDwgMCAmJiB3aW5kb3cubG9jYXRpb24uaG9zdC5pbmRleE9mKFwiMTI3LjAuMC4xXCIpIDwgMCkge1xyXG4gICAgICB3aW5kb3cuX2dhcSA9IHdpbmRvdy5fZ2FxIHx8IFtdO1xyXG4gICAgICB3aW5kb3cuX2dhcS5wdXNoKFsnX3NldEFjY291bnQnLCAnVUEtMTYyOTIzNjQyLTEnXSk7XHJcbiAgICAgIHdpbmRvdy5fZ2FxLnB1c2goWydfdHJhY2tQYWdldmlldyddKTtcclxuXHJcbiAgICAgIHZhciBib3VuY2VLaWxsZXIgPSB7XHJcbiAgICAgICAgdHJhY2tTY3JvbGxpbmc6IHRydWUsXHJcbiAgICAgICAgc2Nyb2xsaW5nUGVyY2VudGFnZU51bWJlcjogMjUsXHJcbiAgICAgICAgbG9nSW50ZXJ2YWw6IDEwLFxyXG4gICAgICAgIHRyYWNrRXZlbnRzOiB0cnVlLFxyXG4gICAgICAgIHRyYWNrTWF4VGltZTogdHJ1ZSxcclxuICAgICAgICB0cmFja01heFRpbWVTZWM6IDkwMFxyXG4gICAgICB9O1xyXG4gICAgICB3aW5kb3cuc2Nyb2xsVHJhY2tFbmQgPSBmYWxzZTtcclxuICAgICAgd2luZG93LlNjcm9sbE1hdHJpeCA9IG5ldyBBcnJheSgpO1xyXG5cclxuICAgICAgZnVuY3Rpb24gVHJhY2tpbmdMb2dUaW1lKGEpIHtcclxuICAgICAgICByZXR1cm4gYVswXSA9PSA1MCA/IChwYXJzZUludChhWzFdKSArIDEpICsgXCI6MDBcIiA6IChhWzFdIHx8IFwiMFwiKSArIFwiOlwiICsgKHBhcnNlSW50KGFbMF0pICsgMTApXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChib3VuY2VLaWxsZXIudHJhY2tFdmVudHMpIHtcclxuICAgICAgICAgIGZ1bmN0aW9uIHN0YXJ0VGltZVRyYWNraW5nKGEpIHtcclxuICAgICAgICAgICAgICB3aW5kb3cuaW50ZXJ2YWxPYmogPSB3aW5kb3cuc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgIGEgPSBUcmFja2luZ0xvZ1RpbWUoYS5zcGxpdChcIjpcIikucmV2ZXJzZSgpKTtcclxuICAgICAgICAgICAgICAgICAgd2luZG93Ll9nYXEucHVzaChbJ190cmFja0V2ZW50JywgXCJUaW1lXCIsIFwiTE9HXCIsIGFdKTtcclxuICAgICAgICAgICAgICB9LCBib3VuY2VLaWxsZXIubG9nSW50ZXJ2YWwgKiAxMDAwKVxyXG5cclxuICAgICAgICAgICAgICBpZiAoYm91bmNlS2lsbGVyLnRyYWNrTWF4VGltZSkge1xyXG4gICAgICAgICAgICAgICAgICB3aW5kb3cudHJhY2tNYXhUaW1lVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHdpbmRvdy5pbnRlcnZhbE9iaik7XHJcbiAgICAgICAgICAgICAgICAgIH0sIGJvdW5jZUtpbGxlci50cmFja01heFRpbWVTZWMgKiAxMDAwKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHdpbmRvdy5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHsgXHJcbiAgICAgICAgICAgICAgc3RhcnRUaW1lVHJhY2tpbmcoXCIwMFwiKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGJvdW5jZUtpbGxlci50cmFja1Njcm9sbGluZykge1xyXG4gICAgICAgICAgICB3aW5kb3cuRnJlcXVlbmN5ID0gYm91bmNlS2lsbGVyLnNjcm9sbGluZ1BlcmNlbnRhZ2VOdW1iZXI7XHJcbiAgICAgICAgICAgIHdpbmRvdy5SZXBlbnRhbmNlID0gMTAwIC8gYm91bmNlS2lsbGVyLnNjcm9sbGluZ1BlcmNlbnRhZ2VOdW1iZXI7XHJcbiAgICAgICAgICAgIHdpbmRvdy5TY3JvbGxNYXRyaXggPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaXggPSAwOyBpeCA8IHdpbmRvdy5SZXBlbnRhbmNlOyBpeCsrKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuU2Nyb2xsTWF0cml4W2l4XSA9IFt3aW5kb3cuRnJlcXVlbmN5LCBcImZhbHNlXCJdO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LkZyZXF1ZW5jeSA9IGJvdW5jZUtpbGxlci5zY3JvbGxpbmdQZXJjZW50YWdlTnVtYmVyICsgd2luZG93LkZyZXF1ZW5jeTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBzY3JvbGxGdW5jID0gZnVuY3Rpb24oKXtcclxuICAgICAgICAgIGlmIChib3VuY2VLaWxsZXIudHJhY2tTY3JvbGxpbmcpIHtcclxuICAgICAgICAgICAgICBpZiAoIXdpbmRvdy5zY3JvbGxUcmFja0VuZCkge1xyXG4gICAgICAgICAgICAgICAgICB3aW5kb3cuX2dhcS5wdXNoKFsnX3RyYWNrRXZlbnQnLCBcIlNjcm9sbFwiLCBcIkxPR1wiLCBcInNjcm9sbGVkXCJdKTtcclxuICAgICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRyYWNrRW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoYm91bmNlS2lsbGVyLnRyYWNrU2Nyb2xsaW5nKSB7XHJcbiAgICAgICAgICAgICAgdmFyIGJvZHkgPSB3aW5kb3cuZG9jdW1lbnQuYm9keSxcclxuICAgICAgICAgICAgICAgICAgaHRtbCA9IHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcblxyXG4gICAgICAgICAgICAgIHZhciBkb2N1bWVudEhlaWdodCA9IE1hdGgubWF4KCBib2R5LnNjcm9sbEhlaWdodCwgYm9keS5vZmZzZXRIZWlnaHQsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sLmNsaWVudEhlaWdodCwgaHRtbC5zY3JvbGxIZWlnaHQsIGh0bWwub2Zmc2V0SGVpZ2h0ICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIGZvciAodmFyIGl6ID0gMDsgaXogPCB3aW5kb3cuU2Nyb2xsTWF0cml4Lmxlbmd0aDsgaXorKykge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoKHdpbmRvdy5zY3JvbGxZICsgd2luZG93LmlubmVySGVpZ2h0ID49IGRvY3VtZW50SGVpZ2h0ICogd2luZG93LlNjcm9sbE1hdHJpeFtpel1bMF0gLyAxMDApICYmICh3aW5kb3cuU2Nyb2xsTWF0cml4W2l6XVsxXSA9PSBcImZhbHNlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuU2Nyb2xsTWF0cml4W2l6XVsxXSA9IFwidHJ1ZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2luZG93Ll9nYXEucHVzaChbJ190cmFja0V2ZW50JywgXCJQZXJjZW50YWdlIFBhZ2UgU2Nyb2xsXCIsIFwiTE9HXCIsIHdpbmRvdy5TY3JvbGxNYXRyaXhbaXpdWzBdICsgXCIlXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9uSW50ZXJhY3Rpb246IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XSlcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbEZ1bmMsIHRydWUpO1xyXG5cclxuICAgICAgKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBnYSA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgICAgICBnYS50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XHJcbiAgICAgICAgZ2EuYXN5bmMgPSB0cnVlO1xyXG4gICAgICAgIGdhLnNyYyA9ICgnaHR0cHM6JyA9PSBkb2N1bWVudC5sb2NhdGlvbi5wcm90b2NvbCA/ICdodHRwczovL3NzbCcgOiAnaHR0cDovL3d3dycpICsgJy5nb29nbGUtYW5hbHl0aWNzLmNvbS9nYS5qcyc7XHJcbiAgICAgICAgdmFyIHMgPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdO1xyXG4gICAgICAgIHMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZ2EsIHMpO1xyXG4gICAgICB9KSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh3aW5kb3cubG9jYXRpb24uaGFzaCAhPSBcIlwiKSB7XHJcbiAgICAgIHZhciBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih3aW5kb3cubG9jYXRpb24uaGFzaCtcIi1zZWN0aW9uXCIpO1xyXG4gICAgICBpZiAoZWxlbSkge1xyXG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XHJcbiAgICAgICAgICB0b3A6IGVsZW0ub2Zmc2V0VG9wLFxyXG4gICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRMaW5rKFwiXCIpO1xyXG4gIH0sIFtdKVxyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWVcIj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPnt0KCdoZWFkbGluZScpfSAtIERETFZpZDwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17dCgnbWV0YV9kZXNjcmlwdGlvbicpfSAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9XCJ0d2l0dGVyIHZpZGVvIGRvd25sb2FkZXIsZmFjZWJvb2sgdmlkZW8gZG93bmxvYWRlcix0aWt0b2sgdmlkZW8gZG93bmxvYWRlcixpbnN0YWdyYW0gdmlkZW8gZG93bmxvYWRlcix5b3V0dWJlIHZpZGVvIGRvd25sb2FkZXJcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeVwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6c2l0ZVwiIGNvbnRlbnQ9XCJAZGRsX3ZpZFwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6dGl0bGVcIiBjb250ZW50PXsnRERMVmlkIC0gJyArIHQoJ2hlYWRsaW5lJyl9IC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6ZGVzY3JpcHRpb25cIiBjb250ZW50PXt0KCdtZXRhX2Rlc2NyaXB0aW9uJyl9IC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y3JlYXRvclwiIGNvbnRlbnQ9XCJAZGRsX3ZpZFwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6aW1hZ2VcIiBjb250ZW50PVwiaHR0cHM6Ly9kZGx2aWQuY29tL2Fzc2V0cy9pbWFnZXMvb2cucG5nPzJcIiAvPiBcclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17J0RETFZpZCAtICcgKyB0KCdoZWFkbGluZScpfSAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXt0KCdtZXRhX2Rlc2NyaXB0aW9uJyl9IC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9XCJodHRwczovL2RkbHZpZC5jb20vYXNzZXRzL2ltYWdlcy9vZy5wbmc/MlwiIC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD1cImh0dHBzOi8vZGRsdmlkLmNvbS9cIiAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6c2l0ZV9uYW1lXCIgY29udGVudD1cIkRETFZpZFwiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiYWx0ZXJuYXRlXCIgaHJlZkxhbmc9XCJlblwiIGhyZWY9XCJodHRwczovL2RkbHZpZC5jb20vXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJhbHRlcm5hdGVcIiBocmVmTGFuZz1cIngtZGVmYXVsdFwiIGhyZWY9XCJodHRwczovL2RkbHZpZC5jb20vXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJhbHRlcm5hdGVcIiBocmVmTGFuZz1cImZyXCIgaHJlZj1cImh0dHBzOi8vZGRsdmlkLmNvbS9mclwiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiYWx0ZXJuYXRlXCIgaHJlZkxhbmc9XCJwdFwiIGhyZWY9XCJodHRwczovL2RkbHZpZC5jb20vcHRcIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9XCJodHRwczovL2RkbHZpZC5jb20vXCIgLz5cclxuICAgICAgICA8c2NyaXB0IHR5cGU9XCJhcHBsaWNhdGlvbi9sZCtqc29uXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBgXHJcbntcclxuICBcIkBjb250ZXh0XCI6IFwiaHR0cDovL3NjaGVtYS5vcmcvXCIsXHJcbiAgXCJAdHlwZVwiOiBcIlNvZnR3YXJlQXBwbGljYXRpb25cIixcclxuICBcImFwcGxpY2F0aW9uQ2F0ZWdvcnlcIjogXCJNdWx0aW1lZGlhQXBwbGljYXRpb25cIixcclxuICBcIm9wZXJhdGluZ1N5c3RlbVwiOltcIldpbmRvd3NcIixcIm1hY09TXCIsXCJBbmRyb2lkXCIsXCJpT1NcIl0sXHJcbiAgXCJzY3JlZW5zaG90XCI6IFwiaHR0cHM6Ly9kZGx2aWQuY29tL2Fzc2V0cy9pbWFnZXMvb2cucG5nPzJcIixcclxuICBcImFnZ3JlZ2F0ZVJhdGluZ1wiOiB7XHJcbiAgICBcIkB0eXBlXCI6IFwiQWdncmVnYXRlUmF0aW5nXCIsXHJcbiAgICBcInJhdGluZ0NvdW50XCI6IFwiNTUxMFwiLFxyXG4gICAgXCJyZXZpZXdDb3VudFwiOiBcIjU1MTBcIixcclxuICAgIFwiYmVzdFJhdGluZ1wiOiBcIjVcIixcclxuICAgIFwicmF0aW5nVmFsdWVcIjogXCI0LjhcIixcclxuICAgIFwid29yc3RSYXRpbmdcIjogXCIxXCIsXHJcbiAgICBcImFsdGVybmF0ZU5hbWVcIjogXCJERExWaWQgT25saW5lIFZpZGVvIERvd25sb2FkZXJcIixcclxuICAgIFwibWFpbkVudGl0eU9mUGFnZVwiOiBcImh0dHBzOi8vZGRsdmlkLmNvbS9cIixcclxuICAgIFwibmFtZVwiOiBcIkRETFZpZFwiXHJcbiAgfSxcclxuICBcImFsdGVybmF0aXZlSGVhZGxpbmVcIjogXCJERExWaWRcIixcclxuICBcImNvcHlyaWdodFllYXJcIjogXCIke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX1cIixcclxuICBcImhlYWRsaW5lXCI6IFwiRERMVmlkXCIsXHJcbiAgXCJrZXl3b3Jkc1wiOiBcIkRETFZpZCwgb25saW5lIHZpZGVvIGRvd25sb2FkZXIsIHZpZGVvIGRvd25sb2FkZXJcIixcclxuICBcIm9mZmVyc1wiOiB7XHJcbiAgICBcIkB0eXBlXCI6IFwiT2ZmZXJcIixcclxuICAgIFwicHJpY2VcIjogXCIwLjBcIixcclxuICAgIFwicHJpY2VDdXJyZW5jeVwiOiBcIlVTRFwiLFxyXG4gICAgXCJhbHRlcm5hdGVOYW1lXCI6IFwiRERMVmlkXCIsXHJcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiRERMVmlkIE9ubGluZSBWaWRlbyBEb3dubG9hZGVyXCIsXHJcbiAgICBcIm1haW5FbnRpdHlPZlBhZ2VcIjogXCJodHRwczovL2RkbHZpZC5jb20vXCIsXHJcbiAgICBcIm5hbWVcIjogXCJERExWaWRcIlxyXG4gIH0sXHJcbiAgXCJhbHRlcm5hdGVOYW1lXCI6IFwiRERMVmlkXCIsXHJcbiAgXCJtYWluRW50aXR5T2ZQYWdlXCI6IFwiaHR0cHM6Ly9kZGx2aWQuY29tL1wiLFxyXG4gIFwibmFtZVwiOiBcIkRETFZpZFwiXHJcbn1cclxuICAgICAgICBgfX0+PC9zY3JpcHQ+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxtYWluPlxyXG4gICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGlkPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uMVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGxpbmVcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdiYW5uZXJfaW1hZ2UnIHNyYz17XCJodHRwczovL2ZpdmVyci1yZXMuY2xvdWRpbmFyeS5jb20vaW1hZ2UvdXBsb2FkL2ZfYXV0byxxX2F1dG8vdjEvc2VjdXJlZC1hdHRhY2htZW50cy9tZXNzYWdpbmdfbWVzc2FnZS9hdHRhY2htZW50L2U3MGU5NmE4YjQ2ODY2MDBkNWVjNTNkNjU4M2QzM2FlLTM5MzE5OTIxNjk0NjM0MzIzMDc4L0RETFZJRC0xLnBuZz9fX2NsZF90b2tlbl9fPWV4cD0xNjk0Njk0MDQ2fmhtYWM9OTJlN2U5NTNlNzQwZjA5OWRiYzU5YTkwOGI2MThmYzBmYzQ3MWE2MjhkMThmMjc3OGZlZTk0OGM3OTg3NmM3NVwifSBhbHQ9e1wiSW1hZ2UgQ3Jhc2hlZFwifSBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICdhdXRvJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgPGgxPnt0KCdoZWFkbGluZScpfTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NcIj5cclxuICAgICAgICAgICAgICAgICAge2xudG9icih0KCdzdWJfaGVhZGxpbmUnKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxTdGlja3lTaGFyZUJ1dHRvbnNcclxuICAgICAgICAgICAgICAgICAgY29uZmlnPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25tZW50OiAnbGVmdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdzb2NpYWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udF9zaXplOiAxNixcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbHM6ICdjb3VudHMnLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlOiAnZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgIG1pbl9jb3VudDogMCxcclxuICAgICAgICAgICAgICAgICAgICBuZXR3b3JrczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgJ3doYXRzYXBwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICdtZXNzZW5nZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgJ3JlZGRpdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAndHdpdHRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAnZmFjZWJvb2snLFxyXG4gICAgICAgICAgICAgICAgICAgICAgJ2xpbmtlZGluJ1xyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTIsXHJcbiAgICAgICAgICAgICAgICAgICAgcmFkaXVzOiA0LFxyXG4gICAgICAgICAgICAgICAgICAgIHNob3dfdG90YWw6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd19tb2JpbGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd190b2dnbGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogNDgsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAxNjAsXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9kZGx2aWQuY29tLycsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHk6ICc1ZjBiZTJlYjdkZjZkZTAwMTMzMjM1YjUnXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiL2Rvd25sb2FkXCIgbWV0aG9kPVwiZ2V0XCIgb25TdWJtaXQ9e3N1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsaW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwibGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImh0dHBzOi8vXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtsaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRMaW5rKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm49XCJodHRwcz86Ly8uK1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17dCgnbGlua190b19kb3dubG9hZCcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17KGVycm9yKSA/ICdoYXMtZXJyb3InIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG93bmxvYWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPnt0KCdnZXRfdGhlX3ZpZGVvJyl9PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge2Vycm9yID8gPGRpdiBjbGFzc05hbWU9XCJlcnJvcl9tZXNzYWdlXCIgb25DbGljaz17KCkgPT4gc2V0RXJyb3IobnVsbCl9PntlcnJvcn08L2Rpdj4gOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VwcG9ydGVkX3NpdGVzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNpdGUgdHdpdHRlclwiPlR3aXR0ZXI8L3NwYW4+eycgJ31cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2l0ZSBmYWNlYm9va1wiPkZhY2Vib29rPC9zcGFuPnsnICd9XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNpdGUgaW5zdGFncmFtXCI+SW5zdGFncmFtPC9zcGFuPnsnICd9XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNpdGUgdGlrdG9rXCI+VGlrVG9rPC9zcGFuPnsnICd9XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNpdGUgeW91dHViZVwiPllvdXR1YmU8L3NwYW4+eycgJ31cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2l0ZSByZWRkaXRcIj5SZWRkaXQ8L3NwYW4+eycgJ31cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2l0ZSBwaW50ZXJlc3RcIj5QaW50ZXJlc3Q8L3NwYW4+eycgJ31cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2l0ZSBsaW5rZWRpblwiPkxpbmtlZEluPC9zcGFuPnsnICd9XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNpdGUgdmltZW9cIj5WaW1lbzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0X3N1cHBvcnRlZF9zaXRlc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3N1cHBvcnRlZC13ZWJzaXRlc1wiPjxhPnt0KCdsaXN0X3N1cHBvcnRlZF93ZWJzaXRlcycpfTwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJwcm9tb1wiIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE4cHhcIixcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IFwiMjBweCAwXCJcclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dvLm5vcmR2cG4ubmV0L2FmZl9jP29mZmVyX2lkPTE1JmFmZl9pZD04NzY1OCZzb3VyY2U9ZGRsdmlkLmNvbVwiIHN0eWxlPXt7Y29sb3I6XCIjZDczMDMwXCJ9fSB0YXJnZXQ9XCJfYmxhbmtcIj7imqHvuI/wn5SSIERvd25sb2FkIHdpdGggTGlnaHRuaW5nIFNwZWVkIGFuZCBVbmJyZWFrYWJsZSBTZWN1cml0eSEgR2V0IDU5JSBvZmYgTm9yZFZQTiArIDMgZXh0cmEgbW9udGhzISDwn5Kq8J+MkDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbjVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8aDI+e3QoJ2Jlc3RfZnJlZV9vbmxpbmVfdmlkZW9fZG93bmxvYWRlcicpfTxici8+e3QoJ3RydXN0ZWRfYnlfbWlsbGlvbnMnKX08L2gyPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgIHtsbnRvYnIodCgnaG9tZV9kZXNjJykpfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbjYgc2VjdGlvbjZfMFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxoMj57dCgnZGlzY292ZXJfZGRsdmlkJyl9PC9oMj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczZcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uIHZpZGVvc1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+e3QoJ2Rvd25sb2FkX3ZpZGVvc19mcm9tX2ZhbW91c19zaXRlcycpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24geW91dHViZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+e3QoJ2Rvd25sb2FkX2NvbnZlcnRfeW91dHViZV9tcDMnKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24gdGlrdG9rXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj57dCgnZG93bmxvYWRfdGlrdG9rX3dpdGhvdXRfd2F0ZXJtYXJrJyl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHM2XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbiBzdG9yaWVzXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj57dCgnZG93bmxvYWRfZmFjZWJvb2tfaW5zdGFncmFtX3N0b3JpZXMnKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9yZVwiPlxyXG4gICAgICAgICAgICAgICAge3QoJ2FuZF9tYW55X21vcmVfdG9fY29tZScpfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaWdcIj57dCgndGhpc19pc19qdXN0X3RoZV9zdGFydCcpfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb242IHNlY3Rpb242XzFcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8aDI+e3QoJ2hvd190b19kb3dubG9hZF9hX3ZpZGVvJyl9PC9oMj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uIGNvcHlcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPHA+PHN0cm9uZz57dCgnY29weV92aWRlb191cmwnKX08L3N0cm9uZz48L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc1xyXG4gICAgICAgICAgICAgICAgICAgICAgaTE4bktleT1cImNvcHlfdmlkZW9fdXJsX2RldGFpbHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cz17eyBhOiA8YSAvPiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uIHBhc3RlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+e3QoJ3Bhc3RlX2xpbmsnKX08L3N0cm9uZz48L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwPnt0KCdwYXN0ZV9saW5rX2RldGFpbHMnKX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHM0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbiBkb3dubG9hZFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8cD48c3Ryb25nPnt0KCdkb3dubG9hZF90aGVfdmlkZW8nKX08L3N0cm9uZz48L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwPnt0KCdkb3dubG9hZF90aGVfdmlkZW9fZGV0YWlscycpfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbjdcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8aDI+e3QoJ2Rvd25sb2FkX3ZpZGVvc191c2luZ19vdXJfYm90cycpfTwvaDI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHM2XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbiB0d2l0dGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+e3QoJ3R3aXR0ZXJfYm90Jyl9PC9zdHJvbmc+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRyYW5zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGkxOG5LZXk9XCJ0d2l0dGVyX2JvdF9kZXRhaWxzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cz17eyBlbTogPGVtIC8+IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImN0YVwiPjxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL2RkbF92aWQxXCIgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3NOYW1lPVwiYnRuXCI+e3QoJ2ZvbGxvd19kZGxfdmlkJyl9PC9hPjwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczZcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uIHRlbGVncmFtXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+e3QoJ3RlbGVncmFtX2JvdCcpfTwvc3Ryb25nPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGkxOG5LZXk9XCJ0ZWxlZ3JhbV9ib3RfZGV0YWlsc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cz17eyBlbTogPGVtIC8+IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY3RhXCI+PGEgaHJlZj1cImh0dHBzOi8vdGVsZWdyYW0ubWUvZGRsdmlkX2JvdFwiIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzTmFtZT1cImJ0blwiPnt0KCdzZW5kX21lc3NhZ2VfdG9fZGRsdmlkX2JvdCcpfTwvYT48L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbjhcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXJ0XCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG5cIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xpbmtcIikuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKHsgdG9wOiAwLCBsZWZ0OiAwLCBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XHJcbiAgICAgICAgICAgICAgICB9fT57dCgnc3RhcnRfZG93bmxvYWRpbmcnKX08L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgICAgICAgICAgICBcclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIFxyXG4gICAgICA8QUQySFMgLz5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgaHRtbCxcclxuICAgICAgICBib2R5IHtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJQbGV4XCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90bywgT3h5Z2VuLFxyXG4gICAgICAgICAgICBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSwgc2Fucy1zZXJpZjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICoge1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICB9XHJcbiAgICAgICAgKjpmb2N1cyB7XHJcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5Ib21lLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+ICh7XHJcbiAgbmFtZXNwYWNlc1JlcXVpcmVkOiBbJ2NvbW1vbiddLFxyXG59KVxyXG5cclxuSG9tZS5wcm9wVHlwZXMgPSB7XHJcbiAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKCdjb21tb24nKShIb21lKSJdfQ== */\n/*@ sourceURL=D:\\\\Clients Panel\\\\Web Development\\\\ddlvid1old\\\\pages\\\\index.js */"));
};
Home.getInitialProps = async () => ({
  namespacesRequired: ['common']
});
Home.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_4__["withTranslation"])('common')(Home));

/***/ }),

/***/ "./pages/parts/ad2hs.js":
/*!******************************!*\
  !*** ./pages/parts/ad2hs.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);



var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const AD2HS = () => {
  const {
    0: hideBanner,
    1: setHideBanner
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  var deferredPrompt;
  const showAddToHomeScreen = () => {
    var a2hsBtn = window.document.querySelector(".ad2hs-banner");
    if (a2hsBtn) {
      a2hsBtn.classList.add("show");
      var btn = a2hsBtn.querySelector("button");
      if (btn) addEventListener("click", addToHomeScreen);
    }
  };
  const addToHomeScreen = () => {
    var a2hsBtn = window.document.querySelector(".ad2hs-banner");
    a2hsBtn.style.display = 'none';
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(function (choiceResult) {
      if (choiceResult.outcome === 'accepted') {
        window._gaq.push(['_trackEvent', 'addedToHomeScreen', 'true']);
      }
      deferredPrompt = null;
    });
  };
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (true) {
      setHideBanner(true);
    }
    if (false) {}
  }, []);
  if (!hideBanner) {
    return __jsx("div", {
      className: "ad2hs-prompt animated fadeInRight"
    }, __jsx("button", null, "Install DDLVid Web App"), __jsx("a", {
      className: "close",
      onClick: () => {
        window.localStorage.setItem('hideAD2HS', true);
        setHideBanner(true);
      }
    }, "x"));
  }
  return null;
};
/* harmony default export */ __webpack_exports__["default"] = (AD2HS);

/***/ }),

/***/ "./pages/parts/footer.js":
/*!*******************************!*\
  !*** ./pages/parts/footer.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_2__);



var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Footer = ({
  t
}) => {
  const {
    0: cookieBannerShow,
    1: setCookieBannerShow
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (true) {
      setCookieBannerShow(false);
    }
  }, []);
  const hideBanner = () => {
    window.localStorage.setItem('hideCookieBanner', true);
    setCookieBannerShow(false);
  };
  const changeLang = (e, lang) => {
    e.preventDefault();
    _i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].changeLanguage(lang);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };
  const langs = {
    'en': 'English',
    'fr': 'Français',
    'pt': 'Português Brasileiro'
  };
  return __jsx("div", {
    id: "footer"
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "copy"
  }, "Copyright \xA9 DDLVid ", new Date().getFullYear(), ". ", t('all_rights_reserved'), ".", " ", __jsx(_i18n__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    href: "/privacy-policy"
  }, __jsx("a", {
    title: t('privacy_policy') + ' - DDLVid'
  }, t('privacy_policy')))), __jsx("div", {
    className: "right"
  }, __jsx("div", {
    className: "switch_lang"
  }, _i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].language ? __jsx("span", {
    className: "lang"
  }, __jsx("span", {
    className: "icon " + _i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].language
  }), langs[_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].language]) : null, __jsx("div", {
    className: "popup_langs"
  }, __jsx("a", {
    href: "/",
    title: "DDLVid - Online Video Downloader",
    className: "lang",
    onClick: e => changeLang(e, "en")
  }, __jsx("span", {
    className: "icon en"
  }), "English"), __jsx("a", {
    href: "/fr",
    title: "DDLVid - T\xE9l\xE9chargeur de vid\xE9os en ligne",
    className: "lang",
    onClick: e => changeLang(e, "fr")
  }, __jsx("span", {
    className: "icon fr"
  }), "Fran\xE7ais"), __jsx("a", {
    href: "/pt",
    title: "DDLVid - Download de V\xEDdeos Online",
    className: "lang",
    onClick: e => changeLang(e, "pt")
  }, __jsx("span", {
    className: "icon pt"
  }), "Portugu\xEAs Brasileiro")))), __jsx("div", {
    className: "clear"
  })), cookieBannerShow ? __jsx("div", {
    id: "cookiebanner",
    className: "animated fadeInUp"
  }, __jsx("div", {
    className: "container"
  }, __jsx("span", null, t('cookies_notice'), " ", __jsx(_i18n__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    href: "/privacy-policy"
  }, __jsx("a", {
    title: t('privacy_policy') + ' - DDLVid'
  }, t('privacy_policy')))), __jsx("button", {
    className: "btn",
    onClick: () => hideBanner()
  }, t('i_understand')))) : null);
};
Footer.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_2__["withTranslation"])('footer')(Footer));

/***/ }),

/***/ "./pages/parts/header.js":
/*!*******************************!*\
  !*** ./pages/parts/header.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_2__);



var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Header = ({
  t
}) => {
  const {
    0: showMobileMenu,
    1: setShowMobileMenu
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: theme,
    1: setTheme
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("light");
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (false) {}
  }, []);
  const updateTheme = theme => {
    setTheme(theme);
    window.document.querySelector("html").classList.remove("light");
    window.document.querySelector("html").classList.remove("dark");
    window.document.querySelector("html").classList.add(theme);
    window.localStorage.setItem("theme", theme);
  };
  const langs = [{
    title: 'English',
    value: 'en'
  }, {
    title: 'Français',
    value: 'fr'
  }, {
    title: 'Português Brasileiro',
    value: 'pt'
  }];
  return __jsx("div", {
    id: "header"
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    id: "logo"
  }, __jsx(_i18n__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    href: "/"
  }, __jsx("a", {
    className: "logo",
    title: t('headline')
  }, "DDLVid"))), __jsx("div", {
    id: "nav",
    className: showMobileMenu ? 'show-menu' : null
  }, __jsx("ul", null, __jsx("li", null, __jsx(_i18n__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    href: "/"
  }, __jsx("a", {
    onClick: () => setShowMobileMenu(false),
    title: t('home') + ' - DDLVid'
  }, t('home')))), __jsx("li", null, __jsx(_i18n__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    href: "/videodownloader"
  }, __jsx("a", {
    onClick: () => setShowMobileMenu(false),
    title: t('video_downloader')
  }, t('video_downloader')))), __jsx("li", null, __jsx(_i18n__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    href: "/urlshortener"
  }, __jsx("a", {
    onClick: () => setShowMobileMenu(false),
    title: t('url_shortener')
  }, t('url_shortener')))), __jsx("li", null, __jsx(_i18n__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    href: "/about"
  }, __jsx("a", {
    onClick: () => setShowMobileMenu(false),
    title: t('about_us') + ' - DDLVid'
  }, t('about_us')))), __jsx("li", null, __jsx(_i18n__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    href: "/contact"
  }, __jsx("a", {
    onClick: () => setShowMobileMenu(false),
    title: t('contact_us')
  }, t('contact_us')))), __jsx("li", null, __jsx(_i18n__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    href: "/account"
  }, __jsx("a", {
    onClick: () => setShowMobileMenu(false),
    title: t('login')
  }, t('login')))))), theme === "light" ? __jsx("a", {
    onClick: () => updateTheme("dark"),
    className: "theme dark"
  }, __jsx("i", null), " ", __jsx("span", null, t('dark_mode'))) : __jsx("a", {
    onClick: () => updateTheme("light"),
    className: "theme light"
  }, __jsx("i", null), " ", __jsx("span", null, t('light_mode'))), __jsx("a", {
    href: "https://telegram.me/ddlvid_bot",
    id: "telegramBot",
    target: "_blank"
  }, "DDLVid Telegram Bot"), __jsx("span", {
    className: "mobileMenuButton",
    onClick: () => setShowMobileMenu(!showMobileMenu)
  }), showMobileMenu ? __jsx("div", {
    className: "mobileMenuOverlay",
    onClick: () => setShowMobileMenu(false)
  }) : null, __jsx("div", {
    className: "clear"
  })));
};
Header.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_2__["withTranslation"])('header')(Header));

/***/ }),

/***/ "next-i18next":
/*!*******************************!*\
  !*** external "next-i18next" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-i18next");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-i18next":
/*!********************************!*\
  !*** external "react-i18next" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-i18next");

/***/ }),

/***/ "sharethis-reactjs":
/*!************************************!*\
  !*** external "sharethis-reactjs" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sharethis-reactjs");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaTE4bi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9wYXJ0cy9hZDJocy5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9wYXJ0cy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcGFydHMvaGVhZGVyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtaTE4bmV4dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWkxOG5leHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzaGFyZXRoaXMtcmVhY3Rqc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1qc3gvc3R5bGVcIiJdLCJuYW1lcyI6WyJOZXh0STE4TmV4dCIsInJlcXVpcmUiLCJkZWZhdWx0IiwibW9kdWxlIiwiZXhwb3J0cyIsInN0cmljdE1vZGUiLCJkZWZhdWx0TGFuZ3VhZ2UiLCJvdGhlckxhbmd1YWdlcyIsImxvY2FsZVN1YnBhdGhzIiwiZnIiLCJwdCIsImludGVycG9sYXRpb24iLCJlc2NhcGVWYWx1ZSIsIl9fanN4IiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwibG50b2JyIiwic3RyIiwic3BsaXQiLCJtYXAiLCJpdGVtIiwiaSIsImtleSIsIkhvbWUiLCJ0IiwibGluayIsInNldExpbmsiLCJ1c2VTdGF0ZSIsImVycm9yIiwic2V0RXJyb3IiLCJzdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzdXBwb3J0ZWRfc2l0ZXMiLCJzdXBwb3J0ZWQiLCJsZW5ndGgiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJSb3V0ZXIiLCJwdXNoIiwicGF0aG5hbWUiLCJxdWVyeSIsIndpbmRvdyIsIl9nYXEiLCJ1c2VFZmZlY3QiLCJ0d3R0ciIsIndpZGdldHMiLCJsb2FkIiwibG9jYXRpb24iLCJob3N0IiwiYm91bmNlS2lsbGVyIiwidHJhY2tTY3JvbGxpbmciLCJzY3JvbGxpbmdQZXJjZW50YWdlTnVtYmVyIiwibG9nSW50ZXJ2YWwiLCJ0cmFja0V2ZW50cyIsInRyYWNrTWF4VGltZSIsInRyYWNrTWF4VGltZVNlYyIsInNjcm9sbFRyYWNrRW5kIiwiU2Nyb2xsTWF0cml4IiwiQXJyYXkiLCJUcmFja2luZ0xvZ1RpbWUiLCJhIiwicGFyc2VJbnQiLCJzdGFydFRpbWVUcmFja2luZyIsImludGVydmFsT2JqIiwic2V0SW50ZXJ2YWwiLCJyZXZlcnNlIiwidHJhY2tNYXhUaW1lVGltZW91dCIsInNldFRpbWVvdXQiLCJjbGVhckludGVydmFsIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiRnJlcXVlbmN5IiwiUmVwZW50YW5jZSIsIml4Iiwic2Nyb2xsRnVuYyIsImJvZHkiLCJodG1sIiwiZG9jdW1lbnRFbGVtZW50IiwiZG9jdW1lbnRIZWlnaHQiLCJNYXRoIiwibWF4Iiwic2Nyb2xsSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiaXoiLCJzY3JvbGxZIiwiaW5uZXJIZWlnaHQiLCJub25JbnRlcmFjdGlvbiIsImdhIiwidHlwZSIsImFzeW5jIiwic3JjIiwicHJvdG9jb2wiLCJzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwiaGFzaCIsImVsZW0iLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsVG8iLCJ0b3AiLCJvZmZzZXRUb3AiLCJiZWhhdmlvciIsImNsYXNzTmFtZSIsIkhlYWQiLCJuYW1lIiwiY29udGVudCIsInByb3BlcnR5IiwicmVsIiwiaHJlZkxhbmciLCJocmVmIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJIZWFkZXIiLCJpZCIsImFsdCIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJTdGlja3lTaGFyZUJ1dHRvbnMiLCJjb25maWciLCJhbGlnbm1lbnQiLCJjb2xvciIsImVuYWJsZWQiLCJmb250X3NpemUiLCJsYWJlbHMiLCJsYW5ndWFnZSIsIm1pbl9jb3VudCIsIm5ldHdvcmtzIiwicGFkZGluZyIsInJhZGl1cyIsInNob3dfdG90YWwiLCJzaG93X21vYmlsZSIsInNob3dfdG9nZ2xlIiwic2l6ZSIsInVybCIsImFjdGlvbiIsIm1ldGhvZCIsIm9uU3VibWl0IiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicGF0dGVybiIsInJlcXVpcmVkIiwiYXV0b0NvbXBsZXRlIiwib25DbGljayIsIkxpbmsiLCJUcmFucyIsImkxOG5LZXkiLCJjb21wb25lbnRzIiwiZW0iLCJmb2N1cyIsImxlZnQiLCJGb290ZXIiLCJBRDJIUyIsIl9KU1hTdHlsZSIsImdldEluaXRpYWxQcm9wcyIsIm5hbWVzcGFjZXNSZXF1aXJlZCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwid2l0aFRyYW5zbGF0aW9uIiwiaGlkZUJhbm5lciIsInNldEhpZGVCYW5uZXIiLCJkZWZlcnJlZFByb21wdCIsInNob3dBZGRUb0hvbWVTY3JlZW4iLCJhMmhzQnRuIiwiY2xhc3NMaXN0IiwiYWRkIiwiYnRuIiwiYWRkVG9Ib21lU2NyZWVuIiwiZGlzcGxheSIsInByb21wdCIsInVzZXJDaG9pY2UiLCJ0aGVuIiwiY2hvaWNlUmVzdWx0Iiwib3V0Y29tZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJjb29raWVCYW5uZXJTaG93Iiwic2V0Q29va2llQmFubmVyU2hvdyIsImNoYW5nZUxhbmciLCJsYW5nIiwiaTE4biIsImNoYW5nZUxhbmd1YWdlIiwibGFuZ3MiLCJ0aXRsZSIsInNob3dNb2JpbGVNZW51Iiwic2V0U2hvd01vYmlsZU1lbnUiLCJ0aGVt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QU8sRUFBRUEsQ0FBQSxLQUFNNEMsaUJBQWlCLENBQUMsS0FBSztFQUFFLENBQUUsQ0FBQyxHQUFHLElBQUksRUFFdkdyTCxLQUFBO0lBQUs0RixTQUFTLEVBQUM7RUFBTyxDQUFFLENBQ3ZCLENBQ0osQ0FBQztBQUVkLENBQUM7QUFFRFksTUFBTSxDQUFDOEMsU0FBUyxHQUFHO0VBQ2YzSSxDQUFDLEVBQUU0SSxpREFBUyxDQUFDQyxJQUFJLENBQUNDO0FBQ3RCLENBQUM7QUFFY0MsNEhBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQ2xELE1BQU0sQ0FBQyxFOzs7Ozs7Ozs7OztBQzNIaEQseUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsNkMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBOZXh0STE4TmV4dCA9IHJlcXVpcmUoJ25leHQtaTE4bmV4dCcpLmRlZmF1bHRcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gbmV3IE5leHRJMThOZXh0KHtcclxuICAgIHN0cmljdE1vZGU6IGZhbHNlLFxyXG4gICAgZGVmYXVsdExhbmd1YWdlOiAnZW4nLFxyXG4gICAgb3RoZXJMYW5ndWFnZXM6IFsnZnInLCAncHQnXSxcclxuICAgIGxvY2FsZVN1YnBhdGhzOiB7XHJcbiAgICAgICAgZnI6ICdmcicsXHJcbiAgICAgICAgcHQ6ICdwdCdcclxuICAgIH0sXHJcbiAgICBpbnRlcnBvbGF0aW9uOiB7XHJcbiAgICAgICAgZXNjYXBlVmFsdWU6IGZhbHNlXHJcbiAgICB9XHJcbn0pIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBUcmFucyB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIHdpdGhUcmFuc2xhdGlvbiwgTGluayB9IGZyb20gJy4uL2kxOG4nO1xyXG5pbXBvcnQge1N0aWNreVNoYXJlQnV0dG9uc30gZnJvbSAnc2hhcmV0aGlzLXJlYWN0anMnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vcGFydHMvaGVhZGVyJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL3BhcnRzL2Zvb3Rlcic7XHJcbmltcG9ydCBBRDJIUyBmcm9tICcuL3BhcnRzL2FkMmhzJztcclxuLy8gaW1wb3J0IEJhbm5lciBmcm9tICcuLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9kZGx2aWQtbG9nby5wbmcnXHJcbmNvbnN0IGxudG9iciA9IChzdHIpID0+IHtcclxuICByZXR1cm4gc3RyLnNwbGl0KFwiXFxuXCIpLm1hcChmdW5jdGlvbihpdGVtLCBpKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8c3BhbiBrZXk9e2l9PntpdGVtfTxici8+PC9zcGFuPlxyXG4gICAgKVxyXG4gIH0pOyBcclxufTtcclxuXHJcbmNvbnN0IEhvbWUgPSAoeyB0IH0pID0+IHtcclxuXHJcbiAgY29uc3QgW2xpbmssIHNldExpbmtdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IHN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIGUgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG4gICAgc2V0RXJyb3IobnVsbCk7XHJcbiAgICBpZiAobGluayAhPT0gXCJcIikge1xyXG4gICAgICBjb25zdCBzdXBwb3J0ZWRfc2l0ZXMgPSBbXHJcbiAgICAgICAgXCJ5b3V0dWJlLmNvbVwiLFxyXG4gICAgICAgIFwieW91dHUuYmVcIixcclxuICAgICAgICBcInR3aXR0ZXIuY29tXCIsXHJcbiAgICAgICAgXCJsaW5rZWRpbi5jb21cIixcclxuICAgICAgICBcImZhY2Vib29rLmNvbVwiLFxyXG4gICAgICAgIFwiZmIuY29tXCIsXHJcbiAgICAgICAgXCJ0aWt0b2suY29tXCIsXHJcbiAgICAgICAgXCJ2aW1lby5jb21cIixcclxuICAgICAgICBcInBvcm5odWIuY29tXCIsXHJcbiAgICAgICAgXCJpbnN0YWdyYW0uY29tXCIsXHJcbiAgICAgICAgXCJyZWRkaXQuY29tXCIsXHJcbiAgICAgICAgXCJwaW50ZXJlc3QuY29tXCIsXHJcbiAgICAgICAgXCJwaW4uaXRcIixcclxuICAgICAgICBcIm9rLnJ1XCIsXHJcbiAgICAgICAgXCJwZXJpc2NvcGUudHZcIixcclxuICAgICAgICBcInBzY3AudHZcIixcclxuICAgICAgICBcInQuY29cIixcclxuICAgICAgICBcImZiLndhdGNoXCIsXHJcbiAgICAgICAgXCJmYndhdC5jaFwiLFxyXG4gICAgICAgIFwidmsuY29tXCIsXHJcbiAgICAgICAgXCJ0cmlsbGVyLmNvXCJcclxuICAgICAgXTtcclxuICAgICAgdmFyIHN1cHBvcnRlZCA9IGZhbHNlO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1cHBvcnRlZF9zaXRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChsaW5rLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzdXBwb3J0ZWRfc2l0ZXNbaV0pID49IDApIHtcclxuICAgICAgICAgIHN1cHBvcnRlZCA9IHRydWU7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9ICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgaWYgKHN1cHBvcnRlZCkge1xyXG4gICAgICAgIFJvdXRlci5wdXNoKHtcclxuICAgICAgICAgIHBhdGhuYW1lOiBcIi9kb3dubG9hZFwiLFxyXG4gICAgICAgICAgcXVlcnk6IHsgbGluayB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0RXJyb3IoJ0xpbmsgbm90IHN1cHBvcnRlZCB5ZXQuJyk7XHJcbiAgICAgICAgd2luZG93Ll9nYXEucHVzaChbJ190cmFja0V2ZW50JywgJ25vdFN1cHBvcnRlZCcsIGxpbmtdKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0RXJyb3IoJ0xpbmsgaXMgcmVxdWlyZWQuJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKFwidHd0dHJcIiBpbiB3aW5kb3cpIHtcclxuICAgICAgd2luZG93LnR3dHRyLndpZGdldHMubG9hZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh3aW5kb3cubG9jYXRpb24uaG9zdC5pbmRleE9mKFwibG9jYWxob3N0XCIpIDwgMCAmJiB3aW5kb3cubG9jYXRpb24uaG9zdC5pbmRleE9mKFwiMTI3LjAuMC4xXCIpIDwgMCkge1xyXG4gICAgICB3aW5kb3cuX2dhcSA9IHdpbmRvdy5fZ2FxIHx8IFtdO1xyXG4gICAgICB3aW5kb3cuX2dhcS5wdXNoKFsnX3NldEFjY291bnQnLCAnVUEtMTYyOTIzNjQyLTEnXSk7XHJcbiAgICAgIHdpbmRvdy5fZ2FxLnB1c2goWydfdHJhY2tQYWdldmlldyddKTtcclxuXHJcbiAgICAgIHZhciBib3VuY2VLaWxsZXIgPSB7XHJcbiAgICAgICAgdHJhY2tTY3JvbGxpbmc6IHRydWUsXHJcbiAgICAgICAgc2Nyb2xsaW5nUGVyY2VudGFnZU51bWJlcjogMjUsXHJcbiAgICAgICAgbG9nSW50ZXJ2YWw6IDEwLFxyXG4gICAgICAgIHRyYWNrRXZlbnRzOiB0cnVlLFxyXG4gICAgICAgIHRyYWNrTWF4VGltZTogdHJ1ZSxcclxuICAgICAgICB0cmFja01heFRpbWVTZWM6IDkwMFxyXG4gICAgICB9O1xyXG4gICAgICB3aW5kb3cuc2Nyb2xsVHJhY2tFbmQgPSBmYWxzZTtcclxuICAgICAgd2luZG93LlNjcm9sbE1hdHJpeCA9IG5ldyBBcnJheSgpO1xyXG5cclxuICAgICAgZnVuY3Rpb24gVHJhY2tpbmdMb2dUaW1lKGEpIHtcclxuICAgICAgICByZXR1cm4gYVswXSA9PSA1MCA/IChwYXJzZUludChhWzFdKSArIDEpICsgXCI6MDBcIiA6IChhWzFdIHx8IFwiMFwiKSArIFwiOlwiICsgKHBhcnNlSW50KGFbMF0pICsgMTApXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChib3VuY2VLaWxsZXIudHJhY2tFdmVudHMpIHtcclxuICAgICAgICAgIGZ1bmN0aW9uIHN0YXJ0VGltZVRyYWNraW5nKGEpIHtcclxuICAgICAgICAgICAgICB3aW5kb3cuaW50ZXJ2YWxPYmogPSB3aW5kb3cuc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgIGEgPSBUcmFja2luZ0xvZ1RpbWUoYS5zcGxpdChcIjpcIikucmV2ZXJzZSgpKTtcclxuICAgICAgICAgICAgICAgICAgd2luZG93Ll9nYXEucHVzaChbJ190cmFja0V2ZW50JywgXCJUaW1lXCIsIFwiTE9HXCIsIGFdKTtcclxuICAgICAgICAgICAgICB9LCBib3VuY2VLaWxsZXIubG9nSW50ZXJ2YWwgKiAxMDAwKVxyXG5cclxuICAgICAgICAgICAgICBpZiAoYm91bmNlS2lsbGVyLnRyYWNrTWF4VGltZSkge1xyXG4gICAgICAgICAgICAgICAgICB3aW5kb3cudHJhY2tNYXhUaW1lVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHdpbmRvdy5pbnRlcnZhbE9iaik7XHJcbiAgICAgICAgICAgICAgICAgIH0sIGJvdW5jZUtpbGxlci50cmFja01heFRpbWVTZWMgKiAxMDAwKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHdpbmRvdy5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHsgXHJcbiAgICAgICAgICAgICAgc3RhcnRUaW1lVHJhY2tpbmcoXCIwMFwiKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGJvdW5jZUtpbGxlci50cmFja1Njcm9sbGluZykge1xyXG4gICAgICAgICAgICB3aW5kb3cuRnJlcXVlbmN5ID0gYm91bmNlS2lsbGVyLnNjcm9sbGluZ1BlcmNlbnRhZ2VOdW1iZXI7XHJcbiAgICAgICAgICAgIHdpbmRvdy5SZXBlbnRhbmNlID0gMTAwIC8gYm91bmNlS2lsbGVyLnNjcm9sbGluZ1BlcmNlbnRhZ2VOdW1iZXI7XHJcbiAgICAgICAgICAgIHdpbmRvdy5TY3JvbGxNYXRyaXggPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaXggPSAwOyBpeCA8IHdpbmRvdy5SZXBlbnRhbmNlOyBpeCsrKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuU2Nyb2xsTWF0cml4W2l4XSA9IFt3aW5kb3cuRnJlcXVlbmN5LCBcImZhbHNlXCJdO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LkZyZXF1ZW5jeSA9IGJvdW5jZUtpbGxlci5zY3JvbGxpbmdQZXJjZW50YWdlTnVtYmVyICsgd2luZG93LkZyZXF1ZW5jeTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBzY3JvbGxGdW5jID0gZnVuY3Rpb24oKXtcclxuICAgICAgICAgIGlmIChib3VuY2VLaWxsZXIudHJhY2tTY3JvbGxpbmcpIHtcclxuICAgICAgICAgICAgICBpZiAoIXdpbmRvdy5zY3JvbGxUcmFja0VuZCkge1xyXG4gICAgICAgICAgICAgICAgICB3aW5kb3cuX2dhcS5wdXNoKFsnX3RyYWNrRXZlbnQnLCBcIlNjcm9sbFwiLCBcIkxPR1wiLCBcInNjcm9sbGVkXCJdKTtcclxuICAgICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRyYWNrRW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoYm91bmNlS2lsbGVyLnRyYWNrU2Nyb2xsaW5nKSB7XHJcbiAgICAgICAgICAgICAgdmFyIGJvZHkgPSB3aW5kb3cuZG9jdW1lbnQuYm9keSxcclxuICAgICAgICAgICAgICAgICAgaHRtbCA9IHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcblxyXG4gICAgICAgICAgICAgIHZhciBkb2N1bWVudEhlaWdodCA9IE1hdGgubWF4KCBib2R5LnNjcm9sbEhlaWdodCwgYm9keS5vZmZzZXRIZWlnaHQsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sLmNsaWVudEhlaWdodCwgaHRtbC5zY3JvbGxIZWlnaHQsIGh0bWwub2Zmc2V0SGVpZ2h0ICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIGZvciAodmFyIGl6ID0gMDsgaXogPCB3aW5kb3cuU2Nyb2xsTWF0cml4Lmxlbmd0aDsgaXorKykge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoKHdpbmRvdy5zY3JvbGxZICsgd2luZG93LmlubmVySGVpZ2h0ID49IGRvY3VtZW50SGVpZ2h0ICogd2luZG93LlNjcm9sbE1hdHJpeFtpel1bMF0gLyAxMDApICYmICh3aW5kb3cuU2Nyb2xsTWF0cml4W2l6XVsxXSA9PSBcImZhbHNlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuU2Nyb2xsTWF0cml4W2l6XVsxXSA9IFwidHJ1ZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2luZG93Ll9nYXEucHVzaChbJ190cmFja0V2ZW50JywgXCJQZXJjZW50YWdlIFBhZ2UgU2Nyb2xsXCIsIFwiTE9HXCIsIHdpbmRvdy5TY3JvbGxNYXRyaXhbaXpdWzBdICsgXCIlXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9uSW50ZXJhY3Rpb246IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XSlcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbEZ1bmMsIHRydWUpO1xyXG5cclxuICAgICAgKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBnYSA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgICAgICBnYS50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XHJcbiAgICAgICAgZ2EuYXN5bmMgPSB0cnVlO1xyXG4gICAgICAgIGdhLnNyYyA9ICgnaHR0cHM6JyA9PSBkb2N1bWVudC5sb2NhdGlvbi5wcm90b2NvbCA/ICdodHRwczovL3NzbCcgOiAnaHR0cDovL3d3dycpICsgJy5nb29nbGUtYW5hbHl0aWNzLmNvbS9nYS5qcyc7XHJcbiAgICAgICAgdmFyIHMgPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdO1xyXG4gICAgICAgIHMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZ2EsIHMpO1xyXG4gICAgICB9KSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh3aW5kb3cubG9jYXRpb24uaGFzaCAhPSBcIlwiKSB7XHJcbiAgICAgIHZhciBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih3aW5kb3cubG9jYXRpb24uaGFzaCtcIi1zZWN0aW9uXCIpO1xyXG4gICAgICBpZiAoZWxlbSkge1xyXG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XHJcbiAgICAgICAgICB0b3A6IGVsZW0ub2Zmc2V0VG9wLFxyXG4gICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRMaW5rKFwiXCIpO1xyXG4gIH0sIFtdKVxyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWVcIj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPnt0KCdoZWFkbGluZScpfSAtIERETFZpZDwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17dCgnbWV0YV9kZXNjcmlwdGlvbicpfSAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9XCJ0d2l0dGVyIHZpZGVvIGRvd25sb2FkZXIsZmFjZWJvb2sgdmlkZW8gZG93bmxvYWRlcix0aWt0b2sgdmlkZW8gZG93bmxvYWRlcixpbnN0YWdyYW0gdmlkZW8gZG93bmxvYWRlcix5b3V0dWJlIHZpZGVvIGRvd25sb2FkZXJcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeVwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6c2l0ZVwiIGNvbnRlbnQ9XCJAZGRsX3ZpZFwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6dGl0bGVcIiBjb250ZW50PXsnRERMVmlkIC0gJyArIHQoJ2hlYWRsaW5lJyl9IC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6ZGVzY3JpcHRpb25cIiBjb250ZW50PXt0KCdtZXRhX2Rlc2NyaXB0aW9uJyl9IC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y3JlYXRvclwiIGNvbnRlbnQ9XCJAZGRsX3ZpZFwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6aW1hZ2VcIiBjb250ZW50PVwiaHR0cHM6Ly9kZGx2aWQuY29tL2Fzc2V0cy9pbWFnZXMvb2cucG5nPzJcIiAvPiBcclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17J0RETFZpZCAtICcgKyB0KCdoZWFkbGluZScpfSAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXt0KCdtZXRhX2Rlc2NyaXB0aW9uJyl9IC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9XCJodHRwczovL2RkbHZpZC5jb20vYXNzZXRzL2ltYWdlcy9vZy5wbmc/MlwiIC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD1cImh0dHBzOi8vZGRsdmlkLmNvbS9cIiAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6c2l0ZV9uYW1lXCIgY29udGVudD1cIkRETFZpZFwiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiYWx0ZXJuYXRlXCIgaHJlZkxhbmc9XCJlblwiIGhyZWY9XCJodHRwczovL2RkbHZpZC5jb20vXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJhbHRlcm5hdGVcIiBocmVmTGFuZz1cIngtZGVmYXVsdFwiIGhyZWY9XCJodHRwczovL2RkbHZpZC5jb20vXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJhbHRlcm5hdGVcIiBocmVmTGFuZz1cImZyXCIgaHJlZj1cImh0dHBzOi8vZGRsdmlkLmNvbS9mclwiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiYWx0ZXJuYXRlXCIgaHJlZkxhbmc9XCJwdFwiIGhyZWY9XCJodHRwczovL2RkbHZpZC5jb20vcHRcIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9XCJodHRwczovL2RkbHZpZC5jb20vXCIgLz5cclxuICAgICAgICA8c2NyaXB0IHR5cGU9XCJhcHBsaWNhdGlvbi9sZCtqc29uXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBgXHJcbntcclxuICBcIkBjb250ZXh0XCI6IFwiaHR0cDovL3NjaGVtYS5vcmcvXCIsXHJcbiAgXCJAdHlwZVwiOiBcIlNvZnR3YXJlQXBwbGljYXRpb25cIixcclxuICBcImFwcGxpY2F0aW9uQ2F0ZWdvcnlcIjogXCJNdWx0aW1lZGlhQXBwbGljYXRpb25cIixcclxuICBcIm9wZXJhdGluZ1N5c3RlbVwiOltcIldpbmRvd3NcIixcIm1hY09TXCIsXCJBbmRyb2lkXCIsXCJpT1NcIl0sXHJcbiAgXCJzY3JlZW5zaG90XCI6IFwiaHR0cHM6Ly9kZGx2aWQuY29tL2Fzc2V0cy9pbWFnZXMvb2cucG5nPzJcIixcclxuICBcImFnZ3JlZ2F0ZVJhdGluZ1wiOiB7XHJcbiAgICBcIkB0eXBlXCI6IFwiQWdncmVnYXRlUmF0aW5nXCIsXHJcbiAgICBcInJhdGluZ0NvdW50XCI6IFwiNTUxMFwiLFxyXG4gICAgXCJyZXZpZXdDb3VudFwiOiBcIjU1MTBcIixcclxuICAgIFwiYmVzdFJhdGluZ1wiOiBcIjVcIixcclxuICAgIFwicmF0aW5nVmFsdWVcIjogXCI0LjhcIixcclxuICAgIFwid29yc3RSYXRpbmdcIjogXCIxXCIsXHJcbiAgICBcImFsdGVybmF0ZU5hbWVcIjogXCJERExWaWQgT25saW5lIFZpZGVvIERvd25sb2FkZXJcIixcclxuICAgIFwibWFpbkVudGl0eU9mUGFnZVwiOiBcImh0dHBzOi8vZGRsdmlkLmNvbS9cIixcclxuICAgIFwibmFtZVwiOiBcIkRETFZpZFwiXHJcbiAgfSxcclxuICBcImFsdGVybmF0aXZlSGVhZGxpbmVcIjogXCJERExWaWRcIixcclxuICBcImNvcHlyaWdodFllYXJcIjogXCIke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX1cIixcclxuICBcImhlYWRsaW5lXCI6IFwiRERMVmlkXCIsXHJcbiAgXCJrZXl3b3Jkc1wiOiBcIkRETFZpZCwgb25saW5lIHZpZGVvIGRvd25sb2FkZXIsIHZpZGVvIGRvd25sb2FkZXJcIixcclxuICBcIm9mZmVyc1wiOiB7XHJcbiAgICBcIkB0eXBlXCI6IFwiT2ZmZXJcIixcclxuICAgIFwicHJpY2VcIjogXCIwLjBcIixcclxuICAgIFwicHJpY2VDdXJyZW5jeVwiOiBcIlVTRFwiLFxyXG4gICAgXCJhbHRlcm5hdGVOYW1lXCI6IFwiRERMVmlkXCIsXHJcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiRERMVmlkIE9ubGluZSBWaWRlbyBEb3dubG9hZGVyXCIsXHJcbiAgICBcIm1haW5FbnRpdHlPZlBhZ2VcIjogXCJodHRwczovL2RkbHZpZC5jb20vXCIsXHJcbiAgICBcIm5hbWVcIjogXCJERExWaWRcIlxyXG4gIH0sXHJcbiAgXCJhbHRlcm5hdGVOYW1lXCI6IFwiRERMVmlkXCIsXHJcbiAgXCJtYWluRW50aXR5T2ZQYWdlXCI6IFwiaHR0cHM6Ly9kZGx2aWQuY29tL1wiLFxyXG4gIFwibmFtZVwiOiBcIkRETFZpZFwiXHJcbn1cclxuICAgICAgICBgfX0+PC9zY3JpcHQ+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxtYWluPlxyXG4gICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGlkPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uMVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGxpbmVcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdiYW5uZXJfaW1hZ2UnIHNyYz17XCJodHRwczovL2ZpdmVyci1yZXMuY2xvdWRpbmFyeS5jb20vaW1hZ2UvdXBsb2FkL2ZfYXV0byxxX2F1dG8vdjEvc2VjdXJlZC1hdHRhY2htZW50cy9tZXNzYWdpbmdfbWVzc2FnZS9hdHRhY2htZW50L2U3MGU5NmE4YjQ2ODY2MDBkNWVjNTNkNjU4M2QzM2FlLTM5MzE5OTIxNjk0NjM0MzIzMDc4L0RETFZJRC0xLnBuZz9fX2NsZF90b2tlbl9fPWV4cD0xNjk0Njk0MDQ2fmhtYWM9OTJlN2U5NTNlNzQwZjA5OWRiYzU5YTkwOGI2MThmYzBmYzQ3MWE2MjhkMThmMjc3OGZlZTk0OGM3OTg3NmM3NVwifSBhbHQ9e1wiSW1hZ2UgQ3Jhc2hlZFwifSBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICdhdXRvJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgPGgxPnt0KCdoZWFkbGluZScpfTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NcIj5cclxuICAgICAgICAgICAgICAgICAge2xudG9icih0KCdzdWJfaGVhZGxpbmUnKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxTdGlja3lTaGFyZUJ1dHRvbnNcclxuICAgICAgICAgICAgICAgICAgY29uZmlnPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25tZW50OiAnbGVmdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdzb2NpYWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udF9zaXplOiAxNixcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbHM6ICdjb3VudHMnLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlOiAnZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgIG1pbl9jb3VudDogMCxcclxuICAgICAgICAgICAgICAgICAgICBuZXR3b3JrczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgJ3doYXRzYXBwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICdtZXNzZW5nZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgJ3JlZGRpdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAndHdpdHRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAnZmFjZWJvb2snLFxyXG4gICAgICAgICAgICAgICAgICAgICAgJ2xpbmtlZGluJ1xyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTIsXHJcbiAgICAgICAgICAgICAgICAgICAgcmFkaXVzOiA0LFxyXG4gICAgICAgICAgICAgICAgICAgIHNob3dfdG90YWw6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd19tb2JpbGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd190b2dnbGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogNDgsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAxNjAsXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9kZGx2aWQuY29tLycsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHk6ICc1ZjBiZTJlYjdkZjZkZTAwMTMzMjM1YjUnXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiL2Rvd25sb2FkXCIgbWV0aG9kPVwiZ2V0XCIgb25TdWJtaXQ9e3N1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsaW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwibGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImh0dHBzOi8vXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtsaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRMaW5rKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm49XCJodHRwcz86Ly8uK1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17dCgnbGlua190b19kb3dubG9hZCcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17KGVycm9yKSA/ICdoYXMtZXJyb3InIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG93bmxvYWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPnt0KCdnZXRfdGhlX3ZpZGVvJyl9PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge2Vycm9yID8gPGRpdiBjbGFzc05hbWU9XCJlcnJvcl9tZXNzYWdlXCIgb25DbGljaz17KCkgPT4gc2V0RXJyb3IobnVsbCl9PntlcnJvcn08L2Rpdj4gOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VwcG9ydGVkX3NpdGVzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNpdGUgdHdpdHRlclwiPlR3aXR0ZXI8L3NwYW4+eycgJ31cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2l0ZSBmYWNlYm9va1wiPkZhY2Vib29rPC9zcGFuPnsnICd9XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNpdGUgaW5zdGFncmFtXCI+SW5zdGFncmFtPC9zcGFuPnsnICd9XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNpdGUgdGlrdG9rXCI+VGlrVG9rPC9zcGFuPnsnICd9XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNpdGUgeW91dHViZVwiPllvdXR1YmU8L3NwYW4+eycgJ31cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2l0ZSByZWRkaXRcIj5SZWRkaXQ8L3NwYW4+eycgJ31cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2l0ZSBwaW50ZXJlc3RcIj5QaW50ZXJlc3Q8L3NwYW4+eycgJ31cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2l0ZSBsaW5rZWRpblwiPkxpbmtlZEluPC9zcGFuPnsnICd9XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNpdGUgdmltZW9cIj5WaW1lbzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0X3N1cHBvcnRlZF9zaXRlc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3N1cHBvcnRlZC13ZWJzaXRlc1wiPjxhPnt0KCdsaXN0X3N1cHBvcnRlZF93ZWJzaXRlcycpfTwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJwcm9tb1wiIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE4cHhcIixcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IFwiMjBweCAwXCJcclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dvLm5vcmR2cG4ubmV0L2FmZl9jP29mZmVyX2lkPTE1JmFmZl9pZD04NzY1OCZzb3VyY2U9ZGRsdmlkLmNvbVwiIHN0eWxlPXt7Y29sb3I6XCIjZDczMDMwXCJ9fSB0YXJnZXQ9XCJfYmxhbmtcIj7imqHvuI/wn5SSIERvd25sb2FkIHdpdGggTGlnaHRuaW5nIFNwZWVkIGFuZCBVbmJyZWFrYWJsZSBTZWN1cml0eSEgR2V0IDU5JSBvZmYgTm9yZFZQTiArIDMgZXh0cmEgbW9udGhzISDwn5Kq8J+MkDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbjVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8aDI+e3QoJ2Jlc3RfZnJlZV9vbmxpbmVfdmlkZW9fZG93bmxvYWRlcicpfTxici8+e3QoJ3RydXN0ZWRfYnlfbWlsbGlvbnMnKX08L2gyPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgIHtsbnRvYnIodCgnaG9tZV9kZXNjJykpfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbjYgc2VjdGlvbjZfMFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxoMj57dCgnZGlzY292ZXJfZGRsdmlkJyl9PC9oMj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczZcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uIHZpZGVvc1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+e3QoJ2Rvd25sb2FkX3ZpZGVvc19mcm9tX2ZhbW91c19zaXRlcycpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24geW91dHViZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+e3QoJ2Rvd25sb2FkX2NvbnZlcnRfeW91dHViZV9tcDMnKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24gdGlrdG9rXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj57dCgnZG93bmxvYWRfdGlrdG9rX3dpdGhvdXRfd2F0ZXJtYXJrJyl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHM2XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbiBzdG9yaWVzXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj57dCgnZG93bmxvYWRfZmFjZWJvb2tfaW5zdGFncmFtX3N0b3JpZXMnKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9yZVwiPlxyXG4gICAgICAgICAgICAgICAge3QoJ2FuZF9tYW55X21vcmVfdG9fY29tZScpfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaWdcIj57dCgndGhpc19pc19qdXN0X3RoZV9zdGFydCcpfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb242IHNlY3Rpb242XzFcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8aDI+e3QoJ2hvd190b19kb3dubG9hZF9hX3ZpZGVvJyl9PC9oMj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uIGNvcHlcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPHA+PHN0cm9uZz57dCgnY29weV92aWRlb191cmwnKX08L3N0cm9uZz48L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc1xyXG4gICAgICAgICAgICAgICAgICAgICAgaTE4bktleT1cImNvcHlfdmlkZW9fdXJsX2RldGFpbHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cz17eyBhOiA8YSAvPiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uIHBhc3RlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+e3QoJ3Bhc3RlX2xpbmsnKX08L3N0cm9uZz48L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwPnt0KCdwYXN0ZV9saW5rX2RldGFpbHMnKX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHM0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbiBkb3dubG9hZFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8cD48c3Ryb25nPnt0KCdkb3dubG9hZF90aGVfdmlkZW8nKX08L3N0cm9uZz48L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwPnt0KCdkb3dubG9hZF90aGVfdmlkZW9fZGV0YWlscycpfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbjdcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8aDI+e3QoJ2Rvd25sb2FkX3ZpZGVvc191c2luZ19vdXJfYm90cycpfTwvaDI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHM2XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbiB0d2l0dGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+e3QoJ3R3aXR0ZXJfYm90Jyl9PC9zdHJvbmc+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRyYW5zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGkxOG5LZXk9XCJ0d2l0dGVyX2JvdF9kZXRhaWxzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cz17eyBlbTogPGVtIC8+IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImN0YVwiPjxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL2RkbF92aWQxXCIgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3NOYW1lPVwiYnRuXCI+e3QoJ2ZvbGxvd19kZGxfdmlkJyl9PC9hPjwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczZcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uIHRlbGVncmFtXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+e3QoJ3RlbGVncmFtX2JvdCcpfTwvc3Ryb25nPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGkxOG5LZXk9XCJ0ZWxlZ3JhbV9ib3RfZGV0YWlsc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cz17eyBlbTogPGVtIC8+IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY3RhXCI+PGEgaHJlZj1cImh0dHBzOi8vdGVsZWdyYW0ubWUvZGRsdmlkX2JvdFwiIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzTmFtZT1cImJ0blwiPnt0KCdzZW5kX21lc3NhZ2VfdG9fZGRsdmlkX2JvdCcpfTwvYT48L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbjhcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXJ0XCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG5cIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xpbmtcIikuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKHsgdG9wOiAwLCBsZWZ0OiAwLCBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XHJcbiAgICAgICAgICAgICAgICB9fT57dCgnc3RhcnRfZG93bmxvYWRpbmcnKX08L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgICAgICAgICAgICBcclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIFxyXG4gICAgICA8QUQySFMgLz5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgaHRtbCxcclxuICAgICAgICBib2R5IHtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJQbGV4XCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90bywgT3h5Z2VuLFxyXG4gICAgICAgICAgICBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSwgc2Fucy1zZXJpZjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICoge1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICB9XHJcbiAgICAgICAgKjpmb2N1cyB7XHJcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5Ib21lLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+ICh7XHJcbiAgbmFtZXNwYWNlc1JlcXVpcmVkOiBbJ2NvbW1vbiddLFxyXG59KVxyXG5cclxuSG9tZS5wcm9wVHlwZXMgPSB7XHJcbiAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKCdjb21tb24nKShIb21lKSIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IEFEMkhTID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtoaWRlQmFubmVyLCBzZXRIaWRlQmFubmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIFxyXG4gICAgdmFyIGRlZmVycmVkUHJvbXB0O1xyXG5cclxuICAgIGNvbnN0IHNob3dBZGRUb0hvbWVTY3JlZW4gPSAoKSA9PiB7XHJcbiAgICAgICAgdmFyIGEyaHNCdG4gPSB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZDJocy1iYW5uZXJcIik7XHJcbiAgICAgICAgaWYgKGEyaHNCdG4pIHtcclxuICAgICAgICAgICAgYTJoc0J0bi5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcclxuICAgICAgICAgICAgdmFyIGJ0biA9IGEyaHNCdG4ucXVlcnlTZWxlY3RvcihcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgaWYgKGJ0bikgYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZFRvSG9tZVNjcmVlbik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBhZGRUb0hvbWVTY3JlZW4gPSAoKSA9PiB7XHJcbiAgICAgICAgdmFyIGEyaHNCdG4gPSB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZDJocy1iYW5uZXJcIik7XHJcbiAgICAgICAgYTJoc0J0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIGRlZmVycmVkUHJvbXB0LnByb21wdCgpO1xyXG4gICAgICAgIGRlZmVycmVkUHJvbXB0LnVzZXJDaG9pY2UudGhlbihmdW5jdGlvbihjaG9pY2VSZXN1bHQpIHtcclxuICAgICAgICAgICAgaWYgKGNob2ljZVJlc3VsdC5vdXRjb21lID09PSAnYWNjZXB0ZWQnKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuX2dhcS5wdXNoKFsnX3RyYWNrRXZlbnQnLCAnYWRkZWRUb0hvbWVTY3JlZW4nLCAndHJ1ZSddKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWZlcnJlZFByb21wdCA9IG51bGw7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ2hpZGVBRDJIUycgaW4gd2luZG93LmxvY2FsU3RvcmFnZSkge1xyXG4gICAgICAgICAgICBzZXRIaWRlQmFubmVyKHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5pbm5lcldpZHRoIDw9IDEwNTApIHtcclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZWluc3RhbGxwcm9tcHQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgZGVmZXJyZWRQcm9tcHQgPSBlO1xyXG4gICAgICAgICAgICAgICAgc2hvd0FkZFRvSG9tZVNjcmVlbigpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBpZiAoIWhpZGVCYW5uZXIpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkMmhzLXByb21wdCBhbmltYXRlZCBmYWRlSW5SaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbj5JbnN0YWxsIERETFZpZCBXZWIgQXBwPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjbG9zZVwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2hpZGVBRDJIUycsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEhpZGVCYW5uZXIodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9fT54PC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFEMkhTXHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgaTE4biwgTGluaywgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vaTE4bic7XHJcblxyXG5jb25zdCBGb290ZXIgPSAoeyB0IH0pID0+IHtcclxuXHJcbiAgICBjb25zdCBbY29va2llQmFubmVyU2hvdywgc2V0Q29va2llQmFubmVyU2hvd10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAnaGlkZUNvb2tpZUJhbm5lcicgaW4gd2luZG93LmxvY2FsU3RvcmFnZSkge1xyXG4gICAgICAgICAgICBzZXRDb29raWVCYW5uZXJTaG93KGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgaGlkZUJhbm5lciA9ICgpID0+IHtcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2hpZGVDb29raWVCYW5uZXInLCB0cnVlKTtcclxuICAgICAgICBzZXRDb29raWVCYW5uZXJTaG93KGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjaGFuZ2VMYW5nID0gKGUsIGxhbmcpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaTE4bi5jaGFuZ2VMYW5ndWFnZShsYW5nKTtcclxuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IDAsIGxlZnQ6IDAsIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbGFuZ3MgPSB7XHJcbiAgICAgICAgJ2VuJzogJ0VuZ2xpc2gnLFxyXG4gICAgICAgICdmcic6ICdGcmFuw6dhaXMnLFxyXG4gICAgICAgICdwdCc6ICdQb3J0dWd1w6pzIEJyYXNpbGVpcm8nXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD1cImZvb3RlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3B5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgQ29weXJpZ2h0ICZjb3B5OyBERExWaWQge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0uIHt0KCdhbGxfcmlnaHRzX3Jlc2VydmVkJyl9LlxyXG4gICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3ByaXZhY3ktcG9saWN5XCI+PGEgdGl0bGU9e3QoJ3ByaXZhY3lfcG9saWN5JykgKyAnIC0gRERMVmlkJ30+e3QoJ3ByaXZhY3lfcG9saWN5Jyl9PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3dpdGNoX2xhbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2kxOG4ubGFuZ3VhZ2UgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtcImljb24gXCIgKyBpMThuLmxhbmd1YWdlfT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhbmdzW2kxOG4ubGFuZ3VhZ2VdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3B1cF9sYW5nc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIiB0aXRsZT1cIkRETFZpZCAtIE9ubGluZSBWaWRlbyBEb3dubG9hZGVyXCIgY2xhc3NOYW1lPVwibGFuZ1wiIG9uQ2xpY2s9eyhlKSA9PiBjaGFuZ2VMYW5nKGUsIFwiZW5cIil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gZW5cIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRW5nbGlzaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9mclwiIHRpdGxlPVwiRERMVmlkIC0gVMOpbMOpY2hhcmdldXIgZGUgdmlkw6lvcyBlbiBsaWduZVwiIGNsYXNzTmFtZT1cImxhbmdcIiBvbkNsaWNrPXsoZSkgPT4gY2hhbmdlTGFuZyhlLCBcImZyXCIpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGZyXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZyYW7Dp2Fpc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9wdFwiIHRpdGxlPVwiRERMVmlkIC0gRG93bmxvYWQgZGUgVsOtZGVvcyBPbmxpbmVcIiBjbGFzc05hbWU9XCJsYW5nXCIgb25DbGljaz17KGUpID0+IGNoYW5nZUxhbmcoZSwgXCJwdFwiKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBwdFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQb3J0dWd1w6pzIEJyYXNpbGVpcm9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge2Nvb2tpZUJhbm5lclNob3cgPyAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY29va2llYmFubmVyXCIgY2xhc3NOYW1lPVwiYW5pbWF0ZWQgZmFkZUluVXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdjb29raWVzX25vdGljZScpfSA8TGluayBocmVmPVwiL3ByaXZhY3ktcG9saWN5XCI+PGEgdGl0bGU9e3QoJ3ByaXZhY3lfcG9saWN5JykgKyAnIC0gRERMVmlkJ30+e3QoJ3ByaXZhY3lfcG9saWN5Jyl9PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiIG9uQ2xpY2s9eygpID0+IGhpZGVCYW5uZXIoKX0+e3QoJ2lfdW5kZXJzdGFuZCcpfTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5Gb290ZXIucHJvcFR5cGVzID0ge1xyXG4gICAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKCdmb290ZXInKShGb290ZXIpIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBpMThuLCBMaW5rLCB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi9pMThuJztcclxuXHJcbmNvbnN0IEhlYWRlciA9ICh7wqB0IH0pID0+IHtcclxuICAgIGNvbnN0IFtzaG93TW9iaWxlTWVudSwgc2V0U2hvd01vYmlsZU1lbnVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VTdGF0ZShcImxpZ2h0XCIpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgaWYgKFwidGhlbWVcIiBpbiB3aW5kb3cubG9jYWxTdG9yYWdlKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImh0bWxcIikuY2xhc3NMaXN0LmFkZCh3aW5kb3cubG9jYWxTdG9yYWdlLnRoZW1lKTtcclxuICAgICAgICAgICAgICAgIHNldFRoZW1lKHdpbmRvdy5sb2NhbFN0b3JhZ2UudGhlbWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhICYmIHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJykubWF0Y2hlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaHRtbFwiKS5jbGFzc0xpc3QuYWRkKFwiZGFya1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaGVtZShcImRhcmtcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgdXBkYXRlVGhlbWUgPSAodGhlbWUpID0+IHtcclxuICAgICAgICBzZXRUaGVtZSh0aGVtZSk7XHJcbiAgICAgICAgd2luZG93LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJodG1sXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJsaWdodFwiKTtcclxuICAgICAgICB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImh0bWxcIikuY2xhc3NMaXN0LnJlbW92ZShcImRhcmtcIik7XHJcbiAgICAgICAgd2luZG93LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJodG1sXCIpLmNsYXNzTGlzdC5hZGQodGhlbWUpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIHRoZW1lKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbGFuZ3MgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0VuZ2xpc2gnLFxyXG4gICAgICAgICAgICB2YWx1ZTogJ2VuJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0ZyYW7Dp2FpcycsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnZnInXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnUG9ydHVndcOqcyBCcmFzaWxlaXJvJyxcclxuICAgICAgICAgICAgdmFsdWU6ICdwdCdcclxuICAgICAgICB9XHJcbiAgICBdO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD1cImhlYWRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImxvZ29cIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsb2dvXCIgdGl0bGU9e3QoJ2hlYWRsaW5lJyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRERMVmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibmF2XCIgY2xhc3NOYW1lPXsoc2hvd01vYmlsZU1lbnUpID8gJ3Nob3ctbWVudScgOiBudWxsfT5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBpZD1cImxhbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2kxOG4ubGFuZ3VhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpMThuLmNoYW5nZUxhbmd1YWdlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTaG93TW9iaWxlTWVudShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17dCgnc2l0ZV9sYW5ndWFnZScpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFuZ3MubWFwKChsYW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxvcHRpb24gdmFsdWU9e2xhbmcudmFsdWV9IGtleT17bGFuZy52YWx1ZX0+e2xhbmcudGl0bGV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48YSBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9iaWxlTWVudShmYWxzZSl9IHRpdGxlPXt0KCdob21lJykgKyAnIC0gRERMVmlkJ30+e3QoJ2hvbWUnKX08L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zdXBwb3J0ZWQtd2Vic2l0ZXNcIj48YSBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9iaWxlTWVudShmYWxzZSl9IHRpdGxlPXt0KCdzdXBwb3J0ZWRfd2Vic2l0ZXMnKSArICcgLSBERExWaWQnfT57dCgnc3VwcG9ydGVkX3dlYnNpdGVzJyl9PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdmlkZW9kb3dubG9hZGVyXCI+PGEgb25DbGljaz17KCkgPT4gc2V0U2hvd01vYmlsZU1lbnUoZmFsc2UpfSB0aXRsZT17dCgndmlkZW9fZG93bmxvYWRlcicpfT57dCgndmlkZW9fZG93bmxvYWRlcicpfTwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXJsc2hvcnRlbmVyXCI+PGEgb25DbGljaz17KCkgPT4gc2V0U2hvd01vYmlsZU1lbnUoZmFsc2UpfSB0aXRsZT17dCgndXJsX3Nob3J0ZW5lcicpfT57dCgndXJsX3Nob3J0ZW5lcicpfTwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+PGEgb25DbGljaz17KCkgPT4gc2V0U2hvd01vYmlsZU1lbnUoZmFsc2UpfSB0aXRsZT17dCgnYWJvdXRfdXMnKSArICcgLSBERExWaWQnfT57dCgnYWJvdXRfdXMnKX08L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIj48YSBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9iaWxlTWVudShmYWxzZSl9IHRpdGxlPXt0KCdjb250YWN0X3VzJyl9Pnt0KCdjb250YWN0X3VzJyl9PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWNjb3VudFwiPjxhIG9uQ2xpY2s9eygpID0+IHNldFNob3dNb2JpbGVNZW51KGZhbHNlKX0gdGl0bGU9e3QoJ2xvZ2luJyl9Pnt0KCdsb2dpbicpfTwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90ZWxlZ3JhbS5tZS9kZGx2aWRfYm90XCIgdGl0bGU9XCJERExWaWQgVGVsZWdyYW0gQm90XCIgdGFyZ2V0PVwiX2JsYW5rXCI+VGVsZWdyYW08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAge3RoZW1lID09PSBcImxpZ2h0XCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17KCkgPT4gdXBkYXRlVGhlbWUoXCJkYXJrXCIpfSBjbGFzc05hbWU9XCJ0aGVtZSBkYXJrXCI+PGk+PC9pPiA8c3Bhbj57dCgnZGFya19tb2RlJyl9PC9zcGFuPjwvYT5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17KCkgPT4gdXBkYXRlVGhlbWUoXCJsaWdodFwiKX0gY2xhc3NOYW1lPVwidGhlbWUgbGlnaHRcIj48aT48L2k+IDxzcGFuPnt0KCdsaWdodF9tb2RlJyl9PC9zcGFuPjwvYT5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3RlbGVncmFtLm1lL2RkbHZpZF9ib3RcIiBpZD1cInRlbGVncmFtQm90XCIgdGFyZ2V0PVwiX2JsYW5rXCI+RERMVmlkIFRlbGVncmFtIEJvdDwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtb2JpbGVNZW51QnV0dG9uXCIgb25DbGljaz17KCkgPT4gc2V0U2hvd01vYmlsZU1lbnUoIXNob3dNb2JpbGVNZW51KX0+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAge3Nob3dNb2JpbGVNZW51ID8gPGRpdiBjbGFzc05hbWU9XCJtb2JpbGVNZW51T3ZlcmxheVwiIG9uQ2xpY2s9eygpID0+IHNldFNob3dNb2JpbGVNZW51KGZhbHNlKX0gLz4gOiBudWxsfVxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuSGVhZGVyLnByb3BUeXBlcyA9IHtcclxuICAgIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbignaGVhZGVyJykoSGVhZGVyKSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtaTE4bmV4dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pMThuZXh0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNoYXJldGhpcy1yZWFjdGpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc3R5bGVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==