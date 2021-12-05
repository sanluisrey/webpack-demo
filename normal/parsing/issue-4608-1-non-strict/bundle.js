/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************************************!*\
  !*** ./parsing/issue-4608-1-non-strict/index.js ***!
  \**************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-13:3 */
it("should find var declaration in control statements", function () {
	var f = function (x) {
		expect(x).toBe("fail");
	};

	(function () {
		with ({ a: 1 }) {
			var require = f;
		}

		require("fail");
	})();
});

it("should find var declaration in control statements after usage", function () {
	var f = function (x) {
		expect(x).toBe("fail");
	};

	(function () {
		var test = function () {
			require("fail");
		};

		with ({ a: 1 }) {
			var require = f;
		}

		test();
	})();
});

/******/ })()
;