/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/*!***************************************!*\
  !*** ./parsing/harmony-commonjs/e.js ***!
  \***************************************/
/*! default exports */
/*! export a [provided] [used in main] [could be renamed] */
/*! export b [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-16 */
/***/ ((__unused_webpack_module, exports) => {

exports.a = "a";
exports.b = "b";


/***/ }),
/* 1 */
/*!***************************************!*\
  !*** ./parsing/harmony-commonjs/c.js ***!
  \***************************************/
/*! namespace exports */
/*! export y [provided] [used in main] [could be renamed] -> ./parsing/harmony-commonjs/d.js .y */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Dependency (harmony side effect evaluation) with side effects at 1:0-20 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* reexport safe */ _d__WEBPACK_IMPORTED_MODULE_0__.y)
/* harmony export */ });
/* harmony import */ var _d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./d */ 2);



/***/ }),
/* 2 */
/*!***************************************!*\
  !*** ./parsing/harmony-commonjs/d.js ***!
  \***************************************/
/*! default exports */
/*! export y [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-16 */
/***/ ((__unused_webpack_module, exports) => {

exports.y = "y";


/***/ }),
/* 3 */
/*!***************************************!*\
  !*** ./parsing/harmony-commonjs/a.js ***!
  \***************************************/
/*! namespace exports */
/*! export default [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ test)
/* harmony export */ });
function test() {
	return "OK";
}


/***/ }),
/* 4 */,
/* 5 */
/*!***************************************!*\
  !*** ./parsing/harmony-commonjs/b.js ***!
  \***************************************/
/*! namespace exports */
/*! export x [provided] [used in main] [could be renamed] -> ./parsing/harmony-commonjs/c2.js .x */
/*! export y [provided] [used in main] [could be renamed] -> ./parsing/harmony-commonjs/d.js .y */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Dependency (harmony side effect evaluation) with side effects at 1:0-20 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* reexport safe */ _c__WEBPACK_IMPORTED_MODULE_0__.y),
/* harmony export */   "x": () => (/* reexport safe */ _c2__WEBPACK_IMPORTED_MODULE_1__.x)
/* harmony export */ });
/* harmony import */ var _c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./c */ 1);
/* harmony import */ var _c2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./c2 */ 6);




/***/ }),
/* 6 */
/*!****************************************!*\
  !*** ./parsing/harmony-commonjs/c2.js ***!
  \****************************************/
/*! namespace exports */
/*! export x [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ x)
/* harmony export */ });
var x = "x";


/***/ }),
/* 7 */
/*!**********************************************!*\
  !*** ./parsing/harmony-commonjs/reexport.js ***!
  \**********************************************/
/*! namespace exports */
/*! export a [provided] [used in main] [could be renamed] -> ./parsing/harmony-commonjs/e.js .a */
/*! export b [provided] [used in main] [could be renamed] -> ./parsing/harmony-commonjs/e.js .b */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Dependency (harmony side effect evaluation) with side effects at 1:0-20 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* reexport safe */ _e__WEBPACK_IMPORTED_MODULE_0__.a),
/* harmony export */   "b": () => (/* reexport safe */ _e__WEBPACK_IMPORTED_MODULE_0__.b)
/* harmony export */ });
/* harmony import */ var _e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./e */ 0);




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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*******************************************!*\
  !*** ./parsing/harmony-commonjs/index.js ***!
  \*******************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 3:0-6:3 */
/* harmony import */ var _b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./b */ 5);
/* harmony import */ var _reexport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reexport */ 7);


it("should pass when required by CommonJS module", function () {
	var test1 = (__webpack_require__(/*! ./a */ 3)["default"]);
	expect(test1()).toBe("OK");
});

it("should pass when use babeljs transpiler", function() {
	//the following are generated code by use babeljs.
	// use it this way will save trouble to setup babel-loader
	// the babeljs transpiled code depends on the __esModule to be set
	var _test = __webpack_require__(/*! ./a */ 3);
	var _test2 = _interopRequireDefault(_test);
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	var test2 = (0, _test2.default)();
	expect(test2).toBe("OK");
});

it("should double reexport from non-harmony modules correctly", function() {
	expect(_b__WEBPACK_IMPORTED_MODULE_0__.y).toBe("y");
	expect(_b__WEBPACK_IMPORTED_MODULE_0__.x).toBe("x");
});




it("should be possible to reexport a module with unknown exports", function() {
	expect(_reexport__WEBPACK_IMPORTED_MODULE_1__.a).toBe("a");
	expect(_reexport__WEBPACK_IMPORTED_MODULE_1__.b).toBe("b");
});

})();

/******/ })()
;