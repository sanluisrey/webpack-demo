/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!**************!*\
  !*** ./a.js ***!
  \**************/
global.order = ["a"];

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!**************!*\
  !*** ./b.js ***!
  \**************/
global.order.push("b");

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!**************!*\
  !*** ./c.js ***!
  \**************/
global.order.push("c");

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!**************!*\
  !*** ./d.js ***!
  \**************/
global.order.push("d");

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!**************!*\
  !*** ./e.js ***!
  \**************/
global.order.push("e");

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!**************!*\
  !*** ./f.js ***!
  \**************/
global.order.push("f");

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!**************!*\
  !*** ./g.js ***!
  \**************/
global.order.push("g");

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!**************!*\
  !*** ./h.js ***!
  \**************/
global.order.push("h");

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!**************!*\
  !*** ./i.js ***!
  \**************/
global.order.push("i");

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!**************!*\
  !*** ./j.js ***!
  \**************/
global.order.push("j");

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!**************!*\
  !*** ./k.js ***!
  \**************/
global.order.push("k");

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!*****************!*\
  !*** ./test.js ***!
  \*****************/
var order = global.order;
delete global.order;
it("should run the modules in the correct order", function() {
	expect(order).toEqual([
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"g",
		"h",
		"i",
		"j",
		"k"
	]);
});

})();

/******/ })()
;