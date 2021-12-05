/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*******************************************!*\
  !*** ./parsing/evaluate-nullish/index.js ***!
  \*******************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/*! Statement (ExpressionStatement) with side effects in source code at 3:0-12:3 */
function a() {}

it("should evaluate nullish coalescing", function () {
	expect("" ?? 0).toBe("");
	expect(String.raw`aaaa` ?? 0).toBe("aaaa");
	expect(a`aaaa` ?? "expected").toBe("expected");
	expect( null ?? "expected").toBe("expected");
	expect(("" ?? 0) && 0).toBe("");
	let x = 0;
	expect(((x = 1), null) ?? true).toBe(true);
	expect(x).toBe(1);
});

/******/ })()
;