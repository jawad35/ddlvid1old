webpackHotUpdate_N_E("pages/_error",{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=D%3A%5CWeb%20Development%5CClientWork%5Cddl_vid1%5Cpages%5C_error.js!./":
false,

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=next%2Fdist%2Fpages%2F_error!./":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=next%2Fdist%2Fpages%2F_error ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_error",
      function () {
        return __webpack_require__(/*! next/dist/pages/_error */ "./node_modules/next/dist/pages/_error.js");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/next/dist/pages/_error.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/pages/_error.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
exports.__esModule = true;
exports["default"] = void 0;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ "./node_modules/next/dist/next-server/lib/head.js"));
var statusCodes = {
  400: 'Bad Request',
  404: 'This page could not be found',
  405: 'Method Not Allowed',
  500: 'Internal Server Error'
};
function _getInitialProps(_ref) {
  var res = _ref.res,
    err = _ref.err;
  var statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode: statusCode
  };
} /**
  * `Error` component used for handling errors.
  */
var Error = /*#__PURE__*/function (_react$default$Compon) {
  _inherits(Error, _react$default$Compon);
  var _super = _createSuper(Error);
  function Error() {
    _classCallCheck(this, Error);
    return _super.apply(this, arguments);
  }
  _createClass(Error, [{
    key: "render",
    value: function render() {
      var statusCode = this.props.statusCode;
      var title = this.props.title || statusCodes[statusCode] || 'An unexpected error has occurred';
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: styles.error
      }, /*#__PURE__*/_react["default"].createElement(_head["default"], null, /*#__PURE__*/_react["default"].createElement("title", null, statusCode, ": ", title)), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("style", {
        dangerouslySetInnerHTML: {
          __html: 'body { margin: 0 }'
        }
      }), statusCode ? /*#__PURE__*/_react["default"].createElement("h1", {
        style: styles.h1
      }, statusCode) : null, /*#__PURE__*/_react["default"].createElement("div", {
        style: styles.desc
      }, /*#__PURE__*/_react["default"].createElement("h2", {
        style: styles.h2
      }, title, "."))));
    }
  }]);
  return Error;
}(_react["default"].Component);
exports["default"] = Error;
Error.displayName = 'ErrorPage';
Error.getInitialProps = _getInitialProps;
Error.origGetInitialProps = _getInitialProps;
var styles = {
  error: {
    color: '#000',
    background: '#fff',
    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
    height: '100vh',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  desc: {
    display: 'inline-block',
    textAlign: 'left',
    lineHeight: '49px',
    height: '49px',
    verticalAlign: 'middle'
  },
  h1: {
    display: 'inline-block',
    borderRight: '1px solid rgba(0, 0, 0,.3)',
    margin: 0,
    marginRight: '20px',
    padding: '10px 23px 10px 0',
    fontSize: '24px',
    fontWeight: 500,
    verticalAlign: 'top'
  },
  h2: {
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: 'inherit',
    margin: 0,
    padding: 0
  }
};

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
false,

/***/ "./pages/_error.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1jbGllbnQtcGFnZXMtbG9hZGVyLmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vcGFnZXMvX2Vycm9yLnRzeCJdLCJuYW1lcyI6WyJzdGF0dXNDb2RlcyIsIl9nZXRJbml0aWFsUHJvcHMiLCJyZXMiLCJlcnIiLCJzdGF0dXNDb2RlIiwiRXJyb3IiLCJyZW5kZXIiLCJwcm9wcyIsInRpdGxlIiwic3R5bGVzIiwiZXJyb3IiLCJfX2h0bWwiLCJoMSIsImRlc2MiLCJoMiIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGlzcGxheU5hbWUiLCJnZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiY29sb3IiLCJiYWNrZ3JvdW5kIiwiZm9udEZhbWlseSIsImhlaWdodCIsInRleHRBbGlnbiIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwibGluZUhlaWdodCIsInZlcnRpY2FsQWxpZ24iLCJib3JkZXJSaWdodCIsIm1hcmdpbiIsIm1hcmdpblJpZ2h0IiwicGFkZGluZyIsImZvbnRTaXplIiwiZm9udFdlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUJBQU8sQ0FBQyx3RUFBd0I7QUFDL0M7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFHQSxJQUFNQSxXQUF1QyxHQUFHO0VBQzlDLEtBQUssYUFEeUM7RUFFOUMsS0FBSyw4QkFGeUM7RUFHOUMsS0FBSyxvQkFIeUM7RUFJOUMsS0FBSztBQUp5QyxDQUFoRDtBQVlBLFNBQVNDLGdCQUFULE9BR3NEO0VBQUEsSUFGcERDLEdBRHdCLFFBQ3hCQSxHQUR3QjtJQUV4QkMsR0FGRixRQUVFQSxHQUZGO0VBSUUsSUFBTUMsVUFBVSxHQUNkRixHQUFHLElBQUlBLEdBQUcsQ0FBQ0UsVUFBWEYsR0FBd0JBLEdBQUcsQ0FBQ0UsVUFBNUJGLEdBQXlDQyxHQUFHLEdBQUdBLEdBQUcsQ0FBQ0MsVUFBUCxHQUFxQixHQURuRTtFQUVBLE9BQU87SUFBRUEsVUFBRixFQUFFQTtFQUFGLENBQVA7QUFDRCxDQUVEOztBQUdlO0FBSGYsSUFHcUJDLEtBQU47RUFBQTtFQUFBO0VBQUE7SUFBQTtJQUFBO0VBQUE7RUFBQTtJQUFBO0lBQUEsT0FNYkMsa0JBQVM7TUFDUCxJQUFRRixVQUFGLEdBQWlCLEtBQUtHLEtBQTVCLENBQVFILFVBQUY7TUFDTixJQUFNSSxLQUFLLEdBQ1QsS0FBS0QsS0FBTCxDQUFXQyxLQUFYLElBQ0FSLFdBQVcsQ0FBQ0ksVUFBRCxDQURYLElBRUEsa0NBSEY7TUFLQSxvQkFDRTtRQUFLLEtBQUssRUFBRUssTUFBTSxDQUFDQztNQUFuQixnQkFDRSxnQ0FBQyxnQkFBRCxxQkFDRSwrQ0FDR04sVUFESCxRQUNpQkksS0FEakIsQ0FERixDQURGLGVBTUUsMERBQ0U7UUFBTyx1QkFBdUIsRUFBRTtVQUFFRyxNQUFNLEVBQUU7UUFBVjtNQUFoQyxFQURGLEVBRUdQLFVBQVUsZ0JBQUc7UUFBSSxLQUFLLEVBQUVLLE1BQU0sQ0FBQ0c7TUFBbEIsR0FBdUJSLFVBQXZCLENBQUgsR0FBNkMsSUFGMUQsZUFHRTtRQUFLLEtBQUssRUFBRUssTUFBTSxDQUFDSTtNQUFuQixnQkFDRTtRQUFJLEtBQUssRUFBRUosTUFBTSxDQUFDSztNQUFsQixHQUF1Qk4sS0FBdkIsTUFERixDQUhGLENBTkYsQ0FERjtJQWdCRDtFQTdCd0U7RUFBQTtBQUFBLEVBQWhDTyxrQkFBTUMsU0FBMEI7O0FBQXREWCxLLENBQ1pZLFcsR0FBYyxXO0FBREZaLEssQ0FHWmEsZSxHQUFrQmpCLGdCO0FBSE5JLEssQ0FJWmMsbUIsR0FBc0JsQixnQjtBQTRCL0IsSUFBTVEsTUFBNEMsR0FBRztFQUNuREMsS0FBSyxFQUFFO0lBQ0xVLEtBQUssRUFBRSxNQURGO0lBRUxDLFVBQVUsRUFBRSxNQUZQO0lBR0xDLFVBQVUsRUFDUiwySEFKRztJQUtMQyxNQUFNLEVBQUUsT0FMSDtJQU1MQyxTQUFTLEVBQUUsUUFOTjtJQU9MQyxPQUFPLEVBQUUsTUFQSjtJQVFMQyxhQUFhLEVBQUUsUUFSVjtJQVNMQyxVQUFVLEVBQUUsUUFUUDtJQVVMQyxjQUFjLEVBQUU7RUFWWCxDQUQ0QztFQWNuRGYsSUFBSSxFQUFFO0lBQ0pZLE9BQU8sRUFBRSxjQURMO0lBRUpELFNBQVMsRUFBRSxNQUZQO0lBR0pLLFVBQVUsRUFBRSxNQUhSO0lBSUpOLE1BQU0sRUFBRSxNQUpKO0lBS0pPLGFBQWEsRUFBRTtFQUxYLENBZDZDO0VBc0JuRGxCLEVBQUUsRUFBRTtJQUNGYSxPQUFPLEVBQUUsY0FEUDtJQUVGTSxXQUFXLEVBQUUsNEJBRlg7SUFHRkMsTUFBTSxFQUFFLENBSE47SUFJRkMsV0FBVyxFQUFFLE1BSlg7SUFLRkMsT0FBTyxFQUFFLGtCQUxQO0lBTUZDLFFBQVEsRUFBRSxNQU5SO0lBT0ZDLFVBQVUsRUFBRSxHQVBWO0lBUUZOLGFBQWEsRUFBRTtFQVJiLENBdEIrQztFQWlDbkRoQixFQUFFLEVBQUU7SUFDRnFCLFFBQVEsRUFBRSxNQURSO0lBRUZDLFVBQVUsRUFBRSxRQUZWO0lBR0ZQLFVBQVUsRUFBRSxTQUhWO0lBSUZHLE1BQU0sRUFBRSxDQUpOO0lBS0ZFLE9BQU8sRUFBRTtFQUxQO0FBakMrQyxDQUFyRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fZXJyb3IuNTNmZjRlMGQ4MWQyMjkzMGI0MTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvX2Vycm9yXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwibmV4dC9kaXN0L3BhZ2VzL19lcnJvclwiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL2hlYWQnXG5pbXBvcnQgeyBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5cbmNvbnN0IHN0YXR1c0NvZGVzOiB7IFtjb2RlOiBudW1iZXJdOiBzdHJpbmcgfSA9IHtcbiAgNDAwOiAnQmFkIFJlcXVlc3QnLFxuICA0MDQ6ICdUaGlzIHBhZ2UgY291bGQgbm90IGJlIGZvdW5kJyxcbiAgNDA1OiAnTWV0aG9kIE5vdCBBbGxvd2VkJyxcbiAgNTAwOiAnSW50ZXJuYWwgU2VydmVyIEVycm9yJyxcbn1cblxuZXhwb3J0IHR5cGUgRXJyb3JQcm9wcyA9IHtcbiAgc3RhdHVzQ29kZTogbnVtYmVyXG4gIHRpdGxlPzogc3RyaW5nXG59XG5cbmZ1bmN0aW9uIF9nZXRJbml0aWFsUHJvcHMoe1xuICByZXMsXG4gIGVycixcbn06IE5leHRQYWdlQ29udGV4dCk6IFByb21pc2U8RXJyb3JQcm9wcz4gfCBFcnJvclByb3BzIHtcbiAgY29uc3Qgc3RhdHVzQ29kZSA9XG4gICAgcmVzICYmIHJlcy5zdGF0dXNDb2RlID8gcmVzLnN0YXR1c0NvZGUgOiBlcnIgPyBlcnIuc3RhdHVzQ29kZSEgOiA0MDRcbiAgcmV0dXJuIHsgc3RhdHVzQ29kZSB9XG59XG5cbi8qKlxuICogYEVycm9yYCBjb21wb25lbnQgdXNlZCBmb3IgaGFuZGxpbmcgZXJyb3JzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcnJvcjxQID0ge30+IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFAgJiBFcnJvclByb3BzPiB7XG4gIHN0YXRpYyBkaXNwbGF5TmFtZSA9ICdFcnJvclBhZ2UnXG5cbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyA9IF9nZXRJbml0aWFsUHJvcHNcbiAgc3RhdGljIG9yaWdHZXRJbml0aWFsUHJvcHMgPSBfZ2V0SW5pdGlhbFByb3BzXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc3RhdHVzQ29kZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHRpdGxlID1cbiAgICAgIHRoaXMucHJvcHMudGl0bGUgfHxcbiAgICAgIHN0YXR1c0NvZGVzW3N0YXR1c0NvZGVdIHx8XG4gICAgICAnQW4gdW5leHBlY3RlZCBlcnJvciBoYXMgb2NjdXJyZWQnXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmVycm9yfT5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPlxuICAgICAgICAgICAge3N0YXR1c0NvZGV9OiB7dGl0bGV9XG4gICAgICAgICAgPC90aXRsZT5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxzdHlsZSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6ICdib2R5IHsgbWFyZ2luOiAwIH0nIH19IC8+XG4gICAgICAgICAge3N0YXR1c0NvZGUgPyA8aDEgc3R5bGU9e3N0eWxlcy5oMX0+e3N0YXR1c0NvZGV9PC9oMT4gOiBudWxsfVxuICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5kZXNjfT5cbiAgICAgICAgICAgIDxoMiBzdHlsZT17c3R5bGVzLmgyfT57dGl0bGV9LjwvaDI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IHN0eWxlczogeyBbazogc3RyaW5nXTogUmVhY3QuQ1NTUHJvcGVydGllcyB9ID0ge1xuICBlcnJvcjoge1xuICAgIGNvbG9yOiAnIzAwMCcsXG4gICAgYmFja2dyb3VuZDogJyNmZmYnLFxuICAgIGZvbnRGYW1pbHk6XG4gICAgICAnLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBSb2JvdG8sIFwiU2Vnb2UgVUlcIiwgXCJGaXJhIFNhbnNcIiwgQXZlbmlyLCBcIkhlbHZldGljYSBOZXVlXCIsIFwiTHVjaWRhIEdyYW5kZVwiLCBzYW5zLXNlcmlmJyxcbiAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICB9LFxuXG4gIGRlc2M6IHtcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgICBsaW5lSGVpZ2h0OiAnNDlweCcsXG4gICAgaGVpZ2h0OiAnNDlweCcsXG4gICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gIH0sXG5cbiAgaDE6IHtcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICBib3JkZXJSaWdodDogJzFweCBzb2xpZCByZ2JhKDAsIDAsIDAsLjMpJyxcbiAgICBtYXJnaW46IDAsXG4gICAgbWFyZ2luUmlnaHQ6ICcyMHB4JyxcbiAgICBwYWRkaW5nOiAnMTBweCAyM3B4IDEwcHggMCcsXG4gICAgZm9udFNpemU6ICcyNHB4JyxcbiAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gIH0sXG5cbiAgaDI6IHtcbiAgICBmb250U2l6ZTogJzE0cHgnLFxuICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxuICAgIGxpbmVIZWlnaHQ6ICdpbmhlcml0JyxcbiAgICBtYXJnaW46IDAsXG4gICAgcGFkZGluZzogMCxcbiAgfSxcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=