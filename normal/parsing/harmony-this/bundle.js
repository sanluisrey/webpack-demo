/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/*!*************************************!*\
  !*** ./parsing/harmony-this/new.js ***!
  \*************************************/
/*! namespace exports */
/*! export C [provided] [used in main] [could be renamed] */
/*! export default [provided] [used in main] [renamed to Z] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 5:0-23 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "C": () => (/* binding */ C)
/* harmony export */ });
function C() {
	this.ok = expect(this.pok);
}

C.prototype.pok = true;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (C);



/***/ }),
/* 1 */,
/* 2 */
/*!*************************************!*\
  !*** ./parsing/harmony-this/abc.js ***!
  \*************************************/
/*! namespace exports */
/*! export a [provided] [used in main] [could be renamed] */
/*! export b [provided] [used in main] [could be renamed] */
/*! export default [provided] [used in main] [renamed to Z] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ a),
/* harmony export */   "b": () => (/* binding */ b),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function returnThis() {
	if (typeof this === "undefined") return expect("undefined");
	return expect(this);
}

var a = returnThis;
var b = returnThis;



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (returnThis);


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
/*!***************************************!*\
  !*** ./parsing/harmony-this/index.js ***!
  \***************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 8:0-15:2 */
/* harmony import */ var _abc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abc */ 2);
/* harmony import */ var _new__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new */ 0);


;



function x() { throw new Error("should not be executed"); }
it("should have this = undefined on imported non-strict functions", function() {
	if(true) x
	;(0,_abc__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)().toBe("undefined")
	x
	;(0,_abc__WEBPACK_IMPORTED_MODULE_0__.a)().toBe("undefined")
	x
	;(0,_abc__WEBPACK_IMPORTED_MODULE_0__.b)().toBe("undefined")
})

;



it("should be possible to use new correctly", function() {
	x
	new _new__WEBPACK_IMPORTED_MODULE_1__.C().ok.toEqual(true)
	x
	new _new__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z().ok.toEqual(true)
	x
	new _new__WEBPACK_IMPORTED_MODULE_1__.C().ok.toEqual(true)
})

})();

/******/ })()
;