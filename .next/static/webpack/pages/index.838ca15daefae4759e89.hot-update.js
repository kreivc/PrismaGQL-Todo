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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODM4Y2ExNWRhZWZhZTQ3NTllODkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFZQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1jLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQWlDO0FBQUE7O0FBQUEsTUFBOUJDLE1BQThCLFFBQTlCQSxNQUE4QjtBQUFBLE1BQXRCQyxPQUFzQixRQUF0QkEsT0FBc0I7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7O0FBQ3BELGtCQUFvQ0osK0NBQVEsQ0FBQyxFQUFELENBQTVDO0FBQUEsTUFBT0ssVUFBUDtBQUFBLE1BQW1CQyxhQUFuQjs7QUFFQSxxQkFBdUJQLDJEQUFXLENBQUNELDJEQUFELEVBQWdCO0FBQ2pEUyxJQUFBQSxjQUFjLEVBQUUsQ0FBQztBQUFFQyxNQUFBQSxLQUFLLEVBQUVYLDJEQUFhQTtBQUF0QixLQUFEO0FBRGlDLEdBQWhCLENBQWxDO0FBQUE7QUFBQSxNQUFPWSxZQUFQOztBQUlBLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEVBQUQsRUFBS0MsSUFBTCxFQUFXQyxDQUFYLEVBQWlCO0FBQ2pDQSxJQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDQUwsSUFBQUEsWUFBWSxDQUFDO0FBQUVNLE1BQUFBLFNBQVMsRUFBRTtBQUFFSixRQUFBQSxFQUFFLEVBQUVBLEVBQU47QUFBVUMsUUFBQUEsSUFBSSxFQUFFQTtBQUFoQjtBQUFiLEtBQUQsQ0FBWjtBQUNBLEdBSEQ7O0FBS0Esc0JBQ0MsOERBQUMsbURBQUQ7QUFBTyxVQUFNLEVBQUVWLE1BQWY7QUFBdUIsV0FBTyxFQUFFQyxPQUFoQztBQUFBLDRCQUNDLDhEQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxlQUVDLDhEQUFDLGlEQUFEO0FBQUssUUFBRSxFQUFDLE1BQVI7QUFBZSxjQUFRLEVBQUUsa0JBQUNVLENBQUQ7QUFBQSxlQUFPSCxRQUFRLENBQUNOLE1BQUQsRUFBU0MsVUFBVCxFQUFxQlEsQ0FBckIsQ0FBZjtBQUFBLE9BQXpCO0FBQUEsNkJBQ0MsOERBQUMsMERBQUQ7QUFBQSxnQ0FDQyw4REFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxlQUVDLDhEQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkQsZUFHQyw4REFBQyx1REFBRDtBQUFBLGlDQUNDLDhEQUFDLHNEQUFEO0FBQ0MsYUFBQyxFQUFDLE9BREg7QUFFQyxhQUFDLEVBQUMsT0FGSDtBQUdDLHVCQUFXLEVBQUMsb0JBSGI7QUFJQyxpQkFBSyxFQUFFUixVQUpSO0FBS0Msb0JBQVEsRUFBRSxrQkFBQ1EsQ0FBRDtBQUFBLHFCQUFPUCxhQUFhLENBQUNPLENBQUMsQ0FBQ0csTUFBRixDQUFTQyxLQUFWLENBQXBCO0FBQUE7QUFMWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRCxlQWFDLDhEQUFDLHlEQUFEO0FBQUEsa0NBQ0MsOERBQUMsb0RBQUQ7QUFBUSx1QkFBVyxFQUFDLE1BQXBCO0FBQTJCLGNBQUUsRUFBRSxDQUEvQjtBQUFrQyxtQkFBTyxFQUFFZCxPQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERCxlQUlDLDhEQUFDLG9EQUFEO0FBQVEsdUJBQVcsRUFBQyxNQUFwQjtBQUEyQixnQkFBSSxFQUFDLFFBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFiRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUE2QkEsQ0F6Q0Q7O0dBQU1GO1VBR2tCRjs7O0tBSGxCRTtBQTJDTiwrREFBZUEsV0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1VwZGF0ZU1vZGFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcblx0TW9kYWwsXHJcblx0QnV0dG9uLFxyXG5cdE1vZGFsT3ZlcmxheSxcclxuXHRNb2RhbENvbnRlbnQsXHJcblx0TW9kYWxIZWFkZXIsXHJcblx0TW9kYWxDbG9zZUJ1dHRvbixcclxuXHRNb2RhbEJvZHksXHJcblx0TW9kYWxGb290ZXIsXHJcblx0VGV4dGFyZWEsXHJcblx0Qm94LFxyXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB7IEdFVF9CTE9HUE9TVFMsIEVESVRfQkxPR1BPU1QgfSBmcm9tIFwiLi4vZ3JhcGhxbC9xdWVyaWVzXCI7XHJcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBVcGRhdGVNb2RhbCA9ICh7IGlzT3Blbiwgb25DbG9zZSwgZWRpdElkIH0pID0+IHtcclxuXHRjb25zdCBbdXBkYXRlVGV4dCwgc2V0VXBkYXRlVGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcblx0Y29uc3QgW2VkaXRCbG9nUG9zdF0gPSB1c2VNdXRhdGlvbihFRElUX0JMT0dQT1NULCB7XHJcblx0XHRyZWZldGNoUXVlcmllczogW3sgcXVlcnk6IEdFVF9CTE9HUE9TVFMgfV0sXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IG9uVXBkYXRlID0gKGlkLCB0ZXh0LCBlKSA9PiB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRlZGl0QmxvZ1Bvc3QoeyB2YXJpYWJsZXM6IHsgaWQ6IGlkLCB0ZXh0OiB0ZXh0IH0gfSk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxNb2RhbCBpc09wZW49e2lzT3Blbn0gb25DbG9zZT17b25DbG9zZX0+XHJcblx0XHRcdDxNb2RhbE92ZXJsYXkgLz5cclxuXHRcdFx0PEJveCBhcz1cImZvcm1cIiBvblN1Ym1pdD17KGUpID0+IG9uVXBkYXRlKGVkaXRJZCwgdXBkYXRlVGV4dCwgZSl9PlxyXG5cdFx0XHRcdDxNb2RhbENvbnRlbnQ+XHJcblx0XHRcdFx0XHQ8TW9kYWxIZWFkZXI+RWRpdCBUb2RvPC9Nb2RhbEhlYWRlcj5cclxuXHRcdFx0XHRcdDxNb2RhbENsb3NlQnV0dG9uIC8+XHJcblx0XHRcdFx0XHQ8TW9kYWxCb2R5PlxyXG5cdFx0XHRcdFx0XHQ8VGV4dGFyZWFcclxuXHRcdFx0XHRcdFx0XHR3PVwiNDAwcHhcIlxyXG5cdFx0XHRcdFx0XHRcdGg9XCIxMDBweFwiXHJcblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJVcGRhdGUgVG9kbyBoZXJlLi5cIlxyXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXt1cGRhdGVUZXh0fVxyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXBkYXRlVGV4dChlLnRhcmdldC52YWx1ZSl9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L01vZGFsQm9keT5cclxuXHJcblx0XHRcdFx0XHQ8TW9kYWxGb290ZXI+XHJcblx0XHRcdFx0XHRcdDxCdXR0b24gY29sb3JTY2hlbWU9XCJncmF5XCIgbXI9ezN9IG9uQ2xpY2s9e29uQ2xvc2V9PlxyXG5cdFx0XHRcdFx0XHRcdENhbmNlbFxyXG5cdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0PEJ1dHRvbiBjb2xvclNjaGVtZT1cInRlYWxcIiB0eXBlPVwic3VibWl0XCI+XHJcblx0XHRcdFx0XHRcdFx0VXBkYXRlXHJcblx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0PC9Nb2RhbEZvb3Rlcj5cclxuXHRcdFx0XHQ8L01vZGFsQ29udGVudD5cclxuXHRcdFx0PC9Cb3g+XHJcblx0XHQ8L01vZGFsPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVcGRhdGVNb2RhbDtcclxuIl0sIm5hbWVzIjpbIk1vZGFsIiwiQnV0dG9uIiwiTW9kYWxPdmVybGF5IiwiTW9kYWxDb250ZW50IiwiTW9kYWxIZWFkZXIiLCJNb2RhbENsb3NlQnV0dG9uIiwiTW9kYWxCb2R5IiwiTW9kYWxGb290ZXIiLCJUZXh0YXJlYSIsIkJveCIsIkdFVF9CTE9HUE9TVFMiLCJFRElUX0JMT0dQT1NUIiwidXNlTXV0YXRpb24iLCJ1c2VTdGF0ZSIsIlVwZGF0ZU1vZGFsIiwiaXNPcGVuIiwib25DbG9zZSIsImVkaXRJZCIsInVwZGF0ZVRleHQiLCJzZXRVcGRhdGVUZXh0IiwicmVmZXRjaFF1ZXJpZXMiLCJxdWVyeSIsImVkaXRCbG9nUG9zdCIsIm9uVXBkYXRlIiwiaWQiLCJ0ZXh0IiwiZSIsInByZXZlbnREZWZhdWx0IiwidmFyaWFibGVzIiwidGFyZ2V0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9