/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/*!******************************************************!*\
  !*** ./scope-hoisting/import-order-11617/tracker.js ***!
  \******************************************************/
/*! namespace exports */
/*! export log [provided] [used in main] [renamed to c] */
/*! export track [provided] [used in main] [renamed to j] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ log),
/* harmony export */   "j": () => (/* binding */ track)
/* harmony export */ });
var log = [];

function track(name) {
	log.push(name);
}


/***/ }),
/* 1 */
/*!************************************************!*\
  !*** ./scope-hoisting/import-order-11617/x.js ***!
  \************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-26 */
/***/ (() => {

console.log.bind(console);


/***/ }),
/* 2 */,
/* 3 */
/*!************************************************!*\
  !*** ./scope-hoisting/import-order-11617/y.js ***!
  \************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-26 */
/***/ (() => {

console.log.bind(console);


/***/ }),
/* 4 */
/*!************************************************!*\
  !*** ./scope-hoisting/import-order-11617/a.js ***!
  \************************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 6:0-11 */
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./b */ 5);
/* harmony import */ var _c__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./c */ 6);
/* harmony import */ var _c__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_c__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tracker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tracker */ 0);





(0,_tracker__WEBPACK_IMPORTED_MODULE_2__/* .track */ .j)("a");


/***/ }),
/* 5 */
/*!************************************************!*\
  !*** ./scope-hoisting/import-order-11617/b.js ***!
  \************************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 5:0-11 */
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./x */ 1);
/* harmony import */ var _x__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_x__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tracker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tracker */ 0);




(0,_tracker__WEBPACK_IMPORTED_MODULE_1__/* .track */ .j)("b");


/***/ }),
/* 6 */
/*!************************************************!*\
  !*** ./scope-hoisting/import-order-11617/c.js ***!
  \************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/*! Statement (VariableDeclaration) with side effects in source code at 1:0-39 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var track = (__webpack_require__(/*! ./tracker */ 0)/* .track */ .j);

track("c");


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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/*!****************************************************!*\
  !*** ./scope-hoisting/import-order-11617/index.js ***!
  \****************************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 6:0-8:3 */
/* harmony import */ var _x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./x */ 1);
/* harmony import */ var _x__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_x__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./y */ 3);
/* harmony import */ var _y__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_y__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _a__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./a */ 4);
/* harmony import */ var _tracker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tracker */ 0);





it("should evaluate import in the correct order", function () {
	expect(_tracker__WEBPACK_IMPORTED_MODULE_3__/* .log */ .c).toEqual(["b", "c", "a"]);
});

})();

/******/ })()
;