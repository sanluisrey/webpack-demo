/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({});
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
/*!***************************************************!*\
  !*** ./runtime/missing-module-exception/index.js ***!
  \***************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-9:3 */
it("should have correct error code", function () {
	try {
		__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module './fail-1'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
		Object(function webpackMissingModule() { var e = new Error("Cannot find module './fail-2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
		Object(function webpackMissingModule() { var e = new Error("Cannot find module './fail-3'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
	} catch (e) {
		expect(e.code).toBe("MODULE_NOT_FOUND");
	}
});

/******/ })()
;