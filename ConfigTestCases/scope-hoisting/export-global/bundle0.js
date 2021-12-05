/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!******************************!*\
  !*** ./index.js + 2 modules ***!
  \******************************/

;// CONCATENATED MODULE: ./module.js
const module_process = 42;


;// CONCATENATED MODULE: ./module2.js
const p = process;


;// CONCATENATED MODULE: ./index.js



it("should export globals correctly", () => {
	expect(module_process).toBe(42);
	expect(p).toBe(process);
});

/******/ })()
;