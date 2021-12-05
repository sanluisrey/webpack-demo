/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/*!**************************************!*\
  !*** ./parsing/issue-2050/module.js ***!
  \**************************************/
/*! namespace exports */
/*! export xa [provided] [used in main] [could be renamed] -> ./parsing/issue-2050/a.js .xa */
/*! export xb [provided] [used in main] [could be renamed] -> ./parsing/issue-2050/b.js .xb */
/*! export xc [provided] [used in main] [could be renamed] -> ./parsing/issue-2050/c.js .xc */
/*! export xd [provided] [used in main] [could be renamed] -> ./parsing/issue-2050/d.js .xd */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Dependency (harmony side effect evaluation) with side effects at 4:0-20 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "xa": () => (/* reexport safe */ _a__WEBPACK_IMPORTED_MODULE_0__.xa),
/* harmony export */   "xb": () => (/* reexport safe */ _b__WEBPACK_IMPORTED_MODULE_1__.xb),
/* harmony export */   "xc": () => (/* reexport safe */ _c__WEBPACK_IMPORTED_MODULE_2__.xc),
/* harmony export */   "xd": () => (/* reexport safe */ _d__WEBPACK_IMPORTED_MODULE_3__.xd)
/* harmony export */ });
/* harmony import */ var _a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a */ 4);
/* harmony import */ var _b__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./b */ 5);
/* harmony import */ var _c__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./c */ 6);
/* harmony import */ var _d__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./d */ 1);





/***/ }),
/* 1 */
/*!*********************************!*\
  !*** ./parsing/issue-2050/d.js ***!
  \*********************************/
/*! default exports */
/*! export xd [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__ */
/*! Statement (ExpressionStatement) with side effects in source code at 2:0-16 */
/***/ ((__unused_webpack_module, exports) => {

var xd = "d";
exports.xd = xd;

/***/ }),
/* 2 */,
/* 3 */
/*!*********************************!*\
  !*** ./parsing/issue-2050/x.js ***!
  \*********************************/
/*! namespace exports */
/*! export xa [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./parsing/issue-2050/a.js .xa */
/*! export xb [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./parsing/issue-2050/b.js .xb */
/*! export xc [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./parsing/issue-2050/c.js .xc */
/*! export xd [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./parsing/issue-2050/d.js .xd */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/*! Dependency (harmony side effect evaluation) with side effects at 1:0-42 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "xa": () => (/* reexport safe */ _module__WEBPACK_IMPORTED_MODULE_0__.xa),
/* harmony export */   "xb": () => (/* reexport safe */ _module__WEBPACK_IMPORTED_MODULE_0__.xb),
/* harmony export */   "xc": () => (/* reexport safe */ _module__WEBPACK_IMPORTED_MODULE_0__.xc),
/* harmony export */   "xd": () => (/* reexport safe */ _module__WEBPACK_IMPORTED_MODULE_0__.xd)
/* harmony export */ });
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module */ 0);





/***/ }),
/* 4 */
/*!*********************************!*\
  !*** ./parsing/issue-2050/a.js ***!
  \*********************************/
/*! namespace exports */
/*! export xa [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "xa": () => (/* binding */ xa)
/* harmony export */ });
var xa = "a";


/***/ }),
/* 5 */
/*!*********************************!*\
  !*** ./parsing/issue-2050/b.js ***!
  \*********************************/
/*! namespace exports */
/*! export xb [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "xb": () => (/* binding */ xb)
/* harmony export */ });
var xb = "b";


/***/ }),
/* 6 */
/*!*********************************!*\
  !*** ./parsing/issue-2050/c.js ***!
  \*********************************/
/*! namespace exports */
/*! export xc [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "xc": () => (/* binding */ xc)
/* harmony export */ });
var xc = "c";


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
/*!*************************************!*\
  !*** ./parsing/issue-2050/index.js ***!
  \*************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-8:3 */
it("should support multiple reexports", function() {
	expect(__webpack_require__(/*! ./x */ 3)).toEqual(nsObj({
		xa: "a",
		xb: "b",
		xc: "c",
		xd: "d"
	}));
});

})();

/******/ })()
;