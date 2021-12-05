/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*************************************!*\
  !*** ./parsing/issue-3238/index.js ***!
  \*************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-4:3 */
it("supports empty element in destructuring", function() {
  const second = ([, x]) => x;
  expect(second([1, 2])).toEqual(2);
});

/******/ })()
;