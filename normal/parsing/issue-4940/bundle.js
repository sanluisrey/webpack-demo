/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/*!******************************************!*\
  !*** ./parsing/issue-4940/sideEffect.js ***!
  \******************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-3:2 */
/***/ ((module) => {

module.exports = {
	foo: null
};


/***/ }),
/* 1 */
/*!*********************************************!*\
  !*** ./parsing/issue-4940/object-export.js ***!
  \*********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-3:2 */
/***/ ((module) => {

module.exports = {
	foo: "bar"
};


/***/ }),
/* 2 */
/*!*************************************************!*\
  !*** ./parsing/issue-4940/non-object-export.js ***!
  \*************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 3:0-14 */
/*! Statement (VariableDeclaration) with side effects in source code at 1:0-43 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const sideEffect = __webpack_require__(/*! ./sideEffect */ 0);
sideEffect.foo = "bar";
module.exports = "foo";


/***/ }),
/* 3 */
/*!*************************************!*\
  !*** ./parsing/issue-4940/index.js ***!
  \*************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__, module */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-5:3 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __WEBPACK_LOCAL_MODULE_0__, __WEBPACK_LOCAL_MODULE_0__module;var __WEBPACK_LOCAL_MODULE_1__, __WEBPACK_LOCAL_MODULE_1__module;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_2__, __WEBPACK_LOCAL_MODULE_2__exports;!(__WEBPACK_LOCAL_MODULE_0__module = { id: "local-module-object", exports: {}, loaded: false }, __WEBPACK_LOCAL_MODULE_0__ = (function() {
	return {
		foo: "bar"
	};
}).call(__WEBPACK_LOCAL_MODULE_0__module.exports, __webpack_require__, __WEBPACK_LOCAL_MODULE_0__module.exports, __WEBPACK_LOCAL_MODULE_0__module), __WEBPACK_LOCAL_MODULE_0__module.loaded = true, __WEBPACK_LOCAL_MODULE_0__ === undefined && (__WEBPACK_LOCAL_MODULE_0__ = __WEBPACK_LOCAL_MODULE_0__module.exports));

!(__WEBPACK_LOCAL_MODULE_1__module = { id: "local-side-effect", exports: {}, loaded: false }, __WEBPACK_LOCAL_MODULE_1__ = (function() {
	return {
		foo: null
	};
}).call(__WEBPACK_LOCAL_MODULE_1__module.exports, __webpack_require__, __WEBPACK_LOCAL_MODULE_1__module.exports, __WEBPACK_LOCAL_MODULE_1__module), __WEBPACK_LOCAL_MODULE_1__module.loaded = true, __WEBPACK_LOCAL_MODULE_1__ === undefined && (__WEBPACK_LOCAL_MODULE_1__ = __WEBPACK_LOCAL_MODULE_1__module.exports));

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_1__], __WEBPACK_LOCAL_MODULE_2__ = (function(sideEffect) {
	sideEffect.foo = "bar";
	return 1;
}).apply(__WEBPACK_LOCAL_MODULE_2__exports = {}, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_LOCAL_MODULE_2__ === undefined && (__WEBPACK_LOCAL_MODULE_2__ = __WEBPACK_LOCAL_MODULE_2__exports));

it("should create dependency when require is called with 'new' (object export)", function() {
	const result = new __webpack_require__(/*! ./object-export */ 1);
	expect(result.foo).toBe("bar");
	expect(result).toEqual(__webpack_require__(/*! ./object-export */ 1));
});

it("should create dependency when require is called with 'new' (non-object export)", function() {
	const sideEffect = __webpack_require__(/*! ./sideEffect */ 0);
	const result = new __webpack_require__(/*! ./non-object-export */ 2);
	expect(result instanceof __webpack_require__).toBe(true);
	expect(sideEffect.foo).toBe("bar");
	expect(result).not.toEqual(__webpack_require__(/*! ./non-object-export */ 2));
});

it("should create dependency with 'new' on a local dependency (object export)", function() {
	const result = new (function () { return __WEBPACK_LOCAL_MODULE_0__; })();
	expect(result.foo).toBe("bar");
	expect(result).toEqual(__WEBPACK_LOCAL_MODULE_0__);
});

it("shouldn't fail with a local dependency (non-object export)", function() {
	const sideEffect = __WEBPACK_LOCAL_MODULE_1__;
	const result = new (function () { return __WEBPACK_LOCAL_MODULE_2__; })();
	expect(result).not.toBe(1);
	expect(sideEffect.foo).toBe("bar");
	expect(result).not.toEqual(__WEBPACK_LOCAL_MODULE_2__);
});

it("should work with 'require' in parentheses", function() {
	const result = new __webpack_require__(/*! ./object-export */ 1);
	expect(result.foo).toBe("bar");
});

it("should work with local module 'require' in parentheses", function() {
	const result = new (function () { return __WEBPACK_LOCAL_MODULE_0__; })();
	expect(result.foo).toBe("bar");
});

it("shouldn't fail with non-object local module 'require' in parentheses", function() {
	new (function () { return __WEBPACK_LOCAL_MODULE_2__; })();
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(3);
/******/ 	
/******/ })()
;