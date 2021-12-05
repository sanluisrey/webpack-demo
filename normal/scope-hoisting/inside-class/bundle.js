/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/*!**********************************************!*\
  !*** ./scope-hoisting/inside-class/first.js ***!
  \**********************************************/
/*! namespace exports */
/*! export Bar [provided] [used in main] [renamed to $] */
/*! export Foo [provided] [used in main] [renamed to Q] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 6:0-14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ Foo),
/* harmony export */   "$": () => (/* binding */ Bar)
/* harmony export */ });
class Foo {
  test() {
    return Foo.value;
  }
}
Foo.value = 1;

class Bar {
  test() {
    return Bar.value;
  }
}
Bar.value = 1;


/***/ }),
/* 2 */
/*!***********************************************!*\
  !*** ./scope-hoisting/inside-class/second.js ***!
  \***********************************************/
/*! namespace exports */
/*! export Bar [provided] [used in main] [renamed to $] */
/*! export Foo [provided] [used in main] [renamed to Q] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 6:0-14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ Foo),
/* harmony export */   "$": () => (/* binding */ Bar)
/* harmony export */ });
class Foo {
  test() {
    return Foo.value;
  }
}
Foo.value = 2;

class Bar {
  test() {
    return Bar.value;
  }
}
Bar.value = 2;


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
/*!**********************************************!*\
  !*** ./scope-hoisting/inside-class/index.js ***!
  \**********************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 4:0-11:3 */
/* harmony import */ var _first__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./first */ 1);
/* harmony import */ var _second__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./second */ 2);



it("should renamed class reference in inner scope", function() {
	var a = new _first__WEBPACK_IMPORTED_MODULE_0__/* .Foo */ .Q().test();
	var b = new _second__WEBPACK_IMPORTED_MODULE_1__/* .Foo */ .Q().test();
	expect(a).toBe(1);
	expect(b).toBe(2);
	expect(new _first__WEBPACK_IMPORTED_MODULE_0__/* .Bar */ .$().test()).toBe(1);
	expect(new _second__WEBPACK_IMPORTED_MODULE_1__/* .Bar */ .$().test()).toBe(2);
});

})();

/******/ })()
;