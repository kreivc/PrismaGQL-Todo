"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

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
      openModal = _ref.openModal,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDIwMDM3MzUyODMzZDRhNDIxY2QuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7QUFhQSxJQUFNVSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUFvQztBQUFBLE1BQWpDQyxNQUFpQyxRQUFqQ0EsTUFBaUM7QUFBQSxNQUF6QkMsU0FBeUIsUUFBekJBLFNBQXlCO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBQ2xELHNCQUNDLDhEQUFDLG1EQUFEO0FBQU8sVUFBTSxFQUFFRixNQUFmO0FBQXVCLFdBQU8sRUFBRUUsT0FBaEM7QUFBQSw0QkFDQyw4REFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQsZUFFQyw4REFBQywwREFBRDtBQUFBLDhCQUNDLDhEQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQsZUFFQyw4REFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkQsZUFHQyw4REFBQyx1REFBRDtBQUFBLCtCQUNDLDhEQUFDLGlEQUFEO0FBQUssWUFBRSxFQUFDLE1BQVI7QUFBQSxpQ0FDQyw4REFBQyxzREFBRDtBQUFVLGFBQUMsRUFBQyxPQUFaO0FBQW9CLGFBQUMsRUFBQyxPQUF0QjtBQUE4Qix1QkFBVyxFQUFDO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhELGVBU0MsOERBQUMseURBQUQ7QUFBQSxnQ0FDQyw4REFBQyxvREFBRDtBQUFRLHFCQUFXLEVBQUMsTUFBcEI7QUFBMkIsWUFBRSxFQUFFLENBQS9CO0FBQWtDLGlCQUFPLEVBQUVBLE9BQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURELGVBSUMsOERBQUMsb0RBQUQ7QUFBUSxxQkFBVyxFQUFDLE1BQXBCO0FBQTJCLGNBQUksRUFBQyxRQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFURDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQXVCQSxDQXhCRDs7S0FBTUg7QUEwQk4sK0RBQWVBLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VcGRhdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuXHRNb2RhbCxcclxuXHRCdXR0b24sXHJcblx0TW9kYWxPdmVybGF5LFxyXG5cdE1vZGFsQ29udGVudCxcclxuXHRNb2RhbEhlYWRlcixcclxuXHRNb2RhbENsb3NlQnV0dG9uLFxyXG5cdE1vZGFsQm9keSxcclxuXHRNb2RhbEZvb3RlcixcclxuXHRUZXh0YXJlYSxcclxuXHRCb3gsXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuXHJcbmNvbnN0IFVwZGF0ZSA9ICh7IGlzT3Blbiwgb3Blbk1vZGFsLCBvbkNsb3NlIH0pID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PE1vZGFsIGlzT3Blbj17aXNPcGVufSBvbkNsb3NlPXtvbkNsb3NlfT5cclxuXHRcdFx0PE1vZGFsT3ZlcmxheSAvPlxyXG5cdFx0XHQ8TW9kYWxDb250ZW50PlxyXG5cdFx0XHRcdDxNb2RhbEhlYWRlcj5FZGl0IFRvZG88L01vZGFsSGVhZGVyPlxyXG5cdFx0XHRcdDxNb2RhbENsb3NlQnV0dG9uIC8+XHJcblx0XHRcdFx0PE1vZGFsQm9keT5cclxuXHRcdFx0XHRcdDxCb3ggYXM9XCJmb3JtXCI+XHJcblx0XHRcdFx0XHRcdDxUZXh0YXJlYSB3PVwiNDAwcHhcIiBoPVwiMTAwcHhcIiBwbGFjZWhvbGRlcj1cIlVwZGF0ZSBUb2RvIGhlcmUuLlwiIC8+XHJcblx0XHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0XHQ8L01vZGFsQm9keT5cclxuXHJcblx0XHRcdFx0PE1vZGFsRm9vdGVyPlxyXG5cdFx0XHRcdFx0PEJ1dHRvbiBjb2xvclNjaGVtZT1cImdyYXlcIiBtcj17M30gb25DbGljaz17b25DbG9zZX0+XHJcblx0XHRcdFx0XHRcdENhbmNlbFxyXG5cdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHQ8QnV0dG9uIGNvbG9yU2NoZW1lPVwidGVhbFwiIHR5cGU9XCJzdWJtaXRcIj5cclxuXHRcdFx0XHRcdFx0VXBkYXRlXHJcblx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHQ8L01vZGFsRm9vdGVyPlxyXG5cdFx0XHQ8L01vZGFsQ29udGVudD5cclxuXHRcdDwvTW9kYWw+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVwZGF0ZTtcclxuIl0sIm5hbWVzIjpbIk1vZGFsIiwiQnV0dG9uIiwiTW9kYWxPdmVybGF5IiwiTW9kYWxDb250ZW50IiwiTW9kYWxIZWFkZXIiLCJNb2RhbENsb3NlQnV0dG9uIiwiTW9kYWxCb2R5IiwiTW9kYWxGb290ZXIiLCJUZXh0YXJlYSIsIkJveCIsIlVwZGF0ZSIsImlzT3BlbiIsIm9wZW5Nb2RhbCIsIm9uQ2xvc2UiXSwic291cmNlUm9vdCI6IiJ9