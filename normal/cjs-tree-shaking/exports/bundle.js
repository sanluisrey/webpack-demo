/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/*!********************************************************!*\
  !*** ./cjs-tree-shaking/exports/attach-to-object.js?3 ***!
  \********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-3:2 */
/***/ ((module) => {

module.exports = {
	abc: "abc"
};

module.exports.def = "def";


/***/ }),
/* 1 */
/*!**********************************************************!*\
  !*** ./cjs-tree-shaking/exports/attach-to-function.js?3 ***!
  \**********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-3:2 */
/***/ ((module) => {

module.exports = function() {
	return "abc";
};

module.exports.def = "def";


/***/ }),
/* 2 */
/*!****************************************************************!*\
  !*** ./cjs-tree-shaking/exports/attach-to-arrow-function.js?3 ***!
  \****************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-29 */
/***/ ((module) => {

module.exports = () => "abc";

module.exports.def = "def";


/***/ }),
/* 3 */
/*!***************************************************************!*\
  !*** ./cjs-tree-shaking/exports/reading-self-from-exports.js ***!
  \***************************************************************/
/*! default exports */
/*! export abc [provided] [used in main] [renamed to O] */
/*! export test [provided] [used in main] [renamed to B] */
/*! runtime requirements: __webpack_exports__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-20 */
/***/ ((__unused_webpack_module, exports) => {

exports.O = "abc";

exports.B = function() {
	return exports.O;
};


/***/ }),
/* 4 */
/*!**********************************************************************!*\
  !*** ./cjs-tree-shaking/exports/reading-self-from-module-exports.js ***!
  \**********************************************************************/
/*! default exports */
/*! export abc [provided] [used in main] [renamed to O] */
/*! export test [provided] [used in main] [renamed to B] */
/*! runtime requirements: __webpack_exports__, module */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-20 */
/***/ ((module, exports) => {

exports.O = "abc";

exports.B = function() {
	return module.exports.O;
};


/***/ }),
/* 5 */
/*!************************************************************!*\
  !*** ./cjs-tree-shaking/exports/reading-self-from-this.js ***!
  \************************************************************/
/*! default exports */
/*! export abc [provided] [used in main] [renamed to O] */
/*! export test [provided] [used in main] [renamed to B] */
/*! runtime requirements: __webpack_exports__, top-level-this-exports */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-20 */
/***/ (function(__unused_webpack_module, exports) {

exports.O = "abc";

exports.B = () => {
	return this.O;
};


/***/ }),
/* 6 */
/*!********************************************************!*\
  !*** ./cjs-tree-shaking/exports/attach-to-object.js?1 ***!
  \********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-3:2 */
/***/ ((module) => {

module.exports = {
	abc: "abc"
};

module.exports.def = "def";


/***/ }),
/* 7 */
/*!********************************************************!*\
  !*** ./cjs-tree-shaking/exports/attach-to-object.js?2 ***!
  \********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-3:2 */
/***/ ((module) => {

module.exports = {
	abc: "abc"
};

module.exports.def = "def";


/***/ }),
/* 8 */
/*!**********************************************************!*\
  !*** ./cjs-tree-shaking/exports/attach-to-function.js?1 ***!
  \**********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-3:2 */
/***/ ((module) => {

module.exports = function() {
	return "abc";
};

module.exports.def = "def";


/***/ }),
/* 9 */
/*!**********************************************************!*\
  !*** ./cjs-tree-shaking/exports/attach-to-function.js?2 ***!
  \**********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-3:2 */
/***/ ((module) => {

module.exports = function() {
	return "abc";
};

module.exports.def = "def";


/***/ }),
/* 10 */
/*!****************************************************************!*\
  !*** ./cjs-tree-shaking/exports/attach-to-arrow-function.js?1 ***!
  \****************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-29 */
/***/ ((module) => {

module.exports = () => "abc";

module.exports.def = "def";


/***/ }),
/* 11 */
/*!****************************************************************!*\
  !*** ./cjs-tree-shaking/exports/attach-to-arrow-function.js?2 ***!
  \****************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-29 */
/***/ ((module) => {

module.exports = () => "abc";

module.exports.def = "def";


/***/ }),
/* 12 */
/*!***************************************************************!*\
  !*** ./cjs-tree-shaking/exports/exports-default-bailout.js?5 ***!
  \***************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 9:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 9:0-30 */
/***/ ((module) => {

class Test {
	getString() {
		return "hello";
	}
}

const getExports = () => ({ default: Test });

module.exports = getExports();


/***/ }),
/* 13 */
/*!***************************************************************!*\
  !*** ./cjs-tree-shaking/exports/exports-default-bailout.js?6 ***!
  \***************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 9:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 9:0-30 */
/***/ ((module) => {

class Test {
	getString() {
		return "hello";
	}
}

const getExports = () => ({ default: Test });

module.exports = getExports();


/***/ }),
/* 14 */
/*!***********************************************************************!*\
  !*** ./cjs-tree-shaking/exports/exports-default-bailout-flagged.js?7 ***!
  \***********************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 9:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 9:0-30 */
/***/ ((module) => {

class Test {
	getString() {
		return "hello";
	}
}

const getExports = () => ({ __esModule: true, default: Test });

module.exports = getExports();


/***/ }),
/* 15 */
/*!***********************************************************************!*\
  !*** ./cjs-tree-shaking/exports/exports-default-bailout-flagged.js?8 ***!
  \***********************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 9:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 9:0-30 */
/***/ ((module) => {

class Test {
	getString() {
		return "hello";
	}
}

const getExports = () => ({ __esModule: true, default: Test });

module.exports = getExports();


/***/ }),
/* 16 */
/*!*****************************************************!*\
  !*** ./cjs-tree-shaking/exports/require-default.js ***!
  \*****************************************************/
/*! namespace exports */
/*! export hello1 [provided] [used in main] [renamed to KV] */
/*! export hello2 [provided] [used in main] [renamed to nR] */
/*! export hello3 [provided] [used in main] [renamed to kP] */
/*! export hello4 [provided] [used in main] [renamed to Ge] */
/*! export hello5 [provided] [used in main] [renamed to Sn] */
/*! export hello6 [provided] [used in main] [renamed to S$] */
/*! export hello7 [provided] [used in main] [renamed to VC] */
/*! export hello8 [provided] [used in main] [renamed to AR] */
/*! export moduleExportsDefault [provided] [used in main] [renamed to uY] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Statement (VariableDeclaration) with side effects in source code at 1:0-77 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uY": () => (/* binding */ moduleExportsDefault),
/* harmony export */   "KV": () => (/* binding */ hello1),
/* harmony export */   "nR": () => (/* binding */ hello2),
/* harmony export */   "kP": () => (/* binding */ hello3),
/* harmony export */   "Ge": () => (/* binding */ hello4),
/* harmony export */   "Sn": () => (/* binding */ hello5),
/* harmony export */   "S$": () => (/* binding */ hello6),
/* harmony export */   "VC": () => (/* binding */ hello7),
/* harmony export */   "AR": () => (/* binding */ hello8)
/* harmony export */ });
/* harmony import */ var _exports_default_2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exports-default?2 */ 32);
/* harmony import */ var _exports_default_flagged_4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exports-default-flagged?4 */ 34);
/* harmony import */ var _exports_default_bailout_6__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exports-default-bailout?6 */ 13);
/* harmony import */ var _exports_default_bailout_6__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_exports_default_bailout_6__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _exports_default_bailout_flagged_8__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exports-default-bailout-flagged?8 */ 15);
/* harmony import */ var _exports_default_bailout_flagged_8__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_exports_default_bailout_flagged_8__WEBPACK_IMPORTED_MODULE_3__);
const ModuleExportsDefaultTest = (__webpack_require__(/*! ./module-exports-default */ 30)/* ["default"] */ .Z);
const Test1 = (__webpack_require__(/*! ./exports-default?1 */ 31)/* ["default"] */ .Z);

const Test3 = (__webpack_require__(/*! ./exports-default-flagged?3 */ 33)/* ["default"] */ .Z);

const Test5 = (__webpack_require__(/*! ./exports-default-bailout?5 */ 12)["default"]);

const Test7 = (__webpack_require__(/*! ./exports-default-bailout-flagged?7 */ 14)["default"]);

const moduleExportsDefaultTest = new ModuleExportsDefaultTest();
const test1 = new Test1();
const test2 = new _exports_default_2__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z();
const test3 = new Test3();
const test4 = new _exports_default_flagged_4__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z();
const test5 = new Test5();
const test6 = new (_exports_default_bailout_6__WEBPACK_IMPORTED_MODULE_2___default()["default"])();
const test7 = new Test7();
const test8 = new (_exports_default_bailout_flagged_8__WEBPACK_IMPORTED_MODULE_3___default())();
const moduleExportsDefault = moduleExportsDefaultTest.getString();
const hello1 = test1.getString();
const hello2 = test2.getString();
const hello3 = test3.getString();
const hello4 = test4.getString();
const hello5 = test5.getString();
const hello6 = test6.getString();
const hello7 = test7.getString();
const hello8 = test8.getString();


/***/ }),
/* 17 */,
/* 18 */
/*!***************************************************************!*\
  !*** ./cjs-tree-shaking/exports/assign-exports-property.js?1 ***!
  \***************************************************************/
/*! default exports */
/*! export abc [provided] [used in main] [renamed to O] */
/*! export def [provided] [unused] [renamed to N] */
/*! runtime requirements: __webpack_exports__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-20 */
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;
exports.O = "abc";
__webpack_unused_export__ = "def";


/***/ }),
/* 19 */
/*!***************************************************************!*\
  !*** ./cjs-tree-shaking/exports/assign-exports-property.js?2 ***!
  \***************************************************************/
/*! default exports */
/*! export abc [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export def [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_exports__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-20 */
/***/ ((__unused_webpack_module, exports) => {

exports.abc = "abc";
exports.def = "def";


/***/ }),
/* 20 */
/*!**********************************************************************!*\
  !*** ./cjs-tree-shaking/exports/assign-module-exports-property.js?1 ***!
  \**********************************************************************/
/*! default exports */
/*! export abc [provided] [used in main] [renamed to O] */
/*! export def [provided] [unused] [renamed to N] */
/*! runtime requirements: module */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-27 */
/***/ ((module) => {

var __webpack_unused_export__;
module.exports.O = "abc";
__webpack_unused_export__ = "def";


/***/ }),
/* 21 */
/*!**********************************************************************!*\
  !*** ./cjs-tree-shaking/exports/assign-module-exports-property.js?2 ***!
  \**********************************************************************/
/*! default exports */
/*! export abc [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export def [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-27 */
/***/ ((module) => {

module.exports.abc = "abc";
module.exports.def = "def";


/***/ }),
/* 22 */
/*!************************************************************!*\
  !*** ./cjs-tree-shaking/exports/assign-this-property.js?1 ***!
  \************************************************************/
/*! default exports */
/*! export abc [provided] [used in main] [renamed to O] */
/*! export def [provided] [unused] [renamed to N] */
/*! runtime requirements: top-level-this-exports */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-17 */
/***/ (function() {

var __webpack_unused_export__;
this.O = "abc";
__webpack_unused_export__ = "def";


/***/ }),
/* 23 */
/*!************************************************************!*\
  !*** ./cjs-tree-shaking/exports/assign-this-property.js?2 ***!
  \************************************************************/
/*! default exports */
/*! export abc [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export def [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: top-level-this-exports */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-17 */
/***/ (function() {

this.abc = "abc";
this.def = "def";


/***/ }),
/* 24 */
/*!***************************************************************!*\
  !*** ./cjs-tree-shaking/exports/define-exports-property.js?1 ***!
  \***************************************************************/
/*! default exports */
/*! export abc [provided] [used in main] [renamed to O] */
/*! export def [provided] [unused] [renamed to N] */
/*! runtime requirements: __webpack_exports__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-74 */
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;
Object.defineProperty(exports, "O", ({ enumerable: true, value: "abc" }));
__webpack_unused_export__ = ({ enumerable: true, value: "def" });


/***/ }),
/* 25 */
/*!***************************************************************!*\
  !*** ./cjs-tree-shaking/exports/define-exports-property.js?2 ***!
  \***************************************************************/
/*! default exports */
/*! export abc [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export def [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_exports__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-74 */
/***/ ((__unused_webpack_module, exports) => {

Object.defineProperty(exports, "abc", ({ enumerable: true, value: "abc" }));
Object.defineProperty(exports, "def", ({ enumerable: true, value: "def" }));


/***/ }),
/* 26 */
/*!**********************************************************************!*\
  !*** ./cjs-tree-shaking/exports/define-module-exports-property.js?1 ***!
  \**********************************************************************/
/*! default exports */
/*! export abc [provided] [used in main] [renamed to O] */
/*! export def [provided] [unused] [renamed to N] */
/*! runtime requirements: module */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-4:3 */
/***/ ((module) => {

var __webpack_unused_export__;
Object.defineProperty(module.exports, "O", ({
	enumerable: true,
	value: "abc"
}));
__webpack_unused_export__ = ({
	enumerable: true,
	value: "def"
});


/***/ }),
/* 27 */
/*!**********************************************************************!*\
  !*** ./cjs-tree-shaking/exports/define-module-exports-property.js?2 ***!
  \**********************************************************************/
/*! default exports */
/*! export abc [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export def [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-4:3 */
/***/ ((module) => {

Object.defineProperty(module.exports, "abc", ({
	enumerable: true,
	value: "abc"
}));
Object.defineProperty(module.exports, "def", ({
	enumerable: true,
	value: "def"
}));


/***/ }),
/* 28 */
/*!************************************************************!*\
  !*** ./cjs-tree-shaking/exports/define-this-property.js?1 ***!
  \************************************************************/
/*! default exports */
/*! export abc [provided] [used in main] [renamed to O] */
/*! export def [provided] [unused] [renamed to N] */
/*! runtime requirements: top-level-this-exports */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-71 */
/***/ (function() {

var __webpack_unused_export__;
Object.defineProperty(this, "O", ({ enumerable: true, value: "abc" }));
__webpack_unused_export__ = ({ enumerable: true, value: "def" });


/***/ }),
/* 29 */
/*!************************************************************!*\
  !*** ./cjs-tree-shaking/exports/define-this-property.js?2 ***!
  \************************************************************/
/*! default exports */
/*! export abc [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export def [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: top-level-this-exports */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-71 */
/***/ (function() {

Object.defineProperty(this, "abc", ({ enumerable: true, value: "abc" }));
Object.defineProperty(this, "def", ({ enumerable: true, value: "def" }));


/***/ }),
/* 30 */
/*!************************************************************!*\
  !*** ./cjs-tree-shaking/exports/module-exports-default.js ***!
  \************************************************************/
/*! default exports */
/*! export default [provided] [used in main] [renamed to Z] */
/*! runtime requirements: module */
/*! Statement (ExpressionStatement) with side effects in source code at 7:0-30 */
/***/ ((module) => {

class Test {
    getString() {
        return "hello";
    }
}

module.exports.Z = Test;


/***/ }),
/* 31 */
/*!*******************************************************!*\
  !*** ./cjs-tree-shaking/exports/exports-default.js?1 ***!
  \*******************************************************/
/*! default exports */
/*! export default [provided] [used in main] [renamed to Z] */
/*! runtime requirements: __webpack_exports__ */
/*! Statement (ExpressionStatement) with side effects in source code at 7:0-23 */
/***/ ((__unused_webpack_module, exports) => {

class Test {
	getString() {
		return "hello";
	}
}

exports.Z = Test;


/***/ }),
/* 32 */
/*!*******************************************************!*\
  !*** ./cjs-tree-shaking/exports/exports-default.js?2 ***!
  \*******************************************************/
/*! default exports */
/*! export default [provided] [used in main] [renamed to Z] */
/*! runtime requirements: __webpack_exports__ */
/*! Statement (ExpressionStatement) with side effects in source code at 7:0-23 */
/***/ ((__unused_webpack_module, exports) => {

class Test {
	getString() {
		return "hello";
	}
}

exports.Z = Test;


/***/ }),
/* 33 */
/*!***************************************************************!*\
  !*** ./cjs-tree-shaking/exports/exports-default-flagged.js?3 ***!
  \***************************************************************/
/*! flagged exports */
/*! export __esModule [provided] [unused] [renamed to X] */
/*! export default [provided] [used in main] [renamed to Z] */
/*! runtime requirements: __webpack_exports__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-62 */
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;
__webpack_unused_export__ = ({ value: true });
class Test {
	getString() {
		return "hello";
	}
}

exports.Z = Test;


/***/ }),
/* 34 */
/*!***************************************************************!*\
  !*** ./cjs-tree-shaking/exports/exports-default-flagged.js?4 ***!
  \***************************************************************/
/*! flagged exports */
/*! export __esModule [provided] [unused] [renamed to X] */
/*! export default [provided] [used in main] [renamed to Z] */
/*! runtime requirements: __webpack_exports__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-62 */
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;
__webpack_unused_export__ = ({ value: true });
class Test {
	getString() {
		return "hello";
	}
}

exports.Z = Test;


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************************!*\
  !*** ./cjs-tree-shaking/exports/index.js ***!
  \*******************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-7:3 */
it("should allow to export via exports", () => {
	expect((__webpack_require__(/*! ./assign-exports-property?1 */ 18)/* .abc */ .O)).toBe("abc");
	expect(__webpack_require__(/*! ./assign-exports-property?2 */ 19)).toEqual({
		abc: "abc",
		def: "def"
	});
});

it("should allow to export via module.exports", () => {
	expect((__webpack_require__(/*! ./assign-module-exports-property?1 */ 20)/* .abc */ .O)).toBe("abc");
	expect(__webpack_require__(/*! ./assign-module-exports-property?2 */ 21)).toEqual({
		abc: "abc",
		def: "def"
	});
});

it("should allow to export via this", () => {
	expect((__webpack_require__(/*! ./assign-this-property?1 */ 22)/* .abc */ .O)).toBe("abc");
	expect(__webpack_require__(/*! ./assign-this-property?2 */ 23)).toEqual({
		abc: "abc",
		def: "def"
	});
});

it("should allow to export via define property on exports", () => {
	expect((__webpack_require__(/*! ./define-exports-property?1 */ 24)/* .abc */ .O)).toBe("abc");
	expect(__webpack_require__(/*! ./define-exports-property?2 */ 25)).toEqual({
		abc: "abc",
		def: "def"
	});
});

it("should allow to export via define property on module.exports", () => {
	expect((__webpack_require__(/*! ./define-module-exports-property?1 */ 26)/* .abc */ .O)).toBe("abc");
	expect(__webpack_require__(/*! ./define-module-exports-property?2 */ 27)).toEqual({
		abc: "abc",
		def: "def"
	});
});

it("should allow to export via define property on this", () => {
	expect((__webpack_require__(/*! ./define-this-property?1 */ 28)/* .abc */ .O)).toBe("abc");
	expect(__webpack_require__(/*! ./define-this-property?2 */ 29)).toEqual({
		abc: "abc",
		def: "def"
	});
});

it("should allow to read own exports via exports", () => {
	var test = (__webpack_require__(/*! ./reading-self-from-exports */ 3)/* .test */ .B);
	expect(test()).toBe("abc");
});

it("should allow to read own exports via module.exports", () => {
	var test = (__webpack_require__(/*! ./reading-self-from-module-exports */ 4)/* .test */ .B);
	expect(test()).toBe("abc");
});

it("should allow to read own exports via this", () => {
	var test = (__webpack_require__(/*! ./reading-self-from-this */ 5)/* .test */ .B);
	expect(test()).toBe("abc");
});

it("should allow to attach exports to object", () => {
	expect((__webpack_require__(/*! ./attach-to-object?1 */ 6).abc)).toBe("abc");
	expect((__webpack_require__(/*! ./attach-to-object?2 */ 7).def)).toBe("def");
	expect((__webpack_require__(/*! ./attach-to-object?3 */ 0).abc)).toBe("abc");
	expect((__webpack_require__(/*! ./attach-to-object?3 */ 0).def)).toBe("def");
});

it("should allow to attach exports to function", () => {
	expect(__webpack_require__(/*! ./attach-to-function?1 */ 8)()).toBe("abc");
	expect((__webpack_require__(/*! ./attach-to-function?2 */ 9).def)).toBe("def");
	expect(__webpack_require__(/*! ./attach-to-function?3 */ 1)()).toBe("abc");
	expect((__webpack_require__(/*! ./attach-to-function?3 */ 1).def)).toBe("def");
});

it("should allow to attach exports to arrow function", () => {
	expect(__webpack_require__(/*! ./attach-to-arrow-function?1 */ 10)()).toBe("abc");
	expect((__webpack_require__(/*! ./attach-to-arrow-function?2 */ 11).def)).toBe("def");
	expect(__webpack_require__(/*! ./attach-to-arrow-function?3 */ 2)()).toBe("abc");
	expect((__webpack_require__(/*! ./attach-to-arrow-function?3 */ 2).def)).toBe("def");
});

it("should properly handle export / require `default`", () => {
	expect((__webpack_require__(/*! ./require-default */ 16)/* .moduleExportsDefault */ .uY)).toBe("hello");
	expect((__webpack_require__(/*! ./require-default */ 16)/* .hello1 */ .KV)).toBe("hello");
	expect((__webpack_require__(/*! ./require-default */ 16)/* .hello2 */ .nR)).toBe("hello");
	expect((__webpack_require__(/*! ./require-default */ 16)/* .hello3 */ .kP)).toBe("hello");
	expect((__webpack_require__(/*! ./require-default */ 16)/* .hello4 */ .Ge)).toBe("hello");
	expect((__webpack_require__(/*! ./require-default */ 16)/* .hello5 */ .Sn)).toBe("hello");
	expect((__webpack_require__(/*! ./require-default */ 16)/* .hello6 */ .S$)).toBe("hello");
	expect((__webpack_require__(/*! ./require-default */ 16)/* .hello7 */ .VC)).toBe("hello");
	expect((__webpack_require__(/*! ./require-default */ 16)/* .hello8 */ .AR)).toBe("hello");
});

})();

/******/ })()
;