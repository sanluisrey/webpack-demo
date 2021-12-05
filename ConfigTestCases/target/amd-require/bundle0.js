var nodeRequire = require;
var require = function(deps, fn) { fn(); }

require([], () => { return /******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!******************!*\
  !*** ./index.js ***!
  \******************/
it("should run", function() {});

it("should name require", function() {
	var fs = nodeRequire("fs");
	var source = fs.readFileSync(__filename, "utf-8");

	expect(source).toMatch(/require\(\[[^\]]*\], (function)?\(/);
});

/******/ 	return __webpack_exports__;
/******/ })()
;
});;