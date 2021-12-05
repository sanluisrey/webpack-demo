/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/*!******************************************************************!*\
  !*** ./resolving/browser-field/node_modules/new-module/index.js ***!
  \******************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-30 */
/***/ ((module) => {

module.exports = "new-module";

/***/ }),
/* 1 */
/*!******************************************************************!*\
  !*** ./resolving/browser-field/node_modules/new-module/inner.js ***!
  \******************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-36 */
/***/ ((module) => {

module.exports = "new-module/inner";

/***/ }),
/* 2 */
/*!**************************************************************************!*\
  !*** ./resolving/browser-field/node_modules/replacing-module4/module.js ***!
  \**************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-44 */
/***/ ((module) => {

module.exports = "replacing-module4/module";

/***/ }),
/* 3 */
/*!**************************************************************************!*\
  !*** ./resolving/browser-field/node_modules/replacing-file1/new-file.js ***!
  \**************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-28 */
/***/ ((module) => {

module.exports = "new-file";

/***/ }),
/* 4 */
/*!******************************************************************************!*\
  !*** ./resolving/browser-field/node_modules/replacing-file4/dir/new-file.js ***!
  \******************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-28 */
/***/ ((module) => {

module.exports = "new-file";

/***/ }),
/* 5 */
/*!***********************************************************************!*\
  !*** ./resolving/browser-field/node_modules/ignoring-module/index.js ***!
  \***********************************************************************/
/*! default exports */
/*! export file [provided] [used in main] [provision prevents renaming] -> ./file (ignored) */
/*!   exports [maybe provided (runtime-defined)] [no usage info in main] */
/*! export module [provided] [used in main] [provision prevents renaming] -> wrong-module (ignored) */
/*!   exports [maybe provided (runtime-defined)] [no usage info in main] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-41 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

exports.module = __webpack_require__(/*! wrong-module */ 17);
exports.file = __webpack_require__(/*! ./file */ 18);

/***/ }),
/* 6 */,
/* 7 */
/*!*************************************************************************!*\
  !*** ./resolving/browser-field/node_modules/replacing-module1/index.js ***!
  \*************************************************************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [maybe used in main (runtime-defined)] -> ./resolving/browser-field/node_modules/new-module/index.js */
/*! runtime requirements: module, __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-41 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! wrong-module */ 0);

/***/ }),
/* 8 */
/*!*************************************************************************!*\
  !*** ./resolving/browser-field/node_modules/replacing-module2/index.js ***!
  \*************************************************************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [maybe used in main (runtime-defined)] -> ./resolving/browser-field/node_modules/new-module/inner.js */
/*! runtime requirements: module, __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-41 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! wrong-module */ 1);

/***/ }),
/* 9 */
/*!*************************************************************************!*\
  !*** ./resolving/browser-field/node_modules/replacing-module3/index.js ***!
  \*************************************************************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [maybe used in main (runtime-defined)] -> ./resolving/browser-field/node_modules/new-module/inner.js */
/*! runtime requirements: module, __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-39 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! new-module */ 1);

/***/ }),
/* 10 */
/*!*************************************************************************!*\
  !*** ./resolving/browser-field/node_modules/replacing-module4/index.js ***!
  \*************************************************************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [maybe used in main (runtime-defined)] -> ./resolving/browser-field/node_modules/replacing-module4/module.js */
/*! runtime requirements: module, __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-41 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! wrong-module */ 2);

/***/ }),
/* 11 */
/*!***********************************************************************!*\
  !*** ./resolving/browser-field/node_modules/replacing-file1/index.js ***!
  \***********************************************************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [maybe used in main (runtime-defined)] -> ./resolving/browser-field/node_modules/replacing-file1/new-file.js */
/*! runtime requirements: module, __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-35 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./file */ 3);

/***/ }),
/* 12 */
/*!***********************************************************************!*\
  !*** ./resolving/browser-field/node_modules/replacing-file2/index.js ***!
  \***********************************************************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [maybe used in main (runtime-defined)] -> ./resolving/browser-field/node_modules/new-module/index.js */
/*! runtime requirements: module, __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-35 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./file */ 0);

/***/ }),
/* 13 */
/*!***********************************************************************!*\
  !*** ./resolving/browser-field/node_modules/replacing-file3/index.js ***!
  \***********************************************************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [maybe used in main (runtime-defined)] -> ./resolving/browser-field/node_modules/new-module/inner.js */
/*! runtime requirements: module, __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-35 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./file */ 1);

/***/ }),
/* 14 */
/*!***********************************************************************!*\
  !*** ./resolving/browser-field/node_modules/replacing-file4/index.js ***!
  \***********************************************************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [maybe used in main (runtime-defined)] -> ./resolving/browser-field/node_modules/replacing-file4/dir/index.js */
/*! runtime requirements: module, __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-34 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dir */ 15);

/***/ }),
/* 15 */
/*!***************************************************************************!*\
  !*** ./resolving/browser-field/node_modules/replacing-file4/dir/index.js ***!
  \***************************************************************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [maybe used in main (runtime-defined)] -> ./resolving/browser-field/node_modules/replacing-file4/dir/new-file.js */
/*! runtime requirements: module, __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-35 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./file */ 4);

/***/ }),
/* 16 */
/*!************************************************************************!*\
  !*** ./resolving/browser-field/node_modules/recursive-module/index.js ***!
  \************************************************************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [maybe used in main (runtime-defined)] -> ./resolving/browser-field/node_modules/new-module/index.js */
/*! runtime requirements: module, __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-39 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! new-module */ 0);

/***/ }),
/* 17 */
/*!******************************!*\
  !*** wrong-module (ignored) ***!
  \******************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

/* (ignored) */

/***/ }),
/* 18 */
/*!************************!*\
  !*** ./file (ignored) ***!
  \************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

/* (ignored) */

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
/*!******************************************!*\
  !*** ./resolving/browser-field/index.js ***!
  \******************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-3:3 */
it("should replace a module with a module", function() {
	expect(__webpack_require__(/*! replacing-module1 */ 7)).toBe("new-module");
});
it("should replace a module with a file in a module", function() {
	expect(__webpack_require__(/*! replacing-module2 */ 8)).toBe("new-module/inner");
});
it("should replace a module with file in the same module", function() {
	expect(__webpack_require__(/*! replacing-module3 */ 9)).toBe("new-module/inner");
});
it("should replace a module with a file in the current module", function() {
	expect(__webpack_require__(/*! replacing-module4 */ 10)).toBe("replacing-module4/module");
});

it("should replace a file with another file", function() {
	expect(__webpack_require__(/*! replacing-file1 */ 11)).toBe("new-file");
});
it("should replace a file with a module", function() {
	expect(__webpack_require__(/*! replacing-file2 */ 12)).toBe("new-module");
});
it("should replace a file with a file in a module", function() {
	expect(__webpack_require__(/*! replacing-file3 */ 13)).toBe("new-module/inner");
});
it("should replace a file in a directory with another file", function() {
	expect(__webpack_require__(/*! replacing-file4 */ 14)).toBe("new-file");
});

it("should ignore recursive module mappings", function() {
	expect(__webpack_require__(/*! recursive-module */ 16)).toBe("new-module");
});

it("should use empty modules for ignored modules", function() {
	expect((__webpack_require__(/*! ignoring-module */ 5).module)).toEqual({});
	expect((__webpack_require__(/*! ignoring-module */ 5).file)).toEqual({});
	expect((__webpack_require__(/*! ignoring-module */ 5).module)).not.toBe(
		(__webpack_require__(/*! ignoring-module */ 5).file)
	);
});

// Errors
if (Math.random() < 0) __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recursive-file/a'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
if (Math.random() < 0) __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recursive-file/b'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
if (Math.random() < 0) __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recursive-file/c'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
if (Math.random() < 0) __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recursive-file/d'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

})();

/******/ })()
;