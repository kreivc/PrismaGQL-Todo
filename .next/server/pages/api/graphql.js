"use strict";
(() => {
var exports = {};
exports.id = "pages/api/graphql";
exports.ids = ["pages/api/graphql"];
exports.modules = {

/***/ "./pages/api/graphql.js":
/*!******************************!*\
  !*** ./pages/api/graphql.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-micro */ "apollo-server-micro");
/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_1__);


const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_1__.PrismaClient();
const typeDefs = apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__.gql`
	type BlogPost {
		id: String
		text: String
	}

	type Query {
		blogPosts: [BlogPost]
	}

	type Mutation {
		addBlogPost(text: String): BlogPost
		editBlogPost(id: String, text: String): BlogPost
		deleteBlogPost(id: String): BlogPost
	}
`;
const resolvers = {
  Query: {
    blogPosts: (_parent, _args, _context) => {
      return prisma.blogPost.findMany();
    }
  },
  Mutation: {
    addBlogPost: (_parent, {
      text
    }, _context) => {
      return prisma.blogPost.create({
        data: {
          text
        }
      });
    },
    editBlogPost: (_parent, {
      id,
      text
    }, _context) => {
      return prisma.blogPost.update({
        where: {
          id
        },
        data: {
          text
        }
      });
    },
    deleteBlogPost: (_parent, {
      id
    }, _context) => {
      return prisma.blogPost.delete({
        where: {
          id
        }
      });
    }
  }
};
const apolloServer = new apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__.ApolloServer({
  typeDefs,
  resolvers
});
const handler = apolloServer.createHandler({
  path: "/api/graphql"
});
const config = {
  api: {
    bodyParser: false
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "apollo-server-micro":
/*!**************************************!*\
  !*** external "apollo-server-micro" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("apollo-server-micro");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/graphql.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL2dyYXBocWwuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxNQUFNRyxNQUFNLEdBQUcsSUFBSUQsd0RBQUosRUFBZjtBQUVBLE1BQU1FLFFBQVEsR0FBR0osb0RBQUk7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBZkE7QUFpQkEsTUFBTUssU0FBUyxHQUFHO0FBQ2pCQyxFQUFBQSxLQUFLLEVBQUU7QUFDTkMsSUFBQUEsU0FBUyxFQUFFLENBQUNDLE9BQUQsRUFBVUMsS0FBVixFQUFpQkMsUUFBakIsS0FBOEI7QUFDeEMsYUFBT1AsTUFBTSxDQUFDUSxRQUFQLENBQWdCQyxRQUFoQixFQUFQO0FBQ0E7QUFISyxHQURVO0FBT2pCQyxFQUFBQSxRQUFRLEVBQUU7QUFDVEMsSUFBQUEsV0FBVyxFQUFFLENBQUNOLE9BQUQsRUFBVTtBQUFFTyxNQUFBQTtBQUFGLEtBQVYsRUFBb0JMLFFBQXBCLEtBQWlDO0FBQzdDLGFBQU9QLE1BQU0sQ0FBQ1EsUUFBUCxDQUFnQkssTUFBaEIsQ0FBdUI7QUFBRUMsUUFBQUEsSUFBSSxFQUFFO0FBQUVGLFVBQUFBO0FBQUY7QUFBUixPQUF2QixDQUFQO0FBQ0EsS0FIUTtBQUlURyxJQUFBQSxZQUFZLEVBQUUsQ0FBQ1YsT0FBRCxFQUFVO0FBQUVXLE1BQUFBLEVBQUY7QUFBTUosTUFBQUE7QUFBTixLQUFWLEVBQXdCTCxRQUF4QixLQUFxQztBQUNsRCxhQUFPUCxNQUFNLENBQUNRLFFBQVAsQ0FBZ0JTLE1BQWhCLENBQXVCO0FBQUVDLFFBQUFBLEtBQUssRUFBRTtBQUFFRixVQUFBQTtBQUFGLFNBQVQ7QUFBaUJGLFFBQUFBLElBQUksRUFBRTtBQUFFRixVQUFBQTtBQUFGO0FBQXZCLE9BQXZCLENBQVA7QUFDQSxLQU5RO0FBT1RPLElBQUFBLGNBQWMsRUFBRSxDQUFDZCxPQUFELEVBQVU7QUFBRVcsTUFBQUE7QUFBRixLQUFWLEVBQWtCVCxRQUFsQixLQUErQjtBQUM5QyxhQUFPUCxNQUFNLENBQUNRLFFBQVAsQ0FBZ0JZLE1BQWhCLENBQXVCO0FBQUVGLFFBQUFBLEtBQUssRUFBRTtBQUFFRixVQUFBQTtBQUFGO0FBQVQsT0FBdkIsQ0FBUDtBQUNBO0FBVFE7QUFQTyxDQUFsQjtBQW9CQSxNQUFNSyxZQUFZLEdBQUcsSUFBSXZCLDZEQUFKLENBQWlCO0FBQUVHLEVBQUFBLFFBQUY7QUFBWUMsRUFBQUE7QUFBWixDQUFqQixDQUFyQjtBQUVBLE1BQU1vQixPQUFPLEdBQUdELFlBQVksQ0FBQ0UsYUFBYixDQUEyQjtBQUFFQyxFQUFBQSxJQUFJLEVBQUU7QUFBUixDQUEzQixDQUFoQjtBQUVPLE1BQU1DLE1BQU0sR0FBRztBQUFFQyxFQUFBQSxHQUFHLEVBQUU7QUFBRUMsSUFBQUEsVUFBVSxFQUFFO0FBQWQ7QUFBUCxDQUFmO0FBRVAsaUVBQWVMLE9BQWY7Ozs7Ozs7Ozs7QUNoREE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3ByaXNtYS1ncWwtYmxvZy8uL3BhZ2VzL2FwaS9ncmFwaHFsLmpzIiwid2VicGFjazovL3ByaXNtYS1ncWwtYmxvZy9leHRlcm5hbCBcIkBwcmlzbWEvY2xpZW50XCIiLCJ3ZWJwYWNrOi8vcHJpc21hLWdxbC1ibG9nL2V4dGVybmFsIFwiYXBvbGxvLXNlcnZlci1taWNyb1wiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCwgQXBvbGxvU2VydmVyIH0gZnJvbSBcImFwb2xsby1zZXJ2ZXItbWljcm9cIjtcclxuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XHJcblxyXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XHJcblxyXG5jb25zdCB0eXBlRGVmcyA9IGdxbGBcclxuXHR0eXBlIEJsb2dQb3N0IHtcclxuXHRcdGlkOiBTdHJpbmdcclxuXHRcdHRleHQ6IFN0cmluZ1xyXG5cdH1cclxuXHJcblx0dHlwZSBRdWVyeSB7XHJcblx0XHRibG9nUG9zdHM6IFtCbG9nUG9zdF1cclxuXHR9XHJcblxyXG5cdHR5cGUgTXV0YXRpb24ge1xyXG5cdFx0YWRkQmxvZ1Bvc3QodGV4dDogU3RyaW5nKTogQmxvZ1Bvc3RcclxuXHRcdGVkaXRCbG9nUG9zdChpZDogU3RyaW5nLCB0ZXh0OiBTdHJpbmcpOiBCbG9nUG9zdFxyXG5cdFx0ZGVsZXRlQmxvZ1Bvc3QoaWQ6IFN0cmluZyk6IEJsb2dQb3N0XHJcblx0fVxyXG5gO1xyXG5cclxuY29uc3QgcmVzb2x2ZXJzID0ge1xyXG5cdFF1ZXJ5OiB7XHJcblx0XHRibG9nUG9zdHM6IChfcGFyZW50LCBfYXJncywgX2NvbnRleHQpID0+IHtcclxuXHRcdFx0cmV0dXJuIHByaXNtYS5ibG9nUG9zdC5maW5kTWFueSgpO1xyXG5cdFx0fSxcclxuXHR9LFxyXG5cclxuXHRNdXRhdGlvbjoge1xyXG5cdFx0YWRkQmxvZ1Bvc3Q6IChfcGFyZW50LCB7IHRleHQgfSwgX2NvbnRleHQpID0+IHtcclxuXHRcdFx0cmV0dXJuIHByaXNtYS5ibG9nUG9zdC5jcmVhdGUoeyBkYXRhOiB7IHRleHQgfSB9KTtcclxuXHRcdH0sXHJcblx0XHRlZGl0QmxvZ1Bvc3Q6IChfcGFyZW50LCB7IGlkLCB0ZXh0IH0sIF9jb250ZXh0KSA9PiB7XHJcblx0XHRcdHJldHVybiBwcmlzbWEuYmxvZ1Bvc3QudXBkYXRlKHsgd2hlcmU6IHsgaWQgfSwgZGF0YTogeyB0ZXh0IH0gfSk7XHJcblx0XHR9LFxyXG5cdFx0ZGVsZXRlQmxvZ1Bvc3Q6IChfcGFyZW50LCB7IGlkIH0sIF9jb250ZXh0KSA9PiB7XHJcblx0XHRcdHJldHVybiBwcmlzbWEuYmxvZ1Bvc3QuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuXHRcdH0sXHJcblx0fSxcclxufTtcclxuXHJcbmNvbnN0IGFwb2xsb1NlcnZlciA9IG5ldyBBcG9sbG9TZXJ2ZXIoeyB0eXBlRGVmcywgcmVzb2x2ZXJzIH0pO1xyXG5cclxuY29uc3QgaGFuZGxlciA9IGFwb2xsb1NlcnZlci5jcmVhdGVIYW5kbGVyKHsgcGF0aDogXCIvYXBpL2dyYXBocWxcIiB9KTtcclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7IGFwaTogeyBib2R5UGFyc2VyOiBmYWxzZSB9IH07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcHJpc21hL2NsaWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tc2VydmVyLW1pY3JvXCIpOyJdLCJuYW1lcyI6WyJncWwiLCJBcG9sbG9TZXJ2ZXIiLCJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJ0eXBlRGVmcyIsInJlc29sdmVycyIsIlF1ZXJ5IiwiYmxvZ1Bvc3RzIiwiX3BhcmVudCIsIl9hcmdzIiwiX2NvbnRleHQiLCJibG9nUG9zdCIsImZpbmRNYW55IiwiTXV0YXRpb24iLCJhZGRCbG9nUG9zdCIsInRleHQiLCJjcmVhdGUiLCJkYXRhIiwiZWRpdEJsb2dQb3N0IiwiaWQiLCJ1cGRhdGUiLCJ3aGVyZSIsImRlbGV0ZUJsb2dQb3N0IiwiZGVsZXRlIiwiYXBvbGxvU2VydmVyIiwiaGFuZGxlciIsImNyZWF0ZUhhbmRsZXIiLCJwYXRoIiwiY29uZmlnIiwiYXBpIiwiYm9keVBhcnNlciJdLCJzb3VyY2VSb290IjoiIn0=