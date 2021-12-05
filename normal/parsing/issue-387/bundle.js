/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/*!************************************!*\
  !*** ./parsing/issue-387/index.js ***!
  \************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__, __webpack_require__.amdD, __webpack_exports__ */
/*! CommonJS bailout: module.exports is used directly at 13:8-22 */
/*! CommonJS bailout: module.exports is used directly at 33:8-22 */
/*! CommonJS bailout: module.exports is used directly at 48:8-22 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-14:3 */
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_RESULT__;it("should parse cujojs UMD modules", function() {
	(function (define) {

		// using the define signature that triggers AMD-wrapped CommonJS
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require) {
			return 123;
		}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}(
		__webpack_require__.amdD
	));
	expect(module.exports).toBe(123);
});

it("should parse cujojs UMD modules with deps", function() {
	(function (define) {

		// dependencies are listed in the dependency array
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./file */ 1)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (file) {
			return 1234;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	}(
		__webpack_require__.amdD
	));
	expect(module.exports).toBe(1234);
});

it("should parse cujojs UMD modules with inlined deps", function() {
	(function (define) {

		// using the define signature that triggers AMD-wrapped CommonJS
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require) {
			return __webpack_require__(/*! ./file */ 1);
		}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}(
		__webpack_require__.amdD
	));
	expect(module.exports).toBe(4321);
});


/***/ }),
/* 1 */
/*!***********************************!*\
  !*** ./parsing/issue-387/file.js ***!
  \***********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-22 */
/***/ ((module) => {

module.exports = 4321;

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
/******/ 	/* webpack/runtime/amd define */
/******/ 	(() => {
/******/ 		__webpack_require__.amdD = function () {
/******/ 			throw new Error('define cannot be used indirect');
/******/ 		};
/******/ 	})();
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