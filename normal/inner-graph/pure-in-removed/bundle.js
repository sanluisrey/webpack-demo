/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/*!******************************************************!*\
  !*** ./inner-graph/pure-in-removed/import-module.js ***!
  \******************************************************/
/*! namespace exports */
/*! export test [provided] [used in main] [renamed to B] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Dependency (harmony side effect evaluation) with side effects at 1:0-20 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ test)
/* harmony export */ });
/* harmony import */ var _module_1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module?1 */ 2);
/* harmony import */ var _module_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module?2 */ 3);
/* harmony import */ var _module_3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module?3 */ 4);
/* harmony import */ var _module_4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module?4 */ 5);





function test() {
	expect((0,_module_2__WEBPACK_IMPORTED_MODULE_1__/* .getX */ .n)()).toBe(42);
	expect((0,_module_2__WEBPACK_IMPORTED_MODULE_1__/* .getY */ .F)()).toBe(42);
	expect((0,_module_3__WEBPACK_IMPORTED_MODULE_2__/* .getX */ .n)()).toBe(42);
	expect((0,_module_4__WEBPACK_IMPORTED_MODULE_3__/* .getY */ .F)()).toBe(42);
}


/***/ }),
/* 2 */
/*!*************************************************!*\
  !*** ./inner-graph/pure-in-removed/module.js?1 ***!
  \*************************************************/
/*! namespace exports */
/*! export getX [provided] [unused] [renamed to n] */
/*! export getY [provided] [unused] [renamed to F] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Statement (VariableDeclaration) with side effects in source code at 6:1-31 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony exports getX, getY */
function f() {
	return 43;
}

if (true) {
	var x = /*#__PURE__*/ f() - 1;
	var y = 42;
} else { var y, x; }

const getX = () => x,
	getY = () => y;


/***/ }),
/* 3 */
/*!*************************************************!*\
  !*** ./inner-graph/pure-in-removed/module.js?2 ***!
  \*************************************************/
/*! namespace exports */
/*! export getX [provided] [used in main] [renamed to n] */
/*! export getY [provided] [used in main] [renamed to F] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Statement (VariableDeclaration) with side effects in source code at 6:1-31 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ getX),
/* harmony export */   "F": () => (/* binding */ getY)
/* harmony export */ });
function f() {
	return 43;
}

if (true) {
	var x = /*#__PURE__*/ f() - 1;
	var y = 42;
} else { var y, x; }

const getX = () => x,
	getY = () => y;


/***/ }),
/* 4 */
/*!*************************************************!*\
  !*** ./inner-graph/pure-in-removed/module.js?3 ***!
  \*************************************************/
/*! namespace exports */
/*! export getX [provided] [used in main] [renamed to n] */
/*! export getY [provided] [unused] [renamed to F] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Statement (VariableDeclaration) with side effects in source code at 6:1-31 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ getX)
/* harmony export */ });
/* unused harmony export getY */
function f() {
	return 43;
}

if (true) {
	var x = /*#__PURE__*/ f() - 1;
	var y = 42;
} else { var y, x; }

const getX = () => x,
	getY = () => y;


/***/ }),
/* 5 */
/*!*************************************************!*\
  !*** ./inner-graph/pure-in-removed/module.js?4 ***!
  \*************************************************/
/*! namespace exports */
/*! export getX [provided] [unused] [renamed to n] */
/*! export getY [provided] [used in main] [renamed to F] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Statement (VariableDeclaration) with side effects in source code at 6:1-31 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ getY)
/* harmony export */ });
/* unused harmony export getX */
function f() {
	return 43;
}

if (true) {
	var x = /*#__PURE__*/ f() - 1;
	var y = 42;
} else { var y, x; }

const getX = () => x,
	getY = () => y;


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
  !*** ./inner-graph/pure-in-removed/index.js ***!
  \**********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-3:3 */
it("should generate correct code when pure expressions are in dead branches", () => {
	(__webpack_require__(/*! ./import-module */ 1)/* .test */ .B)();
});

})();

/******/ })()
;