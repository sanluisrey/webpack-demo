/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/*!*********************************************!*\
  !*** ./json/prototype-methods/array.json?2 ***!
  \*********************************************/
/*! default exports */
/*! export 0 [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export 1 [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export 2 [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export 3 [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export 4 [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = [1,1,2,3,5];

/***/ }),
/* 1 */
/*!*********************************************!*\
  !*** ./json/prototype-methods/array.json?3 ***!
  \*********************************************/
/*! default exports */
/*! export 0 [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export 1 [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export 2 [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export 3 [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export 4 [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = [1,1,2,3,5];

/***/ }),
/* 2 */,
/* 3 */
/*!*********************************************!*\
  !*** ./json/prototype-methods/array.json?1 ***!
  \*********************************************/
/*! default exports */
/*! export 0 [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export 1 [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export 2 [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export 3 [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export 4 [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = [1,1,2,3,5];

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
/*!*****************************************!*\
  !*** ./json/prototype-methods/index.js ***!
  \*****************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 4:0-20:3 */
/* harmony import */ var _array_json_1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array.json?1 */ 3);
/* harmony import */ var _array_json_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array.json?2 */ 0);



it("should allow to call prototype methods", () => {
	expect(_array_json_1__WEBPACK_IMPORTED_MODULE_0__.map(d => d * 2)).toEqual([2, 2, 4, 6, 10]);
	expect(_array_json_2__WEBPACK_IMPORTED_MODULE_1__.map(d => d * 2)).toEqual([2, 2, 4, 6, 10]);
	expect((__webpack_require__(/*! ./array.json?2 */ 0).map)(d => d * 2)).toEqual([2, 2, 4, 6, 10]);
	expect((__webpack_require__(/*! ./array.json?3 */ 1).map)(d => d * 2)).toEqual([2, 2, 4, 6, 10]);
	try {
		Object.prototype.smoosh = function () {
			return this.map(d => d + 1);
		};
		expect(_array_json_1__WEBPACK_IMPORTED_MODULE_0__.smoosh()).toEqual([2, 2, 3, 4, 6]);
		expect(_array_json_2__WEBPACK_IMPORTED_MODULE_1__.smoosh()).toEqual([2, 2, 3, 4, 6]);
		expect((__webpack_require__(/*! ./array.json?2 */ 0).smoosh)()).toEqual([2, 2, 3, 4, 6]);
		expect((__webpack_require__(/*! ./array.json?3 */ 1).smoosh)()).toEqual([2, 2, 3, 4, 6]);
	} finally {
		delete Object.prototype.smoosh;
	}
});

})();

/******/ })()
;