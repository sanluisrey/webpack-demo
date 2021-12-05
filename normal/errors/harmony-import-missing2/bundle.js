/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/*!***************************************************!*\
  !*** ./errors/harmony-import-missing2/module1.js ***!
  \***************************************************/
/*! namespace exports */
/*! export test [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./errors/harmony-import-missing2/a.js?1 .test */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/*! Dependency (harmony side effect evaluation) with side effects at 1:0-27 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* empty/unused harmony star reexport */
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "test": () => (/* reexport safe */ _a_1__WEBPACK_IMPORTED_MODULE_1__.B)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module './missing1'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _a_1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./a?1 */ 2);




/***/ }),
/* 2 */
/*!***********************************************!*\
  !*** ./errors/harmony-import-missing2/a.js?1 ***!
  \***********************************************/
/*! namespace exports */
/*! export test [provided] [used in main] [renamed to B] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ test)
/* harmony export */ });
var test = "test";


/***/ }),
/* 3 */
/*!***************************************************!*\
  !*** ./errors/harmony-import-missing2/module2.js ***!
  \***************************************************/
/*! namespace exports */
/*! export test [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./errors/harmony-import-missing2/a.js?2 .test */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/*! Dependency (harmony side effect evaluation) with side effects at 1:0-31 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* empty/unused harmony star reexport */
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "test": () => (/* reexport safe */ _a_2__WEBPACK_IMPORTED_MODULE_1__.B)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module './missing2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _a_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./a?2 */ 4);




/***/ }),
/* 4 */
/*!***********************************************!*\
  !*** ./errors/harmony-import-missing2/a.js?2 ***!
  \***********************************************/
/*! namespace exports */
/*! export test [provided] [used in main] [renamed to B] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ test)
/* harmony export */ });
var test = "test";


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
/*!*************************************************!*\
  !*** ./errors/harmony-import-missing2/index.js ***!
  \*************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-5:3 */
it("should not crash on importing missing modules", function() {
	expect(function() {
		__webpack_require__(/*! ./module1 */ 1);
	}).toThrowError();
});

it("should not crash on importing missing modules", function() {
	expect(function() {
		__webpack_require__(/*! ./module2 */ 3);
	}).toThrowError();
});

})();

/******/ })()
;