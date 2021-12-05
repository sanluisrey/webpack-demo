/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/*!*********************************************!*\
  !*** ./cjs-tree-shaking/mutate/module.js?1 ***!
  \*********************************************/
/*! default exports */
/*! export abc [provided] [used in main] [renamed to O] */
/*! export def [provided] [used in main] [renamed to N] */
/*! runtime requirements: __webpack_exports__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-20 */
/***/ ((__unused_webpack_module, exports) => {

exports.O = "abc";
exports.N = "def";


/***/ }),
/* 2 */
/*!*********************************************!*\
  !*** ./cjs-tree-shaking/mutate/module.js?2 ***!
  \*********************************************/
/*! default exports */
/*! export  [not provided] [used in main] [could be renamed] */
/*! export Oi [not provided] [used in main] [could be renamed] */
/*! export a [not provided] [used in main] [could be renamed] */
/*! export abc [provided] [used in main] [renamed to O] */
/*! export def [provided] [used in main] [renamed to N] */
/*! export ghi [not provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-20 */
/***/ ((__unused_webpack_module, exports) => {

exports.O = "abc";
exports.N = "def";


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
/*!******************************************!*\
  !*** ./cjs-tree-shaking/mutate/index.js ***!
  \******************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 4:0-10:3 */
/* harmony import */ var _module_1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module?1 */ 1);
/* harmony import */ var _module_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module?2 */ 2);



it("should allow mutating imported modules (changing existing exports)", () => {
	expect(_module_1__WEBPACK_IMPORTED_MODULE_0__/* .abc */ .O).toBe("abc");
	expect(_module_1__WEBPACK_IMPORTED_MODULE_0__/* .def */ .N).toBe("def");
	_module_1__WEBPACK_IMPORTED_MODULE_0__/* .abc */ .O = "new-abc";
	expect(_module_1__WEBPACK_IMPORTED_MODULE_0__/* .abc */ .O).toBe("new-abc");
	expect(_module_1__WEBPACK_IMPORTED_MODULE_0__/* .def */ .N).toBe("def");
});

it("should allow mutating imported modules (adding new properties)", () => {
	expect(_module_2__WEBPACK_IMPORTED_MODULE_1__/* .abc */ .O).toBe("abc");
	expect(_module_2__WEBPACK_IMPORTED_MODULE_1__/* .def */ .N).toBe("def");
	expect(_module_2__WEBPACK_IMPORTED_MODULE_1__.ghi).toBe(undefined);
	expect(_module_2__WEBPACK_IMPORTED_MODULE_1__.Oi).toBe(undefined);
	expect(_module_2__WEBPACK_IMPORTED_MODULE_1__.a).toBe(undefined);
	expect(_module_2__WEBPACK_IMPORTED_MODULE_1__.a).toBe(undefined);
	expect(_module_2__WEBPACK_IMPORTED_MODULE_1__[""]).toBe(undefined);
	_module_2__WEBPACK_IMPORTED_MODULE_1__.ghi = "ghi";
	_module_2__WEBPACK_IMPORTED_MODULE_1__.Oi = "Oi";
	_module_2__WEBPACK_IMPORTED_MODULE_1__.a = "a";
	_module_2__WEBPACK_IMPORTED_MODULE_1__[""] = {};
	_module_2__WEBPACK_IMPORTED_MODULE_1__[""].abc = "abc";
	expect(_module_2__WEBPACK_IMPORTED_MODULE_1__/* .abc */ .O).toBe("abc");
	expect(_module_2__WEBPACK_IMPORTED_MODULE_1__/* .def */ .N).toBe("def");
	expect(_module_2__WEBPACK_IMPORTED_MODULE_1__.ghi).toBe("ghi");
	expect(_module_2__WEBPACK_IMPORTED_MODULE_1__.Oi).toBe("Oi");
	expect(_module_2__WEBPACK_IMPORTED_MODULE_1__.a).toBe("a");
	expect(_module_2__WEBPACK_IMPORTED_MODULE_1__.a).toBe("a");
	expect(_module_2__WEBPACK_IMPORTED_MODULE_1__[""]).toEqual({ abc: "abc" });
	expect(_module_2__WEBPACK_IMPORTED_MODULE_1__[""].abc).toBe("abc");
});

})();

/******/ })()
;