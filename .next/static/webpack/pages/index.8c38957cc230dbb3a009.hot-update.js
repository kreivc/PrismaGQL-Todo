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
    onClose();
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Modal, {
    isOpen: isOpen,
    onClose: onClose,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.ModalOverlay, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.ModalContent, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.ModalHeader, {
        children: "Edit Todo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.ModalCloseButton, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 5
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
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.ModalFooter, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {
          colorScheme: "gray",
          mr: 3,
          onClick: onClose,
          children: "Cancel"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 6
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
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGMzODk1N2NjMjMwZGJiM2EwMDkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFZQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1jLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQWlDO0FBQUE7O0FBQUEsTUFBOUJDLE1BQThCLFFBQTlCQSxNQUE4QjtBQUFBLE1BQXRCQyxPQUFzQixRQUF0QkEsT0FBc0I7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7O0FBQ3BELGtCQUFvQ0osK0NBQVEsQ0FBQyxFQUFELENBQTVDO0FBQUEsTUFBT0ssVUFBUDtBQUFBLE1BQW1CQyxhQUFuQjs7QUFFQSxxQkFBdUJQLDJEQUFXLENBQUNELDJEQUFELEVBQWdCO0FBQ2pEUyxJQUFBQSxjQUFjLEVBQUUsQ0FBQztBQUFFQyxNQUFBQSxLQUFLLEVBQUVYLDJEQUFhQTtBQUF0QixLQUFEO0FBRGlDLEdBQWhCLENBQWxDO0FBQUE7QUFBQSxNQUFPWSxZQUFQOztBQUlBLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEVBQUQsRUFBS0MsSUFBTCxFQUFXQyxDQUFYLEVBQWlCO0FBQ2pDQSxJQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDQUwsSUFBQUEsWUFBWSxDQUFDO0FBQUVNLE1BQUFBLFNBQVMsRUFBRTtBQUFFSixRQUFBQSxFQUFFLEVBQUVBLEVBQU47QUFBVUMsUUFBQUEsSUFBSSxFQUFFQTtBQUFoQjtBQUFiLEtBQUQsQ0FBWjtBQUNBVCxJQUFBQSxPQUFPO0FBQ1AsR0FKRDs7QUFNQSxzQkFDQyw4REFBQyxtREFBRDtBQUFPLFVBQU0sRUFBRUQsTUFBZjtBQUF1QixXQUFPLEVBQUVDLE9BQWhDO0FBQUEsNEJBQ0MsOERBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELGVBRUMsOERBQUMsMERBQUQ7QUFBQSw4QkFDQyw4REFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURELGVBRUMsOERBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZELGVBR0MsOERBQUMsdURBQUQ7QUFBQSwrQkFDQyw4REFBQyxzREFBRDtBQUNDLFdBQUMsRUFBQyxPQURIO0FBRUMsV0FBQyxFQUFDLE9BRkg7QUFHQyxxQkFBVyxFQUFDLG9CQUhiO0FBSUMsZUFBSyxFQUFFRSxVQUpSO0FBS0Msa0JBQVEsRUFBRSxrQkFBQ1EsQ0FBRDtBQUFBLG1CQUFPUCxhQUFhLENBQUNPLENBQUMsQ0FBQ0csTUFBRixDQUFTQyxLQUFWLENBQXBCO0FBQUE7QUFMWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhELGVBYUMsOERBQUMseURBQUQ7QUFBQSxnQ0FDQyw4REFBQyxvREFBRDtBQUFRLHFCQUFXLEVBQUMsTUFBcEI7QUFBMkIsWUFBRSxFQUFFLENBQS9CO0FBQWtDLGlCQUFPLEVBQUVkLE9BQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURELGVBSUMsOERBQUMsb0RBQUQ7QUFDQyxxQkFBVyxFQUFDLE1BRGI7QUFFQyxjQUFJLEVBQUMsUUFGTjtBQUdDLGlCQUFPLEVBQUUsaUJBQUNVLENBQUQ7QUFBQSxtQkFBT0gsUUFBUSxDQUFDTixNQUFELEVBQVNDLFVBQVQsRUFBcUJRLENBQXJCLENBQWY7QUFBQSxXQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBK0JBLENBNUNEOztHQUFNWjtVQUdrQkY7OztLQUhsQkU7QUE4Q04sK0RBQWVBLFdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VcGRhdGVNb2RhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG5cdE1vZGFsLFxyXG5cdEJ1dHRvbixcclxuXHRNb2RhbE92ZXJsYXksXHJcblx0TW9kYWxDb250ZW50LFxyXG5cdE1vZGFsSGVhZGVyLFxyXG5cdE1vZGFsQ2xvc2VCdXR0b24sXHJcblx0TW9kYWxCb2R5LFxyXG5cdE1vZGFsRm9vdGVyLFxyXG5cdFRleHRhcmVhLFxyXG5cdEJveCxcclxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBHRVRfQkxPR1BPU1RTLCBFRElUX0JMT0dQT1NUIH0gZnJvbSBcIi4uL2dyYXBocWwvcXVlcmllc1wiO1xyXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgVXBkYXRlTW9kYWwgPSAoeyBpc09wZW4sIG9uQ2xvc2UsIGVkaXRJZCB9KSA9PiB7XHJcblx0Y29uc3QgW3VwZGF0ZVRleHQsIHNldFVwZGF0ZVRleHRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG5cdGNvbnN0IFtlZGl0QmxvZ1Bvc3RdID0gdXNlTXV0YXRpb24oRURJVF9CTE9HUE9TVCwge1xyXG5cdFx0cmVmZXRjaFF1ZXJpZXM6IFt7IHF1ZXJ5OiBHRVRfQkxPR1BPU1RTIH1dLFxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCBvblVwZGF0ZSA9IChpZCwgdGV4dCwgZSkgPT4ge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0ZWRpdEJsb2dQb3N0KHsgdmFyaWFibGVzOiB7IGlkOiBpZCwgdGV4dDogdGV4dCB9IH0pO1xyXG5cdFx0b25DbG9zZSgpO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8TW9kYWwgaXNPcGVuPXtpc09wZW59IG9uQ2xvc2U9e29uQ2xvc2V9PlxyXG5cdFx0XHQ8TW9kYWxPdmVybGF5IC8+XHJcblx0XHRcdDxNb2RhbENvbnRlbnQ+XHJcblx0XHRcdFx0PE1vZGFsSGVhZGVyPkVkaXQgVG9kbzwvTW9kYWxIZWFkZXI+XHJcblx0XHRcdFx0PE1vZGFsQ2xvc2VCdXR0b24gLz5cclxuXHRcdFx0XHQ8TW9kYWxCb2R5PlxyXG5cdFx0XHRcdFx0PFRleHRhcmVhXHJcblx0XHRcdFx0XHRcdHc9XCI0MDBweFwiXHJcblx0XHRcdFx0XHRcdGg9XCIxMDBweFwiXHJcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiVXBkYXRlIFRvZG8gaGVyZS4uXCJcclxuXHRcdFx0XHRcdFx0dmFsdWU9e3VwZGF0ZVRleHR9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXBkYXRlVGV4dChlLnRhcmdldC52YWx1ZSl9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvTW9kYWxCb2R5PlxyXG5cclxuXHRcdFx0XHQ8TW9kYWxGb290ZXI+XHJcblx0XHRcdFx0XHQ8QnV0dG9uIGNvbG9yU2NoZW1lPVwiZ3JheVwiIG1yPXszfSBvbkNsaWNrPXtvbkNsb3NlfT5cclxuXHRcdFx0XHRcdFx0Q2FuY2VsXHJcblx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0Y29sb3JTY2hlbWU9XCJ0ZWFsXCJcclxuXHRcdFx0XHRcdFx0dHlwZT1cInN1Ym1pdFwiXHJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eyhlKSA9PiBvblVwZGF0ZShlZGl0SWQsIHVwZGF0ZVRleHQsIGUpfVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRVcGRhdGVcclxuXHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdDwvTW9kYWxGb290ZXI+XHJcblx0XHRcdDwvTW9kYWxDb250ZW50PlxyXG5cdFx0PC9Nb2RhbD5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXBkYXRlTW9kYWw7XHJcbiJdLCJuYW1lcyI6WyJNb2RhbCIsIkJ1dHRvbiIsIk1vZGFsT3ZlcmxheSIsIk1vZGFsQ29udGVudCIsIk1vZGFsSGVhZGVyIiwiTW9kYWxDbG9zZUJ1dHRvbiIsIk1vZGFsQm9keSIsIk1vZGFsRm9vdGVyIiwiVGV4dGFyZWEiLCJCb3giLCJHRVRfQkxPR1BPU1RTIiwiRURJVF9CTE9HUE9TVCIsInVzZU11dGF0aW9uIiwidXNlU3RhdGUiLCJVcGRhdGVNb2RhbCIsImlzT3BlbiIsIm9uQ2xvc2UiLCJlZGl0SWQiLCJ1cGRhdGVUZXh0Iiwic2V0VXBkYXRlVGV4dCIsInJlZmV0Y2hRdWVyaWVzIiwicXVlcnkiLCJlZGl0QmxvZ1Bvc3QiLCJvblVwZGF0ZSIsImlkIiwidGV4dCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInZhcmlhYmxlcyIsInRhcmdldCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==