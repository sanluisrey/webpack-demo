/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/*!****************************************************!*\
  !*** ./scope-hoisting/export-namespace/module2.js ***!
  \****************************************************/
/*! namespace exports */
/*! export ns [provided] [used in main] [could be renamed] -> ./scope-hoisting/export-namespace/ns2.js */
/*!   export a [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*!   export b [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*!   other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ns": () => (/* reexport module object */ _ns2__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _ns2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ns2 */ 2);




/***/ }),
/* 2 */
/*!************************************************!*\
  !*** ./scope-hoisting/export-namespace/ns2.js ***!
  \************************************************/
/*! namespace exports */
/*! export a [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export b [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ a),
/* harmony export */   "b": () => (/* binding */ b)
/* harmony export */ });
var a = "a";
var b = "b";


/***/ }),
/* 3 */
/*!************************************************!*\
  !*** ./scope-hoisting/export-namespace/ns1.js ***!
  \************************************************/
/*! namespace exports */
/*! export a [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export b [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ a),
/* harmony export */   "b": () => (/* binding */ b)
/* harmony export */ });
var a = "a";
var b = "b";


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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************************************!*\
  !*** ./scope-hoisting/export-namespace/index.js ***!
  \**************************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__ */
/*! Statement (VariableDeclaration) with side effects in source code at 2:0-36 */
/* harmony import */ var _module1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module1 */ 3);

const ns2 = (__webpack_require__(/*! ./module2 */ 1).ns);

it("should allow to export a namespace object (concated)", function() {
	expect(_module1__WEBPACK_IMPORTED_MODULE_0__).toEqual(nsObj({
		a: "a",
		b: "b"
	}));
});

it("should allow to export a namespace object (exposed)", function() {
	expect(ns2).toEqual(nsObj({
		a: "a",
		b: "b"
	}));
});

})();

/******/ })()
;