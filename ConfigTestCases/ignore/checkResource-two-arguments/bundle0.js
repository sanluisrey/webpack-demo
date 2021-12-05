/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 543:
/*!***********************************!*\
  !*** ./folder-a/normal-module.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./normal-module */ 543);


/***/ }),

/***/ 781:
/*!***********************************!*\
  !*** ./folder-b/normal-module.js ***!
  \***********************************/
/***/ ((module) => {

module.exports = Object(function webpackMissingModule() { var e = new Error("Cannot find module './ignored-module'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


/***/ }),

/***/ 765:
/*!************************************************!*\
  !*** ./folder-b/only-context-match-require.js ***!
  \************************************************/
/***/ ((module) => {

module.exports = "should be fine";


/***/ }),

/***/ 562:
/*!****************************************!*\
  !*** ./folder-b/only-context-match.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./only-context-match-require */ 765);


/***/ })

/******/ 	});
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*****************!*\
  !*** ./test.js ***!
  \*****************/
/* globals it */


it("should ignore resources that match resource regex and context", function() {
	expect(function() {
		__webpack_require__(/*! ./folder-b/normal-module */ 781);
	}).toThrowError();
});

it("should not ignore resources that match resource but not context", function() {
	expect(function() {
		__webpack_require__(/*! ./folder-a/normal-module */ 543);
	}).not.toThrowError();
});

it("should not ignore resources that do not match resource but do match context", function() {
	expect(function() {
		__webpack_require__(/*! ./folder-b/only-context-match */ 562);
	}).not.toThrowError();
});

})();

/******/ })()
;