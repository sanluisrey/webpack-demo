/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/*!************************************************!*\
  !*** ./runtime/error-handling/folder/file1.js ***!
  \************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-25 */
/***/ ((module) => {

module.exports = "file1";

/***/ }),
/* 1 */
/*!************************************************!*\
  !*** ./runtime/error-handling/folder/file2.js ***!
  \************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-25 */
/***/ ((module) => {

module.exports = "file2";

/***/ }),
/* 2 */
/*!************************************************!*\
  !*** ./runtime/error-handling/folder/file3.js ***!
  \************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-25 */
/***/ ((module) => {

module.exports = "file3";

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
/*!*****************************************!*\
  !*** ./runtime/error-handling/index.js ***!
  \*****************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 12:0-28:3 */
function testCase(number) {
	expect(__webpack_require__(number === 1 ? /*! ./folder/file1 */ 0 : number === 2 ? /*! ./folder/file2 */ 1 : number === 3 ? /*! ./folder/file3 */ 2 : Object(function webpackMissingModule() { var e = new Error("Cannot find module './missingModule'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))).toBe("file" + number);
	expect(__webpack_require__(
		number === 1 ? /*! ./folder/file1 */ 0 :
		number === 2 ? /*! ./folder/file2 */ 1 :
		number === 3 ? /*! ./folder/file3 */ 2 :
		Object(function webpackMissingModule() { var e = new Error("Cannot find module './missingModule'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
	)).toBe("file" + number);
}


it("should throw an error on missing module at runtime, but not at compile time if in try block", function() {
	var error = null;
	try {
		testCase(4); // indirect
	} catch(e) {
		error = e;
	}
	expect(error).toBeInstanceOf(Error);

	error = null;
	try {
		__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module './missingModule2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())); // direct
	} catch(e) {
		error = e;
	}
	expect(error).toBeInstanceOf(Error);
});

})();

/******/ })()
;