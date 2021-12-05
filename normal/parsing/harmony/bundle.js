/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/*!**************************************************!*\
  !*** ./parsing/harmony/node_modules/commonjs.js ***!
  \**************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-3:1 */
/***/ ((module) => {

module.exports = function Thing() {
	return "thing";
}

module.exports.Other = "other";

/***/ }),
/* 1 */
/*!*****************************************************!*\
  !*** ./parsing/harmony/node_modules/exportKinds.js ***!
  \*****************************************************/
/*! namespace exports */
/*! export fn [provided] [used in main] [could be renamed] */
/*! export one [provided] [used in main] [renamed to J_] */
/*! export test1 [provided] [used in main] [renamed to xc] */
/*! export test2 [provided] [used in main] [renamed to xB] */
/*! export two [provided] [used in main] [renamed to ak] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Statement (ExportNamedDeclaration) with side effects in source code at 6:0-24 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fn": () => (/* binding */ fn),
/* harmony export */   "J_": () => (/* binding */ one),
/* harmony export */   "ak": () => (/* binding */ two),
/* harmony export */   "xc": () => (/* binding */ test1),
/* harmony export */   "xB": () => (/* binding */ test2)
/* harmony export */ });
function fn() {
	return "fn";
}
var one = "one", two = "two";

var test1 = fn();
var test2 = two;


/***/ }),
/* 2 */
/*!***********************************************!*\
  !*** ./parsing/harmony/node_modules/abc_c.js ***!
  \***********************************************/
/*! namespace exports */
/*! export c [provided] [used in main] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ c)
/* harmony export */ });
var c = "c";


/***/ }),
/* 3 */
/*!******************************************************!*\
  !*** ./parsing/harmony/node_modules/circularEven.js ***!
  \******************************************************/
/*! namespace exports */
/*! export default [provided] [used in main] [renamed to Z] */
/*! export even [provided] [used in main] [renamed to z] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Statement (ExportDefaultDeclaration) with side effects in source code at 3:0-22 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "z": () => (/* binding */ even)
/* harmony export */ });
/* harmony import */ var circularOdd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! circularOdd */ 8);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,circularOdd__WEBPACK_IMPORTED_MODULE_0__/* .odd */ .o)(3));

function even(n) {
	if(n == 0) return true;
	return (0,circularOdd__WEBPACK_IMPORTED_MODULE_0__/* .odd */ .o)(n - 1);
}


/***/ }),
/* 4 */
/*!*********************************************!*\
  !*** ./parsing/harmony/node_modules/abc.js ***!
  \*********************************************/
/*! namespace exports */
/*! export a [provided] [used in main] [usage prevents renaming] */
/*! export b [provided] [used in main] [usage prevents renaming] */
/*! export c [provided] [used in main] [usage prevents renaming] -> ./parsing/harmony/node_modules/abc_c.js .c */
/*! export d [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./parsing/harmony/node_modules/abc_c.js */
/*!   export c [provided] [used in main] [usage prevents renaming] */
/*!   other exports [not provided] [maybe used in main (runtime-defined)] */
/*! export e [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./parsing/harmony/node_modules/abc_c.js .c */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ a),
/* harmony export */   "b": () => (/* binding */ b),
/* harmony export */   "c": () => (/* reexport safe */ _abc_c__WEBPACK_IMPORTED_MODULE_0__.c),
/* harmony export */   "d": () => (/* reexport module object */ _abc_c__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   "e": () => (/* reexport safe */ _abc_c__WEBPACK_IMPORTED_MODULE_0__.c)
/* harmony export */ });
/* harmony import */ var _abc_c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abc_c */ 2);
var a = "a";
var b = "b";









/***/ }),
/* 5 */
/*!********************************************************!*\
  !*** ./parsing/harmony/node_modules/commonjs-trans.js ***!
  \********************************************************/
/*! flagged exports */
/*! export Other [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export __esModule [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export default [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_exports__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-26 */
/***/ ((__unused_webpack_module, exports) => {

exports.__esModule = true;

exports["default"] = function Thing() {
	this.value = "thing";
};

exports.Other = "other";


/***/ }),
/* 6 */,
/* 7 */
/*!**************************************************!*\
  !*** ./parsing/harmony/node_modules/reexport.js ***!
  \**************************************************/
/*! namespace exports */
/*! export a [provided] [used in main] [could be renamed] -> ./parsing/harmony/node_modules/abc.js .a */
/*! export b [provided] [used in main] [could be renamed] -> ./parsing/harmony/node_modules/abc.js .b */
/*! export c [provided] [used in main] [could be renamed] -> ./parsing/harmony/node_modules/abc_c.js .c */
/*! export d [provided] [unused] [could be renamed] -> ./parsing/harmony/node_modules/abc_c.js */
/*!   export c [provided] [used in main] [usage prevents renaming] */
/*!   other exports [not provided] [maybe used in main (runtime-defined)] */
/*! export def [provided] [used in main] [renamed to N] -> ./parsing/harmony/node_modules/commonjs.js .default */
/*! export e [provided] [unused] [could be renamed] -> ./parsing/harmony/node_modules/abc_c.js .c */
/*! export o [provided] [used in main] [could be renamed] -> ./parsing/harmony/node_modules/exportKinds.js .one */
/*! export two [provided] [used in main] [renamed to l] -> ./parsing/harmony/node_modules/exportKinds.js .two */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.n, __webpack_require__.* */
/*! Dependency (harmony side effect evaluation) with side effects at 2:0-44 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* reexport safe */ abc__WEBPACK_IMPORTED_MODULE_0__.a),
/* harmony export */   "b": () => (/* reexport safe */ abc__WEBPACK_IMPORTED_MODULE_0__.b),
/* harmony export */   "c": () => (/* reexport safe */ abc__WEBPACK_IMPORTED_MODULE_0__.c),
/* harmony export */   "o": () => (/* reexport safe */ exportKinds__WEBPACK_IMPORTED_MODULE_1__.J_),
/* harmony export */   "l": () => (/* reexport safe */ exportKinds__WEBPACK_IMPORTED_MODULE_1__.ak),
/* harmony export */   "N": () => (/* reexport default from dynamic */ commonjs__WEBPACK_IMPORTED_MODULE_2___default.a)
/* harmony export */ });
/* harmony import */ var abc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! abc */ 4);
/* harmony import */ var exportKinds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! exportKinds */ 1);
/* harmony import */ var commonjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! commonjs */ 0);
/* harmony import */ var commonjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(commonjs__WEBPACK_IMPORTED_MODULE_2__);




/***/ }),
/* 8 */
/*!*****************************************************!*\
  !*** ./parsing/harmony/node_modules/circularOdd.js ***!
  \*****************************************************/
/*! namespace exports */
/*! export odd [provided] [used in main] [renamed to o] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Dependency (harmony side effect evaluation) with side effects at 1:0-36 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ odd)
/* harmony export */ });
/* harmony import */ var circularEven__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! circularEven */ 3);


function odd(n) {
	if(n == 0) return false;
	return (0,circularEven__WEBPACK_IMPORTED_MODULE_0__/* .even */ .z)(n - 1);
}


/***/ }),
/* 9 */
/*!*********************************************!*\
  !*** ./parsing/harmony/node_modules/def.js ***!
  \*********************************************/
/*! namespace exports */
/*! export default [provided] [used in main] [renamed to Z] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("def");

/***/ }),
/* 10 */
/*!***********************************************************!*\
  !*** ./parsing/harmony/node_modules/exports-specifier.js ***!
  \***********************************************************/
/*! namespace exports */
/*! export specA [provided] [used in main] [renamed to W] */
/*! export specB [provided] [used in main] [renamed to q] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ specA),
/* harmony export */   "q": () => (/* binding */ b)
/* harmony export */ });
var specA = 1, b = 2;



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
/*!**********************************!*\
  !*** ./parsing/harmony/index.js ***!
  \**********************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 28:0-30:3 */
/* harmony import */ var abc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reexport2 */ 4);
/* harmony import */ var abc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! abc */ 2);
/* harmony import */ var exportKinds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! exportKinds */ 1);
/* harmony import */ var reexport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reexport */ 7);
/* harmony import */ var circularEven__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! circularEven */ 3);
/* harmony import */ var exports_specifier__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! exports-specifier */ 10);
/* harmony import */ var commonjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! commonjs */ 0);
/* harmony import */ var commonjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(commonjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var commonjs_trans__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! commonjs-trans */ 5);
/* harmony import */ var def__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! def */ 9);



























it("should import a default export from a module", function() {
	expect(def__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z).toBe("def");
});

it("should import an identifier from a module", function() {
	expect(abc__WEBPACK_IMPORTED_MODULE_6__.a).toBe("a");
	expect(abc__WEBPACK_IMPORTED_MODULE_6__.b).toBe("b");
});

it("should import a whole module", function() {
	expect(abc__WEBPACK_IMPORTED_MODULE_6__.a).toBe("a");
	expect(abc__WEBPACK_IMPORTED_MODULE_6__.b).toBe("b");
	expect(abc__WEBPACK_IMPORTED_MODULE_7__.c).toBe("c");
	expect(abc__WEBPACK_IMPORTED_MODULE_7__.c).toBe("c");
	expect(abc__WEBPACK_IMPORTED_MODULE_7__.c).toBe("c");
	var copy = (function(a) { return a; }(abc__WEBPACK_IMPORTED_MODULE_6__));
	expect(copy.a).toBe("a");
	expect(copy.b).toBe("b");
	expect(copy.c).toBe("c");
	expect(copy.d.c).toBe("c");
	expect(copy.e).toBe("c");
	expect((typeof abc__WEBPACK_IMPORTED_MODULE_6__)).toBe("object");
	expect("" + abc__WEBPACK_IMPORTED_MODULE_6__).toBe("[object Module]");
});

it("should export functions", function() {
	expect(exportKinds__WEBPACK_IMPORTED_MODULE_0__.fn).toBeTypeOf("function");
	expect((0,exportKinds__WEBPACK_IMPORTED_MODULE_0__.fn)()).toBe("fn");
	expect((exportKinds__WEBPACK_IMPORTED_MODULE_0__.fn === exportKinds__WEBPACK_IMPORTED_MODULE_0__.fn)).toBe(true);
});

it("should multiple variables with one statement", function() {
	expect(exportKinds__WEBPACK_IMPORTED_MODULE_0__/* .one */ .J_).toBe("one");
	expect(exportKinds__WEBPACK_IMPORTED_MODULE_0__/* .two */ .ak).toBe("two");
});

it("should still be able to use exported stuff", function() {
	expect(exportKinds__WEBPACK_IMPORTED_MODULE_0__/* .test1 */ .xc).toBe("fn");
	expect(exportKinds__WEBPACK_IMPORTED_MODULE_0__/* .test2 */ .xB).toBe("two");
});

it("should reexport a module", function() {
	expect(reexport__WEBPACK_IMPORTED_MODULE_1__.a).toBe("a");
	expect(reexport__WEBPACK_IMPORTED_MODULE_1__.b).toBe("b");
	expect(reexport__WEBPACK_IMPORTED_MODULE_1__.c).toBe("c");
	expect(reexport__WEBPACK_IMPORTED_MODULE_1__.o).toBe("one");
	expect(reexport__WEBPACK_IMPORTED_MODULE_1__/* .two */ .l).toBe("two");
	expect(abc__WEBPACK_IMPORTED_MODULE_6__.a).toBe("a");
});

it("should support circular dependencies", function() {
	expect(circularEven__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z).toBe(true);
	expect((0,circularEven__WEBPACK_IMPORTED_MODULE_2__/* .even */ .z)(4)).toBe(true);
});

it("should support export specifier", function() {
	expect(exports_specifier__WEBPACK_IMPORTED_MODULE_8__/* .specA */ .W).toBe(1);
	expect(exports_specifier__WEBPACK_IMPORTED_MODULE_8__/* .specB */ .q).toBe(2);
});

it("should be able to import commonjs", function() {
	function x() { throw new Error("should not be executed"); }
	// next line doesn't end with semicolon
	x
	;(commonjs__WEBPACK_IMPORTED_MODULE_3___default())
	expect((commonjs__WEBPACK_IMPORTED_MODULE_3___default())).toBeTypeOf("function");
	x
	commonjs__WEBPACK_IMPORTED_MODULE_3___default()()
	expect(commonjs__WEBPACK_IMPORTED_MODULE_3___default()()).toBe("thing");
	x
	commonjs__WEBPACK_IMPORTED_MODULE_3__.Other
	expect(commonjs__WEBPACK_IMPORTED_MODULE_3__.Other).toBe("other");

	expect(commonjs_trans__WEBPACK_IMPORTED_MODULE_4__["default"]).toBeTypeOf("function");
	expect(new commonjs_trans__WEBPACK_IMPORTED_MODULE_4__["default"]().value).toBe("thing");
	expect(commonjs_trans__WEBPACK_IMPORTED_MODULE_4__.Other).toBe("other");
	expect((0,reexport__WEBPACK_IMPORTED_MODULE_1__/* .def */ .N)()).toBe("thing");
});

it("should be able to import commonjs with star import", function() {
	var copyOfCommonjs = commonjs__WEBPACK_IMPORTED_MODULE_3__;
	expect(commonjs__WEBPACK_IMPORTED_MODULE_3__()).toBe("thing");
	expect(commonjs__WEBPACK_IMPORTED_MODULE_3__.Other).toBe("other");
	expect(copyOfCommonjs()).toBe("thing");
	expect(copyOfCommonjs.Other).toBe("other");
	var copyOfCommonjsTrans = commonjs_trans__WEBPACK_IMPORTED_MODULE_4__;
	expect(new commonjs_trans__WEBPACK_IMPORTED_MODULE_4__["default"]().value).toBe("thing");
	expect(commonjs_trans__WEBPACK_IMPORTED_MODULE_4__.Other).toBe("other");
	expect(new copyOfCommonjsTrans.default().value).toBe("thing");
	expect(copyOfCommonjsTrans.Other).toBe("other");
});

})();

/******/ })()
;