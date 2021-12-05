/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/*!*****************************************************************!*\
  !*** ./parsing/harmony-star-conflict/named-with-namespace/a.js ***!
  \*****************************************************************/
/*! namespace exports */
/*! export named1 [provided] [used in main] [usage prevents renaming] */
/*! export named2 [provided] [used in main] [usage prevents renaming] */
/*! export named3 [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./parsing/harmony-star-conflict/named-with-namespace/a.js .named2 */
/*! export named4 [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./parsing/harmony-star-conflict/named-with-namespace/a.js */
/*!   ... (7 already listed exports) */
/*! export named5 [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export named6 [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./parsing/harmony-star-conflict/named-with-namespace/a.js .named1 */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "named1": () => (/* binding */ named1),
/* harmony export */   "named2": () => (/* binding */ named2),
/* harmony export */   "named3": () => (/* reexport safe */ _a_js__WEBPACK_IMPORTED_MODULE_0__.named2),
/* harmony export */   "named4": () => (/* reexport module object */ _a_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   "named5": () => (/* binding */ named5),
/* harmony export */   "named6": () => (/* reexport safe */ _a_js__WEBPACK_IMPORTED_MODULE_0__.named1)
/* harmony export */ });
/* harmony import */ var _a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a.js */ 0);
const named1 = 1;
const named2 = 2;


const named5 = 5;



/***/ }),
/* 1 */
/*!*************************************************************************!*\
  !*** ./parsing/harmony-star-conflict/named-with-namespace-no-side/a.js ***!
  \*************************************************************************/
/*! namespace exports */
/*! export named1 [provided] [used in main] [usage prevents renaming] */
/*! export named2 [provided] [used in main] [usage prevents renaming] */
/*! export named3 [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./parsing/harmony-star-conflict/named-with-namespace-no-side/a.js .named2 */
/*! export named4 [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./parsing/harmony-star-conflict/named-with-namespace-no-side/a.js */
/*!   ... (7 already listed exports) */
/*! export named5 [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export named6 [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./parsing/harmony-star-conflict/named-with-namespace-no-side/a.js .named1 */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "named1": () => (/* binding */ named1),
/* harmony export */   "named2": () => (/* binding */ named2),
/* harmony export */   "named3": () => (/* reexport safe */ _a_js__WEBPACK_IMPORTED_MODULE_0__.named2),
/* harmony export */   "named4": () => (/* reexport module object */ _a_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   "named5": () => (/* binding */ named5),
/* harmony export */   "named6": () => (/* reexport safe */ _a_js__WEBPACK_IMPORTED_MODULE_0__.named1)
/* harmony export */ });
/* harmony import */ var _a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a.js */ 1);
const named1 = 1;
const named2 = 2;


const named5 = 5;



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
/*!************************************************!*\
  !*** ./parsing/harmony-star-conflict/index.js ***!
  \************************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 10:0-20:3 */
/* harmony import */ var _named_with_namespace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./named-with-namespace */ 0);
/* harmony import */ var _named_with_namespace_no_side__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./named-with-namespace-no-side */ 1);


it("should point out conflicts from named to namespace", () => {
	expect(_named_with_namespace__WEBPACK_IMPORTED_MODULE_0__.named1).toBe(1);
	expect(_named_with_namespace__WEBPACK_IMPORTED_MODULE_0__.named2).toBe(2);
	expect(_named_with_namespace__WEBPACK_IMPORTED_MODULE_0__.named2).toBe(2);
	expect(_named_with_namespace__WEBPACK_IMPORTED_MODULE_0__).toMatchObject({
		named1: 1,
		named2: 2
	});
	expect(_named_with_namespace__WEBPACK_IMPORTED_MODULE_0__.named5).toBe(5);
	expect(_named_with_namespace__WEBPACK_IMPORTED_MODULE_0__.named1).toBe(1);
});



it("should point out conflicts from named to namespace (without sideeffects)", () => {
	expect(_named_with_namespace_no_side__WEBPACK_IMPORTED_MODULE_1__.named1).toBe(1);
	expect(_named_with_namespace_no_side__WEBPACK_IMPORTED_MODULE_1__.named2).toBe(2);
	expect(_named_with_namespace_no_side__WEBPACK_IMPORTED_MODULE_1__.named2).toBe(2);
	expect(_named_with_namespace_no_side__WEBPACK_IMPORTED_MODULE_1__).toMatchObject({
		named1: 1,
		named2: 2
	});
	expect(_named_with_namespace_no_side__WEBPACK_IMPORTED_MODULE_1__.named5).toBe(5);
	expect(_named_with_namespace_no_side__WEBPACK_IMPORTED_MODULE_1__.named1).toBe(1);
});

})();

/******/ })()
;