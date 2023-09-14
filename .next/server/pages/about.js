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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/about.js");
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

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _parts_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parts/header */ "./pages/parts/header.js");
/* harmony import */ var _parts_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parts/footer */ "./pages/parts/footer.js");
/* harmony import */ var _parts_ad2hs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parts/ad2hs */ "./pages/parts/ad2hs.js");
/* harmony import */ var _public_static_locales_en_about_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/static/locales/en/about.json */ "./public/static/locales/en/about.json");
var _public_static_locales_en_about_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../public/static/locales/en/about.json */ "./public/static/locales/en/about.json", 1);




var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








const About = ({
  t
}) => {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (window.location.host.indexOf("localhost") < 0 && window.location.host.indexOf("127.0.0.1") < 0) {
      window._gaq = window._gaq || [];
      window._gaq.push(['_setAccount', 'UA-162923642-1']);
      window._gaq.push(['_trackPageview']);
      (function () {
        var ga = window.document.createElement('script');
        ga.type = 'text/javascript';
        ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = window.document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(ga, s);
      })();
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);
  return __jsx("div", {
    id: "contact",
    className: "jsx-3105550290"
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("title", {
    className: "jsx-3105550290"
  }, t('about_us'), " - DDLVid"), __jsx("meta", {
    name: "description",
    content: t('meta_description'),
    className: "jsx-3105550290"
  }), __jsx("meta", {
    name: "twitter:card",
    content: "summary",
    className: "jsx-3105550290"
  }), __jsx("meta", {
    name: "twitter:site",
    content: "@ddl_vid",
    className: "jsx-3105550290"
  }), __jsx("meta", {
    name: "twitter:title",
    content: 'DDLVid - ' + t('about_us'),
    className: "jsx-3105550290"
  }), __jsx("meta", {
    name: "twitter:description",
    content: t('meta_description'),
    className: "jsx-3105550290"
  }), __jsx("meta", {
    name: "twitter:creator",
    content: "@ddl_vid",
    className: "jsx-3105550290"
  }), __jsx("meta", {
    name: "twitter:image",
    content: "https://ddlvid.com/assets/images/og.png?2",
    className: "jsx-3105550290"
  }), __jsx("meta", {
    property: "og:title",
    content: 'DDLVid - ' + t('about_us'),
    className: "jsx-3105550290"
  }), __jsx("meta", {
    property: "og:description",
    content: t('meta_description'),
    className: "jsx-3105550290"
  }), __jsx("meta", {
    property: "og:image",
    content: "https://ddlvid.com/assets/images/og.png?2",
    className: "jsx-3105550290"
  }), __jsx("meta", {
    property: "og:type",
    content: "website",
    className: "jsx-3105550290"
  }), __jsx("meta", {
    property: "og:url",
    content: "https://ddlvid.com/contact",
    className: "jsx-3105550290"
  }), __jsx("meta", {
    property: "og:site_name",
    content: "DDLVid",
    className: "jsx-3105550290"
  }), __jsx("link", {
    rel: "alternate",
    hrefLang: "en",
    href: "https://ddlvid.com/",
    className: "jsx-3105550290"
  }), __jsx("link", {
    rel: "alternate",
    hrefLang: "x-default",
    href: "https://ddlvid.com/contact",
    className: "jsx-3105550290"
  }), __jsx("link", {
    rel: "alternate",
    hrefLang: "en-au",
    href: "https://ddlvid.com/contact",
    className: "jsx-3105550290"
  }), __jsx("link", {
    rel: "alternate",
    hrefLang: "en-in",
    href: "https://ddlvid.com/contact",
    className: "jsx-3105550290"
  }), __jsx("link", {
    rel: "alternate",
    hrefLang: "en-br",
    href: "https://ddlvid.com/contact",
    className: "jsx-3105550290"
  }), __jsx("link", {
    rel: "alternate",
    hrefLang: "en-co",
    href: "https://ddlvid.com/contact",
    className: "jsx-3105550290"
  }), __jsx("link", {
    rel: "alternate",
    hrefLang: "en-mx",
    href: "https://ddlvid.com/contact",
    className: "jsx-3105550290"
  }), __jsx("link", {
    rel: "alternate",
    hrefLang: "en-pe",
    href: "https://ddlvid.com/contact",
    className: "jsx-3105550290"
  }), __jsx("link", {
    rel: "alternate",
    hrefLang: "fr",
    href: "https://ddlvid.com/fr/contact",
    className: "jsx-3105550290"
  }), __jsx("link", {
    rel: "alternate",
    hrefLang: "pt",
    href: "https://ddlvid.com/pt/contact",
    className: "jsx-3105550290"
  }), __jsx("link", {
    rel: "canonical",
    href: "https://ddlvid.com/contact",
    className: "jsx-3105550290"
  })), __jsx("main", {
    className: "jsx-3105550290"
  }, __jsx(_parts_header__WEBPACK_IMPORTED_MODULE_5__["default"], null), __jsx("div", {
    id: "content",
    className: "jsx-3105550290"
  }, __jsx("div", {
    id: "pageContent",
    className: "jsx-3105550290" + " " + "container"
  }, __jsx("h1", {
    className: "jsx-3105550290"
  }, _public_static_locales_en_about_json__WEBPACK_IMPORTED_MODULE_8__.about_us), __jsx("p", {
    className: "jsx-3105550290" + " " + "sub_title"
  }, _public_static_locales_en_about_json__WEBPACK_IMPORTED_MODULE_8__.meta_description)), __jsx("div", {
    className: "jsx-3105550290" + " " + "responsive-container-block bigContainer"
  }, __jsx("div", {
    className: "jsx-3105550290" + " " + "responsive-container-block Container"
  }, __jsx("img", {
    src: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/eaboutus1.svg",
    className: "jsx-3105550290" + " " + "mainImg"
  }), __jsx("div", {
    className: "jsx-3105550290" + " " + "allText aboveText"
  }, __jsx("p", {
    className: "jsx-3105550290" + " " + "text-blk headingText"
  }, "Our Mission"), __jsx("p", {
    className: "jsx-3105550290" + " " + "text-blk subHeadingText"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit."), __jsx("p", {
    className: "jsx-3105550290" + " " + "text-blk description"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum pulvinar ullamcorper suspendisse ac eget. Pellentesque tempus leo in ullamcorper quis vestibulum ligula elementum ut."), __jsx("button", {
    className: "jsx-3105550290" + " " + "explore"
  }, "Explore"))), __jsx("div", {
    className: "jsx-3105550290" + " " + "responsive-container-block Container bottomContainer"
  }, __jsx("img", {
    src: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/xpraup2.svg",
    className: "jsx-3105550290" + " " + "mainImg"
  }), __jsx("div", {
    className: "jsx-3105550290" + " " + "allText bottomText"
  }, __jsx("p", {
    className: "jsx-3105550290" + " " + "text-blk headingText"
  }, "Our Vision"), __jsx("p", {
    className: "jsx-3105550290" + " " + "text-blk subHeadingText"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit."), __jsx("p", {
    className: "jsx-3105550290" + " " + "text-blk description"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum pulvinar ullamcorper suspendisse ac eget. Pellentesque tempus leo in ullamcorper quis vestibulum ligula elementum ut."), __jsx("button", {
    className: "jsx-3105550290" + " " + "explore"
  }, "Explore")))))), __jsx(_parts_footer__WEBPACK_IMPORTED_MODULE_6__["default"], null), __jsx(_parts_ad2hs__WEBPACK_IMPORTED_MODULE_7__["default"], null), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3105550290"
  }, "html,body{padding:0;margin:0;font-family:\"Plex\",-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen, Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;}*{box-sizing:border-box;}*:focus{outline:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxDbGllbnRzIFBhbmVsXFxXZWIgRGV2ZWxvcG1lbnRcXGRkbHZpZDFvbGRcXHBhZ2VzXFxhYm91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RytCLEFBSTJCLEFBT1ksQUFHVCxVQVRKLEdBVVQsTUFSd0UsR0FLeEUseUlBSkEiLCJmaWxlIjoiRDpcXENsaWVudHMgUGFuZWxcXFdlYiBEZXZlbG9wbWVudFxcZGRsdmlkMW9sZFxccGFnZXNcXGFib3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICcuLi9pMThuJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL3BhcnRzL2hlYWRlcic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9wYXJ0cy9mb290ZXInO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQUQySFMgZnJvbSAnLi9wYXJ0cy9hZDJocyc7XHJcbmltcG9ydCBBYm91dFVzSnNvbiBmcm9tICcuLi9wdWJsaWMvc3RhdGljL2xvY2FsZXMvZW4vYWJvdXQuanNvbidcclxuY29uc3QgQWJvdXQgPSAoeyB0IH0pID0+IHtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaG9zdC5pbmRleE9mKFwibG9jYWxob3N0XCIpIDwgMCAmJiB3aW5kb3cubG9jYXRpb24uaG9zdC5pbmRleE9mKFwiMTI3LjAuMC4xXCIpIDwgMCkge1xyXG4gICAgICAgICAgICB3aW5kb3cuX2dhcSA9IHdpbmRvdy5fZ2FxIHx8IFtdO1xyXG4gICAgICAgICAgICB3aW5kb3cuX2dhcS5wdXNoKFsnX3NldEFjY291bnQnLCAnVUEtMTYyOTIzNjQyLTEnXSk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5fZ2FxLnB1c2goWydfdHJhY2tQYWdldmlldyddKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGdhID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgICAgICAgICAgICAgZ2EudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xyXG4gICAgICAgICAgICAgICAgZ2EuYXN5bmMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZ2Euc3JjID0gKCdodHRwczonID09IGRvY3VtZW50LmxvY2F0aW9uLnByb3RvY29sID8gJ2h0dHBzOi8vc3NsJyA6ICdodHRwOi8vd3d3JykgKyAnLmdvb2dsZS1hbmFseXRpY3MuY29tL2dhLmpzJztcclxuICAgICAgICAgICAgICAgIHZhciBzID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKVswXTtcclxuICAgICAgICAgICAgICAgIHMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZ2EsIHMpO1xyXG4gICAgICAgICAgICB9KSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IDAsIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD1cImNvbnRhY3RcIj5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+e3QoJ2Fib3V0X3VzJyl9IC0gRERMVmlkPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3QoJ21ldGFfZGVzY3JpcHRpb24nKX0gLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpzaXRlXCIgY29udGVudD1cIkBkZGxfdmlkXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnRpdGxlXCIgY29udGVudD17J0RETFZpZCAtICcgKyB0KCdhYm91dF91cycpfSAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6ZGVzY3JpcHRpb25cIiBjb250ZW50PXt0KCdtZXRhX2Rlc2NyaXB0aW9uJyl9IC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjcmVhdG9yXCIgY29udGVudD1cIkBkZGxfdmlkXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmltYWdlXCIgY29udGVudD1cImh0dHBzOi8vZGRsdmlkLmNvbS9hc3NldHMvaW1hZ2VzL29nLnBuZz8yXCIgLz4gXHJcbiAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17J0RETFZpZCAtICcgKyB0KCdhYm91dF91cycpfSAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3QoJ21ldGFfZGVzY3JpcHRpb24nKX0gLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PVwiaHR0cHM6Ly9kZGx2aWQuY29tL2Fzc2V0cy9pbWFnZXMvb2cucG5nPzJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PVwiaHR0cHM6Ly9kZGx2aWQuY29tL2NvbnRhY3RcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIiBjb250ZW50PVwiRERMVmlkXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImFsdGVybmF0ZVwiIGhyZWZMYW5nPVwiZW5cIiBocmVmPVwiaHR0cHM6Ly9kZGx2aWQuY29tL1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJhbHRlcm5hdGVcIiBocmVmTGFuZz1cIngtZGVmYXVsdFwiIGhyZWY9XCJodHRwczovL2RkbHZpZC5jb20vY29udGFjdFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJhbHRlcm5hdGVcIiBocmVmTGFuZz1cImVuLWF1XCIgaHJlZj1cImh0dHBzOi8vZGRsdmlkLmNvbS9jb250YWN0XCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImFsdGVybmF0ZVwiIGhyZWZMYW5nPVwiZW4taW5cIiBocmVmPVwiaHR0cHM6Ly9kZGx2aWQuY29tL2NvbnRhY3RcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiYWx0ZXJuYXRlXCIgaHJlZkxhbmc9XCJlbi1iclwiIGhyZWY9XCJodHRwczovL2RkbHZpZC5jb20vY29udGFjdFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJhbHRlcm5hdGVcIiBocmVmTGFuZz1cImVuLWNvXCIgaHJlZj1cImh0dHBzOi8vZGRsdmlkLmNvbS9jb250YWN0XCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImFsdGVybmF0ZVwiIGhyZWZMYW5nPVwiZW4tbXhcIiBocmVmPVwiaHR0cHM6Ly9kZGx2aWQuY29tL2NvbnRhY3RcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiYWx0ZXJuYXRlXCIgaHJlZkxhbmc9XCJlbi1wZVwiIGhyZWY9XCJodHRwczovL2RkbHZpZC5jb20vY29udGFjdFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJhbHRlcm5hdGVcIiBocmVmTGFuZz1cImZyXCIgaHJlZj1cImh0dHBzOi8vZGRsdmlkLmNvbS9mci9jb250YWN0XCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImFsdGVybmF0ZVwiIGhyZWZMYW5nPVwicHRcIiBocmVmPVwiaHR0cHM6Ly9kZGx2aWQuY29tL3B0L2NvbnRhY3RcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiY2Fub25pY2FsXCIgaHJlZj1cImh0dHBzOi8vZGRsdmlkLmNvbS9jb250YWN0XCIgLz4gICAgXHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwYWdlQ29udGVudFwiIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+e0Fib3V0VXNKc29uLmFib3V0X3VzfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN1Yl90aXRsZVwiPntBYm91dFVzSnNvbi5tZXRhX2Rlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3BvbnNpdmUtY29udGFpbmVyLWJsb2NrIGJpZ0NvbnRhaW5lclwiPlxyXG4gIDxkaXYgY2xhc3NOYW1lPVwicmVzcG9uc2l2ZS1jb250YWluZXItYmxvY2sgQ29udGFpbmVyXCI+XHJcbiAgICA8aW1nIGNsYXNzTmFtZT1cIm1haW5JbWdcIiBzcmM9XCJodHRwczovL3dvcmtpay13aWRnZXQtYXNzZXRzLnMzLmFtYXpvbmF3cy5jb20vd2lkZ2V0LWFzc2V0cy9pbWFnZXMvZWFib3V0dXMxLnN2Z1wiIC8+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFsbFRleHQgYWJvdmVUZXh0XCI+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmxrIGhlYWRpbmdUZXh0XCI+XHJcbiAgICAgICAgT3VyIE1pc3Npb25cclxuICAgICAgPC9wPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJsayBzdWJIZWFkaW5nVGV4dFwiPlxyXG4gICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuXHJcbiAgICAgIDwvcD5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ibGsgZGVzY3JpcHRpb25cIj5cclxuICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBGZXJtZW50dW0gcHVsdmluYXIgdWxsYW1jb3JwZXIgc3VzcGVuZGlzc2UgYWMgZWdldC4gUGVsbGVudGVzcXVlIHRlbXB1cyBsZW8gaW4gdWxsYW1jb3JwZXIgcXVpcyB2ZXN0aWJ1bHVtIGxpZ3VsYSBlbGVtZW50dW0gdXQuXHJcbiAgICAgIDwvcD5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJleHBsb3JlXCI+XHJcbiAgICAgICAgRXhwbG9yZVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3NOYW1lPVwicmVzcG9uc2l2ZS1jb250YWluZXItYmxvY2sgQ29udGFpbmVyIGJvdHRvbUNvbnRhaW5lclwiPlxyXG4gICAgPGltZyBjbGFzc05hbWU9XCJtYWluSW1nXCIgc3JjPVwiaHR0cHM6Ly93b3JraWstd2lkZ2V0LWFzc2V0cy5zMy5hbWF6b25hd3MuY29tL3dpZGdldC1hc3NldHMvaW1hZ2VzL3hwcmF1cDIuc3ZnXCIgLz5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxsVGV4dCBib3R0b21UZXh0XCI+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmxrIGhlYWRpbmdUZXh0XCI+XHJcbiAgICAgICAgT3VyIFZpc2lvblxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmxrIHN1YkhlYWRpbmdUZXh0XCI+XHJcbiAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC5cclxuICAgICAgPC9wPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJsayBkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEZlcm1lbnR1bSBwdWx2aW5hciB1bGxhbWNvcnBlciBzdXNwZW5kaXNzZSBhYyBlZ2V0LiBQZWxsZW50ZXNxdWUgdGVtcHVzIGxlbyBpbiB1bGxhbWNvcnBlciBxdWlzIHZlc3RpYnVsdW0gbGlndWxhIGVsZW1lbnR1bSB1dC5cclxuICAgICAgPC9wPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImV4cGxvcmVcIj5cclxuICAgICAgICBFeHBsb3JlXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxGb290ZXIgLz5cclxuXHJcbiAgICAgICAgICAgIDxBRDJIUyAvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgICAgIGh0bWwsXHJcbiAgICAgICAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJQbGV4XCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90bywgT3h5Z2VuLFxyXG4gICAgICAgICAgICAgICAgICAgIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICoge1xyXG4gICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICo6Zm9jdXMge1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5BYm91dC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiAoe1xyXG4gICAgbmFtZXNwYWNlc1JlcXVpcmVkOiBbJ2NvbnRhY3QnXSxcclxufSlcclxuXHJcbkFib3V0LnByb3BUeXBlcyA9IHtcclxuICAgIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbignY29udGFjdCcpKEFib3V0KSJdfQ== */\n/*@ sourceURL=D:\\\\Clients Panel\\\\Web Development\\\\ddlvid1old\\\\pages\\\\about.js */"));
};
About.getInitialProps = async () => ({
  namespacesRequired: ['contact']
});
About.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_4__["withTranslation"])('contact')(About));

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

/***/ "./public/static/locales/en/about.json":
/*!*********************************************!*\
  !*** ./public/static/locales/en/about.json ***!
  \*********************************************/
/*! exports provided: about_us, meta_description, about_us_sec_title, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"about_us\":\"About Us\",\"meta_description\":\"The World's Safest Online Video Downloader Download from all major platforms & save your videos in MP3 and MP4\",\"about_us_sec_title\":\"DDLVid\"}");

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

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaTE4bi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hYm91dC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9wYXJ0cy9hZDJocy5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9wYXJ0cy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcGFydHMvaGVhZGVyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtaTE4bmV4dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1qc3gvc3R5bGVcIiJdLCJuYW1lcyI6WyJOZXh0STE4TmV4dCIsInJlcXVpcmUiLCJkZWZhdWx0IiwibW9kdWxlIiwiZXhwb3J0cyIsInN0cmljdE1vZGUiLCJkZWZhdWx0TGFuZ3VhZ2UiLCJvdGhlckxhbmd1YWdlcyIsImxvY2FsZVN1YnBhdGhzIiwiZnIiLCJwdCIsImludGVycG9sYXRpb24iLCJlc2NhcGVWYWx1ZSIsIl9fanN4IiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiQWJvdXQiLCJ0IiwidXNlRWZmZWN0Iiwid2luZG93IiwibG9jYXRpb24iLCJob3N0IiwiaW5kZXhPZiIsIl9nYXEiLCJwdXNoIiwiZ2EiLCJkb2N1bWVudCIsInR5cGUiLCJhc3luYyIsInNyYyIsInByb3RvY29sIiwicyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJpZCIsImNsYXNzTmFtZSIsIkhlYWQiLCJuYW1lIiwiY29udGVudCIsInByb3BlcnR5IiwicmVsIiwiaHJlZkxhbmciLCJocmVmIiwiSGVhZGVyIiwiQWJvdXRVc0pzb24iLCJhYm91dF91cyIsIm1ldGFfZGVzY3JpcHRpb24iLCJGb290ZXIiLCJBRDJIUyIsIl9KU1hTdHlsZSIsImdldEluaXRpYWxQcm9wcyIsIm5hbWVzcGFjZXNSZXF1aXJlZCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwid2l0aFRyYW5zbGF0aW9uIiwiaGlkZUJhbm5lciIsInNldEhpZGVCYW5uZXIiLCJ1c2VTdGF0ZSIsImRlZmVycmVkUHJvbXB0Iiwic2hvd0FkZFRvSG9tZVNjcmVlbiIsImEyaHNCdG4iLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwiYWRkIiwiYnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFkZFRvSG9tZVNjcmVlbiIsInN0eWxlIiwiZGlzcGxheSIsInByb21wdCIsInVzZXJDaG9pY2UiLCJ0aGVuIiwiY2hvaWNlUmVzdWx0Iiwib3V0Y29tZSIsIm9uQ2xpY2siLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiY29va2llQmFubmVyU2hvdyIsInNldENvb2tpZUJhbm5lclNob3ciLCJjaGFuZ2VMYW5nIiwiZSIsImxhbmciLCJwcmV2ZW50RGVmYXVsdCIsImkxOG4iLCJjaGFuZ2VMYW5ndWFnZSIsImxlZnQiLCJsYW5ncyIsIkRhdGUiLCJnZXRGdWxsWWVhciIsIkxpbmsiLCJ0aXRsZSIsImxhbmd1YWdlIiwic2hvd01vYmlsZU1lbnUiLCJzZXRTaG93TW9iaWxlTWVudSIsInRoZW1lIiwic2V0VGhlbWUiLCJ1cGRhdGVUaGVtZSIsInJlbW92ZSIsInZhbHVlIiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNB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YUFBYTtJQUFDbUUsTUFBTSxFQUFDO0VBQVEsd0JBQXVCLENBQUMsRUFFakc1RixLQUFBO0lBQU0wQixTQUFTLEVBQUMsa0JBQWtCO0lBQUN5QyxPQUFPLEVBQUVBLENBQUEsS0FBTW1CLGlCQUFpQixDQUFDLENBQUNELGNBQWM7RUFBRSxDQUFPLENBQUMsRUFDNUZBLGNBQWMsR0FBR3JGLEtBQUE7SUFBSzBCLFNBQVMsRUFBQyxtQkFBbUI7SUFBQ3lDLE9BQU8sRUFBRUEsQ0FBQSxLQUFNbUIsaUJBQWlCLENBQUMsS0FBSztFQUFFLENBQUUsQ0FBQyxHQUFHLElBQUksRUFFdkd0RixLQUFBO0lBQUswQixTQUFTLEVBQUM7RUFBTyxDQUFFLENBQ3ZCLENBQ0osQ0FBQztBQUVkLENBQUM7QUFFRFEsTUFBTSxDQUFDUyxTQUFTLEdBQUc7RUFDZnZDLENBQUMsRUFBRXdDLGlEQUFTLENBQUNDLElBQUksQ0FBQ0M7QUFDdEIsQ0FBQztBQUVjQyw0SEFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDYixNQUFNLENBQUMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNIaEQseUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNkMiLCJmaWxlIjoicGFnZXMvYWJvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2Fib3V0LmpzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBOZXh0STE4TmV4dCA9IHJlcXVpcmUoJ25leHQtaTE4bmV4dCcpLmRlZmF1bHRcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gbmV3IE5leHRJMThOZXh0KHtcclxuICAgIHN0cmljdE1vZGU6IGZhbHNlLFxyXG4gICAgZGVmYXVsdExhbmd1YWdlOiAnZW4nLFxyXG4gICAgb3RoZXJMYW5ndWFnZXM6IFsnZnInLCAncHQnXSxcclxuICAgIGxvY2FsZVN1YnBhdGhzOiB7XHJcbiAgICAgICAgZnI6ICdmcicsXHJcbiAgICAgICAgcHQ6ICdwdCdcclxuICAgIH0sXHJcbiAgICBpbnRlcnBvbGF0aW9uOiB7XHJcbiAgICAgICAgZXNjYXBlVmFsdWU6IGZhbHNlXHJcbiAgICB9XHJcbn0pIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICcuLi9pMThuJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL3BhcnRzL2hlYWRlcic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9wYXJ0cy9mb290ZXInO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQUQySFMgZnJvbSAnLi9wYXJ0cy9hZDJocyc7XHJcbmltcG9ydCBBYm91dFVzSnNvbiBmcm9tICcuLi9wdWJsaWMvc3RhdGljL2xvY2FsZXMvZW4vYWJvdXQuanNvbidcclxuY29uc3QgQWJvdXQgPSAoeyB0IH0pID0+IHtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaG9zdC5pbmRleE9mKFwibG9jYWxob3N0XCIpIDwgMCAmJiB3aW5kb3cubG9jYXRpb24uaG9zdC5pbmRleE9mKFwiMTI3LjAuMC4xXCIpIDwgMCkge1xyXG4gICAgICAgICAgICB3aW5kb3cuX2dhcSA9IHdpbmRvdy5fZ2FxIHx8IFtdO1xyXG4gICAgICAgICAgICB3aW5kb3cuX2dhcS5wdXNoKFsnX3NldEFjY291bnQnLCAnVUEtMTYyOTIzNjQyLTEnXSk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5fZ2FxLnB1c2goWydfdHJhY2tQYWdldmlldyddKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGdhID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgICAgICAgICAgICAgZ2EudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xyXG4gICAgICAgICAgICAgICAgZ2EuYXN5bmMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZ2Euc3JjID0gKCdodHRwczonID09IGRvY3VtZW50LmxvY2F0aW9uLnByb3RvY29sID8gJ2h0dHBzOi8vc3NsJyA6ICdodHRwOi8vd3d3JykgKyAnLmdvb2dsZS1hbmFseXRpY3MuY29tL2dhLmpzJztcclxuICAgICAgICAgICAgICAgIHZhciBzID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKVswXTtcclxuICAgICAgICAgICAgICAgIHMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZ2EsIHMpO1xyXG4gICAgICAgICAgICB9KSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IDAsIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD1cImNvbnRhY3RcIj5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+e3QoJ2Fib3V0X3VzJyl9IC0gRERMVmlkPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3QoJ21ldGFfZGVzY3JpcHRpb24nKX0gLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpzaXRlXCIgY29udGVudD1cIkBkZGxfdmlkXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnRpdGxlXCIgY29udGVudD17J0RETFZpZCAtICcgKyB0KCdhYm91dF91cycpfSAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6ZGVzY3JpcHRpb25cIiBjb250ZW50PXt0KCdtZXRhX2Rlc2NyaXB0aW9uJyl9IC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjcmVhdG9yXCIgY29udGVudD1cIkBkZGxfdmlkXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmltYWdlXCIgY29udGVudD1cImh0dHBzOi8vZGRsdmlkLmNvbS9hc3NldHMvaW1hZ2VzL29nLnBuZz8yXCIgLz4gXHJcbiAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17J0RETFZpZCAtICcgKyB0KCdhYm91dF91cycpfSAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3QoJ21ldGFfZGVzY3JpcHRpb24nKX0gLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PVwiaHR0cHM6Ly9kZGx2aWQuY29tL2Fzc2V0cy9pbWFnZXMvb2cucG5nPzJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PVwiaHR0cHM6Ly9kZGx2aWQuY29tL2NvbnRhY3RcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIiBjb250ZW50PVwiRERMVmlkXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImFsdGVybmF0ZVwiIGhyZWZMYW5nPVwiZW5cIiBocmVmPVwiaHR0cHM6Ly9kZGx2aWQuY29tL1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJhbHRlcm5hdGVcIiBocmVmTGFuZz1cIngtZGVmYXVsdFwiIGhyZWY9XCJodHRwczovL2RkbHZpZC5jb20vY29udGFjdFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJhbHRlcm5hdGVcIiBocmVmTGFuZz1cImVuLWF1XCIgaHJlZj1cImh0dHBzOi8vZGRsdmlkLmNvbS9jb250YWN0XCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImFsdGVybmF0ZVwiIGhyZWZMYW5nPVwiZW4taW5cIiBocmVmPVwiaHR0cHM6Ly9kZGx2aWQuY29tL2NvbnRhY3RcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiYWx0ZXJuYXRlXCIgaHJlZkxhbmc9XCJlbi1iclwiIGhyZWY9XCJodHRwczovL2RkbHZpZC5jb20vY29udGFjdFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJhbHRlcm5hdGVcIiBocmVmTGFuZz1cImVuLWNvXCIgaHJlZj1cImh0dHBzOi8vZGRsdmlkLmNvbS9jb250YWN0XCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImFsdGVybmF0ZVwiIGhyZWZMYW5nPVwiZW4tbXhcIiBocmVmPVwiaHR0cHM6Ly9kZGx2aWQuY29tL2NvbnRhY3RcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiYWx0ZXJuYXRlXCIgaHJlZkxhbmc9XCJlbi1wZVwiIGhyZWY9XCJodHRwczovL2RkbHZpZC5jb20vY29udGFjdFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJhbHRlcm5hdGVcIiBocmVmTGFuZz1cImZyXCIgaHJlZj1cImh0dHBzOi8vZGRsdmlkLmNvbS9mci9jb250YWN0XCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImFsdGVybmF0ZVwiIGhyZWZMYW5nPVwicHRcIiBocmVmPVwiaHR0cHM6Ly9kZGx2aWQuY29tL3B0L2NvbnRhY3RcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiY2Fub25pY2FsXCIgaHJlZj1cImh0dHBzOi8vZGRsdmlkLmNvbS9jb250YWN0XCIgLz4gICAgXHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwYWdlQ29udGVudFwiIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+e0Fib3V0VXNKc29uLmFib3V0X3VzfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN1Yl90aXRsZVwiPntBYm91dFVzSnNvbi5tZXRhX2Rlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3BvbnNpdmUtY29udGFpbmVyLWJsb2NrIGJpZ0NvbnRhaW5lclwiPlxyXG4gIDxkaXYgY2xhc3NOYW1lPVwicmVzcG9uc2l2ZS1jb250YWluZXItYmxvY2sgQ29udGFpbmVyXCI+XHJcbiAgICA8aW1nIGNsYXNzTmFtZT1cIm1haW5JbWdcIiBzcmM9XCJodHRwczovL3dvcmtpay13aWRnZXQtYXNzZXRzLnMzLmFtYXpvbmF3cy5jb20vd2lkZ2V0LWFzc2V0cy9pbWFnZXMvZWFib3V0dXMxLnN2Z1wiIC8+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFsbFRleHQgYWJvdmVUZXh0XCI+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmxrIGhlYWRpbmdUZXh0XCI+XHJcbiAgICAgICAgT3VyIE1pc3Npb25cclxuICAgICAgPC9wPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJsayBzdWJIZWFkaW5nVGV4dFwiPlxyXG4gICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuXHJcbiAgICAgIDwvcD5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ibGsgZGVzY3JpcHRpb25cIj5cclxuICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBGZXJtZW50dW0gcHVsdmluYXIgdWxsYW1jb3JwZXIgc3VzcGVuZGlzc2UgYWMgZWdldC4gUGVsbGVudGVzcXVlIHRlbXB1cyBsZW8gaW4gdWxsYW1jb3JwZXIgcXVpcyB2ZXN0aWJ1bHVtIGxpZ3VsYSBlbGVtZW50dW0gdXQuXHJcbiAgICAgIDwvcD5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJleHBsb3JlXCI+XHJcbiAgICAgICAgRXhwbG9yZVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3NOYW1lPVwicmVzcG9uc2l2ZS1jb250YWluZXItYmxvY2sgQ29udGFpbmVyIGJvdHRvbUNvbnRhaW5lclwiPlxyXG4gICAgPGltZyBjbGFzc05hbWU9XCJtYWluSW1nXCIgc3JjPVwiaHR0cHM6Ly93b3JraWstd2lkZ2V0LWFzc2V0cy5zMy5hbWF6b25hd3MuY29tL3dpZGdldC1hc3NldHMvaW1hZ2VzL3hwcmF1cDIuc3ZnXCIgLz5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxsVGV4dCBib3R0b21UZXh0XCI+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmxrIGhlYWRpbmdUZXh0XCI+XHJcbiAgICAgICAgT3VyIFZpc2lvblxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmxrIHN1YkhlYWRpbmdUZXh0XCI+XHJcbiAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC5cclxuICAgICAgPC9wPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJsayBkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEZlcm1lbnR1bSBwdWx2aW5hciB1bGxhbWNvcnBlciBzdXNwZW5kaXNzZSBhYyBlZ2V0LiBQZWxsZW50ZXNxdWUgdGVtcHVzIGxlbyBpbiB1bGxhbWNvcnBlciBxdWlzIHZlc3RpYnVsdW0gbGlndWxhIGVsZW1lbnR1bSB1dC5cclxuICAgICAgPC9wPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImV4cGxvcmVcIj5cclxuICAgICAgICBFeHBsb3JlXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxGb290ZXIgLz5cclxuXHJcbiAgICAgICAgICAgIDxBRDJIUyAvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgICAgIGh0bWwsXHJcbiAgICAgICAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJQbGV4XCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90bywgT3h5Z2VuLFxyXG4gICAgICAgICAgICAgICAgICAgIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICoge1xyXG4gICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICo6Zm9jdXMge1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5BYm91dC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiAoe1xyXG4gICAgbmFtZXNwYWNlc1JlcXVpcmVkOiBbJ2NvbnRhY3QnXSxcclxufSlcclxuXHJcbkFib3V0LnByb3BUeXBlcyA9IHtcclxuICAgIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbignY29udGFjdCcpKEFib3V0KSIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IEFEMkhTID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtoaWRlQmFubmVyLCBzZXRIaWRlQmFubmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIFxyXG4gICAgdmFyIGRlZmVycmVkUHJvbXB0O1xyXG5cclxuICAgIGNvbnN0IHNob3dBZGRUb0hvbWVTY3JlZW4gPSAoKSA9PiB7XHJcbiAgICAgICAgdmFyIGEyaHNCdG4gPSB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZDJocy1iYW5uZXJcIik7XHJcbiAgICAgICAgaWYgKGEyaHNCdG4pIHtcclxuICAgICAgICAgICAgYTJoc0J0bi5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcclxuICAgICAgICAgICAgdmFyIGJ0biA9IGEyaHNCdG4ucXVlcnlTZWxlY3RvcihcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgaWYgKGJ0bikgYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZFRvSG9tZVNjcmVlbik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBhZGRUb0hvbWVTY3JlZW4gPSAoKSA9PiB7XHJcbiAgICAgICAgdmFyIGEyaHNCdG4gPSB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZDJocy1iYW5uZXJcIik7XHJcbiAgICAgICAgYTJoc0J0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIGRlZmVycmVkUHJvbXB0LnByb21wdCgpO1xyXG4gICAgICAgIGRlZmVycmVkUHJvbXB0LnVzZXJDaG9pY2UudGhlbihmdW5jdGlvbihjaG9pY2VSZXN1bHQpIHtcclxuICAgICAgICAgICAgaWYgKGNob2ljZVJlc3VsdC5vdXRjb21lID09PSAnYWNjZXB0ZWQnKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuX2dhcS5wdXNoKFsnX3RyYWNrRXZlbnQnLCAnYWRkZWRUb0hvbWVTY3JlZW4nLCAndHJ1ZSddKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWZlcnJlZFByb21wdCA9IG51bGw7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ2hpZGVBRDJIUycgaW4gd2luZG93LmxvY2FsU3RvcmFnZSkge1xyXG4gICAgICAgICAgICBzZXRIaWRlQmFubmVyKHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5pbm5lcldpZHRoIDw9IDEwNTApIHtcclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZWluc3RhbGxwcm9tcHQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgZGVmZXJyZWRQcm9tcHQgPSBlO1xyXG4gICAgICAgICAgICAgICAgc2hvd0FkZFRvSG9tZVNjcmVlbigpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBpZiAoIWhpZGVCYW5uZXIpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkMmhzLXByb21wdCBhbmltYXRlZCBmYWRlSW5SaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbj5JbnN0YWxsIERETFZpZCBXZWIgQXBwPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjbG9zZVwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2hpZGVBRDJIUycsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEhpZGVCYW5uZXIodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9fT54PC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFEMkhTXHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgaTE4biwgTGluaywgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vaTE4bic7XHJcblxyXG5jb25zdCBGb290ZXIgPSAoeyB0IH0pID0+IHtcclxuXHJcbiAgICBjb25zdCBbY29va2llQmFubmVyU2hvdywgc2V0Q29va2llQmFubmVyU2hvd10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAnaGlkZUNvb2tpZUJhbm5lcicgaW4gd2luZG93LmxvY2FsU3RvcmFnZSkge1xyXG4gICAgICAgICAgICBzZXRDb29raWVCYW5uZXJTaG93KGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgaGlkZUJhbm5lciA9ICgpID0+IHtcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2hpZGVDb29raWVCYW5uZXInLCB0cnVlKTtcclxuICAgICAgICBzZXRDb29raWVCYW5uZXJTaG93KGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjaGFuZ2VMYW5nID0gKGUsIGxhbmcpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaTE4bi5jaGFuZ2VMYW5ndWFnZShsYW5nKTtcclxuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IDAsIGxlZnQ6IDAsIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbGFuZ3MgPSB7XHJcbiAgICAgICAgJ2VuJzogJ0VuZ2xpc2gnLFxyXG4gICAgICAgICdmcic6ICdGcmFuw6dhaXMnLFxyXG4gICAgICAgICdwdCc6ICdQb3J0dWd1w6pzIEJyYXNpbGVpcm8nXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD1cImZvb3RlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3B5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgQ29weXJpZ2h0ICZjb3B5OyBERExWaWQge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0uIHt0KCdhbGxfcmlnaHRzX3Jlc2VydmVkJyl9LlxyXG4gICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3ByaXZhY3ktcG9saWN5XCI+PGEgdGl0bGU9e3QoJ3ByaXZhY3lfcG9saWN5JykgKyAnIC0gRERMVmlkJ30+e3QoJ3ByaXZhY3lfcG9saWN5Jyl9PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3dpdGNoX2xhbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2kxOG4ubGFuZ3VhZ2UgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtcImljb24gXCIgKyBpMThuLmxhbmd1YWdlfT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhbmdzW2kxOG4ubGFuZ3VhZ2VdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3B1cF9sYW5nc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIiB0aXRsZT1cIkRETFZpZCAtIE9ubGluZSBWaWRlbyBEb3dubG9hZGVyXCIgY2xhc3NOYW1lPVwibGFuZ1wiIG9uQ2xpY2s9eyhlKSA9PiBjaGFuZ2VMYW5nKGUsIFwiZW5cIil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gZW5cIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRW5nbGlzaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9mclwiIHRpdGxlPVwiRERMVmlkIC0gVMOpbMOpY2hhcmdldXIgZGUgdmlkw6lvcyBlbiBsaWduZVwiIGNsYXNzTmFtZT1cImxhbmdcIiBvbkNsaWNrPXsoZSkgPT4gY2hhbmdlTGFuZyhlLCBcImZyXCIpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGZyXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZyYW7Dp2Fpc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9wdFwiIHRpdGxlPVwiRERMVmlkIC0gRG93bmxvYWQgZGUgVsOtZGVvcyBPbmxpbmVcIiBjbGFzc05hbWU9XCJsYW5nXCIgb25DbGljaz17KGUpID0+IGNoYW5nZUxhbmcoZSwgXCJwdFwiKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBwdFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQb3J0dWd1w6pzIEJyYXNpbGVpcm9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge2Nvb2tpZUJhbm5lclNob3cgPyAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY29va2llYmFubmVyXCIgY2xhc3NOYW1lPVwiYW5pbWF0ZWQgZmFkZUluVXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdjb29raWVzX25vdGljZScpfSA8TGluayBocmVmPVwiL3ByaXZhY3ktcG9saWN5XCI+PGEgdGl0bGU9e3QoJ3ByaXZhY3lfcG9saWN5JykgKyAnIC0gRERMVmlkJ30+e3QoJ3ByaXZhY3lfcG9saWN5Jyl9PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiIG9uQ2xpY2s9eygpID0+IGhpZGVCYW5uZXIoKX0+e3QoJ2lfdW5kZXJzdGFuZCcpfTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5Gb290ZXIucHJvcFR5cGVzID0ge1xyXG4gICAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKCdmb290ZXInKShGb290ZXIpIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBpMThuLCBMaW5rLCB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi9pMThuJztcclxuXHJcbmNvbnN0IEhlYWRlciA9ICh7wqB0IH0pID0+IHtcclxuICAgIGNvbnN0IFtzaG93TW9iaWxlTWVudSwgc2V0U2hvd01vYmlsZU1lbnVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VTdGF0ZShcImxpZ2h0XCIpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgaWYgKFwidGhlbWVcIiBpbiB3aW5kb3cubG9jYWxTdG9yYWdlKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImh0bWxcIikuY2xhc3NMaXN0LmFkZCh3aW5kb3cubG9jYWxTdG9yYWdlLnRoZW1lKTtcclxuICAgICAgICAgICAgICAgIHNldFRoZW1lKHdpbmRvdy5sb2NhbFN0b3JhZ2UudGhlbWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhICYmIHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJykubWF0Y2hlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaHRtbFwiKS5jbGFzc0xpc3QuYWRkKFwiZGFya1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaGVtZShcImRhcmtcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgdXBkYXRlVGhlbWUgPSAodGhlbWUpID0+IHtcclxuICAgICAgICBzZXRUaGVtZSh0aGVtZSk7XHJcbiAgICAgICAgd2luZG93LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJodG1sXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJsaWdodFwiKTtcclxuICAgICAgICB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImh0bWxcIikuY2xhc3NMaXN0LnJlbW92ZShcImRhcmtcIik7XHJcbiAgICAgICAgd2luZG93LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJodG1sXCIpLmNsYXNzTGlzdC5hZGQodGhlbWUpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIHRoZW1lKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbGFuZ3MgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0VuZ2xpc2gnLFxyXG4gICAgICAgICAgICB2YWx1ZTogJ2VuJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0ZyYW7Dp2FpcycsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnZnInXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnUG9ydHVndcOqcyBCcmFzaWxlaXJvJyxcclxuICAgICAgICAgICAgdmFsdWU6ICdwdCdcclxuICAgICAgICB9XHJcbiAgICBdO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD1cImhlYWRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImxvZ29cIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsb2dvXCIgdGl0bGU9e3QoJ2hlYWRsaW5lJyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRERMVmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibmF2XCIgY2xhc3NOYW1lPXsoc2hvd01vYmlsZU1lbnUpID8gJ3Nob3ctbWVudScgOiBudWxsfT5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBpZD1cImxhbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2kxOG4ubGFuZ3VhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpMThuLmNoYW5nZUxhbmd1YWdlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTaG93TW9iaWxlTWVudShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17dCgnc2l0ZV9sYW5ndWFnZScpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFuZ3MubWFwKChsYW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxvcHRpb24gdmFsdWU9e2xhbmcudmFsdWV9IGtleT17bGFuZy52YWx1ZX0+e2xhbmcudGl0bGV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48YSBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9iaWxlTWVudShmYWxzZSl9IHRpdGxlPXt0KCdob21lJykgKyAnIC0gRERMVmlkJ30+e3QoJ2hvbWUnKX08L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zdXBwb3J0ZWQtd2Vic2l0ZXNcIj48YSBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9iaWxlTWVudShmYWxzZSl9IHRpdGxlPXt0KCdzdXBwb3J0ZWRfd2Vic2l0ZXMnKSArICcgLSBERExWaWQnfT57dCgnc3VwcG9ydGVkX3dlYnNpdGVzJyl9PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdmlkZW9kb3dubG9hZGVyXCI+PGEgb25DbGljaz17KCkgPT4gc2V0U2hvd01vYmlsZU1lbnUoZmFsc2UpfSB0aXRsZT17dCgndmlkZW9fZG93bmxvYWRlcicpfT57dCgndmlkZW9fZG93bmxvYWRlcicpfTwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXJsc2hvcnRlbmVyXCI+PGEgb25DbGljaz17KCkgPT4gc2V0U2hvd01vYmlsZU1lbnUoZmFsc2UpfSB0aXRsZT17dCgndXJsX3Nob3J0ZW5lcicpfT57dCgndXJsX3Nob3J0ZW5lcicpfTwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+PGEgb25DbGljaz17KCkgPT4gc2V0U2hvd01vYmlsZU1lbnUoZmFsc2UpfSB0aXRsZT17dCgnYWJvdXRfdXMnKSArICcgLSBERExWaWQnfT57dCgnYWJvdXRfdXMnKX08L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIj48YSBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9iaWxlTWVudShmYWxzZSl9IHRpdGxlPXt0KCdjb250YWN0X3VzJyl9Pnt0KCdjb250YWN0X3VzJyl9PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWNjb3VudFwiPjxhIG9uQ2xpY2s9eygpID0+IHNldFNob3dNb2JpbGVNZW51KGZhbHNlKX0gdGl0bGU9e3QoJ2xvZ2luJyl9Pnt0KCdsb2dpbicpfTwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90ZWxlZ3JhbS5tZS9kZGx2aWRfYm90XCIgdGl0bGU9XCJERExWaWQgVGVsZWdyYW0gQm90XCIgdGFyZ2V0PVwiX2JsYW5rXCI+VGVsZWdyYW08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAge3RoZW1lID09PSBcImxpZ2h0XCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17KCkgPT4gdXBkYXRlVGhlbWUoXCJkYXJrXCIpfSBjbGFzc05hbWU9XCJ0aGVtZSBkYXJrXCI+PGk+PC9pPiA8c3Bhbj57dCgnZGFya19tb2RlJyl9PC9zcGFuPjwvYT5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17KCkgPT4gdXBkYXRlVGhlbWUoXCJsaWdodFwiKX0gY2xhc3NOYW1lPVwidGhlbWUgbGlnaHRcIj48aT48L2k+IDxzcGFuPnt0KCdsaWdodF9tb2RlJyl9PC9zcGFuPjwvYT5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3RlbGVncmFtLm1lL2RkbHZpZF9ib3RcIiBpZD1cInRlbGVncmFtQm90XCIgdGFyZ2V0PVwiX2JsYW5rXCI+RERMVmlkIFRlbGVncmFtIEJvdDwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtb2JpbGVNZW51QnV0dG9uXCIgb25DbGljaz17KCkgPT4gc2V0U2hvd01vYmlsZU1lbnUoIXNob3dNb2JpbGVNZW51KX0+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAge3Nob3dNb2JpbGVNZW51ID8gPGRpdiBjbGFzc05hbWU9XCJtb2JpbGVNZW51T3ZlcmxheVwiIG9uQ2xpY2s9eygpID0+IHNldFNob3dNb2JpbGVNZW51KGZhbHNlKX0gLz4gOiBudWxsfVxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuSGVhZGVyLnByb3BUeXBlcyA9IHtcclxuICAgIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbignaGVhZGVyJykoSGVhZGVyKSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtaTE4bmV4dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3N0eWxlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=