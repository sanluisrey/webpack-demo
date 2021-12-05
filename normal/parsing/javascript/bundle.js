/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*************************************!*\
  !*** ./parsing/javascript/index.js ***!
  \*************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-4:3 */
it("should parse sparse arrays", function() { // issue #136
	expect([,null]).toHaveLength(2);
	expect([0,,,0]).toHaveLength(4);
});

/******/ })()
;