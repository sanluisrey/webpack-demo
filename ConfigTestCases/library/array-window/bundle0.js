/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!******************!*\
  !*** ./index.js ***!
  \******************/
it("should define property in 'window' object", function() {
	expect(window["a"]["b"]).toBeDefined();
});

(window.a = window.a || {}).b = __webpack_exports__;
/******/ })()
;