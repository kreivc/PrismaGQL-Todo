"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/UpdateModal.js":
/*!***********************************!*\
  !*** ./components/UpdateModal.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_asus_Desktop_prisma_gql_todo_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../graphql/queries */ "./graphql/queries.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\asus\\Desktop\\prisma-gql-todo\\components\\UpdateModal.js",
    _this = undefined,
    _s = $RefreshSig$();







var UpdateModal = function UpdateModal(_ref) {
  _s();

  var isOpen = _ref.isOpen,
      onClose = _ref.onClose,
      editId = _ref.editId;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),
      updateText = _useState[0],
      setUpdateText = _useState[1];

  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useMutation)(_graphql_queries__WEBPACK_IMPORTED_MODULE_1__.EDIT_BLOGPOST, {
    refetchQueries: [{
      query: _graphql_queries__WEBPACK_IMPORTED_MODULE_1__.GET_BLOGPOSTS
    }]
  }),
      _useMutation2 = (0,C_Users_asus_Desktop_prisma_gql_todo_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useMutation, 1),
      editBlogPost = _useMutation2[0];

  var onUpdate = function onUpdate(id, text, e) {
    e.preventDefault();
    editBlogPost({
      variables: {
        id: id,
        text: text
      }
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Modal, {
    isOpen: isOpen,
    onClose: onClose,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.ModalOverlay, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {
      as: "form",
      onSubmit: function onSubmit(e) {
        return onUpdate(editId, updateText, e);
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.ModalContent, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.ModalHeader, {
          children: "Edit Todo"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.ModalCloseButton, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.ModalBody, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Textarea, {
            w: "400px",
            h: "100px",
            placeholder: "Update Todo here..",
            value: updateText,
            onChange: function onChange(e) {
              return setUpdateText(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 7
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.ModalFooter, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {
            colorScheme: "gray",
            mr: 3,
            onClick: onClose,
            children: "Cancel"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 7
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {
            colorScheme: "teal",
            type: "submit",
            onClick: function onClick(e) {
              return onUpdate(editId, updateText, e);
            },
            children: "Update"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 3
  }, _this);
};

_s(UpdateModal, "oAaZx3tezDXiam9xXUBkVDg2io4=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useMutation];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjU3OGY5ZDZjM2ZiMTU2YjgzMmEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFZQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1jLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQWlDO0FBQUE7O0FBQUEsTUFBOUJDLE1BQThCLFFBQTlCQSxNQUE4QjtBQUFBLE1BQXRCQyxPQUFzQixRQUF0QkEsT0FBc0I7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7O0FBQ3BELGtCQUFvQ0osK0NBQVEsQ0FBQyxFQUFELENBQTVDO0FBQUEsTUFBT0ssVUFBUDtBQUFBLE1BQW1CQyxhQUFuQjs7QUFFQSxxQkFBdUJQLDJEQUFXLENBQUNELDJEQUFELEVBQWdCO0FBQ2pEUyxJQUFBQSxjQUFjLEVBQUUsQ0FBQztBQUFFQyxNQUFBQSxLQUFLLEVBQUVYLDJEQUFhQTtBQUF0QixLQUFEO0FBRGlDLEdBQWhCLENBQWxDO0FBQUE7QUFBQSxNQUFPWSxZQUFQOztBQUlBLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEVBQUQsRUFBS0MsSUFBTCxFQUFXQyxDQUFYLEVBQWlCO0FBQ2pDQSxJQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDQUwsSUFBQUEsWUFBWSxDQUFDO0FBQUVNLE1BQUFBLFNBQVMsRUFBRTtBQUFFSixRQUFBQSxFQUFFLEVBQUVBLEVBQU47QUFBVUMsUUFBQUEsSUFBSSxFQUFFQTtBQUFoQjtBQUFiLEtBQUQsQ0FBWjtBQUNBLEdBSEQ7O0FBS0Esc0JBQ0MsOERBQUMsbURBQUQ7QUFBTyxVQUFNLEVBQUVWLE1BQWY7QUFBdUIsV0FBTyxFQUFFQyxPQUFoQztBQUFBLDRCQUNDLDhEQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxlQUVDLDhEQUFDLGlEQUFEO0FBQUssUUFBRSxFQUFDLE1BQVI7QUFBZSxjQUFRLEVBQUUsa0JBQUNVLENBQUQ7QUFBQSxlQUFPSCxRQUFRLENBQUNOLE1BQUQsRUFBU0MsVUFBVCxFQUFxQlEsQ0FBckIsQ0FBZjtBQUFBLE9BQXpCO0FBQUEsNkJBQ0MsOERBQUMsMERBQUQ7QUFBQSxnQ0FDQyw4REFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxlQUVDLDhEQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkQsZUFHQyw4REFBQyx1REFBRDtBQUFBLGlDQUNDLDhEQUFDLHNEQUFEO0FBQ0MsYUFBQyxFQUFDLE9BREg7QUFFQyxhQUFDLEVBQUMsT0FGSDtBQUdDLHVCQUFXLEVBQUMsb0JBSGI7QUFJQyxpQkFBSyxFQUFFUixVQUpSO0FBS0Msb0JBQVEsRUFBRSxrQkFBQ1EsQ0FBRDtBQUFBLHFCQUFPUCxhQUFhLENBQUNPLENBQUMsQ0FBQ0csTUFBRixDQUFTQyxLQUFWLENBQXBCO0FBQUE7QUFMWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRCxlQWFDLDhEQUFDLHlEQUFEO0FBQUEsa0NBQ0MsOERBQUMsb0RBQUQ7QUFBUSx1QkFBVyxFQUFDLE1BQXBCO0FBQTJCLGNBQUUsRUFBRSxDQUEvQjtBQUFrQyxtQkFBTyxFQUFFZCxPQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERCxlQUlDLDhEQUFDLG9EQUFEO0FBQ0MsdUJBQVcsRUFBQyxNQURiO0FBRUMsZ0JBQUksRUFBQyxRQUZOO0FBR0MsbUJBQU8sRUFBRSxpQkFBQ1UsQ0FBRDtBQUFBLHFCQUFPSCxRQUFRLENBQUNOLE1BQUQsRUFBU0MsVUFBVCxFQUFxQlEsQ0FBckIsQ0FBZjtBQUFBLGFBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQWlDQSxDQTdDRDs7R0FBTVo7VUFHa0JGOzs7S0FIbEJFO0FBK0NOLCtEQUFlQSxXQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVXBkYXRlTW9kYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuXHRNb2RhbCxcclxuXHRCdXR0b24sXHJcblx0TW9kYWxPdmVybGF5LFxyXG5cdE1vZGFsQ29udGVudCxcclxuXHRNb2RhbEhlYWRlcixcclxuXHRNb2RhbENsb3NlQnV0dG9uLFxyXG5cdE1vZGFsQm9keSxcclxuXHRNb2RhbEZvb3RlcixcclxuXHRUZXh0YXJlYSxcclxuXHRCb3gsXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHsgR0VUX0JMT0dQT1NUUywgRURJVF9CTE9HUE9TVCB9IGZyb20gXCIuLi9ncmFwaHFsL3F1ZXJpZXNcIjtcclxuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFVwZGF0ZU1vZGFsID0gKHsgaXNPcGVuLCBvbkNsb3NlLCBlZGl0SWQgfSkgPT4ge1xyXG5cdGNvbnN0IFt1cGRhdGVUZXh0LCBzZXRVcGRhdGVUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuXHRjb25zdCBbZWRpdEJsb2dQb3N0XSA9IHVzZU11dGF0aW9uKEVESVRfQkxPR1BPU1QsIHtcclxuXHRcdHJlZmV0Y2hRdWVyaWVzOiBbeyBxdWVyeTogR0VUX0JMT0dQT1NUUyB9XSxcclxuXHR9KTtcclxuXHJcblx0Y29uc3Qgb25VcGRhdGUgPSAoaWQsIHRleHQsIGUpID0+IHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGVkaXRCbG9nUG9zdCh7IHZhcmlhYmxlczogeyBpZDogaWQsIHRleHQ6IHRleHQgfSB9KTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PE1vZGFsIGlzT3Blbj17aXNPcGVufSBvbkNsb3NlPXtvbkNsb3NlfT5cclxuXHRcdFx0PE1vZGFsT3ZlcmxheSAvPlxyXG5cdFx0XHQ8Qm94IGFzPVwiZm9ybVwiIG9uU3VibWl0PXsoZSkgPT4gb25VcGRhdGUoZWRpdElkLCB1cGRhdGVUZXh0LCBlKX0+XHJcblx0XHRcdFx0PE1vZGFsQ29udGVudD5cclxuXHRcdFx0XHRcdDxNb2RhbEhlYWRlcj5FZGl0IFRvZG88L01vZGFsSGVhZGVyPlxyXG5cdFx0XHRcdFx0PE1vZGFsQ2xvc2VCdXR0b24gLz5cclxuXHRcdFx0XHRcdDxNb2RhbEJvZHk+XHJcblx0XHRcdFx0XHRcdDxUZXh0YXJlYVxyXG5cdFx0XHRcdFx0XHRcdHc9XCI0MDBweFwiXHJcblx0XHRcdFx0XHRcdFx0aD1cIjEwMHB4XCJcclxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIlVwZGF0ZSBUb2RvIGhlcmUuLlwiXHJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e3VwZGF0ZVRleHR9XHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRVcGRhdGVUZXh0KGUudGFyZ2V0LnZhbHVlKX1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvTW9kYWxCb2R5PlxyXG5cclxuXHRcdFx0XHRcdDxNb2RhbEZvb3Rlcj5cclxuXHRcdFx0XHRcdFx0PEJ1dHRvbiBjb2xvclNjaGVtZT1cImdyYXlcIiBtcj17M30gb25DbGljaz17b25DbG9zZX0+XHJcblx0XHRcdFx0XHRcdFx0Q2FuY2VsXHJcblx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0Y29sb3JTY2hlbWU9XCJ0ZWFsXCJcclxuXHRcdFx0XHRcdFx0XHR0eXBlPVwic3VibWl0XCJcclxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoZSkgPT4gb25VcGRhdGUoZWRpdElkLCB1cGRhdGVUZXh0LCBlKX1cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFVwZGF0ZVxyXG5cdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdDwvTW9kYWxGb290ZXI+XHJcblx0XHRcdFx0PC9Nb2RhbENvbnRlbnQ+XHJcblx0XHRcdDwvQm94PlxyXG5cdFx0PC9Nb2RhbD5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXBkYXRlTW9kYWw7XHJcbiJdLCJuYW1lcyI6WyJNb2RhbCIsIkJ1dHRvbiIsIk1vZGFsT3ZlcmxheSIsIk1vZGFsQ29udGVudCIsIk1vZGFsSGVhZGVyIiwiTW9kYWxDbG9zZUJ1dHRvbiIsIk1vZGFsQm9keSIsIk1vZGFsRm9vdGVyIiwiVGV4dGFyZWEiLCJCb3giLCJHRVRfQkxPR1BPU1RTIiwiRURJVF9CTE9HUE9TVCIsInVzZU11dGF0aW9uIiwidXNlU3RhdGUiLCJVcGRhdGVNb2RhbCIsImlzT3BlbiIsIm9uQ2xvc2UiLCJlZGl0SWQiLCJ1cGRhdGVUZXh0Iiwic2V0VXBkYXRlVGV4dCIsInJlZmV0Y2hRdWVyaWVzIiwicXVlcnkiLCJlZGl0QmxvZ1Bvc3QiLCJvblVwZGF0ZSIsImlkIiwidGV4dCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInZhcmlhYmxlcyIsInRhcmdldCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==