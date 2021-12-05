/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/*!*************************************************!*\
  !*** ./scope-hoisting/this-in-import/module.js ***!
  \*************************************************/
/*! namespace exports */
/*! export obj [provided] [used in main] [renamed to j] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Statement (ExportNamedDeclaration) with side effects in source code at 2:0-9:2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ obj)
/* harmony export */ });
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module */ 0);

const obj = {
	func() {
		return this;
	},
	test() {
		expect(_module__WEBPACK_IMPORTED_MODULE_0__/* .obj.func */ .j.func()).toBe(_module__WEBPACK_IMPORTED_MODULE_0__/* .obj */ .j);
	}
};


/***/ }),
/* 1 */,
/* 2 */
/*!**********************************************!*\
  !*** ./scope-hoisting/this-in-import/cjs.js ***!
  \**********************************************/
/*! default exports */
/*! export obj2 [provided] [used in main] [renamed to G] */
/*! runtime requirements: __webpack_exports__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-5:2 */
/***/ ((__unused_webpack_module, exports) => {

exports.G = {
	func() {
		return this;
	}
};


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
/*!************************************************!*\
  !*** ./scope-hoisting/this-in-import/index.js ***!
  \************************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 4:0-8:3 */
/* harmony import */ var _module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module.js */ 0);
/* harmony import */ var _cjs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cjs.js */ 2);



it("should have correct this in called function", () => {
	const r = _module_js__WEBPACK_IMPORTED_MODULE_0__/* .obj.func */ .j.func();
	expect(r).toBe(_module_js__WEBPACK_IMPORTED_MODULE_0__/* .obj */ .j);
	_module_js__WEBPACK_IMPORTED_MODULE_0__/* .obj.test */ .j.test();
});

it("should have correct this in called function from commonjs", () => {
	const r = _cjs_js__WEBPACK_IMPORTED_MODULE_1__/* .obj2.func */ .G.func();
	expect(r).toBe(_cjs_js__WEBPACK_IMPORTED_MODULE_1__/* .obj2 */ .G);
});

})();

/******/ })()
;