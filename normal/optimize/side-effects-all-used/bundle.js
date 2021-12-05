/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/*!**************************************************!*\
  !*** ./optimize/node_modules/pmodule/tracker.js ***!
  \**************************************************/
/*! namespace exports */
/*! export log [provided] [used in main] [renamed to cM] */
/*! export reset [provided] [unused] [renamed to mc] */
/*! export track [provided] [used in main] [renamed to j] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ track),
/* harmony export */   "cM": () => (/* binding */ log)
/* harmony export */ });
/* unused harmony export reset */
function track(file) {
	log.push(file);
	log.sort();
}

var log = [];

function reset() {
	log.length = 0;
}


/***/ }),
/* 1 */,
/* 2 */
/*!************************************************!*\
  !*** ./optimize/node_modules/pmodule/index.js ***!
  \************************************************/
/*! namespace exports */
/*! export a [provided] [unused] [could be renamed] -> ./optimize/node_modules/pmodule/a.js .a */
/*! export b [provided] [unused] [could be renamed] -> ./optimize/node_modules/pmodule/a.js .b */
/*! export c [provided] [unused] [could be renamed] -> ./optimize/node_modules/pmodule/a.js .c */
/*! export default [provided] [used in main] [renamed to Z] */
/*! export x [provided] [unused] [could be renamed] -> ./optimize/node_modules/pmodule/b.js .x */
/*! export y [provided] [unused] [could be renamed] -> ./optimize/node_modules/pmodule/b.js .y */
/*! export z [provided] [unused] [could be renamed] -> ./optimize/node_modules/pmodule/c.js .z */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 5:0-18 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tracker */ 0);




(0,_tracker__WEBPACK_IMPORTED_MODULE_0__/* .track */ .j)("index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("def");


/***/ }),
/* 3 */
/*!********************************************!*\
  !*** ./optimize/node_modules/pmodule/a.js ***!
  \********************************************/
/*! namespace exports */
/*! export a [provided] [used in main] [could be renamed] */
/*! export b [provided] [unused] [could be renamed] */
/*! export c [provided] [unused] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 8:0-14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ a)
/* harmony export */ });
/* unused harmony exports b, c */
/* harmony import */ var _tracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tracker */ 0);
var a = "a";
var b = "b";
var c = "c";




(0,_tracker__WEBPACK_IMPORTED_MODULE_0__/* .track */ .j)("a.js");


/***/ }),
/* 4 */
/*!********************************************!*\
  !*** ./optimize/node_modules/pmodule/b.js ***!
  \********************************************/
/*! namespace exports */
/*! export x [provided] [used in main] [could be renamed] */
/*! export y [provided] [unused] [could be renamed] */
/*! export z [provided] [unused] [could be renamed] -> ./optimize/node_modules/pmodule/c.js .z */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 8:0-14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ x)
/* harmony export */ });
/* unused harmony export y */
/* harmony import */ var _tracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tracker */ 0);
var x = "x";
var y = "y";





(0,_tracker__WEBPACK_IMPORTED_MODULE_0__/* .track */ .j)("b.js");


/***/ }),
/* 5 */
/*!********************************************!*\
  !*** ./optimize/node_modules/pmodule/c.js ***!
  \********************************************/
/*! namespace exports */
/*! export z [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 6:0-14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ z)
/* harmony export */ });
/* harmony import */ var _tracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tracker */ 0);
var z = "z";




(0,_tracker__WEBPACK_IMPORTED_MODULE_0__/* .track */ .j)("c.js");


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
/*!*************************************************!*\
  !*** ./optimize/side-effects-all-used/index.js ***!
  \*************************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 5:0-11:3 */
/* harmony import */ var pmodule_tracker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pmodule/tracker */ 0);
/* harmony import */ var pmodule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pmodule */ 3);
/* harmony import */ var pmodule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pmodule */ 4);
/* harmony import */ var pmodule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pmodule */ 5);
/* harmony import */ var pmodule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pmodule */ 2);




it("should evaluate all modules", function() {
	expect(pmodule__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z).toBe("def");
	expect(pmodule__WEBPACK_IMPORTED_MODULE_1__.a).toBe("a");
	expect(pmodule__WEBPACK_IMPORTED_MODULE_2__.x).toBe("x");
	expect(pmodule__WEBPACK_IMPORTED_MODULE_3__.z).toBe("z");
	expect(pmodule_tracker__WEBPACK_IMPORTED_MODULE_4__/* .log */ .cM).toEqual(["a.js", "b.js", "c.js", "index.js"]);
});

})();

/******/ })()
;