/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/*!*****************************************************!*\
  !*** ./mjs/namespace-object-lazy/dir-cjs/null.js?2 ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-22 */
/***/ ((module) => {

module.exports = null;


/***/ }),
/* 1 */
/*!*******************************************************!*\
  !*** ./mjs/namespace-object-lazy/dir-mixed/null.js?2 ***!
  \*******************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-22 */
/***/ ((module) => {

module.exports = null;


/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/*!*********************************************!*\
  !*** ./mjs/namespace-object-lazy/index.mjs ***!
  \*********************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__, __webpack_require__.e, __webpack_require__.t, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-13:3 */
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
it("should receive a namespace object when importing commonjs", function (done) {
	__webpack_require__.e(/*! import() */ 14).then(__webpack_require__.t.bind(__webpack_require__, /*! ./cjs.js */ 39, 19))
		.then(function (result) {
			expect(result).toEqual(
				nsObj({
					default: { named: "named", default: "default" },
					named: "named"
				})
			);
			done();
		})
		.catch(done);
});

it("should receive a namespace object when importing commonjs with __esModule", function (done) {
	__webpack_require__.e(/*! import() */ 15).then(__webpack_require__.t.bind(__webpack_require__, /*! ./cjs-esmodule.js */ 40, 19))
		.then(function (result) {
			expect(result).toEqual(
				nsObj({
					default: { __esModule: true, named: "named", default: "default" },
					named: "named"
				})
			);
			done();
		})
		.catch(done);
});

function contextCJS(name) {
	return Promise.all([
		__webpack_require__(15)(`./${name}.js`),
		__webpack_require__(16)(`./${name}.js`),
		__webpack_require__(17)(`./${name}.js`)
	]).then(function (results) {
		return __webpack_require__(21)(`./${name}.js`).then(
			function (r) {
				results.push(r);
				return results;
			}
		);
	});
}

function contextHarmony(name) {
	return Promise.all([
		__webpack_require__(22)(`./${name}.js`),
		__webpack_require__(23)(`./${name}.js`),
		__webpack_require__(24)(`./${name}.js`)
	]).then(function (results) {
		return __webpack_require__(28)(`./${name}.js`).then(
			function (r) {
				results.push(r);
				return results;
			}
		);
	});
}

function contextMixed(name) {
	return Promise.all([
		__webpack_require__(29)(`./${name}`),
		__webpack_require__(30)(`./${name}`),
		__webpack_require__(31)(`./${name}`)
	]).then(function (results) {
		return __webpack_require__(36)(`./${name}`).then(
			function (r) {
				results.push(r);
				return results;
			}
		);
	});
}

function promiseTest(promise, equalsTo) {
	return promise.then(function (results) {
		expect(results).toEqual(results.map(() => equalsTo));
	});
}

it("should receive a namespace object when importing commonjs via context", function () {
	return Promise.all([
		promiseTest(
			contextCJS("one"),
			nsObj({ default: { named: "named", default: "default" }, named: "named" })
		),
		promiseTest(
			contextCJS("two"),
			nsObj({
				default: { __esModule: true, named: "named", default: "default" },
				named: "named"
			})
		),
		promiseTest(
			contextCJS("three"),
			nsObj({ default: { named: "named", default: "default" }, named: "named" })
		),
		promiseTest(contextCJS("null"), nsObj({ default: null }))
	]);
});

it("should receive a namespace object when importing harmony via context", function () {
	return Promise.all([
		promiseTest(
			contextHarmony("one"),
			nsObj({ named: "named", default: "default" })
		),
		promiseTest(
			contextHarmony("two"),
			nsObj({ named: "named", default: "default" })
		),
		promiseTest(
			contextHarmony("three"),
			nsObj({ named: "named", default: "default" })
		)
	]);
});

it("should receive a namespace object when importing mixed content via context", function () {
	return Promise.all([
		promiseTest(
			contextMixed("one.js"),
			nsObj({ default: { named: "named", default: "default" }, named: "named" })
		),
		promiseTest(
			contextMixed("two.js"),
			nsObj({
				default: { __esModule: true, named: "named", default: "default" },
				named: "named"
			})
		),
		promiseTest(
			contextMixed("three.js"),
			nsObj({ named: "named", default: "default" })
		),
		promiseTest(contextMixed("null.js"), nsObj({ default: null })),
		promiseTest(
			contextMixed("json.json"),
			nsObj({ default: { named: "named", default: "default" } })
		)
	]);
});


/***/ }),
/* 15 */
/*!**************************************************************************************!*\
  !*** ./mjs/namespace-object-lazy/dir-cjs/ lazy ^\.\/.*\.js$ strict namespace object ***!
  \**************************************************************************************/
/*! default exports */
/*! exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module, __webpack_require__.o, __webpack_require__, __webpack_require__.e, __webpack_require__.t, __webpack_require__.* */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./null.js": [
		2,
		0
	],
	"./one.js": [
		4,
		2
	],
	"./three.js": [
		5,
		3
	],
	"./two.js": [
		6,
		4
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__.t(id, 3 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 15;
module.exports = webpackAsyncContext;

/***/ }),
/* 16 */
/*!**********************************************************************************************!*\
  !*** ./mjs/namespace-object-lazy/dir-cjs/ ?1 lazy-once ^\.\/.*\.js$ strict namespace object ***!
  \**********************************************************************************************/
/*! default exports */
/*! exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module, __webpack_require__.o, __webpack_require__, __webpack_require__.e, __webpack_require__.t, __webpack_require__.* */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./null.js": 37,
	"./one.js": 41,
	"./three.js": 42,
	"./two.js": 43
};


function webpackAsyncContext(req) {
	return webpackAsyncContextResolve(req).then(id => {
		return __webpack_require__.t(id, 3 | 16);;
	});
}
function webpackAsyncContextResolve(req) {
	return __webpack_require__.e(/*! lazy-once context */ 12).then(() => {
		if(!__webpack_require__.o(map, req)) {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		}
		return map[req];
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.resolve = webpackAsyncContextResolve;
webpackAsyncContext.id = 16;
module.exports = webpackAsyncContext;

/***/ }),
/* 17 */
/*!******************************************************************************************!*\
  !*** ./mjs/namespace-object-lazy/dir-cjs/ ?2 eager ^\.\/.*\.js$ strict namespace object ***!
  \******************************************************************************************/
/*! default exports */
/*! exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module, __webpack_require__.o, __webpack_require__, __webpack_require__.t, __webpack_require__.* */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./null.js": 0,
	"./one.js": 18,
	"./three.js": 19,
	"./two.js": 20
};


function webpackAsyncContext(req) {
	return webpackAsyncContextResolve(req).then(id => {
		return __webpack_require__.t(id, 3);
	});
}
function webpackAsyncContextResolve(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		if(!__webpack_require__.o(map, req)) {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		}
		return map[req];
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.resolve = webpackAsyncContextResolve;
webpackAsyncContext.id = 17;
module.exports = webpackAsyncContext;

/***/ }),
/* 18 */
/*!****************************************************!*\
  !*** ./mjs/namespace-object-lazy/dir-cjs/one.js?2 ***!
  \****************************************************/
/*! default exports */
/*! export default [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export named [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_exports__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-24 */
/***/ ((__unused_webpack_module, exports) => {

exports.named = "named";
exports["default"] = "default";


/***/ }),
/* 19 */
/*!******************************************************!*\
  !*** ./mjs/namespace-object-lazy/dir-cjs/three.js?2 ***!
  \******************************************************/
/*! default exports */
/*! export default [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export named [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_exports__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-24 */
/***/ ((__unused_webpack_module, exports) => {

exports.named = "named";
exports["default"] = "default";


/***/ }),
/* 20 */
/*!****************************************************!*\
  !*** ./mjs/namespace-object-lazy/dir-cjs/two.js?2 ***!
  \****************************************************/
/*! flagged exports */
/*! export __esModule [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export default [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export named [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_exports__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-26 */
/***/ ((__unused_webpack_module, exports) => {

exports.__esModule = true;
exports.named = "named";
exports["default"] = "default";



/***/ }),
/* 21 */
/*!********************************************************************************************!*\
  !*** ./mjs/namespace-object-lazy/dir-cjs/ async-weak ^\.\/.*\.js$ strict namespace object ***!
  \********************************************************************************************/
/*! default exports */
/*! exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module, __webpack_require__.o, __webpack_require__, __webpack_require__.m, __webpack_require__.e, __webpack_require__.t, __webpack_require__.* */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./null.js": 2,
	"./one.js": 4,
	"./three.js": 5,
	"./two.js": 6
};


function webpackAsyncContext(req) {
	return webpackAsyncContextResolve(req).then(id => {
		if(!__webpack_require__.m[id]) {
			var e = new Error("Module '" + req + "' ('" + id + "') is not available (weak dependency)");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		}
		return __webpack_require__.t(id, 3 | 16);
	});
}
function webpackAsyncContextResolve(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		if(!__webpack_require__.o(map, req)) {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		}
		return map[req];
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.resolve = webpackAsyncContextResolve;
webpackAsyncContext.id = 21;
module.exports = webpackAsyncContext;

/***/ }),
/* 22 */
/*!******************************************************************************************!*\
  !*** ./mjs/namespace-object-lazy/dir-harmony/ lazy ^\.\/.*\.js$ strict namespace object ***!
  \******************************************************************************************/
/*! default exports */
/*! exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module, __webpack_require__.o, __webpack_require__, __webpack_require__.e, __webpack_require__.* */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./one.js": [
		7,
		5
	],
	"./three.js": [
		8,
		6
	],
	"./two.js": [
		9,
		7
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 22;
module.exports = webpackAsyncContext;

/***/ }),
/* 23 */
/*!**************************************************************************************************!*\
  !*** ./mjs/namespace-object-lazy/dir-harmony/ ?1 lazy-once ^\.\/.*\.js$ strict namespace object ***!
  \**************************************************************************************************/
/*! default exports */
/*! exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module, __webpack_require__.o, __webpack_require__, __webpack_require__.e, __webpack_require__.* */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./one.js": 44,
	"./three.js": 45,
	"./two.js": 46
};


function webpackAsyncContext(req) {
	return webpackAsyncContextResolve(req).then(__webpack_require__);
}
function webpackAsyncContextResolve(req) {
	return __webpack_require__.e(/*! lazy-once context */ 16).then(() => {
		if(!__webpack_require__.o(map, req)) {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		}
		return map[req];
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.resolve = webpackAsyncContextResolve;
webpackAsyncContext.id = 23;
module.exports = webpackAsyncContext;

/***/ }),
/* 24 */
/*!**********************************************************************************************!*\
  !*** ./mjs/namespace-object-lazy/dir-harmony/ ?2 eager ^\.\/.*\.js$ strict namespace object ***!
  \**********************************************************************************************/
/*! default exports */
/*! exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module, __webpack_require__.o, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./one.js": 25,
	"./three.js": 26,
	"./two.js": 27
};


function webpackAsyncContext(req) {
	return webpackAsyncContextResolve(req).then(__webpack_require__);
}
function webpackAsyncContextResolve(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		if(!__webpack_require__.o(map, req)) {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		}
		return map[req];
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.resolve = webpackAsyncContextResolve;
webpackAsyncContext.id = 24;
module.exports = webpackAsyncContext;

/***/ }),
/* 25 */
/*!********************************************************!*\
  !*** ./mjs/namespace-object-lazy/dir-harmony/one.js?2 ***!
  \********************************************************/
/*! namespace exports */
/*! export default [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export named [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "named": () => (/* binding */ named)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("default");
var named = "named";


/***/ }),
/* 26 */
/*!**********************************************************!*\
  !*** ./mjs/namespace-object-lazy/dir-harmony/three.js?2 ***!
  \**********************************************************/
/*! namespace exports */
/*! export default [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export named [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "named": () => (/* binding */ named)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("default");
var named = "named";


/***/ }),
/* 27 */
/*!********************************************************!*\
  !*** ./mjs/namespace-object-lazy/dir-harmony/two.js?2 ***!
  \********************************************************/
/*! namespace exports */
/*! export default [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export named [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "named": () => (/* binding */ named)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("default");
var named = "named";


/***/ }),
/* 28 */
/*!************************************************************************************************!*\
  !*** ./mjs/namespace-object-lazy/dir-harmony/ async-weak ^\.\/.*\.js$ strict namespace object ***!
  \************************************************************************************************/
/*! default exports */
/*! exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module, __webpack_require__.o, __webpack_require__, __webpack_require__.m, __webpack_require__.e, __webpack_require__.* */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./one.js": 7,
	"./three.js": 8,
	"./two.js": 9
};


function webpackAsyncContext(req) {
	return webpackAsyncContextResolve(req).then(id => {
		if(!__webpack_require__.m[id]) {
			var e = new Error("Module '" + req + "' ('" + id + "') is not available (weak dependency)");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		}
		return __webpack_require__(id);
	});
}
function webpackAsyncContextResolve(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		if(!__webpack_require__.o(map, req)) {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		}
		return map[req];
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.resolve = webpackAsyncContextResolve;
webpackAsyncContext.id = 28;
module.exports = webpackAsyncContext;

/***/ }),
/* 29 */
/*!************************************************************************************!*\
  !*** ./mjs/namespace-object-lazy/dir-mixed/ lazy ^\.\/.*$ strict namespace object ***!
  \************************************************************************************/
/*! default exports */
/*! exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module, __webpack_require__.o, __webpack_require__, __webpack_require__.e, __webpack_require__.t, __webpack_require__.* */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./json.json": [
		10,
		1,
		8
	],
	"./null.js": [
		3,
		3,
		1
	],
	"./one.js": [
		11,
		3,
		9
	],
	"./three.js": [
		12,
		9,
		10
	],
	"./two.js": [
		13,
		3,
		11
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[2]).then(() => {
		return __webpack_require__.t(id, ids[1] | 16)
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 29;
module.exports = webpackAsyncContext;

/***/ }),
/* 30 */
/*!********************************************************************************************!*\
  !*** ./mjs/namespace-object-lazy/dir-mixed/ ?1 lazy-once ^\.\/.*$ strict namespace object ***!
  \********************************************************************************************/
/*! default exports */
/*! exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module, __webpack_require__.o, __webpack_require__, __webpack_require__.e, __webpack_require__.t, __webpack_require__.* */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./json.json": 47,
	"./null.js": 38,
	"./one.js": 48,
	"./three.js": 49,
	"./two.js": 50
};
var fakeMap = {
	"38": 3,
	"47": 1,
	"48": 3,
	"49": 9,
	"50": 3
};

function webpackAsyncContext(req) {
	return webpackAsyncContextResolve(req).then(id => {
		return __webpack_require__.t(id, fakeMap[id] | 16);
	});
}
function webpackAsyncContextResolve(req) {
	return __webpack_require__.e(/*! lazy-once context */ 13).then(() => {
		if(!__webpack_require__.o(map, req)) {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		}
		return map[req];
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.resolve = webpackAsyncContextResolve;
webpackAsyncContext.id = 30;
module.exports = webpackAsyncContext;

/***/ }),
/* 31 */
/*!****************************************************************************************!*\
  !*** ./mjs/namespace-object-lazy/dir-mixed/ ?2 eager ^\.\/.*$ strict namespace object ***!
  \****************************************************************************************/
/*! default exports */
/*! exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module, __webpack_require__.o, __webpack_require__, __webpack_require__.t, __webpack_require__.* */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./json.json": 32,
	"./null.js": 1,
	"./one.js": 33,
	"./three.js": 34,
	"./two.js": 35
};
var fakeMap = {
	"1": 3,
	"32": 1,
	"33": 3,
	"34": 9,
	"35": 3
};

function webpackAsyncContext(req) {
	return webpackAsyncContextResolve(req).then(id => {
		return __webpack_require__.t(id, fakeMap[id])
	});
}
function webpackAsyncContextResolve(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		if(!__webpack_require__.o(map, req)) {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		}
		return map[req];
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.resolve = webpackAsyncContextResolve;
webpackAsyncContext.id = 31;
module.exports = webpackAsyncContext;

/***/ }),
/* 32 */
/*!*********************************************************!*\
  !*** ./mjs/namespace-object-lazy/dir-mixed/json.json?2 ***!
  \*********************************************************/
/*! default exports */
/*! export default [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export named [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"default":"default","named":"named"}');

/***/ }),
/* 33 */
/*!******************************************************!*\
  !*** ./mjs/namespace-object-lazy/dir-mixed/one.js?2 ***!
  \******************************************************/
/*! default exports */
/*! export default [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export named [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_exports__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-24 */
/***/ ((__unused_webpack_module, exports) => {

exports.named = "named";
exports["default"] = "default";


/***/ }),
/* 34 */
/*!********************************************************!*\
  !*** ./mjs/namespace-object-lazy/dir-mixed/three.js?2 ***!
  \********************************************************/
/*! namespace exports */
/*! export default [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export named [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "named": () => (/* binding */ named)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("default");
var named = "named";


/***/ }),
/* 35 */
/*!******************************************************!*\
  !*** ./mjs/namespace-object-lazy/dir-mixed/two.js?2 ***!
  \******************************************************/
/*! flagged exports */
/*! export __esModule [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export default [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export named [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_exports__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-26 */
/***/ ((__unused_webpack_module, exports) => {

exports.__esModule = true;
exports.named = "named";
exports["default"] = "default";



/***/ }),
/* 36 */
/*!******************************************************************************************!*\
  !*** ./mjs/namespace-object-lazy/dir-mixed/ async-weak ^\.\/.*$ strict namespace object ***!
  \******************************************************************************************/
/*! default exports */
/*! exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module, __webpack_require__.o, __webpack_require__, __webpack_require__.m, __webpack_require__.e, __webpack_require__.t, __webpack_require__.* */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./json.json": 10,
	"./null.js": 3,
	"./one.js": 11,
	"./three.js": 12,
	"./two.js": 13
};
var fakeMap = {
	"3": 3,
	"10": 1,
	"11": 3,
	"12": 9,
	"13": 3
};

function webpackAsyncContext(req) {
	return webpackAsyncContextResolve(req).then(id => {
		if(!__webpack_require__.m[id]) {
			var e = new Error("Module '" + req + "' ('" + id + "') is not available (weak dependency)");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		}
		return __webpack_require__.t(id, fakeMap[id] | 16)
	});
}
function webpackAsyncContextResolve(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		if(!__webpack_require__.o(map, req)) {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		}
		return map[req];
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.resolve = webpackAsyncContextResolve;
webpackAsyncContext.id = 36;
module.exports = webpackAsyncContext;

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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".bundle.js";
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
/******/ 	/* webpack/runtime/readFile chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "0" means "already loaded", Promise means loading
/******/ 		var installedChunks = {
/******/ 			17: 0
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++) {
/******/ 				if(installedChunks[chunkIds[i]]) {
/******/ 					installedChunks[chunkIds[i]][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 		
/******/ 		};
/******/ 		
/******/ 		// ReadFile + VM.run chunk loading for javascript
/******/ 		__webpack_require__.f.readFileVm = function(chunkId, promises) {
/******/ 		
/******/ 			var installedChunkData = installedChunks[chunkId];
/******/ 			if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 				// array of [resolve, reject, promise] means "currently loading"
/******/ 				if(installedChunkData) {
/******/ 					promises.push(installedChunkData[2]);
/******/ 				} else {
/******/ 					if(true) { // all chunks have JS
/******/ 						// load the chunk and return promise to it
/******/ 						var promise = new Promise(function(resolve, reject) {
/******/ 							installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 							var filename = require('path').join(__dirname, "" + __webpack_require__.u(chunkId));
/******/ 							require('fs').readFile(filename, 'utf-8', function(err, content) {
/******/ 								if(err) return reject(err);
/******/ 								var chunk = {};
/******/ 								require('vm').runInThisContext('(function(exports, require, __dirname, __filename) {' + content + '\n})', filename)(chunk, require, require('path').dirname(filename), filename);
/******/ 								installChunk(chunk);
/******/ 							});
/******/ 						});
/******/ 						promises.push(installedChunkData[2] = promise);
/******/ 					} else installedChunks[chunkId] = 0;
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module factories are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__(14);
/******/ 	
/******/ })()
;