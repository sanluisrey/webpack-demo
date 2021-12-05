/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/*!***********************************!*\
  !*** ./parsing/renaming/index.js ***!
  \***********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module.loaded, module.id, module, __webpack_require__.nmd, __webpack_require__, __webpack_require__.amdD, __webpack_require__.* */
/*! CommonJS bailout: exports is used directly at 48:36-43 */
/*! CommonJS bailout: exports is used directly at 49:3-10 */
/*! CommonJS bailout: exports is used directly at 37:10-11 */
/*! CommonJS bailout: exports is used directly at 37:18-25 */
/*! CommonJS bailout: exports is used directly at 38:25-32 */
/*! CommonJS bailout: exports is used directly at 39:26-33 */
/*! CommonJS bailout: exports is used directly at 81:36-43 */
/*! CommonJS bailout: exports is used directly at 75:10-11 */
/*! CommonJS bailout: exports is used directly at 75:18-25 */
/*! CommonJS bailout: exports is used directly at 76:25-32 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-6:3 */
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_RESULT__;it("should be able to rename require by var", function() {
	var cjsRequire; // just to make it difficult
	var cjsRequire = undefined, cjsRequire2 = undefined;
	expect(__webpack_require__(/*! ./file */ 1)).toBe("ok");
	expect(__webpack_require__(/*! ./file */ 1)).toBe("ok");
});

it("should be able to rename require by assign", function() {
	var cjsRequire, cjsRequire2;
	(function() {
		cjsRequire = undefined;
		cjsRequire2 = undefined;
		expect(__webpack_require__(/*! ./file */ 1)).toBe("ok");
		expect(__webpack_require__(/*! ./file */ 1)).toBe("ok");
	}());
});

it("should be able to rename require by IIFE", function() {
	(function(cjsRequire) {
		expect(__webpack_require__(/*! ./file */ 1)).toBe("ok");
	}(undefined));
});

it("should be able to rename require by IIFE call", function() {
	(function(somethingElse, cjsRequire) {
		expect(__webpack_require__(/*! ./file */ 1)).toBe("ok");
		expect(somethingElse).toBe(123);
	}.call(this, 123, undefined));
});

it("should be able to rename stuff by IIFE call", function() {
	(function(_exports, _exports2, _module, _module2, _define, _define2, _require, _require2) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(R, E, M) {
			expect(__webpack_require__(/*! ./file */ 1)).toBe("ok");
			expect(__webpack_require__(/*! ./file */ 1)).toBe("ok");
			expect(__webpack_require__(/*! ./file */ 1)).toBe("ok");
			expect(E).toBe(exports);
			expect(_exports).toBe(exports);
			expect(_exports2).toBe(exports);
			expect(M).toBe(module);
			expect(_module).toBe(module);
			expect(_module2).toBe(module);
		}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./file */ 1)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(file) {
			expect(file).toBe("ok");
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}).call(this,
			 true ? exports : 0,
			exports,
			 true ? module : 0,
			module,
			__webpack_require__.amdD,
			__webpack_require__.amdD,
			undefined,
			undefined);
});

it("should accept less parameters in a IIFE call", function() {
	(function(r, require) {
		expect(__webpack_require__(/*! ./file */ 1)).toBe("ok");
		expect((typeof require)).toBe("undefined");
	}(undefined));
});

it("should accept more parameters in a IIFE call", function() {
	(function() {
	}(undefined));
});

it("should be able to rename stuff by IIFE call", function() {
	(function(_exports, _module, _define, _require) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(R, E, M) {
			expect(__webpack_require__(/*! ./file */ 1)).toBe("ok");
			expect(__webpack_require__(/*! ./file */ 1)).toBe("ok");
			expect(E).toBe(exports);
			expect(_exports).toBe(exports);
			expect(M).toBe(module);
			expect(_module).toBe(module);
		}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}).call(this,
			 true ? exports : 0,
			 true ? module : 0,
			__webpack_require__.amdD,
			undefined);
});



/***/ }),
/* 1 */
/*!**********************************!*\
  !*** ./parsing/renaming/file.js ***!
  \**********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-22 */
/***/ ((module) => {

module.exports = "ok";

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
/************************************************************************/
/******/ 	/* webpack/runtime/amd define */
/******/ 	(() => {
/******/ 		__webpack_require__.amdD = function () {
/******/ 			throw new Error('define cannot be used indirect');
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	
/******/ })()
;