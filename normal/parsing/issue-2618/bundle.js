/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/*!**************************************!*\
  !*** ./parsing/issue-2618/module.js ***!
  \**************************************/
/*! namespace exports */
/*! export default [provided] [used in main] [renamed to ZP] */
/*! export value [provided] [used in main] [renamed to S3] */
/*! export value2 [provided] [used in main] [renamed to R2] */
/*! export value3 [provided] [unused] [renamed to HZ] -> ./parsing/issue-2618/module2.js .value3 */
/*! export value4 [provided] [unused] [renamed to Je] -> ./parsing/issue-2618/module2.js .value3 */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S3": () => (/* binding */ value),
/* harmony export */   "R2": () => (/* binding */ value2),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Object = 123;

const value = Object;
var value2 = Object;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object);




/***/ }),
/* 2 */
/*!***************************************!*\
  !*** ./parsing/issue-2618/module2.js ***!
  \***************************************/
/*! namespace exports */
/*! export value3 [provided] [used in main] [renamed to H] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ value3)
/* harmony export */ });
var value3 = 123;


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
/*!*************************************!*\
  !*** ./parsing/issue-2618/index.js ***!
  \*************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 3:0-9:3 */
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module */ 1);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module */ 2);


it("should be possible to redefine Object in a module", function() {
	expect(_module__WEBPACK_IMPORTED_MODULE_0__/* .value */ .S3).toBe(123);
	expect(_module__WEBPACK_IMPORTED_MODULE_0__/* .value2 */ .R2).toBe(123);
	expect(_module__WEBPACK_IMPORTED_MODULE_1__/* .value3 */ .H).toBe(123);
	expect(_module__WEBPACK_IMPORTED_MODULE_1__/* .value3 */ .H).toBe(123);
	expect(_module__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP).toBe(123);
});

})();

/******/ })()
;