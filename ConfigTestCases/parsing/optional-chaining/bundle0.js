/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!******************!*\
  !*** ./index.js ***!
  \******************/
it("should correctly render defined data #1", () => {
	expect(1).toBe(1);
});

it("should correctly render defined data #2", () => {
	const val1 = 2;
	const val2 = ({"_DEFINED_":2})?._UNDEFINED_;
	const val3 = "number";
	const val4 = typeof ({"_DEFINED_":2})?._UNDEFINED_;
	const val5 = ({"_DEFINED_":2});
	const val6 = "object";
	expect(val1).toBe(2);
	expect(val2).toBeUndefined();
	expect(val3).toBe("number");
	expect(val4).toBe("undefined");
	expect(val5).toEqual({ _DEFINED_: 2 });
	expect(val6).toBe("object");
	expect((() => "number").toString()).toContain(
		"number"
	);
	expect((() => "object").toString()).toContain("object");
	if (false) {}
	if (false) {}
	if (false) {}
	if (false) {}
	if (false) {}
	if (false) {}
});

/******/ })()
;