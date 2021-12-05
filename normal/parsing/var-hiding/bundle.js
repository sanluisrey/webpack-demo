/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*************************************!*\
  !*** ./parsing/var-hiding/index.js ***!
  \*************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/*! Statement (ExpressionStatement) with side effects in source code at 8:0-10:3 */
var fn = function(module) {
	if (typeof module !== 'number') {
		throw new Error("module should be a number");
	}
	expect((typeof module)).toBe("number");
};

it("should hide a free var by function argument", function() {
	fn(1);
});

/******/ })()
;