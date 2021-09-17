"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/BlogPosts.js":
/*!*********************************!*\
  !*** ./components/BlogPosts.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_asus_Desktop_prisma_gql_todo_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../graphql/queries */ "./graphql/queries.js");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card */ "./components/Card.js");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Loading */ "./components/Loading.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\asus\\Desktop\\prisma-gql-todo\\components\\BlogPosts.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_asus_Desktop_prisma_gql_todo_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var BlogPosts = function BlogPosts() {
  _s();

  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery)(_graphql_queries__WEBPACK_IMPORTED_MODULE_1__.GET_BLOGPOSTS),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  var _useDisclosure = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.useDisclosure)(),
      isOpen = _useDisclosure.isOpen,
      onOpen = _useDisclosure.onOpen,
      onClose = _useDisclosure.onClose;

  var Modall = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Modal, {
    isOpen: isOpen,
    onClose: onClose,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.ModalOverlay, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.ModalContent, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.ModalHeader, {
        children: "Edit Post"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.ModalCloseButton, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.ModalBody, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Textarea, {
          w: "400px",
          h: "80px",
          placeholder: "Update Todo here.."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.ModalFooter, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {
          colorScheme: "blue",
          mr: 3,
          onClick: onClose,
          children: "Cancel"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {
          variant: "ghost",
          children: "Update"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 3
  }, _this);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
      children: "error"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 14
    }, _this), loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_Loading__WEBPACK_IMPORTED_MODULE_3__.default, {
      loading: loading
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Grid, {
        templateColumns: "repeat(3, 1fr)",
        justifyItems: "center",
        px: "150px",
        children: data.blogPosts.map(function (blogPostData) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_2__.default, _objectSpread(_objectSpread({}, blogPostData), {}, {
            onOpen: onOpen
          }), blogPostData.id, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 8
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 6
      }, _this), Modall]
    }, void 0, true)]
  }, void 0, true);
};

_s(BlogPosts, "1VCvtIrbdRvgYvAnpRtGNBkXRNo=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.useDisclosure];
});

_c = BlogPosts;
/* harmony default export */ __webpack_exports__["default"] = (BlogPosts);

var _c;

$RefreshReg$(_c, "BlogPosts");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWY4YjdhMDg2YjFmOWIzNjNmNTAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFhQSxJQUFNYyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQ3ZCLGtCQUFpQ2Qsd0RBQVEsQ0FBQ0MsMkRBQUQsQ0FBekM7QUFBQSxNQUFRYyxPQUFSLGFBQVFBLE9BQVI7QUFBQSxNQUFpQkMsS0FBakIsYUFBaUJBLEtBQWpCO0FBQUEsTUFBd0JDLElBQXhCLGFBQXdCQSxJQUF4Qjs7QUFDQSx1QkFBb0NaLCtEQUFhLEVBQWpEO0FBQUEsTUFBUWEsTUFBUixrQkFBUUEsTUFBUjtBQUFBLE1BQWdCQyxNQUFoQixrQkFBZ0JBLE1BQWhCO0FBQUEsTUFBd0JDLE9BQXhCLGtCQUF3QkEsT0FBeEI7O0FBRUEsTUFBTUMsTUFBTSxnQkFDWCw4REFBQyxLQUFEO0FBQU8sVUFBTSxFQUFFSCxNQUFmO0FBQXVCLFdBQU8sRUFBRUUsT0FBaEM7QUFBQSw0QkFDQyw4REFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQsZUFFQyw4REFBQywwREFBRDtBQUFBLDhCQUNDLDhEQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQsZUFFQyw4REFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkQsZUFHQyw4REFBQyx1REFBRDtBQUFBLCtCQUNDLDhEQUFDLHNEQUFEO0FBQVUsV0FBQyxFQUFDLE9BQVo7QUFBb0IsV0FBQyxFQUFDLE1BQXRCO0FBQTZCLHFCQUFXLEVBQUM7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRCxlQU9DLDhEQUFDLHlEQUFEO0FBQUEsZ0NBQ0MsOERBQUMsb0RBQUQ7QUFBUSxxQkFBVyxFQUFDLE1BQXBCO0FBQTJCLFlBQUUsRUFBRSxDQUEvQjtBQUFrQyxpQkFBTyxFQUFFQSxPQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxlQUlDLDhEQUFDLG9EQUFEO0FBQVEsaUJBQU8sRUFBQyxPQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDs7QUFvQkEsc0JBQ0M7QUFBQSxlQUNFSixLQUFLLGlCQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRFgsRUFFRUQsT0FBTyxnQkFDUCw4REFBQyw2Q0FBRDtBQUFTLGFBQU8sRUFBRUE7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURPLGdCQUdQO0FBQUEsOEJBQ0MsOERBQUMsa0RBQUQ7QUFDQyx1QkFBZSxFQUFDLGdCQURqQjtBQUVDLG9CQUFZLEVBQUMsUUFGZDtBQUdDLFVBQUUsRUFBQyxPQUhKO0FBQUEsa0JBS0VFLElBQUksQ0FBQ0ssU0FBTCxDQUFlQyxHQUFmLENBQW1CLFVBQUNDLFlBQUQ7QUFBQSw4QkFDbkIsOERBQUMsMENBQUQsa0NBQWdDQSxZQUFoQztBQUE4QyxrQkFBTSxFQUFFTDtBQUF0RCxjQUFXSyxZQUFZLENBQUNDLEVBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRG1CO0FBQUEsU0FBbkI7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQsRUFVRUosTUFWRjtBQUFBLG9CQUxGO0FBQUEsa0JBREQ7QUFxQkEsQ0E3Q0Q7O0dBQU1QO1VBQzRCZCxzREFDR0s7OztLQUYvQlM7QUErQ04sK0RBQWVBLFNBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CbG9nUG9zdHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IHsgR0VUX0JMT0dQT1NUUyB9IGZyb20gXCIuLi9ncmFwaHFsL3F1ZXJpZXNcIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcIi4vQ2FyZFwiO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi9Mb2FkaW5nXCI7XHJcbmltcG9ydCB7XHJcblx0R3JpZCxcclxuXHR1c2VEaXNjbG9zdXJlLFxyXG5cdEJ1dHRvbixcclxuXHRNb2RhbE92ZXJsYXksXHJcblx0TW9kYWxDb250ZW50LFxyXG5cdE1vZGFsSGVhZGVyLFxyXG5cdE1vZGFsQ2xvc2VCdXR0b24sXHJcblx0TW9kYWxCb2R5LFxyXG5cdE1vZGFsRm9vdGVyLFxyXG5cdFRleHRhcmVhLFxyXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcblxyXG5jb25zdCBCbG9nUG9zdHMgPSAoKSA9PiB7XHJcblx0Y29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoR0VUX0JMT0dQT1NUUyk7XHJcblx0Y29uc3QgeyBpc09wZW4sIG9uT3Blbiwgb25DbG9zZSB9ID0gdXNlRGlzY2xvc3VyZSgpO1xyXG5cclxuXHRjb25zdCBNb2RhbGwgPSAoXHJcblx0XHQ8TW9kYWwgaXNPcGVuPXtpc09wZW59IG9uQ2xvc2U9e29uQ2xvc2V9PlxyXG5cdFx0XHQ8TW9kYWxPdmVybGF5IC8+XHJcblx0XHRcdDxNb2RhbENvbnRlbnQ+XHJcblx0XHRcdFx0PE1vZGFsSGVhZGVyPkVkaXQgUG9zdDwvTW9kYWxIZWFkZXI+XHJcblx0XHRcdFx0PE1vZGFsQ2xvc2VCdXR0b24gLz5cclxuXHRcdFx0XHQ8TW9kYWxCb2R5PlxyXG5cdFx0XHRcdFx0PFRleHRhcmVhIHc9XCI0MDBweFwiIGg9XCI4MHB4XCIgcGxhY2Vob2xkZXI9XCJVcGRhdGUgVG9kbyBoZXJlLi5cIiAvPlxyXG5cdFx0XHRcdDwvTW9kYWxCb2R5PlxyXG5cclxuXHRcdFx0XHQ8TW9kYWxGb290ZXI+XHJcblx0XHRcdFx0XHQ8QnV0dG9uIGNvbG9yU2NoZW1lPVwiYmx1ZVwiIG1yPXszfSBvbkNsaWNrPXtvbkNsb3NlfT5cclxuXHRcdFx0XHRcdFx0Q2FuY2VsXHJcblx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdDxCdXR0b24gdmFyaWFudD1cImdob3N0XCI+VXBkYXRlPC9CdXR0b24+XHJcblx0XHRcdFx0PC9Nb2RhbEZvb3Rlcj5cclxuXHRcdFx0PC9Nb2RhbENvbnRlbnQ+XHJcblx0XHQ8L01vZGFsPlxyXG5cdCk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHR7ZXJyb3IgJiYgPHA+ZXJyb3I8L3A+fVxyXG5cdFx0XHR7bG9hZGluZyA/IChcclxuXHRcdFx0XHQ8TG9hZGluZyBsb2FkaW5nPXtsb2FkaW5nfSAvPlxyXG5cdFx0XHQpIDogKFxyXG5cdFx0XHRcdDw+XHJcblx0XHRcdFx0XHQ8R3JpZFxyXG5cdFx0XHRcdFx0XHR0ZW1wbGF0ZUNvbHVtbnM9XCJyZXBlYXQoMywgMWZyKVwiXHJcblx0XHRcdFx0XHRcdGp1c3RpZnlJdGVtcz1cImNlbnRlclwiXHJcblx0XHRcdFx0XHRcdHB4PVwiMTUwcHhcIlxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHR7ZGF0YS5ibG9nUG9zdHMubWFwKChibG9nUG9zdERhdGEpID0+IChcclxuXHRcdFx0XHRcdFx0XHQ8Q2FyZCBrZXk9e2Jsb2dQb3N0RGF0YS5pZH0gey4uLmJsb2dQb3N0RGF0YX0gb25PcGVuPXtvbk9wZW59IC8+XHJcblx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0e01vZGFsbH1cclxuXHRcdFx0XHQ8Lz5cclxuXHRcdFx0KX1cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCbG9nUG9zdHM7XHJcbiJdLCJuYW1lcyI6WyJ1c2VRdWVyeSIsIkdFVF9CTE9HUE9TVFMiLCJDYXJkIiwiTG9hZGluZyIsIkdyaWQiLCJ1c2VEaXNjbG9zdXJlIiwiQnV0dG9uIiwiTW9kYWxPdmVybGF5IiwiTW9kYWxDb250ZW50IiwiTW9kYWxIZWFkZXIiLCJNb2RhbENsb3NlQnV0dG9uIiwiTW9kYWxCb2R5IiwiTW9kYWxGb290ZXIiLCJUZXh0YXJlYSIsIkJsb2dQb3N0cyIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJpc09wZW4iLCJvbk9wZW4iLCJvbkNsb3NlIiwiTW9kYWxsIiwiYmxvZ1Bvc3RzIiwibWFwIiwiYmxvZ1Bvc3REYXRhIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9