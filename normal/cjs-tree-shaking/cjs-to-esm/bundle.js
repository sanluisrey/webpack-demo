/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/*!*************************************************!*\
  !*** ./cjs-tree-shaking/cjs-to-esm/module.js?2 ***!
  \*************************************************/
/*! namespace exports */
/*! export abc [provided] [unused] [renamed to Oi] */
/*! export def [provided] [unused] [renamed to Nj] */
/*! export func [provided] [used in main] [renamed to Yl] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Yl": () => (/* binding */ func)
/* harmony export */ });
/* unused harmony exports abc, def */
const abc = "abc";
const def = "def";
const func = function() {
	"use strict";
	return this;
};


/***/ }),
/* 1 */
/*!**********************************************!*\
  !*** ./cjs-tree-shaking/cjs-to-esm/index.js ***!
  \**********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__, __webpack_require__.c, module.id, module.loaded, __webpack_require__.*, module */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-10:3 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

it("should allow to require esm", () => {
	expect((__webpack_require__(/*! ./module?1 */ 2)/* .abc */ .Oi)).toBe("abc");
	expect(typeof (__webpack_require__(/*! ./module?2 */ 0)/* .func */ .Yl)).toBe("function");
	// check if a function called with a namespace object as context
	// still yield the same optimization, compared to only accessing
	// the export
	expect(Object.keys((__webpack_require__(/*! ./module?3 */ 3)/* .func */ .Yl)())).toEqual(
		Object.keys(__webpack_require__.c[/*require.resolve*/(/*! ./module?2 */ 0)].exports)
	);
});


/***/ }),
/* 2 */
/*!*************************************************!*\
  !*** ./cjs-tree-shaking/cjs-to-esm/module.js?1 ***!
  \*************************************************/
/*! namespace exports */
/*! export abc [provided] [used in main] [renamed to Oi] */
/*! export def [provided] [unused] [renamed to Nj] */
/*! export func [provided] [unused] [renamed to Yl] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Oi": () => (/* binding */ abc)
/* harmony export */ });
/* unused harmony exports def, func */
const abc = "abc";
const def = "def";
const func = function() {
	"use strict";
	return this;
};


/***/ }),
/* 3 */
/*!*************************************************!*\
  !*** ./cjs-tree-shaking/cjs-to-esm/module.js?3 ***!
  \*************************************************/
/*! namespace exports */
/*! export abc [provided] [unused] [renamed to Oi] */
/*! export def [provided] [unused] [renamed to Nj] */
/*! export func [provided] [used in main] [renamed to Yl] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Yl": () => (/* binding */ func)
/* harmony export */ });
/* unused harmony exports abc, def */
const abc = "abc";
const def = "def";
const func = function() {
	"use strict";
	return this;
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
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
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
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__(1);
/******/ 	
/******/ })()
;