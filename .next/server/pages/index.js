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
    src: "https://pbs.twimg.com/profile_banners/1248273200406028290/1692801582/1080x360",
    alt: "Image Crashed",
    style: {
      width: '100%',
      height: 'auto'
    },
    className: "jsx-235026066"
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
  }, "html,body{padding:0;margin:0;font-family:\"Plex\",-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen, Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;}*{box-sizing:border-box;}*:focus{outline:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxXZWIgRGV2ZWxvcG1lbnRcXENsaWVudFdvcmtcXGRkbF92aWQxXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeWJ5QixBQUlxQixBQU9ZLEFBR1QsVUFUSixHQVVYLE1BUndFLEdBS3hFLHlJQUpBIiwiZmlsZSI6IkQ6XFxXZWIgRGV2ZWxvcG1lbnRcXENsaWVudFdvcmtcXGRkbF92aWQxXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IFRyYW5zIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyBSb3V0ZXIsIHdpdGhUcmFuc2xhdGlvbiwgTGluayB9IGZyb20gJy4uL2kxOG4nO1xuaW1wb3J0IHtTdGlja3lTaGFyZUJ1dHRvbnN9IGZyb20gJ3NoYXJldGhpcy1yZWFjdGpzJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL3BhcnRzL2hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vcGFydHMvZm9vdGVyJztcbmltcG9ydCBBRDJIUyBmcm9tICcuL3BhcnRzL2FkMmhzJztcbi8vIGltcG9ydCBCYW5uZXIgZnJvbSAnLi4vcHVibGljL2Fzc2V0cy9pbWFnZXMvZGRsdmlkLWxvZ28ucG5nJ1xuY29uc3QgbG50b2JyID0gKHN0cikgPT4ge1xuICByZXR1cm4gc3RyLnNwbGl0KFwiXFxuXCIpLm1hcChmdW5jdGlvbihpdGVtLCBpKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzcGFuIGtleT17aX0+e2l0ZW19PGJyLz48L3NwYW4+XG4gICAgKVxuICB9KTsgXG59O1xuXG5jb25zdCBIb21lID0gKHsgdCB9KSA9PiB7XG5cbiAgY29uc3QgW2xpbmssIHNldExpbmtdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IHN1Ym1pdCA9IChlKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBlICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIHNldEVycm9yKG51bGwpO1xuICAgIGlmIChsaW5rICE9PSBcIlwiKSB7XG4gICAgICBjb25zdCBzdXBwb3J0ZWRfc2l0ZXMgPSBbXG4gICAgICAgIFwieW91dHViZS5jb21cIixcbiAgICAgICAgXCJ5b3V0dS5iZVwiLFxuICAgICAgICBcInR3aXR0ZXIuY29tXCIsXG4gICAgICAgIFwibGlua2VkaW4uY29tXCIsXG4gICAgICAgIFwiZmFjZWJvb2suY29tXCIsXG4gICAgICAgIFwiZmIuY29tXCIsXG4gICAgICAgIFwidGlrdG9rLmNvbVwiLFxuICAgICAgICBcInZpbWVvLmNvbVwiLFxuICAgICAgICBcInBvcm5odWIuY29tXCIsXG4gICAgICAgIFwiaW5zdGFncmFtLmNvbVwiLFxuICAgICAgICBcInJlZGRpdC5jb21cIixcbiAgICAgICAgXCJwaW50ZXJlc3QuY29tXCIsXG4gICAgICAgIFwicGluLml0XCIsXG4gICAgICAgIFwib2sucnVcIixcbiAgICAgICAgXCJwZXJpc2NvcGUudHZcIixcbiAgICAgICAgXCJwc2NwLnR2XCIsXG4gICAgICAgIFwidC5jb1wiLFxuICAgICAgICBcImZiLndhdGNoXCIsXG4gICAgICAgIFwiZmJ3YXQuY2hcIixcbiAgICAgICAgXCJ2ay5jb21cIixcbiAgICAgICAgXCJ0cmlsbGVyLmNvXCJcbiAgICAgIF07XG4gICAgICB2YXIgc3VwcG9ydGVkID0gZmFsc2U7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1cHBvcnRlZF9zaXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAobGluay50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc3VwcG9ydGVkX3NpdGVzW2ldKSA+PSAwKSB7XG4gICAgICAgICAgc3VwcG9ydGVkID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfSAgICAgIFxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRlZCkge1xuICAgICAgICBSb3V0ZXIucHVzaCh7XG4gICAgICAgICAgcGF0aG5hbWU6IFwiL2Rvd25sb2FkXCIsXG4gICAgICAgICAgcXVlcnk6IHsgbGluayB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0RXJyb3IoJ0xpbmsgbm90IHN1cHBvcnRlZCB5ZXQuJyk7XG4gICAgICAgIHdpbmRvdy5fZ2FxLnB1c2goWydfdHJhY2tFdmVudCcsICdub3RTdXBwb3J0ZWQnLCBsaW5rXSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEVycm9yKCdMaW5rIGlzIHJlcXVpcmVkLicpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChcInR3dHRyXCIgaW4gd2luZG93KSB7XG4gICAgICB3aW5kb3cudHd0dHIud2lkZ2V0cy5sb2FkKCk7XG4gICAgfVxuXG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ob3N0LmluZGV4T2YoXCJsb2NhbGhvc3RcIikgPCAwICYmIHdpbmRvdy5sb2NhdGlvbi5ob3N0LmluZGV4T2YoXCIxMjcuMC4wLjFcIikgPCAwKSB7XG4gICAgICB3aW5kb3cuX2dhcSA9IHdpbmRvdy5fZ2FxIHx8IFtdO1xuICAgICAgd2luZG93Ll9nYXEucHVzaChbJ19zZXRBY2NvdW50JywgJ1VBLTE2MjkyMzY0Mi0xJ10pO1xuICAgICAgd2luZG93Ll9nYXEucHVzaChbJ190cmFja1BhZ2V2aWV3J10pO1xuXG4gICAgICB2YXIgYm91bmNlS2lsbGVyID0ge1xuICAgICAgICB0cmFja1Njcm9sbGluZzogdHJ1ZSxcbiAgICAgICAgc2Nyb2xsaW5nUGVyY2VudGFnZU51bWJlcjogMjUsXG4gICAgICAgIGxvZ0ludGVydmFsOiAxMCxcbiAgICAgICAgdHJhY2tFdmVudHM6IHRydWUsXG4gICAgICAgIHRyYWNrTWF4VGltZTogdHJ1ZSxcbiAgICAgICAgdHJhY2tNYXhUaW1lU2VjOiA5MDBcbiAgICAgIH07XG4gICAgICB3aW5kb3cuc2Nyb2xsVHJhY2tFbmQgPSBmYWxzZTtcbiAgICAgIHdpbmRvdy5TY3JvbGxNYXRyaXggPSBuZXcgQXJyYXkoKTtcblxuICAgICAgZnVuY3Rpb24gVHJhY2tpbmdMb2dUaW1lKGEpIHtcbiAgICAgICAgcmV0dXJuIGFbMF0gPT0gNTAgPyAocGFyc2VJbnQoYVsxXSkgKyAxKSArIFwiOjAwXCIgOiAoYVsxXSB8fCBcIjBcIikgKyBcIjpcIiArIChwYXJzZUludChhWzBdKSArIDEwKVxuICAgICAgfVxuXG4gICAgICBpZiAoYm91bmNlS2lsbGVyLnRyYWNrRXZlbnRzKSB7XG4gICAgICAgICAgZnVuY3Rpb24gc3RhcnRUaW1lVHJhY2tpbmcoYSkge1xuICAgICAgICAgICAgICB3aW5kb3cuaW50ZXJ2YWxPYmogPSB3aW5kb3cuc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICBhID0gVHJhY2tpbmdMb2dUaW1lKGEuc3BsaXQoXCI6XCIpLnJldmVyc2UoKSk7XG4gICAgICAgICAgICAgICAgICB3aW5kb3cuX2dhcS5wdXNoKFsnX3RyYWNrRXZlbnQnLCBcIlRpbWVcIiwgXCJMT0dcIiwgYV0pO1xuICAgICAgICAgICAgICB9LCBib3VuY2VLaWxsZXIubG9nSW50ZXJ2YWwgKiAxMDAwKVxuXG4gICAgICAgICAgICAgIGlmIChib3VuY2VLaWxsZXIudHJhY2tNYXhUaW1lKSB7XG4gICAgICAgICAgICAgICAgICB3aW5kb3cudHJhY2tNYXhUaW1lVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh3aW5kb3cuaW50ZXJ2YWxPYmopO1xuICAgICAgICAgICAgICAgICAgfSwgYm91bmNlS2lsbGVyLnRyYWNrTWF4VGltZVNlYyAqIDEwMDApXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgd2luZG93LmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCkgeyBcbiAgICAgICAgICAgICAgc3RhcnRUaW1lVHJhY2tpbmcoXCIwMFwiKTtcbiAgICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICAgIGlmIChib3VuY2VLaWxsZXIudHJhY2tTY3JvbGxpbmcpIHtcbiAgICAgICAgICAgIHdpbmRvdy5GcmVxdWVuY3kgPSBib3VuY2VLaWxsZXIuc2Nyb2xsaW5nUGVyY2VudGFnZU51bWJlcjtcbiAgICAgICAgICAgIHdpbmRvdy5SZXBlbnRhbmNlID0gMTAwIC8gYm91bmNlS2lsbGVyLnNjcm9sbGluZ1BlcmNlbnRhZ2VOdW1iZXI7XG4gICAgICAgICAgICB3aW5kb3cuU2Nyb2xsTWF0cml4ID0gbmV3IEFycmF5KCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpeCA9IDA7IGl4IDwgd2luZG93LlJlcGVudGFuY2U7IGl4KyspIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuU2Nyb2xsTWF0cml4W2l4XSA9IFt3aW5kb3cuRnJlcXVlbmN5LCBcImZhbHNlXCJdO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5GcmVxdWVuY3kgPSBib3VuY2VLaWxsZXIuc2Nyb2xsaW5nUGVyY2VudGFnZU51bWJlciArIHdpbmRvdy5GcmVxdWVuY3k7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIHNjcm9sbEZ1bmMgPSBmdW5jdGlvbigpe1xuICAgICAgICAgIGlmIChib3VuY2VLaWxsZXIudHJhY2tTY3JvbGxpbmcpIHtcbiAgICAgICAgICAgICAgaWYgKCF3aW5kb3cuc2Nyb2xsVHJhY2tFbmQpIHtcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5fZ2FxLnB1c2goWydfdHJhY2tFdmVudCcsIFwiU2Nyb2xsXCIsIFwiTE9HXCIsIFwic2Nyb2xsZWRcIl0pO1xuICAgICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRyYWNrRW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYm91bmNlS2lsbGVyLnRyYWNrU2Nyb2xsaW5nKSB7XG4gICAgICAgICAgICAgIHZhciBib2R5ID0gd2luZG93LmRvY3VtZW50LmJvZHksXG4gICAgICAgICAgICAgICAgICBodG1sID0gd2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuICAgICAgICAgICAgICB2YXIgZG9jdW1lbnRIZWlnaHQgPSBNYXRoLm1heCggYm9keS5zY3JvbGxIZWlnaHQsIGJvZHkub2Zmc2V0SGVpZ2h0LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWwuY2xpZW50SGVpZ2h0LCBodG1sLnNjcm9sbEhlaWdodCwgaHRtbC5vZmZzZXRIZWlnaHQgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBmb3IgKHZhciBpeiA9IDA7IGl6IDwgd2luZG93LlNjcm9sbE1hdHJpeC5sZW5ndGg7IGl6KyspIHtcbiAgICAgICAgICAgICAgICAgIGlmICgod2luZG93LnNjcm9sbFkgKyB3aW5kb3cuaW5uZXJIZWlnaHQgPj0gZG9jdW1lbnRIZWlnaHQgKiB3aW5kb3cuU2Nyb2xsTWF0cml4W2l6XVswXSAvIDEwMCkgJiYgKHdpbmRvdy5TY3JvbGxNYXRyaXhbaXpdWzFdID09IFwiZmFsc2VcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuU2Nyb2xsTWF0cml4W2l6XVsxXSA9IFwidHJ1ZVwiO1xuICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5fZ2FxLnB1c2goWydfdHJhY2tFdmVudCcsIFwiUGVyY2VudGFnZSBQYWdlIFNjcm9sbFwiLCBcIkxPR1wiLCB3aW5kb3cuU2Nyb2xsTWF0cml4W2l6XVswXSArIFwiJVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub25JbnRlcmFjdGlvbjogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICB9XSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbEZ1bmMsIHRydWUpO1xuXG4gICAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBnYSA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgZ2EudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgICAgICBnYS5hc3luYyA9IHRydWU7XG4gICAgICAgIGdhLnNyYyA9ICgnaHR0cHM6JyA9PSBkb2N1bWVudC5sb2NhdGlvbi5wcm90b2NvbCA/ICdodHRwczovL3NzbCcgOiAnaHR0cDovL3d3dycpICsgJy5nb29nbGUtYW5hbHl0aWNzLmNvbS9nYS5qcyc7XG4gICAgICAgIHZhciBzID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKVswXTtcbiAgICAgICAgcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShnYSwgcyk7XG4gICAgICB9KSgpO1xuICAgIH1cblxuICAgIGlmICh3aW5kb3cubG9jYXRpb24uaGFzaCAhPSBcIlwiKSB7XG4gICAgICB2YXIgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iod2luZG93LmxvY2F0aW9uLmhhc2grXCItc2VjdGlvblwiKTtcbiAgICAgIGlmIChlbGVtKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgICAgdG9wOiBlbGVtLm9mZnNldFRvcCxcbiAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgc2V0TGluayhcIlwiKTtcbiAgfSwgW10pXG4gIFxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZVwiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57dCgnaGVhZGxpbmUnKX0gLSBERExWaWQ8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXt0KCdtZXRhX2Rlc2NyaXB0aW9uJyl9IC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9XCJ0d2l0dGVyIHZpZGVvIGRvd25sb2FkZXIsZmFjZWJvb2sgdmlkZW8gZG93bmxvYWRlcix0aWt0b2sgdmlkZW8gZG93bmxvYWRlcixpbnN0YWdyYW0gdmlkZW8gZG93bmxvYWRlcix5b3V0dWJlIHZpZGVvIGRvd25sb2FkZXJcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpzaXRlXCIgY29udGVudD1cIkBkZGxfdmlkXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6dGl0bGVcIiBjb250ZW50PXsnRERMVmlkIC0gJyArIHQoJ2hlYWRsaW5lJyl9IC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCIgY29udGVudD17dCgnbWV0YV9kZXNjcmlwdGlvbicpfSAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjcmVhdG9yXCIgY29udGVudD1cIkBkZGxfdmlkXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6aW1hZ2VcIiBjb250ZW50PVwiaHR0cHM6Ly9kZGx2aWQuY29tL2Fzc2V0cy9pbWFnZXMvb2cucG5nPzJcIiAvPiBcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9eydERExWaWQgLSAnICsgdCgnaGVhZGxpbmUnKX0gLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3QoJ21ldGFfZGVzY3JpcHRpb24nKX0gLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9XCJodHRwczovL2RkbHZpZC5jb20vYXNzZXRzL2ltYWdlcy9vZy5wbmc/MlwiIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PVwiaHR0cHM6Ly9kZGx2aWQuY29tL1wiIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6c2l0ZV9uYW1lXCIgY29udGVudD1cIkRETFZpZFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImFsdGVybmF0ZVwiIGhyZWZMYW5nPVwiZW5cIiBocmVmPVwiaHR0cHM6Ly9kZGx2aWQuY29tL1wiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImFsdGVybmF0ZVwiIGhyZWZMYW5nPVwieC1kZWZhdWx0XCIgaHJlZj1cImh0dHBzOi8vZGRsdmlkLmNvbS9cIiAvPlxuICAgICAgICA8bGluayByZWw9XCJhbHRlcm5hdGVcIiBocmVmTGFuZz1cImZyXCIgaHJlZj1cImh0dHBzOi8vZGRsdmlkLmNvbS9mclwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImFsdGVybmF0ZVwiIGhyZWZMYW5nPVwicHRcIiBocmVmPVwiaHR0cHM6Ly9kZGx2aWQuY29tL3B0XCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiY2Fub25pY2FsXCIgaHJlZj1cImh0dHBzOi8vZGRsdmlkLmNvbS9cIiAvPlxuICAgICAgICA8c2NyaXB0IHR5cGU9XCJhcHBsaWNhdGlvbi9sZCtqc29uXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBgXG57XG4gIFwiQGNvbnRleHRcIjogXCJodHRwOi8vc2NoZW1hLm9yZy9cIixcbiAgXCJAdHlwZVwiOiBcIlNvZnR3YXJlQXBwbGljYXRpb25cIixcbiAgXCJhcHBsaWNhdGlvbkNhdGVnb3J5XCI6IFwiTXVsdGltZWRpYUFwcGxpY2F0aW9uXCIsXG4gIFwib3BlcmF0aW5nU3lzdGVtXCI6W1wiV2luZG93c1wiLFwibWFjT1NcIixcIkFuZHJvaWRcIixcImlPU1wiXSxcbiAgXCJzY3JlZW5zaG90XCI6IFwiaHR0cHM6Ly9kZGx2aWQuY29tL2Fzc2V0cy9pbWFnZXMvb2cucG5nPzJcIixcbiAgXCJhZ2dyZWdhdGVSYXRpbmdcIjoge1xuICAgIFwiQHR5cGVcIjogXCJBZ2dyZWdhdGVSYXRpbmdcIixcbiAgICBcInJhdGluZ0NvdW50XCI6IFwiNTUxMFwiLFxuICAgIFwicmV2aWV3Q291bnRcIjogXCI1NTEwXCIsXG4gICAgXCJiZXN0UmF0aW5nXCI6IFwiNVwiLFxuICAgIFwicmF0aW5nVmFsdWVcIjogXCI0LjhcIixcbiAgICBcIndvcnN0UmF0aW5nXCI6IFwiMVwiLFxuICAgIFwiYWx0ZXJuYXRlTmFtZVwiOiBcIkRETFZpZCBPbmxpbmUgVmlkZW8gRG93bmxvYWRlclwiLFxuICAgIFwibWFpbkVudGl0eU9mUGFnZVwiOiBcImh0dHBzOi8vZGRsdmlkLmNvbS9cIixcbiAgICBcIm5hbWVcIjogXCJERExWaWRcIlxuICB9LFxuICBcImFsdGVybmF0aXZlSGVhZGxpbmVcIjogXCJERExWaWRcIixcbiAgXCJjb3B5cmlnaHRZZWFyXCI6IFwiJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9XCIsXG4gIFwiaGVhZGxpbmVcIjogXCJERExWaWRcIixcbiAgXCJrZXl3b3Jkc1wiOiBcIkRETFZpZCwgb25saW5lIHZpZGVvIGRvd25sb2FkZXIsIHZpZGVvIGRvd25sb2FkZXJcIixcbiAgXCJvZmZlcnNcIjoge1xuICAgIFwiQHR5cGVcIjogXCJPZmZlclwiLFxuICAgIFwicHJpY2VcIjogXCIwLjBcIixcbiAgICBcInByaWNlQ3VycmVuY3lcIjogXCJVU0RcIixcbiAgICBcImFsdGVybmF0ZU5hbWVcIjogXCJERExWaWRcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiRERMVmlkIE9ubGluZSBWaWRlbyBEb3dubG9hZGVyXCIsXG4gICAgXCJtYWluRW50aXR5T2ZQYWdlXCI6IFwiaHR0cHM6Ly9kZGx2aWQuY29tL1wiLFxuICAgIFwibmFtZVwiOiBcIkRETFZpZFwiXG4gIH0sXG4gIFwiYWx0ZXJuYXRlTmFtZVwiOiBcIkRETFZpZFwiLFxuICBcIm1haW5FbnRpdHlPZlBhZ2VcIjogXCJodHRwczovL2RkbHZpZC5jb20vXCIsXG4gIFwibmFtZVwiOiBcIkRETFZpZFwiXG59XG4gICAgICAgIGB9fT48L3NjcmlwdD5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgaWQ9XCJjb250ZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uMVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkbGluZVwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtcImh0dHBzOi8vcGJzLnR3aW1nLmNvbS9wcm9maWxlX2Jhbm5lcnMvMTI0ODI3MzIwMDQwNjAyODI5MC8xNjkyODAxNTgyLzEwODB4MzYwXCJ9IGFsdD17XCJJbWFnZSBDcmFzaGVkXCJ9IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogJ2F1dG8nIH19IC8+XG4gICAgICAgICAgICAgICAgPGgxPnt0KCdoZWFkbGluZScpfTwvaDE+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjXCI+XG4gICAgICAgICAgICAgICAgICB7bG50b2JyKHQoJ3N1Yl9oZWFkbGluZScpKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8U3RpY2t5U2hhcmVCdXR0b25zXG4gICAgICAgICAgICAgICAgICBjb25maWc9e3tcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25tZW50OiAnbGVmdCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnc29jaWFsJyxcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZm9udF9zaXplOiAxNixcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxzOiAnY291bnRzJyxcbiAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2U6ICdlbicsXG4gICAgICAgICAgICAgICAgICAgIG1pbl9jb3VudDogMCxcbiAgICAgICAgICAgICAgICAgICAgbmV0d29ya3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAnd2hhdHNhcHAnLFxuICAgICAgICAgICAgICAgICAgICAgICdtZXNzZW5nZXInLFxuICAgICAgICAgICAgICAgICAgICAgICdyZWRkaXQnLFxuICAgICAgICAgICAgICAgICAgICAgICd0d2l0dGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAnZmFjZWJvb2snLFxuICAgICAgICAgICAgICAgICAgICAgICdsaW5rZWRpbidcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTIsXG4gICAgICAgICAgICAgICAgICAgIHJhZGl1czogNCxcbiAgICAgICAgICAgICAgICAgICAgc2hvd190b3RhbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgc2hvd19tb2JpbGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHNob3dfdG9nZ2xlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBzaXplOiA0OCxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAxNjAsXG4gICAgICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vZGRsdmlkLmNvbS8nLFxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eTogJzVmMGJlMmViN2RmNmRlMDAxMzMyMzViNSdcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIvZG93bmxvYWRcIiBtZXRob2Q9XCJnZXRcIiBvblN1Ym1pdD17c3VibWl0fT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwibGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJodHRwczovL1wiXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2xpbmt9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRMaW5rKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuPVwiaHR0cHM/Oi8vLitcIlxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17dCgnbGlua190b19kb3dubG9hZCcpfVxuICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsoZXJyb3IpID8gJ2hhcy1lcnJvcicgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvd25sb2FkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+e3QoJ2dldF90aGVfdmlkZW8nKX08L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHtlcnJvciA/IDxkaXYgY2xhc3NOYW1lPVwiZXJyb3JfbWVzc2FnZVwiIG9uQ2xpY2s9eygpID0+IHNldEVycm9yKG51bGwpfT57ZXJyb3J9PC9kaXY+IDogbnVsbH1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1cHBvcnRlZF9zaXRlc1wiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2l0ZSB0d2l0dGVyXCI+VHdpdHRlcjwvc3Bhbj57JyAnfVxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2l0ZSBmYWNlYm9va1wiPkZhY2Vib29rPC9zcGFuPnsnICd9XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaXRlIGluc3RhZ3JhbVwiPkluc3RhZ3JhbTwvc3Bhbj57JyAnfVxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2l0ZSB0aWt0b2tcIj5UaWtUb2s8L3NwYW4+eycgJ31cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNpdGUgeW91dHViZVwiPllvdXR1YmU8L3NwYW4+eycgJ31cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNpdGUgcmVkZGl0XCI+UmVkZGl0PC9zcGFuPnsnICd9XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaXRlIHBpbnRlcmVzdFwiPlBpbnRlcmVzdDwvc3Bhbj57JyAnfVxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2l0ZSBsaW5rZWRpblwiPkxpbmtlZEluPC9zcGFuPnsnICd9XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaXRlIHZpbWVvXCI+VmltZW88L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0X3N1cHBvcnRlZF9zaXRlc1wiPlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zdXBwb3J0ZWQtd2Vic2l0ZXNcIj48YT57dCgnbGlzdF9zdXBwb3J0ZWRfd2Vic2l0ZXMnKX08L2E+PC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwicHJvbW9cIiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxOHB4XCIsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIyMHB4IDBcIlxuICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9nby5ub3JkdnBuLm5ldC9hZmZfYz9vZmZlcl9pZD0xNSZhZmZfaWQ9ODc2NTgmc291cmNlPWRkbHZpZC5jb21cIiBzdHlsZT17e2NvbG9yOlwiI2Q3MzAzMFwifX0gdGFyZ2V0PVwiX2JsYW5rXCI+4pqh77iP8J+UkiBEb3dubG9hZCB3aXRoIExpZ2h0bmluZyBTcGVlZCBhbmQgVW5icmVha2FibGUgU2VjdXJpdHkhIEdldCA1OSUgb2ZmIE5vcmRWUE4gKyAzIGV4dHJhIG1vbnRocyEg8J+SqvCfjJA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbjVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nXCIgLz5cbiAgICAgICAgICAgICAgICA8aDI+e3QoJ2Jlc3RfZnJlZV9vbmxpbmVfdmlkZW9fZG93bmxvYWRlcicpfTxici8+e3QoJ3RydXN0ZWRfYnlfbWlsbGlvbnMnKX08L2gyPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAge2xudG9icih0KCdob21lX2Rlc2MnKSl9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbjYgc2VjdGlvbjZfMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGgyPnt0KCdkaXNjb3Zlcl9kZGx2aWQnKX08L2gyPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHM2XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24gdmlkZW9zXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+e3QoJ2Rvd25sb2FkX3ZpZGVvc19mcm9tX2ZhbW91c19zaXRlcycpfTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHM2XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24geW91dHViZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0KCdkb3dubG9hZF9jb252ZXJ0X3lvdXR1YmVfbXAzJyl9PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHM2XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24gdGlrdG9rXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+e3QoJ2Rvd25sb2FkX3Rpa3Rva193aXRob3V0X3dhdGVybWFyaycpfTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHM2XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24gc3Rvcmllc1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0KCdkb3dubG9hZF9mYWNlYm9va19pbnN0YWdyYW1fc3RvcmllcycpfTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3JlXCI+XG4gICAgICAgICAgICAgICAge3QoJ2FuZF9tYW55X21vcmVfdG9fY29tZScpfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlnXCI+e3QoJ3RoaXNfaXNfanVzdF90aGVfc3RhcnQnKX08L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbjYgc2VjdGlvbjZfMVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGgyPnt0KCdob3dfdG9fZG93bmxvYWRfYV92aWRlbycpfTwvaDI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbiBjb3B5XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8cD48c3Ryb25nPnt0KCdjb3B5X3ZpZGVvX3VybCcpfTwvc3Ryb25nPjwvcD5cbiAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNcbiAgICAgICAgICAgICAgICAgICAgICBpMThuS2V5PVwiY29weV92aWRlb191cmxfZGV0YWlsc1wiXG4gICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cz17eyBhOiA8YSAvPiB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHM0XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24gcGFzdGVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+e3QoJ3Bhc3RlX2xpbmsnKX08L3N0cm9uZz48L3A+XG4gICAgICAgICAgICAgICAgICA8cD57dCgncGFzdGVfbGlua19kZXRhaWxzJyl9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHM0XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24gZG93bmxvYWRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+e3QoJ2Rvd25sb2FkX3RoZV92aWRlbycpfTwvc3Ryb25nPjwvcD5cbiAgICAgICAgICAgICAgICAgIDxwPnt0KCdkb3dubG9hZF90aGVfdmlkZW9fZGV0YWlscycpfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uN1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGgyPnt0KCdkb3dubG9hZF92aWRlb3NfdXNpbmdfb3VyX2JvdHMnKX08L2gyPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHM2XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24gdHdpdHRlclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+e3QoJ3R3aXR0ZXJfYm90Jyl9PC9zdHJvbmc+PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNcbiAgICAgICAgICAgICAgICAgICAgICAgIGkxOG5LZXk9XCJ0d2l0dGVyX2JvdF9kZXRhaWxzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHM9e3sgZW06IDxlbSAvPiB9fVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY3RhXCI+PGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vZGRsX3ZpZDFcIiB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzc05hbWU9XCJidG5cIj57dCgnZm9sbG93X2RkbF92aWQnKX08L2E+PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHM2XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24gdGVsZWdyYW1cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICAgICA8cD48c3Ryb25nPnt0KCd0ZWxlZ3JhbV9ib3QnKX08L3N0cm9uZz48L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpMThuS2V5PVwidGVsZWdyYW1fYm90X2RldGFpbHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzPXt7IGVtOiA8ZW0gLz4gfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY3RhXCI+PGEgaHJlZj1cImh0dHBzOi8vdGVsZWdyYW0ubWUvZGRsdmlkX2JvdFwiIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzTmFtZT1cImJ0blwiPnt0KCdzZW5kX21lc3NhZ2VfdG9fZGRsdmlkX2JvdCcpfTwvYT48L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uOFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGFydFwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0blwiIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xpbmtcIikuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7IHRvcDogMCwgbGVmdDogMCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xuICAgICAgICAgICAgICAgIH19Pnt0KCdzdGFydF9kb3dubG9hZGluZycpfTwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgICAgICAgICAgIFxuICAgICAgPEZvb3RlciAvPlxuICAgICAgICBcbiAgICAgIDxBRDJIUyAvPlxuXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBodG1sLFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJQbGV4XCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90bywgT3h5Z2VuLFxuICAgICAgICAgICAgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsIHNhbnMtc2VyaWY7XG4gICAgICAgIH1cblxuICAgICAgICAqIHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG4gICAgICAgICo6Zm9jdXMge1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5Ib21lLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+ICh7XG4gIG5hbWVzcGFjZXNSZXF1aXJlZDogWydjb21tb24nXSxcbn0pXG5cbkhvbWUucHJvcFR5cGVzID0ge1xuICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oJ2NvbW1vbicpKEhvbWUpIl19 */\n/*@ sourceURL=D:\\\\Web Development\\\\ClientWork\\\\ddl_vid1\\\\pages\\\\index.js */"));
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
    href: "/videodownloader"
  }, __jsx("a", {
    onClick: () => setShowMobileMenu(false),
    title: t('video_downloader')
  }, t('video_downloader')))), __jsx("li", null, __jsx(_i18n__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    href: "/urlshortener"
  }, __jsx("a", {
    onClick: () => setShowMobileMenu(false),
    title: t('url_shortener')
  }, t('url_shortener')))))), theme === "light" ? __jsx("a", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaTE4bi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9wYXJ0cy9hZDJocy5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9wYXJ0cy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcGFydHMvaGVhZGVyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtaTE4bmV4dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWkxOG5leHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzaGFyZXRoaXMtcmVhY3Rqc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1qc3gvc3R5bGVcIiJdLCJuYW1lcyI6WyJOZXh0STE4TmV4dCIsInJlcXVpcmUiLCJkZWZhdWx0IiwibW9kdWxlIiwiZXhwb3J0cyIsInN0cmljdE1vZGUiLCJkZWZhdWx0TGFuZ3VhZ2UiLCJvdGhlckxhbmd1YWdlcyIsImxvY2FsZVN1YnBhdGhzIiwiZnIiLCJwdCIsImludGVycG9sYXRpb24iLCJlc2NhcGVWYWx1ZSIsIl9fanN4IiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwibG50b2JyIiwic3RyIiwic3BsaXQiLCJtYXAiLCJpdGVtIiwiaSIsImtleSIsIkhvbWUiLCJ0IiwibGluayIsInNldExpbmsiLCJ1c2VTdGF0ZSIsImVycm9yIiwic2V0RXJyb3IiLCJzdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzdXBwb3J0ZWRfc2l0ZXMiLCJzdXBwb3J0ZWQiLCJsZW5ndGgiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJSb3V0ZXIiLCJwdXNoIiwicGF0aG5hbWUiLCJxdWVyeSIsIndpbmRvdyIsIl9nYXEiLCJ1c2VFZmZlY3QiLCJ0d3R0ciIsIndpZGdldHMiLCJsb2FkIiwibG9jYXRpb24iLCJob3N0IiwiYm91bmNlS2lsbGVyIiwidHJhY2tTY3JvbGxpbmciLCJzY3JvbGxpbmdQZXJjZW50YWdlTnVtYmVyIiwibG9nSW50ZXJ2YWwiLCJ0cmFja0V2ZW50cyIsInRyYWNrTWF4VGltZSIsInRyYWNrTWF4VGltZVNlYyIsInNjcm9sbFRyYWNrRW5kIiwiU2Nyb2xsTWF0cml4IiwiQXJyYXkiLCJUcmFja2luZ0xvZ1RpbWUiLCJhIiwicGFyc2VJbnQiLCJzdGFydFRpbWVUcmFja2luZyIsImludGVydmFsT2JqIiwic2V0SW50ZXJ2YWwiLCJyZXZlcnNlIiwidHJhY2tNYXhUaW1lVGltZW91dCIsInNldFRpbWVvdXQiLCJjbGVhckludGVydmFsIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiRnJlcXVlbmN5IiwiUmVwZW50YW5jZSIsIml4Iiwic2Nyb2xsRnVuYyIsImJvZHkiLCJodG1sIiwiZG9jdW1lbnRFbGVtZW50IiwiZG9jdW1lbnRIZWlnaHQiLCJNYXRoIiwibWF4Iiwic2Nyb2xsSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiaXoiLCJzY3JvbGxZIiwiaW5uZXJIZWlnaHQiLCJub25JbnRlcmFjdGlvbiIsImdhIiwidHlwZSIsImFzeW5jIiwic3JjIiwicHJvdG9jb2wiLCJzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwiaGFzaCIsImVsZW0iLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsVG8iLCJ0b3AiLCJvZmZzZXRUb3AiLCJiZWhhdmlvciIsImNsYXNzTmFtZSIsIkhlYWQiLCJuYW1lIiwiY29udGVudCIsInByb3BlcnR5IiwicmVsIiwiaHJlZkxhbmciLCJocmVmIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJIZWFkZXIiLCJpZCIsImFsdCIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJTdGlja3lTaGFyZUJ1dHRvbnMiLCJjb25maWciLCJhbGlnbm1lbnQiLCJjb2xvciIsImVuYWJsZWQiLCJmb250X3NpemUiLCJsYWJlbHMiLCJsYW5ndWFnZSIsIm1pbl9jb3VudCIsIm5ldHdvcmtzIiwicGFkZGluZyIsInJhZGl1cyIsInNob3dfdG90YWwiLCJzaG93X21vYmlsZSIsInNob3dfdG9nZ2xlIiwic2l6ZSIsInVybCIsImFjdGlvbiIsIm1ldGhvZCIsIm9uU3VibWl0IiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicGF0dGVybiIsInJlcXVpcmVkIiwiYXV0b0NvbXBsZXRlIiwib25DbGljayIsIkxpbmsiLCJUcmFucyIsImkxOG5LZXkiLCJjb21wb25lbnRzIiwiZW0iLCJmb2N1cyIsImxlZnQiLCJGb290ZXIiLCJBRDJIUyIsIl9KU1hTdHlsZSIsImdldEluaXRpYWxQcm9wcyIsIm5hbWVzcGFjZXNSZXF1aXJlZCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwid2l0aFRyYW5zbGF0aW9uIiwiaGlkZUJhbm5lciIsInNldEhpZGVCYW5uZXIiLCJkZWZlcnJlZFByb21wdCIsInNob3dBZGRUb0hvbWVTY3JlZW4iLCJhMmhzQnRuIiwiY2xhc3NMaXN0IiwiYWRkIiwiYnRuIiwiYWRkVG9Ib21lU2NyZWVuIiwiZGlzcGxheSIsInByb21wdCIsInVzZXJDaG9pY2UiLCJ0aGVuIiwiY2hvaWNlUmVzdWx0Iiwib3V0Y29tZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJjb29raWVCYW5uZXJTaG93Iiwic2V0Q29va2llQmFubmVyU2hvdyIsImNoYW5nZUxhbmciLCJsYW5nIiwiaTE4biIsImNoYW5nZUxhbmd1YWdlIiwibGFuZ3MiLCJ0aXRsZSIsInNob3dNb2JpbGVNZW51Iiwic2V0U2hvd01vYmlsZU1lbnUiLCJ0aGVt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RWNDLDRIQUFlLENBQUMsUUFBUSxDQUFDLENBQUNsRCxNQUFNLENBQUMsRTs7Ozs7Ozs7Ozs7QUN2SGhELHlDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLDZDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBOZXh0STE4TmV4dCA9IHJlcXVpcmUoJ25leHQtaTE4bmV4dCcpLmRlZmF1bHRcblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgTmV4dEkxOE5leHQoe1xuICAgIHN0cmljdE1vZGU6IGZhbHNlLFxuICAgIGRlZmF1bHRMYW5ndWFnZTogJ2VuJyxcbiAgICBvdGhlckxhbmd1YWdlczogWydmcicsICdwdCddLFxuICAgIGxvY2FsZVN1YnBhdGhzOiB7XG4gICAgICAgIGZyOiAnZnInLFxuICAgICAgICBwdDogJ3B0J1xuICAgIH0sXG4gICAgaW50ZXJwb2xhdGlvbjoge1xuICAgICAgICBlc2NhcGVWYWx1ZTogZmFsc2VcbiAgICB9XG59KSIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgVHJhbnMgfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IFJvdXRlciwgd2l0aFRyYW5zbGF0aW9uLCBMaW5rIH0gZnJvbSAnLi4vaTE4bic7XG5pbXBvcnQge1N0aWNreVNoYXJlQnV0dG9uc30gZnJvbSAnc2hhcmV0aGlzLXJlYWN0anMnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vcGFydHMvaGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9wYXJ0cy9mb290ZXInO1xuaW1wb3J0IEFEMkhTIGZyb20gJy4vcGFydHMvYWQyaHMnO1xuLy8gaW1wb3J0IEJhbm5lciBmcm9tICcuLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9kZGx2aWQtbG9nby5wbmcnXG5jb25zdCBsbnRvYnIgPSAoc3RyKSA9PiB7XG4gIHJldHVybiBzdHIuc3BsaXQoXCJcXG5cIikubWFwKGZ1bmN0aW9uKGl0ZW0sIGkpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHNwYW4ga2V5PXtpfT57aXRlbX08YnIvPjwvc3Bhbj5cbiAgICApXG4gIH0pOyBcbn07XG5cbmNvbnN0IEhvbWUgPSAoeyB0IH0pID0+IHtcblxuICBjb25zdCBbbGluaywgc2V0TGlua10gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3Qgc3VibWl0ID0gKGUpID0+IHtcbiAgICBpZiAodHlwZW9mIGUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgc2V0RXJyb3IobnVsbCk7XG4gICAgaWYgKGxpbmsgIT09IFwiXCIpIHtcbiAgICAgIGNvbnN0IHN1cHBvcnRlZF9zaXRlcyA9IFtcbiAgICAgICAgXCJ5b3V0dWJlLmNvbVwiLFxuICAgICAgICBcInlvdXR1LmJlXCIsXG4gICAgICAgIFwidHdpdHRlci5jb21cIixcbiAgICAgICAgXCJsaW5rZWRpbi5jb21cIixcbiAgICAgICAgXCJmYWNlYm9vay5jb21cIixcbiAgICAgICAgXCJmYi5jb21cIixcbiAgICAgICAgXCJ0aWt0b2suY29tXCIsXG4gICAgICAgIFwidmltZW8uY29tXCIsXG4gICAgICAgIFwicG9ybmh1Yi5jb21cIixcbiAgICAgICAgXCJpbnN0YWdyYW0uY29tXCIsXG4gICAgICAgIFwicmVkZGl0LmNvbVwiLFxuICAgICAgICBcInBpbnRlcmVzdC5jb21cIixcbiAgICAgICAgXCJwaW4uaXRcIixcbiAgICAgICAgXCJvay5ydVwiLFxuICAgICAgICBcInBlcmlzY29wZS50dlwiLFxuICAgICAgICBcInBzY3AudHZcIixcbiAgICAgICAgXCJ0LmNvXCIsXG4gICAgICAgIFwiZmIud2F0Y2hcIixcbiAgICAgICAgXCJmYndhdC5jaFwiLFxuICAgICAgICBcInZrLmNvbVwiLFxuICAgICAgICBcInRyaWxsZXIuY29cIlxuICAgICAgXTtcbiAgICAgIHZhciBzdXBwb3J0ZWQgPSBmYWxzZTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3VwcG9ydGVkX3NpdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChsaW5rLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzdXBwb3J0ZWRfc2l0ZXNbaV0pID49IDApIHtcbiAgICAgICAgICBzdXBwb3J0ZWQgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9ICAgICAgXG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydGVkKSB7XG4gICAgICAgIFJvdXRlci5wdXNoKHtcbiAgICAgICAgICBwYXRobmFtZTogXCIvZG93bmxvYWRcIixcbiAgICAgICAgICBxdWVyeTogeyBsaW5rIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRFcnJvcignTGluayBub3Qgc3VwcG9ydGVkIHlldC4nKTtcbiAgICAgICAgd2luZG93Ll9nYXEucHVzaChbJ190cmFja0V2ZW50JywgJ25vdFN1cHBvcnRlZCcsIGxpbmtdKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RXJyb3IoJ0xpbmsgaXMgcmVxdWlyZWQuJyk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKFwidHd0dHJcIiBpbiB3aW5kb3cpIHtcbiAgICAgIHdpbmRvdy50d3R0ci53aWRnZXRzLmxvYWQoKTtcbiAgICB9XG5cbiAgICBpZiAod2luZG93LmxvY2F0aW9uLmhvc3QuaW5kZXhPZihcImxvY2FsaG9zdFwiKSA8IDAgJiYgd2luZG93LmxvY2F0aW9uLmhvc3QuaW5kZXhPZihcIjEyNy4wLjAuMVwiKSA8IDApIHtcbiAgICAgIHdpbmRvdy5fZ2FxID0gd2luZG93Ll9nYXEgfHwgW107XG4gICAgICB3aW5kb3cuX2dhcS5wdXNoKFsnX3NldEFjY291bnQnLCAnVUEtMTYyOTIzNjQyLTEnXSk7XG4gICAgICB3aW5kb3cuX2dhcS5wdXNoKFsnX3RyYWNrUGFnZXZpZXcnXSk7XG5cbiAgICAgIHZhciBib3VuY2VLaWxsZXIgPSB7XG4gICAgICAgIHRyYWNrU2Nyb2xsaW5nOiB0cnVlLFxuICAgICAgICBzY3JvbGxpbmdQZXJjZW50YWdlTnVtYmVyOiAyNSxcbiAgICAgICAgbG9nSW50ZXJ2YWw6IDEwLFxuICAgICAgICB0cmFja0V2ZW50czogdHJ1ZSxcbiAgICAgICAgdHJhY2tNYXhUaW1lOiB0cnVlLFxuICAgICAgICB0cmFja01heFRpbWVTZWM6IDkwMFxuICAgICAgfTtcbiAgICAgIHdpbmRvdy5zY3JvbGxUcmFja0VuZCA9IGZhbHNlO1xuICAgICAgd2luZG93LlNjcm9sbE1hdHJpeCA9IG5ldyBBcnJheSgpO1xuXG4gICAgICBmdW5jdGlvbiBUcmFja2luZ0xvZ1RpbWUoYSkge1xuICAgICAgICByZXR1cm4gYVswXSA9PSA1MCA/IChwYXJzZUludChhWzFdKSArIDEpICsgXCI6MDBcIiA6IChhWzFdIHx8IFwiMFwiKSArIFwiOlwiICsgKHBhcnNlSW50KGFbMF0pICsgMTApXG4gICAgICB9XG5cbiAgICAgIGlmIChib3VuY2VLaWxsZXIudHJhY2tFdmVudHMpIHtcbiAgICAgICAgICBmdW5jdGlvbiBzdGFydFRpbWVUcmFja2luZyhhKSB7XG4gICAgICAgICAgICAgIHdpbmRvdy5pbnRlcnZhbE9iaiA9IHdpbmRvdy5zZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgIGEgPSBUcmFja2luZ0xvZ1RpbWUoYS5zcGxpdChcIjpcIikucmV2ZXJzZSgpKTtcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5fZ2FxLnB1c2goWydfdHJhY2tFdmVudCcsIFwiVGltZVwiLCBcIkxPR1wiLCBhXSk7XG4gICAgICAgICAgICAgIH0sIGJvdW5jZUtpbGxlci5sb2dJbnRlcnZhbCAqIDEwMDApXG5cbiAgICAgICAgICAgICAgaWYgKGJvdW5jZUtpbGxlci50cmFja01heFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy50cmFja01heFRpbWVUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHdpbmRvdy5pbnRlcnZhbE9iaik7XG4gICAgICAgICAgICAgICAgICB9LCBib3VuY2VLaWxsZXIudHJhY2tNYXhUaW1lU2VjICogMTAwMClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB3aW5kb3cuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7IFxuICAgICAgICAgICAgICBzdGFydFRpbWVUcmFja2luZyhcIjAwXCIpO1xuICAgICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgICAgaWYgKGJvdW5jZUtpbGxlci50cmFja1Njcm9sbGluZykge1xuICAgICAgICAgICAgd2luZG93LkZyZXF1ZW5jeSA9IGJvdW5jZUtpbGxlci5zY3JvbGxpbmdQZXJjZW50YWdlTnVtYmVyO1xuICAgICAgICAgICAgd2luZG93LlJlcGVudGFuY2UgPSAxMDAgLyBib3VuY2VLaWxsZXIuc2Nyb2xsaW5nUGVyY2VudGFnZU51bWJlcjtcbiAgICAgICAgICAgIHdpbmRvdy5TY3JvbGxNYXRyaXggPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgICAgIGZvciAodmFyIGl4ID0gMDsgaXggPCB3aW5kb3cuUmVwZW50YW5jZTsgaXgrKykge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5TY3JvbGxNYXRyaXhbaXhdID0gW3dpbmRvdy5GcmVxdWVuY3ksIFwiZmFsc2VcIl07XG4gICAgICAgICAgICAgICAgd2luZG93LkZyZXF1ZW5jeSA9IGJvdW5jZUtpbGxlci5zY3JvbGxpbmdQZXJjZW50YWdlTnVtYmVyICsgd2luZG93LkZyZXF1ZW5jeTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgc2Nyb2xsRnVuYyA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgaWYgKGJvdW5jZUtpbGxlci50cmFja1Njcm9sbGluZykge1xuICAgICAgICAgICAgICBpZiAoIXdpbmRvdy5zY3JvbGxUcmFja0VuZCkge1xuICAgICAgICAgICAgICAgICAgd2luZG93Ll9nYXEucHVzaChbJ190cmFja0V2ZW50JywgXCJTY3JvbGxcIiwgXCJMT0dcIiwgXCJzY3JvbGxlZFwiXSk7XG4gICAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVHJhY2tFbmQgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChib3VuY2VLaWxsZXIudHJhY2tTY3JvbGxpbmcpIHtcbiAgICAgICAgICAgICAgdmFyIGJvZHkgPSB3aW5kb3cuZG9jdW1lbnQuYm9keSxcbiAgICAgICAgICAgICAgICAgIGh0bWwgPSB3aW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG4gICAgICAgICAgICAgIHZhciBkb2N1bWVudEhlaWdodCA9IE1hdGgubWF4KCBib2R5LnNjcm9sbEhlaWdodCwgYm9keS5vZmZzZXRIZWlnaHQsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbC5jbGllbnRIZWlnaHQsIGh0bWwuc2Nyb2xsSGVpZ2h0LCBodG1sLm9mZnNldEhlaWdodCApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIGZvciAodmFyIGl6ID0gMDsgaXogPCB3aW5kb3cuU2Nyb2xsTWF0cml4Lmxlbmd0aDsgaXorKykge1xuICAgICAgICAgICAgICAgICAgaWYgKCh3aW5kb3cuc2Nyb2xsWSArIHdpbmRvdy5pbm5lckhlaWdodCA+PSBkb2N1bWVudEhlaWdodCAqIHdpbmRvdy5TY3JvbGxNYXRyaXhbaXpdWzBdIC8gMTAwKSAmJiAod2luZG93LlNjcm9sbE1hdHJpeFtpel1bMV0gPT0gXCJmYWxzZVwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5TY3JvbGxNYXRyaXhbaXpdWzFdID0gXCJ0cnVlXCI7XG4gICAgICAgICAgICAgICAgICAgICAgd2luZG93Ll9nYXEucHVzaChbJ190cmFja0V2ZW50JywgXCJQZXJjZW50YWdlIFBhZ2UgU2Nyb2xsXCIsIFwiTE9HXCIsIHdpbmRvdy5TY3JvbGxNYXRyaXhbaXpdWzBdICsgXCIlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vbkludGVyYWN0aW9uOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgIH1dKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsRnVuYywgdHJ1ZSk7XG5cbiAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGdhID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICBnYS50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gICAgICAgIGdhLmFzeW5jID0gdHJ1ZTtcbiAgICAgICAgZ2Euc3JjID0gKCdodHRwczonID09IGRvY3VtZW50LmxvY2F0aW9uLnByb3RvY29sID8gJ2h0dHBzOi8vc3NsJyA6ICdodHRwOi8vd3d3JykgKyAnLmdvb2dsZS1hbmFseXRpY3MuY29tL2dhLmpzJztcbiAgICAgICAgdmFyIHMgPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdO1xuICAgICAgICBzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGdhLCBzKTtcbiAgICAgIH0pKCk7XG4gICAgfVxuXG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoICE9IFwiXCIpIHtcbiAgICAgIHZhciBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih3aW5kb3cubG9jYXRpb24uaGFzaCtcIi1zZWN0aW9uXCIpO1xuICAgICAgaWYgKGVsZW0pIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgICAgICB0b3A6IGVsZW0ub2Zmc2V0VG9wLFxuICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRMaW5rKFwiXCIpO1xuICB9LCBbXSlcbiAgXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJob21lXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPnt0KCdoZWFkbGluZScpfSAtIERETFZpZDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3QoJ21ldGFfZGVzY3JpcHRpb24nKX0gLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD1cInR3aXR0ZXIgdmlkZW8gZG93bmxvYWRlcixmYWNlYm9vayB2aWRlbyBkb3dubG9hZGVyLHRpa3RvayB2aWRlbyBkb3dubG9hZGVyLGluc3RhZ3JhbSB2aWRlbyBkb3dubG9hZGVyLHlvdXR1YmUgdmlkZW8gZG93bmxvYWRlclwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeVwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnNpdGVcIiBjb250ZW50PVwiQGRkbF92aWRcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjp0aXRsZVwiIGNvbnRlbnQ9eydERExWaWQgLSAnICsgdCgnaGVhZGxpbmUnKX0gLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6ZGVzY3JpcHRpb25cIiBjb250ZW50PXt0KCdtZXRhX2Rlc2NyaXB0aW9uJyl9IC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNyZWF0b3JcIiBjb250ZW50PVwiQGRkbF92aWRcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjppbWFnZVwiIGNvbnRlbnQ9XCJodHRwczovL2RkbHZpZC5jb20vYXNzZXRzL2ltYWdlcy9vZy5wbmc/MlwiIC8+IFxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17J0RETFZpZCAtICcgKyB0KCdoZWFkbGluZScpfSAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17dCgnbWV0YV9kZXNjcmlwdGlvbicpfSAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD1cImh0dHBzOi8vZGRsdmlkLmNvbS9hc3NldHMvaW1hZ2VzL29nLnBuZz8yXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9XCJodHRwczovL2RkbHZpZC5jb20vXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIiBjb250ZW50PVwiRERMVmlkXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiYWx0ZXJuYXRlXCIgaHJlZkxhbmc9XCJlblwiIGhyZWY9XCJodHRwczovL2RkbHZpZC5jb20vXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiYWx0ZXJuYXRlXCIgaHJlZkxhbmc9XCJ4LWRlZmF1bHRcIiBocmVmPVwiaHR0cHM6Ly9kZGx2aWQuY29tL1wiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImFsdGVybmF0ZVwiIGhyZWZMYW5nPVwiZnJcIiBocmVmPVwiaHR0cHM6Ly9kZGx2aWQuY29tL2ZyXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiYWx0ZXJuYXRlXCIgaHJlZkxhbmc9XCJwdFwiIGhyZWY9XCJodHRwczovL2RkbHZpZC5jb20vcHRcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJjYW5vbmljYWxcIiBocmVmPVwiaHR0cHM6Ly9kZGx2aWQuY29tL1wiIC8+XG4gICAgICAgIDxzY3JpcHQgdHlwZT1cImFwcGxpY2F0aW9uL2xkK2pzb25cIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGBcbntcbiAgXCJAY29udGV4dFwiOiBcImh0dHA6Ly9zY2hlbWEub3JnL1wiLFxuICBcIkB0eXBlXCI6IFwiU29mdHdhcmVBcHBsaWNhdGlvblwiLFxuICBcImFwcGxpY2F0aW9uQ2F0ZWdvcnlcIjogXCJNdWx0aW1lZGlhQXBwbGljYXRpb25cIixcbiAgXCJvcGVyYXRpbmdTeXN0ZW1cIjpbXCJXaW5kb3dzXCIsXCJtYWNPU1wiLFwiQW5kcm9pZFwiLFwiaU9TXCJdLFxuICBcInNjcmVlbnNob3RcIjogXCJodHRwczovL2RkbHZpZC5jb20vYXNzZXRzL2ltYWdlcy9vZy5wbmc/MlwiLFxuICBcImFnZ3JlZ2F0ZVJhdGluZ1wiOiB7XG4gICAgXCJAdHlwZVwiOiBcIkFnZ3JlZ2F0ZVJhdGluZ1wiLFxuICAgIFwicmF0aW5nQ291bnRcIjogXCI1NTEwXCIsXG4gICAgXCJyZXZpZXdDb3VudFwiOiBcIjU1MTBcIixcbiAgICBcImJlc3RSYXRpbmdcIjogXCI1XCIsXG4gICAgXCJyYXRpbmdWYWx1ZVwiOiBcIjQuOFwiLFxuICAgIFwid29yc3RSYXRpbmdcIjogXCIxXCIsXG4gICAgXCJhbHRlcm5hdGVOYW1lXCI6IFwiRERMVmlkIE9ubGluZSBWaWRlbyBEb3dubG9hZGVyXCIsXG4gICAgXCJtYWluRW50aXR5T2ZQYWdlXCI6IFwiaHR0cHM6Ly9kZGx2aWQuY29tL1wiLFxuICAgIFwibmFtZVwiOiBcIkRETFZpZFwiXG4gIH0sXG4gIFwiYWx0ZXJuYXRpdmVIZWFkbGluZVwiOiBcIkRETFZpZFwiLFxuICBcImNvcHlyaWdodFllYXJcIjogXCIke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX1cIixcbiAgXCJoZWFkbGluZVwiOiBcIkRETFZpZFwiLFxuICBcImtleXdvcmRzXCI6IFwiRERMVmlkLCBvbmxpbmUgdmlkZW8gZG93bmxvYWRlciwgdmlkZW8gZG93bmxvYWRlclwiLFxuICBcIm9mZmVyc1wiOiB7XG4gICAgXCJAdHlwZVwiOiBcIk9mZmVyXCIsXG4gICAgXCJwcmljZVwiOiBcIjAuMFwiLFxuICAgIFwicHJpY2VDdXJyZW5jeVwiOiBcIlVTRFwiLFxuICAgIFwiYWx0ZXJuYXRlTmFtZVwiOiBcIkRETFZpZFwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJERExWaWQgT25saW5lIFZpZGVvIERvd25sb2FkZXJcIixcbiAgICBcIm1haW5FbnRpdHlPZlBhZ2VcIjogXCJodHRwczovL2RkbHZpZC5jb20vXCIsXG4gICAgXCJuYW1lXCI6IFwiRERMVmlkXCJcbiAgfSxcbiAgXCJhbHRlcm5hdGVOYW1lXCI6IFwiRERMVmlkXCIsXG4gIFwibWFpbkVudGl0eU9mUGFnZVwiOiBcImh0dHBzOi8vZGRsdmlkLmNvbS9cIixcbiAgXCJuYW1lXCI6IFwiRERMVmlkXCJcbn1cbiAgICAgICAgYH19Pjwvc2NyaXB0PlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbj5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICBcbiAgICAgICAgPGRpdiBpZD1cImNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24xXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRsaW5lXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e1wiaHR0cHM6Ly9wYnMudHdpbWcuY29tL3Byb2ZpbGVfYmFubmVycy8xMjQ4MjczMjAwNDA2MDI4MjkwLzE2OTI4MDE1ODIvMTA4MHgzNjBcIn0gYWx0PXtcIkltYWdlIENyYXNoZWRcIn0gc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnYXV0bycgfX0gLz5cbiAgICAgICAgICAgICAgICA8aDE+e3QoJ2hlYWRsaW5lJyl9PC9oMT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NcIj5cbiAgICAgICAgICAgICAgICAgIHtsbnRvYnIodCgnc3ViX2hlYWRsaW5lJykpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxTdGlja3lTaGFyZUJ1dHRvbnNcbiAgICAgICAgICAgICAgICAgIGNvbmZpZz17e1xuICAgICAgICAgICAgICAgICAgICBhbGlnbm1lbnQ6ICdsZWZ0JyxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdzb2NpYWwnLFxuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBmb250X3NpemU6IDE2LFxuICAgICAgICAgICAgICAgICAgICBsYWJlbHM6ICdjb3VudHMnLFxuICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZTogJ2VuJyxcbiAgICAgICAgICAgICAgICAgICAgbWluX2NvdW50OiAwLFxuICAgICAgICAgICAgICAgICAgICBuZXR3b3JrczogW1xuICAgICAgICAgICAgICAgICAgICAgICd3aGF0c2FwcCcsXG4gICAgICAgICAgICAgICAgICAgICAgJ21lc3NlbmdlcicsXG4gICAgICAgICAgICAgICAgICAgICAgJ3JlZGRpdCcsXG4gICAgICAgICAgICAgICAgICAgICAgJ3R3aXR0ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICdmYWNlYm9vaycsXG4gICAgICAgICAgICAgICAgICAgICAgJ2xpbmtlZGluJ1xuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMixcbiAgICAgICAgICAgICAgICAgICAgcmFkaXVzOiA0LFxuICAgICAgICAgICAgICAgICAgICBzaG93X3RvdGFsOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBzaG93X21vYmlsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgc2hvd190b2dnbGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IDQ4LFxuICAgICAgICAgICAgICAgICAgICB0b3A6IDE2MCxcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9kZGx2aWQuY29tLycsXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5OiAnNWYwYmUyZWI3ZGY2ZGUwMDEzMzIzNWI1J1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIi9kb3dubG9hZFwiIG1ldGhvZD1cImdldFwiIG9uU3VibWl0PXtzdWJtaXR9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJsaW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImh0dHBzOi8vXCJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bGlua31cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldExpbmsoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm49XCJodHRwcz86Ly8uK1wiXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXt0KCdsaW5rX3RvX2Rvd25sb2FkJyl9XG4gICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyhlcnJvcikgPyAnaGFzLWVycm9yJyA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG93bmxvYWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj57dCgnZ2V0X3RoZV92aWRlbycpfTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge2Vycm9yID8gPGRpdiBjbGFzc05hbWU9XCJlcnJvcl9tZXNzYWdlXCIgb25DbGljaz17KCkgPT4gc2V0RXJyb3IobnVsbCl9PntlcnJvcn08L2Rpdj4gOiBudWxsfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VwcG9ydGVkX3NpdGVzXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaXRlIHR3aXR0ZXJcIj5Ud2l0dGVyPC9zcGFuPnsnICd9XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaXRlIGZhY2Vib29rXCI+RmFjZWJvb2s8L3NwYW4+eycgJ31cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNpdGUgaW5zdGFncmFtXCI+SW5zdGFncmFtPC9zcGFuPnsnICd9XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaXRlIHRpa3Rva1wiPlRpa1Rvazwvc3Bhbj57JyAnfVxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2l0ZSB5b3V0dWJlXCI+WW91dHViZTwvc3Bhbj57JyAnfVxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2l0ZSByZWRkaXRcIj5SZWRkaXQ8L3NwYW4+eycgJ31cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNpdGUgcGludGVyZXN0XCI+UGludGVyZXN0PC9zcGFuPnsnICd9XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaXRlIGxpbmtlZGluXCI+TGlua2VkSW48L3NwYW4+eycgJ31cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNpdGUgdmltZW9cIj5WaW1lbzwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3Rfc3VwcG9ydGVkX3NpdGVzXCI+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3N1cHBvcnRlZC13ZWJzaXRlc1wiPjxhPnt0KCdsaXN0X3N1cHBvcnRlZF93ZWJzaXRlcycpfTwvYT48L0xpbms+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJwcm9tb1wiIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE4cHhcIixcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjIwcHggMFwiXG4gICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dvLm5vcmR2cG4ubmV0L2FmZl9jP29mZmVyX2lkPTE1JmFmZl9pZD04NzY1OCZzb3VyY2U9ZGRsdmlkLmNvbVwiIHN0eWxlPXt7Y29sb3I6XCIjZDczMDMwXCJ9fSB0YXJnZXQ9XCJfYmxhbmtcIj7imqHvuI/wn5SSIERvd25sb2FkIHdpdGggTGlnaHRuaW5nIFNwZWVkIGFuZCBVbmJyZWFrYWJsZSBTZWN1cml0eSEgR2V0IDU5JSBvZmYgTm9yZFZQTiArIDMgZXh0cmEgbW9udGhzISDwn5Kq8J+MkDwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uNVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdcIiAvPlxuICAgICAgICAgICAgICAgIDxoMj57dCgnYmVzdF9mcmVlX29ubGluZV92aWRlb19kb3dubG9hZGVyJyl9PGJyLz57dCgndHJ1c3RlZF9ieV9taWxsaW9ucycpfTwvaDI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICB7bG50b2JyKHQoJ2hvbWVfZGVzYycpKX1cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uNiBzZWN0aW9uNl8wXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8aDI+e3QoJ2Rpc2NvdmVyX2RkbHZpZCcpfTwvaDI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczZcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbiB2aWRlb3NcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj57dCgnZG93bmxvYWRfdmlkZW9zX2Zyb21fZmFtb3VzX3NpdGVzJyl9PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczZcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbiB5b3V0dWJlXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+e3QoJ2Rvd25sb2FkX2NvbnZlcnRfeW91dHViZV9tcDMnKX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczZcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbiB0aWt0b2tcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj57dCgnZG93bmxvYWRfdGlrdG9rX3dpdGhvdXRfd2F0ZXJtYXJrJyl9PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczZcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbiBzdG9yaWVzXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+e3QoJ2Rvd25sb2FkX2ZhY2Vib29rX2luc3RhZ3JhbV9zdG9yaWVzJyl9PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vcmVcIj5cbiAgICAgICAgICAgICAgICB7dCgnYW5kX21hbnlfbW9yZV90b19jb21lJyl9XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaWdcIj57dCgndGhpc19pc19qdXN0X3RoZV9zdGFydCcpfTwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uNiBzZWN0aW9uNl8xXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8aDI+e3QoJ2hvd190b19kb3dubG9hZF9hX3ZpZGVvJyl9PC9oMj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzNFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uIGNvcHlcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+e3QoJ2NvcHlfdmlkZW9fdXJsJyl9PC9zdHJvbmc+PC9wPlxuICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc1xuICAgICAgICAgICAgICAgICAgICAgIGkxOG5LZXk9XCJjb3B5X3ZpZGVvX3VybF9kZXRhaWxzXCJcbiAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzPXt7IGE6IDxhIC8+IH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbiBwYXN0ZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHA+PHN0cm9uZz57dCgncGFzdGVfbGluaycpfTwvc3Ryb25nPjwvcD5cbiAgICAgICAgICAgICAgICAgIDxwPnt0KCdwYXN0ZV9saW5rX2RldGFpbHMnKX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbiBkb3dubG9hZFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHA+PHN0cm9uZz57dCgnZG93bmxvYWRfdGhlX3ZpZGVvJyl9PC9zdHJvbmc+PC9wPlxuICAgICAgICAgICAgICAgICAgPHA+e3QoJ2Rvd25sb2FkX3RoZV92aWRlb19kZXRhaWxzJyl9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb243XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8aDI+e3QoJ2Rvd25sb2FkX3ZpZGVvc191c2luZ19vdXJfYm90cycpfTwvaDI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczZcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbiB0d2l0dGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHA+PHN0cm9uZz57dCgndHdpdHRlcl9ib3QnKX08L3N0cm9uZz48L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc1xuICAgICAgICAgICAgICAgICAgICAgICAgaTE4bktleT1cInR3aXR0ZXJfYm90X2RldGFpbHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cz17eyBlbTogPGVtIC8+IH19XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjdGFcIj48YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9kZGxfdmlkMVwiIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzTmFtZT1cImJ0blwiPnt0KCdmb2xsb3dfZGRsX3ZpZCcpfTwvYT48L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczZcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbiB0ZWxlZ3JhbVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+e3QoJ3RlbGVncmFtX2JvdCcpfTwvc3Ryb25nPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgPFRyYW5zXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGkxOG5LZXk9XCJ0ZWxlZ3JhbV9ib3RfZGV0YWlsc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHM9e3sgZW06IDxlbSAvPiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjdGFcIj48YSBocmVmPVwiaHR0cHM6Ly90ZWxlZ3JhbS5tZS9kZGx2aWRfYm90XCIgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3NOYW1lPVwiYnRuXCI+e3QoJ3NlbmRfbWVzc2FnZV90b19kZGx2aWRfYm90Jyl9PC9hPjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb244XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuXCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgd2luZG93LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGlua1wiKS5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKHsgdG9wOiAwLCBsZWZ0OiAwLCBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XG4gICAgICAgICAgICAgICAgfX0+e3QoJ3N0YXJ0X2Rvd25sb2FkaW5nJyl9PC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICAgICAgICAgICAgXG4gICAgICA8Rm9vdGVyIC8+XG4gICAgICAgIFxuICAgICAgPEFEMkhTIC8+XG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGh0bWwsXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlBsZXhcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLCBPeHlnZW4sXG4gICAgICAgICAgICBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSwgc2Fucy1zZXJpZjtcbiAgICAgICAgfVxuXG4gICAgICAgICoge1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIH1cbiAgICAgICAgKjpmb2N1cyB7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbkhvbWUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4gKHtcbiAgbmFtZXNwYWNlc1JlcXVpcmVkOiBbJ2NvbW1vbiddLFxufSlcblxuSG9tZS5wcm9wVHlwZXMgPSB7XG4gIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbignY29tbW9uJykoSG9tZSkiLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgQUQySFMgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBbaGlkZUJhbm5lciwgc2V0SGlkZUJhbm5lcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgXG4gICAgdmFyIGRlZmVycmVkUHJvbXB0O1xuXG4gICAgY29uc3Qgc2hvd0FkZFRvSG9tZVNjcmVlbiA9ICgpID0+IHtcbiAgICAgICAgdmFyIGEyaHNCdG4gPSB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZDJocy1iYW5uZXJcIik7XG4gICAgICAgIGlmIChhMmhzQnRuKSB7XG4gICAgICAgICAgICBhMmhzQnRuLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xuICAgICAgICAgICAgdmFyIGJ0biA9IGEyaHNCdG4ucXVlcnlTZWxlY3RvcihcImJ1dHRvblwiKTtcbiAgICAgICAgICAgIGlmIChidG4pIGFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRUb0hvbWVTY3JlZW4pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGFkZFRvSG9tZVNjcmVlbiA9ICgpID0+IHtcbiAgICAgICAgdmFyIGEyaHNCdG4gPSB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZDJocy1iYW5uZXJcIik7XG4gICAgICAgIGEyaHNCdG4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgZGVmZXJyZWRQcm9tcHQucHJvbXB0KCk7XG4gICAgICAgIGRlZmVycmVkUHJvbXB0LnVzZXJDaG9pY2UudGhlbihmdW5jdGlvbihjaG9pY2VSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChjaG9pY2VSZXN1bHQub3V0Y29tZSA9PT0gJ2FjY2VwdGVkJykge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5fZ2FxLnB1c2goWydfdHJhY2tFdmVudCcsICdhZGRlZFRvSG9tZVNjcmVlbicsICd0cnVlJ10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVmZXJyZWRQcm9tcHQgPSBudWxsO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ2hpZGVBRDJIUycgaW4gd2luZG93LmxvY2FsU3RvcmFnZSkge1xuICAgICAgICAgICAgc2V0SGlkZUJhbm5lcih0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuaW5uZXJXaWR0aCA8PSAxMDUwKSB7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JlaW5zdGFsbHByb21wdCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGRlZmVycmVkUHJvbXB0ID0gZTtcbiAgICAgICAgICAgICAgICBzaG93QWRkVG9Ib21lU2NyZWVuKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtdKVxuXG4gICAgaWYgKCFoaWRlQmFubmVyKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkMmhzLXByb21wdCBhbmltYXRlZCBmYWRlSW5SaWdodFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24+SW5zdGFsbCBERExWaWQgV2ViIEFwcDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImNsb3NlXCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2hpZGVBRDJIUycsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBzZXRIaWRlQmFubmVyKHRydWUpO1xuICAgICAgICAgICAgICAgIH19Png8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBRDJIU1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgaTE4biwgTGluaywgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vaTE4bic7XG5cbmNvbnN0IEZvb3RlciA9ICh7IHQgfSkgPT4ge1xuXG4gICAgY29uc3QgW2Nvb2tpZUJhbm5lclNob3csIHNldENvb2tpZUJhbm5lclNob3ddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ2hpZGVDb29raWVCYW5uZXInIGluIHdpbmRvdy5sb2NhbFN0b3JhZ2UpIHtcbiAgICAgICAgICAgIHNldENvb2tpZUJhbm5lclNob3coZmFsc2UpO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3QgaGlkZUJhbm5lciA9ICgpID0+IHtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdoaWRlQ29va2llQmFubmVyJywgdHJ1ZSk7XG4gICAgICAgIHNldENvb2tpZUJhbm5lclNob3coZmFsc2UpO1xuICAgIH1cblxuICAgIGNvbnN0IGNoYW5nZUxhbmcgPSAoZSwgbGFuZykgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGkxOG4uY2hhbmdlTGFuZ3VhZ2UobGFuZyk7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7IHRvcDogMCwgbGVmdDogMCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBsYW5ncyA9IHtcbiAgICAgICAgJ2VuJzogJ0VuZ2xpc2gnLFxuICAgICAgICAnZnInOiAnRnJhbsOnYWlzJyxcbiAgICAgICAgJ3B0JzogJ1BvcnR1Z3XDqnMgQnJhc2lsZWlybydcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBpZD1cImZvb3RlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvcHlcIj5cbiAgICAgICAgICAgICAgICAgICAgQ29weXJpZ2h0ICZjb3B5OyBERExWaWQge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0uIHt0KCdhbGxfcmlnaHRzX3Jlc2VydmVkJyl9LlxuICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJpdmFjeS1wb2xpY3lcIj48YSB0aXRsZT17dCgncHJpdmFjeV9wb2xpY3knKSArICcgLSBERExWaWQnfT57dCgncHJpdmFjeV9wb2xpY3knKX08L2E+PC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzd2l0Y2hfbGFuZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2kxOG4ubGFuZ3VhZ2UgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFuZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1wiaWNvbiBcIiArIGkxOG4ubGFuZ3VhZ2V9Pjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhbmdzW2kxOG4ubGFuZ3VhZ2VdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3B1cF9sYW5nc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCIgdGl0bGU9XCJERExWaWQgLSBPbmxpbmUgVmlkZW8gRG93bmxvYWRlclwiIGNsYXNzTmFtZT1cImxhbmdcIiBvbkNsaWNrPXsoZSkgPT4gY2hhbmdlTGFuZyhlLCBcImVuXCIpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBlblwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRW5nbGlzaFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2ZyXCIgdGl0bGU9XCJERExWaWQgLSBUw6lsw6ljaGFyZ2V1ciBkZSB2aWTDqW9zIGVuIGxpZ25lXCIgY2xhc3NOYW1lPVwibGFuZ1wiIG9uQ2xpY2s9eyhlKSA9PiBjaGFuZ2VMYW5nKGUsIFwiZnJcIil9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGZyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGcmFuw6dhaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9wdFwiIHRpdGxlPVwiRERMVmlkIC0gRG93bmxvYWQgZGUgVsOtZGVvcyBPbmxpbmVcIiBjbGFzc05hbWU9XCJsYW5nXCIgb25DbGljaz17KGUpID0+IGNoYW5nZUxhbmcoZSwgXCJwdFwiKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gcHRcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBvcnR1Z3XDqnMgQnJhc2lsZWlyb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge2Nvb2tpZUJhbm5lclNob3cgPyAoXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImNvb2tpZWJhbm5lclwiIGNsYXNzTmFtZT1cImFuaW1hdGVkIGZhZGVJblVwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dCgnY29va2llc19ub3RpY2UnKX0gPExpbmsgaHJlZj1cIi9wcml2YWN5LXBvbGljeVwiPjxhIHRpdGxlPXt0KCdwcml2YWN5X3BvbGljeScpICsgJyAtIERETFZpZCd9Pnt0KCdwcml2YWN5X3BvbGljeScpfTwvYT48L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiIG9uQ2xpY2s9eygpID0+IGhpZGVCYW5uZXIoKX0+e3QoJ2lfdW5kZXJzdGFuZCcpfTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbkZvb3Rlci5wcm9wVHlwZXMgPSB7XG4gICAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKCdmb290ZXInKShGb290ZXIpIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgaTE4biwgTGluaywgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vaTE4bic7XG5cbmNvbnN0IEhlYWRlciA9ICh7wqB0IH0pID0+IHtcbiAgICBjb25zdCBbc2hvd01vYmlsZU1lbnUsIHNldFNob3dNb2JpbGVNZW51XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IHVzZVN0YXRlKFwibGlnaHRcIik7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgaWYgKFwidGhlbWVcIiBpbiB3aW5kb3cubG9jYWxTdG9yYWdlKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJodG1sXCIpLmNsYXNzTGlzdC5hZGQod2luZG93LmxvY2FsU3RvcmFnZS50aGVtZSk7XG4gICAgICAgICAgICAgICAgc2V0VGhlbWUod2luZG93LmxvY2FsU3RvcmFnZS50aGVtZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYSAmJiB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpLm1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJodG1sXCIpLmNsYXNzTGlzdC5hZGQoXCJkYXJrXCIpO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaGVtZShcImRhcmtcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3QgdXBkYXRlVGhlbWUgPSAodGhlbWUpID0+IHtcbiAgICAgICAgc2V0VGhlbWUodGhlbWUpO1xuICAgICAgICB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImh0bWxcIikuY2xhc3NMaXN0LnJlbW92ZShcImxpZ2h0XCIpO1xuICAgICAgICB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImh0bWxcIikuY2xhc3NMaXN0LnJlbW92ZShcImRhcmtcIik7XG4gICAgICAgIHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaHRtbFwiKS5jbGFzc0xpc3QuYWRkKHRoZW1lKTtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgdGhlbWUpO1xuICAgIH07XG5cbiAgICBjb25zdCBsYW5ncyA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdFbmdsaXNoJyxcbiAgICAgICAgICAgIHZhbHVlOiAnZW4nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnRnJhbsOnYWlzJyxcbiAgICAgICAgICAgIHZhbHVlOiAnZnInXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnUG9ydHVndcOqcyBCcmFzaWxlaXJvJyxcbiAgICAgICAgICAgIHZhbHVlOiAncHQnXG4gICAgICAgIH1cbiAgICBdO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBpZD1cImhlYWRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibG9nb1wiPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibG9nb1wiIHRpdGxlPXt0KCdoZWFkbGluZScpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBERExWaWRcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIm5hdlwiIGNsYXNzTmFtZT17KHNob3dNb2JpbGVNZW51KSA/ICdzaG93LW1lbnUnIDogbnVsbH0+XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGlkPVwibGFuZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpMThuLmxhbmd1YWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpMThuLmNoYW5nZUxhbmd1YWdlKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2hvd01vYmlsZU1lbnUoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17dCgnc2l0ZV9sYW5ndWFnZScpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYW5ncy5tYXAoKGxhbmcpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxvcHRpb24gdmFsdWU9e2xhbmcudmFsdWV9IGtleT17bGFuZy52YWx1ZX0+e2xhbmcudGl0bGV9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48YSBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9iaWxlTWVudShmYWxzZSl9IHRpdGxlPXt0KCdob21lJykgKyAnIC0gRERMVmlkJ30+e3QoJ2hvbWUnKX08L2E+PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zdXBwb3J0ZWQtd2Vic2l0ZXNcIj48YSBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9iaWxlTWVudShmYWxzZSl9IHRpdGxlPXt0KCdzdXBwb3J0ZWRfd2Vic2l0ZXMnKSArICcgLSBERExWaWQnfT57dCgnc3VwcG9ydGVkX3dlYnNpdGVzJyl9PC9hPjwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+PGEgb25DbGljaz17KCkgPT4gc2V0U2hvd01vYmlsZU1lbnUoZmFsc2UpfSB0aXRsZT17dCgnYWJvdXRfdXMnKSArICcgLSBERExWaWQnfT57dCgnYWJvdXRfdXMnKX08L2E+PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIj48YSBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9iaWxlTWVudShmYWxzZSl9IHRpdGxlPXt0KCdjb250YWN0X3VzJyl9Pnt0KCdjb250YWN0X3VzJyl9PC9hPjwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi92aWRlb2Rvd25sb2FkZXJcIj48YSBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9iaWxlTWVudShmYWxzZSl9IHRpdGxlPXt0KCd2aWRlb19kb3dubG9hZGVyJyl9Pnt0KCd2aWRlb19kb3dubG9hZGVyJyl9PC9hPjwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91cmxzaG9ydGVuZXJcIj48YSBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9iaWxlTWVudShmYWxzZSl9IHRpdGxlPXt0KCd1cmxfc2hvcnRlbmVyJyl9Pnt0KCd1cmxfc2hvcnRlbmVyJyl9PC9hPjwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3RlbGVncmFtLm1lL2RkbHZpZF9ib3RcIiB0aXRsZT1cIkRETFZpZCBUZWxlZ3JhbSBCb3RcIiB0YXJnZXQ9XCJfYmxhbmtcIj5UZWxlZ3JhbTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+ICovfVxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHt0aGVtZSA9PT0gXCJsaWdodFwiID8gKFxuICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiB1cGRhdGVUaGVtZShcImRhcmtcIil9IGNsYXNzTmFtZT1cInRoZW1lIGRhcmtcIj48aT48L2k+IDxzcGFuPnt0KCdkYXJrX21vZGUnKX08L3NwYW4+PC9hPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IHVwZGF0ZVRoZW1lKFwibGlnaHRcIil9IGNsYXNzTmFtZT1cInRoZW1lIGxpZ2h0XCI+PGk+PC9pPiA8c3Bhbj57dCgnbGlnaHRfbW9kZScpfTwvc3Bhbj48L2E+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90ZWxlZ3JhbS5tZS9kZGx2aWRfYm90XCIgaWQ9XCJ0ZWxlZ3JhbUJvdFwiIHRhcmdldD1cIl9ibGFua1wiPkRETFZpZCBUZWxlZ3JhbSBCb3Q8L2E+XG5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtb2JpbGVNZW51QnV0dG9uXCIgb25DbGljaz17KCkgPT4gc2V0U2hvd01vYmlsZU1lbnUoIXNob3dNb2JpbGVNZW51KX0+PC9zcGFuPlxuICAgICAgICAgICAgICAgIHtzaG93TW9iaWxlTWVudSA/IDxkaXYgY2xhc3NOYW1lPVwibW9iaWxlTWVudU92ZXJsYXlcIiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9iaWxlTWVudShmYWxzZSl9IC8+IDogbnVsbH1cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuSGVhZGVyLnByb3BUeXBlcyA9IHtcbiAgICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oJ2hlYWRlcicpKEhlYWRlcikiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWkxOG5leHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaTE4bmV4dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzaGFyZXRoaXMtcmVhY3Rqc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3N0eWxlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=