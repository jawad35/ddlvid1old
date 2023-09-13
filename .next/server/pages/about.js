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
  }, "html,body{padding:0;margin:0;font-family:\"Plex\",-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen, Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;}*{box-sizing:border-box;}*:focus{outline:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxXZWIgRGV2ZWxvcG1lbnRcXENsaWVudFdvcmtcXGRkbF92aWQxXFxwYWdlc1xcYWJvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkcrQixBQUkyQixBQU9ZLEFBR1QsVUFUSixHQVVULE1BUndFLEdBS3hFLHlJQUpBIiwiZmlsZSI6IkQ6XFxXZWIgRGV2ZWxvcG1lbnRcXENsaWVudFdvcmtcXGRkbF92aWQxXFxwYWdlc1xcYWJvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJy4uL2kxOG4nO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vcGFydHMvaGVhZGVyJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL3BhcnRzL2Zvb3Rlcic7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBRDJIUyBmcm9tICcuL3BhcnRzL2FkMmhzJztcclxuaW1wb3J0IEFib3V0VXNKc29uIGZyb20gJy4uL3B1YmxpYy9zdGF0aWMvbG9jYWxlcy9lbi9hYm91dC5qc29uJ1xyXG5jb25zdCBBYm91dCA9ICh7IHQgfSkgPT4ge1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ob3N0LmluZGV4T2YoXCJsb2NhbGhvc3RcIikgPCAwICYmIHdpbmRvdy5sb2NhdGlvbi5ob3N0LmluZGV4T2YoXCIxMjcuMC4wLjFcIikgPCAwKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5fZ2FxID0gd2luZG93Ll9nYXEgfHwgW107XHJcbiAgICAgICAgICAgIHdpbmRvdy5fZ2FxLnB1c2goWydfc2V0QWNjb3VudCcsICdVQS0xNjI5MjM2NDItMSddKTtcclxuICAgICAgICAgICAgd2luZG93Ll9nYXEucHVzaChbJ190cmFja1BhZ2V2aWV3J10pO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZ2EgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICAgICAgICAgICAgICBnYS50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XHJcbiAgICAgICAgICAgICAgICBnYS5hc3luYyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBnYS5zcmMgPSAoJ2h0dHBzOicgPT0gZG9jdW1lbnQubG9jYXRpb24ucHJvdG9jb2wgPyAnaHR0cHM6Ly9zc2wnIDogJ2h0dHA6Ly93d3cnKSArICcuZ29vZ2xlLWFuYWx5dGljcy5jb20vZ2EuanMnO1xyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdO1xyXG4gICAgICAgICAgICAgICAgcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShnYSwgcyk7XHJcbiAgICAgICAgICAgIH0pKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7IHRvcDogMCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xyXG4gICAgfSwgW10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPVwiY29udGFjdFwiPlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT57dCgnYWJvdXRfdXMnKX0gLSBERExWaWQ8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17dCgnbWV0YV9kZXNjcmlwdGlvbicpfSAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5XCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnNpdGVcIiBjb250ZW50PVwiQGRkbF92aWRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6dGl0bGVcIiBjb250ZW50PXsnRERMVmlkIC0gJyArIHQoJ2Fib3V0X3VzJyl9IC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3QoJ21ldGFfZGVzY3JpcHRpb24nKX0gLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNyZWF0b3JcIiBjb250ZW50PVwiQGRkbF92aWRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6aW1hZ2VcIiBjb250ZW50PVwiaHR0cHM6Ly9kZGx2aWQuY29tL2Fzc2V0cy9pbWFnZXMvb2cucG5nPzJcIiAvPiBcclxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXsnRERMVmlkIC0gJyArIHQoJ2Fib3V0X3VzJyl9IC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17dCgnbWV0YV9kZXNjcmlwdGlvbicpfSAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9XCJodHRwczovL2RkbHZpZC5jb20vYXNzZXRzL2ltYWdlcy9vZy5wbmc/MlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwid2Vic2l0ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9XCJodHRwczovL2RkbHZpZC5jb20vY29udGFjdFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9XCJERExWaWRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiYWx0ZXJuYXRlXCIgaHJlZkxhbmc9XCJlblwiIGhyZWY9XCJodHRwczovL2RkbHZpZC5jb20vXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImFsdGVybmF0ZVwiIGhyZWZMYW5nPVwieC1kZWZhdWx0XCIgaHJlZj1cImh0dHBzOi8vZGRsdmlkLmNvbS9jb250YWN0XCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImFsdGVybmF0ZVwiIGhyZWZMYW5nPVwiZW4tYXVcIiBocmVmPVwiaHR0cHM6Ly9kZGx2aWQuY29tL2NvbnRhY3RcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiYWx0ZXJuYXRlXCIgaHJlZkxhbmc9XCJlbi1pblwiIGhyZWY9XCJodHRwczovL2RkbHZpZC5jb20vY29udGFjdFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJhbHRlcm5hdGVcIiBocmVmTGFuZz1cImVuLWJyXCIgaHJlZj1cImh0dHBzOi8vZGRsdmlkLmNvbS9jb250YWN0XCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImFsdGVybmF0ZVwiIGhyZWZMYW5nPVwiZW4tY29cIiBocmVmPVwiaHR0cHM6Ly9kZGx2aWQuY29tL2NvbnRhY3RcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiYWx0ZXJuYXRlXCIgaHJlZkxhbmc9XCJlbi1teFwiIGhyZWY9XCJodHRwczovL2RkbHZpZC5jb20vY29udGFjdFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJhbHRlcm5hdGVcIiBocmVmTGFuZz1cImVuLXBlXCIgaHJlZj1cImh0dHBzOi8vZGRsdmlkLmNvbS9jb250YWN0XCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImFsdGVybmF0ZVwiIGhyZWZMYW5nPVwiZnJcIiBocmVmPVwiaHR0cHM6Ly9kZGx2aWQuY29tL2ZyL2NvbnRhY3RcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiYWx0ZXJuYXRlXCIgaHJlZkxhbmc9XCJwdFwiIGhyZWY9XCJodHRwczovL2RkbHZpZC5jb20vcHQvY29udGFjdFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJjYW5vbmljYWxcIiBocmVmPVwiaHR0cHM6Ly9kZGx2aWQuY29tL2NvbnRhY3RcIiAvPiAgICBcclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8bWFpbj5cclxuICAgICAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInBhZ2VDb250ZW50XCIgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT57QWJvdXRVc0pzb24uYWJvdXRfdXN9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3ViX3RpdGxlXCI+e0Fib3V0VXNKc29uLm1ldGFfZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzcG9uc2l2ZS1jb250YWluZXItYmxvY2sgYmlnQ29udGFpbmVyXCI+XHJcbiAgPGRpdiBjbGFzc05hbWU9XCJyZXNwb25zaXZlLWNvbnRhaW5lci1ibG9jayBDb250YWluZXJcIj5cclxuICAgIDxpbWcgY2xhc3NOYW1lPVwibWFpbkltZ1wiIHNyYz1cImh0dHBzOi8vd29ya2lrLXdpZGdldC1hc3NldHMuczMuYW1hem9uYXdzLmNvbS93aWRnZXQtYXNzZXRzL2ltYWdlcy9lYWJvdXR1czEuc3ZnXCIgLz5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxsVGV4dCBhYm92ZVRleHRcIj5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ibGsgaGVhZGluZ1RleHRcIj5cclxuICAgICAgICBPdXIgTWlzc2lvblxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmxrIHN1YkhlYWRpbmdUZXh0XCI+XHJcbiAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC5cclxuICAgICAgPC9wPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJsayBkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEZlcm1lbnR1bSBwdWx2aW5hciB1bGxhbWNvcnBlciBzdXNwZW5kaXNzZSBhYyBlZ2V0LiBQZWxsZW50ZXNxdWUgdGVtcHVzIGxlbyBpbiB1bGxhbWNvcnBlciBxdWlzIHZlc3RpYnVsdW0gbGlndWxhIGVsZW1lbnR1bSB1dC5cclxuICAgICAgPC9wPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImV4cGxvcmVcIj5cclxuICAgICAgICBFeHBsb3JlXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzc05hbWU9XCJyZXNwb25zaXZlLWNvbnRhaW5lci1ibG9jayBDb250YWluZXIgYm90dG9tQ29udGFpbmVyXCI+XHJcbiAgICA8aW1nIGNsYXNzTmFtZT1cIm1haW5JbWdcIiBzcmM9XCJodHRwczovL3dvcmtpay13aWRnZXQtYXNzZXRzLnMzLmFtYXpvbmF3cy5jb20vd2lkZ2V0LWFzc2V0cy9pbWFnZXMveHByYXVwMi5zdmdcIiAvPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhbGxUZXh0IGJvdHRvbVRleHRcIj5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ibGsgaGVhZGluZ1RleHRcIj5cclxuICAgICAgICBPdXIgVmlzaW9uXHJcbiAgICAgIDwvcD5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ibGsgc3ViSGVhZGluZ1RleHRcIj5cclxuICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LlxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmxrIGRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gRmVybWVudHVtIHB1bHZpbmFyIHVsbGFtY29ycGVyIHN1c3BlbmRpc3NlIGFjIGVnZXQuIFBlbGxlbnRlc3F1ZSB0ZW1wdXMgbGVvIGluIHVsbGFtY29ycGVyIHF1aXMgdmVzdGlidWx1bSBsaWd1bGEgZWxlbWVudHVtIHV0LlxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZXhwbG9yZVwiPlxyXG4gICAgICAgIEV4cGxvcmVcclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPEZvb3RlciAvPlxyXG5cclxuICAgICAgICAgICAgPEFEMkhTIC8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAgICAgaHRtbCxcclxuICAgICAgICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlBsZXhcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLCBPeHlnZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgKiB7XHJcbiAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKjpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbkFib3V0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+ICh7XHJcbiAgICBuYW1lc3BhY2VzUmVxdWlyZWQ6IFsnY29udGFjdCddLFxyXG59KVxyXG5cclxuQWJvdXQucHJvcFR5cGVzID0ge1xyXG4gICAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKCdjb250YWN0JykoQWJvdXQpIl19 */\n/*@ sourceURL=D:\\\\Web Development\\\\ClientWork\\\\ddl_vid1\\\\pages\\\\about.js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaTE4bi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hYm91dC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9wYXJ0cy9hZDJocy5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9wYXJ0cy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcGFydHMvaGVhZGVyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtaTE4bmV4dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1qc3gvc3R5bGVcIiJdLCJuYW1lcyI6WyJOZXh0STE4TmV4dCIsInJlcXVpcmUiLCJkZWZhdWx0IiwibW9kdWxlIiwiZXhwb3J0cyIsInN0cmljdE1vZGUiLCJkZWZhdWx0TGFuZ3VhZ2UiLCJvdGhlckxhbmd1YWdlcyIsImxvY2FsZVN1YnBhdGhzIiwiZnIiLCJwdCIsImludGVycG9sYXRpb24iLCJlc2NhcGVWYWx1ZSIsIl9fanN4IiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiQWJvdXQiLCJ0IiwidXNlRWZmZWN0Iiwid2luZG93IiwibG9jYXRpb24iLCJob3N0IiwiaW5kZXhPZiIsIl9nYXEiLCJwdXNoIiwiZ2EiLCJkb2N1bWVudCIsInR5cGUiLCJhc3luYyIsInNyYyIsInByb3RvY29sIiwicyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJpZCIsImNsYXNzTmFtZSIsIkhlYWQiLCJuYW1lIiwiY29udGVudCIsInByb3BlcnR5IiwicmVsIiwiaHJlZkxhbmciLCJocmVmIiwiSGVhZGVyIiwiQWJvdXRVc0pzb24iLCJhYm91dF91cyIsIm1ldGFfZGVzY3JpcHRpb24iLCJGb290ZXIiLCJBRDJIUyIsIl9KU1hTdHlsZSIsImdldEluaXRpYWxQcm9wcyIsIm5hbWVzcGFjZXNSZXF1aXJlZCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwid2l0aFRyYW5zbGF0aW9uIiwiaGlkZUJhbm5lciIsInNldEhpZGVCYW5uZXIiLCJ1c2VTdGF0ZSIsImRlZmVycmVkUHJvbXB0Iiwic2hvd0FkZFRvSG9tZVNjcmVlbiIsImEyaHNCdG4iLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwiYWRkIiwiYnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFkZFRvSG9tZVNjcmVlbiIsInN0eWxlIiwiZGlzcGxheSIsInByb21wdCIsInVzZXJDaG9pY2UiLCJ0aGVuIiwiY2hvaWNlUmVzdWx0Iiwib3V0Y29tZSIsIm9uQ2xpY2siLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiY29va2llQmFubmVyU2hvdyIsInNldENvb2tpZUJhbm5lclNob3ciLCJjaGFuZ2VMYW5nIiwiZSIsImxhbmciLCJwcmV2ZW50RGVmYXVsdCIsImkxOG4iLCJjaGFuZ2VMYW5ndWFnZSIsImxlZnQiLCJsYW5ncyIsIkRhdGUiLCJnZXRGdWxsWWVhciIsIkxpbmsiLCJ0aXRsZSIsImxhbmd1YWdlIiwic2hvd01vYmlsZU1lbnUiLCJzZXRTaG93TW9iaWxlTWVudSIsInRoZW1lIiwic2V0VGhlbWUiLCJ1cGRhdGVUaGVtZSIsInJlbW92ZSIsInZhbHVlIiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNB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LEVBQUVBLENBQUEsS0FBTW1CLGlCQUFpQixDQUFDLEtBQUs7RUFBRSxDQUFFLENBQUMsR0FBRyxJQUFJLEVBRXZHdEYsS0FBQTtJQUFLMEIsU0FBUyxFQUFDO0VBQU8sQ0FBRSxDQUN2QixDQUNKLENBQUM7QUFFZCxDQUFDO0FBRURRLE1BQU0sQ0FBQ1MsU0FBUyxHQUFHO0VBQ2Z2QyxDQUFDLEVBQUV3QyxpREFBUyxDQUFDQyxJQUFJLENBQUNDO0FBQ3RCLENBQUM7QUFFY0MsNEhBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQ2IsTUFBTSxDQUFDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2SGhELHlDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDZDIiwiZmlsZSI6InBhZ2VzL2Fib3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hYm91dC5qc1wiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBOZXh0STE4TmV4dCA9IHJlcXVpcmUoJ25leHQtaTE4bmV4dCcpLmRlZmF1bHRcblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgTmV4dEkxOE5leHQoe1xuICAgIHN0cmljdE1vZGU6IGZhbHNlLFxuICAgIGRlZmF1bHRMYW5ndWFnZTogJ2VuJyxcbiAgICBvdGhlckxhbmd1YWdlczogWydmcicsICdwdCddLFxuICAgIGxvY2FsZVN1YnBhdGhzOiB7XG4gICAgICAgIGZyOiAnZnInLFxuICAgICAgICBwdDogJ3B0J1xuICAgIH0sXG4gICAgaW50ZXJwb2xhdGlvbjoge1xuICAgICAgICBlc2NhcGVWYWx1ZTogZmFsc2VcbiAgICB9XG59KSIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vaTE4bic7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9wYXJ0cy9oZWFkZXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vcGFydHMvZm9vdGVyJztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEFEMkhTIGZyb20gJy4vcGFydHMvYWQyaHMnO1xyXG5pbXBvcnQgQWJvdXRVc0pzb24gZnJvbSAnLi4vcHVibGljL3N0YXRpYy9sb2NhbGVzL2VuL2Fib3V0Lmpzb24nXHJcbmNvbnN0IEFib3V0ID0gKHsgdCB9KSA9PiB7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhvc3QuaW5kZXhPZihcImxvY2FsaG9zdFwiKSA8IDAgJiYgd2luZG93LmxvY2F0aW9uLmhvc3QuaW5kZXhPZihcIjEyNy4wLjAuMVwiKSA8IDApIHtcclxuICAgICAgICAgICAgd2luZG93Ll9nYXEgPSB3aW5kb3cuX2dhcSB8fCBbXTtcclxuICAgICAgICAgICAgd2luZG93Ll9nYXEucHVzaChbJ19zZXRBY2NvdW50JywgJ1VBLTE2MjkyMzY0Mi0xJ10pO1xyXG4gICAgICAgICAgICB3aW5kb3cuX2dhcS5wdXNoKFsnX3RyYWNrUGFnZXZpZXcnXSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHZhciBnYSA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgICAgICAgICAgICAgIGdhLnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcclxuICAgICAgICAgICAgICAgIGdhLmFzeW5jID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGdhLnNyYyA9ICgnaHR0cHM6JyA9PSBkb2N1bWVudC5sb2NhdGlvbi5wcm90b2NvbCA/ICdodHRwczovL3NzbCcgOiAnaHR0cDovL3d3dycpICsgJy5nb29nbGUtYW5hbHl0aWNzLmNvbS9nYS5qcyc7XHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbMF07XHJcbiAgICAgICAgICAgICAgICBzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGdhLCBzKTtcclxuICAgICAgICAgICAgfSkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKHsgdG9wOiAwLCBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9XCJjb250YWN0XCI+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPnt0KCdhYm91dF91cycpfSAtIERETFZpZDwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXt0KCdtZXRhX2Rlc2NyaXB0aW9uJyl9IC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6c2l0ZVwiIGNvbnRlbnQ9XCJAZGRsX3ZpZFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjp0aXRsZVwiIGNvbnRlbnQ9eydERExWaWQgLSAnICsgdCgnYWJvdXRfdXMnKX0gLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCIgY29udGVudD17dCgnbWV0YV9kZXNjcmlwdGlvbicpfSAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y3JlYXRvclwiIGNvbnRlbnQ9XCJAZGRsX3ZpZFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjppbWFnZVwiIGNvbnRlbnQ9XCJodHRwczovL2RkbHZpZC5jb20vYXNzZXRzL2ltYWdlcy9vZy5wbmc/MlwiIC8+IFxyXG4gICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9eydERExWaWQgLSAnICsgdCgnYWJvdXRfdXMnKX0gLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXt0KCdtZXRhX2Rlc2NyaXB0aW9uJyl9IC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD1cImh0dHBzOi8vZGRsdmlkLmNvbS9hc3NldHMvaW1hZ2VzL29nLnBuZz8yXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD1cImh0dHBzOi8vZGRsdmlkLmNvbS9jb250YWN0XCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6c2l0ZV9uYW1lXCIgY29udGVudD1cIkRETFZpZFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJhbHRlcm5hdGVcIiBocmVmTGFuZz1cImVuXCIgaHJlZj1cImh0dHBzOi8vZGRsdmlkLmNvbS9cIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiYWx0ZXJuYXRlXCIgaHJlZkxhbmc9XCJ4LWRlZmF1bHRcIiBocmVmPVwiaHR0cHM6Ly9kZGx2aWQuY29tL2NvbnRhY3RcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiYWx0ZXJuYXRlXCIgaHJlZkxhbmc9XCJlbi1hdVwiIGhyZWY9XCJodHRwczovL2RkbHZpZC5jb20vY29udGFjdFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJhbHRlcm5hdGVcIiBocmVmTGFuZz1cImVuLWluXCIgaHJlZj1cImh0dHBzOi8vZGRsdmlkLmNvbS9jb250YWN0XCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImFsdGVybmF0ZVwiIGhyZWZMYW5nPVwiZW4tYnJcIiBocmVmPVwiaHR0cHM6Ly9kZGx2aWQuY29tL2NvbnRhY3RcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiYWx0ZXJuYXRlXCIgaHJlZkxhbmc9XCJlbi1jb1wiIGhyZWY9XCJodHRwczovL2RkbHZpZC5jb20vY29udGFjdFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJhbHRlcm5hdGVcIiBocmVmTGFuZz1cImVuLW14XCIgaHJlZj1cImh0dHBzOi8vZGRsdmlkLmNvbS9jb250YWN0XCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImFsdGVybmF0ZVwiIGhyZWZMYW5nPVwiZW4tcGVcIiBocmVmPVwiaHR0cHM6Ly9kZGx2aWQuY29tL2NvbnRhY3RcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiYWx0ZXJuYXRlXCIgaHJlZkxhbmc9XCJmclwiIGhyZWY9XCJodHRwczovL2RkbHZpZC5jb20vZnIvY29udGFjdFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJhbHRlcm5hdGVcIiBocmVmTGFuZz1cInB0XCIgaHJlZj1cImh0dHBzOi8vZGRsdmlkLmNvbS9wdC9jb250YWN0XCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9XCJodHRwczovL2RkbHZpZC5jb20vY29udGFjdFwiIC8+ICAgIFxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicGFnZUNvbnRlbnRcIiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPntBYm91dFVzSnNvbi5hYm91dF91c308L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdWJfdGl0bGVcIj57QWJvdXRVc0pzb24ubWV0YV9kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXNwb25zaXZlLWNvbnRhaW5lci1ibG9jayBiaWdDb250YWluZXJcIj5cclxuICA8ZGl2IGNsYXNzTmFtZT1cInJlc3BvbnNpdmUtY29udGFpbmVyLWJsb2NrIENvbnRhaW5lclwiPlxyXG4gICAgPGltZyBjbGFzc05hbWU9XCJtYWluSW1nXCIgc3JjPVwiaHR0cHM6Ly93b3JraWstd2lkZ2V0LWFzc2V0cy5zMy5hbWF6b25hd3MuY29tL3dpZGdldC1hc3NldHMvaW1hZ2VzL2VhYm91dHVzMS5zdmdcIiAvPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhbGxUZXh0IGFib3ZlVGV4dFwiPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJsayBoZWFkaW5nVGV4dFwiPlxyXG4gICAgICAgIE91ciBNaXNzaW9uXHJcbiAgICAgIDwvcD5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ibGsgc3ViSGVhZGluZ1RleHRcIj5cclxuICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LlxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmxrIGRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gRmVybWVudHVtIHB1bHZpbmFyIHVsbGFtY29ycGVyIHN1c3BlbmRpc3NlIGFjIGVnZXQuIFBlbGxlbnRlc3F1ZSB0ZW1wdXMgbGVvIGluIHVsbGFtY29ycGVyIHF1aXMgdmVzdGlidWx1bSBsaWd1bGEgZWxlbWVudHVtIHV0LlxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZXhwbG9yZVwiPlxyXG4gICAgICAgIEV4cGxvcmVcclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzTmFtZT1cInJlc3BvbnNpdmUtY29udGFpbmVyLWJsb2NrIENvbnRhaW5lciBib3R0b21Db250YWluZXJcIj5cclxuICAgIDxpbWcgY2xhc3NOYW1lPVwibWFpbkltZ1wiIHNyYz1cImh0dHBzOi8vd29ya2lrLXdpZGdldC1hc3NldHMuczMuYW1hem9uYXdzLmNvbS93aWRnZXQtYXNzZXRzL2ltYWdlcy94cHJhdXAyLnN2Z1wiIC8+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFsbFRleHQgYm90dG9tVGV4dFwiPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJsayBoZWFkaW5nVGV4dFwiPlxyXG4gICAgICAgIE91ciBWaXNpb25cclxuICAgICAgPC9wPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJsayBzdWJIZWFkaW5nVGV4dFwiPlxyXG4gICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuXHJcbiAgICAgIDwvcD5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ibGsgZGVzY3JpcHRpb25cIj5cclxuICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBGZXJtZW50dW0gcHVsdmluYXIgdWxsYW1jb3JwZXIgc3VzcGVuZGlzc2UgYWMgZWdldC4gUGVsbGVudGVzcXVlIHRlbXB1cyBsZW8gaW4gdWxsYW1jb3JwZXIgcXVpcyB2ZXN0aWJ1bHVtIGxpZ3VsYSBlbGVtZW50dW0gdXQuXHJcbiAgICAgIDwvcD5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJleHBsb3JlXCI+XHJcbiAgICAgICAgRXhwbG9yZVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8Rm9vdGVyIC8+XHJcblxyXG4gICAgICAgICAgICA8QUQySFMgLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgICAgICAgICBodG1sLFxyXG4gICAgICAgICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUGxleFwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sIE94eWdlbixcclxuICAgICAgICAgICAgICAgICAgICBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAqIHtcclxuICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAqOmZvY3VzIHtcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuQWJvdXQuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4gKHtcclxuICAgIG5hbWVzcGFjZXNSZXF1aXJlZDogWydjb250YWN0J10sXHJcbn0pXHJcblxyXG5BYm91dC5wcm9wVHlwZXMgPSB7XHJcbiAgICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oJ2NvbnRhY3QnKShBYm91dCkiLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgQUQySFMgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBbaGlkZUJhbm5lciwgc2V0SGlkZUJhbm5lcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgXG4gICAgdmFyIGRlZmVycmVkUHJvbXB0O1xuXG4gICAgY29uc3Qgc2hvd0FkZFRvSG9tZVNjcmVlbiA9ICgpID0+IHtcbiAgICAgICAgdmFyIGEyaHNCdG4gPSB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZDJocy1iYW5uZXJcIik7XG4gICAgICAgIGlmIChhMmhzQnRuKSB7XG4gICAgICAgICAgICBhMmhzQnRuLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xuICAgICAgICAgICAgdmFyIGJ0biA9IGEyaHNCdG4ucXVlcnlTZWxlY3RvcihcImJ1dHRvblwiKTtcbiAgICAgICAgICAgIGlmIChidG4pIGFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRUb0hvbWVTY3JlZW4pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGFkZFRvSG9tZVNjcmVlbiA9ICgpID0+IHtcbiAgICAgICAgdmFyIGEyaHNCdG4gPSB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZDJocy1iYW5uZXJcIik7XG4gICAgICAgIGEyaHNCdG4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgZGVmZXJyZWRQcm9tcHQucHJvbXB0KCk7XG4gICAgICAgIGRlZmVycmVkUHJvbXB0LnVzZXJDaG9pY2UudGhlbihmdW5jdGlvbihjaG9pY2VSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChjaG9pY2VSZXN1bHQub3V0Y29tZSA9PT0gJ2FjY2VwdGVkJykge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5fZ2FxLnB1c2goWydfdHJhY2tFdmVudCcsICdhZGRlZFRvSG9tZVNjcmVlbicsICd0cnVlJ10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVmZXJyZWRQcm9tcHQgPSBudWxsO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ2hpZGVBRDJIUycgaW4gd2luZG93LmxvY2FsU3RvcmFnZSkge1xuICAgICAgICAgICAgc2V0SGlkZUJhbm5lcih0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuaW5uZXJXaWR0aCA8PSAxMDUwKSB7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JlaW5zdGFsbHByb21wdCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGRlZmVycmVkUHJvbXB0ID0gZTtcbiAgICAgICAgICAgICAgICBzaG93QWRkVG9Ib21lU2NyZWVuKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtdKVxuXG4gICAgaWYgKCFoaWRlQmFubmVyKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkMmhzLXByb21wdCBhbmltYXRlZCBmYWRlSW5SaWdodFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24+SW5zdGFsbCBERExWaWQgV2ViIEFwcDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImNsb3NlXCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2hpZGVBRDJIUycsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBzZXRIaWRlQmFubmVyKHRydWUpO1xuICAgICAgICAgICAgICAgIH19Png8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBRDJIU1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgaTE4biwgTGluaywgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vaTE4bic7XG5cbmNvbnN0IEZvb3RlciA9ICh7IHQgfSkgPT4ge1xuXG4gICAgY29uc3QgW2Nvb2tpZUJhbm5lclNob3csIHNldENvb2tpZUJhbm5lclNob3ddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ2hpZGVDb29raWVCYW5uZXInIGluIHdpbmRvdy5sb2NhbFN0b3JhZ2UpIHtcbiAgICAgICAgICAgIHNldENvb2tpZUJhbm5lclNob3coZmFsc2UpO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3QgaGlkZUJhbm5lciA9ICgpID0+IHtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdoaWRlQ29va2llQmFubmVyJywgdHJ1ZSk7XG4gICAgICAgIHNldENvb2tpZUJhbm5lclNob3coZmFsc2UpO1xuICAgIH1cblxuICAgIGNvbnN0IGNoYW5nZUxhbmcgPSAoZSwgbGFuZykgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGkxOG4uY2hhbmdlTGFuZ3VhZ2UobGFuZyk7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7IHRvcDogMCwgbGVmdDogMCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBsYW5ncyA9IHtcbiAgICAgICAgJ2VuJzogJ0VuZ2xpc2gnLFxuICAgICAgICAnZnInOiAnRnJhbsOnYWlzJyxcbiAgICAgICAgJ3B0JzogJ1BvcnR1Z3XDqnMgQnJhc2lsZWlybydcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBpZD1cImZvb3RlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvcHlcIj5cbiAgICAgICAgICAgICAgICAgICAgQ29weXJpZ2h0ICZjb3B5OyBERExWaWQge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0uIHt0KCdhbGxfcmlnaHRzX3Jlc2VydmVkJyl9LlxuICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJpdmFjeS1wb2xpY3lcIj48YSB0aXRsZT17dCgncHJpdmFjeV9wb2xpY3knKSArICcgLSBERExWaWQnfT57dCgncHJpdmFjeV9wb2xpY3knKX08L2E+PC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzd2l0Y2hfbGFuZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2kxOG4ubGFuZ3VhZ2UgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFuZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1wiaWNvbiBcIiArIGkxOG4ubGFuZ3VhZ2V9Pjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhbmdzW2kxOG4ubGFuZ3VhZ2VdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3B1cF9sYW5nc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCIgdGl0bGU9XCJERExWaWQgLSBPbmxpbmUgVmlkZW8gRG93bmxvYWRlclwiIGNsYXNzTmFtZT1cImxhbmdcIiBvbkNsaWNrPXsoZSkgPT4gY2hhbmdlTGFuZyhlLCBcImVuXCIpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBlblwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRW5nbGlzaFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2ZyXCIgdGl0bGU9XCJERExWaWQgLSBUw6lsw6ljaGFyZ2V1ciBkZSB2aWTDqW9zIGVuIGxpZ25lXCIgY2xhc3NOYW1lPVwibGFuZ1wiIG9uQ2xpY2s9eyhlKSA9PiBjaGFuZ2VMYW5nKGUsIFwiZnJcIil9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGZyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGcmFuw6dhaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9wdFwiIHRpdGxlPVwiRERMVmlkIC0gRG93bmxvYWQgZGUgVsOtZGVvcyBPbmxpbmVcIiBjbGFzc05hbWU9XCJsYW5nXCIgb25DbGljaz17KGUpID0+IGNoYW5nZUxhbmcoZSwgXCJwdFwiKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gcHRcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBvcnR1Z3XDqnMgQnJhc2lsZWlyb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge2Nvb2tpZUJhbm5lclNob3cgPyAoXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImNvb2tpZWJhbm5lclwiIGNsYXNzTmFtZT1cImFuaW1hdGVkIGZhZGVJblVwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dCgnY29va2llc19ub3RpY2UnKX0gPExpbmsgaHJlZj1cIi9wcml2YWN5LXBvbGljeVwiPjxhIHRpdGxlPXt0KCdwcml2YWN5X3BvbGljeScpICsgJyAtIERETFZpZCd9Pnt0KCdwcml2YWN5X3BvbGljeScpfTwvYT48L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiIG9uQ2xpY2s9eygpID0+IGhpZGVCYW5uZXIoKX0+e3QoJ2lfdW5kZXJzdGFuZCcpfTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbkZvb3Rlci5wcm9wVHlwZXMgPSB7XG4gICAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKCdmb290ZXInKShGb290ZXIpIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBpMThuLCBMaW5rLCB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi9pMThuJztcclxuXHJcbmNvbnN0IEhlYWRlciA9ICh7wqB0IH0pID0+IHtcclxuICAgIGNvbnN0IFtzaG93TW9iaWxlTWVudSwgc2V0U2hvd01vYmlsZU1lbnVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VTdGF0ZShcImxpZ2h0XCIpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgaWYgKFwidGhlbWVcIiBpbiB3aW5kb3cubG9jYWxTdG9yYWdlKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImh0bWxcIikuY2xhc3NMaXN0LmFkZCh3aW5kb3cubG9jYWxTdG9yYWdlLnRoZW1lKTtcclxuICAgICAgICAgICAgICAgIHNldFRoZW1lKHdpbmRvdy5sb2NhbFN0b3JhZ2UudGhlbWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhICYmIHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJykubWF0Y2hlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaHRtbFwiKS5jbGFzc0xpc3QuYWRkKFwiZGFya1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaGVtZShcImRhcmtcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgdXBkYXRlVGhlbWUgPSAodGhlbWUpID0+IHtcclxuICAgICAgICBzZXRUaGVtZSh0aGVtZSk7XHJcbiAgICAgICAgd2luZG93LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJodG1sXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJsaWdodFwiKTtcclxuICAgICAgICB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImh0bWxcIikuY2xhc3NMaXN0LnJlbW92ZShcImRhcmtcIik7XHJcbiAgICAgICAgd2luZG93LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJodG1sXCIpLmNsYXNzTGlzdC5hZGQodGhlbWUpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIHRoZW1lKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbGFuZ3MgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0VuZ2xpc2gnLFxyXG4gICAgICAgICAgICB2YWx1ZTogJ2VuJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0ZyYW7Dp2FpcycsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnZnInXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnUG9ydHVndcOqcyBCcmFzaWxlaXJvJyxcclxuICAgICAgICAgICAgdmFsdWU6ICdwdCdcclxuICAgICAgICB9XHJcbiAgICBdO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD1cImhlYWRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImxvZ29cIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsb2dvXCIgdGl0bGU9e3QoJ2hlYWRsaW5lJyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRERMVmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibmF2XCIgY2xhc3NOYW1lPXsoc2hvd01vYmlsZU1lbnUpID8gJ3Nob3ctbWVudScgOiBudWxsfT5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBpZD1cImxhbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2kxOG4ubGFuZ3VhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpMThuLmNoYW5nZUxhbmd1YWdlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTaG93TW9iaWxlTWVudShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17dCgnc2l0ZV9sYW5ndWFnZScpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFuZ3MubWFwKChsYW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxvcHRpb24gdmFsdWU9e2xhbmcudmFsdWV9IGtleT17bGFuZy52YWx1ZX0+e2xhbmcudGl0bGV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48YSBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9iaWxlTWVudShmYWxzZSl9IHRpdGxlPXt0KCdob21lJykgKyAnIC0gRERMVmlkJ30+e3QoJ2hvbWUnKX08L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zdXBwb3J0ZWQtd2Vic2l0ZXNcIj48YSBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9iaWxlTWVudShmYWxzZSl9IHRpdGxlPXt0KCdzdXBwb3J0ZWRfd2Vic2l0ZXMnKSArICcgLSBERExWaWQnfT57dCgnc3VwcG9ydGVkX3dlYnNpdGVzJyl9PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+PGEgb25DbGljaz17KCkgPT4gc2V0U2hvd01vYmlsZU1lbnUoZmFsc2UpfSB0aXRsZT17dCgnYWJvdXRfdXMnKSArICcgLSBERExWaWQnfT57dCgnYWJvdXRfdXMnKX08L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIj48YSBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9iaWxlTWVudShmYWxzZSl9IHRpdGxlPXt0KCdjb250YWN0X3VzJyl9Pnt0KCdjb250YWN0X3VzJyl9PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi92aWRlb2Rvd25sb2FkZXJcIj48YSBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9iaWxlTWVudShmYWxzZSl9IHRpdGxlPXt0KCd2aWRlb19kb3dubG9hZGVyJyl9Pnt0KCd2aWRlb19kb3dubG9hZGVyJyl9PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91cmxzaG9ydGVuZXJcIj48YSBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9iaWxlTWVudShmYWxzZSl9IHRpdGxlPXt0KCd1cmxfc2hvcnRlbmVyJyl9Pnt0KCd1cmxfc2hvcnRlbmVyJyl9PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3RlbGVncmFtLm1lL2RkbHZpZF9ib3RcIiB0aXRsZT1cIkRETFZpZCBUZWxlZ3JhbSBCb3RcIiB0YXJnZXQ9XCJfYmxhbmtcIj5UZWxlZ3JhbTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7dGhlbWUgPT09IFwibGlnaHRcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiB1cGRhdGVUaGVtZShcImRhcmtcIil9IGNsYXNzTmFtZT1cInRoZW1lIGRhcmtcIj48aT48L2k+IDxzcGFuPnt0KCdkYXJrX21vZGUnKX08L3NwYW4+PC9hPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiB1cGRhdGVUaGVtZShcImxpZ2h0XCIpfSBjbGFzc05hbWU9XCJ0aGVtZSBsaWdodFwiPjxpPjwvaT4gPHNwYW4+e3QoJ2xpZ2h0X21vZGUnKX08L3NwYW4+PC9hPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdGVsZWdyYW0ubWUvZGRsdmlkX2JvdFwiIGlkPVwidGVsZWdyYW1Cb3RcIiB0YXJnZXQ9XCJfYmxhbmtcIj5ERExWaWQgVGVsZWdyYW0gQm90PC9hPlxyXG5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1vYmlsZU1lbnVCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9iaWxlTWVudSghc2hvd01vYmlsZU1lbnUpfT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICB7c2hvd01vYmlsZU1lbnUgPyA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZU1lbnVPdmVybGF5XCIgb25DbGljaz17KCkgPT4gc2V0U2hvd01vYmlsZU1lbnUoZmFsc2UpfSAvPiA6IG51bGx9XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhclwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5IZWFkZXIucHJvcFR5cGVzID0ge1xyXG4gICAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKCdoZWFkZXInKShIZWFkZXIpIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1pMThuZXh0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc3R5bGVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==