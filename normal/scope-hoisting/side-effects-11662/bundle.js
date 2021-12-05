/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/*!*************************************************************************!*\
  !*** ./scope-hoisting/side-effects-11662/node_modules/package/index.js ***!
  \*************************************************************************/
/*! namespace exports */
/*! export value [provided] [used in main] [renamed to S] -> ./scope-hoisting/side-effects-11662/node_modules/package/module.js .value */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 5:0-7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* reexport safe */ _d__WEBPACK_IMPORTED_MODULE_0__.S)
/* harmony export */ });
/* harmony import */ var _d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./d */ 2);
/* harmony import */ var _e__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./e */ 4);
// @uifabric/styling/lib/index.js



(0,_e__WEBPACK_IMPORTED_MODULE_1__/* .func */ .Y)();


/***/ }),
/* 2 */
/*!*********************************************************************!*\
  !*** ./scope-hoisting/side-effects-11662/node_modules/package/d.js ***!
  \*********************************************************************/
/*! namespace exports */
/*! export value [provided] [used in main] [renamed to S] -> ./scope-hoisting/side-effects-11662/node_modules/package/module.js .value */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* reexport safe */ _e__WEBPACK_IMPORTED_MODULE_0__.S)
/* harmony export */ });
/* harmony import */ var _e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./e */ 3);



/***/ }),
/* 3 */
/*!**************************************************************************!*\
  !*** ./scope-hoisting/side-effects-11662/node_modules/package/module.js ***!
  \**************************************************************************/
/*! namespace exports */
/*! export value [provided] [used in main] [renamed to S] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ value)
/* harmony export */ });
const value = 42;


/***/ }),
/* 4 */
/*!*********************************************************************!*\
  !*** ./scope-hoisting/side-effects-11662/node_modules/package/e.js ***!
  \*********************************************************************/
/*! namespace exports */
/*! export func [provided] [used in main] [renamed to Y] */
/*! export value [provided] [unused] [renamed to S] -> ./scope-hoisting/side-effects-11662/node_modules/package/module.js .value */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ func)
/* harmony export */ });


function func() {}


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
/*!****************************************************!*\
  !*** ./scope-hoisting/side-effects-11662/index.js ***!
  \****************************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 3:0-5:3 */
/* harmony import */ var package__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! package */ 1);


it("should import reexported export correctly", () => {
	expect(package__WEBPACK_IMPORTED_MODULE_0__/* .value */ .S).toBe(42);
});

})();

/******/ })()
;