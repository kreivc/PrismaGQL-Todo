"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/BlogPosts.js":
/*!*********************************!*\
  !*** ./components/BlogPosts.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_asus_Desktop_prisma_gql_todo_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../graphql/queries */ "./graphql/queries.js");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card */ "./components/Card.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Loading */ "./components/Loading.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Modal */ "./components/Modal.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\asus\\Desktop\\prisma-gql-todo\\components\\BlogPosts.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_asus_Desktop_prisma_gql_todo_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var BlogPosts = function BlogPosts() {
  _s();

  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_6__.useQuery)(_graphql_queries__WEBPACK_IMPORTED_MODULE_1__.GET_BLOGPOSTS),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  var _useDisclosure = useDisclosure(),
      isOpen = _useDisclosure.isOpen,
      onOpen = _useDisclosure.onOpen,
      onClose = _useDisclosure.onClose;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
      children: "error"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 14
    }, _this), loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Loading__WEBPACK_IMPORTED_MODULE_3__.default, {
      loading: loading
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Modal__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 6
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Grid, {
        templateColumns: "repeat(3, 1fr)",
        justifyItems: "center",
        px: "150px",
        children: data.blogPosts.map(function (blogPostData) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_2__.default, _objectSpread({}, blogPostData), blogPostData.id, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 8
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 6
      }, _this)]
    }, void 0, true)]
  }, void 0, true);
};

_s(BlogPosts, "1VCvtIrbdRvgYvAnpRtGNBkXRNo=", true, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_6__.useQuery];
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

/***/ "./components/Modal.js":
/*!*****************************!*\
  !*** ./components/Modal.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Modal; }
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\asus\\Desktop\\prisma-gql-todo\\components\\Modal.js";



function Modal(_ref) {
  var isOpen = _ref.isOpen,
      onClose = _ref.onClose;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Modal, {
      isOpen: isOpen,
      onClose: onClose,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalOverlay, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalContent, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalHeader, {
          children: "Edit Post"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalCloseButton, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalBody, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Textarea, {
            w: "400px",
            h: "80px",
            placeholder: "Update Todo here.."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalFooter, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
            colorScheme: "blue",
            mr: 3,
            onClick: onClose,
            children: "Cancel"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
            variant: "ghost",
            children: "Update"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 4
    }, this)
  }, void 0, false);
}
_c = Modal;

var _c;

$RefreshReg$(_c, "Modal");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTkyNzg4NmVmNTU3ZTI5NmFlNWQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQSxJQUFNTSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQ3ZCLGtCQUFpQ04sd0RBQVEsQ0FBQ0MsMkRBQUQsQ0FBekM7QUFBQSxNQUFRTSxPQUFSLGFBQVFBLE9BQVI7QUFBQSxNQUFpQkMsS0FBakIsYUFBaUJBLEtBQWpCO0FBQUEsTUFBd0JDLElBQXhCLGFBQXdCQSxJQUF4Qjs7QUFDQSx1QkFBb0NDLGFBQWEsRUFBakQ7QUFBQSxNQUFRQyxNQUFSLGtCQUFRQSxNQUFSO0FBQUEsTUFBZ0JDLE1BQWhCLGtCQUFnQkEsTUFBaEI7QUFBQSxNQUF3QkMsT0FBeEIsa0JBQXdCQSxPQUF4Qjs7QUFFQSxzQkFDQztBQUFBLGVBQ0VMLEtBQUssaUJBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEWCxFQUVFRCxPQUFPLGdCQUNQLDhEQUFDLDZDQUFEO0FBQVMsYUFBTyxFQUFFQTtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRE8sZ0JBR1A7QUFBQSw4QkFDQyw4REFBQywyQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQsZUFFQyw4REFBQyxrREFBRDtBQUNDLHVCQUFlLEVBQUMsZ0JBRGpCO0FBRUMsb0JBQVksRUFBQyxRQUZkO0FBR0MsVUFBRSxFQUFDLE9BSEo7QUFBQSxrQkFLRUUsSUFBSSxDQUFDSyxTQUFMLENBQWVDLEdBQWYsQ0FBbUIsVUFBQ0MsWUFBRDtBQUFBLDhCQUNuQiw4REFBQywwQ0FBRCxvQkFBZ0NBLFlBQWhDLEdBQVdBLFlBQVksQ0FBQ0MsRUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEbUI7QUFBQSxTQUFuQjtBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRDtBQUFBLG9CQUxGO0FBQUEsa0JBREQ7QUFxQkEsQ0F6QkQ7O0dBQU1YO1VBQzRCTjs7O0tBRDVCTTtBQTJCTiwrREFBZUEsU0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQTs7O0FBV2UsU0FBU0QsS0FBVCxPQUFvQztBQUFBLE1BQW5CTSxNQUFtQixRQUFuQkEsTUFBbUI7QUFBQSxNQUFYRSxPQUFXLFFBQVhBLE9BQVc7QUFDbEQsc0JBQ0M7QUFBQSwyQkFDQyw4REFBQyxLQUFEO0FBQU8sWUFBTSxFQUFFRixNQUFmO0FBQXVCLGFBQU8sRUFBRUUsT0FBaEM7QUFBQSw4QkFDQyw4REFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsZUFFQyw4REFBQywwREFBRDtBQUFBLGdDQUNDLDhEQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURELGVBRUMsOERBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRCxlQUdDLDhEQUFDLHVEQUFEO0FBQUEsaUNBQ0MsOERBQUMsc0RBQUQ7QUFBVSxhQUFDLEVBQUMsT0FBWjtBQUFvQixhQUFDLEVBQUMsTUFBdEI7QUFBNkIsdUJBQVcsRUFBQztBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRCxlQU9DLDhEQUFDLHlEQUFEO0FBQUEsa0NBQ0MsOERBQUMsb0RBQUQ7QUFBUSx1QkFBVyxFQUFDLE1BQXBCO0FBQTJCLGNBQUUsRUFBRSxDQUEvQjtBQUFrQyxtQkFBTyxFQUFFQSxPQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERCxlQUlDLDhEQUFDLG9EQUFEO0FBQVEsbUJBQU8sRUFBQyxPQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQsbUJBREQ7QUFxQkE7S0F0QnVCUiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Jsb2dQb3N0cy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb2RhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5pbXBvcnQgeyBHRVRfQkxPR1BPU1RTIH0gZnJvbSBcIi4uL2dyYXBocWwvcXVlcmllc1wiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi9DYXJkXCI7XHJcbmltcG9ydCB7IEdyaWQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi9Mb2FkaW5nXCI7XHJcbmltcG9ydCBNb2RhbCBmcm9tIFwiLi9Nb2RhbFwiO1xyXG5cclxuY29uc3QgQmxvZ1Bvc3RzID0gKCkgPT4ge1xyXG5cdGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KEdFVF9CTE9HUE9TVFMpO1xyXG5cdGNvbnN0IHsgaXNPcGVuLCBvbk9wZW4sIG9uQ2xvc2UgfSA9IHVzZURpc2Nsb3N1cmUoKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdHtlcnJvciAmJiA8cD5lcnJvcjwvcD59XHJcblx0XHRcdHtsb2FkaW5nID8gKFxyXG5cdFx0XHRcdDxMb2FkaW5nIGxvYWRpbmc9e2xvYWRpbmd9IC8+XHJcblx0XHRcdCkgOiAoXHJcblx0XHRcdFx0PD5cclxuXHRcdFx0XHRcdDxNb2RhbCAvPlxyXG5cdFx0XHRcdFx0PEdyaWRcclxuXHRcdFx0XHRcdFx0dGVtcGxhdGVDb2x1bW5zPVwicmVwZWF0KDMsIDFmcilcIlxyXG5cdFx0XHRcdFx0XHRqdXN0aWZ5SXRlbXM9XCJjZW50ZXJcIlxyXG5cdFx0XHRcdFx0XHRweD1cIjE1MHB4XCJcclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0e2RhdGEuYmxvZ1Bvc3RzLm1hcCgoYmxvZ1Bvc3REYXRhKSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0PENhcmQga2V5PXtibG9nUG9zdERhdGEuaWR9IHsuLi5ibG9nUG9zdERhdGF9IC8+XHJcblx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdDwvPlxyXG5cdFx0XHQpfVxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJsb2dQb3N0cztcclxuIiwiaW1wb3J0IHtcclxuXHRCdXR0b24sXHJcblx0TW9kYWxPdmVybGF5LFxyXG5cdE1vZGFsQ29udGVudCxcclxuXHRNb2RhbEhlYWRlcixcclxuXHRNb2RhbENsb3NlQnV0dG9uLFxyXG5cdE1vZGFsQm9keSxcclxuXHRNb2RhbEZvb3RlcixcclxuXHRUZXh0YXJlYSxcclxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9kYWwoeyBpc09wZW4sIG9uQ2xvc2UgfSkge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8TW9kYWwgaXNPcGVuPXtpc09wZW59IG9uQ2xvc2U9e29uQ2xvc2V9PlxyXG5cdFx0XHRcdDxNb2RhbE92ZXJsYXkgLz5cclxuXHRcdFx0XHQ8TW9kYWxDb250ZW50PlxyXG5cdFx0XHRcdFx0PE1vZGFsSGVhZGVyPkVkaXQgUG9zdDwvTW9kYWxIZWFkZXI+XHJcblx0XHRcdFx0XHQ8TW9kYWxDbG9zZUJ1dHRvbiAvPlxyXG5cdFx0XHRcdFx0PE1vZGFsQm9keT5cclxuXHRcdFx0XHRcdFx0PFRleHRhcmVhIHc9XCI0MDBweFwiIGg9XCI4MHB4XCIgcGxhY2Vob2xkZXI9XCJVcGRhdGUgVG9kbyBoZXJlLi5cIiAvPlxyXG5cdFx0XHRcdFx0PC9Nb2RhbEJvZHk+XHJcblxyXG5cdFx0XHRcdFx0PE1vZGFsRm9vdGVyPlxyXG5cdFx0XHRcdFx0XHQ8QnV0dG9uIGNvbG9yU2NoZW1lPVwiYmx1ZVwiIG1yPXszfSBvbkNsaWNrPXtvbkNsb3NlfT5cclxuXHRcdFx0XHRcdFx0XHRDYW5jZWxcclxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdDxCdXR0b24gdmFyaWFudD1cImdob3N0XCI+VXBkYXRlPC9CdXR0b24+XHJcblx0XHRcdFx0XHQ8L01vZGFsRm9vdGVyPlxyXG5cdFx0XHRcdDwvTW9kYWxDb250ZW50PlxyXG5cdFx0XHQ8L01vZGFsPlxyXG5cdFx0PC8+XHJcblx0KTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlUXVlcnkiLCJHRVRfQkxPR1BPU1RTIiwiQ2FyZCIsIkdyaWQiLCJMb2FkaW5nIiwiTW9kYWwiLCJCbG9nUG9zdHMiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwidXNlRGlzY2xvc3VyZSIsImlzT3BlbiIsIm9uT3BlbiIsIm9uQ2xvc2UiLCJibG9nUG9zdHMiLCJtYXAiLCJibG9nUG9zdERhdGEiLCJpZCIsIkJ1dHRvbiIsIk1vZGFsT3ZlcmxheSIsIk1vZGFsQ29udGVudCIsIk1vZGFsSGVhZGVyIiwiTW9kYWxDbG9zZUJ1dHRvbiIsIk1vZGFsQm9keSIsIk1vZGFsRm9vdGVyIiwiVGV4dGFyZWEiXSwic291cmNlUm9vdCI6IiJ9