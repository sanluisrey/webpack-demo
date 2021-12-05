/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/*!*****************************************!*\
  !*** ./parsing/harmony-edge-cases/a.js ***!
  \*****************************************/
/*! namespace exports */
/*! export a [provided] [used in main] [could be renamed] */
/*! export default [provided] [unused] [renamed to Z] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Statement (VariableDeclaration) with side effects in source code at 3:0-15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ a)
/* harmony export */ });
/* unused harmony export default */
function test() { return "ok"; }

var a = test();



/***/ }),
/* 2 */
/*!*****************************************!*\
  !*** ./parsing/harmony-edge-cases/b.js ***!
  \*****************************************/
/*! namespace exports */
/*! export b [provided] [used in main] [could be renamed] */
/*! export default [provided] [used in main] [renamed to Z] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Statement (VariableDeclaration) with side effects in source code at 3:0-15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ test),
/* harmony export */   "b": () => (/* binding */ b)
/* harmony export */ });
function test() { return "ok"; }

var b = test();



/***/ }),
/* 3 */
/*!*****************************************!*\
  !*** ./parsing/harmony-edge-cases/c.js ***!
  \*****************************************/
/*! namespace exports */
/*! export c [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ c)
/* harmony export */ });
var c = "ok";

/***/ }),
/* 4 */
/*!*****************************************!*\
  !*** ./parsing/harmony-edge-cases/d.js ***!
  \*****************************************/
/*! namespace exports */
/*! export default [provided] [used in main] [renamed to Z] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ok");


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
/*!*********************************************!*\
  !*** ./parsing/harmony-edge-cases/index.js ***!
  \*********************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 5:0-11:3 */
/* harmony import */ var _a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a */ 1);
/* harmony import */ var _b__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./b */ 2);
/* harmony import */ var _fake_reexport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fake-reexport */ 3);
/* harmony import */ var _fake_reexport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fake-reexport */ 4);




it("should be able to use exported function", function() {
	expect(_a__WEBPACK_IMPORTED_MODULE_0__.a).toBe("ok");
	expect(_b__WEBPACK_IMPORTED_MODULE_1__.b).toBe("ok");
	expect((0,_b__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)()).toBe("ok");
	expect(_fake_reexport__WEBPACK_IMPORTED_MODULE_2__.c).toBe("ok");
	expect(_fake_reexport__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z).toBe("ok");
});

})();

/******/ })()
;