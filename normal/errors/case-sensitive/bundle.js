/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/*!************************************!*\
  !*** ./errors/case-sensitive/a.js ***!
  \************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {



/***/ }),
/* 2 */
/*!************************************!*\
  !*** ./errors/case-sensitive/A.js ***!
  \************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {



/***/ }),
/* 3 */
/*!*****************************************!*\
  !*** ./errors/case-sensitive/b/file.js ***!
  \*****************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {



/***/ }),
/* 4 */
/*!*****************************************!*\
  !*** ./errors/case-sensitive/B/file.js ***!
  \*****************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {



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
/*!****************************************!*\
  !*** ./errors/case-sensitive/index.js ***!
  \****************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-8:3 */
it("should return different modules with different casing", function() {
	var a = __webpack_require__(/*! ./a */ 1);
	var A = __webpack_require__(/*! ./A */ 2);
	var b = __webpack_require__(/*! ./b/file.js */ 3);
	var B = __webpack_require__(/*! ./B/file.js */ 4);
	expect(a).not.toBe(A);
	expect(b).not.toBe(B);
});

})();

/******/ })()
;