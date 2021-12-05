/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/*!**************************************!*\
  !*** ./chunks/context-weak/three.js ***!
  \**************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-19 */
/***/ ((module) => {

module.exports = 3;


/***/ }),
/* 1 */
/*!**************************************!*\
  !*** ./chunks/context-weak/index.js ***!
  \**************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-6:3 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

it("should not bundle context requires with asyncMode === 'weak'", function() {
	var contextRequire = __webpack_require__(3);
	expect(function() {
		contextRequire("./two")
	}).toThrowError(/not available/);
});

it("should find module with asyncMode === 'weak' when required elsewhere", function() {
	var contextRequire = __webpack_require__(4);
	expect(contextRequire("./three")).toBe(3);
	__webpack_require__(/*! ./three */ 0); // in a real app would be served as a separate chunk
});

it("should find module with asyncMode === 'weak' when required elsewhere (recursive)", function() {
	var contextRequire = __webpack_require__(5);
	expect(contextRequire("./dir/four")).toBe(4);
	__webpack_require__(/*! ./dir/four */ 2); // in a real app would be served as a separate chunk
});


/***/ }),
/* 2 */
/*!*****************************************!*\
  !*** ./chunks/context-weak/dir/four.js ***!
  \*****************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-19 */
/***/ ((module) => {

module.exports = 4;


/***/ }),
/* 3 */
/*!****************************************************!*\
  !*** ./chunks/context-weak/ weak nonrecursive two ***!
  \****************************************************/
/*! default exports */
/*! exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module, __webpack_require__.o, __webpack_require__, __webpack_require__.m, __webpack_require__.* */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./two": null,
	"./two.js": null
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	if(!__webpack_require__.m[id]) {
		var e = new Error("Module '" + req + "' ('" + id + "') is not available (weak dependency)");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
webpackContext.id = 3;
module.exports = webpackContext;

/***/ }),
/* 4 */
/*!***************************************************!*\
  !*** ./chunks/context-weak/ weak nonrecursive .+ ***!
  \***************************************************/
/*! default exports */
/*! exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module, __webpack_require__.o, __webpack_require__, __webpack_require__.m, __webpack_require__.* */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	".": 1,
	"./": 1,
	"./index": 1,
	"./index.js": 1,
	"./three": 0,
	"./three.js": 0,
	"./two": null,
	"./two.js": null
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	if(!__webpack_require__.m[id]) {
		var e = new Error("Module '" + req + "' ('" + id + "') is not available (weak dependency)");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
webpackContext.id = 4;
module.exports = webpackContext;

/***/ }),
/* 5 */
/*!**************************************!*\
  !*** ./chunks/context-weak/ weak .+ ***!
  \**************************************/
/*! default exports */
/*! exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module, __webpack_require__.o, __webpack_require__, __webpack_require__.m, __webpack_require__.* */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	".": 1,
	"./": 1,
	"./dir/four": 2,
	"./dir/four.js": 2,
	"./index": 1,
	"./index.js": 1,
	"./three": 0,
	"./three.js": 0,
	"./two": null,
	"./two.js": null
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	if(!__webpack_require__.m[id]) {
		var e = new Error("Module '" + req + "' ('" + id + "') is not available (weak dependency)");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
webpackContext.id = 5;
module.exports = webpackContext;

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module factories are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__(1);
/******/ 	
/******/ })()
;