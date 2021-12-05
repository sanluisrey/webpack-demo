/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/*!**************************************************!*\
  !*** ./scope-hoisting/json-reexport-6700/a.json ***!
  \**************************************************/
/*! default exports */
/*! export a [provided] [used in main] [usage prevents renaming] */
/*! export default [not provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = {"a":"A"};

/***/ }),
/* 1 */
/*!**************************************************!*\
  !*** ./scope-hoisting/json-reexport-6700/b.json ***!
  \**************************************************/
/*! default exports */
/*! export b [provided] [used in main] [usage prevents renaming] */
/*! export default [not provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = {"b":"B"};

/***/ }),
/* 2 */,
/* 3 */
/*!***************************************************!*\
  !*** ./scope-hoisting/json-reexport-6700/json.js ***!
  \***************************************************/
/*! namespace exports */
/*! export a [provided] [used in main] [could be renamed] -> ./scope-hoisting/json-reexport-6700/a.json .a */
/*! export aa [provided] [used in main] [could be renamed] -> ./scope-hoisting/json-reexport-6700/a.json .default */
/*! export b [provided] [used in main] [could be renamed] -> ./scope-hoisting/json-reexport-6700/b.json .b */
/*! export bb [provided] [used in main] [could be renamed] -> ./scope-hoisting/json-reexport-6700/b.json .default */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Dependency (harmony side effect evaluation) with side effects at 1:0-26 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aa": () => (/* reexport default export from named module */ _a_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   "bb": () => (/* reexport default export from named module */ _b_json__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "a": () => (/* reexport safe */ _a_json__WEBPACK_IMPORTED_MODULE_0__.a),
/* harmony export */   "b": () => (/* reexport safe */ _b_json__WEBPACK_IMPORTED_MODULE_1__.b)
/* harmony export */ });
/* harmony import */ var _a_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a.json */ 0);
/* harmony import */ var _b_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./b.json */ 1);













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
  !*** ./scope-hoisting/json-reexport-6700/index.js ***!
  \****************************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 3:0-8:3 */
/* harmony import */ var _json_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./json.js */ 3);


it("should reexport json data correctly", () => {
	expect(_json_js__WEBPACK_IMPORTED_MODULE_0__.aa).toEqual({ a: "A" });
	expect(_json_js__WEBPACK_IMPORTED_MODULE_0__.bb).toEqual({ b: "B" });
	expect(_json_js__WEBPACK_IMPORTED_MODULE_0__.a).toBe("A");
	expect(_json_js__WEBPACK_IMPORTED_MODULE_0__.b).toBe("B");
});


})();

/******/ })()
;