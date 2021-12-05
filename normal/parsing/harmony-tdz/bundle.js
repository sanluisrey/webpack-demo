/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/*!***************************************!*\
  !*** ./parsing/harmony-tdz/module.js ***!
  \***************************************/
/*! namespace exports */
/*! export default [provided] [used in main] [renamed to ZP] */
/*! export exception [provided] [used in main] [renamed to w1] */
/*! export value [provided] [used in main] [renamed to S3] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Statement (TryStatement) with side effects in source code at 5:0-9:1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w1": () => (/* binding */ exception),
/* harmony export */   "S3": () => (/* binding */ value),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _module2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module2 */ 2);


let exception;

try {
	(0,_module2__WEBPACK_IMPORTED_MODULE_0__.f)();
} catch(e) {
	exception = e;
}

const value = "value";

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_module2__WEBPACK_IMPORTED_MODULE_0__.f)());


/***/ }),
/* 1 */,
/* 2 */
/*!****************************************!*\
  !*** ./parsing/harmony-tdz/module2.js ***!
  \****************************************/
/*! namespace exports */
/*! export f [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Dependency (harmony side effect evaluation) with side effects at 1:0-33 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ f)
/* harmony export */ });
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module */ 0);


function f() {
	return _module__WEBPACK_IMPORTED_MODULE_0__/* .value */ .S3;
}


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
/*!**************************************!*\
  !*** ./parsing/harmony-tdz/index.js ***!
  \**************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 3:0-10:3 */
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module */ 0);


it("should have a TDZ for exported const values", () => {
	expect(typeof _module__WEBPACK_IMPORTED_MODULE_0__/* .exception */ .w1).toBe("object");
	expect(_module__WEBPACK_IMPORTED_MODULE_0__/* .exception */ .w1).toBeInstanceOf(Error);
	expect(_module__WEBPACK_IMPORTED_MODULE_0__/* .exception.message */ .w1.message).toMatch(
		/ is not defined$|^Cannot access '.+?' before initialization$/
	);
	expect(_module__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP).toBe("value");
});

})();

/******/ })()
;