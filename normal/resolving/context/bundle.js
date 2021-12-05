/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/*!*************************************************************************************************************!*\
  !*** ./resolving/context/loaders/queryloader.js?query!./resolving/context/node_modules/subcontent/index.js ***!
  \*************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-91 */
/***/ ((module) => {

module.exports = {"resourceQuery":"","query":"?query","prev":"module.exports = \"error\";"}

/***/ }),
/* 1 */
/*!*************************************************************************************************************!*\
  !*** ./resolving/context/loaders/queryloader.js?query!./resolving/context/node_modules/subcontent/test.pug ***!
  \*************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-72 */
/***/ ((module) => {

module.exports = {"resourceQuery":"","query":"?query","prev":"xyz: abc"}

/***/ }),
/* 2 */,
/* 3 */
/*!************************************************************************************************************************!*\
  !*** ./resolving/context/node_modules/subcontent/ sync ./resolving/context/loaders/queryloader.js?query! ^\.\/.*\.js$ ***!
  \************************************************************************************************************************/
/*! default exports */
/*! exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module, __webpack_require__.o, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./index.js": 0
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
webpackContext.id = 3;

/***/ }),
/* 4 */
/*!**************************************************************************************************************************!*\
  !*** ./resolving/context/node_modules/subcontent/ sync !./resolving/context/loaders/queryloader.js?query! ^\.\/.*\.pug$ ***!
  \**************************************************************************************************************************/
/*! default exports */
/*! exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module, __webpack_require__.o, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./test.pug": 1
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
webpackContext.id = 4;

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
/*!************************************!*\
  !*** ./resolving/context/index.js ***!
  \************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-13:3 */
it("should resolve loaders relative to require", function() {
	var index = "index", test = "test";
	expect(__webpack_require__(3)("./" + index + ".js")).toEqual({
		resourceQuery: "",
		query: "?query",
		prev: "module.exports = \"error\";"
	});
	expect(__webpack_require__(4)("./" + test + ".pug")).toEqual({
		resourceQuery: "",
		query: "?query",
		prev: "xyz: abc"
	});
});

})();

/******/ })()
;