/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!****************************************!*\
  !*** ./parsing/meta-property/index.js ***!
  \****************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/*! Statement (ExpressionStatement) with side effects in source code at 26:0-32:3 */
class A {
	constructor() {
		if (new.target === B) {
			this.val = 2;
		} else {
			this.val = 1;
		}
		if (typeof new.target !== "function") {
			this.val = 0;
		}
		if (typeof new.target.value !== "function") {
			this.val = 0;
		}
		if (typeof new.target.unknown !== "undefined") {
			this.val = 0;
		}
		if (!new.target.value) {
			this.val = 0;
		}
	}
	static value() {}
}

class B extends A {}

it("should respect meta property name", () => {
	const b = new B();
	const a = new A();

	expect(b.val).toBe(2);
	expect(a.val).toBe(1);
});

/******/ })()
;