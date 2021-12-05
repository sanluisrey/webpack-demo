/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/*!*************************************************!*\
  !*** ./scope-hoisting/issue-6407/import-one.js ***!
  \*************************************************/
/*! namespace exports */
/*! export default [provided] [used in main] [renamed to Z] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Statement (ExportDefaultDeclaration) with side effects in source code at 4:0-23 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function foo(n) {
  return 'bar';
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([, foo]);


/***/ }),
/* 2 */
/*!*************************************************!*\
  !*** ./scope-hoisting/issue-6407/import-two.js ***!
  \*************************************************/
/*! namespace exports */
/*! export default [provided] [used in main] [renamed to Z] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Statement (ExportDefaultDeclaration) with side effects in source code at 4:0-23 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function foo(n) {
  return 'bar';
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([, foo]);


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
/*!********************************************!*\
  !*** ./scope-hoisting/issue-6407/index.js ***!
  \********************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 4:0-11:3 */
/* harmony import */ var _import_one__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import-one */ 1);
/* harmony import */ var _import_two__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import-two */ 2);



it("should concatenate modules default exports and empty array values", function() {
	expect(_import_one__WEBPACK_IMPORTED_MODULE_0__/* ["default"].length */ .Z.length).toBe(2);
	expect(typeof _import_one__WEBPACK_IMPORTED_MODULE_0__/* ["default"][0] */ .Z[0]).toBe('undefined');
	expect(typeof _import_one__WEBPACK_IMPORTED_MODULE_0__/* ["default"][1] */ .Z[1]).toBe('function');
	expect(_import_two__WEBPACK_IMPORTED_MODULE_1__/* ["default"].length */ .Z.length).toBe(2);
	expect(typeof _import_two__WEBPACK_IMPORTED_MODULE_1__/* ["default"][0] */ .Z[0]).toBe('undefined');
	expect(typeof _import_two__WEBPACK_IMPORTED_MODULE_1__/* ["default"][1] */ .Z[1]).toBe('function');
});

})();

/******/ })()
;