"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Card.js":
/*!****************************!*\
  !*** ./components/Card.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_asus_Desktop_prisma_gql_todo_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/ri */ "./node_modules/react-icons/ri/index.esm.js");
/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../graphql/queries */ "./graphql/queries.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\asus\\Desktop\\prisma-gql-todo\\components\\Card.js",
    _this = undefined,
    _s = $RefreshSig$();









var Card = function Card(_ref) {
  _s();

  var text = _ref.text,
      id = _ref.id,
      openModal = _ref.openModal;

  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation)(_graphql_queries__WEBPACK_IMPORTED_MODULE_1__.DELETE_BLOGPOST, {
    refetchQueries: [{
      query: _graphql_queries__WEBPACK_IMPORTED_MODULE_1__.GET_BLOGPOSTS
    }]
  }),
      _useMutation2 = (0,C_Users_asus_Desktop_prisma_gql_todo_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useMutation, 1),
      deleteBlogPost = _useMutation2[0];

  var onDelete = function onDelete(id, e) {
    e.preventDefault();
    deleteBlogPost({
      variables: {
        id: id
      }
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Stack, {
      bg: "teal",
      p: "20px",
      color: "white",
      m: "10px",
      rounded: "lg",
      w: "300px",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
        children: text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {
        color: "teal",
        justifyContent: "space-between",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {
          leftIcon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiEdit3, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 24
          }, _this),
          bg: "white",
          onClick: onOpen,
          children: "Edit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {
          leftIcon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_icons_ri__WEBPACK_IMPORTED_MODULE_6__.RiDeleteBin5Line, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 17
          }, _this),
          onClick: function onClick(e) {
            return onDelete(id, e);
          },
          bg: "white",
          children: "Delete"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 4
    }, _this)
  }, void 0, false);
};

_s(Card, "TeY94fWU9GgcxATCfeVGQeI5+4s=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation];
});

_c = Card;
/* harmony default export */ __webpack_exports__["default"] = (Card);

var _c;

$RefreshReg$(_c, "Card");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYmVjMjJlM2IzODgzYmZkMWU4MzEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBLElBQU1VLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQTZCO0FBQUE7O0FBQUEsTUFBMUJDLElBQTBCLFFBQTFCQSxJQUEwQjtBQUFBLE1BQXBCQyxFQUFvQixRQUFwQkEsRUFBb0I7QUFBQSxNQUFoQkMsU0FBZ0IsUUFBaEJBLFNBQWdCOztBQUN6QyxxQkFBeUJKLDJEQUFXLENBQUNELDZEQUFELEVBQWtCO0FBQ3JETSxJQUFBQSxjQUFjLEVBQUUsQ0FBQztBQUFFQyxNQUFBQSxLQUFLLEVBQUVSLDJEQUFhQTtBQUF0QixLQUFEO0FBRHFDLEdBQWxCLENBQXBDO0FBQUE7QUFBQSxNQUFPUyxjQUFQOztBQUlBLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNMLEVBQUQsRUFBS00sQ0FBTCxFQUFXO0FBQzNCQSxJQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDQUgsSUFBQUEsY0FBYyxDQUFDO0FBQUVJLE1BQUFBLFNBQVMsRUFBRTtBQUFFUixRQUFBQSxFQUFFLEVBQUZBO0FBQUY7QUFBYixLQUFELENBQWQ7QUFDQSxHQUhEOztBQUtBLHNCQUNDO0FBQUEsMkJBQ0MsOERBQUMsbURBQUQ7QUFBTyxRQUFFLEVBQUMsTUFBVjtBQUFpQixPQUFDLEVBQUMsTUFBbkI7QUFBMEIsV0FBSyxFQUFDLE9BQWhDO0FBQXdDLE9BQUMsRUFBQyxNQUExQztBQUFpRCxhQUFPLEVBQUMsSUFBekQ7QUFBOEQsT0FBQyxFQUFDLE9BQWhFO0FBQUEsOEJBQ0MsOERBQUMsaURBQUQ7QUFBQSxrQkFBTUQ7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQsZUFFQyw4REFBQyxrREFBRDtBQUFNLGFBQUssRUFBQyxNQUFaO0FBQW1CLHNCQUFjLEVBQUMsZUFBbEM7QUFBQSxnQ0FDQyw4REFBQyxvREFBRDtBQUFRLGtCQUFRLGVBQUUsOERBQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBbEI7QUFBK0IsWUFBRSxFQUFDLE9BQWxDO0FBQTBDLGlCQUFPLEVBQUVVLE1BQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURELGVBSUMsOERBQUMsb0RBQUQ7QUFDQyxrQkFBUSxlQUFFLDhEQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFg7QUFFQyxpQkFBTyxFQUFFLGlCQUFDSCxDQUFEO0FBQUEsbUJBQU9ELFFBQVEsQ0FBQ0wsRUFBRCxFQUFLTSxDQUFMLENBQWY7QUFBQSxXQUZWO0FBR0MsWUFBRSxFQUFDLE9BSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQsbUJBREQ7QUFtQkEsQ0E3QkQ7O0dBQU1SO1VBQ29CRDs7O0tBRHBCQztBQStCTiwrREFBZUEsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NhcmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBTdGFjaywgRmxleCwgQnV0dG9uLCB1c2VEaXNjbG9zdXJlIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHsgRmlFZGl0MyB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xyXG5pbXBvcnQgeyBSaURlbGV0ZUJpbjVMaW5lIH0gZnJvbSBcInJlYWN0LWljb25zL3JpXCI7XHJcbmltcG9ydCB7IEdFVF9CTE9HUE9TVFMsIERFTEVURV9CTE9HUE9TVCB9IGZyb20gXCIuLi9ncmFwaHFsL3F1ZXJpZXNcIjtcclxuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuXHJcbmNvbnN0IENhcmQgPSAoeyB0ZXh0LCBpZCwgb3Blbk1vZGFsIH0pID0+IHtcclxuXHRjb25zdCBbZGVsZXRlQmxvZ1Bvc3RdID0gdXNlTXV0YXRpb24oREVMRVRFX0JMT0dQT1NULCB7XHJcblx0XHRyZWZldGNoUXVlcmllczogW3sgcXVlcnk6IEdFVF9CTE9HUE9TVFMgfV0sXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IG9uRGVsZXRlID0gKGlkLCBlKSA9PiB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRkZWxldGVCbG9nUG9zdCh7IHZhcmlhYmxlczogeyBpZCB9IH0pO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8U3RhY2sgYmc9XCJ0ZWFsXCIgcD1cIjIwcHhcIiBjb2xvcj1cIndoaXRlXCIgbT1cIjEwcHhcIiByb3VuZGVkPVwibGdcIiB3PVwiMzAwcHhcIj5cclxuXHRcdFx0XHQ8Qm94Pnt0ZXh0fTwvQm94PlxyXG5cdFx0XHRcdDxGbGV4IGNvbG9yPVwidGVhbFwiIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiPlxyXG5cdFx0XHRcdFx0PEJ1dHRvbiBsZWZ0SWNvbj17PEZpRWRpdDMgLz59IGJnPVwid2hpdGVcIiBvbkNsaWNrPXtvbk9wZW59PlxyXG5cdFx0XHRcdFx0XHRFZGl0XHJcblx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0bGVmdEljb249ezxSaURlbGV0ZUJpbjVMaW5lIC8+fVxyXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoZSkgPT4gb25EZWxldGUoaWQsIGUpfVxyXG5cdFx0XHRcdFx0XHRiZz1cIndoaXRlXCJcclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0RGVsZXRlXHJcblx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHQ8L0ZsZXg+XHJcblx0XHRcdDwvU3RhY2s+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcclxuIl0sIm5hbWVzIjpbIkJveCIsIlN0YWNrIiwiRmxleCIsIkJ1dHRvbiIsInVzZURpc2Nsb3N1cmUiLCJGaUVkaXQzIiwiUmlEZWxldGVCaW41TGluZSIsIkdFVF9CTE9HUE9TVFMiLCJERUxFVEVfQkxPR1BPU1QiLCJ1c2VNdXRhdGlvbiIsIkNhcmQiLCJ0ZXh0IiwiaWQiLCJvcGVuTW9kYWwiLCJyZWZldGNoUXVlcmllcyIsInF1ZXJ5IiwiZGVsZXRlQmxvZ1Bvc3QiLCJvbkRlbGV0ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInZhcmlhYmxlcyIsIm9uT3BlbiJdLCJzb3VyY2VSb290IjoiIn0=