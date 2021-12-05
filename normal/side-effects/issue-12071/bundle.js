/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/*!********************************************!*\
  !*** ./side-effects/issue-12071/module.js ***!
  \********************************************/
/*! namespace exports */
/*! export value [provided] [used in main] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "value": () => (/* binding */ value)
/* harmony export */ });
const value = 42;


/***/ }),
/* 1 */
/*!**********************************************!*\
  !*** ./side-effects/issue-12071/reexport.js ***!
  \**********************************************/
/*! namespace exports */
/*! export own [provided] [used in main] [usage prevents renaming] */
/*! export value [provided] [used in main] [usage prevents renaming] -> ./side-effects/issue-12071/module.js .value */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "value": () => (/* reexport safe */ _module__WEBPACK_IMPORTED_MODULE_0__.value),
/* harmony export */   "own": () => (/* binding */ own)
/* harmony export */ });
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module */ 0);

const own = 42;


/***/ }),
/* 2 */,
/* 3 */
/*!***********************************************!*\
  !*** ./side-effects/issue-12071/reexport2.js ***!
  \***********************************************/
/*! namespace exports */
/*! export own [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./side-effects/issue-12071/reexport.js .own */
/*! export value [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./side-effects/issue-12071/module.js .value */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 3:0-7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "own": () => (/* reexport safe */ _reexport__WEBPACK_IMPORTED_MODULE_0__.own),
/* harmony export */   "value": () => (/* reexport safe */ _reexport__WEBPACK_IMPORTED_MODULE_0__.value)
/* harmony export */ });
/* harmony import */ var _reexport2_concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reexport2-concat */ 4);
/* harmony import */ var _reexport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reexport */ 1);


(0,_reexport2_concat__WEBPACK_IMPORTED_MODULE_1__/* .test */ .B)();


/***/ }),
/* 4 */
/*!******************************************************!*\
  !*** ./side-effects/issue-12071/reexport2-concat.js ***!
  \******************************************************/
/*! namespace exports */
/*! export test [provided] [used in main] [renamed to B] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ test)
/* harmony export */ });
const test = () => {};


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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************************!*\
  !*** ./side-effects/issue-12071/index.js ***!
  \*******************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-20 */
/* harmony import */ var _reexport2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reexport2 */ 0);
__webpack_require__(/*! ./module */ 0);
__webpack_require__(/*! ./reexport */ 1);


const { value: value2, own } = __webpack_require__(/*! ./reexport2 */ 3);

it("should not crash", () => {
	expect(_reexport2__WEBPACK_IMPORTED_MODULE_0__.value).toBe(42);
	expect(value2).toBe(42);
	expect(own).toBe(42);
});

})();

/******/ })()
;