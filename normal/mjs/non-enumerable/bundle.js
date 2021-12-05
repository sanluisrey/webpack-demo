/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/*!********************************************!*\
  !*** ./mjs/non-enumerable/weird-module.js ***!
  \********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__ */
/*! CommonJS bailout: exports is used directly at 5:0-7 */
/*! CommonJS bailout: exports is used directly at 7:22-29 */
/*! Statement (VariableDeclaration) with side effects in source code at 1:0-26 */
/***/ ((__unused_webpack_module, exports) => {

const sym = Symbol("sym");
exports.sym = sym;
exports.prop = true;
Object.defineProperty(exports, "nonEnumerable", ({ value: true }));
exports[sym] = true;
const p = { protoProp: true, [sym]: true };
Object.setPrototypeOf(exports, p);
Object.defineProperty(p, "nonEnumerablePrototype", { value: true });


/***/ }),
/* 1 */
/*!*************************************************!*\
  !*** ./mjs/non-enumerable/analysable-module.js ***!
  \*************************************************/
/*! default exports */
/*! export nonEnumerable [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export prop [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_exports__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-20 */
/***/ ((__unused_webpack_module, exports) => {

exports.prop = true;
Object.defineProperty(exports, "nonEnumerable", ({ value: true }));


/***/ }),
/* 2 */
/*!****************************************!*\
  !*** ./mjs/non-enumerable/esModule.js ***!
  \****************************************/
/*! flagged exports */
/*! export __esModule [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export nonEnumerable [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export prop [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_exports__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-62 */
/***/ ((__unused_webpack_module, exports) => {

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.prop = true;
Object.defineProperty(exports, "nonEnumerable", ({ value: true }));


/***/ }),
/* 3 */,
/* 4 */
/*!*************************************************!*\
  !*** ./mjs/non-enumerable/test.js?concatenated ***!
  \*************************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.t, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 8:0-22:3 */
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
var _analysable_module_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
/* harmony import */ var _analysable_module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./analysable-module.js */ 1);
/* harmony import */ var _weird_module_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weird-module.js */ 0);
/* harmony import */ var _weird_module_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_weird_module_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _esModule_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./esModule.js */ 2);







it("should include non-enumerable properties (non-mjs)", () => {
	const ns = /*#__PURE__*/ (_analysable_module_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_analysable_module_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_analysable_module_js__WEBPACK_IMPORTED_MODULE_0__, 2)));

	expect(_analysable_module_js__WEBPACK_IMPORTED_MODULE_0__.prop).toBe(true);
	expect(ns.prop).toBe(true);

	expect(_analysable_module_js__WEBPACK_IMPORTED_MODULE_0__.nonEnumerable).toBe(true);
	expect(ns.nonEnumerable).toBe(true);

	expect(_analysable_module_js__WEBPACK_IMPORTED_MODULE_0__).toBeTypeOf("object");
	expect(ns.default).toBeTypeOf("object");

	expect(/* __esModule */true).toBe(true);
	expect(ns.__esModule).toBe(true);
});

it("should include non-enumerable properties (non-mjs, promise)", () =>
	Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./analysable-module */ 1, 19)).then(m1 => {
		const ns = m1;

		expect(m1.prop).toBe(true);
		expect(ns.prop).toBe(true);

		expect(m1.nonEnumerable).toBe(true);
		expect(ns.nonEnumerable).toBe(true);

		expect(m1.default).toBeTypeOf("object");
		expect(ns.default).toBeTypeOf("object");

		expect(m1.__esModule).toBe(true);
		expect(ns.__esModule).toBe(true);
	}));

it("should not include prototype properties and symbols (non-mjs)", () => {
	const ns = _weird_module_js__WEBPACK_IMPORTED_MODULE_1__; // For historical reasons this doesn't yield a namespace object
	const sym = _weird_module_js__WEBPACK_IMPORTED_MODULE_1__.sym;

	expect(_weird_module_js__WEBPACK_IMPORTED_MODULE_1__.prop).toBe(true);
	expect(ns.prop).toBe(true);

	expect(_weird_module_js__WEBPACK_IMPORTED_MODULE_1__.nonEnumerable).toBe(true);
	expect(ns.nonEnumerable).toBe(true);

	expect(_weird_module_js__WEBPACK_IMPORTED_MODULE_1__.protoProp).toBe(true);
	expect(ns.protoProp).toBe(true);

	expect(_weird_module_js__WEBPACK_IMPORTED_MODULE_1__.nonEnumerablePrototype).toBe(true);
	expect(ns.nonEnumerablePrototype).toBe(true);

	expect(_weird_module_js__WEBPACK_IMPORTED_MODULE_1__[sym]).toBe(true);
	expect(ns[sym]).toBe(true);

	expect((_weird_module_js__WEBPACK_IMPORTED_MODULE_1___default())).toBeTypeOf("object");
	expect(ns.default).toBe(undefined); // This is intentional

	expect(/* __esModule */true).toBe(true);
	expect(ns.__esModule).toBe(undefined); // This is intentional
});

it("should not include prototype properties and symbols (non-mjs, promise)", () =>
	Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./weird-module */ 0, 23)).then(m2 => {
		const ns = m2;
		const sym = m2.sym;

		expect(m2.prop).toBe(true);
		expect(ns.prop).toBe(true);

		expect(m2.nonEnumerable).toBe(true);
		expect(ns.nonEnumerable).toBe(true);

		expect(m2.protoProp).toBe(true);
		expect(ns.protoProp).toBe(true);

		expect(m2.nonEnumerablePrototype).toBe(true);
		expect(ns.nonEnumerablePrototype).toBe(true);

		expect(m2[sym]).toBe(undefined);
		expect(ns[sym]).toBe(undefined);

		expect(m2.default).toBeTypeOf("object");
		expect(ns.default).toBeTypeOf("object");

		expect(m2.__esModule).toBe(true);
		expect(ns.__esModule).toBe(true);
	}));

it("should include non-enumerable properties with __esModule (non-mjs)", () => {
	const ns = _esModule_js__WEBPACK_IMPORTED_MODULE_2__;

	expect(_esModule_js__WEBPACK_IMPORTED_MODULE_2__.prop).toBe(true);
	expect(ns.prop).toBe(true);

	expect(_esModule_js__WEBPACK_IMPORTED_MODULE_2__.nonEnumerable).toBe(true);
	expect(ns.nonEnumerable).toBe(true);

	expect(_esModule_js__WEBPACK_IMPORTED_MODULE_2__["default"]).toBe(undefined);
	expect(ns.default).toBe(undefined);

	expect(_esModule_js__WEBPACK_IMPORTED_MODULE_2__.__esModule).toBe(true);
	expect(ns.__esModule).toBe(true);
});

it("should include non-enumerable properties with __esModule (non-mjs, promise)", () =>
	Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./analysable-module */ 1, 19)).then(m3 => {
		const ns = m3;

		expect(m3.prop).toBe(true);
		expect(ns.prop).toBe(true);

		expect(m3.nonEnumerable).toBe(true);
		expect(ns.nonEnumerable).toBe(true);

		expect(m3.default).toBeTypeOf("object");
		expect(ns.default).toBeTypeOf("object");

		expect(m3.__esModule).toBe(true);
		expect(ns.__esModule).toBe(true);
	}));

it("should not handle __esModule for the default import (non-mjs)", () => {
	expect(_analysable_module_js__WEBPACK_IMPORTED_MODULE_0__.__esModule).toBe(undefined);
	expect(Object(_analysable_module_js__WEBPACK_IMPORTED_MODULE_0__).__esModule).toBe(undefined);

	expect((_weird_module_js__WEBPACK_IMPORTED_MODULE_1___default().__esModule)).toBe(undefined);
	expect(Object((_weird_module_js__WEBPACK_IMPORTED_MODULE_1___default())).__esModule).toBe(undefined);

	expect(_esModule_js__WEBPACK_IMPORTED_MODULE_2__["default"]).toBe(undefined);
});


/***/ }),
/* 5 */
/*!**************************************************!*\
  !*** ./mjs/non-enumerable/test.mjs?concatenated ***!
  \**************************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__, __webpack_require__.t, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 8:0-22:3 */
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
var _analysable_module_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
var _weird_module_js__WEBPACK_IMPORTED_MODULE_1___namespace_cache;
var _esModule_js__WEBPACK_IMPORTED_MODULE_2___namespace_cache;
/* harmony import */ var _analysable_module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./analysable-module.js */ 1);
/* harmony import */ var _weird_module_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weird-module.js */ 0);
/* harmony import */ var _esModule_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./esModule.js */ 2);







it("should include non-enumable properties (mjs)", () => {
	const ns = /*#__PURE__*/ (_analysable_module_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_analysable_module_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_analysable_module_js__WEBPACK_IMPORTED_MODULE_0__, 2)));

	expect(_analysable_module_js__WEBPACK_IMPORTED_MODULE_0__.prop).toBe(true);
	expect(ns.prop).toBe(true);

	expect(_analysable_module_js__WEBPACK_IMPORTED_MODULE_0__.nonEnumerable).toBe(true);
	expect(ns.nonEnumerable).toBe(true);

	expect(_analysable_module_js__WEBPACK_IMPORTED_MODULE_0__).toBeTypeOf("object");
	expect(ns.default).toBeTypeOf("object");

	expect(/* __esModule */true).toBe(true);
	expect(ns.__esModule).toBe(true);
});

it("should include non-enumable properties (mjs, promise)", () =>
	Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./analysable-module.js */ 1, 19)).then(m1 => {
		const ns = m1;

		expect(m1.prop).toBe(true);
		expect(ns.prop).toBe(true);

		expect(m1.nonEnumerable).toBe(true);
		expect(ns.nonEnumerable).toBe(true);

		expect(m1.default).toBeTypeOf("object");
		expect(ns.default).toBeTypeOf("object");

		expect(m1.__esModule).toBe(true);
		expect(ns.__esModule).toBe(true);
	}));

it("should not include prototype properties and symbols (mjs)", () => {
	const ns = /*#__PURE__*/ (_weird_module_js__WEBPACK_IMPORTED_MODULE_1___namespace_cache || (_weird_module_js__WEBPACK_IMPORTED_MODULE_1___namespace_cache = __webpack_require__.t(_weird_module_js__WEBPACK_IMPORTED_MODULE_1__, 2)));
	const sym = _weird_module_js__WEBPACK_IMPORTED_MODULE_1__.sym;

	expect(_weird_module_js__WEBPACK_IMPORTED_MODULE_1__.prop).toBe(true);
	expect(ns.prop).toBe(true);

	expect(_weird_module_js__WEBPACK_IMPORTED_MODULE_1__.nonEnumerable).toBe(true);
	expect(ns.nonEnumerable).toBe(true);

	expect(_weird_module_js__WEBPACK_IMPORTED_MODULE_1__.protoProp).toBe(true);
	expect(ns.protoProp).toBe(true);

	expect(_weird_module_js__WEBPACK_IMPORTED_MODULE_1__.nonEnumerablePrototype).toBe(true);
	expect(ns.nonEnumerablePrototype).toBe(true);

	expect(/*#__PURE__*/ (_weird_module_js__WEBPACK_IMPORTED_MODULE_1___namespace_cache || (_weird_module_js__WEBPACK_IMPORTED_MODULE_1___namespace_cache = __webpack_require__.t(_weird_module_js__WEBPACK_IMPORTED_MODULE_1__, 2)))[sym]).toBe(undefined);
	expect(ns[sym]).toBe(undefined);

	expect(_weird_module_js__WEBPACK_IMPORTED_MODULE_1__).toBeTypeOf("object");
	expect(ns.default).toBeTypeOf("object");

	expect(/* __esModule */true).toBe(true);
	expect(ns.__esModule).toBe(true);
});

it("should not include prototype properties and symbols (mjs, promise)", () =>
	Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./weird-module.js */ 0, 19)).then(m2 => {
		const ns = m2;
		const sym = m2.sym;

		expect(m2.prop).toBe(true);
		expect(ns.prop).toBe(true);

		expect(m2.nonEnumerable).toBe(true);
		expect(ns.nonEnumerable).toBe(true);

		expect(m2.protoProp).toBe(true);
		expect(ns.protoProp).toBe(true);

		expect(m2.nonEnumerablePrototype).toBe(true);
		expect(ns.nonEnumerablePrototype).toBe(true);

		expect(m2[sym]).toBe(undefined);
		expect(ns[sym]).toBe(undefined);

		expect(m2.default).toBeTypeOf("object");
		expect(ns.default).toBeTypeOf("object");

		expect(m2.__esModule).toBe(true);
		expect(ns.__esModule).toBe(true);
	}));

it("should include non-enumable properties with __esModule (non-mjs)", () => {
	const ns = /*#__PURE__*/ (_esModule_js__WEBPACK_IMPORTED_MODULE_2___namespace_cache || (_esModule_js__WEBPACK_IMPORTED_MODULE_2___namespace_cache = __webpack_require__.t(_esModule_js__WEBPACK_IMPORTED_MODULE_2__, 2)));

	expect(_esModule_js__WEBPACK_IMPORTED_MODULE_2__.prop).toBe(true);
	expect(ns.prop).toBe(true);

	expect(_esModule_js__WEBPACK_IMPORTED_MODULE_2__.nonEnumerable).toBe(true);
	expect(ns.nonEnumerable).toBe(true);

	expect(_esModule_js__WEBPACK_IMPORTED_MODULE_2__).toBeTypeOf("object");
	expect(ns.default).toBeTypeOf("object");

	expect(/* __esModule */true).toBe(true);
	expect(ns.__esModule).toBe(true);
});

it("should include non-enumable properties with __esModule (non-mjs, promise)", () =>
	Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./analysable-module.js */ 1, 19)).then(m3 => {
		const ns = m3;

		expect(m3.prop).toBe(true);
		expect(ns.prop).toBe(true);

		expect(m3.nonEnumerable).toBe(true);
		expect(ns.nonEnumerable).toBe(true);

		expect(m3.default).toBeTypeOf("object");
		expect(ns.default).toBeTypeOf("object");

		expect(m3.__esModule).toBe(true);
		expect(ns.__esModule).toBe(true);
	}));

it("should not handle __esModule for the default import (mjs)", () => {
	expect(_analysable_module_js__WEBPACK_IMPORTED_MODULE_0__.__esModule).toBe(undefined);
	expect(Object(_analysable_module_js__WEBPACK_IMPORTED_MODULE_0__).__esModule).toBe(undefined);

	expect(_weird_module_js__WEBPACK_IMPORTED_MODULE_1__.__esModule).toBe(undefined);
	expect(Object(_weird_module_js__WEBPACK_IMPORTED_MODULE_1__).__esModule).toBe(undefined);

	expect(_esModule_js__WEBPACK_IMPORTED_MODULE_2__.__esModule).toBe(true);
	expect(Object(_esModule_js__WEBPACK_IMPORTED_MODULE_2__).__esModule).toBe(true);
});


/***/ }),
/* 6 */
/*!*****************************************************!*\
  !*** ./mjs/non-enumerable/test.js?non-concatenated ***!
  \*****************************************************/
/*! namespace exports */
/*! exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.t, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 8:0-22:3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
var _analysable_module_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _analysable_module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./analysable-module.js */ 1);
/* harmony import */ var _weird_module_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weird-module.js */ 0);
/* harmony import */ var _weird_module_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_weird_module_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _esModule_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./esModule.js */ 2);







it("should include non-enumerable properties (non-mjs)", () => {
	const ns = /*#__PURE__*/ (_analysable_module_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_analysable_module_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_analysable_module_js__WEBPACK_IMPORTED_MODULE_0__, 2)));

	expect(_analysable_module_js__WEBPACK_IMPORTED_MODULE_0__.prop).toBe(true);
	expect(ns.prop).toBe(true);

	expect(_analysable_module_js__WEBPACK_IMPORTED_MODULE_0__.nonEnumerable).toBe(true);
	expect(ns.nonEnumerable).toBe(true);

	expect(_analysable_module_js__WEBPACK_IMPORTED_MODULE_0__).toBeTypeOf("object");
	expect(ns.default).toBeTypeOf("object");

	expect(/* __esModule */true).toBe(true);
	expect(ns.__esModule).toBe(true);
});

it("should include non-enumerable properties (non-mjs, promise)", () =>
	Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./analysable-module */ 1, 19)).then(m1 => {
		const ns = m1;

		expect(m1.prop).toBe(true);
		expect(ns.prop).toBe(true);

		expect(m1.nonEnumerable).toBe(true);
		expect(ns.nonEnumerable).toBe(true);

		expect(m1.default).toBeTypeOf("object");
		expect(ns.default).toBeTypeOf("object");

		expect(m1.__esModule).toBe(true);
		expect(ns.__esModule).toBe(true);
	}));

it("should not include prototype properties and symbols (non-mjs)", () => {
	const ns = _weird_module_js__WEBPACK_IMPORTED_MODULE_1__; // For historical reasons this doesn't yield a namespace object
	const sym = _weird_module_js__WEBPACK_IMPORTED_MODULE_1__.sym;

	expect(_weird_module_js__WEBPACK_IMPORTED_MODULE_1__.prop).toBe(true);
	expect(ns.prop).toBe(true);

	expect(_weird_module_js__WEBPACK_IMPORTED_MODULE_1__.nonEnumerable).toBe(true);
	expect(ns.nonEnumerable).toBe(true);

	expect(_weird_module_js__WEBPACK_IMPORTED_MODULE_1__.protoProp).toBe(true);
	expect(ns.protoProp).toBe(true);

	expect(_weird_module_js__WEBPACK_IMPORTED_MODULE_1__.nonEnumerablePrototype).toBe(true);
	expect(ns.nonEnumerablePrototype).toBe(true);

	expect(_weird_module_js__WEBPACK_IMPORTED_MODULE_1__[sym]).toBe(true);
	expect(ns[sym]).toBe(true);

	expect((_weird_module_js__WEBPACK_IMPORTED_MODULE_1___default())).toBeTypeOf("object");
	expect(ns.default).toBe(undefined); // This is intentional

	expect(/* __esModule */true).toBe(true);
	expect(ns.__esModule).toBe(undefined); // This is intentional
});

it("should not include prototype properties and symbols (non-mjs, promise)", () =>
	Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./weird-module */ 0, 23)).then(m2 => {
		const ns = m2;
		const sym = m2.sym;

		expect(m2.prop).toBe(true);
		expect(ns.prop).toBe(true);

		expect(m2.nonEnumerable).toBe(true);
		expect(ns.nonEnumerable).toBe(true);

		expect(m2.protoProp).toBe(true);
		expect(ns.protoProp).toBe(true);

		expect(m2.nonEnumerablePrototype).toBe(true);
		expect(ns.nonEnumerablePrototype).toBe(true);

		expect(m2[sym]).toBe(undefined);
		expect(ns[sym]).toBe(undefined);

		expect(m2.default).toBeTypeOf("object");
		expect(ns.default).toBeTypeOf("object");

		expect(m2.__esModule).toBe(true);
		expect(ns.__esModule).toBe(true);
	}));

it("should include non-enumerable properties with __esModule (non-mjs)", () => {
	const ns = _esModule_js__WEBPACK_IMPORTED_MODULE_2__;

	expect(_esModule_js__WEBPACK_IMPORTED_MODULE_2__.prop).toBe(true);
	expect(ns.prop).toBe(true);

	expect(_esModule_js__WEBPACK_IMPORTED_MODULE_2__.nonEnumerable).toBe(true);
	expect(ns.nonEnumerable).toBe(true);

	expect(_esModule_js__WEBPACK_IMPORTED_MODULE_2__["default"]).toBe(undefined);
	expect(ns.default).toBe(undefined);

	expect(_esModule_js__WEBPACK_IMPORTED_MODULE_2__.__esModule).toBe(true);
	expect(ns.__esModule).toBe(true);
});

it("should include non-enumerable properties with __esModule (non-mjs, promise)", () =>
	Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./analysable-module */ 1, 19)).then(m3 => {
		const ns = m3;

		expect(m3.prop).toBe(true);
		expect(ns.prop).toBe(true);

		expect(m3.nonEnumerable).toBe(true);
		expect(ns.nonEnumerable).toBe(true);

		expect(m3.default).toBeTypeOf("object");
		expect(ns.default).toBeTypeOf("object");

		expect(m3.__esModule).toBe(true);
		expect(ns.__esModule).toBe(true);
	}));

it("should not handle __esModule for the default import (non-mjs)", () => {
	expect(_analysable_module_js__WEBPACK_IMPORTED_MODULE_0__.__esModule).toBe(undefined);
	expect(Object(_analysable_module_js__WEBPACK_IMPORTED_MODULE_0__).__esModule).toBe(undefined);

	expect((_weird_module_js__WEBPACK_IMPORTED_MODULE_1___default().__esModule)).toBe(undefined);
	expect(Object((_weird_module_js__WEBPACK_IMPORTED_MODULE_1___default())).__esModule).toBe(undefined);

	expect(_esModule_js__WEBPACK_IMPORTED_MODULE_2__["default"]).toBe(undefined);
});


/***/ }),
/* 7 */
/*!******************************************************!*\
  !*** ./mjs/non-enumerable/test.mjs?non-concatenated ***!
  \******************************************************/
/*! namespace exports */
/*! exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_require__.t, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 8:0-22:3 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
var _analysable_module_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
var _weird_module_js__WEBPACK_IMPORTED_MODULE_1___namespace_cache;
var _esModule_js__WEBPACK_IMPORTED_MODULE_2___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _analysable_module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./analysable-module.js */ 1);
/* harmony import */ var _weird_module_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weird-module.js */ 0);
/* harmony import */ var _esModule_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./esModule.js */ 2);







it("should include non-enumable properties (mjs)", () => {
	const ns = /*#__PURE__*/ (_analysable_module_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_analysable_module_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_analysable_module_js__WEBPACK_IMPORTED_MODULE_0__, 2)));

	expect(_analysable_module_js__WEBPACK_IMPORTED_MODULE_0__.prop).toBe(true);
	expect(ns.prop).toBe(true);

	expect(_analysable_module_js__WEBPACK_IMPORTED_MODULE_0__.nonEnumerable).toBe(true);
	expect(ns.nonEnumerable).toBe(true);

	expect(_analysable_module_js__WEBPACK_IMPORTED_MODULE_0__).toBeTypeOf("object");
	expect(ns.default).toBeTypeOf("object");

	expect(/* __esModule */true).toBe(true);
	expect(ns.__esModule).toBe(true);
});

it("should include non-enumable properties (mjs, promise)", () =>
	Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./analysable-module.js */ 1, 19)).then(m1 => {
		const ns = m1;

		expect(m1.prop).toBe(true);
		expect(ns.prop).toBe(true);

		expect(m1.nonEnumerable).toBe(true);
		expect(ns.nonEnumerable).toBe(true);

		expect(m1.default).toBeTypeOf("object");
		expect(ns.default).toBeTypeOf("object");

		expect(m1.__esModule).toBe(true);
		expect(ns.__esModule).toBe(true);
	}));

it("should not include prototype properties and symbols (mjs)", () => {
	const ns = /*#__PURE__*/ (_weird_module_js__WEBPACK_IMPORTED_MODULE_1___namespace_cache || (_weird_module_js__WEBPACK_IMPORTED_MODULE_1___namespace_cache = __webpack_require__.t(_weird_module_js__WEBPACK_IMPORTED_MODULE_1__, 2)));
	const sym = _weird_module_js__WEBPACK_IMPORTED_MODULE_1__.sym;

	expect(_weird_module_js__WEBPACK_IMPORTED_MODULE_1__.prop).toBe(true);
	expect(ns.prop).toBe(true);

	expect(_weird_module_js__WEBPACK_IMPORTED_MODULE_1__.nonEnumerable).toBe(true);
	expect(ns.nonEnumerable).toBe(true);

	expect(_weird_module_js__WEBPACK_IMPORTED_MODULE_1__.protoProp).toBe(true);
	expect(ns.protoProp).toBe(true);

	expect(_weird_module_js__WEBPACK_IMPORTED_MODULE_1__.nonEnumerablePrototype).toBe(true);
	expect(ns.nonEnumerablePrototype).toBe(true);

	expect(/*#__PURE__*/ (_weird_module_js__WEBPACK_IMPORTED_MODULE_1___namespace_cache || (_weird_module_js__WEBPACK_IMPORTED_MODULE_1___namespace_cache = __webpack_require__.t(_weird_module_js__WEBPACK_IMPORTED_MODULE_1__, 2)))[sym]).toBe(undefined);
	expect(ns[sym]).toBe(undefined);

	expect(_weird_module_js__WEBPACK_IMPORTED_MODULE_1__).toBeTypeOf("object");
	expect(ns.default).toBeTypeOf("object");

	expect(/* __esModule */true).toBe(true);
	expect(ns.__esModule).toBe(true);
});

it("should not include prototype properties and symbols (mjs, promise)", () =>
	Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./weird-module.js */ 0, 19)).then(m2 => {
		const ns = m2;
		const sym = m2.sym;

		expect(m2.prop).toBe(true);
		expect(ns.prop).toBe(true);

		expect(m2.nonEnumerable).toBe(true);
		expect(ns.nonEnumerable).toBe(true);

		expect(m2.protoProp).toBe(true);
		expect(ns.protoProp).toBe(true);

		expect(m2.nonEnumerablePrototype).toBe(true);
		expect(ns.nonEnumerablePrototype).toBe(true);

		expect(m2[sym]).toBe(undefined);
		expect(ns[sym]).toBe(undefined);

		expect(m2.default).toBeTypeOf("object");
		expect(ns.default).toBeTypeOf("object");

		expect(m2.__esModule).toBe(true);
		expect(ns.__esModule).toBe(true);
	}));

it("should include non-enumable properties with __esModule (non-mjs)", () => {
	const ns = /*#__PURE__*/ (_esModule_js__WEBPACK_IMPORTED_MODULE_2___namespace_cache || (_esModule_js__WEBPACK_IMPORTED_MODULE_2___namespace_cache = __webpack_require__.t(_esModule_js__WEBPACK_IMPORTED_MODULE_2__, 2)));

	expect(_esModule_js__WEBPACK_IMPORTED_MODULE_2__.prop).toBe(true);
	expect(ns.prop).toBe(true);

	expect(_esModule_js__WEBPACK_IMPORTED_MODULE_2__.nonEnumerable).toBe(true);
	expect(ns.nonEnumerable).toBe(true);

	expect(_esModule_js__WEBPACK_IMPORTED_MODULE_2__).toBeTypeOf("object");
	expect(ns.default).toBeTypeOf("object");

	expect(/* __esModule */true).toBe(true);
	expect(ns.__esModule).toBe(true);
});

it("should include non-enumable properties with __esModule (non-mjs, promise)", () =>
	Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./analysable-module.js */ 1, 19)).then(m3 => {
		const ns = m3;

		expect(m3.prop).toBe(true);
		expect(ns.prop).toBe(true);

		expect(m3.nonEnumerable).toBe(true);
		expect(ns.nonEnumerable).toBe(true);

		expect(m3.default).toBeTypeOf("object");
		expect(ns.default).toBeTypeOf("object");

		expect(m3.__esModule).toBe(true);
		expect(ns.__esModule).toBe(true);
	}));

it("should not handle __esModule for the default import (mjs)", () => {
	expect(_analysable_module_js__WEBPACK_IMPORTED_MODULE_0__.__esModule).toBe(undefined);
	expect(Object(_analysable_module_js__WEBPACK_IMPORTED_MODULE_0__).__esModule).toBe(undefined);

	expect(_weird_module_js__WEBPACK_IMPORTED_MODULE_1__.__esModule).toBe(undefined);
	expect(Object(_weird_module_js__WEBPACK_IMPORTED_MODULE_1__).__esModule).toBe(undefined);

	expect(_esModule_js__WEBPACK_IMPORTED_MODULE_2__.__esModule).toBe(true);
	expect(Object(_esModule_js__WEBPACK_IMPORTED_MODULE_2__).__esModule).toBe(true);
});


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
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
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
/*!*************************************!*\
  !*** ./mjs/non-enumerable/index.js ***!
  \*************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 4:0-38 */
/* harmony import */ var _test_js_concatenated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test.js?concatenated */ 4);
/* harmony import */ var _test_mjs_concatenated__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test.mjs?concatenated */ 5);



__webpack_require__(/*! ./test.js?non-concatenated */ 6);
__webpack_require__(/*! ./test.mjs?non-concatenated */ 7);

})();

/******/ })()
;