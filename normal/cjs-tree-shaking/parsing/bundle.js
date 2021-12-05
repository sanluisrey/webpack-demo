/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/*!********************************************!*\
  !*** ./cjs-tree-shaking/parsing/module.js ***!
  \********************************************/
/*! default exports */
/*! export fn [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export value [provided] [used in main] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_exports__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-24 */
/***/ ((__unused_webpack_module, exports) => {

exports.fn = a => a + 1;
exports.value = 41;


/***/ }),
/* 1 */,
/* 2 */
/*!****************************************************!*\
  !*** ./cjs-tree-shaking/parsing/nested-require.js ***!
  \****************************************************/
/*! default exports */
/*! export value [provided] [used in main] [renamed to S] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-66 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

exports.S = (__webpack_require__(/*! ./module */ 0).fn)((__webpack_require__(/*! ./module */ 0).value));


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************************!*\
  !*** ./cjs-tree-shaking/parsing/index.js ***!
  \*******************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-3:3 */
it("should parse nested requires successfully", () => {
	expect((__webpack_require__(/*! ./nested-require */ 2)/* .value */ .S)).toBe(42);
});

})();

/******/ })()
;