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
      onOpen = _ref.onOpen,
      setEditId = _ref.setEditId;

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

  var handleEdit = function handleEdit() {
    onOpen = "true";
    setEditId = id;
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
        lineNumber: 25,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {
        color: "teal",
        justifyContent: "space-between",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {
          leftIcon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiEdit3, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 24
          }, _this),
          bg: "white",
          onClick: handleEdit,
          children: "Edit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {
          leftIcon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_icons_ri__WEBPACK_IMPORTED_MODULE_6__.RiDeleteBin5Line, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 17
          }, _this),
          onClick: function onClick(e) {
            return onDelete(id, e);
          },
          bg: "white",
          children: "Delete"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWJiYmE0NGI1Y2JjYTNkMGQ1NjUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBLElBQU1VLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQXFDO0FBQUE7O0FBQUEsTUFBbENDLElBQWtDLFFBQWxDQSxJQUFrQztBQUFBLE1BQTVCQyxFQUE0QixRQUE1QkEsRUFBNEI7QUFBQSxNQUF4QkMsTUFBd0IsUUFBeEJBLE1BQXdCO0FBQUEsTUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjs7QUFDakQscUJBQXlCTCwyREFBVyxDQUFDRCw2REFBRCxFQUFrQjtBQUNyRE8sSUFBQUEsY0FBYyxFQUFFLENBQUM7QUFBRUMsTUFBQUEsS0FBSyxFQUFFVCwyREFBYUE7QUFBdEIsS0FBRDtBQURxQyxHQUFsQixDQUFwQztBQUFBO0FBQUEsTUFBT1UsY0FBUDs7QUFJQSxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDTixFQUFELEVBQUtPLENBQUwsRUFBVztBQUMzQkEsSUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0FILElBQUFBLGNBQWMsQ0FBQztBQUFFSSxNQUFBQSxTQUFTLEVBQUU7QUFBRVQsUUFBQUEsRUFBRSxFQUFGQTtBQUFGO0FBQWIsS0FBRCxDQUFkO0FBQ0EsR0FIRDs7QUFLQSxNQUFNVSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3hCVCxJQUFBQSxNQUFNLEdBQUcsTUFBVDtBQUNBQyxJQUFBQSxTQUFTLEdBQUdGLEVBQVo7QUFDQSxHQUhEOztBQUtBLHNCQUNDO0FBQUEsMkJBQ0MsOERBQUMsbURBQUQ7QUFBTyxRQUFFLEVBQUMsTUFBVjtBQUFpQixPQUFDLEVBQUMsTUFBbkI7QUFBMEIsV0FBSyxFQUFDLE9BQWhDO0FBQXdDLE9BQUMsRUFBQyxNQUExQztBQUFpRCxhQUFPLEVBQUMsSUFBekQ7QUFBOEQsT0FBQyxFQUFDLE9BQWhFO0FBQUEsOEJBQ0MsOERBQUMsaURBQUQ7QUFBQSxrQkFBTUQ7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQsZUFFQyw4REFBQyxrREFBRDtBQUFNLGFBQUssRUFBQyxNQUFaO0FBQW1CLHNCQUFjLEVBQUMsZUFBbEM7QUFBQSxnQ0FDQyw4REFBQyxvREFBRDtBQUFRLGtCQUFRLGVBQUUsOERBQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBbEI7QUFBK0IsWUFBRSxFQUFDLE9BQWxDO0FBQTBDLGlCQUFPLEVBQUVXLFVBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURELGVBSUMsOERBQUMsb0RBQUQ7QUFDQyxrQkFBUSxlQUFFLDhEQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFg7QUFFQyxpQkFBTyxFQUFFLGlCQUFDSCxDQUFEO0FBQUEsbUJBQU9ELFFBQVEsQ0FBQ04sRUFBRCxFQUFLTyxDQUFMLENBQWY7QUFBQSxXQUZWO0FBR0MsWUFBRSxFQUFDLE9BSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQsbUJBREQ7QUFtQkEsQ0FsQ0Q7O0dBQU1UO1VBQ29CRDs7O0tBRHBCQztBQW9DTiwrREFBZUEsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NhcmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBTdGFjaywgRmxleCwgQnV0dG9uLCB1c2VEaXNjbG9zdXJlIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHsgRmlFZGl0MyB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xyXG5pbXBvcnQgeyBSaURlbGV0ZUJpbjVMaW5lIH0gZnJvbSBcInJlYWN0LWljb25zL3JpXCI7XHJcbmltcG9ydCB7IEdFVF9CTE9HUE9TVFMsIERFTEVURV9CTE9HUE9TVCB9IGZyb20gXCIuLi9ncmFwaHFsL3F1ZXJpZXNcIjtcclxuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuXHJcbmNvbnN0IENhcmQgPSAoeyB0ZXh0LCBpZCwgb25PcGVuLCBzZXRFZGl0SWQgfSkgPT4ge1xyXG5cdGNvbnN0IFtkZWxldGVCbG9nUG9zdF0gPSB1c2VNdXRhdGlvbihERUxFVEVfQkxPR1BPU1QsIHtcclxuXHRcdHJlZmV0Y2hRdWVyaWVzOiBbeyBxdWVyeTogR0VUX0JMT0dQT1NUUyB9XSxcclxuXHR9KTtcclxuXHJcblx0Y29uc3Qgb25EZWxldGUgPSAoaWQsIGUpID0+IHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGRlbGV0ZUJsb2dQb3N0KHsgdmFyaWFibGVzOiB7IGlkIH0gfSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaGFuZGxlRWRpdCA9ICgpID0+IHtcclxuXHRcdG9uT3BlbiA9IFwidHJ1ZVwiO1xyXG5cdFx0c2V0RWRpdElkID0gaWQ7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxTdGFjayBiZz1cInRlYWxcIiBwPVwiMjBweFwiIGNvbG9yPVwid2hpdGVcIiBtPVwiMTBweFwiIHJvdW5kZWQ9XCJsZ1wiIHc9XCIzMDBweFwiPlxyXG5cdFx0XHRcdDxCb3g+e3RleHR9PC9Cb3g+XHJcblx0XHRcdFx0PEZsZXggY29sb3I9XCJ0ZWFsXCIganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCI+XHJcblx0XHRcdFx0XHQ8QnV0dG9uIGxlZnRJY29uPXs8RmlFZGl0MyAvPn0gYmc9XCJ3aGl0ZVwiIG9uQ2xpY2s9e2hhbmRsZUVkaXR9PlxyXG5cdFx0XHRcdFx0XHRFZGl0XHJcblx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0bGVmdEljb249ezxSaURlbGV0ZUJpbjVMaW5lIC8+fVxyXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoZSkgPT4gb25EZWxldGUoaWQsIGUpfVxyXG5cdFx0XHRcdFx0XHRiZz1cIndoaXRlXCJcclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0RGVsZXRlXHJcblx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHQ8L0ZsZXg+XHJcblx0XHRcdDwvU3RhY2s+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcclxuIl0sIm5hbWVzIjpbIkJveCIsIlN0YWNrIiwiRmxleCIsIkJ1dHRvbiIsInVzZURpc2Nsb3N1cmUiLCJGaUVkaXQzIiwiUmlEZWxldGVCaW41TGluZSIsIkdFVF9CTE9HUE9TVFMiLCJERUxFVEVfQkxPR1BPU1QiLCJ1c2VNdXRhdGlvbiIsIkNhcmQiLCJ0ZXh0IiwiaWQiLCJvbk9wZW4iLCJzZXRFZGl0SWQiLCJyZWZldGNoUXVlcmllcyIsInF1ZXJ5IiwiZGVsZXRlQmxvZ1Bvc3QiLCJvbkRlbGV0ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInZhcmlhYmxlcyIsImhhbmRsZUVkaXQiXSwic291cmNlUm9vdCI6IiJ9