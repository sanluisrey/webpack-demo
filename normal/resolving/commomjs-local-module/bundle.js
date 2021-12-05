/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/*!**************************************************!*\
  !*** ./resolving/commomjs-local-module/index.js ***!
  \**************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 2:1-15 */
/*! CommonJS bailout: exports is used directly at 6:1-8 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-3:3 */
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_LOCAL_MODULE_0__, __WEBPACK_LOCAL_MODULE_0__module;var __WEBPACK_LOCAL_MODULE_1__, __WEBPACK_LOCAL_MODULE_1__module;var __WEBPACK_LOCAL_MODULE_2__, __WEBPACK_LOCAL_MODULE_2__module;!(__WEBPACK_LOCAL_MODULE_0__module = { id: "regular", exports: {}, loaded: false }, __WEBPACK_LOCAL_MODULE_0__ = (function(require, exports, module) {
	module.exports = "regular-module";
}).call(__WEBPACK_LOCAL_MODULE_0__module.exports, __webpack_require__, __WEBPACK_LOCAL_MODULE_0__module.exports, __WEBPACK_LOCAL_MODULE_0__module), __WEBPACK_LOCAL_MODULE_0__module.loaded = true, __WEBPACK_LOCAL_MODULE_0__ === undefined && (__WEBPACK_LOCAL_MODULE_0__ = __WEBPACK_LOCAL_MODULE_0__module.exports));

!(__WEBPACK_LOCAL_MODULE_1__module = { id: "override-exports", exports: {}, loaded: false }, __WEBPACK_LOCAL_MODULE_1__ = (function(require, exports, module) {
	exports = "this one overrides exports reference";
}).call(__WEBPACK_LOCAL_MODULE_1__module.exports, __webpack_require__, __WEBPACK_LOCAL_MODULE_1__module.exports, __WEBPACK_LOCAL_MODULE_1__module), __WEBPACK_LOCAL_MODULE_1__module.loaded = true, __WEBPACK_LOCAL_MODULE_1__ === undefined && (__WEBPACK_LOCAL_MODULE_1__ = __WEBPACK_LOCAL_MODULE_1__module.exports));

!(__WEBPACK_LOCAL_MODULE_2__module = { id: "return-module", exports: {}, loaded: false }, __WEBPACK_LOCAL_MODULE_2__ = (function(require, exports, module) {
	return "module is returned";
}).call(__WEBPACK_LOCAL_MODULE_2__module.exports, __webpack_require__, __WEBPACK_LOCAL_MODULE_2__module.exports, __WEBPACK_LOCAL_MODULE_2__module), __WEBPACK_LOCAL_MODULE_2__module.loaded = true, __WEBPACK_LOCAL_MODULE_2__ === undefined && (__WEBPACK_LOCAL_MODULE_2__ = __WEBPACK_LOCAL_MODULE_2__module.exports));

it("should make different modules for query", function() {
	expect(__WEBPACK_LOCAL_MODULE_0__).toBe("regular-module");
	expect(__WEBPACK_LOCAL_MODULE_2__).toBe("module is returned");

	const overrideExports = __WEBPACK_LOCAL_MODULE_1__;
	expect(typeof overrideExports).toBe("object");
	expect(Object.keys(overrideExports)).toHaveLength(0);
});


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