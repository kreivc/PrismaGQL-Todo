"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./graphql/queries.js":
/*!****************************!*\
  !*** ./graphql/queries.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GET_BLOGPOSTS": function() { return /* binding */ GET_BLOGPOSTS; },
/* harmony export */   "ADD_BLOGPOST": function() { return /* binding */ ADD_BLOGPOST; },
/* harmony export */   "DELETE_BLOGPOST": function() { return /* binding */ DELETE_BLOGPOST; },
/* harmony export */   "EDIT_BLOGPOST": function() { return /* binding */ EDIT_BLOGPOST; }
/* harmony export */ });
/* harmony import */ var C_Users_asus_Desktop_prisma_gql_todo_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _templateObject, _templateObject2, _templateObject3, _templateObject4;


var GET_BLOGPOSTS = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject || (_templateObject = (0,C_Users_asus_Desktop_prisma_gql_todo_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n\t{\n\t\tblogPosts {\n\t\t\tid\n\t\t\ttext\n\t\t}\n\t}\n"])));
var ADD_BLOGPOST = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject2 || (_templateObject2 = (0,C_Users_asus_Desktop_prisma_gql_todo_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n\tmutation AddBlogPost($text: String) {\n\t\taddBlogPost(text: $text) {\n\t\t\tid\n\t\t\ttext\n\t\t}\n\t}\n"])));
var DELETE_BLOGPOST = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject3 || (_templateObject3 = (0,C_Users_asus_Desktop_prisma_gql_todo_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n\tmutation DeleteBlogPost($id: String) {\n\t\tdeleteBlogPost(id: $id) {\n\t\t\tid\n\t\t\ttext\n\t\t}\n\t}\n"])));
var EDIT_BLOGPOST = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject4 || (_templateObject4 = (0,C_Users_asus_Desktop_prisma_gql_todo_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n\tmutation EditBlogPost($id: String, $text: String) {\n\t\teditBlogPost(id: $id, text: $text) {\n\t\t\tid\n\t\t\ttext\n\t\t}\n\t}\n"])));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTA4OWZhYzAyMDgzOGUxZWI1YjUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUMsYUFBYSxHQUFHRCxtREFBSCxxUUFBbkI7QUFTQSxJQUFNRSxZQUFZLEdBQUdGLG1EQUFILDBUQUFsQjtBQVNBLElBQU1HLGVBQWUsR0FBR0gsbURBQUgsMFRBQXJCO0FBU0EsSUFBTUksYUFBYSxHQUFHSixtREFBSCxrVkFBbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZ3JhcGhxbC9xdWVyaWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9CTE9HUE9TVFMgPSBncWxgXHJcblx0e1xyXG5cdFx0YmxvZ1Bvc3RzIHtcclxuXHRcdFx0aWRcclxuXHRcdFx0dGV4dFxyXG5cdFx0fVxyXG5cdH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQkxPR1BPU1QgPSBncWxgXHJcblx0bXV0YXRpb24gQWRkQmxvZ1Bvc3QoJHRleHQ6IFN0cmluZykge1xyXG5cdFx0YWRkQmxvZ1Bvc3QodGV4dDogJHRleHQpIHtcclxuXHRcdFx0aWRcclxuXHRcdFx0dGV4dFxyXG5cdFx0fVxyXG5cdH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBERUxFVEVfQkxPR1BPU1QgPSBncWxgXHJcblx0bXV0YXRpb24gRGVsZXRlQmxvZ1Bvc3QoJGlkOiBTdHJpbmcpIHtcclxuXHRcdGRlbGV0ZUJsb2dQb3N0KGlkOiAkaWQpIHtcclxuXHRcdFx0aWRcclxuXHRcdFx0dGV4dFxyXG5cdFx0fVxyXG5cdH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBFRElUX0JMT0dQT1NUID0gZ3FsYFxyXG5cdG11dGF0aW9uIEVkaXRCbG9nUG9zdCgkaWQ6IFN0cmluZywgJHRleHQ6IFN0cmluZykge1xyXG5cdFx0ZWRpdEJsb2dQb3N0KGlkOiAkaWQsIHRleHQ6ICR0ZXh0KSB7XHJcblx0XHRcdGlkXHJcblx0XHRcdHRleHRcclxuXHRcdH1cclxuXHR9XHJcbmA7XHJcbiJdLCJuYW1lcyI6WyJncWwiLCJHRVRfQkxPR1BPU1RTIiwiQUREX0JMT0dQT1NUIiwiREVMRVRFX0JMT0dQT1NUIiwiRURJVF9CTE9HUE9TVCJdLCJzb3VyY2VSb290IjoiIn0=