/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/*!***********************************************************************************************!*\
  !*** ./loaders/query/loaders/queryloader.js?query!./loaders/query/context-query-test/test.js ***!
  \***********************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-76 */
/***/ ((module) => {

module.exports = {"resourceQuery":"","query":"?query","prev":"test content"}

/***/ }),
/* 1 */
/*!***************************************************************************************!*\
  !*** ./loaders/query/loaders/queryloader.js?query!./loaders/query/a.js?resourcequery ***!
  \***************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-101 */
/***/ ((module) => {

module.exports = {"resourceQuery":"?resourcequery","query":"?query","prev":"module.exports = \"a\";"}

/***/ }),
/* 2 */
/*!*******************************************************************!*\
  !*** ./loaders/query/loaders/queryloader.js?query!?resourcequery ***!
  \*******************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-80 */
/***/ ((module) => {

module.exports = {"resourceQuery":"?resourcequery","query":"?query","prev":null}

/***/ }),
/* 3 */
/*!*****************************************************!*\
  !*** ./loaders/query/loaders/queryloader.js?query! ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-47 */
/***/ ((module) => {

module.exports = {"query":"?query","prev":null}

/***/ }),
/* 4 */
/*!**************************************************************************************************************************************!*\
  !*** ./loaders/query/loaders/queryloader.js?query1!./loaders/query/loaders/queryloader.js?query2!./loaders/query/a.js?resourcequery ***!
  \**************************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-197 */
/***/ ((module) => {

module.exports = {"resourceQuery":"?resourcequery","query":"?query1","prev":"module.exports = {\"resourceQuery\":\"?resourcequery\",\"query\":\"?query2\",\"prev\":\"module.exports = \\\"a\\\";\"}"}

/***/ }),
/* 5 */,
/* 6 */
/*!*******************************************************************************************************!*\
  !*** ./loaders/query/context-query-test/ sync ./loaders/query/loaders/queryloader.js?query! ^\.\/.*$ ***!
  \*******************************************************************************************************/
/*! default exports */
/*! exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module, __webpack_require__.o, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./test": 0,
	"./test.js": 0
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 6;

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************!*\
  !*** ./loaders/query/index.js ***!
  \********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-8:3 */
it("should pass query to loader", function() {
	var result = __webpack_require__(/*! ./loaders/queryloader?query!./a?resourcequery */ 1);
	expect(result).toEqual({
		resourceQuery: "?resourcequery",
		query: "?query",
		prev: "module.exports = \"a\";"
	});
});

it("should pass query to loader without resource with resource query", function() {
	var result = __webpack_require__(/*! ./loaders/queryloader?query!?resourcequery */ 2);
	expect(result).toEqual({
		resourceQuery: "?resourcequery",
		query: "?query",
		prev: null
	});
});

it("should pass query to loader without resource", function() {
	var result = __webpack_require__(/*! ./loaders/queryloader?query! */ 3);
	expect(result).toEqual({
		query: "?query",
		prev: null
	});
});

it("should pass query to multiple loaders", function() {
	var result = __webpack_require__(/*! ./loaders/queryloader?query1!./loaders/queryloader?query2!./a?resourcequery */ 4);
	expect(result).toBeTypeOf("object");
	expect(result).toHaveProperty("resourceQuery", "?resourcequery");
	expect(result).toHaveProperty("query", "?query1");
	expect(result).toHaveProperty("prev", "module.exports = " + JSON.stringify({
		resourceQuery: "?resourcequery",
		query: "?query2",
		prev: "module.exports = \"a\";"
	}));
});

it("should pass query to loader over context", function() {
	var test = "test";
	var result = __webpack_require__(6)("./" + test);
	expect(result).toEqual({
		resourceQuery: "",
		query: "?query",
		prev: "test content"
	});
});

})();

/******/ })()
;