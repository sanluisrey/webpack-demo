/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/*!**************************************!*\
  !*** ./parsing/evaluate/regexp/a.js ***!
  \**************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-19 */
/***/ ((module) => {

module.exports = 1;


/***/ }),
/* 1 */
/*!************************************************************************!*\
  !*** ./parsing/evaluate/resourceFragment/returnRF.js#resourceFragment ***!
  \************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-36 */
/***/ ((module) => {

var __resourceFragment = "#resourceFragment";
module.exports = __resourceFragment;


/***/ }),
/* 2 */
/*!*******************************!*\
  !*** ./parsing/evaluate/a.js ***!
  \*******************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-21 */
/***/ ((module) => {

module.exports = "a";

/***/ }),
/* 3 */
/*!**********************************************************!*\
  !*** ./parsing/evaluate/resourceFragment/returnRF.js#.. ***!
  \**********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-36 */
/***/ ((module) => {

var __resourceFragment = "#..";
module.exports = __resourceFragment;


/***/ }),
/* 4 */
/*!***********************************************!*\
  !*** ./parsing/evaluate/regexp/a.filtered.js ***!
  \***********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-19 */
/***/ ((module) => {

module.exports = 2;


/***/ }),
/* 5 */
/*!******************************************************************!*\
  !*** ./parsing/evaluate/resourceQuery/returnRQ.js?resourceQuery ***!
  \******************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-33 */
/***/ ((module) => {

var __resourceQuery = "?resourceQuery";
module.exports = __resourceQuery;

/***/ }),
/* 6 */
/*!*******************************************************!*\
  !*** ./parsing/evaluate/resourceFragment/index.js#.. ***!
  \*******************************************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [maybe used in main (runtime-defined)] -> ./parsing/evaluate/resourceFragment/returnRF.js#resourceFragment */
/*! runtime requirements: module, __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-3:31 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ../resourceFragment/returnRF#resourceFragment */ 1);


/***/ }),
/* 7 */
/*!*************************************************************************!*\
  !*** ./parsing/evaluate/regexp/ sync nonrecursive (?<%21filtered)\.js$ ***!
  \*************************************************************************/
/*! default exports */
/*! exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module, __webpack_require__.o, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./a.js": 0
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
webpackContext.id = 7;

/***/ }),
/* 8 */,
/* 9 */
/*!***************************************************************************************************************!*\
  !*** ./parsing/evaluate/resourceQuery/index.js?/Users/yoh/Projects/repos/webpack/test/cases/parsing/evaluate ***!
  \***************************************************************************************************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [maybe used in main (runtime-defined)] -> ./parsing/evaluate/resourceQuery/returnRQ.js?resourceQuery */
/*! runtime requirements: module, __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-119 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./parsing/evaluate/resourceQuery/returnRQ?resourceQuery */ 5);

/***/ }),
/* 10 */
/*!******************************************************************************************************************!*\
  !*** ./parsing/evaluate/resourceFragment/index.js#/Users/yoh/Projects/repos/webpack/test/cases/parsing/evaluate ***!
  \******************************************************************************************************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [maybe used in main (runtime-defined)] -> ./parsing/evaluate/resourceFragment/returnRF.js#resourceFragment */
/*! runtime requirements: module, __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-3:31 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./parsing/evaluate/resourceFragment/returnRF#resourceFragment */ 1);


/***/ }),
/* 11 */
/*!**********************************************************!*\
  !*** ./parsing/evaluate/resourceFragment/ sync ^\.\/.*$ ***!
  \**********************************************************/
/*! default exports */
/*! exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module, __webpack_require__.o, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./": 6,
	"./index": 6,
	"./index.js": 6,
	"./returnRF": 3,
	"./returnRF.js": 3
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
webpackContext.id = 11;

/***/ }),
/* 12 */
/*!**************************************************************************!*\
  !*** ./parsing/evaluate/regexp/ sync nonrecursive (?<%21FILTERED)\.js$/ ***!
  \**************************************************************************/
/*! default exports */
/*! exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module, __webpack_require__.o, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./a.js": 0
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
/* 13 */
/*!************************************************!*\
  !*** ./parsing/evaluate/regexp/ sync ^\.\/.*$ ***!
  \************************************************/
/*! default exports */
/*! exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module, __webpack_require__.o, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./a": 0,
	"./a.filtered": 4,
	"./a.filtered.js": 4,
	"./a.js": 0
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
webpackContext.id = 13;

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
/*!***********************************!*\
  !*** ./parsing/evaluate/index.js ***!
  \***********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-4:3 */
it("should evaluate null", function () {
	const y =  false ? 0 : __webpack_require__(/*! ./a */ 2);
	if (false) {}
});

it("should evaluate undefined", function () {
	const y =  false ? 0 : __webpack_require__(/*! ./a */ 2);
	if (false) {}
	undefined && 0;
});

it("should evaluate logical expression", function () {
	const value1 = "hello" || 0;
	const value2 =  true || 0;
	const value3 = "" && 0;
	const value4 =  false && 0;
	const value5 =  true && (() => "value5")();
	const value6 =  false || (() => "value6")();
	const value7 = (function () { return false&&0})();
	const value8 =  true || 0;
	const value9 =  false && 0;
	const value91 =  false && 0;
	const value92 =  false && 0;
	const value93 =
		`hello${Math.random()}` === `world${Math.random()}` && 0;
	const value94 =
		`${Math.random()}hello` != `${Math.random()}world` || 0;
	let value95 = 1;
	const value96 = `${value95++}hello` != `${value95++}world` || 0;

	if (`${value95++}hello` === `${value95++}world`) {}

	expect(value1).toBe("hello");
	expect(value2).toBe(true);
	expect(value3).toBe("");
	expect(value4).toBe(false);
	expect(value5).toBe("value5");
	expect(value6).toBe("value6");
	expect(value7).toBe(false);
	expect(value8).toBe(true);
	expect(value9).toBe(false);
	expect(value91).toBe(false);
	expect(value92).toBe(false);
	expect(value93).toBe(false);
	expect(value94).toBe(true);
	expect(value95).toBe(5);
	expect(value96).toBe(true);
});

it("shouldn't evaluate expression", function () {
	const value = "";
	const x = value + "" ? "fail" : "ok";
	expect(x).toBe("ok");
});

it("should short-circuit evaluating", function () {
	let expr;
	const a =  false ? 0 : __webpack_require__(/*! ./a */ 2);
	const b =  true ? __webpack_require__(/*! ./a */ 2) : 0;
});

it("should evaluate __dirname and __resourceQuery with replace and substr", function () {
	const result = __webpack_require__(/*! ./resourceQuery/index?/Users/yoh/Projects/repos/webpack/test/cases/parsing/evaluate */ 9);
	expect(result).toEqual("?resourceQuery");
});

it("should evaluate __dirname and __resourceFragment with replace and substr", function () {
	const result = __webpack_require__(/*! ./resourceFragment/index#/Users/yoh/Projects/repos/webpack/test/cases/parsing/evaluate */ 10);
	expect(result).toEqual("#resourceFragment");
});

it("should allow resourceFragment in context", function () {
	const fn = x => __webpack_require__(11)(`./${x}`);
	expect(fn("index")).toEqual("#resourceFragment");
	expect(fn("returnRF")).toBe("#..");
});

it("should try to evaluate new RegExp()", function () {
	function expectAOnly (r) {
		r.keys().forEach(key => {
			expect(r(key)).toBe(1);
		});
	}

	expectAOnly(
		__webpack_require__(7)
	);
	expectAOnly(
		__webpack_require__(12)
	);
	expectAOnly(
		__webpack_require__(7)
	);
});

it("should not evaluate new RegExp for redefined RegExp", () => {
	const RegExp = function() { return /other/; };
	expect(__webpack_require__(13)("./" + ("a".replace(new RegExp("a"), "wrong")))).toBe(1);
});

})();

/******/ })()
;