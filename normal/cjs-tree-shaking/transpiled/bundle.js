/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/*!************************************************************!*\
  !*** ./cjs-tree-shaking/transpiled/typescript-reexport.js ***!
  \************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: exports.hasOwnProperty(...) prevents optimization as exports is passed as call context at 2:23-45 */
/*! CommonJS bailout: exports is used directly at 2:50-57 */
/*! Statement (ExpressionStatement) with side effects in source code at 4:0-32 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

function __export(m) {
	for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(/*! ./module?1 */ 2));


/***/ }),
/* 1 */,
/* 2 */
/*!*************************************************!*\
  !*** ./cjs-tree-shaking/transpiled/module.js?1 ***!
  \*************************************************/
/*! default exports */
/*! export abc [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export def [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_exports__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-20 */
/***/ ((__unused_webpack_module, exports) => {

exports.abc = "abc";
exports.def = "def";


/***/ }),
/* 3 */
/*!*************************************************!*\
  !*** ./cjs-tree-shaking/transpiled/module.js?2 ***!
  \*************************************************/
/*! default exports */
/*! export abc [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export def [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_exports__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-20 */
/***/ ((__unused_webpack_module, exports) => {

exports.abc = "abc";
exports.def = "def";


/***/ }),
/* 4 */
/*!*************************************************!*\
  !*** ./cjs-tree-shaking/transpiled/module.js?3 ***!
  \*************************************************/
/*! default exports */
/*! export abc [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export def [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_exports__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-20 */
/***/ ((__unused_webpack_module, exports) => {

exports.abc = "abc";
exports.def = "def";


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
/*!**********************************************!*\
  !*** ./cjs-tree-shaking/transpiled/index.js ***!
  \**********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-3:3 */
it("should support typescript export *", () => {
	expect((__webpack_require__(/*! ./typescript-reexport */ 0).abc)).toBe("abc");
});

it("should support babel default interop", () => {
	var xxx2 = _interopRequireDefault(__webpack_require__(/*! ./module?2 */ 3));
	var xxx3 = _interopRequireDefault(__webpack_require__(/*! ./module?3 */ 4));
	expect(xxx2.default.abc).toBe("abc");
	expect(xxx3.default).toEqual({ abc: "abc", def: "def" });
});

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

})();

/******/ })()
;