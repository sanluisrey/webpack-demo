/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/*!*******************************************!*\
  !*** ./parsing/context/templates/tmpl.js ***!
  \*******************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-33 */
/***/ ((module) => {

module.exports = "test template";

/***/ }),
/* 1 */
/*!*****************************************************!*\
  !*** ./parsing/context/templates/templateLoader.js ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-3:1 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = function(name) {
	return __webpack_require__(4)(name);
}

/***/ }),
/* 2 */
/*!*************************************************************!*\
  !*** ./parsing/context/templates/templateLoaderIndirect.js ***!
  \*************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-7:1 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = function(name) {
	var a = load(__webpack_require__(4), name);
	var r = undefined;
	var b = __webpack_require__(4)(name);
	if(a !== b) return "FAIL";
	return a;
}

function load(requireFunction, name) {
	return requireFunction(name);
}

/***/ }),
/* 3 */
/*!**************************************************!*\
  !*** ./parsing/context/templates/subdir/tmpl.js ***!
  \**************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-40 */
/***/ ((module) => {

module.exports = "subdir test template";

/***/ }),
/* 4 */
/*!*****************************************!*\
  !*** ./parsing/context/templates/ sync ***!
  \*****************************************/
/*! default exports */
/*! exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module, __webpack_require__.o */
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 4;
module.exports = webpackEmptyContext;

/***/ }),
/* 5 */
/*!*************************************************************************************************************!*\
  !*** ./parsing/context/loaders/queryloader.js?dog=bark!./parsing/context/templates/subdir/tmpl.js?cat=meow ***!
  \*************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-118 */
/***/ ((module) => {

module.exports = {"resourceQuery":"?cat=meow","query":"?dog=bark","prev":"module.exports = \"subdir test template\";"}

/***/ }),
/* 6 */
/*!****************************************************************************************************************!*\
  !*** ./parsing/context/loaders/queryloader.js?dog=bark!./parsing/context/templates/templateLoader.js?cat=meow ***!
  \****************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-137 */
/***/ ((module) => {

module.exports = {"resourceQuery":"?cat=meow","query":"?dog=bark","prev":"module.exports = function(name) {\n\treturn require(name);\n}"}

/***/ }),
/* 7 */
/*!************************************************************************************************************************!*\
  !*** ./parsing/context/loaders/queryloader.js?dog=bark!./parsing/context/templates/templateLoaderIndirect.js?cat=meow ***!
  \************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-307 */
/***/ ((module) => {

module.exports = {"resourceQuery":"?cat=meow","query":"?dog=bark","prev":"module.exports = function(name) {\n\tvar a = load(require, name);\n\tvar r = require;\n\tvar b = r(name);\n\tif(a !== b) return \"FAIL\";\n\treturn a;\n}\n\nfunction load(requireFunction, name) {\n\treturn requireFunction(name);\n}"}

/***/ }),
/* 8 */
/*!******************************************************************************************************!*\
  !*** ./parsing/context/loaders/queryloader.js?dog=bark!./parsing/context/templates/tmpl.js?cat=meow ***!
  \******************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-111 */
/***/ ((module) => {

module.exports = {"resourceQuery":"?cat=meow","query":"?dog=bark","prev":"module.exports = \"test template\";"}

/***/ }),
/* 9 */
/*!*******************************************************!*\
  !*** ./parsing/context/templates/node_modules/xyz.js ***!
  \*******************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-23 */
/***/ ((module) => {

module.exports = "xyz";

/***/ }),
/* 10 */
/*!*************************************************!*\
  !*** ./parsing/context/templates/dump-file.txt ***!
  \*************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:5)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> This is a file!\n| \n| with some content");

/***/ }),
/* 11 */
/*!************************************************************************************************************!*\
  !*** ./parsing/context/loaders/queryloader.js?dog=bark!./parsing/context/templates/dump-file.txt?cat=meow ***!
  \************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-142 */
/***/ ((module) => {

module.exports = {"resourceQuery":"?cat=meow","query":"?dog=bark","prev":"This is a file!\n\nwith some content\n\nit should break webpack :)"}

/***/ }),
/* 12 */
/*!**************************************************!*\
  !*** ./parsing/context/templates/ sync ^\.\/.*$ ***!
  \**************************************************/
/*! default exports */
/*! exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module, __webpack_require__.o, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./dump-file.txt": 10,
	"./subdir/tmpl": 3,
	"./subdir/tmpl.js": 3,
	"./templateLoader": 1,
	"./templateLoader.js": 1,
	"./templateLoaderIndirect": 2,
	"./templateLoaderIndirect.js": 2,
	"./tmpl": 0,
	"./tmpl.js": 0
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
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
module.exports = webpackContext;
webpackContext.id = 12;

/***/ }),
/* 13 */,
/* 14 */
/*!***************************************************************************************************************!*\
  !*** ./parsing/context/templates/ ?cat=meow sync ./parsing/context/loaders/queryloader.js?dog=bark! ^\.\/.*$ ***!
  \***************************************************************************************************************/
/*! default exports */
/*! exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module, __webpack_require__.o, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./dump-file.txt": 11,
	"./subdir/tmpl": 5,
	"./subdir/tmpl.js": 5,
	"./templateLoader": 6,
	"./templateLoader.js": 6,
	"./templateLoaderIndirect": 7,
	"./templateLoaderIndirect.js": 7,
	"./tmpl": 8,
	"./tmpl.js": 8
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
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
module.exports = webpackContext;
webpackContext.id = 14;

/***/ }),
/* 15 */
/*!*******************************************!*\
  !*** ./parsing/context/templates/ sync . ***!
  \*******************************************/
/*! default exports */
/*! exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module, __webpack_require__.o, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./dump-file.txt": 10,
	"./subdir/tmpl": 3,
	"./subdir/tmpl.js": 3,
	"./templateLoader": 1,
	"./templateLoader.js": 1,
	"./templateLoaderIndirect": 2,
	"./templateLoaderIndirect.js": 2,
	"./tmpl": 0,
	"./tmpl.js": 0,
	"xyz": 9,
	"xyz.js": 9
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
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
module.exports = webpackContext;
webpackContext.id = 15;

/***/ }),
/* 16 */
/*!***************************************************!*\
  !*** ./parsing/context/templates/ sync ^\.\/.*l$ ***!
  \***************************************************/
/*! default exports */
/*! exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module, __webpack_require__.o, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./subdir/tmpl": 3,
	"./tmpl": 0
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
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
module.exports = webpackContext;
webpackContext.id = 16;

/***/ }),
/* 17 */
/*!***************************************************!*\
  !*** ./parsing/context/templates/ sync ^\.\/t.*$ ***!
  \***************************************************/
/*! default exports */
/*! exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module, __webpack_require__.o, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./templateLoader": 1,
	"./templateLoader.js": 1,
	"./templateLoaderIndirect": 2,
	"./templateLoaderIndirect.js": 2,
	"./tmpl": 0,
	"./tmpl.js": 0
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
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
module.exports = webpackContext;
webpackContext.id = 17;

/***/ }),
/* 18 */
/*!****************************************************!*\
  !*** ./parsing/context/templates/ sync ^\.\/t.*l$ ***!
  \****************************************************/
/*! default exports */
/*! exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module, __webpack_require__.o, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./tmpl": 0
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
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
module.exports = webpackContext;
webpackContext.id = 18;

/***/ }),
/* 19 */
/*!*************************************************************!*\
  !*** ./parsing/context/templates/ sync ^\.\/notExisting.*$ ***!
  \*************************************************************/
/*! default exports */
/*! exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module, __webpack_require__.o */
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 19;
module.exports = webpackEmptyContext;

/***/ }),
/* 20 */
/*!**********************************************************!*\
  !*** ./parsing/context/templates/ sync ^\.\/notExisting ***!
  \**********************************************************/
/*! default exports */
/*! exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module, __webpack_require__.o */
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 20;
module.exports = webpackEmptyContext;

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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************************!*\
  !*** ./parsing/context/index.js ***!
  \**********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-12:3 */
it("should be able to load a file with the require.context method", function() {
	expect(__webpack_require__(12)("./tmpl")).toBe("test template");
	expect((__webpack_require__(12))("./tmpl")).toBe("test template");
	expect((__webpack_require__(12)("./tmpl"))).toBe("test template");
	expect(__webpack_require__(14)("./tmpl")).toEqual({
		resourceQuery: "?cat=meow",
		query: "?dog=bark",
		prev: 'module.exports = "test template";'
	});
	expect(__webpack_require__(12) ( "./subdir/tmpl.js" )).toBe("subdir test template");
	expect(__webpack_require__(15)("xyz")).toBe("xyz");
});

it("should automatically create contexts", function() {
	var template = "tmpl", templateFull = "./tmpl.js";
	var mp = "mp", tmp = "tmp", mpl = "mpl";
	expect(__webpack_require__(12)("./" + template)).toBe("test template");
	expect(__webpack_require__(16)("./" + tmp + "l")).toBe("test template");
	expect(__webpack_require__(17)("./t" + mpl)).toBe("test template");
	expect(__webpack_require__(18)("./t" + mp + "l")).toBe("test template");
});

it("should be able to require.resolve with automatical context", function() {
	var template = "tmpl";
	expect(/*require.resolve*/(__webpack_require__(12).resolve("./" + template))).toBe(
		/*require.resolve*/(/*! ./templates/tmpl */ 0)
	);
});

it("should be able to use renaming combined with a context", function() {
	var renamedRequire = undefined;
	var template = "tmpl";
	expect(__webpack_require__(12)("./" + template)).toBe("test template");
});

it("should compile an empty context", function() {
	var x = "xxx";
	expect(function() {
		__webpack_require__(19)("./notExisting" + x);
	}).toThrowError(/xxx/);
});

it("should execute an empty context", function() {
	var context;
	expect(function() {
		context = __webpack_require__(20);
	}).not.toThrowError();
	expect(function() {
		context("");
	}).toThrowError();
});

})();

/******/ })()
;