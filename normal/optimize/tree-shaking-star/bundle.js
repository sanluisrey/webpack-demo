/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/*!*****************************************!*\
  !*** ./optimize/tree-shaking-star/d.js ***!
  \*****************************************/
/*! namespace exports */
/*! export test [provided] [used in main] [renamed to B] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ test)
/* harmony export */ });
var test = 123;

/***/ }),
/* 2 */
/*!******************************************!*\
  !*** ./optimize/tree-shaking-star/x1.js ***!
  \******************************************/
/*! namespace exports */
/*! export func1 [provided] [used in main] [renamed to w] */
/*! export func2 [provided] [unused] [renamed to I] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ func1)
/* harmony export */ });
/* unused harmony export func2 */
function func1() { return "func1"; }
function func2() { return "func2"; }


/***/ }),
/* 3 */
/*!******************************************!*\
  !*** ./optimize/tree-shaking-star/x2.js ***!
  \******************************************/
/*! namespace exports */
/*! export func3 [provided] [used in main] [renamed to s] */
/*! export func4 [provided] [unused] [renamed to Q] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ func3)
/* harmony export */ });
/* unused harmony export func4 */
function func3() { return "func3"; }
function func4() { return "func4"; }


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
  !*** ./optimize/tree-shaking-star/index.js ***!
  \*********************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 4:0-8:3 */
/* harmony import */ var _a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a */ 1);
/* harmony import */ var _x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./x */ 2);
/* harmony import */ var _x__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./x */ 3);



it("should correctly tree shake star exports", function() {
	expect(_a__WEBPACK_IMPORTED_MODULE_0__/* .test */ .B).toBe(123);
	expect((0,_x__WEBPACK_IMPORTED_MODULE_1__/* .func1 */ .w)()).toBe("func1");
	expect((0,_x__WEBPACK_IMPORTED_MODULE_2__/* .func3 */ .s)()).toBe("func3");
});

})();

/******/ })()
;