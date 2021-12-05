/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/*!************************************************!*\
  !*** ./parsing/harmony-export-precedence/a.js ***!
  \************************************************/
/*! namespace exports */
/*! export a [provided] [used in main] [could be renamed] */
/*! export b [provided] [unused] [could be renamed] -> ./parsing/harmony-export-precedence/b.js .b */
/*! export c [provided] [unused] [could be renamed] -> ./parsing/harmony-export-precedence/c.js .c */
/*! export d [provided] [unused] [could be renamed] -> ./parsing/harmony-export-precedence/b.js .d */
/*! export default [not provided] [used in main] [could be renamed] */
/*! export e [provided] [used in main] [could be renamed] */
/*! export f [provided] [unused] [could be renamed] -> ./parsing/harmony-export-precedence/c.js .f */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ a),
/* harmony export */   "e": () => (/* binding */ e)
/* harmony export */ });
function a() { return "a1"; }



var e = "e1";


/***/ }),
/* 2 */
/*!************************************************!*\
  !*** ./parsing/harmony-export-precedence/b.js ***!
  \************************************************/
/*! namespace exports */
/*! export a [provided] [unused] [could be renamed] */
/*! export b [provided] [used in main] [could be renamed] */
/*! export c [provided] [unused] [could be renamed] */
/*! export d [provided] [used in main] [could be renamed] */
/*! export e [provided] [unused] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ b),
/* harmony export */   "d": () => (/* binding */ d)
/* harmony export */ });
/* unused harmony exports a, c, e */
var a = "a2";
var b = "b2";
var c = "c2";
var d = "d2";
var e = "e2";


/***/ }),
/* 3 */
/*!************************************************!*\
  !*** ./parsing/harmony-export-precedence/c.js ***!
  \************************************************/
/*! namespace exports */
/*! export a [provided] [unused] [could be renamed] */
/*! export b [provided] [unused] [could be renamed] */
/*! export c [provided] [used in main] [could be renamed] */
/*! export default [provided] [unused] [renamed to Z] */
/*! export e [provided] [unused] [could be renamed] */
/*! export f [provided] [unused] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ c)
/* harmony export */ });
/* unused harmony exports a, b, e, f */
var a = "a3";
var b = "b3";
var c = "c3";
var e = "e3";
var f = "f3";
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ("default");


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
/*!****************************************************!*\
  !*** ./parsing/harmony-export-precedence/index.js ***!
  \****************************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 5:0-8:3 */
/* harmony import */ var _a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a */ 1);
/* harmony import */ var _a__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./a */ 2);
/* harmony import */ var _a__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./a */ 3);




it("should prefer local exports", function() {
	expect((0,_a__WEBPACK_IMPORTED_MODULE_0__.a)()).toBe("a1");
	expect(_a__WEBPACK_IMPORTED_MODULE_0__.e).toBe("e1");
});

it("should prefer indirect exports over star exports", function() {
	expect(_a__WEBPACK_IMPORTED_MODULE_1__.b).toBe("b2");
	expect(_a__WEBPACK_IMPORTED_MODULE_1__.d).toBe("d2");
});

it("should use star exports", function() {
	expect(_a__WEBPACK_IMPORTED_MODULE_2__.c).toBe("c3");
});

it("should not export default via star export", function() {
	expect((typeof _a__WEBPACK_IMPORTED_MODULE_0__["default"])).toBe("undefined");
});

})();

/******/ })()
;