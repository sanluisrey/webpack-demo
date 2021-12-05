/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!******************************!*\
  !*** ./index.js + 2 modules ***!
  \******************************/

;// CONCATENATED MODULE: ./reference.js
var used = "used";

var unused = "unused";

;// CONCATENATED MODULE: ./module.js


function test() {
	return {
		used: used,
		unused: /* unused export */ undefined
	};
}



;// CONCATENATED MODULE: ./index.js


it("should run the test", () => {
	expect(test()).toEqual({
		used: "used",
		unused: undefined
	});
	expect(/* unused export */ undefined).toEqual(undefined);
});

/******/ })()
;