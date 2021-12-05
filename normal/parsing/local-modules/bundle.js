/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/*!****************************************!*\
  !*** ./parsing/local-modules/index.js ***!
  \****************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__, __webpack_exports__, __webpack_require__.oe, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 2:1-15 */
/*! CommonJS bailout: module.exports is used directly at 6:8-22 */
/*! CommonJS bailout: module.exports is used directly at 11:8-22 */
/*! CommonJS bailout: module.exports is used directly at 32:1-15 */
/*! CommonJS bailout: module.exports is used directly at 37:8-22 */
/*! CommonJS bailout: module.exports is used directly at 43:8-22 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-14:3 */
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_LOCAL_MODULE_0__, __WEBPACK_LOCAL_MODULE_0__module;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_LOCAL_MODULE_1__, __WEBPACK_LOCAL_MODULE_1__module;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_2__, __WEBPACK_LOCAL_MODULE_2__exports;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_3__, __WEBPACK_LOCAL_MODULE_3__exports;var __WEBPACK_LOCAL_MODULE_4__, __WEBPACK_LOCAL_MODULE_4__module;var __WEBPACK_LOCAL_MODULE_5__, __WEBPACK_LOCAL_MODULE_5__module;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_6__, __WEBPACK_LOCAL_MODULE_6__exports;var __WEBPACK_LOCAL_MODULE_7__, __WEBPACK_LOCAL_MODULE_7__factory, __WEBPACK_LOCAL_MODULE_7__module;var __WEBPACK_LOCAL_MODULE_8__, __WEBPACK_LOCAL_MODULE_8__factory, __WEBPACK_LOCAL_MODULE_8__module;var __WEBPACK_LOCAL_MODULE_9__array, __WEBPACK_LOCAL_MODULE_9__factory, __WEBPACK_LOCAL_MODULE_9__exports, __WEBPACK_LOCAL_MODULE_9__;it("should define and require a local module", function () {
	module.exports = "not set";
	!(__WEBPACK_LOCAL_MODULE_0__module = { id: "my-module", exports: {}, loaded: false }, __WEBPACK_LOCAL_MODULE_0__ = (function () {
		return 1234;
	}).call(__WEBPACK_LOCAL_MODULE_0__module.exports, __webpack_require__, __WEBPACK_LOCAL_MODULE_0__module.exports, __WEBPACK_LOCAL_MODULE_0__module), __WEBPACK_LOCAL_MODULE_0__module.loaded = true, __WEBPACK_LOCAL_MODULE_0__ === undefined && (__WEBPACK_LOCAL_MODULE_0__ = __WEBPACK_LOCAL_MODULE_0__module.exports));
	expect(module.exports).toBe("not set");
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_0__], __WEBPACK_AMD_DEFINE_RESULT__ = (function (myModule) {
		expect(myModule).toBe(1234);
		return 2345;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	expect(module.exports).toBe(2345);
	expect(__WEBPACK_LOCAL_MODULE_0__).toBe(1234);
	Promise.resolve(/*! AMD require */).then(function() {[__WEBPACK_LOCAL_MODULE_0__];})['catch'](__webpack_require__.oe);
});

it("should not create a chunk for a AMD require to a local module", function (done) {
	!(__WEBPACK_LOCAL_MODULE_1__module = { id: "my-module2", exports: {}, loaded: false }, __WEBPACK_LOCAL_MODULE_1__ = (function () {
		return 1235;
	}).call(__WEBPACK_LOCAL_MODULE_1__module.exports, __webpack_require__, __WEBPACK_LOCAL_MODULE_1__module.exports, __WEBPACK_LOCAL_MODULE_1__module), __WEBPACK_LOCAL_MODULE_1__module.loaded = true, __WEBPACK_LOCAL_MODULE_1__ === undefined && (__WEBPACK_LOCAL_MODULE_1__ = __WEBPACK_LOCAL_MODULE_1__module.exports));
	var sync = false;
	Promise.resolve(/*! AMD require */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_1__]; (function (myModule2) {
		expect(myModule2).toBe(1235);
		sync = true;
	}).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);})['catch'](__webpack_require__.oe);
	setImmediate(function () {
		expect(sync).toBe(true);
		done();
	});
});

it("should define and require a local module with deps", function () {
	module.exports = "not set";
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./dep */ 1)], __WEBPACK_LOCAL_MODULE_2__ = (function (dep) {
		expect(dep).toBe("dep");
		return 1234;
	}).apply(__WEBPACK_LOCAL_MODULE_2__exports = {}, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_LOCAL_MODULE_2__ === undefined && (__WEBPACK_LOCAL_MODULE_2__ = __WEBPACK_LOCAL_MODULE_2__exports));
	expect(module.exports).toBe("not set");
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_2__, __webpack_require__(/*! ./dep */ 1)], __WEBPACK_LOCAL_MODULE_3__ = (function (myModule, dep) {
		expect(dep).toBe("dep");
		expect(myModule).toBe(1234);
		return 2345;
	}).apply(__WEBPACK_LOCAL_MODULE_3__exports = {}, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_LOCAL_MODULE_3__ === undefined && (__WEBPACK_LOCAL_MODULE_3__ = __WEBPACK_LOCAL_MODULE_3__exports));
	expect(module.exports).toBe("not set");
	expect(__WEBPACK_LOCAL_MODULE_2__).toBe(1234);
	expect(__WEBPACK_LOCAL_MODULE_3__).toBe(2345);
});

it("should define and require a local module that is relative", function () {
	!(__WEBPACK_LOCAL_MODULE_4__module = { id: "my-dir/my-module3", exports: {}, loaded: false }, __WEBPACK_LOCAL_MODULE_4__ = (function () {
		return 1234;
	}).call(__WEBPACK_LOCAL_MODULE_4__module.exports, __webpack_require__, __WEBPACK_LOCAL_MODULE_4__module.exports, __WEBPACK_LOCAL_MODULE_4__module), __WEBPACK_LOCAL_MODULE_4__module.loaded = true, __WEBPACK_LOCAL_MODULE_4__ === undefined && (__WEBPACK_LOCAL_MODULE_4__ = __WEBPACK_LOCAL_MODULE_4__module.exports));
	!(__WEBPACK_LOCAL_MODULE_5__module = { id: "my-dir/my-other-dir/my-module4", exports: {}, loaded: false }, __WEBPACK_LOCAL_MODULE_5__ = (function () {
		return 2345;
	}).call(__WEBPACK_LOCAL_MODULE_5__module.exports, __webpack_require__, __WEBPACK_LOCAL_MODULE_5__module.exports, __WEBPACK_LOCAL_MODULE_5__module), __WEBPACK_LOCAL_MODULE_5__module.loaded = true, __WEBPACK_LOCAL_MODULE_5__ === undefined && (__WEBPACK_LOCAL_MODULE_5__ = __WEBPACK_LOCAL_MODULE_5__module.exports));
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
		__WEBPACK_LOCAL_MODULE_5__,
		__WEBPACK_LOCAL_MODULE_4__
	], __WEBPACK_LOCAL_MODULE_6__ = (function (myModule4, myModule3) {
		expect(myModule3).toBe(1234);
		expect(myModule4).toBe(2345);
		return 3456;
	}).apply(__WEBPACK_LOCAL_MODULE_6__exports = {}, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_LOCAL_MODULE_6__ === undefined && (__WEBPACK_LOCAL_MODULE_6__ = __WEBPACK_LOCAL_MODULE_6__exports));
	expect(__WEBPACK_LOCAL_MODULE_6__).toBe(3456);
});

it("issue 12310", () => {
	const obj = { ok: true };
	!(__WEBPACK_LOCAL_MODULE_7__factory = (obj), (typeof __WEBPACK_LOCAL_MODULE_7__factory === 'function' ? ((__WEBPACK_LOCAL_MODULE_7__module = { id: "local-module1", exports: {}, loaded: false }), (__WEBPACK_LOCAL_MODULE_7__ = __WEBPACK_LOCAL_MODULE_7__factory.call(__WEBPACK_LOCAL_MODULE_7__module.exports, __webpack_require__, __WEBPACK_LOCAL_MODULE_7__module.exports, __WEBPACK_LOCAL_MODULE_7__module)), (__WEBPACK_LOCAL_MODULE_7__module.loaded = true), __WEBPACK_LOCAL_MODULE_7__ === undefined && (__WEBPACK_LOCAL_MODULE_7__ = __WEBPACK_LOCAL_MODULE_7__module.exports)) : __WEBPACK_LOCAL_MODULE_7__ = __WEBPACK_LOCAL_MODULE_7__factory));
	const fn2 = () => ({ ok: true });
	!(__WEBPACK_LOCAL_MODULE_8__factory = (fn2), (typeof __WEBPACK_LOCAL_MODULE_8__factory === 'function' ? ((__WEBPACK_LOCAL_MODULE_8__module = { id: "local-module2", exports: {}, loaded: false }), (__WEBPACK_LOCAL_MODULE_8__ = __WEBPACK_LOCAL_MODULE_8__factory.call(__WEBPACK_LOCAL_MODULE_8__module.exports, __webpack_require__, __WEBPACK_LOCAL_MODULE_8__module.exports, __WEBPACK_LOCAL_MODULE_8__module)), (__WEBPACK_LOCAL_MODULE_8__module.loaded = true), __WEBPACK_LOCAL_MODULE_8__ === undefined && (__WEBPACK_LOCAL_MODULE_8__ = __WEBPACK_LOCAL_MODULE_8__module.exports)) : __WEBPACK_LOCAL_MODULE_8__ = __WEBPACK_LOCAL_MODULE_8__factory));
	const fn3 = m1 => {
		return { m1 };
	};
	!(__WEBPACK_LOCAL_MODULE_9__array = [__WEBPACK_LOCAL_MODULE_7__], __WEBPACK_LOCAL_MODULE_9__factory = (fn3),
		(typeof __WEBPACK_LOCAL_MODULE_9__factory === 'function' ?
			((__WEBPACK_LOCAL_MODULE_9__ = __WEBPACK_LOCAL_MODULE_9__factory.apply(__WEBPACK_LOCAL_MODULE_9__exports = {}, __WEBPACK_LOCAL_MODULE_9__array)), __WEBPACK_LOCAL_MODULE_9__ === undefined && (__WEBPACK_LOCAL_MODULE_9__ = __WEBPACK_LOCAL_MODULE_9__exports)) :
			(__WEBPACK_LOCAL_MODULE_9__ = __WEBPACK_LOCAL_MODULE_9__factory)
		));
	expect(__WEBPACK_LOCAL_MODULE_7__).toBe(obj);
	expect(__WEBPACK_LOCAL_MODULE_8__).toEqual(obj);
	expect(__WEBPACK_LOCAL_MODULE_9__).toEqual({ m1: obj });
});


/***/ }),
/* 1 */
/*!**************************************!*\
  !*** ./parsing/local-modules/dep.js ***!
  \**************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-23 */
/***/ ((module) => {

module.exports = "dep";

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	
/******/ })()
;