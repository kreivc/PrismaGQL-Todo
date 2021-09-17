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
/* harmony import */ var _Update__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Update */ "./components/Update.js");
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

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(""),
      editId = _useState[0],
      setEditId = _useState[1];

  var openModal = function openModal(id) {
    return setEditId(id);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
      children: "error"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 14
    }, _this), loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Loading__WEBPACK_IMPORTED_MODULE_3__.default, {
      loading: loading
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Grid, {
        templateColumns: "repeat(3, 1fr)",
        justifyItems: "center",
        px: "150px",
        children: data.blogPosts.map(function (blogPostData) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_2__.default, _objectSpread({}, blogPostData), blogPostData.id, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 8
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 6
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Update__WEBPACK_IMPORTED_MODULE_5__.default, {
        openModal: openModal
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 6
      }, _this)]
    }, void 0, true)]
  }, void 0, true);
};

_s(BlogPosts, "SGsArJpD4j3PhDiQ9PoMP61CIVU=", false, function () {
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

/***/ "./components/Update.js":
/*!******************************!*\
  !*** ./components/Update.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\asus\\Desktop\\prisma-gql-todo\\components\\Update.js",
    _this = undefined;




var Update = function Update(_ref) {
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

_c = Update;
/* harmony default export */ __webpack_exports__["default"] = (Update);

var _c;

$RefreshReg$(_c, "Update");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNWIyY2M1MTYyOWU5ZjIyNmExMzQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsSUFBTVEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUN2QixrQkFBaUNSLHdEQUFRLENBQUNDLDJEQUFELENBQXpDO0FBQUEsTUFBUVEsT0FBUixhQUFRQSxPQUFSO0FBQUEsTUFBaUJDLEtBQWpCLGFBQWlCQSxLQUFqQjtBQUFBLE1BQXdCQyxJQUF4QixhQUF3QkEsSUFBeEI7O0FBQ0EsdUJBQW9DTiwrREFBYSxFQUFqRDtBQUFBLE1BQVFPLE1BQVIsa0JBQVFBLE1BQVI7QUFBQSxNQUFnQkMsTUFBaEIsa0JBQWdCQSxNQUFoQjtBQUFBLE1BQXdCQyxPQUF4QixrQkFBd0JBLE9BQXhCOztBQUVBLGtCQUE0QlIsK0NBQVEsQ0FBQyxFQUFELENBQXBDO0FBQUEsTUFBT1MsTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBQ0EsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsRUFBRDtBQUFBLFdBQVFGLFNBQVMsQ0FBQ0UsRUFBRCxDQUFqQjtBQUFBLEdBQWxCOztBQUVBLHNCQUNDO0FBQUEsZUFDRVIsS0FBSyxpQkFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURYLEVBRUVELE9BQU8sZ0JBQ1AsOERBQUMsNkNBQUQ7QUFBUyxhQUFPLEVBQUVBO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFETyxnQkFHUDtBQUFBLDhCQUNDLDhEQUFDLGtEQUFEO0FBQ0MsdUJBQWUsRUFBQyxnQkFEakI7QUFFQyxvQkFBWSxFQUFDLFFBRmQ7QUFHQyxVQUFFLEVBQUMsT0FISjtBQUFBLGtCQUtFRSxJQUFJLENBQUNRLFNBQUwsQ0FBZUMsR0FBZixDQUFtQixVQUFDQyxZQUFEO0FBQUEsOEJBQ25CLDhEQUFDLDBDQUFELG9CQUFnQ0EsWUFBaEMsR0FBV0EsWUFBWSxDQUFDSCxFQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURtQjtBQUFBLFNBQW5CO0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURELGVBVUMsOERBQUMsNENBQUQ7QUFBUSxpQkFBUyxFQUFFRDtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVkQ7QUFBQSxvQkFMRjtBQUFBLGtCQUREO0FBcUJBLENBNUJEOztHQUFNVDtVQUM0QlIsc0RBQ0dLOzs7S0FGL0JHO0FBOEJOLCtEQUFlQSxTQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7OztBQWFBLElBQU1ELE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQXlCO0FBQUEsTUFBdEJLLE1BQXNCLFFBQXRCQSxNQUFzQjtBQUFBLE1BQWRFLE9BQWMsUUFBZEEsT0FBYztBQUN2QyxzQkFDQyw4REFBQyxtREFBRDtBQUFPLFVBQU0sRUFBRUYsTUFBZjtBQUF1QixXQUFPLEVBQUVFLE9BQWhDO0FBQUEsNEJBQ0MsOERBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELGVBRUMsOERBQUMsMERBQUQ7QUFBQSw4QkFDQyw4REFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURELGVBRUMsOERBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZELGVBR0MsOERBQUMsdURBQUQ7QUFBQSwrQkFDQyw4REFBQyxpREFBRDtBQUFLLFlBQUUsRUFBQyxNQUFSO0FBQUEsaUNBQ0MsOERBQUMsc0RBQUQ7QUFBVSxhQUFDLEVBQUMsT0FBWjtBQUFvQixhQUFDLEVBQUMsT0FBdEI7QUFBOEIsdUJBQVcsRUFBQztBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRCxlQVNDLDhEQUFDLHlEQUFEO0FBQUEsZ0NBQ0MsOERBQUMsb0RBQUQ7QUFBUSxxQkFBVyxFQUFDLE1BQXBCO0FBQTJCLFlBQUUsRUFBRSxDQUEvQjtBQUFrQyxpQkFBTyxFQUFFQSxPQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxlQUlDLDhEQUFDLG9EQUFEO0FBQVEscUJBQVcsRUFBQyxNQUFwQjtBQUEyQixjQUFJLEVBQUMsUUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUF1QkEsQ0F4QkQ7O0tBQU1QO0FBMEJOLCtEQUFlQSxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQmxvZ1Bvc3RzLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1VwZGF0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5pbXBvcnQgeyBHRVRfQkxPR1BPU1RTIH0gZnJvbSBcIi4uL2dyYXBocWwvcXVlcmllc1wiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi9DYXJkXCI7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuL0xvYWRpbmdcIjtcclxuaW1wb3J0IHsgR3JpZCwgdXNlRGlzY2xvc3VyZSB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBVcGRhdGUgZnJvbSBcIi4vVXBkYXRlXCI7XHJcblxyXG5jb25zdCBCbG9nUG9zdHMgPSAoKSA9PiB7XHJcblx0Y29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoR0VUX0JMT0dQT1NUUyk7XHJcblx0Y29uc3QgeyBpc09wZW4sIG9uT3Blbiwgb25DbG9zZSB9ID0gdXNlRGlzY2xvc3VyZSgpO1xyXG5cclxuXHRjb25zdCBbZWRpdElkLCBzZXRFZGl0SWRdID0gdXNlU3RhdGUoXCJcIik7XHJcblx0Y29uc3Qgb3Blbk1vZGFsID0gKGlkKSA9PiBzZXRFZGl0SWQoaWQpO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0e2Vycm9yICYmIDxwPmVycm9yPC9wPn1cclxuXHRcdFx0e2xvYWRpbmcgPyAoXHJcblx0XHRcdFx0PExvYWRpbmcgbG9hZGluZz17bG9hZGluZ30gLz5cclxuXHRcdFx0KSA6IChcclxuXHRcdFx0XHQ8PlxyXG5cdFx0XHRcdFx0PEdyaWRcclxuXHRcdFx0XHRcdFx0dGVtcGxhdGVDb2x1bW5zPVwicmVwZWF0KDMsIDFmcilcIlxyXG5cdFx0XHRcdFx0XHRqdXN0aWZ5SXRlbXM9XCJjZW50ZXJcIlxyXG5cdFx0XHRcdFx0XHRweD1cIjE1MHB4XCJcclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0e2RhdGEuYmxvZ1Bvc3RzLm1hcCgoYmxvZ1Bvc3REYXRhKSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0PENhcmQga2V5PXtibG9nUG9zdERhdGEuaWR9IHsuLi5ibG9nUG9zdERhdGF9IC8+XHJcblx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0PFVwZGF0ZSBvcGVuTW9kYWw9e29wZW5Nb2RhbH0gLz5cclxuXHRcdFx0XHQ8Lz5cclxuXHRcdFx0KX1cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCbG9nUG9zdHM7XHJcbiIsImltcG9ydCB7XHJcblx0TW9kYWwsXHJcblx0QnV0dG9uLFxyXG5cdE1vZGFsT3ZlcmxheSxcclxuXHRNb2RhbENvbnRlbnQsXHJcblx0TW9kYWxIZWFkZXIsXHJcblx0TW9kYWxDbG9zZUJ1dHRvbixcclxuXHRNb2RhbEJvZHksXHJcblx0TW9kYWxGb290ZXIsXHJcblx0VGV4dGFyZWEsXHJcblx0Qm94LFxyXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcblxyXG5jb25zdCBVcGRhdGUgPSAoeyBpc09wZW4sIG9uQ2xvc2UgfSkgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8TW9kYWwgaXNPcGVuPXtpc09wZW59IG9uQ2xvc2U9e29uQ2xvc2V9PlxyXG5cdFx0XHQ8TW9kYWxPdmVybGF5IC8+XHJcblx0XHRcdDxNb2RhbENvbnRlbnQ+XHJcblx0XHRcdFx0PE1vZGFsSGVhZGVyPkVkaXQgVG9kbzwvTW9kYWxIZWFkZXI+XHJcblx0XHRcdFx0PE1vZGFsQ2xvc2VCdXR0b24gLz5cclxuXHRcdFx0XHQ8TW9kYWxCb2R5PlxyXG5cdFx0XHRcdFx0PEJveCBhcz1cImZvcm1cIj5cclxuXHRcdFx0XHRcdFx0PFRleHRhcmVhIHc9XCI0MDBweFwiIGg9XCIxMDBweFwiIHBsYWNlaG9sZGVyPVwiVXBkYXRlIFRvZG8gaGVyZS4uXCIgLz5cclxuXHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdDwvTW9kYWxCb2R5PlxyXG5cclxuXHRcdFx0XHQ8TW9kYWxGb290ZXI+XHJcblx0XHRcdFx0XHQ8QnV0dG9uIGNvbG9yU2NoZW1lPVwiZ3JheVwiIG1yPXszfSBvbkNsaWNrPXtvbkNsb3NlfT5cclxuXHRcdFx0XHRcdFx0Q2FuY2VsXHJcblx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdDxCdXR0b24gY29sb3JTY2hlbWU9XCJ0ZWFsXCIgdHlwZT1cInN1Ym1pdFwiPlxyXG5cdFx0XHRcdFx0XHRVcGRhdGVcclxuXHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdDwvTW9kYWxGb290ZXI+XHJcblx0XHRcdDwvTW9kYWxDb250ZW50PlxyXG5cdFx0PC9Nb2RhbD5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXBkYXRlO1xyXG4iXSwibmFtZXMiOlsidXNlUXVlcnkiLCJHRVRfQkxPR1BPU1RTIiwiQ2FyZCIsIkxvYWRpbmciLCJHcmlkIiwidXNlRGlzY2xvc3VyZSIsInVzZVN0YXRlIiwiVXBkYXRlIiwiQmxvZ1Bvc3RzIiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsImlzT3BlbiIsIm9uT3BlbiIsIm9uQ2xvc2UiLCJlZGl0SWQiLCJzZXRFZGl0SWQiLCJvcGVuTW9kYWwiLCJpZCIsImJsb2dQb3N0cyIsIm1hcCIsImJsb2dQb3N0RGF0YSIsIk1vZGFsIiwiQnV0dG9uIiwiTW9kYWxPdmVybGF5IiwiTW9kYWxDb250ZW50IiwiTW9kYWxIZWFkZXIiLCJNb2RhbENsb3NlQnV0dG9uIiwiTW9kYWxCb2R5IiwiTW9kYWxGb290ZXIiLCJUZXh0YXJlYSIsIkJveCJdLCJzb3VyY2VSb290IjoiIn0=