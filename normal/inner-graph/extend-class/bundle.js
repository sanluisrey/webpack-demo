/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/*!******************************************!*\
  !*** ./inner-graph/extend-class/dep2.js ***!
  \******************************************/
/*! namespace exports */
/*! export A [provided] [used in main] [could be renamed] */
/*! export B [provided] [used in main] [could be renamed] */
/*! export C [provided] [used in main] [could be renamed] */
/*! export Y [provided] [used in main] [could be renamed] */
/*! export Z [provided] [used in main] [could be renamed] */
/*! export exportsInfoForA [provided] [used in main] [renamed to O0] */
/*! export exportsInfoForB [provided] [used in main] [renamed to fu] */
/*! export exportsInfoForC [provided] [used in main] [renamed to R1] */
/*! export exportsInfoForMixin1 [provided] [used in main] [renamed to iu] */
/*! export exportsInfoForMixin2 [provided] [used in main] [renamed to Lr] */
/*! export exportsInfoForMixin3 [provided] [used in main] [renamed to vK] */
/*! export exportsInfoForY [provided] [used in main] [renamed to Kf] */
/*! export exportsInfoForZ [provided] [used in main] [renamed to OC] */
/*! export mixin1 [provided] [used in main] [renamed to UC] */
/*! export mixin2 [provided] [used in main] [renamed to _w] */
/*! export mixin3 [provided] [used in main] [renamed to Vi] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Statement (ExportNamedDeclaration) with side effects in source code at 10:0-63 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ A),
/* harmony export */   "B": () => (/* binding */ B),
/* harmony export */   "C": () => (/* binding */ C),
/* harmony export */   "Y": () => (/* binding */ Y),
/* harmony export */   "Z": () => (/* binding */ Z),
/* harmony export */   "UC": () => (/* binding */ mixin1),
/* harmony export */   "_w": () => (/* binding */ mixin2),
/* harmony export */   "Vi": () => (/* binding */ mixin3),
/* harmony export */   "O0": () => (/* binding */ exportsInfoForA),
/* harmony export */   "fu": () => (/* binding */ exportsInfoForB),
/* harmony export */   "R1": () => (/* binding */ exportsInfoForC),
/* harmony export */   "Kf": () => (/* binding */ exportsInfoForY),
/* harmony export */   "OC": () => (/* binding */ exportsInfoForZ),
/* harmony export */   "iu": () => (/* binding */ exportsInfoForMixin1),
/* harmony export */   "Lr": () => (/* binding */ exportsInfoForMixin2),
/* harmony export */   "vK": () => (/* binding */ exportsInfoForMixin3)
/* harmony export */ });
const A = class A {};
class B {}
class C {}
class Y {}
class Z {}
function mixin1(_class) {return _class}
function mixin2(_class) {return _class}
function mixin3(_class) {return _class}

const exportsInfoForA = true;
const exportsInfoForB = true;
const exportsInfoForC = true;
const exportsInfoForY = true;
const exportsInfoForZ = true;
const exportsInfoForMixin1 = true;
const exportsInfoForMixin2 = true;
const exportsInfoForMixin3 = true;


/***/ }),
/* 1 */,
/* 2 */
/*!*********************************************!*\
  !*** ./inner-graph/extend-class/module1.js ***!
  \*********************************************/
/*! namespace exports */
/*! export default [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/*! Statement (ExportDefaultDeclaration) with side effects in source code at 3:0-24 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dep1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dep1 */ 3);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new _dep1__WEBPACK_IMPORTED_MODULE_0__.A1());


/***/ }),
/* 3 */
/*!******************************************!*\
  !*** ./inner-graph/extend-class/dep1.js ***!
  \******************************************/
/*! namespace exports */
/*! export A1 [provided] [used in main] [could be renamed] */
/*! export E [provided] [unused] [could be renamed] */
/*! export Z1 [provided] [unused] [could be renamed] */
/*! export isZ [provided] [unused] [renamed to w] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Statement (ExportNamedDeclaration) with side effects in source code at 22:0-43 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A1": () => (/* binding */ A1)
/* harmony export */ });
/* unused harmony exports Z1, E, isZ */
/* harmony import */ var _dep2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dep2 */ 0);


const A1 = class A1 extends _dep2__WEBPACK_IMPORTED_MODULE_0__.A {
	render() {return new E();}
};

class B1 extends _dep2__WEBPACK_IMPORTED_MODULE_0__.B {
	render() {return new D();}
}

class Z1 extends _dep2__WEBPACK_IMPORTED_MODULE_0__.Z {}

class E {}
class D {
	foo() {
		class B2 extends _dep2__WEBPACK_IMPORTED_MODULE_0__.B {}

		return B2;
	}
}

const isZ = (new Z1()) instanceof _dep2__WEBPACK_IMPORTED_MODULE_0__.Z;


/***/ }),
/* 4 */
/*!*********************************************!*\
  !*** ./inner-graph/extend-class/module2.js ***!
  \*********************************************/
/*! namespace exports */
/*! export default [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/*! Statement (ExportDefaultDeclaration) with side effects in source code at 3:0-24 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dep3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dep3 */ 5);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new _dep3__WEBPACK_IMPORTED_MODULE_0__.A1());


/***/ }),
/* 5 */
/*!******************************************!*\
  !*** ./inner-graph/extend-class/dep3.js ***!
  \******************************************/
/*! namespace exports */
/*! export A1 [provided] [used in main] [could be renamed] */
/*! export B1 [provided] [unused] [could be renamed] */
/*! export C1 [provided] [unused] [could be renamed] */
/*! export E [provided] [unused] [could be renamed] */
/*! export Y1 [provided] [unused] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Statement (ExportNamedDeclaration) with side effects in source code at 11:0-13:2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A1": () => (/* binding */ A1)
/* harmony export */ });
/* unused harmony exports B1, C1, Y1, E */
/* harmony import */ var _dep2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dep2 */ 0);


const A1 = class A1 extends _dep2__WEBPACK_IMPORTED_MODULE_0__.A {
	render() {return new E();}
};

const B1 = class B1 extends /*#__PURE__*/ (0,_dep2__WEBPACK_IMPORTED_MODULE_0__/* .mixin1 */ .UC)(_dep2__WEBPACK_IMPORTED_MODULE_0__.B) {
	render() {return new E();}
};

const C1 = class C1 extends (0,_dep2__WEBPACK_IMPORTED_MODULE_0__/* .mixin2 */ ._w)(_dep2__WEBPACK_IMPORTED_MODULE_0__.Y, /*#__PURE__*/ (0,_dep2__WEBPACK_IMPORTED_MODULE_0__/* .mixin3 */ .Vi)(_dep2__WEBPACK_IMPORTED_MODULE_0__.C)) {
	render() {return new D();}
};

class Y1 extends (0,_dep2__WEBPACK_IMPORTED_MODULE_0__/* .mixin2 */ ._w)(_dep2__WEBPACK_IMPORTED_MODULE_0__.Y) {
	constructor() {
		super();

		this.innerClass = class B2 extends (0,_dep2__WEBPACK_IMPORTED_MODULE_0__/* .mixin1 */ .UC)(_dep2__WEBPACK_IMPORTED_MODULE_0__.B) {};
	}

	render() {return new D();}
}

class E {}
const D = class D {};


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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************************!*\
  !*** ./inner-graph/extend-class/index.js ***!
  \*******************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 12:0-15:3 */
/* harmony import */ var _dep2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dep2 */ 0);


it("should load modules correctly", () => {
	__webpack_require__(/*! ./module1 */ 2);
	__webpack_require__(/*! ./module2 */ 4);
});

if (process.env.NODE_ENV === "production") {
	it("B should not be used", () => {
		expect(_dep2__WEBPACK_IMPORTED_MODULE_0__/* .exportsInfoForB */ .fu).toBe(false);
	});
}

it("A should be used", () => {
	expect(_dep2__WEBPACK_IMPORTED_MODULE_0__/* .exportsInfoForA */ .O0).toBe(true);
});

it("Z used, inner graph can not determine const usage", () => {
	expect(_dep2__WEBPACK_IMPORTED_MODULE_0__/* .exportsInfoForZ */ .OC).toBe(true);
});

it("Pure super expression should be unused, another used", () => {
	if (process.env.NODE_ENV === "production") {
		expect(_dep2__WEBPACK_IMPORTED_MODULE_0__/* .exportsInfoForMixin1 */ .iu).toBe(false);
	}

	expect(_dep2__WEBPACK_IMPORTED_MODULE_0__/* .exportsInfoForMixin2 */ .Lr).toBe(true);
	expect(_dep2__WEBPACK_IMPORTED_MODULE_0__/* .exportsInfoForMixin3 */ .vK).toBe(true);
	expect(_dep2__WEBPACK_IMPORTED_MODULE_0__/* .exportsInfoForC */ .R1).toBe(true);
	expect(_dep2__WEBPACK_IMPORTED_MODULE_0__/* .exportsInfoForY */ .Kf).toBe(true);
});

})();

/******/ })()
;