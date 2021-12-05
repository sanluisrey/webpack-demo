/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/*!*****************************************!*\
  !*** ./inner-graph/circular2/module.js ***!
  \*****************************************/
/*! namespace exports */
/*! export a [provided] [used in main] [could be renamed] */
/*! export f3 [provided] [used in main] [could be renamed] */
/*! export x [provided] [used in main] [could be renamed] */
/*! export y [provided] [used in main] [could be renamed] */
/*! export z [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ x),
/* harmony export */   "y": () => (/* binding */ y),
/* harmony export */   "z": () => (/* binding */ z),
/* harmony export */   "a": () => (/* binding */ a),
/* harmony export */   "f3": () => (/* binding */ f3)
/* harmony export */ });
function x() {
	return [y, z];
}

function y() {
	return [x, z];
}

function z() {
	return [x, y];
}



function a() {
	return [a, b, c, d];
}

function b() {
	return [a, b, c, d];
}

function c() {
	return [a, b, c, d];
}

function d() {
	return [a, b, c, d];
}



function f1() {
	return [f2, f4];
}

function f2() {
	return [f1, f3];
}

function f3() {
	return [f2, f4];
}

function f4() {
	return [f1, f3];
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
/*!****************************************!*\
  !*** ./inner-graph/circular2/index.js ***!
  \****************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 3:0-14:3 */
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module */ 1);


it("should be able to handle circular referenced", () => {
	expect((0,_module__WEBPACK_IMPORTED_MODULE_0__.x)()).toEqual([_module__WEBPACK_IMPORTED_MODULE_0__.y, _module__WEBPACK_IMPORTED_MODULE_0__.z]);
	const [_a, b, c, d] = (0,_module__WEBPACK_IMPORTED_MODULE_0__.a)();
	expect(b()).toEqual([_module__WEBPACK_IMPORTED_MODULE_0__.a, b, c, d]);
	expect(c()).toEqual([_module__WEBPACK_IMPORTED_MODULE_0__.a, b, c, d]);
	expect(d()).toEqual([_module__WEBPACK_IMPORTED_MODULE_0__.a, b, c, d]);
	const [f2, f4] = (0,_module__WEBPACK_IMPORTED_MODULE_0__.f3)();
	const [f1, _f3] = f2();
	expect(_f3).toBe(_module__WEBPACK_IMPORTED_MODULE_0__.f3);
	expect((0,_module__WEBPACK_IMPORTED_MODULE_0__.f3)()).toEqual(f1());
	expect(f2()).toEqual(f4());
});

})();

/******/ })()
;