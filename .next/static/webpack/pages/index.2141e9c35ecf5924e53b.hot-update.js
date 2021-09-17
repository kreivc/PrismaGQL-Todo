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
      onOpen = _ref.onOpen;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjE0MWU5YzM1ZWNmNTkyNGU1M2IuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBLElBQU1VLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQTBCO0FBQUE7O0FBQUEsTUFBdkJDLElBQXVCLFFBQXZCQSxJQUF1QjtBQUFBLE1BQWpCQyxFQUFpQixRQUFqQkEsRUFBaUI7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7O0FBQ3RDLHFCQUF5QkosMkRBQVcsQ0FBQ0QsNkRBQUQsRUFBa0I7QUFDckRNLElBQUFBLGNBQWMsRUFBRSxDQUFDO0FBQUVDLE1BQUFBLEtBQUssRUFBRVIsMkRBQWFBO0FBQXRCLEtBQUQ7QUFEcUMsR0FBbEIsQ0FBcEM7QUFBQTtBQUFBLE1BQU9TLGNBQVA7O0FBSUEsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0wsRUFBRCxFQUFLTSxDQUFMLEVBQVc7QUFDM0JBLElBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUNBSCxJQUFBQSxjQUFjLENBQUM7QUFBRUksTUFBQUEsU0FBUyxFQUFFO0FBQUVSLFFBQUFBLEVBQUUsRUFBRkE7QUFBRjtBQUFiLEtBQUQsQ0FBZDtBQUNBLEdBSEQ7O0FBS0Esc0JBQ0M7QUFBQSwyQkFDQyw4REFBQyxtREFBRDtBQUFPLFFBQUUsRUFBQyxNQUFWO0FBQWlCLE9BQUMsRUFBQyxNQUFuQjtBQUEwQixXQUFLLEVBQUMsT0FBaEM7QUFBd0MsT0FBQyxFQUFDLE1BQTFDO0FBQWlELGFBQU8sRUFBQyxJQUF6RDtBQUE4RCxPQUFDLEVBQUMsT0FBaEU7QUFBQSw4QkFDQyw4REFBQyxpREFBRDtBQUFBLGtCQUFNRDtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxlQUVDLDhEQUFDLGtEQUFEO0FBQU0sYUFBSyxFQUFDLE1BQVo7QUFBbUIsc0JBQWMsRUFBQyxlQUFsQztBQUFBLGdDQUNDLDhEQUFDLG9EQUFEO0FBQVEsa0JBQVEsZUFBRSw4REFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFsQjtBQUErQixZQUFFLEVBQUMsT0FBbEM7QUFBMEMsaUJBQU8sRUFBRUUsTUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQsZUFJQyw4REFBQyxvREFBRDtBQUNDLGtCQUFRLGVBQUUsOERBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEWDtBQUVDLGlCQUFPLEVBQUUsaUJBQUNLLENBQUQ7QUFBQSxtQkFBT0QsUUFBUSxDQUFDTCxFQUFELEVBQUtNLENBQUwsQ0FBZjtBQUFBLFdBRlY7QUFHQyxZQUFFLEVBQUMsT0FISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERCxtQkFERDtBQW1CQSxDQTdCRDs7R0FBTVI7VUFDb0JEOzs7S0FEcEJDO0FBK0JOLCtEQUFlQSxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2FyZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIFN0YWNrLCBGbGV4LCBCdXR0b24sIHVzZURpc2Nsb3N1cmUgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBGaUVkaXQzIH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCI7XHJcbmltcG9ydCB7IFJpRGVsZXRlQmluNUxpbmUgfSBmcm9tIFwicmVhY3QtaWNvbnMvcmlcIjtcclxuaW1wb3J0IHsgR0VUX0JMT0dQT1NUUywgREVMRVRFX0JMT0dQT1NUIH0gZnJvbSBcIi4uL2dyYXBocWwvcXVlcmllc1wiO1xyXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5cclxuY29uc3QgQ2FyZCA9ICh7IHRleHQsIGlkLCBvbk9wZW4gfSkgPT4ge1xyXG5cdGNvbnN0IFtkZWxldGVCbG9nUG9zdF0gPSB1c2VNdXRhdGlvbihERUxFVEVfQkxPR1BPU1QsIHtcclxuXHRcdHJlZmV0Y2hRdWVyaWVzOiBbeyBxdWVyeTogR0VUX0JMT0dQT1NUUyB9XSxcclxuXHR9KTtcclxuXHJcblx0Y29uc3Qgb25EZWxldGUgPSAoaWQsIGUpID0+IHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGRlbGV0ZUJsb2dQb3N0KHsgdmFyaWFibGVzOiB7IGlkIH0gfSk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxTdGFjayBiZz1cInRlYWxcIiBwPVwiMjBweFwiIGNvbG9yPVwid2hpdGVcIiBtPVwiMTBweFwiIHJvdW5kZWQ9XCJsZ1wiIHc9XCIzMDBweFwiPlxyXG5cdFx0XHRcdDxCb3g+e3RleHR9PC9Cb3g+XHJcblx0XHRcdFx0PEZsZXggY29sb3I9XCJ0ZWFsXCIganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCI+XHJcblx0XHRcdFx0XHQ8QnV0dG9uIGxlZnRJY29uPXs8RmlFZGl0MyAvPn0gYmc9XCJ3aGl0ZVwiIG9uQ2xpY2s9e29uT3Blbn0+XHJcblx0XHRcdFx0XHRcdEVkaXRcclxuXHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRsZWZ0SWNvbj17PFJpRGVsZXRlQmluNUxpbmUgLz59XHJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eyhlKSA9PiBvbkRlbGV0ZShpZCwgZSl9XHJcblx0XHRcdFx0XHRcdGJnPVwid2hpdGVcIlxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHREZWxldGVcclxuXHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdDwvRmxleD5cclxuXHRcdFx0PC9TdGFjaz5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xyXG4iXSwibmFtZXMiOlsiQm94IiwiU3RhY2siLCJGbGV4IiwiQnV0dG9uIiwidXNlRGlzY2xvc3VyZSIsIkZpRWRpdDMiLCJSaURlbGV0ZUJpbjVMaW5lIiwiR0VUX0JMT0dQT1NUUyIsIkRFTEVURV9CTE9HUE9TVCIsInVzZU11dGF0aW9uIiwiQ2FyZCIsInRleHQiLCJpZCIsIm9uT3BlbiIsInJlZmV0Y2hRdWVyaWVzIiwicXVlcnkiLCJkZWxldGVCbG9nUG9zdCIsIm9uRGVsZXRlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidmFyaWFibGVzIl0sInNvdXJjZVJvb3QiOiIifQ==