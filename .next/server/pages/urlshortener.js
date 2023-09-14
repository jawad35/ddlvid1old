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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/urlshortener.js");
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

/***/ "./pages/urlshortener.js":
/*!*******************************!*\
  !*** ./pages/urlshortener.js ***!
  \*******************************/
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
const URLShortener = ({
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
  }, "html,body{padding:0;margin:0;font-family:\"Plex\",-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen, Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;}*{box-sizing:border-box;}*:focus{outline:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxDbGllbnRzIFBhbmVsXFxXZWIgRGV2ZWxvcG1lbnRcXGRkbHZpZDFvbGRcXHBhZ2VzXFx1cmxzaG9ydGVuZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeWJ5QixBQUlxQixBQU9ZLEFBR1QsVUFUSixHQVVYLE1BUndFLEdBS3hFLHlJQUpBIiwiZmlsZSI6IkQ6XFxDbGllbnRzIFBhbmVsXFxXZWIgRGV2ZWxvcG1lbnRcXGRkbHZpZDFvbGRcXHBhZ2VzXFx1cmxzaG9ydGVuZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IFRyYW5zIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XHJcbmltcG9ydCB7IFJvdXRlciwgd2l0aFRyYW5zbGF0aW9uLCBMaW5rIH0gZnJvbSAnLi4vaTE4bic7XHJcbmltcG9ydCB7U3RpY2t5U2hhcmVCdXR0b25zfSBmcm9tICdzaGFyZXRoaXMtcmVhY3Rqcyc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9wYXJ0cy9oZWFkZXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vcGFydHMvZm9vdGVyJztcclxuaW1wb3J0IEFEMkhTIGZyb20gJy4vcGFydHMvYWQyaHMnO1xyXG4vLyBpbXBvcnQgQmFubmVyIGZyb20gJy4uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2RkbHZpZC1sb2dvLnBuZydcclxuY29uc3QgbG50b2JyID0gKHN0cikgPT4ge1xyXG4gIHJldHVybiBzdHIuc3BsaXQoXCJcXG5cIikubWFwKGZ1bmN0aW9uKGl0ZW0sIGkpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxzcGFuIGtleT17aX0+e2l0ZW19PGJyLz48L3NwYW4+XHJcbiAgICApXHJcbiAgfSk7IFxyXG59O1xyXG5cclxuY29uc3QgVVJMU2hvcnRlbmVyID0gKHsgdCB9KSA9PiB7XHJcblxyXG4gIGNvbnN0IFtsaW5rLCBzZXRMaW5rXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBzdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiBlICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuICAgIHNldEVycm9yKG51bGwpO1xyXG4gICAgaWYgKGxpbmsgIT09IFwiXCIpIHtcclxuICAgICAgY29uc3Qgc3VwcG9ydGVkX3NpdGVzID0gW1xyXG4gICAgICAgIFwieW91dHViZS5jb21cIixcclxuICAgICAgICBcInlvdXR1LmJlXCIsXHJcbiAgICAgICAgXCJ0d2l0dGVyLmNvbVwiLFxyXG4gICAgICAgIFwibGlua2VkaW4uY29tXCIsXHJcbiAgICAgICAgXCJmYWNlYm9vay5jb21cIixcclxuICAgICAgICBcImZiLmNvbVwiLFxyXG4gICAgICAgIFwidGlrdG9rLmNvbVwiLFxyXG4gICAgICAgIFwidmltZW8uY29tXCIsXHJcbiAgICAgICAgXCJwb3JuaHViLmNvbVwiLFxyXG4gICAgICAgIFwiaW5zdGFncmFtLmNvbVwiLFxyXG4gICAgICAgIFwicmVkZGl0LmNvbVwiLFxyXG4gICAgICAgIFwicGludGVyZXN0LmNvbVwiLFxyXG4gICAgICAgIFwicGluLml0XCIsXHJcbiAgICAgICAgXCJvay5ydVwiLFxyXG4gICAgICAgIFwicGVyaXNjb3BlLnR2XCIsXHJcbiAgICAgICAgXCJwc2NwLnR2XCIsXHJcbiAgICAgICAgXCJ0LmNvXCIsXHJcbiAgICAgICAgXCJmYi53YXRjaFwiLFxyXG4gICAgICAgIFwiZmJ3YXQuY2hcIixcclxuICAgICAgICBcInZrLmNvbVwiLFxyXG4gICAgICAgIFwidHJpbGxlci5jb1wiXHJcbiAgICAgIF07XHJcbiAgICAgIHZhciBzdXBwb3J0ZWQgPSBmYWxzZTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdXBwb3J0ZWRfc2l0ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAobGluay50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc3VwcG9ydGVkX3NpdGVzW2ldKSA+PSAwKSB7XHJcbiAgICAgICAgICBzdXBwb3J0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfSAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIGlmIChzdXBwb3J0ZWQpIHtcclxuICAgICAgICBSb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICBwYXRobmFtZTogXCIvZG93bmxvYWRcIixcclxuICAgICAgICAgIHF1ZXJ5OiB7IGxpbmsgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldEVycm9yKCdMaW5rIG5vdCBzdXBwb3J0ZWQgeWV0LicpO1xyXG4gICAgICAgIHdpbmRvdy5fZ2FxLnB1c2goWydfdHJhY2tFdmVudCcsICdub3RTdXBwb3J0ZWQnLCBsaW5rXSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldEVycm9yKCdMaW5rIGlzIHJlcXVpcmVkLicpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChcInR3dHRyXCIgaW4gd2luZG93KSB7XHJcbiAgICAgIHdpbmRvdy50d3R0ci53aWRnZXRzLmxvYWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLmhvc3QuaW5kZXhPZihcImxvY2FsaG9zdFwiKSA8IDAgJiYgd2luZG93LmxvY2F0aW9uLmhvc3QuaW5kZXhPZihcIjEyNy4wLjAuMVwiKSA8IDApIHtcclxuICAgICAgd2luZG93Ll9nYXEgPSB3aW5kb3cuX2dhcSB8fCBbXTtcclxuICAgICAgd2luZG93Ll9nYXEucHVzaChbJ19zZXRBY2NvdW50JywgJ1VBLTE2MjkyMzY0Mi0xJ10pO1xyXG4gICAgICB3aW5kb3cuX2dhcS5wdXNoKFsnX3RyYWNrUGFnZXZpZXcnXSk7XHJcblxyXG4gICAgICB2YXIgYm91bmNlS2lsbGVyID0ge1xyXG4gICAgICAgIHRyYWNrU2Nyb2xsaW5nOiB0cnVlLFxyXG4gICAgICAgIHNjcm9sbGluZ1BlcmNlbnRhZ2VOdW1iZXI6IDI1LFxyXG4gICAgICAgIGxvZ0ludGVydmFsOiAxMCxcclxuICAgICAgICB0cmFja0V2ZW50czogdHJ1ZSxcclxuICAgICAgICB0cmFja01heFRpbWU6IHRydWUsXHJcbiAgICAgICAgdHJhY2tNYXhUaW1lU2VjOiA5MDBcclxuICAgICAgfTtcclxuICAgICAgd2luZG93LnNjcm9sbFRyYWNrRW5kID0gZmFsc2U7XHJcbiAgICAgIHdpbmRvdy5TY3JvbGxNYXRyaXggPSBuZXcgQXJyYXkoKTtcclxuXHJcbiAgICAgIGZ1bmN0aW9uIFRyYWNraW5nTG9nVGltZShhKSB7XHJcbiAgICAgICAgcmV0dXJuIGFbMF0gPT0gNTAgPyAocGFyc2VJbnQoYVsxXSkgKyAxKSArIFwiOjAwXCIgOiAoYVsxXSB8fCBcIjBcIikgKyBcIjpcIiArIChwYXJzZUludChhWzBdKSArIDEwKVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoYm91bmNlS2lsbGVyLnRyYWNrRXZlbnRzKSB7XHJcbiAgICAgICAgICBmdW5jdGlvbiBzdGFydFRpbWVUcmFja2luZyhhKSB7XHJcbiAgICAgICAgICAgICAgd2luZG93LmludGVydmFsT2JqID0gd2luZG93LnNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICBhID0gVHJhY2tpbmdMb2dUaW1lKGEuc3BsaXQoXCI6XCIpLnJldmVyc2UoKSk7XHJcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5fZ2FxLnB1c2goWydfdHJhY2tFdmVudCcsIFwiVGltZVwiLCBcIkxPR1wiLCBhXSk7XHJcbiAgICAgICAgICAgICAgfSwgYm91bmNlS2lsbGVyLmxvZ0ludGVydmFsICogMTAwMClcclxuXHJcbiAgICAgICAgICAgICAgaWYgKGJvdW5jZUtpbGxlci50cmFja01heFRpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgd2luZG93LnRyYWNrTWF4VGltZVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh3aW5kb3cuaW50ZXJ2YWxPYmopO1xyXG4gICAgICAgICAgICAgICAgICB9LCBib3VuY2VLaWxsZXIudHJhY2tNYXhUaW1lU2VjICogMTAwMClcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB3aW5kb3cuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7IFxyXG4gICAgICAgICAgICAgIHN0YXJ0VGltZVRyYWNraW5nKFwiMDBcIik7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICB9XHJcblxyXG4gICAgICAgIGlmIChib3VuY2VLaWxsZXIudHJhY2tTY3JvbGxpbmcpIHtcclxuICAgICAgICAgICAgd2luZG93LkZyZXF1ZW5jeSA9IGJvdW5jZUtpbGxlci5zY3JvbGxpbmdQZXJjZW50YWdlTnVtYmVyO1xyXG4gICAgICAgICAgICB3aW5kb3cuUmVwZW50YW5jZSA9IDEwMCAvIGJvdW5jZUtpbGxlci5zY3JvbGxpbmdQZXJjZW50YWdlTnVtYmVyO1xyXG4gICAgICAgICAgICB3aW5kb3cuU2Nyb2xsTWF0cml4ID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGl4ID0gMDsgaXggPCB3aW5kb3cuUmVwZW50YW5jZTsgaXgrKykge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LlNjcm9sbE1hdHJpeFtpeF0gPSBbd2luZG93LkZyZXF1ZW5jeSwgXCJmYWxzZVwiXTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5GcmVxdWVuY3kgPSBib3VuY2VLaWxsZXIuc2Nyb2xsaW5nUGVyY2VudGFnZU51bWJlciArIHdpbmRvdy5GcmVxdWVuY3k7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgc2Nyb2xsRnVuYyA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICBpZiAoYm91bmNlS2lsbGVyLnRyYWNrU2Nyb2xsaW5nKSB7XHJcbiAgICAgICAgICAgICAgaWYgKCF3aW5kb3cuc2Nyb2xsVHJhY2tFbmQpIHtcclxuICAgICAgICAgICAgICAgICAgd2luZG93Ll9nYXEucHVzaChbJ190cmFja0V2ZW50JywgXCJTY3JvbGxcIiwgXCJMT0dcIiwgXCJzY3JvbGxlZFwiXSk7XHJcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUcmFja0VuZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGJvdW5jZUtpbGxlci50cmFja1Njcm9sbGluZykge1xyXG4gICAgICAgICAgICAgIHZhciBib2R5ID0gd2luZG93LmRvY3VtZW50LmJvZHksXHJcbiAgICAgICAgICAgICAgICAgIGh0bWwgPSB3aW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xyXG5cclxuICAgICAgICAgICAgICB2YXIgZG9jdW1lbnRIZWlnaHQgPSBNYXRoLm1heCggYm9keS5zY3JvbGxIZWlnaHQsIGJvZHkub2Zmc2V0SGVpZ2h0LCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbC5jbGllbnRIZWlnaHQsIGh0bWwuc2Nyb2xsSGVpZ2h0LCBodG1sLm9mZnNldEhlaWdodCApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBmb3IgKHZhciBpeiA9IDA7IGl6IDwgd2luZG93LlNjcm9sbE1hdHJpeC5sZW5ndGg7IGl6KyspIHtcclxuICAgICAgICAgICAgICAgICAgaWYgKCh3aW5kb3cuc2Nyb2xsWSArIHdpbmRvdy5pbm5lckhlaWdodCA+PSBkb2N1bWVudEhlaWdodCAqIHdpbmRvdy5TY3JvbGxNYXRyaXhbaXpdWzBdIC8gMTAwKSAmJiAod2luZG93LlNjcm9sbE1hdHJpeFtpel1bMV0gPT0gXCJmYWxzZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2luZG93LlNjcm9sbE1hdHJpeFtpel1bMV0gPSBcInRydWVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5fZ2FxLnB1c2goWydfdHJhY2tFdmVudCcsIFwiUGVyY2VudGFnZSBQYWdlIFNjcm9sbFwiLCBcIkxPR1wiLCB3aW5kb3cuU2Nyb2xsTWF0cml4W2l6XVswXSArIFwiJVwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vbkludGVyYWN0aW9uOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgfV0pXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxGdW5jLCB0cnVlKTtcclxuXHJcbiAgICAgIChmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgZ2EgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICAgICAgZ2EudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xyXG4gICAgICAgIGdhLmFzeW5jID0gdHJ1ZTtcclxuICAgICAgICBnYS5zcmMgPSAoJ2h0dHBzOicgPT0gZG9jdW1lbnQubG9jYXRpb24ucHJvdG9jb2wgPyAnaHR0cHM6Ly9zc2wnIDogJ2h0dHA6Ly93d3cnKSArICcuZ29vZ2xlLWFuYWx5dGljcy5jb20vZ2EuanMnO1xyXG4gICAgICAgIHZhciBzID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKVswXTtcclxuICAgICAgICBzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGdhLCBzKTtcclxuICAgICAgfSkoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLmhhc2ggIT0gXCJcIikge1xyXG4gICAgICB2YXIgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iod2luZG93LmxvY2F0aW9uLmhhc2grXCItc2VjdGlvblwiKTtcclxuICAgICAgaWYgKGVsZW0pIHtcclxuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xyXG4gICAgICAgICAgdG9wOiBlbGVtLm9mZnNldFRvcCxcclxuICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TGluayhcIlwiKTtcclxuICB9LCBbXSlcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJob21lXCI+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT57dCgnaGVhZGxpbmUnKX0gLSBERExWaWQ8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3QoJ21ldGFfZGVzY3JpcHRpb24nKX0gLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwia2V5d29yZHNcIiBjb250ZW50PVwidHdpdHRlciB2aWRlbyBkb3dubG9hZGVyLGZhY2Vib29rIHZpZGVvIGRvd25sb2FkZXIsdGlrdG9rIHZpZGVvIGRvd25sb2FkZXIsaW5zdGFncmFtIHZpZGVvIGRvd25sb2FkZXIseW91dHViZSB2aWRlbyBkb3dubG9hZGVyXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnNpdGVcIiBjb250ZW50PVwiQGRkbF92aWRcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnRpdGxlXCIgY29udGVudD17J0RETFZpZCAtICcgKyB0KCdoZWFkbGluZScpfSAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCIgY29udGVudD17dCgnbWV0YV9kZXNjcmlwdGlvbicpfSAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNyZWF0b3JcIiBjb250ZW50PVwiQGRkbF92aWRcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmltYWdlXCIgY29udGVudD1cImh0dHBzOi8vZGRsdmlkLmNvbS9hc3NldHMvaW1hZ2VzL29nLnBuZz8yXCIgLz4gXHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9eydERExWaWQgLSAnICsgdCgnaGVhZGxpbmUnKX0gLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17dCgnbWV0YV9kZXNjcmlwdGlvbicpfSAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PVwiaHR0cHM6Ly9kZGx2aWQuY29tL2Fzc2V0cy9pbWFnZXMvb2cucG5nPzJcIiAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9XCJodHRwczovL2RkbHZpZC5jb20vXCIgLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9XCJERExWaWRcIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImFsdGVybmF0ZVwiIGhyZWZMYW5nPVwiZW5cIiBocmVmPVwiaHR0cHM6Ly9kZGx2aWQuY29tL1wiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiYWx0ZXJuYXRlXCIgaHJlZkxhbmc9XCJ4LWRlZmF1bHRcIiBocmVmPVwiaHR0cHM6Ly9kZGx2aWQuY29tL1wiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiYWx0ZXJuYXRlXCIgaHJlZkxhbmc9XCJmclwiIGhyZWY9XCJodHRwczovL2RkbHZpZC5jb20vZnJcIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImFsdGVybmF0ZVwiIGhyZWZMYW5nPVwicHRcIiBocmVmPVwiaHR0cHM6Ly9kZGx2aWQuY29tL3B0XCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJjYW5vbmljYWxcIiBocmVmPVwiaHR0cHM6Ly9kZGx2aWQuY29tL1wiIC8+XHJcbiAgICAgICAgPHNjcmlwdCB0eXBlPVwiYXBwbGljYXRpb24vbGQranNvblwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogYFxyXG57XHJcbiAgXCJAY29udGV4dFwiOiBcImh0dHA6Ly9zY2hlbWEub3JnL1wiLFxyXG4gIFwiQHR5cGVcIjogXCJTb2Z0d2FyZUFwcGxpY2F0aW9uXCIsXHJcbiAgXCJhcHBsaWNhdGlvbkNhdGVnb3J5XCI6IFwiTXVsdGltZWRpYUFwcGxpY2F0aW9uXCIsXHJcbiAgXCJvcGVyYXRpbmdTeXN0ZW1cIjpbXCJXaW5kb3dzXCIsXCJtYWNPU1wiLFwiQW5kcm9pZFwiLFwiaU9TXCJdLFxyXG4gIFwic2NyZWVuc2hvdFwiOiBcImh0dHBzOi8vZGRsdmlkLmNvbS9hc3NldHMvaW1hZ2VzL29nLnBuZz8yXCIsXHJcbiAgXCJhZ2dyZWdhdGVSYXRpbmdcIjoge1xyXG4gICAgXCJAdHlwZVwiOiBcIkFnZ3JlZ2F0ZVJhdGluZ1wiLFxyXG4gICAgXCJyYXRpbmdDb3VudFwiOiBcIjU1MTBcIixcclxuICAgIFwicmV2aWV3Q291bnRcIjogXCI1NTEwXCIsXHJcbiAgICBcImJlc3RSYXRpbmdcIjogXCI1XCIsXHJcbiAgICBcInJhdGluZ1ZhbHVlXCI6IFwiNC44XCIsXHJcbiAgICBcIndvcnN0UmF0aW5nXCI6IFwiMVwiLFxyXG4gICAgXCJhbHRlcm5hdGVOYW1lXCI6IFwiRERMVmlkIE9ubGluZSBWaWRlbyBEb3dubG9hZGVyXCIsXHJcbiAgICBcIm1haW5FbnRpdHlPZlBhZ2VcIjogXCJodHRwczovL2RkbHZpZC5jb20vXCIsXHJcbiAgICBcIm5hbWVcIjogXCJERExWaWRcIlxyXG4gIH0sXHJcbiAgXCJhbHRlcm5hdGl2ZUhlYWRsaW5lXCI6IFwiRERMVmlkXCIsXHJcbiAgXCJjb3B5cmlnaHRZZWFyXCI6IFwiJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9XCIsXHJcbiAgXCJoZWFkbGluZVwiOiBcIkRETFZpZFwiLFxyXG4gIFwia2V5d29yZHNcIjogXCJERExWaWQsIG9ubGluZSB2aWRlbyBkb3dubG9hZGVyLCB2aWRlbyBkb3dubG9hZGVyXCIsXHJcbiAgXCJvZmZlcnNcIjoge1xyXG4gICAgXCJAdHlwZVwiOiBcIk9mZmVyXCIsXHJcbiAgICBcInByaWNlXCI6IFwiMC4wXCIsXHJcbiAgICBcInByaWNlQ3VycmVuY3lcIjogXCJVU0RcIixcclxuICAgIFwiYWx0ZXJuYXRlTmFtZVwiOiBcIkRETFZpZFwiLFxyXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkRETFZpZCBPbmxpbmUgVmlkZW8gRG93bmxvYWRlclwiLFxyXG4gICAgXCJtYWluRW50aXR5T2ZQYWdlXCI6IFwiaHR0cHM6Ly9kZGx2aWQuY29tL1wiLFxyXG4gICAgXCJuYW1lXCI6IFwiRERMVmlkXCJcclxuICB9LFxyXG4gIFwiYWx0ZXJuYXRlTmFtZVwiOiBcIkRETFZpZFwiLFxyXG4gIFwibWFpbkVudGl0eU9mUGFnZVwiOiBcImh0dHBzOi8vZGRsdmlkLmNvbS9cIixcclxuICBcIm5hbWVcIjogXCJERExWaWRcIlxyXG59XHJcbiAgICAgICAgYH19Pjwvc2NyaXB0PlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8bWFpbj5cclxuICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBpZD1cImNvbnRlbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbjFcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRsaW5lXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0nYmFubmVyX2ltYWdlJyBzcmM9e1wiaHR0cHM6Ly9wYnMudHdpbWcuY29tL3Byb2ZpbGVfYmFubmVycy8xMjQ4MjczMjAwNDA2MDI4MjkwLzE2OTI4MDE1ODIvMTA4MHgzNjBcIn0gYWx0PXtcIkltYWdlIENyYXNoZWRcIn0gc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnYXV0bycgfX0gLz5cclxuICAgICAgICAgICAgICAgIDxoMT57dCgnaGVhZGxpbmUnKX08L2gxPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtsbnRvYnIodCgnc3ViX2hlYWRsaW5lJykpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8U3RpY2t5U2hhcmVCdXR0b25zXHJcbiAgICAgICAgICAgICAgICAgIGNvbmZpZz17e1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWdubWVudDogJ2xlZnQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnc29jaWFsJyxcclxuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRfc2l6ZTogMTYsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxzOiAnY291bnRzJyxcclxuICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZTogJ2VuJyxcclxuICAgICAgICAgICAgICAgICAgICBtaW5fY291bnQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgbmV0d29ya3M6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICd3aGF0c2FwcCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAnbWVzc2VuZ2VyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICdyZWRkaXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgJ3R3aXR0ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgJ2ZhY2Vib29rJyxcclxuICAgICAgICAgICAgICAgICAgICAgICdsaW5rZWRpbidcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEyLFxyXG4gICAgICAgICAgICAgICAgICAgIHJhZGl1czogNCxcclxuICAgICAgICAgICAgICAgICAgICBzaG93X3RvdGFsOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNob3dfbW9iaWxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNob3dfdG9nZ2xlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IDQ4LFxyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMTYwLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vZGRsdmlkLmNvbS8nLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5OiAnNWYwYmUyZWI3ZGY2ZGUwMDEzMzIzNWI1J1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIi9kb3dubG9hZFwiIG1ldGhvZD1cImdldFwiIG9uU3VibWl0PXtzdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cImxpbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJodHRwczovL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bGlua31cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TGluayhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuPVwiaHR0cHM/Oi8vLitcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e3QoJ2xpbmtfdG9fZG93bmxvYWQnKX1cclxuICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyhlcnJvcikgPyAnaGFzLWVycm9yJyA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvd25sb2FkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj57dCgnZ2V0X3RoZV92aWRlbycpfTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtlcnJvciA/IDxkaXYgY2xhc3NOYW1lPVwiZXJyb3JfbWVzc2FnZVwiIG9uQ2xpY2s9eygpID0+IHNldEVycm9yKG51bGwpfT57ZXJyb3J9PC9kaXY+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1cHBvcnRlZF9zaXRlc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaXRlIHR3aXR0ZXJcIj5Ud2l0dGVyPC9zcGFuPnsnICd9XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNpdGUgZmFjZWJvb2tcIj5GYWNlYm9vazwvc3Bhbj57JyAnfVxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaXRlIGluc3RhZ3JhbVwiPkluc3RhZ3JhbTwvc3Bhbj57JyAnfVxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaXRlIHRpa3Rva1wiPlRpa1Rvazwvc3Bhbj57JyAnfVxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaXRlIHlvdXR1YmVcIj5Zb3V0dWJlPC9zcGFuPnsnICd9XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNpdGUgcmVkZGl0XCI+UmVkZGl0PC9zcGFuPnsnICd9XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNpdGUgcGludGVyZXN0XCI+UGludGVyZXN0PC9zcGFuPnsnICd9XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNpdGUgbGlua2VkaW5cIj5MaW5rZWRJbjwvc3Bhbj57JyAnfVxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaXRlIHZpbWVvXCI+VmltZW88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdF9zdXBwb3J0ZWRfc2l0ZXNcIj5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zdXBwb3J0ZWQtd2Vic2l0ZXNcIj48YT57dCgnbGlzdF9zdXBwb3J0ZWRfd2Vic2l0ZXMnKX08L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwicHJvbW9cIiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxOHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjIwcHggMFwiXHJcbiAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9nby5ub3JkdnBuLm5ldC9hZmZfYz9vZmZlcl9pZD0xNSZhZmZfaWQ9ODc2NTgmc291cmNlPWRkbHZpZC5jb21cIiBzdHlsZT17e2NvbG9yOlwiI2Q3MzAzMFwifX0gdGFyZ2V0PVwiX2JsYW5rXCI+4pqh77iP8J+UkiBEb3dubG9hZCB3aXRoIExpZ2h0bmluZyBTcGVlZCBhbmQgVW5icmVha2FibGUgU2VjdXJpdHkhIEdldCA1OSUgb2ZmIE5vcmRWUE4gKyAzIGV4dHJhIG1vbnRocyEg8J+SqvCfjJA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb241XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGgyPnt0KCdiZXN0X2ZyZWVfb25saW5lX3ZpZGVvX2Rvd25sb2FkZXInKX08YnIvPnt0KCd0cnVzdGVkX2J5X21pbGxpb25zJyl9PC9oMj5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICB7bG50b2JyKHQoJ2hvbWVfZGVzYycpKX1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb242IHNlY3Rpb242XzBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8aDI+e3QoJ2Rpc2NvdmVyX2RkbHZpZCcpfTwvaDI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHM2XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbiB2aWRlb3NcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0KCdkb3dubG9hZF92aWRlb3NfZnJvbV9mYW1vdXNfc2l0ZXMnKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczZcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uIHlvdXR1YmVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0KCdkb3dubG9hZF9jb252ZXJ0X3lvdXR1YmVfbXAzJyl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczZcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uIHRpa3Rva1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+e3QoJ2Rvd25sb2FkX3Rpa3Rva193aXRob3V0X3dhdGVybWFyaycpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24gc3Rvcmllc1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+e3QoJ2Rvd25sb2FkX2ZhY2Vib29rX2luc3RhZ3JhbV9zdG9yaWVzJyl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vcmVcIj5cclxuICAgICAgICAgICAgICAgIHt0KCdhbmRfbWFueV9tb3JlX3RvX2NvbWUnKX1cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlnXCI+e3QoJ3RoaXNfaXNfanVzdF90aGVfc3RhcnQnKX08L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uNiBzZWN0aW9uNl8xXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGgyPnt0KCdob3dfdG9fZG93bmxvYWRfYV92aWRlbycpfTwvaDI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHM0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbiBjb3B5XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+e3QoJ2NvcHlfdmlkZW9fdXJsJyl9PC9zdHJvbmc+PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNcclxuICAgICAgICAgICAgICAgICAgICAgIGkxOG5LZXk9XCJjb3B5X3ZpZGVvX3VybF9kZXRhaWxzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHM9e3sgYTogPGEgLz4gfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHM0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbiBwYXN0ZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8cD48c3Ryb25nPnt0KCdwYXN0ZV9saW5rJyl9PC9zdHJvbmc+PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cD57dCgncGFzdGVfbGlua19kZXRhaWxzJyl9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24gZG93bmxvYWRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPHA+PHN0cm9uZz57dCgnZG93bmxvYWRfdGhlX3ZpZGVvJyl9PC9zdHJvbmc+PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cD57dCgnZG93bmxvYWRfdGhlX3ZpZGVvX2RldGFpbHMnKX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uN1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxoMj57dCgnZG93bmxvYWRfdmlkZW9zX3VzaW5nX291cl9ib3RzJyl9PC9oMj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczZcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uIHR3aXR0ZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+PHN0cm9uZz57dCgndHdpdHRlcl9ib3QnKX08L3N0cm9uZz48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgaTE4bktleT1cInR3aXR0ZXJfYm90X2RldGFpbHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzPXt7IGVtOiA8ZW0gLz4gfX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY3RhXCI+PGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vZGRsX3ZpZDFcIiB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzc05hbWU9XCJidG5cIj57dCgnZm9sbG93X2RkbF92aWQnKX08L2E+PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24gdGVsZWdyYW1cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+PHN0cm9uZz57dCgndGVsZWdyYW1fYm90Jyl9PC9zdHJvbmc+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRyYW5zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaTE4bktleT1cInRlbGVncmFtX2JvdF9kZXRhaWxzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzPXt7IGVtOiA8ZW0gLz4gfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjdGFcIj48YSBocmVmPVwiaHR0cHM6Ly90ZWxlZ3JhbS5tZS9kZGx2aWRfYm90XCIgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3NOYW1lPVwiYnRuXCI+e3QoJ3NlbmRfbWVzc2FnZV90b19kZGx2aWRfYm90Jyl9PC9hPjwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbjhcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXJ0XCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG5cIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xpbmtcIikuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKHsgdG9wOiAwLCBsZWZ0OiAwLCBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XHJcbiAgICAgICAgICAgICAgICB9fT57dCgnc3RhcnRfZG93bmxvYWRpbmcnKX08L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgICAgICAgICAgICBcclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIFxyXG4gICAgICA8QUQySFMgLz5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgaHRtbCxcclxuICAgICAgICBib2R5IHtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJQbGV4XCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90bywgT3h5Z2VuLFxyXG4gICAgICAgICAgICBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSwgc2Fucy1zZXJpZjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICoge1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICB9XHJcbiAgICAgICAgKjpmb2N1cyB7XHJcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5VUkxTaG9ydGVuZXIuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4gKHtcclxuICBuYW1lc3BhY2VzUmVxdWlyZWQ6IFsnY29tbW9uJ10sXHJcbn0pXHJcblxyXG5VUkxTaG9ydGVuZXIucHJvcFR5cGVzID0ge1xyXG4gIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbignY29tbW9uJykoVVJMU2hvcnRlbmVyKSJdfQ== */\n/*@ sourceURL=D:\\\\Clients Panel\\\\Web Development\\\\ddlvid1old\\\\pages\\\\urlshortener.js */"));
};
URLShortener.getInitialProps = async () => ({
  namespacesRequired: ['common']
});
URLShortener.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_4__["withTranslation"])('common')(URLShortener));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaTE4bi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9wYXJ0cy9hZDJocy5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9wYXJ0cy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcGFydHMvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL3VybHNob3J0ZW5lci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWkxOG5leHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pMThuZXh0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2hhcmV0aGlzLXJlYWN0anNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiXSwibmFtZXMiOlsiTmV4dEkxOE5leHQiLCJyZXF1aXJlIiwiZGVmYXVsdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJzdHJpY3RNb2RlIiwiZGVmYXVsdExhbmd1YWdlIiwib3RoZXJMYW5ndWFnZXMiLCJsb2NhbGVTdWJwYXRocyIsImZyIiwicHQiLCJpbnRlcnBvbGF0aW9uIiwiZXNjYXBlVmFsdWUiLCJfX2pzeCIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsIkFEMkhTIiwiaGlkZUJhbm5lciIsInNldEhpZGVCYW5uZXIiLCJ1c2VTdGF0ZSIsImRlZmVycmVkUHJvbXB0Iiwic2hvd0FkZFRvSG9tZVNjcmVlbiIsImEyaHNCdG4iLCJ3aW5kb3ciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJidG4iLCJhZGRFdmVudExpc3RlbmVyIiwiYWRkVG9Ib21lU2NyZWVuIiwic3R5bGUiLCJkaXNwbGF5IiwicHJvbXB0IiwidXNlckNob2ljZSIsInRoZW4iLCJjaG9pY2VSZXN1bHQiLCJvdXRjb21lIiwiX2dhcSIsInB1c2giLCJ1c2VFZmZlY3QiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkZvb3RlciIsInQiLCJjb29raWVCYW5uZXJTaG93Iiwic2V0Q29va2llQmFubmVyU2hvdyIsImNoYW5nZUxhbmciLCJlIiwibGFuZyIsInByZXZlbnREZWZhdWx0IiwiaTE4biIsImNoYW5nZUxhbmd1YWdlIiwic2Nyb2xsVG8iLCJ0b3AiLCJsZWZ0IiwiYmVoYXZpb3IiLCJsYW5ncyIsImlkIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiTGluayIsImhyZWYiLCJ0aXRsZSIsImxhbmd1YWdlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJ3aXRoVHJhbnNsYXRpb24iLCJIZWFkZXIiLCJzaG93TW9iaWxlTWVudSIsInNldFNob3dNb2JpbGVNZW51IiwidGhlbWUiLCJzZXRUaGVtZSIsInVwZGF0ZVRoZW1lIiwicmVtb3ZlIiwidmFsdWUiLCJ0YXJnZXQiLCJsbnRvYnIiLCJzdHIiLCJzcGxpdCIsIm1hcCIsIml0ZW0iLCJpIiwia2V5IiwiVVJMU2hvcnRlbmVyIiwibGluayIsInNldExpbmsiLCJlcnJvciIsInNldEVycm9yIiwic3VibWl0Iiwic3VwcG9ydGVkX3NpdGVzIiwic3VwcG9ydGVkIiwibGVuZ3RoIiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwiUm91dGVyIiwicGF0aG5hbWUiLCJxdWVyeSIsInR3dHRyIiwid2lkZ2V0cyIsImxvYWQiLCJsb2NhdGlvbiIsImhvc3QiLCJib3VuY2VLaWxsZXIiLCJ0cmFja1Njcm9sbGluZyIsInNjcm9sbGluZ1BlcmNlbnRhZ2VOdW1iZXIiLCJsb2dJbnRlcnZhbCIsInRyYWNrRXZlbnRzIiwidHJhY2tNYXhUaW1lIiwidHJhY2tNYXhUaW1lU2VjIiwic2Nyb2xsVHJhY2tFbmQiLCJTY3JvbGxNYXRyaXgiLCJBcnJheSIsIlRyYWNraW5nTG9nVGltZSIsImEiLCJwYXJzZUludCIsInN0YXJ0VGltZVRyYWNraW5nIiwiaW50ZXJ2YWxPYmoiLCJzZXRJbnRlcnZhbCIsInJldmVyc2UiLCJ0cmFja01heFRpbWVUaW1lb3V0Iiwic2V0VGltZW91dCIsImNsZWFySW50ZXJ2YWwiLCJGcmVxdWVuY3kiLCJSZXBlbnRhbmNlIiwiaXgiLCJzY3JvbGxGdW5jIiwiYm9keSIsImh0bWwiLCJkb2N1bWVudEVsZW1lbnQiLCJkb2N1bWVudEhlaWdodCIsIk1hdGgiLCJtYXgiLCJzY3JvbGxIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJpeiIsInNjcm9sbFkiLCJpbm5lckhlaWdodCIsIm5vbkludGVyYWN0aW9uIiwiZ2EiLCJ0eXBlIiwiYXN5bmMiLCJzcmMiLCJwcm90b2NvbCIsInMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJoYXNoIiwiZWxlbSIsIm9mZnNldFRvcCIsIkhlYWQiLCJuYW1lIiwiY29udGVudCIsInByb3BlcnR5IiwicmVsIiwiaHJlZkxhbmciLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiU3RpY2t5U2hhcmVCdXR0b25zIiwiY29uZmlnIiwiYWxpZ25tZW50IiwiY29sb3IiLCJlbmFibGVkIiwiZm9udF9zaXplIiwibGFiZWxzIiwibWluX2NvdW50IiwibmV0d29ya3MiLCJwYWRkaW5nIiwicmFkaXVzIiwic2hvd190b3RhbCIsInNob3dfbW9iaWxlIiwic2hvd190b2dnbGUiLCJzaXplIiwidXJsIiwiYWN0aW9uIiwibWV0aG9kIiwib25TdWJtaXQiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwicGF0dGVybiIsInJlcXVpcmVkIiwiYXV0b0NvbXBsZXRlIiwiZm9jdXMiLCJfSlNYU3R5bGUiLCJnZXRJbml0aWFsUHJvcHMiLCJuYW1lc3BhY2VzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RmE7O0FBRWIsTUFBTUEsV0FBVyxHQUFHQyxtQkFBTyxDQUFDLGtDQUFjLENBQUMsQ0FBQ0MsT0FBTztBQUVuREMsTUFBTSxDQUFDQyxPQUFPLEdBQUcsSUFBSUosV0FBVyxDQUFDO0VBQzdCSyxVQUFVLEVBQUUsS0FBSztFQUNqQkMsZUFBZSxFQUFFLElBQUk7RUFDckJDLGNBQWMsRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7RUFDNUJDLGNBQWMsRUFBRTtJQUNaQyxFQUFFLEVBQUUsSUFBSTtJQUNSQyxFQUFFLEVBQUU7RUFDUixDQUFDO0VBQ0RDLGFBQWEsRUFBRTtJQUNYQyxXQUFXLEVBQUU7RUFDakI7QUFDSixDQUFDLENBQUMsQzs7Ozs7Ozs7Ozs7O0FDZkY7QUFBQTtBQUFBO0FBQWE7O0FBQUE7QUFBQSxJQUFBQyxLQUFBLEdBQUFDLDRDQUFBLENBQUFDLGFBQUE7QUFFK0I7QUFFNUMsTUFBTUMsS0FBSyxHQUFHQSxDQUFBLEtBQU07RUFFaEIsTUFBTTtJQUFBLEdBQUNDLFVBQVU7SUFBQSxHQUFFQztFQUFhLElBQUlDLHNEQUFRLENBQUMsS0FBSyxDQUFDO0VBRW5ELElBQUlDLGNBQWM7RUFFbEIsTUFBTUMsbUJBQW1CLEdBQUdBLENBQUEsS0FBTTtJQUM5QixJQUFJQyxPQUFPLEdBQUdDLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsZUFBZSxDQUFDO0lBQzVELElBQUlILE9BQU8sRUFBRTtNQUNUQSxPQUFPLENBQUNJLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztNQUM3QixJQUFJQyxHQUFHLEdBQUdOLE9BQU8sQ0FBQ0csYUFBYSxDQUFDLFFBQVEsQ0FBQztNQUN6QyxJQUFJRyxHQUFHLEVBQUVDLGdCQUFnQixDQUFDLE9BQU8sRUFBRUMsZUFBZSxDQUFDO0lBQ3ZEO0VBQ0osQ0FBQztFQUVELE1BQU1BLGVBQWUsR0FBR0EsQ0FBQSxLQUFNO0lBQzFCLElBQUlSLE9BQU8sR0FBR0MsTUFBTSxDQUFDQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxlQUFlLENBQUM7SUFDNURILE9BQU8sQ0FBQ1MsS0FBSyxDQUFDQyxPQUFPLEdBQUcsTUFBTTtJQUM5QlosY0FBYyxDQUFDYSxNQUFNLENBQUMsQ0FBQztJQUN2QmIsY0FBYyxDQUFDYyxVQUFVLENBQUNDLElBQUksQ0FBQyxVQUFTQyxZQUFZLEVBQUU7TUFDbEQsSUFBSUEsWUFBWSxDQUFDQyxPQUFPLEtBQUssVUFBVSxFQUFFO1FBQ3JDZCxNQUFNLENBQUNlLElBQUksQ0FBQ0MsSUFBSSxDQUFDLENBQUMsYUFBYSxFQUFFLG1CQUFtQixFQUFFLE1BQU0sQ0FBQyxDQUFDO01BQ2xFO01BQ0FuQixjQUFjLEdBQUcsSUFBSTtJQUN6QixDQUFDLENBQUM7RUFDTixDQUFDO0VBRURvQix1REFBUyxDQUFDLE1BQU07SUFDWixJQUFJLElBQW9HLEVBQUU7TUFDdEd0QixhQUFhLENBQUMsSUFBSSxDQUFDO0lBQ3ZCO0lBRUEsSUFBSSxLQUEwRCxFQUFFLEVBTS9EO0VBQ0wsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUVOLElBQUksQ0FBQ0QsVUFBVSxFQUFFO0lBQ2IsT0FDSUosS0FBQTtNQUFLNEIsU0FBUyxFQUFDO0lBQW1DLEdBQzlDNUIsS0FBQSx5Q0FBc0MsQ0FBQyxFQUN2Q0EsS0FBQTtNQUFHNEIsU0FBUyxFQUFDLE9BQU87TUFBQ0MsT0FBTyxFQUFFQSxDQUFBLEtBQU07UUFDaENuQixNQUFNLENBQUNvQixZQUFZLENBQUNDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDO1FBQzlDMUIsYUFBYSxDQUFDLElBQUksQ0FBQztNQUN2QjtJQUFFLE1BQUssQ0FDTixDQUFDO0VBRWQ7RUFFQSxPQUFPLElBQUk7QUFDZixDQUFDO0FBRWNGLG9FQUFLLEU7Ozs7Ozs7Ozs7OztBQzVEcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBYTs7QUFBQTtBQUFBLElBQUFILEtBQUEsR0FBQUMsNENBQUEsQ0FBQUMsYUFBQTtBQUVzQjtBQUNTO0FBQ2E7QUFFekQsTUFBTThCLE1BQU0sR0FBR0EsQ0FBQztFQUFFQztBQUFFLENBQUMsS0FBSztFQUV0QixNQUFNO0lBQUEsR0FBQ0MsZ0JBQWdCO0lBQUEsR0FBRUM7RUFBbUIsSUFBSTdCLHNEQUFRLENBQUMsSUFBSSxDQUFDO0VBRTlEcUIsdURBQVMsQ0FBQyxNQUFNO0lBQ1osSUFBSSxJQUEyRyxFQUFFO01BQzdHUSxtQkFBbUIsQ0FBQyxLQUFLLENBQUM7SUFDOUI7RUFDSixDQUFDLEVBQUUsRUFBRSxDQUFDO0VBRU4sTUFBTS9CLFVBQVUsR0FBR0EsQ0FBQSxLQUFNO0lBQ3JCTSxNQUFNLENBQUNvQixZQUFZLENBQUNDLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUM7SUFDckRJLG1CQUFtQixDQUFDLEtBQUssQ0FBQztFQUM5QixDQUFDO0VBRUQsTUFBTUMsVUFBVSxHQUFHQSxDQUFDQyxDQUFDLEVBQUVDLElBQUksS0FBSztJQUM1QkQsQ0FBQyxDQUFDRSxjQUFjLENBQUMsQ0FBQztJQUNsQkMsMENBQUksQ0FBQ0MsY0FBYyxDQUFDSCxJQUFJLENBQUM7SUFDekI1QixNQUFNLENBQUNnQyxRQUFRLENBQUM7TUFBRUMsR0FBRyxFQUFFLENBQUM7TUFBRUMsSUFBSSxFQUFFLENBQUM7TUFBRUMsUUFBUSxFQUFFO0lBQVMsQ0FBQyxDQUFDO0VBQzVELENBQUM7RUFFRCxNQUFNQyxLQUFLLEdBQUc7SUFDVixJQUFJLEVBQUUsU0FBUztJQUNmLElBQUksRUFBRSxVQUFVO0lBQ2hCLElBQUksRUFBRTtFQUNWLENBQUM7RUFFRCxPQUNJOUMsS0FBQTtJQUFLK0MsRUFBRSxFQUFDO0VBQVEsR0FDWi9DLEtBQUE7SUFBSzRCLFNBQVMsRUFBQztFQUFXLEdBQ3RCNUIsS0FBQTtJQUFLNEIsU0FBUyxFQUFDO0VBQU0sNkJBQ1EsSUFBSW9CLElBQUksQ0FBQyxDQUFDLENBQUNDLFdBQVcsQ0FBQyxDQUFDLFFBQUloQixDQUFDLENBQUMscUJBQXFCLENBQUMsT0FDNUUsR0FBRyxFQUNKakMsS0FBQSxDQUFDa0QsMENBQUk7SUFBQ0MsSUFBSSxFQUFDO0VBQWlCLEdBQUNuRCxLQUFBO0lBQUdvRCxLQUFLLEVBQUVuQixDQUFDLENBQUMsZ0JBQWdCLENBQUMsR0FBRztFQUFZLEdBQUVBLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBSyxDQUFPLENBQ3hHLENBQUMsRUFDTmpDLEtBQUE7SUFBSzRCLFNBQVMsRUFBQztFQUFPLEdBQ2xCNUIsS0FBQTtJQUFLNEIsU0FBUyxFQUFDO0VBQWEsR0FDdkJZLDBDQUFJLENBQUNhLFFBQVEsR0FDVnJELEtBQUE7SUFBTTRCLFNBQVMsRUFBQztFQUFNLEdBQ2xCNUIsS0FBQTtJQUFNNEIsU0FBUyxFQUFFLE9BQU8sR0FBR1ksMENBQUksQ0FBQ2E7RUFBUyxDQUFPLENBQUMsRUFDaERQLEtBQUssQ0FBQ04sMENBQUksQ0FBQ2EsUUFBUSxDQUNsQixDQUFDLEdBQ1AsSUFBSSxFQUNSckQsS0FBQTtJQUFLNEIsU0FBUyxFQUFDO0VBQWEsR0FDeEI1QixLQUFBO0lBQUdtRCxJQUFJLEVBQUMsR0FBRztJQUFDQyxLQUFLLEVBQUMsa0NBQWtDO0lBQUN4QixTQUFTLEVBQUMsTUFBTTtJQUFDQyxPQUFPLEVBQUdRLENBQUMsSUFBS0QsVUFBVSxDQUFDQyxDQUFDLEVBQUUsSUFBSTtFQUFFLEdBQ3RHckMsS0FBQTtJQUFNNEIsU0FBUyxFQUFDO0VBQVMsQ0FBTyxDQUFDLFdBRWxDLENBQUMsRUFDSjVCLEtBQUE7SUFBR21ELElBQUksRUFBQyxLQUFLO0lBQUNDLEtBQUssRUFBQyxtREFBMEM7SUFBQ3hCLFNBQVMsRUFBQyxNQUFNO0lBQUNDLE9BQU8sRUFBR1EsQ0FBQyxJQUFLRCxVQUFVLENBQUNDLENBQUMsRUFBRSxJQUFJO0VBQUUsR0FDaEhyQyxLQUFBO0lBQU00QixTQUFTLEVBQUM7RUFBUyxDQUFPLENBQUMsZUFFbEMsQ0FBQyxFQUNKNUIsS0FBQTtJQUFHbUQsSUFBSSxFQUFDLEtBQUs7SUFBQ0MsS0FBSyxFQUFDLHVDQUFvQztJQUFDeEIsU0FBUyxFQUFDLE1BQU07SUFBQ0MsT0FBTyxFQUFHUSxDQUFDLElBQUtELFVBQVUsQ0FBQ0MsQ0FBQyxFQUFFLElBQUk7RUFBRSxHQUMxR3JDLEtBQUE7SUFBTTRCLFNBQVMsRUFBQztFQUFTLENBQU8sQ0FBQywyQkFFbEMsQ0FDRixDQUNKLENBQ0osQ0FBQyxFQUNONUIsS0FBQTtJQUFLNEIsU0FBUyxFQUFDO0VBQU8sQ0FBRSxDQUN2QixDQUFDLEVBQ0xNLGdCQUFnQixHQUNibEMsS0FBQTtJQUFLK0MsRUFBRSxFQUFDLGNBQWM7SUFBQ25CLFNBQVMsRUFBQztFQUFtQixHQUNoRDVCLEtBQUE7SUFBSzRCLFNBQVMsRUFBQztFQUFXLEdBQ3RCNUIsS0FBQSxlQUNLaUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQUVqQyxLQUFBLENBQUNrRCwwQ0FBSTtJQUFDQyxJQUFJLEVBQUM7RUFBaUIsR0FBQ25ELEtBQUE7SUFBR29ELEtBQUssRUFBRW5CLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHO0VBQVksR0FBRUEsQ0FBQyxDQUFDLGdCQUFnQixDQUFLLENBQU8sQ0FDN0gsQ0FBQyxFQUNQakMsS0FBQTtJQUFRNEIsU0FBUyxFQUFDLEtBQUs7SUFBQ0MsT0FBTyxFQUFFQSxDQUFBLEtBQU16QixVQUFVLENBQUM7RUFBRSxHQUFFNkIsQ0FBQyxDQUFDLGNBQWMsQ0FBVSxDQUMvRSxDQUNKLENBQUMsR0FDTixJQUNILENBQUM7QUFFZCxDQUFDO0FBRURELE1BQU0sQ0FBQ3NCLFNBQVMsR0FBRztFQUNmckIsQ0FBQyxFQUFFc0IsaURBQVMsQ0FBQ0MsSUFBSSxDQUFDQztBQUN0QixDQUFDO0FBRWNDLDRIQUFlLENBQUMsUUFBUSxDQUFDLENBQUMxQixNQUFNLENBQUMsRTs7Ozs7Ozs7Ozs7O0FDckZoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFhOztBQUFBO0FBQUEsSUFBQWhDLEtBQUEsR0FBQUMsNENBQUEsQ0FBQUMsYUFBQTtBQUUrQjtBQUNUO0FBQ3NCO0FBRXpELE1BQU15RCxNQUFNLEdBQUdBLENBQUM7RUFBRTFCO0FBQUUsQ0FBQyxLQUFLO0VBQ3RCLE1BQU07SUFBQSxHQUFDMkIsY0FBYztJQUFBLEdBQUVDO0VBQWlCLElBQUl2RCxzREFBUSxDQUFDLEtBQUssQ0FBQztFQUMzRCxNQUFNO0lBQUEsR0FBQ3dELEtBQUs7SUFBQSxHQUFFQztFQUFRLElBQUl6RCxzREFBUSxDQUFDLE9BQU8sQ0FBQztFQUUzQ3FCLHVEQUFTLENBQUMsTUFBTTtJQUNaLFdBQW1DLEVBVWxDO0VBQ0wsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUVOLE1BQU1xQyxXQUFXLEdBQUlGLEtBQUssSUFBSztJQUMzQkMsUUFBUSxDQUFDRCxLQUFLLENBQUM7SUFDZnBELE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUNDLFNBQVMsQ0FBQ29ELE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDL0R2RCxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDQyxTQUFTLENBQUNvRCxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQzlEdkQsTUFBTSxDQUFDQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQ0MsU0FBUyxDQUFDQyxHQUFHLENBQUNnRCxLQUFLLENBQUM7SUFDMURwRCxNQUFNLENBQUNvQixZQUFZLENBQUNDLE9BQU8sQ0FBQyxPQUFPLEVBQUUrQixLQUFLLENBQUM7RUFDL0MsQ0FBQztFQUVELE1BQU1oQixLQUFLLEdBQUcsQ0FDVjtJQUNJTSxLQUFLLEVBQUUsU0FBUztJQUNoQmMsS0FBSyxFQUFFO0VBQ1gsQ0FBQyxFQUNEO0lBQ0lkLEtBQUssRUFBRSxVQUFVO0lBQ2pCYyxLQUFLLEVBQUU7RUFDWCxDQUFDLEVBQ0Q7SUFDSWQsS0FBSyxFQUFFLHNCQUFzQjtJQUM3QmMsS0FBSyxFQUFFO0VBQ1gsQ0FBQyxDQUNKO0VBRUQsT0FDSWxFLEtBQUE7SUFBSytDLEVBQUUsRUFBQztFQUFRLEdBQ1ovQyxLQUFBO0lBQUs0QixTQUFTLEVBQUM7RUFBVyxHQUN0QjVCLEtBQUE7SUFBSytDLEVBQUUsRUFBQztFQUFNLEdBQ1YvQyxLQUFBLENBQUNrRCwwQ0FBSTtJQUFDQyxJQUFJLEVBQUM7RUFBRyxHQUNWbkQsS0FBQTtJQUFHNEIsU0FBUyxFQUFDLE1BQU07SUFBQ3dCLEtBQUssRUFBRW5CLENBQUMsQ0FBQyxVQUFVO0VBQUUsV0FFdEMsQ0FDRCxDQUNMLENBQUMsRUFFTmpDLEtBQUE7SUFBSytDLEVBQUUsRUFBQyxLQUFLO0lBQUNuQixTQUFTLEVBQUdnQyxjQUFjLEdBQUksV0FBVyxHQUFHO0VBQUssR0FlM0Q1RCxLQUFBLGFBQ0lBLEtBQUEsYUFDSUEsS0FBQSxDQUFDa0QsMENBQUk7SUFBQ0MsSUFBSSxFQUFDO0VBQUcsR0FBQ25ELEtBQUE7SUFBRzZCLE9BQU8sRUFBRUEsQ0FBQSxLQUFNZ0MsaUJBQWlCLENBQUMsS0FBSyxDQUFFO0lBQUNULEtBQUssRUFBRW5CLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRztFQUFZLEdBQUVBLENBQUMsQ0FBQyxNQUFNLENBQUssQ0FBTyxDQUNoSCxDQUFDLEVBSW1CakMsS0FBQSxhQUNwQkEsS0FBQSxDQUFDa0QsMENBQUk7SUFBQ0MsSUFBSSxFQUFDO0VBQWtCLEdBQUNuRCxLQUFBO0lBQUc2QixPQUFPLEVBQUVBLENBQUEsS0FBTWdDLGlCQUFpQixDQUFDLEtBQUssQ0FBRTtJQUFDVCxLQUFLLEVBQUVuQixDQUFDLENBQUMsa0JBQWtCO0VBQUUsR0FBRUEsQ0FBQyxDQUFDLGtCQUFrQixDQUFLLENBQU8sQ0FDekksQ0FBQyxFQUNMakMsS0FBQSxhQUNJQSxLQUFBLENBQUNrRCwwQ0FBSTtJQUFDQyxJQUFJLEVBQUM7RUFBZSxHQUFDbkQsS0FBQTtJQUFHNkIsT0FBTyxFQUFFQSxDQUFBLEtBQU1nQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUU7SUFBQ1QsS0FBSyxFQUFFbkIsQ0FBQyxDQUFDLGVBQWU7RUFBRSxHQUFFQSxDQUFDLENBQUMsZUFBZSxDQUFLLENBQU8sQ0FDaEksQ0FBQyxFQUNKakMsS0FBQSxhQUNHQSxLQUFBLENBQUNrRCwwQ0FBSTtJQUFDQyxJQUFJLEVBQUM7RUFBUSxHQUFDbkQsS0FBQTtJQUFHNkIsT0FBTyxFQUFFQSxDQUFBLEtBQU1nQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUU7SUFBQ1QsS0FBSyxFQUFFbkIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHO0VBQVksR0FBRUEsQ0FBQyxDQUFDLFVBQVUsQ0FBSyxDQUFPLENBQzdILENBQUMsRUFDTGpDLEtBQUEsYUFDSUEsS0FBQSxDQUFDa0QsMENBQUk7SUFBQ0MsSUFBSSxFQUFDO0VBQVUsR0FBQ25ELEtBQUE7SUFBRzZCLE9BQU8sRUFBRUEsQ0FBQSxLQUFNZ0MsaUJBQWlCLENBQUMsS0FBSyxDQUFFO0lBQUNULEtBQUssRUFBRW5CLENBQUMsQ0FBQyxZQUFZO0VBQUUsR0FBRUEsQ0FBQyxDQUFDLFlBQVksQ0FBSyxDQUFPLENBQ3JILENBQUMsRUFFTGpDLEtBQUEsYUFDSUEsS0FBQSxDQUFDa0QsMENBQUk7SUFBQ0MsSUFBSSxFQUFDO0VBQVUsR0FBQ25ELEtBQUE7SUFBRzZCLE9BQU8sRUFBRUEsQ0FBQSxLQUFNZ0MsaUJBQWlCLENBQUMsS0FBSyxDQUFFO0lBQUNULEtBQUssRUFBRW5CLENBQUMsQ0FBQyxPQUFPO0VBQUUsR0FBRUEsQ0FBQyxDQUFDLE9BQU8sQ0FBSyxDQUFPLENBQzNHLENBSUosQ0FDSCxDQUFDLEVBRUw2QixLQUFLLEtBQUssT0FBTyxHQUNkOUQsS0FBQTtJQUFHNkIsT0FBTyxFQUFFQSxDQUFBLEtBQU1tQyxXQUFXLENBQUMsTUFBTSxDQUFFO0lBQUNwQyxTQUFTLEVBQUM7RUFBWSxHQUFDNUIsS0FBQSxVQUFNLENBQUMsT0FBQ0EsS0FBQSxlQUFPaUMsQ0FBQyxDQUFDLFdBQVcsQ0FBUSxDQUFJLENBQUMsR0FFdkdqQyxLQUFBO0lBQUc2QixPQUFPLEVBQUVBLENBQUEsS0FBTW1DLFdBQVcsQ0FBQyxPQUFPLENBQUU7SUFBQ3BDLFNBQVMsRUFBQztFQUFhLEdBQUM1QixLQUFBLFVBQU0sQ0FBQyxPQUFDQSxLQUFBLGVBQU9pQyxDQUFDLENBQUMsWUFBWSxDQUFRLENBQUksQ0FDNUcsRUFFRGpDLEtBQUE7SUFBR21ELElBQUksRUFBQyxnQ0FBZ0M7SUFBQ0osRUFBRSxFQUFDLGFBQWE7SUFBQ29CLE1BQU0sRUFBQztFQUFRLHdCQUF1QixDQUFDLEVBRWpHbkUsS0FBQTtJQUFNNEIsU0FBUyxFQUFDLGtCQUFrQjtJQUFDQyxPQUFPLEVBQUVBLENBQUEsS0FBTWdDLGlCQUFpQixDQUFDLENBQUNELGNBQWM7RUFBRSxDQUFPLENBQUMsRUFDNUZBLGNBQWMsR0FBRzVELEtBQUE7SUFBSzRCLFNBQVMsRUFBQyxtQkFBbUI7SUFBQ0MsT0FBTyxFQUFFQSxDQUFBLEtBQU1nQyxpQkFBaUIsQ0FBQyxLQUFLO0VBQUUsQ0FBRSxDQUFDLEdBQUcsSUFBSSxFQUV2RzdELEtBQUE7SUFBSzRCLFNBQVMsRUFBQztFQUFPLENBQUUsQ0FDdkIsQ0FDSixDQUFDO0FBRWQsQ0FBQztBQUVEK0IsTUFBTSxDQUFDTCxTQUFTLEdBQUc7RUFDZnJCLENBQUMsRUFBRXNCLGlEQUFTLENBQUNDLElBQUksQ0FBQ0M7QUFDdEIsQ0FBQztBQUVjQyw0SEFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDQyxNQUFNLENBQUMsRTs7Ozs7Ozs7Ozs7O0FDM0hoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBYTs7QUFBQTtBQUFBO0FBQUEsSUFBQTNELEtBQUEsR0FBQUMsNENBQUEsQ0FBQUMsYUFBQTtBQUVzQjtBQUNHO0FBQ2tCO0FBQ0g7QUFDeEI7QUFDZTtBQUNSO0FBQ0E7QUFDRjtBQUNsQztBQUNBLE1BQU1rRSxNQUFNLEdBQUlDLEdBQUcsSUFBSztFQUN0QixPQUFPQSxHQUFHLENBQUNDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQ0MsR0FBRyxDQUFDLFVBQVNDLElBQUksRUFBRUMsQ0FBQyxFQUFFO0lBQzNDLE9BQ0V6RSxLQUFBO01BQU0wRSxHQUFHLEVBQUVEO0lBQUUsR0FBRUQsSUFBSSxFQUFDeEUsS0FBQSxXQUFJLENBQU8sQ0FBQztFQUVwQyxDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQsTUFBTTJFLFlBQVksR0FBR0EsQ0FBQztFQUFFMUM7QUFBRSxDQUFDLEtBQUs7RUFFOUIsTUFBTTtJQUFBLEdBQUMyQyxJQUFJO0lBQUEsR0FBRUM7RUFBTyxJQUFJdkUsc0RBQVEsQ0FBQyxFQUFFLENBQUM7RUFDcEMsTUFBTTtJQUFBLEdBQUN3RSxLQUFLO0lBQUEsR0FBRUM7RUFBUSxJQUFJekUsc0RBQVEsQ0FBQyxJQUFJLENBQUM7RUFFeEMsTUFBTTBFLE1BQU0sR0FBSTNDLENBQUMsSUFBSztJQUNwQixJQUFJLE9BQU9BLENBQUMsS0FBSyxXQUFXLEVBQUU7TUFDNUJBLENBQUMsQ0FBQ0UsY0FBYyxDQUFDLENBQUM7SUFDcEI7SUFDQXdDLFFBQVEsQ0FBQyxJQUFJLENBQUM7SUFDZCxJQUFJSCxJQUFJLEtBQUssRUFBRSxFQUFFO01BQ2YsTUFBTUssZUFBZSxHQUFHLENBQ3RCLGFBQWEsRUFDYixVQUFVLEVBQ1YsYUFBYSxFQUNiLGNBQWMsRUFDZCxjQUFjLEVBQ2QsUUFBUSxFQUNSLFlBQVksRUFDWixXQUFXLEVBQ1gsYUFBYSxFQUNiLGVBQWUsRUFDZixZQUFZLEVBQ1osZUFBZSxFQUNmLFFBQVEsRUFDUixPQUFPLEVBQ1AsY0FBYyxFQUNkLFNBQVMsRUFDVCxNQUFNLEVBQ04sVUFBVSxFQUNWLFVBQVUsRUFDVixRQUFRLEVBQ1IsWUFBWSxDQUNiO01BQ0QsSUFBSUMsU0FBUyxHQUFHLEtBQUs7TUFDckIsS0FBSyxJQUFJVCxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdRLGVBQWUsQ0FBQ0UsTUFBTSxFQUFFVixDQUFDLEVBQUUsRUFBRTtRQUMvQyxJQUFJRyxJQUFJLENBQUNRLFdBQVcsQ0FBQyxDQUFDLENBQUNDLE9BQU8sQ0FBQ0osZUFBZSxDQUFDUixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRTtVQUN2RFMsU0FBUyxHQUFHLElBQUk7VUFDaEI7UUFDRjtNQUNGO01BQ0EsSUFBSUEsU0FBUyxFQUFFO1FBQ2JJLDRDQUFNLENBQUM1RCxJQUFJLENBQUM7VUFDVjZELFFBQVEsRUFBRSxXQUFXO1VBQ3JCQyxLQUFLLEVBQUU7WUFBRVo7VUFBSztRQUNoQixDQUFDLENBQUM7TUFDSixDQUFDLE1BQU07UUFDTEcsUUFBUSxDQUFDLHlCQUF5QixDQUFDO1FBQ25DckUsTUFBTSxDQUFDZSxJQUFJLENBQUNDLElBQUksQ0FBQyxDQUFDLGFBQWEsRUFBRSxjQUFjLEVBQUVrRCxJQUFJLENBQUMsQ0FBQztNQUN6RDtJQUNGLENBQUMsTUFBTTtNQUNMRyxRQUFRLENBQUMsbUJBQW1CLENBQUM7SUFDL0I7SUFDQSxPQUFPLEtBQUs7RUFDZCxDQUFDO0VBRURwRCx1REFBUyxDQUFDLE1BQU07SUFDZCxJQUFJLE9BQU8sSUFBSWpCLE1BQU0sRUFBRTtNQUNyQkEsTUFBTSxDQUFDK0UsS0FBSyxDQUFDQyxPQUFPLENBQUNDLElBQUksQ0FBQyxDQUFDO0lBQzdCO0lBRUEsSUFBSWpGLE1BQU0sQ0FBQ2tGLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDUixPQUFPLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJM0UsTUFBTSxDQUFDa0YsUUFBUSxDQUFDQyxJQUFJLENBQUNSLE9BQU8sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEVBQUU7TUFDbEczRSxNQUFNLENBQUNlLElBQUksR0FBR2YsTUFBTSxDQUFDZSxJQUFJLElBQUksRUFBRTtNQUMvQmYsTUFBTSxDQUFDZSxJQUFJLENBQUNDLElBQUksQ0FBQyxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO01BQ25EaEIsTUFBTSxDQUFDZSxJQUFJLENBQUNDLElBQUksQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUM7TUFFcEMsSUFBSW9FLFlBQVksR0FBRztRQUNqQkMsY0FBYyxFQUFFLElBQUk7UUFDcEJDLHlCQUF5QixFQUFFLEVBQUU7UUFDN0JDLFdBQVcsRUFBRSxFQUFFO1FBQ2ZDLFdBQVcsRUFBRSxJQUFJO1FBQ2pCQyxZQUFZLEVBQUUsSUFBSTtRQUNsQkMsZUFBZSxFQUFFO01BQ25CLENBQUM7TUFDRDFGLE1BQU0sQ0FBQzJGLGNBQWMsR0FBRyxLQUFLO01BQzdCM0YsTUFBTSxDQUFDNEYsWUFBWSxHQUFHLElBQUlDLEtBQUssQ0FBQyxDQUFDO01BRWpDLFNBQVNDLGVBQWVBLENBQUNDLENBQUMsRUFBRTtRQUMxQixPQUFPQSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFJQyxRQUFRLENBQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBSSxLQUFLLEdBQUcsQ0FBQ0EsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUlDLFFBQVEsQ0FBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO01BQ2hHO01BRUEsSUFBSVgsWUFBWSxDQUFDSSxXQUFXLEVBQUU7UUFDMUIsU0FBU1MsaUJBQWlCQSxDQUFDRixDQUFDLEVBQUU7VUFDMUIvRixNQUFNLENBQUNrRyxXQUFXLEdBQUdsRyxNQUFNLENBQUNtRyxXQUFXLENBQUMsWUFBVztZQUMvQ0osQ0FBQyxHQUFHRCxlQUFlLENBQUNDLENBQUMsQ0FBQ25DLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQ3dDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDM0NwRyxNQUFNLENBQUNlLElBQUksQ0FBQ0MsSUFBSSxDQUFDLENBQUMsYUFBYSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUrRSxDQUFDLENBQUMsQ0FBQztVQUN2RCxDQUFDLEVBQUVYLFlBQVksQ0FBQ0csV0FBVyxHQUFHLElBQUksQ0FBQztVQUVuQyxJQUFJSCxZQUFZLENBQUNLLFlBQVksRUFBRTtZQUMzQnpGLE1BQU0sQ0FBQ3FHLG1CQUFtQixHQUFHQyxVQUFVLENBQUMsWUFBVztjQUMvQ0MsYUFBYSxDQUFDdkcsTUFBTSxDQUFDa0csV0FBVyxDQUFDO1lBQ3JDLENBQUMsRUFBRWQsWUFBWSxDQUFDTSxlQUFlLEdBQUcsSUFBSSxDQUFDO1VBQzNDO1FBQ0o7UUFDQTFGLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDSyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFXO1VBQzVEMkYsaUJBQWlCLENBQUMsSUFBSSxDQUFDO1FBQzNCLENBQUMsQ0FBQztNQUNOO01BRUUsSUFBSWIsWUFBWSxDQUFDQyxjQUFjLEVBQUU7UUFDN0JyRixNQUFNLENBQUN3RyxTQUFTLEdBQUdwQixZQUFZLENBQUNFLHlCQUF5QjtRQUN6RHRGLE1BQU0sQ0FBQ3lHLFVBQVUsR0FBRyxHQUFHLEdBQUdyQixZQUFZLENBQUNFLHlCQUF5QjtRQUNoRXRGLE1BQU0sQ0FBQzRGLFlBQVksR0FBRyxJQUFJQyxLQUFLLENBQUMsQ0FBQztRQUNqQyxLQUFLLElBQUlhLEVBQUUsR0FBRyxDQUFDLEVBQUVBLEVBQUUsR0FBRzFHLE1BQU0sQ0FBQ3lHLFVBQVUsRUFBRUMsRUFBRSxFQUFFLEVBQUU7VUFDM0MxRyxNQUFNLENBQUM0RixZQUFZLENBQUNjLEVBQUUsQ0FBQyxHQUFHLENBQUMxRyxNQUFNLENBQUN3RyxTQUFTLEVBQUUsT0FBTyxDQUFDO1VBQ3JEeEcsTUFBTSxDQUFDd0csU0FBUyxHQUFHcEIsWUFBWSxDQUFDRSx5QkFBeUIsR0FBR3RGLE1BQU0sQ0FBQ3dHLFNBQVM7UUFDaEY7TUFDSjtNQUFDO01BRUQsSUFBSUcsVUFBVSxHQUFHLFNBQUFBLENBQUEsRUFBVTtRQUN6QixJQUFJdkIsWUFBWSxDQUFDQyxjQUFjLEVBQUU7VUFDN0IsSUFBSSxDQUFDckYsTUFBTSxDQUFDMkYsY0FBYyxFQUFFO1lBQ3hCM0YsTUFBTSxDQUFDZSxJQUFJLENBQUNDLElBQUksQ0FBQyxDQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQzlEaEIsTUFBTSxDQUFDMkYsY0FBYyxHQUFHLElBQUk7VUFDaEM7UUFDSjtRQUNBLElBQUlQLFlBQVksQ0FBQ0MsY0FBYyxFQUFFO1VBQzdCLElBQUl1QixJQUFJLEdBQUc1RyxNQUFNLENBQUNDLFFBQVEsQ0FBQzJHLElBQUk7WUFDM0JDLElBQUksR0FBRzdHLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDNkcsZUFBZTtVQUUxQyxJQUFJQyxjQUFjLEdBQUdDLElBQUksQ0FBQ0MsR0FBRyxDQUFFTCxJQUFJLENBQUNNLFlBQVksRUFBRU4sSUFBSSxDQUFDTyxZQUFZLEVBQ25ETixJQUFJLENBQUNPLFlBQVksRUFBRVAsSUFBSSxDQUFDSyxZQUFZLEVBQUVMLElBQUksQ0FBQ00sWUFBYSxDQUFDO1VBRXpFLEtBQUssSUFBSUUsRUFBRSxHQUFHLENBQUMsRUFBRUEsRUFBRSxHQUFHckgsTUFBTSxDQUFDNEYsWUFBWSxDQUFDbkIsTUFBTSxFQUFFNEMsRUFBRSxFQUFFLEVBQUU7WUFDcEQsSUFBS3JILE1BQU0sQ0FBQ3NILE9BQU8sR0FBR3RILE1BQU0sQ0FBQ3VILFdBQVcsSUFBSVIsY0FBYyxHQUFHL0csTUFBTSxDQUFDNEYsWUFBWSxDQUFDeUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFNckgsTUFBTSxDQUFDNEYsWUFBWSxDQUFDeUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksT0FBUSxFQUFFO2NBQ3ZJckgsTUFBTSxDQUFDNEYsWUFBWSxDQUFDeUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTTtjQUNuQ3JILE1BQU0sQ0FBQ2UsSUFBSSxDQUFDQyxJQUFJLENBQUMsQ0FBQyxhQUFhLEVBQUUsd0JBQXdCLEVBQUUsS0FBSyxFQUFFaEIsTUFBTSxDQUFDNEYsWUFBWSxDQUFDeUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFO2dCQUNsR0csY0FBYyxFQUFFO2NBQ2xCLENBQUMsQ0FBQyxDQUFDO1lBQ1A7VUFDSjtRQUNKO01BQ0osQ0FBQztNQUVEeEgsTUFBTSxDQUFDTSxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUVxRyxVQUFVLEVBQUUsSUFBSSxDQUFDO01BRW5ELENBQUMsWUFBVztRQUNWLElBQUljLEVBQUUsR0FBR3pILE1BQU0sQ0FBQ0MsUUFBUSxDQUFDVCxhQUFhLENBQUMsUUFBUSxDQUFDO1FBQ2hEaUksRUFBRSxDQUFDQyxJQUFJLEdBQUcsaUJBQWlCO1FBQzNCRCxFQUFFLENBQUNFLEtBQUssR0FBRyxJQUFJO1FBQ2ZGLEVBQUUsQ0FBQ0csR0FBRyxHQUFHLENBQUMsUUFBUSxJQUFJM0gsUUFBUSxDQUFDaUYsUUFBUSxDQUFDMkMsUUFBUSxHQUFHLGFBQWEsR0FBRyxZQUFZLElBQUksNkJBQTZCO1FBQ2hILElBQUlDLENBQUMsR0FBRzlILE1BQU0sQ0FBQ0MsUUFBUSxDQUFDOEgsb0JBQW9CLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pERCxDQUFDLENBQUNFLFVBQVUsQ0FBQ0MsWUFBWSxDQUFDUixFQUFFLEVBQUVLLENBQUMsQ0FBQztNQUNsQyxDQUFDLEVBQUUsQ0FBQztJQUNOO0lBRUEsSUFBSTlILE1BQU0sQ0FBQ2tGLFFBQVEsQ0FBQ2dELElBQUksSUFBSSxFQUFFLEVBQUU7TUFDOUIsSUFBSUMsSUFBSSxHQUFHbEksUUFBUSxDQUFDQyxhQUFhLENBQUNGLE1BQU0sQ0FBQ2tGLFFBQVEsQ0FBQ2dELElBQUksR0FBQyxVQUFVLENBQUM7TUFDbEUsSUFBSUMsSUFBSSxFQUFFO1FBQ1JuSSxNQUFNLENBQUNnQyxRQUFRLENBQUM7VUFDZEMsR0FBRyxFQUFFa0csSUFBSSxDQUFDQyxTQUFTO1VBQ25CakcsUUFBUSxFQUFFO1FBQ1osQ0FBQyxDQUFDO01BQ0o7SUFDRjtJQUVBZ0MsT0FBTyxDQUFDLEVBQUUsQ0FBQztFQUNiLENBQUMsRUFBRSxFQUFFLENBQUM7RUFFTixPQUNFN0UsS0FBQTtJQUFBNEIsU0FBQSwwQkFBZTtFQUFNLEdBQ25CNUIsS0FBQSxDQUFDK0ksZ0RBQUksUUFDSC9JLEtBQUE7SUFBQTRCLFNBQUE7RUFBQSxHQUFRSyxDQUFDLENBQUMsVUFBVSxDQUFDLGFBQWlCLENBQUMsRUFDdkNqQyxLQUFBO0lBQU1nSixJQUFJLEVBQUMsYUFBYTtJQUFDQyxPQUFPLEVBQUVoSCxDQUFDLENBQUMsa0JBQWtCLENBQUU7SUFBQUwsU0FBQTtFQUFBLENBQUUsQ0FBQyxFQUMzRDVCLEtBQUE7SUFBTWdKLElBQUksRUFBQyxVQUFVO0lBQUNDLE9BQU8sRUFBQyxnSUFBZ0k7SUFBQXJILFNBQUE7RUFBQSxDQUFFLENBQUMsRUFDaks1QixLQUFBO0lBQU1nSixJQUFJLEVBQUMsY0FBYztJQUFDQyxPQUFPLEVBQUMsU0FBUztJQUFBckgsU0FBQTtFQUFBLENBQUUsQ0FBQyxFQUM5QzVCLEtBQUE7SUFBTWdKLElBQUksRUFBQyxjQUFjO0lBQUNDLE9BQU8sRUFBQyxVQUFVO0lBQUFySCxTQUFBO0VBQUEsQ0FBRSxDQUFDLEVBQy9DNUIsS0FBQTtJQUFNZ0osSUFBSSxFQUFDLGVBQWU7SUFBQ0MsT0FBTyxFQUFFLFdBQVcsR0FBR2hILENBQUMsQ0FBQyxVQUFVLENBQUU7SUFBQUwsU0FBQTtFQUFBLENBQUUsQ0FBQyxFQUNuRTVCLEtBQUE7SUFBTWdKLElBQUksRUFBQyxxQkFBcUI7SUFBQ0MsT0FBTyxFQUFFaEgsQ0FBQyxDQUFDLGtCQUFrQixDQUFFO0lBQUFMLFNBQUE7RUFBQSxDQUFFLENBQUMsRUFDbkU1QixLQUFBO0lBQU1nSixJQUFJLEVBQUMsaUJBQWlCO0lBQUNDLE9BQU8sRUFBQyxVQUFVO0lBQUFySCxTQUFBO0VBQUEsQ0FBRSxDQUFDLEVBQ2xENUIsS0FBQTtJQUFNZ0osSUFBSSxFQUFDLGVBQWU7SUFBQ0MsT0FBTyxFQUFDLDJDQUEyQztJQUFBckgsU0FBQTtFQUFBLENBQUUsQ0FBQyxFQUNqRjVCLEtBQUE7SUFBTWtKLFFBQVEsRUFBQyxVQUFVO0lBQUNELE9BQU8sRUFBRSxXQUFXLEdBQUdoSCxDQUFDLENBQUMsVUFBVSxDQUFFO0lBQUFMLFNBQUE7RUFBQSxDQUFFLENBQUMsRUFDbEU1QixLQUFBO0lBQU1rSixRQUFRLEVBQUMsZ0JBQWdCO0lBQUNELE9BQU8sRUFBRWhILENBQUMsQ0FBQyxrQkFBa0IsQ0FBRTtJQUFBTCxTQUFBO0VBQUEsQ0FBRSxDQUFDLEVBQ2xFNUIsS0FBQTtJQUFNa0osUUFBUSxFQUFDLFVBQVU7SUFBQ0QsT0FBTyxFQUFDLDJDQUEyQztJQUFBckgsU0FBQTtFQUFBLENBQUUsQ0FBQyxFQUNoRjVCLEtBQUE7SUFBTWtKLFFBQVEsRUFBQyxTQUFTO0lBQUNELE9BQU8sRUFBQyxTQUFTO0lBQUFySCxTQUFBO0VBQUEsQ0FBRSxDQUFDLEVBQzdDNUIsS0FBQTtJQUFNa0osUUFBUSxFQUFDLFFBQVE7SUFBQ0QsT0FBTyxFQUFDLHFCQUFxQjtJQUFBckgsU0FBQTtFQUFBLENBQUUsQ0FBQyxFQUN4RDVCLEtBQUE7SUFBTWtKLFFBQVEsRUFBQyxjQUFjO0lBQUNELE9BQU8sRUFBQyxRQUFRO0lBQUFySCxTQUFBO0VBQUEsQ0FBRSxDQUFDLEVBQ2pENUIsS0FBQTtJQUFNbUosR0FBRyxFQUFDLFdBQVc7SUFBQ0MsUUFBUSxFQUFDLElBQUk7SUFBQ2pHLElBQUksRUFBQyxxQkFBcUI7SUFBQXZCLFNBQUE7RUFBQSxDQUFFLENBQUMsRUFDakU1QixLQUFBO0lBQU1tSixHQUFHLEVBQUMsV0FBVztJQUFDQyxRQUFRLEVBQUMsV0FBVztJQUFDakcsSUFBSSxFQUFDLHFCQUFxQjtJQUFBdkIsU0FBQTtFQUFBLENBQUUsQ0FBQyxFQUN4RTVCLEtBQUE7SUFBTW1KLEdBQUcsRUFBQyxXQUFXO0lBQUNDLFFBQVEsRUFBQyxJQUFJO0lBQUNqRyxJQUFJLEVBQUMsdUJBQXVCO0lBQUF2QixTQUFBO0VBQUEsQ0FBRSxDQUFDLEVBQ25FNUIsS0FBQTtJQUFNbUosR0FBRyxFQUFDLFdBQVc7SUFBQ0MsUUFBUSxFQUFDLElBQUk7SUFBQ2pHLElBQUksRUFBQyx1QkFBdUI7SUFBQXZCLFNBQUE7RUFBQSxDQUFFLENBQUMsRUFDbkU1QixLQUFBO0lBQU1tSixHQUFHLEVBQUMsV0FBVztJQUFDaEcsSUFBSSxFQUFDLHFCQUFxQjtJQUFBdkIsU0FBQTtFQUFBLENBQUUsQ0FBQyxFQUNuRDVCLEtBQUE7SUFBUW9JLElBQUksRUFBQyxxQkFBcUI7SUFBQ2lCLHVCQUF1QixFQUFFO01BQUVDLE1BQU0sRUFBRztBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsSUFBSXRHLElBQUksQ0FBQyxDQUFDLENBQUNDLFdBQVcsQ0FBQyxDQUFFO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBQVMsQ0FBRTtJQUFBckIsU0FBQTtFQUFBLENBQVMsQ0FDUixDQUFDLEVBRVA1QixLQUFBO0lBQUE0QixTQUFBO0VBQUEsR0FDRTVCLEtBQUEsQ0FBQzJELHFEQUFNLE1BQUUsQ0FBQyxFQUVWM0QsS0FBQTtJQUFLK0MsRUFBRSxFQUFDLFNBQVM7SUFBQW5CLFNBQUE7RUFBQSxHQUNmNUIsS0FBQTtJQUFBNEIsU0FBQSwwQkFBZTtFQUFVLEdBQ3ZCNUIsS0FBQTtJQUFBNEIsU0FBQSwwQkFBZTtFQUFXLEdBQ3hCNUIsS0FBQTtJQUFBNEIsU0FBQSwwQkFBZTtFQUFVLEdBQ3ZCNUIsS0FBQTtJQUE4QnNJLEdBQUcsRUFBRSwrRUFBZ0Y7SUFBQ2lCLEdBQUcsRUFBRSxlQUFnQjtJQUFDckksS0FBSyxFQUFFO01BQUVzSSxLQUFLLEVBQUUsTUFBTTtNQUFFQyxNQUFNLEVBQUU7SUFBTyxDQUFFO0lBQUE3SCxTQUFBLDBCQUFwSztFQUFjLENBQXdKLENBQUMsRUFDdEw1QixLQUFBO0lBQUE0QixTQUFBO0VBQUEsR0FBS0ssQ0FBQyxDQUFDLFVBQVUsQ0FBTSxDQUFDLEVBQ3hCakMsS0FBQTtJQUFBNEIsU0FBQSwwQkFBZTtFQUFNLEdBQ2xCd0MsTUFBTSxDQUFDbkMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUN0QixDQUFDLEVBQ05qQyxLQUFBLENBQUMwSixvRUFBa0I7SUFDakJDLE1BQU0sRUFBRTtNQUNOQyxTQUFTLEVBQUUsTUFBTTtNQUNqQkMsS0FBSyxFQUFFLFFBQVE7TUFDZkMsT0FBTyxFQUFFLElBQUk7TUFDYkMsU0FBUyxFQUFFLEVBQUU7TUFDYkMsTUFBTSxFQUFFLFFBQVE7TUFDaEIzRyxRQUFRLEVBQUUsSUFBSTtNQUNkNEcsU0FBUyxFQUFFLENBQUM7TUFDWkMsUUFBUSxFQUFFLENBQ1IsVUFBVSxFQUNWLFdBQVcsRUFDWCxRQUFRLEVBQ1IsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLENBQ1g7TUFDREMsT0FBTyxFQUFFLEVBQUU7TUFDWEMsTUFBTSxFQUFFLENBQUM7TUFDVEMsVUFBVSxFQUFFLElBQUk7TUFDaEJDLFdBQVcsRUFBRSxJQUFJO01BQ2pCQyxXQUFXLEVBQUUsSUFBSTtNQUNqQkMsSUFBSSxFQUFFLEVBQUU7TUFDUjdILEdBQUcsRUFBRSxHQUFHO01BQ1I4SCxHQUFHLEVBQUUscUJBQXFCO01BQzFCdkIsUUFBUSxFQUFFO0lBQ1o7RUFBRSxDQUNILENBQUMsRUFDRmxKLEtBQUE7SUFBTTBLLE1BQU0sRUFBQyxXQUFXO0lBQUNDLE1BQU0sRUFBQyxLQUFLO0lBQUNDLFFBQVEsRUFBRTVGLE1BQU87SUFBQXBELFNBQUE7RUFBQSxHQUNyRDVCLEtBQUE7SUFBQTRCLFNBQUEsMEJBQWU7RUFBTyxHQUNwQjVCLEtBQUE7SUFDRWdKLElBQUksRUFBQyxNQUFNO0lBQ1hqRyxFQUFFLEVBQUMsTUFBTTtJQUNUOEgsV0FBVyxFQUFDLFVBQVU7SUFDdEIzRyxLQUFLLEVBQUVVLElBQUs7SUFDWmtHLFFBQVEsRUFBR3pJLENBQUMsSUFBS3dDLE9BQU8sQ0FBQ3hDLENBQUMsQ0FBQzhCLE1BQU0sQ0FBQ0QsS0FBSyxDQUFFO0lBQ3pDNkcsT0FBTyxFQUFDLGFBQWE7SUFDckJDLFFBQVE7SUFDUixjQUFZL0ksQ0FBQyxDQUFDLGtCQUFrQixDQUFFO0lBQ2xDZ0osWUFBWSxFQUFDLEtBQUs7SUFBQXJKLFNBQUEsNEJBQ05rRCxLQUFLLEdBQUksV0FBVyxHQUFHLElBQUk7RUFBQSxDQUN4QyxDQUFDLEVBQ0Y5RSxLQUFBO0lBQUE0QixTQUFBLDBCQUFlO0VBQVUsR0FDdkI1QixLQUFBO0lBQVFvSSxJQUFJLEVBQUMsUUFBUTtJQUFBeEcsU0FBQTtFQUFBLEdBQUVLLENBQUMsQ0FBQyxlQUFlLENBQVUsQ0FDL0MsQ0FBQyxFQUNMNkMsS0FBSyxHQUFHOUUsS0FBQTtJQUErQjZCLE9BQU8sRUFBRUEsQ0FBQSxLQUFNa0QsUUFBUSxDQUFDLElBQUksQ0FBRTtJQUFBbkQsU0FBQSwwQkFBOUM7RUFBZSxHQUFpQ2tELEtBQVcsQ0FBQyxHQUFHLElBQ3BGLENBQ0QsQ0FBQyxFQUNQOUUsS0FBQTtJQUFBNEIsU0FBQSwwQkFBZTtFQUFpQixHQUM5QjVCLEtBQUE7SUFBQTRCLFNBQUEsMEJBQWdCO0VBQWMsWUFBYyxDQUFDLEVBQUMsR0FBRyxFQUNqRDVCLEtBQUE7SUFBQTRCLFNBQUEsMEJBQWdCO0VBQWUsYUFBZSxDQUFDLEVBQUMsR0FBRyxFQUNuRDVCLEtBQUE7SUFBQTRCLFNBQUEsMEJBQWdCO0VBQWdCLGNBQWdCLENBQUMsRUFBQyxHQUFHLEVBQ3JENUIsS0FBQTtJQUFBNEIsU0FBQSwwQkFBZ0I7RUFBYSxXQUFhLENBQUMsRUFBQyxHQUFHLEVBQy9DNUIsS0FBQTtJQUFBNEIsU0FBQSwwQkFBZ0I7RUFBYyxZQUFjLENBQUMsRUFBQyxHQUFHLEVBQ2pENUIsS0FBQTtJQUFBNEIsU0FBQSwwQkFBZ0I7RUFBYSxXQUFhLENBQUMsRUFBQyxHQUFHLEVBQy9DNUIsS0FBQTtJQUFBNEIsU0FBQSwwQkFBZ0I7RUFBZ0IsY0FBZ0IsQ0FBQyxFQUFDLEdBQUcsRUFDckQ1QixLQUFBO0lBQUE0QixTQUFBLDBCQUFnQjtFQUFlLGFBQWUsQ0FBQyxFQUFDLEdBQUcsRUFDbkQ1QixLQUFBO0lBQUE0QixTQUFBLDBCQUFnQjtFQUFZLFVBQVksQ0FDckMsQ0FBQyxFQUNONUIsS0FBQTtJQUFBNEIsU0FBQSwwQkFBZTtFQUFzQixHQUNuQzVCLEtBQUEsQ0FBQ2tELDBDQUFJO0lBQUNDLElBQUksRUFBQztFQUFxQixHQUFDbkQsS0FBQTtJQUFBNEIsU0FBQTtFQUFBLEdBQUlLLENBQUMsQ0FBQyx5QkFBeUIsQ0FBSyxDQUFPLENBQ3pFLENBVUYsQ0FDRixDQUNGLENBQUMsRUFDTmpDLEtBQUE7SUFBQTRCLFNBQUEsMEJBQWU7RUFBVSxHQUN2QjVCLEtBQUE7SUFBQTRCLFNBQUEsMEJBQWU7RUFBVyxHQUN4QjVCLEtBQUE7SUFBQTRCLFNBQUEsMEJBQWU7RUFBSyxDQUFFLENBQUMsRUFDckI1QixLQUFBO0lBQUE0QixTQUFBO0VBQUEsR0FBS0ssQ0FBQyxDQUFDLG1DQUFtQyxDQUFDLEVBQUNqQyxLQUFBO0lBQUE0QixTQUFBO0VBQUEsQ0FBSSxDQUFDLEVBQUNLLENBQUMsQ0FBQyxxQkFBcUIsQ0FBTSxDQUFDLEVBQ2hGakMsS0FBQTtJQUFBNEIsU0FBQTtFQUFBLEdBQ0d3QyxNQUFNLENBQUNuQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQ3JCLENBQ0YsQ0FDRixDQUFDLEVBMEZOakMsS0FBQTtJQUFBNEIsU0FBQSwwQkFBZTtFQUFVLEdBQ3ZCNUIsS0FBQTtJQUFBNEIsU0FBQSwwQkFBZTtFQUFXLEdBQ3hCNUIsS0FBQTtJQUFBNEIsU0FBQSwwQkFBZTtFQUFPLEdBQ3BCNUIsS0FBQTtJQUFtQjZCLE9BQU8sRUFBRUEsQ0FBQSxLQUFNO01BQ2hDbkIsTUFBTSxDQUFDQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQ3NLLEtBQUssQ0FBQyxDQUFDO01BQzlDeEssTUFBTSxDQUFDZ0MsUUFBUSxDQUFDO1FBQUVDLEdBQUcsRUFBRSxDQUFDO1FBQUVDLElBQUksRUFBRSxDQUFDO1FBQUVDLFFBQVEsRUFBRTtNQUFTLENBQUMsQ0FBQztJQUMxRCxDQUFFO0lBQUFqQixTQUFBLDBCQUhXO0VBQUssR0FHZEssQ0FBQyxDQUFDLG1CQUFtQixDQUFLLENBQzNCLENBQ0YsQ0FDRixDQUNGLENBQ0QsQ0FBQyxFQUVQakMsS0FBQSxDQUFDZ0MscURBQU0sTUFBRSxDQUFDLEVBRVZoQyxLQUFBLENBQUNHLG9EQUFLLE1BQUUsQ0FBQyxFQUFBSCxLQUFBLENBQUFtTCx1REFBQTtJQUFBcEksRUFBQTtFQUFBLHl0MEJBa0JOLENBQUM7QUFFVixDQUFDO0FBRUQ0QixZQUFZLENBQUN5RyxlQUFlLEdBQUcsYUFBYTtFQUMxQ0Msa0JBQWtCLEVBQUUsQ0FBQyxRQUFRO0FBQy9CLENBQUMsQ0FBQztBQUVGMUcsWUFBWSxDQUFDckIsU0FBUyxHQUFHO0VBQ3ZCckIsQ0FBQyxFQUFFc0IsaURBQVMsQ0FBQ0MsSUFBSSxDQUFDQztBQUNwQixDQUFDO0FBRWNDLDRIQUFlLENBQUMsUUFBUSxDQUFDLENBQUNpQixZQUFZLENBQUMsRTs7Ozs7Ozs7Ozs7QUNyZHRELHlDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLDZDIiwiZmlsZSI6InBhZ2VzL3VybHNob3J0ZW5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvdXJsc2hvcnRlbmVyLmpzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBOZXh0STE4TmV4dCA9IHJlcXVpcmUoJ25leHQtaTE4bmV4dCcpLmRlZmF1bHRcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gbmV3IE5leHRJMThOZXh0KHtcclxuICAgIHN0cmljdE1vZGU6IGZhbHNlLFxyXG4gICAgZGVmYXVsdExhbmd1YWdlOiAnZW4nLFxyXG4gICAgb3RoZXJMYW5ndWFnZXM6IFsnZnInLCAncHQnXSxcclxuICAgIGxvY2FsZVN1YnBhdGhzOiB7XHJcbiAgICAgICAgZnI6ICdmcicsXHJcbiAgICAgICAgcHQ6ICdwdCdcclxuICAgIH0sXHJcbiAgICBpbnRlcnBvbGF0aW9uOiB7XHJcbiAgICAgICAgZXNjYXBlVmFsdWU6IGZhbHNlXHJcbiAgICB9XHJcbn0pIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgQUQySFMgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2hpZGVCYW5uZXIsIHNldEhpZGVCYW5uZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgXHJcbiAgICB2YXIgZGVmZXJyZWRQcm9tcHQ7XHJcblxyXG4gICAgY29uc3Qgc2hvd0FkZFRvSG9tZVNjcmVlbiA9ICgpID0+IHtcclxuICAgICAgICB2YXIgYTJoc0J0biA9IHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkMmhzLWJhbm5lclwiKTtcclxuICAgICAgICBpZiAoYTJoc0J0bikge1xyXG4gICAgICAgICAgICBhMmhzQnRuLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xyXG4gICAgICAgICAgICB2YXIgYnRuID0gYTJoc0J0bi5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICBpZiAoYnRuKSBhZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkVG9Ib21lU2NyZWVuKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGFkZFRvSG9tZVNjcmVlbiA9ICgpID0+IHtcclxuICAgICAgICB2YXIgYTJoc0J0biA9IHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkMmhzLWJhbm5lclwiKTtcclxuICAgICAgICBhMmhzQnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgZGVmZXJyZWRQcm9tcHQucHJvbXB0KCk7XHJcbiAgICAgICAgZGVmZXJyZWRQcm9tcHQudXNlckNob2ljZS50aGVuKGZ1bmN0aW9uKGNob2ljZVJlc3VsdCkge1xyXG4gICAgICAgICAgICBpZiAoY2hvaWNlUmVzdWx0Lm91dGNvbWUgPT09ICdhY2NlcHRlZCcpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5fZ2FxLnB1c2goWydfdHJhY2tFdmVudCcsICdhZGRlZFRvSG9tZVNjcmVlbicsICd0cnVlJ10pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZmVycmVkUHJvbXB0ID0gbnVsbDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAnaGlkZUFEMkhTJyBpbiB3aW5kb3cubG9jYWxTdG9yYWdlKSB7XHJcbiAgICAgICAgICAgIHNldEhpZGVCYW5uZXIodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmlubmVyV2lkdGggPD0gMTA1MCkge1xyXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JlaW5zdGFsbHByb21wdCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBkZWZlcnJlZFByb21wdCA9IGU7XHJcbiAgICAgICAgICAgICAgICBzaG93QWRkVG9Ib21lU2NyZWVuKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGlmICghaGlkZUJhbm5lcikge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWQyaHMtcHJvbXB0IGFuaW1hdGVkIGZhZGVJblJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uPkluc3RhbGwgRERMVmlkIFdlYiBBcHA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImNsb3NlXCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaGlkZUFEMkhTJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SGlkZUJhbm5lcih0cnVlKTtcclxuICAgICAgICAgICAgICAgIH19Png8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQUQySFNcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBpMThuLCBMaW5rLCB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi9pMThuJztcclxuXHJcbmNvbnN0IEZvb3RlciA9ICh7IHQgfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtjb29raWVCYW5uZXJTaG93LCBzZXRDb29raWVCYW5uZXJTaG93XSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICdoaWRlQ29va2llQmFubmVyJyBpbiB3aW5kb3cubG9jYWxTdG9yYWdlKSB7XHJcbiAgICAgICAgICAgIHNldENvb2tpZUJhbm5lclNob3coZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBoaWRlQmFubmVyID0gKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaGlkZUNvb2tpZUJhbm5lcicsIHRydWUpO1xyXG4gICAgICAgIHNldENvb2tpZUJhbm5lclNob3coZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoYW5nZUxhbmcgPSAoZSwgbGFuZykgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpMThuLmNoYW5nZUxhbmd1YWdlKGxhbmcpO1xyXG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7IHRvcDogMCwgbGVmdDogMCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBsYW5ncyA9IHtcclxuICAgICAgICAnZW4nOiAnRW5nbGlzaCcsXHJcbiAgICAgICAgJ2ZyJzogJ0ZyYW7Dp2FpcycsXHJcbiAgICAgICAgJ3B0JzogJ1BvcnR1Z3XDqnMgQnJhc2lsZWlybydcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPVwiZm9vdGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvcHlcIj5cclxuICAgICAgICAgICAgICAgICAgICBDb3B5cmlnaHQgJmNvcHk7IERETFZpZCB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfS4ge3QoJ2FsbF9yaWdodHNfcmVzZXJ2ZWQnKX0uXHJcbiAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJpdmFjeS1wb2xpY3lcIj48YSB0aXRsZT17dCgncHJpdmFjeV9wb2xpY3knKSArICcgLSBERExWaWQnfT57dCgncHJpdmFjeV9wb2xpY3knKX08L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzd2l0Y2hfbGFuZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aTE4bi5sYW5ndWFnZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1wiaWNvbiBcIiArIGkxOG4ubGFuZ3VhZ2V9Pjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFuZ3NbaTE4bi5sYW5ndWFnZV19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcHVwX2xhbmdzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiIHRpdGxlPVwiRERMVmlkIC0gT25saW5lIFZpZGVvIERvd25sb2FkZXJcIiBjbGFzc05hbWU9XCJsYW5nXCIgb25DbGljaz17KGUpID0+IGNoYW5nZUxhbmcoZSwgXCJlblwiKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBlblwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbmdsaXNoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2ZyXCIgdGl0bGU9XCJERExWaWQgLSBUw6lsw6ljaGFyZ2V1ciBkZSB2aWTDqW9zIGVuIGxpZ25lXCIgY2xhc3NOYW1lPVwibGFuZ1wiIG9uQ2xpY2s9eyhlKSA9PiBjaGFuZ2VMYW5nKGUsIFwiZnJcIil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gZnJcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRnJhbsOnYWlzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL3B0XCIgdGl0bGU9XCJERExWaWQgLSBEb3dubG9hZCBkZSBWw61kZW9zIE9ubGluZVwiIGNsYXNzTmFtZT1cImxhbmdcIiBvbkNsaWNrPXsoZSkgPT4gY2hhbmdlTGFuZyhlLCBcInB0XCIpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIHB0XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBvcnR1Z3XDqnMgQnJhc2lsZWlyb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhclwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7Y29va2llQmFubmVyU2hvdyA/IChcclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJjb29raWViYW5uZXJcIiBjbGFzc05hbWU9XCJhbmltYXRlZCBmYWRlSW5VcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3QoJ2Nvb2tpZXNfbm90aWNlJyl9IDxMaW5rIGhyZWY9XCIvcHJpdmFjeS1wb2xpY3lcIj48YSB0aXRsZT17dCgncHJpdmFjeV9wb2xpY3knKSArICcgLSBERExWaWQnfT57dCgncHJpdmFjeV9wb2xpY3knKX08L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCIgb25DbGljaz17KCkgPT4gaGlkZUJhbm5lcigpfT57dCgnaV91bmRlcnN0YW5kJyl9PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbkZvb3Rlci5wcm9wVHlwZXMgPSB7XHJcbiAgICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oJ2Zvb3RlcicpKEZvb3RlcikiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IGkxOG4sIExpbmssIHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uL2kxOG4nO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKHvCoHQgfSkgPT4ge1xyXG4gICAgY29uc3QgW3Nob3dNb2JpbGVNZW51LCBzZXRTaG93TW9iaWxlTWVudV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IHVzZVN0YXRlKFwibGlnaHRcIik7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICBpZiAoXCJ0aGVtZVwiIGluIHdpbmRvdy5sb2NhbFN0b3JhZ2UpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaHRtbFwiKS5jbGFzc0xpc3QuYWRkKHdpbmRvdy5sb2NhbFN0b3JhZ2UudGhlbWUpO1xyXG4gICAgICAgICAgICAgICAgc2V0VGhlbWUod2luZG93LmxvY2FsU3RvcmFnZS50aGVtZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEgJiYgd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKS5tYXRjaGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJodG1sXCIpLmNsYXNzTGlzdC5hZGQoXCJkYXJrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRoZW1lKFwiZGFya1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCB1cGRhdGVUaGVtZSA9ICh0aGVtZSkgPT4ge1xyXG4gICAgICAgIHNldFRoZW1lKHRoZW1lKTtcclxuICAgICAgICB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImh0bWxcIikuY2xhc3NMaXN0LnJlbW92ZShcImxpZ2h0XCIpO1xyXG4gICAgICAgIHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaHRtbFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiZGFya1wiKTtcclxuICAgICAgICB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImh0bWxcIikuY2xhc3NMaXN0LmFkZCh0aGVtZSk7XHJcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgdGhlbWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBsYW5ncyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnRW5nbGlzaCcsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnZW4nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnRnJhbsOnYWlzJyxcclxuICAgICAgICAgICAgdmFsdWU6ICdmcidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdQb3J0dWd1w6pzIEJyYXNpbGVpcm8nLFxyXG4gICAgICAgICAgICB2YWx1ZTogJ3B0J1xyXG4gICAgICAgIH1cclxuICAgIF07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibG9nb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxvZ29cIiB0aXRsZT17dCgnaGVhZGxpbmUnKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBERExWaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJuYXZcIiBjbGFzc05hbWU9eyhzaG93TW9iaWxlTWVudSkgPyAnc2hvdy1tZW51JyA6IG51bGx9PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGlkPVwibGFuZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aTE4bi5sYW5ndWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkxOG4uY2hhbmdlTGFuZ3VhZ2UoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNob3dNb2JpbGVNZW51KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXt0KCdzaXRlX2xhbmd1YWdlJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYW5ncy5tYXAoKGxhbmcpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPG9wdGlvbiB2YWx1ZT17bGFuZy52YWx1ZX0ga2V5PXtsYW5nLnZhbHVlfT57bGFuZy50aXRsZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPjxhIG9uQ2xpY2s9eygpID0+IHNldFNob3dNb2JpbGVNZW51KGZhbHNlKX0gdGl0bGU9e3QoJ2hvbWUnKSArICcgLSBERExWaWQnfT57dCgnaG9tZScpfTwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3N1cHBvcnRlZC13ZWJzaXRlc1wiPjxhIG9uQ2xpY2s9eygpID0+IHNldFNob3dNb2JpbGVNZW51KGZhbHNlKX0gdGl0bGU9e3QoJ3N1cHBvcnRlZF93ZWJzaXRlcycpICsgJyAtIERETFZpZCd9Pnt0KCdzdXBwb3J0ZWRfd2Vic2l0ZXMnKX08L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi92aWRlb2Rvd25sb2FkZXJcIj48YSBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9iaWxlTWVudShmYWxzZSl9IHRpdGxlPXt0KCd2aWRlb19kb3dubG9hZGVyJyl9Pnt0KCd2aWRlb19kb3dubG9hZGVyJyl9PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91cmxzaG9ydGVuZXJcIj48YSBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9iaWxlTWVudShmYWxzZSl9IHRpdGxlPXt0KCd1cmxfc2hvcnRlbmVyJyl9Pnt0KCd1cmxfc2hvcnRlbmVyJyl9PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj48YSBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9iaWxlTWVudShmYWxzZSl9IHRpdGxlPXt0KCdhYm91dF91cycpICsgJyAtIERETFZpZCd9Pnt0KCdhYm91dF91cycpfTwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiPjxhIG9uQ2xpY2s9eygpID0+IHNldFNob3dNb2JpbGVNZW51KGZhbHNlKX0gdGl0bGU9e3QoJ2NvbnRhY3RfdXMnKX0+e3QoJ2NvbnRhY3RfdXMnKX08L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hY2NvdW50XCI+PGEgb25DbGljaz17KCkgPT4gc2V0U2hvd01vYmlsZU1lbnUoZmFsc2UpfSB0aXRsZT17dCgnbG9naW4nKX0+e3QoJ2xvZ2luJyl9PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3RlbGVncmFtLm1lL2RkbHZpZF9ib3RcIiB0aXRsZT1cIkRETFZpZCBUZWxlZ3JhbSBCb3RcIiB0YXJnZXQ9XCJfYmxhbmtcIj5UZWxlZ3JhbTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7dGhlbWUgPT09IFwibGlnaHRcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiB1cGRhdGVUaGVtZShcImRhcmtcIil9IGNsYXNzTmFtZT1cInRoZW1lIGRhcmtcIj48aT48L2k+IDxzcGFuPnt0KCdkYXJrX21vZGUnKX08L3NwYW4+PC9hPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiB1cGRhdGVUaGVtZShcImxpZ2h0XCIpfSBjbGFzc05hbWU9XCJ0aGVtZSBsaWdodFwiPjxpPjwvaT4gPHNwYW4+e3QoJ2xpZ2h0X21vZGUnKX08L3NwYW4+PC9hPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdGVsZWdyYW0ubWUvZGRsdmlkX2JvdFwiIGlkPVwidGVsZWdyYW1Cb3RcIiB0YXJnZXQ9XCJfYmxhbmtcIj5ERExWaWQgVGVsZWdyYW0gQm90PC9hPlxyXG5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1vYmlsZU1lbnVCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9iaWxlTWVudSghc2hvd01vYmlsZU1lbnUpfT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICB7c2hvd01vYmlsZU1lbnUgPyA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZU1lbnVPdmVybGF5XCIgb25DbGljaz17KCkgPT4gc2V0U2hvd01vYmlsZU1lbnUoZmFsc2UpfSAvPiA6IG51bGx9XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhclwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5IZWFkZXIucHJvcFR5cGVzID0ge1xyXG4gICAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKCdoZWFkZXInKShIZWFkZXIpIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBUcmFucyB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIHdpdGhUcmFuc2xhdGlvbiwgTGluayB9IGZyb20gJy4uL2kxOG4nO1xyXG5pbXBvcnQge1N0aWNreVNoYXJlQnV0dG9uc30gZnJvbSAnc2hhcmV0aGlzLXJlYWN0anMnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vcGFydHMvaGVhZGVyJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL3BhcnRzL2Zvb3Rlcic7XHJcbmltcG9ydCBBRDJIUyBmcm9tICcuL3BhcnRzL2FkMmhzJztcclxuLy8gaW1wb3J0IEJhbm5lciBmcm9tICcuLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9kZGx2aWQtbG9nby5wbmcnXHJcbmNvbnN0IGxudG9iciA9IChzdHIpID0+IHtcclxuICByZXR1cm4gc3RyLnNwbGl0KFwiXFxuXCIpLm1hcChmdW5jdGlvbihpdGVtLCBpKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8c3BhbiBrZXk9e2l9PntpdGVtfTxici8+PC9zcGFuPlxyXG4gICAgKVxyXG4gIH0pOyBcclxufTtcclxuXHJcbmNvbnN0IFVSTFNob3J0ZW5lciA9ICh7IHQgfSkgPT4ge1xyXG5cclxuICBjb25zdCBbbGluaywgc2V0TGlua10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3Qgc3VibWl0ID0gKGUpID0+IHtcclxuICAgIGlmICh0eXBlb2YgZSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbiAgICBzZXRFcnJvcihudWxsKTtcclxuICAgIGlmIChsaW5rICE9PSBcIlwiKSB7XHJcbiAgICAgIGNvbnN0IHN1cHBvcnRlZF9zaXRlcyA9IFtcclxuICAgICAgICBcInlvdXR1YmUuY29tXCIsXHJcbiAgICAgICAgXCJ5b3V0dS5iZVwiLFxyXG4gICAgICAgIFwidHdpdHRlci5jb21cIixcclxuICAgICAgICBcImxpbmtlZGluLmNvbVwiLFxyXG4gICAgICAgIFwiZmFjZWJvb2suY29tXCIsXHJcbiAgICAgICAgXCJmYi5jb21cIixcclxuICAgICAgICBcInRpa3Rvay5jb21cIixcclxuICAgICAgICBcInZpbWVvLmNvbVwiLFxyXG4gICAgICAgIFwicG9ybmh1Yi5jb21cIixcclxuICAgICAgICBcImluc3RhZ3JhbS5jb21cIixcclxuICAgICAgICBcInJlZGRpdC5jb21cIixcclxuICAgICAgICBcInBpbnRlcmVzdC5jb21cIixcclxuICAgICAgICBcInBpbi5pdFwiLFxyXG4gICAgICAgIFwib2sucnVcIixcclxuICAgICAgICBcInBlcmlzY29wZS50dlwiLFxyXG4gICAgICAgIFwicHNjcC50dlwiLFxyXG4gICAgICAgIFwidC5jb1wiLFxyXG4gICAgICAgIFwiZmIud2F0Y2hcIixcclxuICAgICAgICBcImZid2F0LmNoXCIsXHJcbiAgICAgICAgXCJ2ay5jb21cIixcclxuICAgICAgICBcInRyaWxsZXIuY29cIlxyXG4gICAgICBdO1xyXG4gICAgICB2YXIgc3VwcG9ydGVkID0gZmFsc2U7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3VwcG9ydGVkX3NpdGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGxpbmsudG9Mb3dlckNhc2UoKS5pbmRleE9mKHN1cHBvcnRlZF9zaXRlc1tpXSkgPj0gMCkge1xyXG4gICAgICAgICAgc3VwcG9ydGVkID0gdHJ1ZTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH0gICAgICBcclxuICAgICAgfVxyXG4gICAgICBpZiAoc3VwcG9ydGVkKSB7XHJcbiAgICAgICAgUm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgcGF0aG5hbWU6IFwiL2Rvd25sb2FkXCIsXHJcbiAgICAgICAgICBxdWVyeTogeyBsaW5rIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRFcnJvcignTGluayBub3Qgc3VwcG9ydGVkIHlldC4nKTtcclxuICAgICAgICB3aW5kb3cuX2dhcS5wdXNoKFsnX3RyYWNrRXZlbnQnLCAnbm90U3VwcG9ydGVkJywgbGlua10pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRFcnJvcignTGluayBpcyByZXF1aXJlZC4nKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoXCJ0d3R0clwiIGluIHdpbmRvdykge1xyXG4gICAgICB3aW5kb3cudHd0dHIud2lkZ2V0cy5sb2FkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ob3N0LmluZGV4T2YoXCJsb2NhbGhvc3RcIikgPCAwICYmIHdpbmRvdy5sb2NhdGlvbi5ob3N0LmluZGV4T2YoXCIxMjcuMC4wLjFcIikgPCAwKSB7XHJcbiAgICAgIHdpbmRvdy5fZ2FxID0gd2luZG93Ll9nYXEgfHwgW107XHJcbiAgICAgIHdpbmRvdy5fZ2FxLnB1c2goWydfc2V0QWNjb3VudCcsICdVQS0xNjI5MjM2NDItMSddKTtcclxuICAgICAgd2luZG93Ll9nYXEucHVzaChbJ190cmFja1BhZ2V2aWV3J10pO1xyXG5cclxuICAgICAgdmFyIGJvdW5jZUtpbGxlciA9IHtcclxuICAgICAgICB0cmFja1Njcm9sbGluZzogdHJ1ZSxcclxuICAgICAgICBzY3JvbGxpbmdQZXJjZW50YWdlTnVtYmVyOiAyNSxcclxuICAgICAgICBsb2dJbnRlcnZhbDogMTAsXHJcbiAgICAgICAgdHJhY2tFdmVudHM6IHRydWUsXHJcbiAgICAgICAgdHJhY2tNYXhUaW1lOiB0cnVlLFxyXG4gICAgICAgIHRyYWNrTWF4VGltZVNlYzogOTAwXHJcbiAgICAgIH07XHJcbiAgICAgIHdpbmRvdy5zY3JvbGxUcmFja0VuZCA9IGZhbHNlO1xyXG4gICAgICB3aW5kb3cuU2Nyb2xsTWF0cml4ID0gbmV3IEFycmF5KCk7XHJcblxyXG4gICAgICBmdW5jdGlvbiBUcmFja2luZ0xvZ1RpbWUoYSkge1xyXG4gICAgICAgIHJldHVybiBhWzBdID09IDUwID8gKHBhcnNlSW50KGFbMV0pICsgMSkgKyBcIjowMFwiIDogKGFbMV0gfHwgXCIwXCIpICsgXCI6XCIgKyAocGFyc2VJbnQoYVswXSkgKyAxMClcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGJvdW5jZUtpbGxlci50cmFja0V2ZW50cykge1xyXG4gICAgICAgICAgZnVuY3Rpb24gc3RhcnRUaW1lVHJhY2tpbmcoYSkge1xyXG4gICAgICAgICAgICAgIHdpbmRvdy5pbnRlcnZhbE9iaiA9IHdpbmRvdy5zZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgYSA9IFRyYWNraW5nTG9nVGltZShhLnNwbGl0KFwiOlwiKS5yZXZlcnNlKCkpO1xyXG4gICAgICAgICAgICAgICAgICB3aW5kb3cuX2dhcS5wdXNoKFsnX3RyYWNrRXZlbnQnLCBcIlRpbWVcIiwgXCJMT0dcIiwgYV0pO1xyXG4gICAgICAgICAgICAgIH0sIGJvdW5jZUtpbGxlci5sb2dJbnRlcnZhbCAqIDEwMDApXHJcblxyXG4gICAgICAgICAgICAgIGlmIChib3VuY2VLaWxsZXIudHJhY2tNYXhUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy50cmFja01heFRpbWVUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwod2luZG93LmludGVydmFsT2JqKTtcclxuICAgICAgICAgICAgICAgICAgfSwgYm91bmNlS2lsbGVyLnRyYWNrTWF4VGltZVNlYyAqIDEwMDApXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgd2luZG93LmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCkgeyBcclxuICAgICAgICAgICAgICBzdGFydFRpbWVUcmFja2luZyhcIjAwXCIpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYm91bmNlS2lsbGVyLnRyYWNrU2Nyb2xsaW5nKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5GcmVxdWVuY3kgPSBib3VuY2VLaWxsZXIuc2Nyb2xsaW5nUGVyY2VudGFnZU51bWJlcjtcclxuICAgICAgICAgICAgd2luZG93LlJlcGVudGFuY2UgPSAxMDAgLyBib3VuY2VLaWxsZXIuc2Nyb2xsaW5nUGVyY2VudGFnZU51bWJlcjtcclxuICAgICAgICAgICAgd2luZG93LlNjcm9sbE1hdHJpeCA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpeCA9IDA7IGl4IDwgd2luZG93LlJlcGVudGFuY2U7IGl4KyspIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5TY3JvbGxNYXRyaXhbaXhdID0gW3dpbmRvdy5GcmVxdWVuY3ksIFwiZmFsc2VcIl07XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuRnJlcXVlbmN5ID0gYm91bmNlS2lsbGVyLnNjcm9sbGluZ1BlcmNlbnRhZ2VOdW1iZXIgKyB3aW5kb3cuRnJlcXVlbmN5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIHNjcm9sbEZ1bmMgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgaWYgKGJvdW5jZUtpbGxlci50cmFja1Njcm9sbGluZykge1xyXG4gICAgICAgICAgICAgIGlmICghd2luZG93LnNjcm9sbFRyYWNrRW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5fZ2FxLnB1c2goWydfdHJhY2tFdmVudCcsIFwiU2Nyb2xsXCIsIFwiTE9HXCIsIFwic2Nyb2xsZWRcIl0pO1xyXG4gICAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVHJhY2tFbmQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChib3VuY2VLaWxsZXIudHJhY2tTY3JvbGxpbmcpIHtcclxuICAgICAgICAgICAgICB2YXIgYm9keSA9IHdpbmRvdy5kb2N1bWVudC5ib2R5LFxyXG4gICAgICAgICAgICAgICAgICBodG1sID0gd2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuXHJcbiAgICAgICAgICAgICAgdmFyIGRvY3VtZW50SGVpZ2h0ID0gTWF0aC5tYXgoIGJvZHkuc2Nyb2xsSGVpZ2h0LCBib2R5Lm9mZnNldEhlaWdodCwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWwuY2xpZW50SGVpZ2h0LCBodG1sLnNjcm9sbEhlaWdodCwgaHRtbC5vZmZzZXRIZWlnaHQgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgZm9yICh2YXIgaXogPSAwOyBpeiA8IHdpbmRvdy5TY3JvbGxNYXRyaXgubGVuZ3RoOyBpeisrKSB7XHJcbiAgICAgICAgICAgICAgICAgIGlmICgod2luZG93LnNjcm9sbFkgKyB3aW5kb3cuaW5uZXJIZWlnaHQgPj0gZG9jdW1lbnRIZWlnaHQgKiB3aW5kb3cuU2Nyb2xsTWF0cml4W2l6XVswXSAvIDEwMCkgJiYgKHdpbmRvdy5TY3JvbGxNYXRyaXhbaXpdWzFdID09IFwiZmFsc2VcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5TY3JvbGxNYXRyaXhbaXpdWzFdID0gXCJ0cnVlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuX2dhcS5wdXNoKFsnX3RyYWNrRXZlbnQnLCBcIlBlcmNlbnRhZ2UgUGFnZSBTY3JvbGxcIiwgXCJMT0dcIiwgd2luZG93LlNjcm9sbE1hdHJpeFtpel1bMF0gKyBcIiVcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub25JbnRlcmFjdGlvbjogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgIH1dKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsRnVuYywgdHJ1ZSk7XHJcblxyXG4gICAgICAoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGdhID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgICAgIGdhLnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcclxuICAgICAgICBnYS5hc3luYyA9IHRydWU7XHJcbiAgICAgICAgZ2Euc3JjID0gKCdodHRwczonID09IGRvY3VtZW50LmxvY2F0aW9uLnByb3RvY29sID8gJ2h0dHBzOi8vc3NsJyA6ICdodHRwOi8vd3d3JykgKyAnLmdvb2dsZS1hbmFseXRpY3MuY29tL2dhLmpzJztcclxuICAgICAgICB2YXIgcyA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbMF07XHJcbiAgICAgICAgcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShnYSwgcyk7XHJcbiAgICAgIH0pKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoICE9IFwiXCIpIHtcclxuICAgICAgdmFyIGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHdpbmRvdy5sb2NhdGlvbi5oYXNoK1wiLXNlY3Rpb25cIik7XHJcbiAgICAgIGlmIChlbGVtKSB7XHJcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKHtcclxuICAgICAgICAgIHRvcDogZWxlbS5vZmZzZXRUb3AsXHJcbiAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldExpbmsoXCJcIik7XHJcbiAgfSwgW10pXHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZVwiPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+e3QoJ2hlYWRsaW5lJyl9IC0gRERMVmlkPC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXt0KCdtZXRhX2Rlc2NyaXB0aW9uJyl9IC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD1cInR3aXR0ZXIgdmlkZW8gZG93bmxvYWRlcixmYWNlYm9vayB2aWRlbyBkb3dubG9hZGVyLHRpa3RvayB2aWRlbyBkb3dubG9hZGVyLGluc3RhZ3JhbSB2aWRlbyBkb3dubG9hZGVyLHlvdXR1YmUgdmlkZW8gZG93bmxvYWRlclwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5XCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpzaXRlXCIgY29udGVudD1cIkBkZGxfdmlkXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjp0aXRsZVwiIGNvbnRlbnQ9eydERExWaWQgLSAnICsgdCgnaGVhZGxpbmUnKX0gLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3QoJ21ldGFfZGVzY3JpcHRpb24nKX0gLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjcmVhdG9yXCIgY29udGVudD1cIkBkZGxfdmlkXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjppbWFnZVwiIGNvbnRlbnQ9XCJodHRwczovL2RkbHZpZC5jb20vYXNzZXRzL2ltYWdlcy9vZy5wbmc/MlwiIC8+IFxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXsnRERMVmlkIC0gJyArIHQoJ2hlYWRsaW5lJyl9IC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3QoJ21ldGFfZGVzY3JpcHRpb24nKX0gLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD1cImh0dHBzOi8vZGRsdmlkLmNvbS9hc3NldHMvaW1hZ2VzL29nLnBuZz8yXCIgLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwid2Vic2l0ZVwiIC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PVwiaHR0cHM6Ly9kZGx2aWQuY29tL1wiIC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIiBjb250ZW50PVwiRERMVmlkXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJhbHRlcm5hdGVcIiBocmVmTGFuZz1cImVuXCIgaHJlZj1cImh0dHBzOi8vZGRsdmlkLmNvbS9cIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImFsdGVybmF0ZVwiIGhyZWZMYW5nPVwieC1kZWZhdWx0XCIgaHJlZj1cImh0dHBzOi8vZGRsdmlkLmNvbS9cIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImFsdGVybmF0ZVwiIGhyZWZMYW5nPVwiZnJcIiBocmVmPVwiaHR0cHM6Ly9kZGx2aWQuY29tL2ZyXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJhbHRlcm5hdGVcIiBocmVmTGFuZz1cInB0XCIgaHJlZj1cImh0dHBzOi8vZGRsdmlkLmNvbS9wdFwiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiY2Fub25pY2FsXCIgaHJlZj1cImh0dHBzOi8vZGRsdmlkLmNvbS9cIiAvPlxyXG4gICAgICAgIDxzY3JpcHQgdHlwZT1cImFwcGxpY2F0aW9uL2xkK2pzb25cIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGBcclxue1xyXG4gIFwiQGNvbnRleHRcIjogXCJodHRwOi8vc2NoZW1hLm9yZy9cIixcclxuICBcIkB0eXBlXCI6IFwiU29mdHdhcmVBcHBsaWNhdGlvblwiLFxyXG4gIFwiYXBwbGljYXRpb25DYXRlZ29yeVwiOiBcIk11bHRpbWVkaWFBcHBsaWNhdGlvblwiLFxyXG4gIFwib3BlcmF0aW5nU3lzdGVtXCI6W1wiV2luZG93c1wiLFwibWFjT1NcIixcIkFuZHJvaWRcIixcImlPU1wiXSxcclxuICBcInNjcmVlbnNob3RcIjogXCJodHRwczovL2RkbHZpZC5jb20vYXNzZXRzL2ltYWdlcy9vZy5wbmc/MlwiLFxyXG4gIFwiYWdncmVnYXRlUmF0aW5nXCI6IHtcclxuICAgIFwiQHR5cGVcIjogXCJBZ2dyZWdhdGVSYXRpbmdcIixcclxuICAgIFwicmF0aW5nQ291bnRcIjogXCI1NTEwXCIsXHJcbiAgICBcInJldmlld0NvdW50XCI6IFwiNTUxMFwiLFxyXG4gICAgXCJiZXN0UmF0aW5nXCI6IFwiNVwiLFxyXG4gICAgXCJyYXRpbmdWYWx1ZVwiOiBcIjQuOFwiLFxyXG4gICAgXCJ3b3JzdFJhdGluZ1wiOiBcIjFcIixcclxuICAgIFwiYWx0ZXJuYXRlTmFtZVwiOiBcIkRETFZpZCBPbmxpbmUgVmlkZW8gRG93bmxvYWRlclwiLFxyXG4gICAgXCJtYWluRW50aXR5T2ZQYWdlXCI6IFwiaHR0cHM6Ly9kZGx2aWQuY29tL1wiLFxyXG4gICAgXCJuYW1lXCI6IFwiRERMVmlkXCJcclxuICB9LFxyXG4gIFwiYWx0ZXJuYXRpdmVIZWFkbGluZVwiOiBcIkRETFZpZFwiLFxyXG4gIFwiY29weXJpZ2h0WWVhclwiOiBcIiR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfVwiLFxyXG4gIFwiaGVhZGxpbmVcIjogXCJERExWaWRcIixcclxuICBcImtleXdvcmRzXCI6IFwiRERMVmlkLCBvbmxpbmUgdmlkZW8gZG93bmxvYWRlciwgdmlkZW8gZG93bmxvYWRlclwiLFxyXG4gIFwib2ZmZXJzXCI6IHtcclxuICAgIFwiQHR5cGVcIjogXCJPZmZlclwiLFxyXG4gICAgXCJwcmljZVwiOiBcIjAuMFwiLFxyXG4gICAgXCJwcmljZUN1cnJlbmN5XCI6IFwiVVNEXCIsXHJcbiAgICBcImFsdGVybmF0ZU5hbWVcIjogXCJERExWaWRcIixcclxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJERExWaWQgT25saW5lIFZpZGVvIERvd25sb2FkZXJcIixcclxuICAgIFwibWFpbkVudGl0eU9mUGFnZVwiOiBcImh0dHBzOi8vZGRsdmlkLmNvbS9cIixcclxuICAgIFwibmFtZVwiOiBcIkRETFZpZFwiXHJcbiAgfSxcclxuICBcImFsdGVybmF0ZU5hbWVcIjogXCJERExWaWRcIixcclxuICBcIm1haW5FbnRpdHlPZlBhZ2VcIjogXCJodHRwczovL2RkbHZpZC5jb20vXCIsXHJcbiAgXCJuYW1lXCI6IFwiRERMVmlkXCJcclxufVxyXG4gICAgICAgIGB9fT48L3NjcmlwdD5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPG1haW4+XHJcbiAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgaWQ9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24xXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkbGluZVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J2Jhbm5lcl9pbWFnZScgc3JjPXtcImh0dHBzOi8vcGJzLnR3aW1nLmNvbS9wcm9maWxlX2Jhbm5lcnMvMTI0ODI3MzIwMDQwNjAyODI5MC8xNjkyODAxNTgyLzEwODB4MzYwXCJ9IGFsdD17XCJJbWFnZSBDcmFzaGVkXCJ9IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogJ2F1dG8nIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8aDE+e3QoJ2hlYWRsaW5lJyl9PC9oMT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY1wiPlxyXG4gICAgICAgICAgICAgICAgICB7bG50b2JyKHQoJ3N1Yl9oZWFkbGluZScpKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPFN0aWNreVNoYXJlQnV0dG9uc1xyXG4gICAgICAgICAgICAgICAgICBjb25maWc9e3tcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbm1lbnQ6ICdsZWZ0JyxcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3NvY2lhbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBmb250X3NpemU6IDE2LFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsczogJ2NvdW50cycsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2U6ICdlbicsXHJcbiAgICAgICAgICAgICAgICAgICAgbWluX2NvdW50OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIG5ldHdvcmtzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAnd2hhdHNhcHAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgJ21lc3NlbmdlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAncmVkZGl0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICd0d2l0dGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICdmYWNlYm9vaycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAnbGlua2VkaW4nXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMixcclxuICAgICAgICAgICAgICAgICAgICByYWRpdXM6IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd190b3RhbDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBzaG93X21vYmlsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBzaG93X3RvZ2dsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBzaXplOiA0OCxcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDE2MCxcclxuICAgICAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2RkbHZpZC5jb20vJyxcclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eTogJzVmMGJlMmViN2RmNmRlMDAxMzMyMzViNSdcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIvZG93bmxvYWRcIiBtZXRob2Q9XCJnZXRcIiBvblN1Ym1pdD17c3VibWl0fT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxpbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJsaW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiaHR0cHM6Ly9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2xpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldExpbmsoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgcGF0dGVybj1cImh0dHBzPzovLy4rXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXt0KCdsaW5rX3RvX2Rvd25sb2FkJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsoZXJyb3IpID8gJ2hhcy1lcnJvcicgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb3dubG9hZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+e3QoJ2dldF90aGVfdmlkZW8nKX08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7ZXJyb3IgPyA8ZGl2IGNsYXNzTmFtZT1cImVycm9yX21lc3NhZ2VcIiBvbkNsaWNrPXsoKSA9PiBzZXRFcnJvcihudWxsKX0+e2Vycm9yfTwvZGl2PiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdXBwb3J0ZWRfc2l0ZXNcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2l0ZSB0d2l0dGVyXCI+VHdpdHRlcjwvc3Bhbj57JyAnfVxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaXRlIGZhY2Vib29rXCI+RmFjZWJvb2s8L3NwYW4+eycgJ31cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2l0ZSBpbnN0YWdyYW1cIj5JbnN0YWdyYW08L3NwYW4+eycgJ31cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2l0ZSB0aWt0b2tcIj5UaWtUb2s8L3NwYW4+eycgJ31cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2l0ZSB5b3V0dWJlXCI+WW91dHViZTwvc3Bhbj57JyAnfVxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaXRlIHJlZGRpdFwiPlJlZGRpdDwvc3Bhbj57JyAnfVxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaXRlIHBpbnRlcmVzdFwiPlBpbnRlcmVzdDwvc3Bhbj57JyAnfVxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaXRlIGxpbmtlZGluXCI+TGlua2VkSW48L3NwYW4+eycgJ31cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2l0ZSB2aW1lb1wiPlZpbWVvPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3Rfc3VwcG9ydGVkX3NpdGVzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc3VwcG9ydGVkLXdlYnNpdGVzXCI+PGE+e3QoJ2xpc3Rfc3VwcG9ydGVkX3dlYnNpdGVzJyl9PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInByb21vXCIgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMThweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIyMHB4IDBcIlxyXG4gICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ28ubm9yZHZwbi5uZXQvYWZmX2M/b2ZmZXJfaWQ9MTUmYWZmX2lkPTg3NjU4JnNvdXJjZT1kZGx2aWQuY29tXCIgc3R5bGU9e3tjb2xvcjpcIiNkNzMwMzBcIn19IHRhcmdldD1cIl9ibGFua1wiPuKaoe+4j/CflJIgRG93bmxvYWQgd2l0aCBMaWdodG5pbmcgU3BlZWQgYW5kIFVuYnJlYWthYmxlIFNlY3VyaXR5ISBHZXQgNTklIG9mZiBOb3JkVlBOICsgMyBleHRyYSBtb250aHMhIPCfkqrwn4yQPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uNVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nXCIgLz5cclxuICAgICAgICAgICAgICAgIDxoMj57dCgnYmVzdF9mcmVlX29ubGluZV92aWRlb19kb3dubG9hZGVyJyl9PGJyLz57dCgndHJ1c3RlZF9ieV9taWxsaW9ucycpfTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAge2xudG9icih0KCdob21lX2Rlc2MnKSl9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uNiBzZWN0aW9uNl8wXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGgyPnt0KCdkaXNjb3Zlcl9kZGx2aWQnKX08L2gyPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24gdmlkZW9zXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj57dCgnZG93bmxvYWRfdmlkZW9zX2Zyb21fZmFtb3VzX3NpdGVzJyl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHM2XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbiB5b3V0dWJlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj57dCgnZG93bmxvYWRfY29udmVydF95b3V0dWJlX21wMycpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHM2XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbiB0aWt0b2tcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0KCdkb3dubG9hZF90aWt0b2tfd2l0aG91dF93YXRlcm1hcmsnKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczZcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uIHN0b3JpZXNcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0KCdkb3dubG9hZF9mYWNlYm9va19pbnN0YWdyYW1fc3RvcmllcycpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3JlXCI+XHJcbiAgICAgICAgICAgICAgICB7dCgnYW5kX21hbnlfbW9yZV90b19jb21lJyl9XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpZ1wiPnt0KCd0aGlzX2lzX2p1c3RfdGhlX3N0YXJ0Jyl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbjYgc2VjdGlvbjZfMVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxoMj57dCgnaG93X3RvX2Rvd25sb2FkX2FfdmlkZW8nKX08L2gyPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24gY29weVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8cD48c3Ryb25nPnt0KCdjb3B5X3ZpZGVvX3VybCcpfTwvc3Ryb25nPjwvcD5cclxuICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zXHJcbiAgICAgICAgICAgICAgICAgICAgICBpMThuS2V5PVwiY29weV92aWRlb191cmxfZGV0YWlsc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzPXt7IGE6IDxhIC8+IH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24gcGFzdGVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPHA+PHN0cm9uZz57dCgncGFzdGVfbGluaycpfTwvc3Ryb25nPjwvcD5cclxuICAgICAgICAgICAgICAgICAgPHA+e3QoJ3Bhc3RlX2xpbmtfZGV0YWlscycpfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uIGRvd25sb2FkXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+e3QoJ2Rvd25sb2FkX3RoZV92aWRlbycpfTwvc3Ryb25nPjwvcD5cclxuICAgICAgICAgICAgICAgICAgPHA+e3QoJ2Rvd25sb2FkX3RoZV92aWRlb19kZXRhaWxzJyl9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbjdcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8aDI+e3QoJ2Rvd25sb2FkX3ZpZGVvc191c2luZ19vdXJfYm90cycpfTwvaDI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHM2XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbiB0d2l0dGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+e3QoJ3R3aXR0ZXJfYm90Jyl9PC9zdHJvbmc+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRyYW5zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGkxOG5LZXk9XCJ0d2l0dGVyX2JvdF9kZXRhaWxzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cz17eyBlbTogPGVtIC8+IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImN0YVwiPjxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL2RkbF92aWQxXCIgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3NOYW1lPVwiYnRuXCI+e3QoJ2ZvbGxvd19kZGxfdmlkJyl9PC9hPjwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczZcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uIHRlbGVncmFtXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+e3QoJ3RlbGVncmFtX2JvdCcpfTwvc3Ryb25nPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGkxOG5LZXk9XCJ0ZWxlZ3JhbV9ib3RfZGV0YWlsc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cz17eyBlbTogPGVtIC8+IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY3RhXCI+PGEgaHJlZj1cImh0dHBzOi8vdGVsZWdyYW0ubWUvZGRsdmlkX2JvdFwiIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzTmFtZT1cImJ0blwiPnt0KCdzZW5kX21lc3NhZ2VfdG9fZGRsdmlkX2JvdCcpfTwvYT48L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb244XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGFydFwiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuXCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsaW5rXCIpLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7IHRvcDogMCwgbGVmdDogMCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xyXG4gICAgICAgICAgICAgICAgfX0+e3QoJ3N0YXJ0X2Rvd25sb2FkaW5nJyl9PC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L21haW4+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICBcclxuICAgICAgPEFEMkhTIC8+XHJcblxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgIGh0bWwsXHJcbiAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiUGxleFwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sIE94eWdlbixcclxuICAgICAgICAgICAgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAqIHtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICo6Zm9jdXMge1xyXG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuVVJMU2hvcnRlbmVyLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+ICh7XHJcbiAgbmFtZXNwYWNlc1JlcXVpcmVkOiBbJ2NvbW1vbiddLFxyXG59KVxyXG5cclxuVVJMU2hvcnRlbmVyLnByb3BUeXBlcyA9IHtcclxuICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oJ2NvbW1vbicpKFVSTFNob3J0ZW5lcikiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWkxOG5leHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaTE4bmV4dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzaGFyZXRoaXMtcmVhY3Rqc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3N0eWxlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=