/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/*!****************************************!*\
  !*** ./parsing/block-scopes/module.js ***!
  \****************************************/
/*! namespace exports */
/*! export default [provided] [used in main] [renamed to Z] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ok");


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
/*!***************************************!*\
  !*** ./parsing/block-scopes/index.js ***!
  \***************************************/
/*! namespace exports */
/*! export default [provided] [unused] [renamed to Z] */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 6:0-41:3 */
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module */ 1);


// This should not leak an "ok" declaration into this scope
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (function ok() {});

it("should allow block scopes", () => {
	expect(_module__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z).toBe("ok");
	if (true) {
		const ok = "no";
		expect(ok).toBe("no");
	}
	expect(_module__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z).toBe("ok");
	{
		let ok = "no";
		expect(ok).toBe("no");
	}
	expect(_module__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z).toBe("ok");
	{
		class ok {}
		expect(new ok()).toBeInstanceOf(ok);
	}
	expect(_module__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z).toBe("ok");
	for (let ok = "no", once = true; once; once = !once) {
		expect(ok).toBe("no");
	}
	expect(_module__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z).toBe("ok");
	for (const ok of ["no"]) {
		expect(ok).toBe("no");
	}
	expect(_module__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z).toBe("ok");
	for (const ok in { no: 1 }) {
		expect(ok).toBe("no");
	}
	expect(_module__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z).toBe("ok");
	try {
		throw "no";
	} catch (ok) {
		expect(ok).toBe("no");
	}
	expect(_module__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z).toBe("ok");
});

it("should allow function scopes in block scopes", () => {
	let f;
	{
		f = () => {
			expect(ok).toBe("no");
		};
		const ok = "no";
	}
	f();
});

it("should not block scope vars (for)", () => {
	expect(ok).toBe(undefined);
	for (var ok = "no", once = true; once; once = !once) {
		expect(ok).toBe("no");
	}
	expect(ok).toBe("no");
});

it("should not block scope vars (for-of)", () => {
	expect(ok).toBe(undefined);
	for (var ok of ["no"]) {
		expect(ok).toBe("no");
	}
	expect(ok).toBe("no");
});

it("should not block scope vars (for-in)", () => {
	expect(ok).toBe(undefined);
	for (var ok in { no: 1 }) {
		expect(ok).toBe("no");
	}
	expect(ok).toBe("no");
});

})();

/******/ })()
;