/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!***************************************!*\
  !*** ./parsing/issue-4608-2/index.js ***!
  \***************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/*! Statement (ExpressionStatement) with side effects in source code at 3:0-15:3 */


it("should find var declaration in control statements", function() {
	var f = (function(x) {
		expect(x).toBe("fail");
	});

	(function() {
		for(let x of ["a"]) {
			var require = f;
		}

		require("fail");
	}());
});

it("should find var declaration in control statements after usage", function() {
	var f = (function(x) {
		expect(x).toBe("fail");
	});

	(function() {
		var test = (function() { require("fail"); });

		for(let x of ["a"]) {
			var require = f;
		}

		test();
	}());
});

/******/ })()
;