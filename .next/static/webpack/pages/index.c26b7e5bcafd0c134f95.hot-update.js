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

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(""),
      editId = _useState[0],
      setEditId = _useState[1];

  var openModal = function openModal(id) {
    return setEditId(id);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
      children: "Error"
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
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_UpdateModal__WEBPACK_IMPORTED_MODULE_5__.default, {
        isOpen: isOpen,
        onClose: onClose,
        editId: editId
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 6
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Grid, {
        templateColumns: "repeat(3, 1fr)",
        justifyItems: "center",
        px: "150px",
        children: data.blogPosts.map(function (blogPostData) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_2__.default, _objectSpread(_objectSpread({}, blogPostData), {}, {
            onOpen: onOpen,
            openModal: openModal
          }), blogPostData.id, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 8
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzI2YjdlNWJjYWZkMGMxMzRmOTUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsSUFBTVEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUN2QixrQkFBaUNSLHdEQUFRLENBQUNDLDJEQUFELENBQXpDO0FBQUEsTUFBUVEsT0FBUixhQUFRQSxPQUFSO0FBQUEsTUFBaUJDLEtBQWpCLGFBQWlCQSxLQUFqQjtBQUFBLE1BQXdCQyxJQUF4QixhQUF3QkEsSUFBeEI7O0FBQ0EsdUJBQW9DTiwrREFBYSxFQUFqRDtBQUFBLE1BQVFPLE1BQVIsa0JBQVFBLE1BQVI7QUFBQSxNQUFnQkMsTUFBaEIsa0JBQWdCQSxNQUFoQjtBQUFBLE1BQXdCQyxPQUF4QixrQkFBd0JBLE9BQXhCOztBQUNBLGtCQUE0QlIsK0NBQVEsQ0FBQyxFQUFELENBQXBDO0FBQUEsTUFBT1MsTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBRUEsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsRUFBRDtBQUFBLFdBQVFGLFNBQVMsQ0FBQ0UsRUFBRCxDQUFqQjtBQUFBLEdBQWxCOztBQUVBLHNCQUNDO0FBQUEsZUFDRVIsS0FBSyxpQkFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURYLEVBRUVELE9BQU8sZ0JBQ1AsOERBQUMsNkNBQUQ7QUFBUyxhQUFPLEVBQUVBO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFETyxnQkFHUDtBQUFBLDhCQUNDLDhEQUFDLGlEQUFEO0FBQWEsY0FBTSxFQUFFRyxNQUFyQjtBQUE2QixlQUFPLEVBQUVFLE9BQXRDO0FBQStDLGNBQU0sRUFBRUM7QUFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURELGVBRUMsOERBQUMsa0RBQUQ7QUFDQyx1QkFBZSxFQUFDLGdCQURqQjtBQUVDLG9CQUFZLEVBQUMsUUFGZDtBQUdDLFVBQUUsRUFBQyxPQUhKO0FBQUEsa0JBS0VKLElBQUksQ0FBQ1EsU0FBTCxDQUFlQyxHQUFmLENBQW1CLFVBQUNDLFlBQUQ7QUFBQSw4QkFDbkIsOERBQUMsMENBQUQsa0NBRUtBLFlBRkw7QUFHQyxrQkFBTSxFQUFFUixNQUhUO0FBSUMscUJBQVMsRUFBRUk7QUFKWixjQUNNSSxZQUFZLENBQUNILEVBRG5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRG1CO0FBQUEsU0FBbkI7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkQ7QUFBQSxvQkFMRjtBQUFBLGtCQUREO0FBMEJBLENBakNEOztHQUFNVjtVQUM0QlIsc0RBQ0dLOzs7S0FGL0JHO0FBbUNOLCtEQUFlQSxTQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQmxvZ1Bvc3RzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcbmltcG9ydCB7IEdFVF9CTE9HUE9TVFMgfSBmcm9tIFwiLi4vZ3JhcGhxbC9xdWVyaWVzXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCIuL0NhcmRcIjtcclxuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4vTG9hZGluZ1wiO1xyXG5pbXBvcnQgeyBHcmlkLCB1c2VEaXNjbG9zdXJlIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFVwZGF0ZU1vZGFsIGZyb20gXCIuL1VwZGF0ZU1vZGFsXCI7XHJcblxyXG5jb25zdCBCbG9nUG9zdHMgPSAoKSA9PiB7XHJcblx0Y29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoR0VUX0JMT0dQT1NUUyk7XHJcblx0Y29uc3QgeyBpc09wZW4sIG9uT3Blbiwgb25DbG9zZSB9ID0gdXNlRGlzY2xvc3VyZSgpO1xyXG5cdGNvbnN0IFtlZGl0SWQsIHNldEVkaXRJZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcblx0Y29uc3Qgb3Blbk1vZGFsID0gKGlkKSA9PiBzZXRFZGl0SWQoaWQpO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0e2Vycm9yICYmIDxwPkVycm9yPC9wPn1cclxuXHRcdFx0e2xvYWRpbmcgPyAoXHJcblx0XHRcdFx0PExvYWRpbmcgbG9hZGluZz17bG9hZGluZ30gLz5cclxuXHRcdFx0KSA6IChcclxuXHRcdFx0XHQ8PlxyXG5cdFx0XHRcdFx0PFVwZGF0ZU1vZGFsIGlzT3Blbj17aXNPcGVufSBvbkNsb3NlPXtvbkNsb3NlfSBlZGl0SWQ9e2VkaXRJZH0gLz5cclxuXHRcdFx0XHRcdDxHcmlkXHJcblx0XHRcdFx0XHRcdHRlbXBsYXRlQ29sdW1ucz1cInJlcGVhdCgzLCAxZnIpXCJcclxuXHRcdFx0XHRcdFx0anVzdGlmeUl0ZW1zPVwiY2VudGVyXCJcclxuXHRcdFx0XHRcdFx0cHg9XCIxNTBweFwiXHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdHtkYXRhLmJsb2dQb3N0cy5tYXAoKGJsb2dQb3N0RGF0YSkgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdDxDYXJkXHJcblx0XHRcdFx0XHRcdFx0XHRrZXk9e2Jsb2dQb3N0RGF0YS5pZH1cclxuXHRcdFx0XHRcdFx0XHRcdHsuLi5ibG9nUG9zdERhdGF9XHJcblx0XHRcdFx0XHRcdFx0XHRvbk9wZW49e29uT3Blbn1cclxuXHRcdFx0XHRcdFx0XHRcdG9wZW5Nb2RhbD17b3Blbk1vZGFsfVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdDwvPlxyXG5cdFx0XHQpfVxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJsb2dQb3N0cztcclxuIl0sIm5hbWVzIjpbInVzZVF1ZXJ5IiwiR0VUX0JMT0dQT1NUUyIsIkNhcmQiLCJMb2FkaW5nIiwiR3JpZCIsInVzZURpc2Nsb3N1cmUiLCJ1c2VTdGF0ZSIsIlVwZGF0ZU1vZGFsIiwiQmxvZ1Bvc3RzIiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsImlzT3BlbiIsIm9uT3BlbiIsIm9uQ2xvc2UiLCJlZGl0SWQiLCJzZXRFZGl0SWQiLCJvcGVuTW9kYWwiLCJpZCIsImJsb2dQb3N0cyIsIm1hcCIsImJsb2dQb3N0RGF0YSJdLCJzb3VyY2VSb290IjoiIn0=