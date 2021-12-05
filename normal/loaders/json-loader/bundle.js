/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/*!***************************************!*\
  !*** ./loaders/json-loader/some.json ***!
  \***************************************/
/*! default exports */
/*! export it [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export number [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"it":"works","number":42}');

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************************!*\
  !*** ./loaders/json-loader/index.js ***!
  \**************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-5:3 */
it("should be able to load JSON files without loader", function() {
	var someJson = __webpack_require__(/*! ./some.json */ 0);
	expect(someJson).toHaveProperty("it", "works");
	expect(someJson).toHaveProperty("number", 42);
});

it("should also work when the json extension is omitted", function() {
	var someJson = __webpack_require__(/*! ./some */ 0);
	expect(someJson).toHaveProperty("it", "works");
	expect(someJson).toHaveProperty("number", 42);
});

})();

/******/ })()
;