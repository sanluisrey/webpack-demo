/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*************************************!*\
  !*** ./parsing/issue-1044/index.js ***!
  \*************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-5:3 */
it("should not crash on missing spaces", function() {
	(function() {
		return true?"hello":0;
	})();
});

/******/ })()
;