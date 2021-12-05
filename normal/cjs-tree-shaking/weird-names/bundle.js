/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/*!************************************************!*\
  !*** ./cjs-tree-shaking/weird-names/module.js ***!
  \************************************************/
/*! default exports */
/*! export  [provided] [used in main] [renamed to dw] */
/*! export \u0000 [provided] [used in main] [renamed to cp] */
/*! export \n [provided] [used in main] [renamed to Au] */
/*! export * / [provided] [used in main] [renamed to lL] */
/*! export 0 [provided] [used in main] [could be renamed] */
/*! export 0_0 [provided] [used in main] [renamed to RG] */
/*! export 1 [provided] [used in main] [could be renamed] */
/*! export a.b.c [provided] [used in main] [renamed to rm] */
/*! export abc [provided] [used in main] [renamed to Oi] */
/*! export default [provided] [used in main] [renamed to ZP] */
/*! export if [provided] [used in main] [could be renamed] */
/*! export length [provided] [used in main] [renamed to kE] */
/*! runtime requirements: __webpack_exports__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-20 */
/***/ ((__unused_webpack_module, exports) => {

exports.Oi = "abc";
exports.dw = "";
exports.ZP = "default";
exports[0] = "0";
exports[1] = 1;
exports.kE = "length";
exports.RG = "0_0";
exports["if"] = "if";
exports.cp = "\0";
exports.Au = "\n";
exports.lL = "*/";
exports.rm = "a.b.c";


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***********************************************!*\
  !*** ./cjs-tree-shaking/weird-names/index.js ***!
  \***********************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 3:0-16:3 */
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module */ 1);


it("should allow any name as exports in CommonJs", () => {
	expect(_module__WEBPACK_IMPORTED_MODULE_0__/* .abc */ .Oi).toBe("abc");
	expect(_module__WEBPACK_IMPORTED_MODULE_0__/* [""] */ .dw).toBe("");
	expect(_module__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP).toBe("default");
	expect(_module__WEBPACK_IMPORTED_MODULE_0__[0]).toBe("0");
	expect(_module__WEBPACK_IMPORTED_MODULE_0__[1]).toBe(1);
	expect(_module__WEBPACK_IMPORTED_MODULE_0__/* .length */ .kE).toBe("length");
	expect(_module__WEBPACK_IMPORTED_MODULE_0__/* ["0_0"] */ .RG).toBe("0_0");
	expect(_module__WEBPACK_IMPORTED_MODULE_0__["if"]).toBe("if");
	expect(_module__WEBPACK_IMPORTED_MODULE_0__/* ["\u0000"] */ .cp).toBe("\0");
	expect(_module__WEBPACK_IMPORTED_MODULE_0__/* ["\n"] */ .Au).toBe("\n");
	expect(_module__WEBPACK_IMPORTED_MODULE_0__/* ["* /"] */ .lL).toBe("*/");
	expect(_module__WEBPACK_IMPORTED_MODULE_0__/* ["a.b.c"] */ .rm).toBe("a.b.c");
});

})();

/******/ })()
;