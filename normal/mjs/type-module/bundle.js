/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**********************************!*\
  !*** ./mjs/type-module/index.js ***!
  \**********************************/
/*! namespace exports */
/*! runtime requirements:  */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-9:3 */
it("should not have access to require, module and define", () => {
	expect(
		typeof require === "undefined" || require.webpackTestSuiteRequire
	).toBe(true);
	expect(typeof module === "undefined" || module.webpackTestSuiteModule).toBe(
		true
	);
	expect(typeof define).toBe("undefined");
});

/******/ })()
;