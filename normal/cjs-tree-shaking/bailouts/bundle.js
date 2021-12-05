/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/*!************************************************************!*\
  !*** ./cjs-tree-shaking/bailouts/assign-exports-define.js ***!
  \************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__ */
/*! CommonJS bailout: exports is used directly at 4:0-7 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-56 */
/***/ ((__unused_webpack_module, exports) => {

Object.defineProperty(exports, "abc", ({ value: "abc" }));

var newObj = {};
exports = newObj;

Object.defineProperty(exports, "def", ({ value: "def" }));


/***/ }),
/* 1 */
/*!***************************************************!*\
  !*** ./cjs-tree-shaking/bailouts/reading-this.js ***!
  \***************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, top-level-this-exports */
/*! CommonJS bailout: this is used directly at 4:8-12 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-20 */
/***/ (function(__unused_webpack_module, exports) {

exports.abc = "abc";

exports.test = () => {
	return this;
};


/***/ }),
/* 2 */
/*!******************************************************!*\
  !*** ./cjs-tree-shaking/bailouts/reading-exports.js ***!
  \******************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__ */
/*! CommonJS bailout: exports is used directly at 4:8-15 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-20 */
/***/ ((__unused_webpack_module, exports) => {

exports.abc = "abc";

exports.test = function() {
	return exports;
};


/***/ }),
/* 3 */
/*!*************************************************************!*\
  !*** ./cjs-tree-shaking/bailouts/reading-module-exports.js ***!
  \*************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module */
/*! CommonJS bailout: module.exports is used directly at 4:8-22 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-20 */
/***/ ((module, exports) => {

exports.abc = "abc";

exports.test = function() {
	return module.exports;
};


/***/ }),
/* 4 */
/*!**************************************************************!*\
  !*** ./cjs-tree-shaking/bailouts/assign-exports-assign.js?1 ***!
  \**************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__ */
/*! CommonJS bailout: exports is used directly at 4:0-7 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-20 */
/***/ ((__unused_webpack_module, exports) => {

exports.abc = "abc";

var newObj = {};
exports = newObj;

exports.def = "def";


/***/ }),
/* 5 */
/*!**************************************************************!*\
  !*** ./cjs-tree-shaking/bailouts/assign-exports-assign.js?2 ***!
  \**************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__ */
/*! CommonJS bailout: exports is used directly at 4:0-7 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-20 */
/***/ ((__unused_webpack_module, exports) => {

exports.abc = "abc";

var newObj = {};
exports = newObj;

exports.def = "def";


/***/ }),
/* 6 */
/*!******************************************************!*\
  !*** ./cjs-tree-shaking/bailouts/nested-property.js ***!
  \******************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 3:0-14 */
/*! Statement (VariableDeclaration) with side effects in source code at 1:0-13 */
/***/ ((module) => {

var abc = {};

module.exports = abc;

module.exports.abc = "abc";
module.exports.def = "def";

expect(abc).toEqual({ abc: "abc", def: "def" });


/***/ }),
/* 7 */
/*!***************************************************************!*\
  !*** ./cjs-tree-shaking/bailouts/define-module-property.js?2 ***!
  \***************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module.loaded, module.id, module, __webpack_require__.nmd, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-20 */
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
exports.abc = "abc";

Object.defineProperty(module, "exports", {
	value: {
		abc: "abc",
		def: "def"
	}
});


/***/ }),
/* 8 */
/*!***************************************************************!*\
  !*** ./cjs-tree-shaking/bailouts/define-module-property.js?1 ***!
  \***************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module.loaded, module.id, module, __webpack_require__.nmd, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-20 */
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
exports.abc = "abc";

Object.defineProperty(module, "exports", {
	value: {
		abc: "abc",
		def: "def"
	}
});


/***/ }),
/* 9 */
/*!*****************************************************************!*\
  !*** ./cjs-tree-shaking/bailouts/define-module-properties.js?2 ***!
  \*****************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module.loaded, module.id, module, __webpack_require__.nmd, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-20 */
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
exports.abc = "abc";

Object.defineProperties(module, {
	exports: {
		value: {
			abc: "abc",
			def: "def"
		}
	}
});


/***/ }),
/* 10 */
/*!*****************************************************************!*\
  !*** ./cjs-tree-shaking/bailouts/define-module-properties.js?1 ***!
  \*****************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module.loaded, module.id, module, __webpack_require__.nmd, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-20 */
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
exports.abc = "abc";

Object.defineProperties(module, {
	exports: {
		value: {
			abc: "abc",
			def: "def"
		}
	}
});


/***/ }),
/* 11 */
/*!*********************************************************!*\
  !*** ./cjs-tree-shaking/bailouts/accessing-module.js?2 ***!
  \*********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module.loaded, module.id, module, __webpack_require__.nmd, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-20 */
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
exports.abc = "abc";

function f(m) {
	m.exports = { abc: "abc", def: "def" };
}

f(module);


/***/ }),
/* 12 */
/*!*********************************************************!*\
  !*** ./cjs-tree-shaking/bailouts/accessing-module.js?1 ***!
  \*********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module.loaded, module.id, module, __webpack_require__.nmd, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-20 */
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
exports.abc = "abc";

function f(m) {
	m.exports = { abc: "abc", def: "def" };
}

f(module);


/***/ }),
/* 13 */,
/* 14 */
/*!***************************************************************!*\
  !*** ./cjs-tree-shaking/bailouts/accessing-call-context.js?1 ***!
  \***************************************************************/
/*! default exports */
/*! export abc [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export func [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-4:2 */
/***/ ((module) => {

module.exports.func = function f() {
	"use strict";
	return this;
};
module.exports.abc = "abc";


/***/ }),
/* 15 */
/*!***************************************************************!*\
  !*** ./cjs-tree-shaking/bailouts/accessing-call-context.js?2 ***!
  \***************************************************************/
/*! default exports */
/*! export abc [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export func [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-4:2 */
/***/ ((module) => {

module.exports.func = function f() {
	"use strict";
	return this;
};
module.exports.abc = "abc";


/***/ }),
/* 16 */
/*!***************************************************************!*\
  !*** ./cjs-tree-shaking/bailouts/accessing-call-context.js?3 ***!
  \***************************************************************/
/*! default exports */
/*! export abc [provided] [unused] [renamed to O] */
/*! export func [provided] [used in main] [renamed to Y] */
/*! runtime requirements: module */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-4:2 */
/***/ ((module) => {

var __webpack_unused_export__;
module.exports.Y = function f() {
	"use strict";
	return this;
};
__webpack_unused_export__ = "abc";


/***/ }),
/* 17 */
/*!**************************************************!*\
  !*** ./cjs-tree-shaking/bailouts/using-amd.js?2 ***!
  \**************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-24 */
/***/ ((module, exports) => {

exports.abc = "not-abc";
!(module.exports = {
	abc: "abc",
	def: "def"
});


/***/ }),
/* 18 */
/*!**************************************************!*\
  !*** ./cjs-tree-shaking/bailouts/using-amd.js?1 ***!
  \**************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-24 */
/***/ ((module, exports) => {

exports.abc = "not-abc";
!(module.exports = {
	abc: "abc",
	def: "def"
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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************************!*\
  !*** ./cjs-tree-shaking/bailouts/index.js ***!
  \********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-4:3 */
it("should bailout when reading whole exports object from this", () => {
	var test = (__webpack_require__(/*! ./reading-this */ 1).test);
	expect(test().abc).toBe("abc");
});

it("should bailout when reading whole exports object from exports", () => {
	var test = (__webpack_require__(/*! ./reading-exports */ 2).test);
	expect(test().abc).toBe("abc");
});

it("should bailout when reading whole exports object from module.exports", () => {
	var test = (__webpack_require__(/*! ./reading-module-exports */ 3).test);
	expect(test().abc).toBe("abc");
});

it("should reassigning exports (assign values)", () => {
	expect((__webpack_require__(/*! ./assign-exports-assign?1 */ 4).abc)).toBe("abc");
	expect((__webpack_require__(/*! ./assign-exports-assign?2 */ 5).def)).toBe(undefined);
});

it("should reassigning exports (define values)", () => {
	expect((__webpack_require__(/*! ./assign-exports-define */ 0).abc)).toBe("abc");
	expect((__webpack_require__(/*! ./assign-exports-define */ 0).def)).toBe(undefined);
});

it("should not mangle or remove nested properties", () => {
	expect((__webpack_require__(/*! ./nested-property */ 6).abc)).toBe("abc");
});

it("should be able to access the exports via call context", () => {
	expect((__webpack_require__(/*! ./accessing-call-context?1 */ 14).func)().abc).toBe("abc");
	var cc = __webpack_require__(/*! ./accessing-call-context?2 */ 15);
	expect(cc.func().abc).toBe("abc");
	var func = (__webpack_require__(/*! ./accessing-call-context?3 */ 16)/* .func */ .Y);
	expect(func()).toBe(undefined);
});

it("should be able to define an exports property on module (property)", () => {
	expect((__webpack_require__(/*! ./define-module-property?2 */ 7).abc)).toBe("abc");
	expect((__webpack_require__(/*! ./define-module-property?1 */ 8).def)).toBe("def");
});

it("should be able to define an exports property on module (properties)", () => {
	expect((__webpack_require__(/*! ./define-module-properties?2 */ 9).abc)).toBe("abc");
	expect((__webpack_require__(/*! ./define-module-properties?1 */ 10).def)).toBe("def");
});

it("should be able to do stuff with the module object", () => {
	expect((__webpack_require__(/*! ./accessing-module?2 */ 11).abc)).toBe("abc");
	expect((__webpack_require__(/*! ./accessing-module?1 */ 12).def)).toBe("def");
});

it("should be able to use AMD to define exports", () => {
	expect((__webpack_require__(/*! ./using-amd?2 */ 17).abc)).toBe("abc");
	expect((__webpack_require__(/*! ./using-amd?1 */ 18).def)).toBe("def");
});

})();

/******/ })()
;