/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/*!*************************************************!*\
  !*** ./cjs-tree-shaking/esm-to-cjs/module.js?1 ***!
  \*************************************************/
/*! default exports */
/*! export abc [provided] [used in main] [renamed to O] */
/*! export def [provided] [unused] [renamed to N] */
/*! runtime requirements: __webpack_exports__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-20 */
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;
exports.O = "abc";
__webpack_unused_export__ = "def";


/***/ }),
/* 2 */
/*!*************************************************!*\
  !*** ./cjs-tree-shaking/esm-to-cjs/module.js?2 ***!
  \*************************************************/
/*! default exports */
/*! export abc [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export def [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_exports__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-20 */
/***/ ((__unused_webpack_module, exports) => {

exports.abc = "abc";
exports.def = "def";


/***/ }),
/* 3 */
/*!*************************************************!*\
  !*** ./cjs-tree-shaking/esm-to-cjs/module.js?3 ***!
  \*************************************************/
/*! default exports */
/*! export abc [provided] [used in main] [renamed to O] */
/*! export def [provided] [unused] [renamed to N] */
/*! runtime requirements: __webpack_exports__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-20 */
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;
exports.O = "abc";
__webpack_unused_export__ = "def";


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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************************************!*\
  !*** ./cjs-tree-shaking/esm-to-cjs/index.js ***!
  \**********************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 5:0-9:3 */
/* harmony import */ var _module_1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module?1 */ 1);
/* harmony import */ var _module_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module?2 */ 2);
/* harmony import */ var _module_3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module?3 */ 3);




it("should allow to import cjs with esm", () => {
	expect(_module_1__WEBPACK_IMPORTED_MODULE_0__/* .abc */ .O).toBe("abc");
	expect(_module_2__WEBPACK_IMPORTED_MODULE_1__).toEqual({ abc: "abc", def: "def" });
	expect(_module_3__WEBPACK_IMPORTED_MODULE_2__/* .abc */ .O).toBe("abc");
});

})();

/******/ })()
;