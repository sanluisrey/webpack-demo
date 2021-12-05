/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/*!*******************************************************!*\
  !*** ./parsing/harmony-module-optimization/module.js ***!
  \*******************************************************/
/*! namespace exports */
/*! export check [provided] [used in main] [renamed to BF] */
/*! export unusedValue [provided] [unused] [renamed to or] */
/*! export value [provided] [used in main] [renamed to S3] */
/*! runtime requirements: module.loaded, module.id, module, __webpack_require__.hmd, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Statement (ExportNamedDeclaration) with side effects in source code at 3:0-63 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S3": () => (/* binding */ value),
/* harmony export */   "BF": () => (/* binding */ check)
/* harmony export */ });
/* unused harmony export unusedValue */
/* module decorator */ module = __webpack_require__.hmd(module);
const value = 42;
const unusedValue = 42;
const check = false;

if (Math.random() < 0) console.log(module.exports);


/***/ }),
/* 1 */,
/* 2 */
/*!**************************************************************!*\
  !*** ./parsing/harmony-module-optimization/module-normal.js ***!
  \**************************************************************/
/*! namespace exports */
/*! export check [provided] [used in main] [renamed to BF] */
/*! export unusedValue [provided] [unused] [renamed to or] */
/*! export value [provided] [used in main] [renamed to S3] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Statement (ExportNamedDeclaration) with side effects in source code at 3:0-63 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S3": () => (/* binding */ value),
/* harmony export */   "BF": () => (/* binding */ check)
/* harmony export */ });
/* unused harmony export unusedValue */
const value = 42;
const unusedValue = 42;
const check = false;


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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************************************!*\
  !*** ./parsing/harmony-module-optimization/index.js ***!
  \******************************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 4:0-8:3 */
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module */ 0);
/* harmony import */ var _module_normal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module-normal */ 2);



it("should allow to optimize exports in modules using 'module'", () => {
	expect(_module__WEBPACK_IMPORTED_MODULE_0__/* .value */ .S3).toBe(42);
	expect(_module_normal__WEBPACK_IMPORTED_MODULE_1__/* .value */ .S3).toBe(42);
	expect(_module__WEBPACK_IMPORTED_MODULE_0__/* .check */ .BF).toBe(_module_normal__WEBPACK_IMPORTED_MODULE_1__/* .check */ .BF);
});

})();

/******/ })()
;