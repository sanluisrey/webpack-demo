/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/*!***************************************************************************************************************************!*\
  !*** ./loaders/module-description-file/node_modules/testloader/lib/loader.webpack-loader.js!./loaders/_resources/abc.txt ***!
  \***************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-27 */
/***/ ((module) => {

module.exports="abcwebpack"

/***/ }),
/* 1 */
/*!************************************************************************************************************************!*\
  !*** ./loaders/module-description-file/node_modules/testloader/lib/loader2.web-loader.js!./loaders/_resources/abc.txt ***!
  \************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-23 */
/***/ ((module) => {

module.exports="abcweb"

/***/ }),
/* 2 */
/*!********************************************************************************************************************!*\
  !*** ./loaders/module-description-file/node_modules/testloader/lib/loader3.loader.js!./loaders/_resources/abc.txt ***!
  \********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-26 */
/***/ ((module) => {

module.exports="abcloader"

/***/ }),
/* 3 */
/*!*********************************************************************************************************************!*\
  !*** ./loaders/module-description-file/node_modules/testloader/lib/loader-indirect.js!./loaders/_resources/abc.txt ***!
  \*********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-27 */
/***/ ((module) => {

module.exports="abcwebpack"

/***/ }),
/* 4 */
/*!******************************************************************************************************************************************************************************!*\
  !*** ./loaders/module-description-file/node_modules/testloader/lib/loader.webpack-loader.js!./loaders/module-description-file/reverseloader.js!./loaders/_resources/abc.txt ***!
  \******************************************************************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-27 */
/***/ ((module) => {

module.exports="cbawebpack"

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
/*!**************************************************!*\
  !*** ./loaders/module-description-file/index.js ***!
  \**************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-6:3 */
it("should run a loader from package.json", function() {
	expect(__webpack_require__(/*! testloader!../_resources/abc.txt */ 0)).toBe("abcwebpack");
	expect(__webpack_require__(/*! testloader/lib/loader2!../_resources/abc.txt */ 1)).toBe("abcweb");
	expect(__webpack_require__(/*! testloader/lib/loader3!../_resources/abc.txt */ 2)).toBe("abcloader");
	expect(__webpack_require__(/*! testloader/lib/loader-indirect!../_resources/abc.txt */ 3)).toBe("abcwebpack");
});
it("should run a loader from .webpack-loader.js extension", function() {
	expect(__webpack_require__(/*! testloader/lib/loader!../_resources/abc.txt */ 0)).toBe("abcwebpack");
});
it("should be able to pipe loaders", function() {
	expect(__webpack_require__(/*! testloader!./reverseloader!../_resources/abc.txt */ 4)).toBe("cbawebpack");
});

})();

/******/ })()
;