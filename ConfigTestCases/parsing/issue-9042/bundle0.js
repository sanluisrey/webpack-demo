/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!******************!*\
  !*** ./index.js ***!
  \******************/
it("should not evaluate __dirname or __filename when set to false", function(done) {
	if (typeof __dirname !== "undefined") {
		done.fail();
	}
	if (typeof __filename !== "undefined") {
		done.fail();
	}
	done();
});

/******/ })()
;