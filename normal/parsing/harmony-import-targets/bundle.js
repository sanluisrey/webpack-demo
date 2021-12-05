/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/*!*********************************************!*\
  !*** ./parsing/harmony-import-targets/x.js ***!
  \*********************************************/
/*! namespace exports */
/*! export f [provided] [used in main] [could be renamed] */
/*! export x [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ x),
/* harmony export */   "f": () => (/* binding */ f)
/* harmony export */ });
var x = 1;
function f(x) {
	return x;
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
/*!*************************************************!*\
  !*** ./parsing/harmony-import-targets/index.js ***!
  \*************************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 3:0-7:3 */
/* harmony import */ var _x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./x */ 1);


it("should import into object literal", function() {
	(expect({ x: _x__WEBPACK_IMPORTED_MODULE_0__.x })).toEqual({x: 1});
	var obj = { x: _x__WEBPACK_IMPORTED_MODULE_0__.x };
	expect(obj).toEqual({x: 1});
});

function func(z) {
	return z;
}

it("should import into function argument", function() {
	expect(func(_x__WEBPACK_IMPORTED_MODULE_0__.x)).toBe(1);
	expect((0,_x__WEBPACK_IMPORTED_MODULE_0__.f)(_x__WEBPACK_IMPORTED_MODULE_0__.x)).toBe(1);
	expect(func({x:_x__WEBPACK_IMPORTED_MODULE_0__.x})).toEqual({x:1});
	expect((0,_x__WEBPACK_IMPORTED_MODULE_0__.f)({x:_x__WEBPACK_IMPORTED_MODULE_0__.x})).toEqual({x:1});
	var y = (0,_x__WEBPACK_IMPORTED_MODULE_0__.f)(_x__WEBPACK_IMPORTED_MODULE_0__.x);
	expect(y).toBe(1);
	y = function() {
		return _x__WEBPACK_IMPORTED_MODULE_0__.x;
	};
	expect(y()).toBe(1);
});

it("should import into array literal", function() {
	expect([_x__WEBPACK_IMPORTED_MODULE_0__.x, (0,_x__WEBPACK_IMPORTED_MODULE_0__.f)(2)]).toEqual([1, 2]);
	expect([{
		value: _x__WEBPACK_IMPORTED_MODULE_0__.x
	}]).toEqual([{ value: _x__WEBPACK_IMPORTED_MODULE_0__.x }]);
});

})();

/******/ })()
;