/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/*!***************************************************!*\
  !*** ./scope-hoisting/name-conflicts/module.js?( ***!
  \***************************************************/
/*! namespace exports */
/*! export default [provided] [used in main] [renamed to Z] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("a");


/***/ }),
/* 2 */
/*!***************************************************!*\
  !*** ./scope-hoisting/name-conflicts/module.js?) ***!
  \***************************************************/
/*! namespace exports */
/*! export default [provided] [used in main] [renamed to Z] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("a");


/***/ }),
/* 3 */
/*!***************************************************!*\
  !*** ./scope-hoisting/name-conflicts/module.js?[ ***!
  \***************************************************/
/*! namespace exports */
/*! export default [provided] [used in main] [renamed to Z] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("a");


/***/ }),
/* 4 */
/*!***************************************************!*\
  !*** ./scope-hoisting/name-conflicts/module.js?] ***!
  \***************************************************/
/*! namespace exports */
/*! export default [provided] [used in main] [renamed to Z] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("a");


/***/ }),
/* 5 */
/*!***************************************************!*\
  !*** ./scope-hoisting/name-conflicts/module.js?{ ***!
  \***************************************************/
/*! namespace exports */
/*! export default [provided] [used in main] [renamed to Z] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("a");


/***/ }),
/* 6 */
/*!***************************************************!*\
  !*** ./scope-hoisting/name-conflicts/module.js?} ***!
  \***************************************************/
/*! namespace exports */
/*! export default [provided] [used in main] [renamed to Z] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("a");


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
/*!************************************************!*\
  !*** ./scope-hoisting/name-conflicts/index.js ***!
  \************************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 8:0-15:3 */
/* harmony import */ var _module___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module?( */ 1);
/* harmony import */ var _module___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module?) */ 2);
/* harmony import */ var _module___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module?[ */ 3);
/* harmony import */ var _module___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module?] */ 4);
/* harmony import */ var _module___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./module?{ */ 5);
/* harmony import */ var _module___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./module?} */ 6);







it("should not break on name conflicts", function() {
	expect(_module___WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z).toBe("a");
	expect(_module___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z).toBe("a");
	expect(_module___WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z).toBe("a");
	expect(_module___WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z).toBe("a");
	expect(_module___WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z).toBe("a");
	expect(_module___WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z).toBe("a");
});

})();

/******/ })()
;