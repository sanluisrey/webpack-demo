/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/*!********************************************************!*\
  !*** ./parsing/harmony-import-export-order/tracker.js ***!
  \********************************************************/
/*! namespace exports */
/*! export add [provided] [used in main] [usage prevents renaming] */
/*! export list [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "list": () => (/* binding */ list),
/* harmony export */   "add": () => (/* binding */ add)
/* harmony export */ });
var list = [];
function add(str) {
	list.push(str);
}


/***/ }),
/* 1 */
/*!**************************************************!*\
  !*** ./parsing/harmony-import-export-order/c.js ***!
  \**************************************************/
/*! namespace exports */
/*! export ax [provided] [used in main] [usage prevents renaming] -> ./parsing/harmony-import-export-order/a.js .ax */
/*! export bx [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./parsing/harmony-import-export-order/b.js .bx */
/*! export cx [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./parsing/harmony-import-export-order/b.js .bx */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 6:0-9 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ax": () => (/* reexport safe */ _a__WEBPACK_IMPORTED_MODULE_0__.ax),
/* harmony export */   "bx": () => (/* reexport safe */ _b__WEBPACK_IMPORTED_MODULE_1__.bx),
/* harmony export */   "cx": () => (/* reexport safe */ _b__WEBPACK_IMPORTED_MODULE_1__.bx)
/* harmony export */ });
/* harmony import */ var _a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a */ 3);
/* harmony import */ var _b__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./b */ 2);
/* harmony import */ var _tracker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tracker */ 0);




;
(0,_tracker__WEBPACK_IMPORTED_MODULE_2__.add)("c");



/***/ }),
/* 2 */
/*!**************************************************!*\
  !*** ./parsing/harmony-import-export-order/b.js ***!
  \**************************************************/
/*! namespace exports */
/*! export bx [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 3:0-9 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bx": () => (/* binding */ bx)
/* harmony export */ });
/* harmony import */ var _c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./c */ 1);
/* harmony import */ var _tracker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tracker */ 0);


(0,_tracker__WEBPACK_IMPORTED_MODULE_1__.add)("b");
var bx = _c__WEBPACK_IMPORTED_MODULE_0__.ax;


/***/ }),
/* 3 */
/*!**************************************************!*\
  !*** ./parsing/harmony-import-export-order/a.js ***!
  \**************************************************/
/*! namespace exports */
/*! export ax [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 2:0-9 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ax": () => (/* binding */ ax)
/* harmony export */ });
/* harmony import */ var _tracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tracker */ 0);

(0,_tracker__WEBPACK_IMPORTED_MODULE_0__.add)("a");
var ax = "ax";


/***/ }),
/* 4 */
/*!******************************************************!*\
  !*** ./parsing/harmony-import-export-order/index.js ***!
  \******************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__, __webpack_require__.c, module.id, module.loaded, __webpack_require__.*, module */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-10:3 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

it("should process imports of star exports in the correct order", function() {
	var tracker = __webpack_require__(/*! ./tracker */ 0);
	tracker.list.length = 0;
	delete __webpack_require__.c[/*require.resolve*/(/*! ./c */ 1)];
	var c = __webpack_require__(/*! ./c */ 1);
	expect(tracker.list).toEqual(["a", "b", "c"]);
	expect(c.ax).toBe("ax");
	expect(c.bx).toBe("ax");
	expect(c.cx).toBe("ax");
});


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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
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
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__(4);
/******/ 	
/******/ })()
;