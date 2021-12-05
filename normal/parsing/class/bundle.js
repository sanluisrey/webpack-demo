/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/*!****************************!*\
  !*** ./parsing/class/a.js ***!
  \****************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-22 */
/***/ ((module) => {

module.exports = "ok";


/***/ }),
/* 1 */,
/* 2 */
/*!*********************************!*\
  !*** ./parsing/class/module.js ***!
  \*********************************/
/*! namespace exports */
/*! export A [provided] [used in main] [could be renamed] */
/*! export B [provided] [used in main] [could be renamed] */
/*! export default [provided] [used in main] [renamed to Z] */
/*! runtime requirements: __webpack_exports__, __webpack_require__, __webpack_require__.d, __webpack_require__.* */
/*! Dependency (cjs require) with side effects at 3:11-25 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "A": () => (/* binding */ A),
/* harmony export */   "B": () => (/* binding */ B)
/* harmony export */ });
class A {
	constructor() {
		this.a = __webpack_require__(/*! ./a */ 0);
	}
}

const B = class {
	constructor() {
		this.a = __webpack_require__(/*! ./a */ 0);
	}
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {
	constructor() {
		this.a = __webpack_require__(/*! ./a */ 0);
	}
	b() {
		return __webpack_require__(/*! ./a */ 0);
	}
	static c() {
		return __webpack_require__(/*! ./a */ 0);
	}
});;




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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!********************************!*\
  !*** ./parsing/class/index.js ***!
  \********************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 3:0-7:3 */
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module */ 2);


it("should parse classes", function() {
	expect(new _module__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z().a).toBe("ok");
	expect(new _module__WEBPACK_IMPORTED_MODULE_0__.A().a).toBe("ok");
	expect(new _module__WEBPACK_IMPORTED_MODULE_0__.B().a).toBe("ok");
});

it("should parse methods", function() {
	expect(new _module__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z().b()).toBe("ok");
	expect(_module__WEBPACK_IMPORTED_MODULE_0__/* ["default"].c */ .Z.c()).toBe("ok");
});

})();

/******/ })()
;