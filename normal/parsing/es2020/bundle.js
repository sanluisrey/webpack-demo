/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/*!**********************************!*\
  !*** ./parsing/es2020/module.js ***!
  \**********************************/
/*! namespace exports */
/*! export a [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ a)
/* harmony export */ });
const a = 42;


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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************************!*\
  !*** ./parsing/es2020/index.js ***!
  \*********************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ClassDeclaration) with side effects in source code at 3:0-33:1 */
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module */ 1);


class Class {
	#field = this instanceof Class ? _module__WEBPACK_IMPORTED_MODULE_0__.a : false;
	field = this instanceof Class ? _module__WEBPACK_IMPORTED_MODULE_0__.a : false;
	#method = () => (this instanceof Class ? _module__WEBPACK_IMPORTED_MODULE_0__.a : false);
	method = () => (this instanceof Class ? _module__WEBPACK_IMPORTED_MODULE_0__.a : false);
	[`key${!undefined ? _module__WEBPACK_IMPORTED_MODULE_0__.a : false}`] = this instanceof Class ? _module__WEBPACK_IMPORTED_MODULE_0__.a : false;

	static CLASS = true;

	static #sfield = this.CLASS ? _module__WEBPACK_IMPORTED_MODULE_0__.a : false;
	static sfield = this.CLASS ? _module__WEBPACK_IMPORTED_MODULE_0__.a : false;
	static #smethod = () => (this.CLASS ? _module__WEBPACK_IMPORTED_MODULE_0__.a : false);
	static smethod = () => (this.CLASS ? _module__WEBPACK_IMPORTED_MODULE_0__.a : false);
	static [`skey${!undefined ? _module__WEBPACK_IMPORTED_MODULE_0__.a : false}`] = this.CLASS ? _module__WEBPACK_IMPORTED_MODULE_0__.a : false;

	test() {
		expect(this.#field).toBe(42);
		expect(this.field).toBe(42);
		expect(this.#method()).toBe(42);
		expect(this.method()).toBe(42);
		expect(this.key42).toBe(42);
	}

	static stest() {
		expect(Class.#sfield).toBe(42);
		expect(Class.sfield).toBe(42);
		expect(Class.#smethod()).toBe(42);
		expect(Class.smethod()).toBe(42);
		expect(Class.skey42).toBe(42);
	}
}

it("should support class fields", () => {
	Class.stest();
	new Class().test();
});

})();

/******/ })()
;