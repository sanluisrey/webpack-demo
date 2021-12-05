/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/*!*********************************!*\
  !*** ./parsing/typeof/index.js ***!
  \*********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: exports is used directly at 21:15-22 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-3:3 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

it("should not create a context for typeof require", function () {
	expect(__webpack_require__(/*! ./typeof */ 1)).toBe("function");
});

it("should answer typeof require correctly", function () {
	expect("function").toBe("function");
});
it("should answer typeof define correctly", function () {
	expect("function").toBe("function");
});
it("should answer typeof require.amd correctly", function () {
	expect("object").toBe("object");
});
it("should answer typeof define.amd correctly", function () {
	expect("object").toBe("object");
});
it("should answer typeof module correctly", function () {
	expect("object").toBe("object");
});
it("should answer typeof exports correctly", function () {
	expect(typeof exports).toBe("object");
});
it("should answer typeof require.include correctly", function () {
	expect("function").toBe("function");
});
it("should answer typeof require.ensure correctly", function () {
	expect("function").toBe("function");
});
it("should answer typeof require.resolve correctly", function () {
	expect("function").toBe("function");
});

it("should not parse filtered stuff", function () {
	if (false) {}
	if (false) {}
	if (false) {}
	if (false) {}
	if (false) {}
	if (false) {}
	if (false) {}
	if (false) {}
	if (false) {}
	if (false) {}
	if (false) {}
	if (false) {}
	if (false)
		{}
});


/***/ }),
/* 1 */
/*!**********************************!*\
  !*** ./parsing/typeof/typeof.js ***!
  \**********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-32 */
/***/ ((module) => {

module.exports = "function";

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	
/******/ })()
;