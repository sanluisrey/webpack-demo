/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/*!******************************************************!*\
  !*** ./parsing/harmony-export-import-specifier/e.js ***!
  \******************************************************/
/*! namespace exports */
/*! export e1 [provided] [used in main] [could be renamed] */
/*! export e2 [provided] [unused] [could be renamed] */
/*! export usedE1 [provided] [used in main] [renamed to E] */
/*! export usedE2 [provided] [used in main] [renamed to A] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Statement (ExportNamedDeclaration) with side effects in source code at 3:0-55 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e1": () => (/* binding */ e1),
/* harmony export */   "E": () => (/* binding */ usedE1),
/* harmony export */   "A": () => (/* binding */ usedE2)
/* harmony export */ });
/* unused harmony export e2 */
const e1 = 10;
const e2 = 20;
const usedE1 = true;
const usedE2 = false;


/***/ }),
/* 1 */
/*!********************************************************!*\
  !*** ./parsing/harmony-export-import-specifier/cjs.js ***!
  \********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-32 */
/***/ ((module) => {

module.exports = { x: 2, y: 3 };


/***/ }),
/* 2 */
/*!******************************************************!*\
  !*** ./parsing/harmony-export-import-specifier/d.js ***!
  \******************************************************/
/*! namespace exports */
/*! export d1 [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export d2 [provided] [used in main] [usage prevents renaming] */
/*! export usedD1 [provided] [used in main] [usage prevents renaming] */
/*! export usedD2 [provided] [used in main] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Statement (ExportNamedDeclaration) with side effects in source code at 3:0-55 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d1": () => (/* binding */ d1),
/* harmony export */   "d2": () => (/* binding */ d2),
/* harmony export */   "usedD1": () => (/* binding */ usedD1),
/* harmony export */   "usedD2": () => (/* binding */ usedD2)
/* harmony export */ });
const d1 = 1;
const d2 = 2;
const usedD1 = true;
const usedD2 = true;


/***/ }),
/* 3 */
/*!******************************************************!*\
  !*** ./parsing/harmony-export-import-specifier/f.js ***!
  \******************************************************/
/*! namespace exports */
/*! export f1 [provided] [only properties used in main] [could be renamed] -> ./parsing/harmony-export-import-specifier/e1.js */
/*!   export e [provided] [only properties used in main] [could be renamed] -> ./parsing/harmony-export-import-specifier/e.js */
/*!     export e1 [provided] [used in main] [could be renamed] */
/*!     export e2 [provided] [unused] [could be renamed] */
/*!     export usedE1 [provided] [used in main] [renamed to E] */
/*!     export usedE2 [provided] [used in main] [renamed to A] */
/*! export f2 [provided] [only properties used in main] [could be renamed] -> ./parsing/harmony-export-import-specifier/e.js */
/*!   ... (5 already listed exports) */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Dependency (harmony side effect evaluation) with side effects at 1:0-30 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f1": () => (/* reexport module object */ _e1_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   "f2": () => (/* reexport module object */ _e_js__WEBPACK_IMPORTED_MODULE_1__)
/* harmony export */ });
/* harmony import */ var _e1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./e1.js */ 6);
/* harmony import */ var _e_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./e.js */ 0);




/***/ }),
/* 4 */
/*!******************************************************!*\
  !*** ./parsing/harmony-export-import-specifier/c.js ***!
  \******************************************************/
/*! namespace exports */
/*! export c [provided] [used in main] [could be renamed] -> ./parsing/harmony-export-import-specifier/d.js */
/*!   export d1 [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*!   export d2 [provided] [used in main] [usage prevents renaming] */
/*!   export usedD1 [provided] [used in main] [usage prevents renaming] */
/*!   export usedD2 [provided] [used in main] [usage prevents renaming] */
/*!   other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Dependency (harmony side effect evaluation) with side effects at 1:0-28 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* reexport module object */ _d_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./d.js */ 2);



/***/ }),
/* 5 */
/*!******************************************************!*\
  !*** ./parsing/harmony-export-import-specifier/g.js ***!
  \******************************************************/
/*! namespace exports */
/*! export f1 [provided] [only properties used in main] [could be renamed] -> ./parsing/harmony-export-import-specifier/e1.js */
/*!   export e [provided] [only properties used in main] [could be renamed] -> ./parsing/harmony-export-import-specifier/e.js */
/*!     export e1 [provided] [used in main] [could be renamed] */
/*!     export e2 [provided] [unused] [could be renamed] */
/*!     export usedE1 [provided] [used in main] [renamed to E] */
/*!     export usedE2 [provided] [used in main] [renamed to A] */
/*! export g1 [provided] [only properties used in main] [could be renamed] -> ./parsing/harmony-export-import-specifier/e.js */
/*!   ... (5 already listed exports) */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Dependency (harmony side effect evaluation) with side effects at 1:0-30 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f1": () => (/* reexport safe */ _f_js__WEBPACK_IMPORTED_MODULE_0__.f1),
/* harmony export */   "g1": () => (/* reexport safe */ _f_js__WEBPACK_IMPORTED_MODULE_0__.f2)
/* harmony export */ });
/* harmony import */ var _f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./f.js */ 3);





/***/ }),
/* 6 */
/*!*******************************************************!*\
  !*** ./parsing/harmony-export-import-specifier/e1.js ***!
  \*******************************************************/
/*! namespace exports */
/*! export e [provided] [only properties used in main] [could be renamed] -> ./parsing/harmony-export-import-specifier/e.js */
/*!   export e1 [provided] [used in main] [could be renamed] */
/*!   export e2 [provided] [unused] [could be renamed] */
/*!   export usedE1 [provided] [used in main] [renamed to E] */
/*!   export usedE2 [provided] [used in main] [renamed to A] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Dependency (harmony side effect evaluation) with side effects at 1:0-28 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* reexport module object */ _e_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./e.js */ 0);



/***/ }),
/* 7 */,
/* 8 */
/*!******************************************************!*\
  !*** ./parsing/harmony-export-import-specifier/a.js ***!
  \******************************************************/
/*! namespace exports */
/*! export default [not provided] [unused] [could be renamed] */
/*! export x [provided] [used in main] [could be renamed] */
/*! export y [maybe provided (runtime-defined)] [used in main] [provision prevents renaming] -> ./parsing/harmony-export-import-specifier/cjs.js .y */
/*! other exports [maybe provided (runtime-defined)] [unused] -> ./parsing/harmony-export-import-specifier/cjs.js */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.d, __webpack_require__.o, __webpack_require__.* */
/*! Dependency (harmony side effect evaluation) with side effects at 2:0-22 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ x)
/* harmony export */ });
/* harmony import */ var _cjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cjs */ 1);
/* harmony import */ var _cjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_cjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_cjs__WEBPACK_IMPORTED_MODULE_0__, "y")) __webpack_require__.d(__webpack_exports__, { "y": function() { return _cjs__WEBPACK_IMPORTED_MODULE_0__.y; } });
var x = 1;



/***/ }),
/* 9 */
/*!******************************************************!*\
  !*** ./parsing/harmony-export-import-specifier/b.js ***!
  \******************************************************/
/*! namespace exports */
/*! export b1 [provided] [only properties used in main] [could be renamed] -> ./parsing/harmony-export-import-specifier/d.js */
/*!   export d1 [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*!   export d2 [provided] [used in main] [usage prevents renaming] */
/*!   export usedD1 [provided] [used in main] [usage prevents renaming] */
/*!   export usedD2 [provided] [used in main] [usage prevents renaming] */
/*!   other exports [not provided] [maybe used in main (runtime-defined)] */
/*! export b2 [provided] [unused] [could be renamed] */
/*! export b3 [provided] [unused] [could be renamed] */
/*! export b4 [provided] [unused] [could be renamed] -> ./parsing/harmony-export-import-specifier/d.js */
/*!   ... (5 already listed exports) */
/*! export usedB1 [provided] [used in main] [renamed to Pk] */
/*! export usedB2 [provided] [used in main] [renamed to W3] */
/*! export usedB3 [provided] [used in main] [renamed to Cv] */
/*! export usedB4 [provided] [used in main] [renamed to iU] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Statement (ExportNamedDeclaration) with side effects in source code at 6:0-55 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b1": () => (/* reexport safe */ _c_js__WEBPACK_IMPORTED_MODULE_0__.c),
/* harmony export */   "Pk": () => (/* binding */ usedB1),
/* harmony export */   "W3": () => (/* binding */ usedB2),
/* harmony export */   "Cv": () => (/* binding */ usedB3),
/* harmony export */   "iU": () => (/* binding */ usedB4)
/* harmony export */ });
/* unused harmony exports b2, b3 */
/* harmony import */ var _c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./c.js */ 4);


const b2 = 3;
const b3 = _c_js__WEBPACK_IMPORTED_MODULE_0__.c;

const usedB1 = true;
const usedB2 = false;
const usedB3 = false;
const usedB4 = false;


/***/ }),
/* 10 */
/*!******************************************************!*\
  !*** ./parsing/harmony-export-import-specifier/h.js ***!
  \******************************************************/
/*! namespace exports */
/*! export h [provided] [only properties used in main] [could be renamed] -> ./parsing/harmony-export-import-specifier/g.js */
/*!   export f1 [provided] [only properties used in main] [could be renamed] -> ./parsing/harmony-export-import-specifier/e1.js */
/*!     export e [provided] [only properties used in main] [could be renamed] -> ./parsing/harmony-export-import-specifier/e.js */
/*!       export e1 [provided] [used in main] [could be renamed] */
/*!       export e2 [provided] [unused] [could be renamed] */
/*!       export usedE1 [provided] [used in main] [renamed to E] */
/*!       export usedE2 [provided] [used in main] [renamed to A] */
/*!   export g1 [provided] [only properties used in main] [could be renamed] -> ./parsing/harmony-export-import-specifier/e.js */
/*!     ... (5 already listed exports) */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Dependency (harmony side effect evaluation) with side effects at 1:0-28 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* reexport module object */ _g_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _g_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./g.js */ 5);



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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************************************************!*\
  !*** ./parsing/harmony-export-import-specifier/index.js ***!
  \**********************************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 9:0-12:3 */
/* harmony import */ var _a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a */ 8);
/* harmony import */ var _d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./d.js */ 2);
/* harmony import */ var _b_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./b.js */ 9);
/* harmony import */ var _e_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./e.js */ 0);
/* harmony import */ var _h_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./h.js */ 10);








it("namespace export as from commonjs should override named export", function () {
	expect(_a__WEBPACK_IMPORTED_MODULE_0__.x).toBe(1);
	expect(_a__WEBPACK_IMPORTED_MODULE_0__.y).toBe(3);
});

it("named namespace export should work correctly", function () {
	expect(_d_js__WEBPACK_IMPORTED_MODULE_1__.d2).toBe(2);
	if (process.env.NODE_ENV === "production") {
		expect(_d_js__WEBPACK_IMPORTED_MODULE_1__.usedD1).toBe(false);
	}
	expect(_d_js__WEBPACK_IMPORTED_MODULE_1__.usedD2).toBe(true);

	expect(_b_js__WEBPACK_IMPORTED_MODULE_2__.b1.d2).toBe(2);
	expect(_b_js__WEBPACK_IMPORTED_MODULE_2__/* .usedB1 */ .Pk).toBe(true);
	if (process.env.NODE_ENV === "production") {
		expect(_b_js__WEBPACK_IMPORTED_MODULE_2__/* .usedB2 */ .W3).toBe(false);
		expect(_b_js__WEBPACK_IMPORTED_MODULE_2__/* .usedB3 */ .Cv).toBe(false);
		expect(_b_js__WEBPACK_IMPORTED_MODULE_2__/* .usedB4 */ .iU).toBe(false);
	}
});

it("complex case should work correctly", () => {
	expect(_h_js__WEBPACK_IMPORTED_MODULE_4__.h.f1.e.e1).toBe(10);
	expect(_h_js__WEBPACK_IMPORTED_MODULE_4__.h.g1.e1).toBe(10);
	expect(_e_js__WEBPACK_IMPORTED_MODULE_3__/* .usedE1 */ .E).toBe(true);
	if (process.env.NODE_ENV === "production") {
		expect(_e_js__WEBPACK_IMPORTED_MODULE_3__/* .usedE2 */ .A).toBe(false);
	}
});

})();

/******/ })()
;