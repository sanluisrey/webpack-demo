var a;
/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!******************!*\
  !*** ./index.js ***!
  \******************/
it("should define global object with property", function() {
	expect(a["b"]).toBeDefined();
});

(a = typeof a === "undefined" ? {} : a).b = __webpack_exports__;
/******/ })()
;