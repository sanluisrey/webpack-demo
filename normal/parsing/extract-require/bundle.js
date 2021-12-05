/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/*!*************************************************!*\
  !*** ./parsing/extract-require/folder/file1.js ***!
  \*************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-25 */
/***/ ((module) => {

module.exports = "file1";

/***/ }),
/* 1 */
/*!*************************************************!*\
  !*** ./parsing/extract-require/folder/file2.js ***!
  \*************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-25 */
/***/ ((module) => {

module.exports = "file2";

/***/ }),
/* 2 */
/*!*************************************************!*\
  !*** ./parsing/extract-require/folder/file3.js ***!
  \*************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-25 */
/***/ ((module) => {

module.exports = "file3";

/***/ }),
/* 3 */
/*!************************************************!*\
  !*** ./parsing/extract-require/constructor.js ***!
  \************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-3:1 */
/***/ ((module) => {

module.exports = function(value) {
	this.value = value;
}

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
  !*** ./parsing/extract-require/index.js ***!
  \******************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 11:0-16:3 */
function testCase(number) {
	expect(__webpack_require__(number === 1 ? /*! ./folder/file1 */ 0 : number === 2 ? /*! ./folder/file2 */ 1 : number === 3 ? /*! ./folder/file3 */ 2 : Object(function webpackMissingModule() { var e = new Error("Cannot find module './missingModule'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))).toBe("file" + number);
	expect(__webpack_require__(
		number === 1 ? /*! ./folder/file1 */ 0 :
		number === 2 ? /*! ./folder/file2 */ 1 :
		number === 3 ? /*! ./folder/file3 */ 2 :
		Object(function webpackMissingModule() { var e = new Error("Cannot find module './missingModule'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
	)).toBe("file" + number);
}

it("should parse complex require calls", function() {
	// "Parse require in new(...) should work"
	expect(new(__webpack_require__(/*! ./constructor */ 3))(1234).value).toBe(1234);
	// "Parse require in new(...) should work, with spaces"
	expect(new ( __webpack_require__ ( /*! ./constructor */ 3 ) ) ( 1234 ) .value).toBe(1234);
});

it("should let the user hide the require function", function() {
	expect((function(require) { return require; })(1234)).toBe(1234);
	function testFunc(abc, require) {
		return require;
	}
	expect(testFunc(333, 678)).toBe(678);
	(function() {
		var require = 123;
		expect(require).toBe(123);
	}());
	(function() {
		function require() {
			return 123;
		};
		expect(require("error")).toBe(123);
	}());
	(function() {
		var module = 1233;
		expect(module).toBe(1233);
	}());
});

it("should not create a context for the ?: operator", function() {
	testCase(1);
	testCase(2);
	testCase(3);
});


})();

/******/ })()
;