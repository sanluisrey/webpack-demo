/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/*!******************************************************************!*\
  !*** ./loaders/async/loaders/syncloader.js!./loaders/async/a.js ***!
  \******************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-21 */
/***/ ((module) => {

module.exports = "a";

/***/ }),
/* 1 */
/*!*******************************************************************!*\
  !*** ./loaders/async/loaders/asyncloader.js!./loaders/async/a.js ***!
  \*******************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-21 */
/***/ ((module) => {

module.exports = "a";

/***/ }),
/* 2 */
/*!********************************************************************************************************!*\
  !*** ./loaders/async/loaders/syncloader.js!./loaders/async/loaders/syncloader.js!./loaders/async/a.js ***!
  \********************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-21 */
/***/ ((module) => {

module.exports = "a";

/***/ }),
/* 3 */
/*!*********************************************************************************************************!*\
  !*** ./loaders/async/loaders/syncloader.js!./loaders/async/loaders/asyncloader.js!./loaders/async/a.js ***!
  \*********************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-21 */
/***/ ((module) => {

module.exports = "a";

/***/ }),
/* 4 */
/*!*********************************************************************************************************!*\
  !*** ./loaders/async/loaders/asyncloader.js!./loaders/async/loaders/syncloader.js!./loaders/async/a.js ***!
  \*********************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-21 */
/***/ ((module) => {

module.exports = "a";

/***/ }),
/* 5 */
/*!**********************************************************************************************************!*\
  !*** ./loaders/async/loaders/asyncloader.js!./loaders/async/loaders/asyncloader.js!./loaders/async/a.js ***!
  \**********************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-21 */
/***/ ((module) => {

module.exports = "a";

/***/ }),
/* 6 */
/*!*************************************************************************************************************************************************!*\
  !*** ./loaders/async/loaders/asyncloader.js!./loaders/async/loaders/asyncloader.js!./loaders/async/loaders/asyncloader.js!./loaders/async/a.js ***!
  \*************************************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-21 */
/***/ ((module) => {

module.exports = "a";

/***/ }),
/* 7 */
/*!************************************************************************************************************************************************!*\
  !*** ./loaders/async/loaders/asyncloader.js!./loaders/async/loaders/syncloader.js!./loaders/async/loaders/asyncloader.js!./loaders/async/a.js ***!
  \************************************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-21 */
/***/ ((module) => {

module.exports = "a";

/***/ }),
/* 8 */
/*!***********************************************************************************************************************************************!*\
  !*** ./loaders/async/loaders/syncloader.js!./loaders/async/loaders/asyncloader.js!./loaders/async/loaders/syncloader.js!./loaders/async/a.js ***!
  \***********************************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-21 */
/***/ ((module) => {

module.exports = "a";

/***/ }),
/* 9 */
/*!**********************************************************************************************************************************************!*\
  !*** ./loaders/async/loaders/syncloader.js!./loaders/async/loaders/syncloader.js!./loaders/async/loaders/syncloader.js!./loaders/async/a.js ***!
  \**********************************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-21 */
/***/ ((module) => {

module.exports = "a";

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
/*!********************************!*\
  !*** ./loaders/async/index.js ***!
  \********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-14:3 */
it("should allow combinations of async and sync loaders", function() {
	expect(__webpack_require__(/*! ./loaders/syncloader!./a */ 0)).toBe("a");
	expect(__webpack_require__(/*! ./loaders/asyncloader!./a */ 1)).toBe("a");

	expect(__webpack_require__(/*! ./loaders/syncloader!./loaders/syncloader!./a */ 2)).toBe("a");
	expect(__webpack_require__(/*! ./loaders/syncloader!./loaders/asyncloader!./a */ 3)).toBe("a");
	expect(__webpack_require__(/*! ./loaders/asyncloader!./loaders/syncloader!./a */ 4)).toBe("a");
	expect(__webpack_require__(/*! ./loaders/asyncloader!./loaders/asyncloader!./a */ 5)).toBe("a");

	expect(__webpack_require__(/*! ./loaders/asyncloader!./loaders/asyncloader!./loaders/asyncloader!./a */ 6)).toBe("a");
	expect(__webpack_require__(/*! ./loaders/asyncloader!./loaders/syncloader!./loaders/asyncloader!./a */ 7)).toBe("a");
	expect(__webpack_require__(/*! ./loaders/syncloader!./loaders/asyncloader!./loaders/syncloader!./a */ 8)).toBe("a");
	expect(__webpack_require__(/*! ./loaders/syncloader!./loaders/syncloader!./loaders/syncloader!./a */ 9)).toBe("a");
});

})();

/******/ })()
;