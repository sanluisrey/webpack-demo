/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/*!*********************************!*\
  !*** ./parsing/issue-7519/a.js ***!
  \*********************************/
/*! namespace exports */
/*! export count [provided] [used in main] [renamed to QX] */
/*! export inc [provided] [used in main] [renamed to aE] */
/*! export incTruthy [provided] [used in main] [renamed to EX] */
/*! export mult [provided] [unused] [renamed to BV] */
/*! export multUsed [provided] [used in main] [renamed to Fb] */
/*! export setCount [provided] [used in main] [renamed to kM] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Statement (ExportNamedDeclaration) with side effects in source code at 20:0-59 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QX": () => (/* binding */ count),
/* harmony export */   "aE": () => (/* binding */ inc),
/* harmony export */   "EX": () => (/* binding */ incTruthy),
/* harmony export */   "kM": () => (/* binding */ setCount),
/* harmony export */   "Fb": () => (/* binding */ multUsed)
/* harmony export */ });
/* unused harmony export mult */
let count = 1;

function inc() {
	count++;
}

function incTruthy() {
	count++;
	return true;
}

function mult(n) {
	count *= n;
}

function setCount(c) {
	count = c;
}

const multUsed = false;


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
  !*** ./parsing/issue-7519/index.js ***!
  \*************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 11:0-22:3 */
/* harmony import */ var _a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a */ 1);


it("logical 'and' should work", () => {
	(0,_a__WEBPACK_IMPORTED_MODULE_0__/* .setCount */ .kM)(1);
	(0,_a__WEBPACK_IMPORTED_MODULE_0__/* .inc */ .aE)() && "true" && 0 && 0;
	expect(_a__WEBPACK_IMPORTED_MODULE_0__/* .count */ .QX).toBe(2);
	(0,_a__WEBPACK_IMPORTED_MODULE_0__/* .inc */ .aE)() && false && 0;
	expect(_a__WEBPACK_IMPORTED_MODULE_0__/* .count */ .QX).toBe(3);
	 true && (0,_a__WEBPACK_IMPORTED_MODULE_0__/* .inc */ .aE)() && (0,_a__WEBPACK_IMPORTED_MODULE_0__/* .inc */ .aE)() && false && 0;
	/* inc itself returns undefined */
	expect(_a__WEBPACK_IMPORTED_MODULE_0__/* .count */ .QX).toBe(4);
	 true && (0,_a__WEBPACK_IMPORTED_MODULE_0__/* .incTruthy */ .EX)() && (0,_a__WEBPACK_IMPORTED_MODULE_0__/* .incTruthy */ .EX)() && false && 0;
	expect(_a__WEBPACK_IMPORTED_MODULE_0__/* .count */ .QX).toBe(6);
});

it("logical 'or' should work", () => {
	(0,_a__WEBPACK_IMPORTED_MODULE_0__/* .setCount */ .kM)(1);
	 false || (0,_a__WEBPACK_IMPORTED_MODULE_0__/* .inc */ .aE)();
	expect(_a__WEBPACK_IMPORTED_MODULE_0__/* .count */ .QX).toBe(2);
	( false || (0,_a__WEBPACK_IMPORTED_MODULE_0__/* .inc */ .aE)() || (0,_a__WEBPACK_IMPORTED_MODULE_0__/* .inc */ .aE)()) && false && 0;
	expect(_a__WEBPACK_IMPORTED_MODULE_0__/* .count */ .QX).toBe(4);
});

it("mult should not be used", () => {
	if ((0,_a__WEBPACK_IMPORTED_MODULE_0__/* .inc */ .aE)() && true && false) {}

	expect(_a__WEBPACK_IMPORTED_MODULE_0__/* .multUsed */ .Fb).toBe(false);
});

})();

/******/ })()
;