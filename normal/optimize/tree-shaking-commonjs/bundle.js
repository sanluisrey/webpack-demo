/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/*!*********************************************!*\
  !*** ./optimize/tree-shaking-commonjs/b.js ***!
  \*********************************************/
/*! dynamic exports */
/*! export __esModule [provided] [unused] [provision prevents renaming] -> ./optimize/tree-shaking-commonjs/e.js .__esModule */
/*! export test [provided] [used in main] [provision prevents renaming] -> ./optimize/tree-shaking-commonjs/e.js .test */
/*! runtime requirements: module, __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-32 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./c */ 4);

/***/ }),
/* 1 */
/*!*********************************************!*\
  !*** ./optimize/tree-shaking-commonjs/d.js ***!
  \*********************************************/
/*! dynamic exports */
/*! export __esModule [provided] [unused] [provision prevents renaming] -> ./optimize/tree-shaking-commonjs/e.js .__esModule */
/*! export test [provided] [used in main] [provision prevents renaming] -> ./optimize/tree-shaking-commonjs/e.js .test */
/*! runtime requirements: module, __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-32 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./e */ 5);

/***/ }),
/* 2 */,
/* 3 */
/*!*********************************************!*\
  !*** ./optimize/tree-shaking-commonjs/a.js ***!
  \*********************************************/
/*! namespace exports */
/*! export test [provided] [used in main] [renamed to B] -> ./optimize/tree-shaking-commonjs/e.js .test */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Dependency (harmony side effect evaluation) with side effects at 1:0-25 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* reexport safe */ _b__WEBPACK_IMPORTED_MODULE_0__.test)
/* harmony export */ });
/* harmony import */ var _b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./b */ 0);


/***/ }),
/* 4 */
/*!*********************************************!*\
  !*** ./optimize/tree-shaking-commonjs/c.js ***!
  \*********************************************/
/*! namespace exports */
/*! export __esModule [provided] [unused] [renamed to X] -> ./optimize/tree-shaking-commonjs/e.js .__esModule */
/*! export test [provided] [used in main] [usage prevents renaming] -> ./optimize/tree-shaking-commonjs/e.js .test */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Dependency (harmony side effect evaluation) with side effects at 1:0-20 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "test": () => (/* reexport safe */ _d__WEBPACK_IMPORTED_MODULE_0__.test)
/* harmony export */ });
/* harmony import */ var _d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./d */ 1);


/***/ }),
/* 5 */
/*!*********************************************!*\
  !*** ./optimize/tree-shaking-commonjs/e.js ***!
  \*********************************************/
/*! namespace exports */
/*! export __esModule [not provided] [unused] [could be renamed] */
/*! export test [provided] [used in main] [usage prevents renaming] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "test": () => (/* binding */ test)
/* harmony export */ });
var test = 123;

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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************************************!*\
  !*** ./optimize/tree-shaking-commonjs/index.js ***!
  \*************************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 3:0-5:3 */
/* harmony import */ var _a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a */ 3);


it("should correctly tree shake star exports", function() {
	expect(_a__WEBPACK_IMPORTED_MODULE_0__/* .test */ .B).toBe(123);
});

})();

/******/ })()
;