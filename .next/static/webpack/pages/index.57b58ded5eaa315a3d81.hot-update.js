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

  var Update = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Modal, {
    isOpen: isOpen,
    onClose: onClose,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.ModalOverlay, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.ModalContent, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.ModalHeader, {
        children: "Edit Post"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.ModalCloseButton, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.ModalBody, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Textarea, {
          w: "400px",
          h: "80px",
          placeholder: "Update Todo here.."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.ModalFooter, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {
          colorScheme: "teal",
          mr: 3,
          onClick: onClose,
          children: "Cancel"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {
          colorScheme: "gray",
          children: "Update"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 3
  }, _this);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
      children: "error"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 14
    }, _this), loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_Loading__WEBPACK_IMPORTED_MODULE_3__.default, {
      loading: loading
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
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
            lineNumber: 56,
            columnNumber: 8
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 6
      }, _this), Update]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTdiNThkZWQ1ZWFhMzE1YTNkODEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFjQSxJQUFNZSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQ3ZCLGtCQUFpQ2Ysd0RBQVEsQ0FBQ0MsMkRBQUQsQ0FBekM7QUFBQSxNQUFRZSxPQUFSLGFBQVFBLE9BQVI7QUFBQSxNQUFpQkMsS0FBakIsYUFBaUJBLEtBQWpCO0FBQUEsTUFBd0JDLElBQXhCLGFBQXdCQSxJQUF4Qjs7QUFDQSx1QkFBb0NiLCtEQUFhLEVBQWpEO0FBQUEsTUFBUWMsTUFBUixrQkFBUUEsTUFBUjtBQUFBLE1BQWdCQyxNQUFoQixrQkFBZ0JBLE1BQWhCO0FBQUEsTUFBd0JDLE9BQXhCLGtCQUF3QkEsT0FBeEI7O0FBRUEsTUFBTUMsTUFBTSxnQkFDWCw4REFBQyxtREFBRDtBQUFPLFVBQU0sRUFBRUgsTUFBZjtBQUF1QixXQUFPLEVBQUVFLE9BQWhDO0FBQUEsNEJBQ0MsOERBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELGVBRUMsOERBQUMsMERBQUQ7QUFBQSw4QkFDQyw4REFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURELGVBRUMsOERBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZELGVBR0MsOERBQUMsdURBQUQ7QUFBQSwrQkFDQyw4REFBQyxzREFBRDtBQUFVLFdBQUMsRUFBQyxPQUFaO0FBQW9CLFdBQUMsRUFBQyxNQUF0QjtBQUE2QixxQkFBVyxFQUFDO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEQsZUFPQyw4REFBQyx5REFBRDtBQUFBLGdDQUNDLDhEQUFDLG9EQUFEO0FBQVEscUJBQVcsRUFBQyxNQUFwQjtBQUEyQixZQUFFLEVBQUUsQ0FBL0I7QUFBa0MsaUJBQU8sRUFBRUEsT0FBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQsZUFJQyw4REFBQyxvREFBRDtBQUFRLHFCQUFXLEVBQUMsTUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7O0FBb0JBLHNCQUNDO0FBQUEsZUFDRUosS0FBSyxpQkFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURYLEVBRUVELE9BQU8sZ0JBQ1AsOERBQUMsNkNBQUQ7QUFBUyxhQUFPLEVBQUVBO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFETyxnQkFHUDtBQUFBLDhCQUNDLDhEQUFDLGtEQUFEO0FBQ0MsdUJBQWUsRUFBQyxnQkFEakI7QUFFQyxvQkFBWSxFQUFDLFFBRmQ7QUFHQyxVQUFFLEVBQUMsT0FISjtBQUFBLGtCQUtFRSxJQUFJLENBQUNLLFNBQUwsQ0FBZUMsR0FBZixDQUFtQixVQUFDQyxZQUFEO0FBQUEsOEJBQ25CLDhEQUFDLDBDQUFELGtDQUFnQ0EsWUFBaEM7QUFBOEMsa0JBQU0sRUFBRUw7QUFBdEQsY0FBV0ssWUFBWSxDQUFDQyxFQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURtQjtBQUFBLFNBQW5CO0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURELEVBVUVKLE1BVkY7QUFBQSxvQkFMRjtBQUFBLGtCQUREO0FBcUJBLENBN0NEOztHQUFNUDtVQUM0QmYsc0RBQ0dLOzs7S0FGL0JVO0FBK0NOLCtEQUFlQSxTQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQmxvZ1Bvc3RzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcbmltcG9ydCB7IEdFVF9CTE9HUE9TVFMgfSBmcm9tIFwiLi4vZ3JhcGhxbC9xdWVyaWVzXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCIuL0NhcmRcIjtcclxuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4vTG9hZGluZ1wiO1xyXG5pbXBvcnQge1xyXG5cdEdyaWQsXHJcblx0dXNlRGlzY2xvc3VyZSxcclxuXHRCdXR0b24sXHJcblx0TW9kYWwsXHJcblx0TW9kYWxPdmVybGF5LFxyXG5cdE1vZGFsQ29udGVudCxcclxuXHRNb2RhbEhlYWRlcixcclxuXHRNb2RhbENsb3NlQnV0dG9uLFxyXG5cdE1vZGFsQm9keSxcclxuXHRNb2RhbEZvb3RlcixcclxuXHRUZXh0YXJlYSxcclxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5cclxuY29uc3QgQmxvZ1Bvc3RzID0gKCkgPT4ge1xyXG5cdGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KEdFVF9CTE9HUE9TVFMpO1xyXG5cdGNvbnN0IHsgaXNPcGVuLCBvbk9wZW4sIG9uQ2xvc2UgfSA9IHVzZURpc2Nsb3N1cmUoKTtcclxuXHJcblx0Y29uc3QgVXBkYXRlID0gKFxyXG5cdFx0PE1vZGFsIGlzT3Blbj17aXNPcGVufSBvbkNsb3NlPXtvbkNsb3NlfT5cclxuXHRcdFx0PE1vZGFsT3ZlcmxheSAvPlxyXG5cdFx0XHQ8TW9kYWxDb250ZW50PlxyXG5cdFx0XHRcdDxNb2RhbEhlYWRlcj5FZGl0IFBvc3Q8L01vZGFsSGVhZGVyPlxyXG5cdFx0XHRcdDxNb2RhbENsb3NlQnV0dG9uIC8+XHJcblx0XHRcdFx0PE1vZGFsQm9keT5cclxuXHRcdFx0XHRcdDxUZXh0YXJlYSB3PVwiNDAwcHhcIiBoPVwiODBweFwiIHBsYWNlaG9sZGVyPVwiVXBkYXRlIFRvZG8gaGVyZS4uXCIgLz5cclxuXHRcdFx0XHQ8L01vZGFsQm9keT5cclxuXHJcblx0XHRcdFx0PE1vZGFsRm9vdGVyPlxyXG5cdFx0XHRcdFx0PEJ1dHRvbiBjb2xvclNjaGVtZT1cInRlYWxcIiBtcj17M30gb25DbGljaz17b25DbG9zZX0+XHJcblx0XHRcdFx0XHRcdENhbmNlbFxyXG5cdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHQ8QnV0dG9uIGNvbG9yU2NoZW1lPVwiZ3JheVwiPlVwZGF0ZTwvQnV0dG9uPlxyXG5cdFx0XHRcdDwvTW9kYWxGb290ZXI+XHJcblx0XHRcdDwvTW9kYWxDb250ZW50PlxyXG5cdFx0PC9Nb2RhbD5cclxuXHQpO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0e2Vycm9yICYmIDxwPmVycm9yPC9wPn1cclxuXHRcdFx0e2xvYWRpbmcgPyAoXHJcblx0XHRcdFx0PExvYWRpbmcgbG9hZGluZz17bG9hZGluZ30gLz5cclxuXHRcdFx0KSA6IChcclxuXHRcdFx0XHQ8PlxyXG5cdFx0XHRcdFx0PEdyaWRcclxuXHRcdFx0XHRcdFx0dGVtcGxhdGVDb2x1bW5zPVwicmVwZWF0KDMsIDFmcilcIlxyXG5cdFx0XHRcdFx0XHRqdXN0aWZ5SXRlbXM9XCJjZW50ZXJcIlxyXG5cdFx0XHRcdFx0XHRweD1cIjE1MHB4XCJcclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0e2RhdGEuYmxvZ1Bvc3RzLm1hcCgoYmxvZ1Bvc3REYXRhKSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0PENhcmQga2V5PXtibG9nUG9zdERhdGEuaWR9IHsuLi5ibG9nUG9zdERhdGF9IG9uT3Blbj17b25PcGVufSAvPlxyXG5cdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdHtVcGRhdGV9XHJcblx0XHRcdFx0PC8+XHJcblx0XHRcdCl9XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmxvZ1Bvc3RzO1xyXG4iXSwibmFtZXMiOlsidXNlUXVlcnkiLCJHRVRfQkxPR1BPU1RTIiwiQ2FyZCIsIkxvYWRpbmciLCJHcmlkIiwidXNlRGlzY2xvc3VyZSIsIkJ1dHRvbiIsIk1vZGFsIiwiTW9kYWxPdmVybGF5IiwiTW9kYWxDb250ZW50IiwiTW9kYWxIZWFkZXIiLCJNb2RhbENsb3NlQnV0dG9uIiwiTW9kYWxCb2R5IiwiTW9kYWxGb290ZXIiLCJUZXh0YXJlYSIsIkJsb2dQb3N0cyIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJpc09wZW4iLCJvbk9wZW4iLCJvbkNsb3NlIiwiVXBkYXRlIiwiYmxvZ1Bvc3RzIiwibWFwIiwiYmxvZ1Bvc3REYXRhIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9