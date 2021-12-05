/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/*!***************************!*\
  !*** ./parsing/iife/a.js ***!
  \***************************/
/*! namespace exports */
/*! export a [provided] [used in main] [could be renamed] */
/*! export b [provided] [used in main] [could be renamed] */
/*! export c [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ a),
/* harmony export */   "b": () => (/* binding */ b),
/* harmony export */   "c": () => (/* binding */ c)
/* harmony export */ });
let a = 1e3;

function b() { a = 1e2 }
function c() { a = 1e1 }


/***/ }),
/* 1 */,
/* 2 */
/*!******************************************!*\
  !*** ./parsing/iife/side-effect-call.js ***!
  \******************************************/
/*! namespace exports */
/*! export track1 [provided] [used in main] [renamed to I] */
/*! export track2 [provided] [used in main] [renamed to v] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ track1),
/* harmony export */   "v": () => (/* binding */ track2)
/* harmony export */ });
/* harmony import */ var _a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a */ 0);


function track1() {
	(function (a = (0,_a__WEBPACK_IMPORTED_MODULE_0__.b)()) {})()
}

function track2() {
	((a = (0,_a__WEBPACK_IMPORTED_MODULE_0__.c)()) => {})()
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
/*!*******************************!*\
  !*** ./parsing/iife/index.js ***!
  \*******************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 4:0-10:3 */
/* harmony import */ var _a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a */ 0);
/* harmony import */ var _side_effect_call__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./side-effect-call */ 2);



it("should parse params", () => {
	expect(_a__WEBPACK_IMPORTED_MODULE_0__.a).toBe(1000);
	(0,_side_effect_call__WEBPACK_IMPORTED_MODULE_1__/* .track1 */ .I)();
	expect(_a__WEBPACK_IMPORTED_MODULE_0__.a).toBe(100);
	(0,_side_effect_call__WEBPACK_IMPORTED_MODULE_1__/* .track2 */ .v)();
	expect(_a__WEBPACK_IMPORTED_MODULE_0__.a).toBe(10);
});

})();

/******/ })()
;