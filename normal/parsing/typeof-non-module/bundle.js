/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************************************!*\
  !*** ./parsing/typeof-non-module/index.js ***!
  \********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-9:3 */
it("should answer typeof __non_webpack_require__ correctly", function () {
	var oldValue;
	eval("oldValue = require;");
	expect(typeof require).toBe("function");
	eval("require = undefined;");
	expect(typeof require).toBe("undefined");
	eval("require = oldValue;");
	expect(typeof require).toBe("function");
});

/******/ })()
;