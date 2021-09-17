"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/BlogPosts.js":
/*!*********************************!*\
  !*** ./components/BlogPosts.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_asus_Desktop_prisma_gql_todo_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../graphql/queries */ "./graphql/queries.js");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card */ "./components/Card.js");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Loading */ "./components/Loading.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _UpdateModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UpdateModal */ "./components/UpdateModal.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\asus\\Desktop\\prisma-gql-todo\\components\\BlogPosts.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_asus_Desktop_prisma_gql_todo_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











var BlogPosts = function BlogPosts() {
  _s();

  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useQuery)(_graphql_queries__WEBPACK_IMPORTED_MODULE_1__.GET_BLOGPOSTS),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  var _useDisclosure = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.useDisclosure)(),
      isOpen = _useDisclosure.isOpen,
      onOpen = _useDisclosure.onOpen,
      onClose = _useDisclosure.onClose;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
      children: "error"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 14
    }, _this), loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Loading__WEBPACK_IMPORTED_MODULE_3__.default, {
      loading: loading
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_UpdateModal__WEBPACK_IMPORTED_MODULE_5__.default, {
        isOpen: isOpen,
        onClose: onClose
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 6
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Grid, {
        templateColumns: "repeat(3, 1fr)",
        justifyItems: "center",
        px: "150px",
        children: data.blogPosts.map(function (blogPostData) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_2__.default, _objectSpread(_objectSpread({}, blogPostData), {}, {
            onOpen: onOpen
          }), blogPostData.id, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 8
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 6
      }, _this)]
    }, void 0, true)]
  }, void 0, true);
};

_s(BlogPosts, "1VCvtIrbdRvgYvAnpRtGNBkXRNo=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useQuery, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.useDisclosure];
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


/***/ }),

/***/ "./components/UpdateModal.js":
/*!***********************************!*\
  !*** ./components/UpdateModal.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\asus\\Desktop\\prisma-gql-todo\\components\\UpdateModal.js",
    _this = undefined;




var UpdateModal = function UpdateModal(_ref) {
  var isOpen = _ref.isOpen,
      onClose = _ref.onClose;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Modal, {
    isOpen: isOpen,
    onClose: onClose,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalOverlay, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalContent, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalHeader, {
        children: "Edit Todo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalCloseButton, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalBody, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
          as: "form",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Textarea, {
            w: "400px",
            h: "100px",
            placeholder: "Update Todo here.."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 7
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalFooter, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
          colorScheme: "gray",
          mr: 3,
          onClick: onClose,
          children: "Cancel"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
          colorScheme: "teal",
          type: "submit",
          children: "Update"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 3
  }, _this);
};

_c = UpdateModal;
/* harmony default export */ __webpack_exports__["default"] = (UpdateModal);

var _c;

$RefreshReg$(_c, "UpdateModal");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTQ4OTJkODBiZDY4MTI1ODU5MzguaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsSUFBTVEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUN2QixrQkFBaUNSLHdEQUFRLENBQUNDLDJEQUFELENBQXpDO0FBQUEsTUFBUVEsT0FBUixhQUFRQSxPQUFSO0FBQUEsTUFBaUJDLEtBQWpCLGFBQWlCQSxLQUFqQjtBQUFBLE1BQXdCQyxJQUF4QixhQUF3QkEsSUFBeEI7O0FBQ0EsdUJBQW9DTiwrREFBYSxFQUFqRDtBQUFBLE1BQVFPLE1BQVIsa0JBQVFBLE1BQVI7QUFBQSxNQUFnQkMsTUFBaEIsa0JBQWdCQSxNQUFoQjtBQUFBLE1BQXdCQyxPQUF4QixrQkFBd0JBLE9BQXhCOztBQUVBLHNCQUNDO0FBQUEsZUFDRUosS0FBSyxpQkFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURYLEVBRUVELE9BQU8sZ0JBQ1AsOERBQUMsNkNBQUQ7QUFBUyxhQUFPLEVBQUVBO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFETyxnQkFHUDtBQUFBLDhCQUNDLDhEQUFDLGlEQUFEO0FBQWEsY0FBTSxFQUFFRyxNQUFyQjtBQUE2QixlQUFPLEVBQUVFO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxlQUVDLDhEQUFDLGtEQUFEO0FBQ0MsdUJBQWUsRUFBQyxnQkFEakI7QUFFQyxvQkFBWSxFQUFDLFFBRmQ7QUFHQyxVQUFFLEVBQUMsT0FISjtBQUFBLGtCQUtFSCxJQUFJLENBQUNJLFNBQUwsQ0FBZUMsR0FBZixDQUFtQixVQUFDQyxZQUFEO0FBQUEsOEJBQ25CLDhEQUFDLDBDQUFELGtDQUFnQ0EsWUFBaEM7QUFBOEMsa0JBQU0sRUFBRUo7QUFBdEQsY0FBV0ksWUFBWSxDQUFDQyxFQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURtQjtBQUFBLFNBQW5CO0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZEO0FBQUEsb0JBTEY7QUFBQSxrQkFERDtBQXFCQSxDQXpCRDs7R0FBTVY7VUFDNEJSLHNEQUNHSzs7O0tBRi9CRztBQTJCTiwrREFBZUEsU0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkNBOzs7QUFhQSxJQUFNRCxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUF5QjtBQUFBLE1BQXRCSyxNQUFzQixRQUF0QkEsTUFBc0I7QUFBQSxNQUFkRSxPQUFjLFFBQWRBLE9BQWM7QUFDNUMsc0JBQ0MsOERBQUMsbURBQUQ7QUFBTyxVQUFNLEVBQUVGLE1BQWY7QUFBdUIsV0FBTyxFQUFFRSxPQUFoQztBQUFBLDRCQUNDLDhEQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxlQUVDLDhEQUFDLDBEQUFEO0FBQUEsOEJBQ0MsOERBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxlQUVDLDhEQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRCxlQUdDLDhEQUFDLHVEQUFEO0FBQUEsK0JBQ0MsOERBQUMsaURBQUQ7QUFBSyxZQUFFLEVBQUMsTUFBUjtBQUFBLGlDQUNDLDhEQUFDLHNEQUFEO0FBQVUsYUFBQyxFQUFDLE9BQVo7QUFBb0IsYUFBQyxFQUFDLE9BQXRCO0FBQThCLHVCQUFXLEVBQUM7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEQsZUFTQyw4REFBQyx5REFBRDtBQUFBLGdDQUNDLDhEQUFDLG9EQUFEO0FBQVEscUJBQVcsRUFBQyxNQUFwQjtBQUEyQixZQUFFLEVBQUUsQ0FBL0I7QUFBa0MsaUJBQU8sRUFBRUEsT0FBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQsZUFJQyw4REFBQyxvREFBRDtBQUFRLHFCQUFXLEVBQUMsTUFBcEI7QUFBMkIsY0FBSSxFQUFDLFFBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBdUJBLENBeEJEOztLQUFNUDtBQTBCTiwrREFBZUEsV0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Jsb2dQb3N0cy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VcGRhdGVNb2RhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5pbXBvcnQgeyBHRVRfQkxPR1BPU1RTIH0gZnJvbSBcIi4uL2dyYXBocWwvcXVlcmllc1wiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi9DYXJkXCI7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuL0xvYWRpbmdcIjtcclxuaW1wb3J0IHsgR3JpZCwgdXNlRGlzY2xvc3VyZSB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBVcGRhdGVNb2RhbCBmcm9tIFwiLi9VcGRhdGVNb2RhbFwiO1xyXG5cclxuY29uc3QgQmxvZ1Bvc3RzID0gKCkgPT4ge1xyXG5cdGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KEdFVF9CTE9HUE9TVFMpO1xyXG5cdGNvbnN0IHsgaXNPcGVuLCBvbk9wZW4sIG9uQ2xvc2UgfSA9IHVzZURpc2Nsb3N1cmUoKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdHtlcnJvciAmJiA8cD5lcnJvcjwvcD59XHJcblx0XHRcdHtsb2FkaW5nID8gKFxyXG5cdFx0XHRcdDxMb2FkaW5nIGxvYWRpbmc9e2xvYWRpbmd9IC8+XHJcblx0XHRcdCkgOiAoXHJcblx0XHRcdFx0PD5cclxuXHRcdFx0XHRcdDxVcGRhdGVNb2RhbCBpc09wZW49e2lzT3Blbn0gb25DbG9zZT17b25DbG9zZX0gLz5cclxuXHRcdFx0XHRcdDxHcmlkXHJcblx0XHRcdFx0XHRcdHRlbXBsYXRlQ29sdW1ucz1cInJlcGVhdCgzLCAxZnIpXCJcclxuXHRcdFx0XHRcdFx0anVzdGlmeUl0ZW1zPVwiY2VudGVyXCJcclxuXHRcdFx0XHRcdFx0cHg9XCIxNTBweFwiXHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdHtkYXRhLmJsb2dQb3N0cy5tYXAoKGJsb2dQb3N0RGF0YSkgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdDxDYXJkIGtleT17YmxvZ1Bvc3REYXRhLmlkfSB7Li4uYmxvZ1Bvc3REYXRhfSBvbk9wZW49e29uT3Blbn0gLz5cclxuXHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0PC8+XHJcblx0XHRcdCl9XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmxvZ1Bvc3RzO1xyXG4iLCJpbXBvcnQge1xyXG5cdE1vZGFsLFxyXG5cdEJ1dHRvbixcclxuXHRNb2RhbE92ZXJsYXksXHJcblx0TW9kYWxDb250ZW50LFxyXG5cdE1vZGFsSGVhZGVyLFxyXG5cdE1vZGFsQ2xvc2VCdXR0b24sXHJcblx0TW9kYWxCb2R5LFxyXG5cdE1vZGFsRm9vdGVyLFxyXG5cdFRleHRhcmVhLFxyXG5cdEJveCxcclxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5cclxuY29uc3QgVXBkYXRlTW9kYWwgPSAoeyBpc09wZW4sIG9uQ2xvc2UgfSkgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8TW9kYWwgaXNPcGVuPXtpc09wZW59IG9uQ2xvc2U9e29uQ2xvc2V9PlxyXG5cdFx0XHQ8TW9kYWxPdmVybGF5IC8+XHJcblx0XHRcdDxNb2RhbENvbnRlbnQ+XHJcblx0XHRcdFx0PE1vZGFsSGVhZGVyPkVkaXQgVG9kbzwvTW9kYWxIZWFkZXI+XHJcblx0XHRcdFx0PE1vZGFsQ2xvc2VCdXR0b24gLz5cclxuXHRcdFx0XHQ8TW9kYWxCb2R5PlxyXG5cdFx0XHRcdFx0PEJveCBhcz1cImZvcm1cIj5cclxuXHRcdFx0XHRcdFx0PFRleHRhcmVhIHc9XCI0MDBweFwiIGg9XCIxMDBweFwiIHBsYWNlaG9sZGVyPVwiVXBkYXRlIFRvZG8gaGVyZS4uXCIgLz5cclxuXHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdDwvTW9kYWxCb2R5PlxyXG5cclxuXHRcdFx0XHQ8TW9kYWxGb290ZXI+XHJcblx0XHRcdFx0XHQ8QnV0dG9uIGNvbG9yU2NoZW1lPVwiZ3JheVwiIG1yPXszfSBvbkNsaWNrPXtvbkNsb3NlfT5cclxuXHRcdFx0XHRcdFx0Q2FuY2VsXHJcblx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdDxCdXR0b24gY29sb3JTY2hlbWU9XCJ0ZWFsXCIgdHlwZT1cInN1Ym1pdFwiPlxyXG5cdFx0XHRcdFx0XHRVcGRhdGVcclxuXHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdDwvTW9kYWxGb290ZXI+XHJcblx0XHRcdDwvTW9kYWxDb250ZW50PlxyXG5cdFx0PC9Nb2RhbD5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXBkYXRlTW9kYWw7XHJcbiJdLCJuYW1lcyI6WyJ1c2VRdWVyeSIsIkdFVF9CTE9HUE9TVFMiLCJDYXJkIiwiTG9hZGluZyIsIkdyaWQiLCJ1c2VEaXNjbG9zdXJlIiwidXNlU3RhdGUiLCJVcGRhdGVNb2RhbCIsIkJsb2dQb3N0cyIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJpc09wZW4iLCJvbk9wZW4iLCJvbkNsb3NlIiwiYmxvZ1Bvc3RzIiwibWFwIiwiYmxvZ1Bvc3REYXRhIiwiaWQiLCJNb2RhbCIsIkJ1dHRvbiIsIk1vZGFsT3ZlcmxheSIsIk1vZGFsQ29udGVudCIsIk1vZGFsSGVhZGVyIiwiTW9kYWxDbG9zZUJ1dHRvbiIsIk1vZGFsQm9keSIsIk1vZGFsRm9vdGVyIiwiVGV4dGFyZWEiLCJCb3giXSwic291cmNlUm9vdCI6IiJ9