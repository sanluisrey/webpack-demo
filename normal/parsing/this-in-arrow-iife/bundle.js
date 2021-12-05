/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!*********************************************!*\
  !*** ./parsing/this-in-arrow-iife/index.js ***!
  \*********************************************/
/*! namespace exports */
/*! runtime requirements:  */
/*! Statement (ExpressionStatement) with side effects in source code at 9:0-12:3 */
function x() {
	let value;
	(() => {
		value = this;
	})();
	return value;
}

it("should parse this in an arrow IIFE correctly", () => {
	const o = { ok: true };
	expect(x.call(o)).toBe(o);
});



/******/ })()
;