/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/*!***************************************************!*\
  !*** ./cjs-interop/non-existing-export/module.js ***!
  \***************************************************/
/*! default exports */
/*! export default [provided] [unused] [renamed to Z] */
/*! export named [not provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-28 */
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;
__webpack_unused_export__ = "default";


/***/ }),
/* 2 */
/*!*****************************************************!*\
  !*** ./cjs-interop/non-existing-export/esModule.js ***!
  \*****************************************************/
/*! flagged exports */
/*! export __esModule [provided] [unused] [renamed to X] */
/*! export default [provided] [unused] [renamed to Z] */
/*! export named [not provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-62 */
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;
__webpack_unused_export__ = ({ value: true });
__webpack_unused_export__ = "default";


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
/*!**************************************************!*\
  !*** ./cjs-interop/non-existing-export/index.js ***!
  \**************************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 4:0-7:3 */
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module */ 1);
/* harmony import */ var _esModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./esModule */ 2);



it("should emit errors", () => {
	expect(_module__WEBPACK_IMPORTED_MODULE_0__.named).toBe(undefined);
	expect(_esModule__WEBPACK_IMPORTED_MODULE_1__.named).toBe(undefined);
});

})();

/******/ })()
;