/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**************************!*\
  !*** ./a.js + 1 modules ***!
  \**************************/

;// CONCATENATED MODULE: ./module.js
/* harmony default export */ const module_0 = (42);

;// CONCATENATED MODULE: ./a.js


it("should have usage info in this module", () => {
	expect(module_0).toBe(42);
})

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!**************!*\
  !*** ./b.js ***!
  \**************/

})();

/******/ })()
;