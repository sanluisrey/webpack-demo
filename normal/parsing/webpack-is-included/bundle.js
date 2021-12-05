/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/*!***************************************************!*\
  !*** ./parsing/webpack-is-included/moduleUsed.js ***!
  \***************************************************/
/*! namespace exports */
/*! export default [provided] [unused] [renamed to Z] */
/*! runtime requirements:  */
/*! Statement (ExpressionStatement) with side effects in source code at 2:0-19 */
/***/ (() => {

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (1);
console.log.bind();


/***/ }),
/* 1 */,
/* 2 */
/*!************************************************!*\
  !*** ./parsing/webpack-is-included/module1.js ***!
  \************************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__ */
/*! Dependency (harmony side effect evaluation) with side effects at 1:0-22 */
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _moduleUsed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moduleUsed */ 0);



/***/ }),
/* 3 */
/*!************************************************!*\
  !*** ./parsing/webpack-is-included/module2.js ***!
  \************************************************/
/*! namespace exports */
/*! export isWebpackIncludedFunction [provided] [used in main] [renamed to VP] */
/*! export notPresented [provided] [used in main] [renamed to $7] */
/*! export unused [provided] [used in main] [renamed to rI] */
/*! export used [provided] [used in main] [renamed to A5] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Statement (ExportNamedDeclaration) with side effects in source code at 1:0-87 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VP": () => (/* binding */ isWebpackIncludedFunction),
/* harmony export */   "rI": () => (/* binding */ unused),
/* harmony export */   "A5": () => (/* binding */ used),
/* harmony export */   "$7": () => (/* binding */ notPresented)
/* harmony export */ });
const isWebpackIncludedFunction = "function" === "function";
const unused = /*! __webpack_is_included__ ./moduleUnused */false;
const used = /*! __webpack_is_included__ ./moduleUsed */true;
const notPresented = /*! __webpack_is_included__ ./anyOtherModule */false;


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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************************************!*\
  !*** ./parsing/webpack-is-included/index.js ***!
  \**********************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 9:0-11:3 */
/* harmony import */ var _module1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module1 */ 2);
/* harmony import */ var _module2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module2 */ 3);



it("__webpack_is_included__ should be a function", () => {
	expect(_module2__WEBPACK_IMPORTED_MODULE_1__/* .isWebpackIncludedFunction */ .VP).toBe(true);
});

it("__webpack_is_included__ should be true for bundled modules, otherwise false", () => {
	expect(_module2__WEBPACK_IMPORTED_MODULE_1__/* .used */ .A5).toBe(true);
	expect(_module2__WEBPACK_IMPORTED_MODULE_1__/* .unused */ .rI).toBe(false);
});

it("__webpack_is_included__ should return false for missing module", () => {
	expect(_module2__WEBPACK_IMPORTED_MODULE_1__/* .notPresented */ .$7).toBe(false);
});

})();

/******/ })()
;