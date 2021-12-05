/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!******************************************!*\
  !*** ./parsing/unsupported-amd/index.js ***!
  \******************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-6:3 */
it("should fail on unsupported use of AMD require 1", function() {
	expect(function() {
		var abc = ["./a", "./b"];
		Object(function webpackMissingModule() { var e = new Error("Cannot find module 'unsupported'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
	}).toThrowError();
});

it("should fail on unsupported use of AMD require 2", function() {
	expect(function() {
		var abc = ["./a", "./b"];
		function f(a, b) {}
		Object(function webpackMissingModule() { var e = new Error("Cannot find module 'unsupported'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
	}).toThrowError();
});

/******/ })()
;