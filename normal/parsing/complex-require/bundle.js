/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/*!**************************************************!*\
  !*** ./parsing/complex-require/sync/syncTest.js ***!
  \**************************************************/
/*! namespace exports */
/*! export default [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("sync");


/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
/*!*********************************************************!*\
  !*** ./parsing/complex-require/sync/ sync ^\.\/.*Test$ ***!
  \*********************************************************/
/*! default exports */
/*! exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module, __webpack_require__.o, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./syncTest": 0
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
webpackContext.id = 3;

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/*!*****************************************************************************!*\
  !*** ./parsing/complex-require/abc/ lazy ^\.\/.*.*.*Test$ namespace object ***!
  \*****************************************************************************/
/*! default exports */
/*! exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module, __webpack_require__.o, __webpack_require__, __webpack_require__.e, __webpack_require__.* */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./abcTest": [
		1,
		0
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
webpackAsyncContext.id = 10;
module.exports = webpackAsyncContext;

/***/ }),
/* 11 */
/*!*************************************************************************!*\
  !*** ./parsing/complex-require/ lazy ^\.\/.*\/.*Test$ namespace object ***!
  \*************************************************************************/
/*! default exports */
/*! exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module, __webpack_require__.o, __webpack_require__, __webpack_require__.e, __webpack_require__.* */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./abc/abcTest": [
		1,
		0
	],
	"./sync/syncTest": [
		0
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
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 11;
module.exports = webpackAsyncContext;

/***/ }),
/* 12 */
/*!***********************************************************************!*\
  !*** ./parsing/complex-require/abc/ lazy ^\.\/.*.*$ namespace object ***!
  \***********************************************************************/
/*! default exports */
/*! exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module, __webpack_require__.o, __webpack_require__, __webpack_require__.e, __webpack_require__.* */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./abcTest": [
		1,
		0
	],
	"./abcTest.js": [
		1,
		0
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
webpackAsyncContext.id = 12;
module.exports = webpackAsyncContext;

/***/ }),
/* 13 */
/*!*************************************************************************!*\
  !*** ./parsing/complex-require/abc/ lazy ^\.\/.*Test$ namespace object ***!
  \*************************************************************************/
/*! default exports */
/*! exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module, __webpack_require__.o, __webpack_require__, __webpack_require__.e, __webpack_require__.* */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./abcTest": [
		1,
		0
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
webpackAsyncContext.id = 13;
module.exports = webpackAsyncContext;

/***/ }),
/* 14 */
/*!****************************************!*\
  !*** ./parsing/complex-require/cjs.js ***!
  \****************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__, __webpack_require__.e, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 2:0-19:2 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


it("should parse template strings in require.ensure requires", function(done) {
	var name = "abc";
	var suffix = "Test";

	__webpack_require__.e(/*! require.ensure */ 2).then((function(require) {
		var imports = [
			__webpack_require__(2)(`./${name}Test`),
			__webpack_require__(4)(`./${name}/${name}Test`),
			__webpack_require__(5)(`./${name}${suffix}`),
			__webpack_require__(6)(String.raw`./${name}/${name}${suffix}`)
		];

		for (var i = 0; i < imports.length; i++) {
			expect(imports[i].default).toEqual("ok");
		}
		done()
	}).bind(null, __webpack_require__))['catch'](__webpack_require__.oe)
})

it("should parse template strings in sync requires", function() {
	var name = "sync";
	var suffix = "Test";

	var imports = [
		__webpack_require__(3)(`./${name}Test`),
		__webpack_require__(15)(`./${name}${suffix}`),
		__webpack_require__(16)(String.raw`./${name.slice(0, 1)}y${name.slice(2)}${suffix}`),
		__webpack_require__(/*! ./sync/syncTest */ 0),
		__webpack_require__(17)(String.raw`./syncTest`)
	];

	for (var i = 0; i < imports.length; i++) {
		expect(imports[i].default).toEqual("sync");
	}
})

it("should parse template strings in require.resolve", function() {
	var name = "sync";

	// Arbitrary assertion; can't use .ok() as it could be 0,
	// can't use typeof as that depends on webpack config.
	expect(/*require.resolve*/(__webpack_require__(3).resolve(`./${name}Test`))).toBeDefined();
})

it("should parse .concat strings in require.ensure requires", function(done) {
	var name = "abc";
	var suffix = "Test";

	__webpack_require__.e(/*! require.ensure */ 3).then((function(require) {
		var imports = [
			__webpack_require__(2)("./".concat(name, "Test")),
			__webpack_require__(7)("./".concat(name, "/").concat(name, "Test")),
			__webpack_require__(8)("./".concat(name).concat(suffix))
		];

		for (var i = 0; i < imports.length; i++) {
			expect(imports[i].default).toEqual("ok");
		}
		done()
	}).bind(null, __webpack_require__))['catch'](__webpack_require__.oe)
})

it("should parse .concat strings in sync requires", function() {
	var name = "sync";
	var suffix = "Test";

	var imports = [
		__webpack_require__(3)("./".concat(name, "Test")),
		__webpack_require__(18)("./".concat(name).concat(suffix)),
		__webpack_require__(/*! ./sync/syncTest */ 0)
	];

	for (var i = 0; i < imports.length; i++) {
		expect(imports[i].default).toEqual("sync");
	}
})

it("should parse .concat strings in require.resolve", function() {
	var name = "sync";

	// Arbitrary assertion; can't use .ok() as it could be 0,
	// can't use typeof as that depends on webpack config.
	expect(/*require.resolve*/(__webpack_require__(3).resolve("./".concat(name, "Test")))).toBeDefined();
})


/***/ }),
/* 15 */
/*!*******************************************************!*\
  !*** ./parsing/complex-require/sync/ sync ^\.\/.*.*$ ***!
  \*******************************************************/
/*! default exports */
/*! exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module, __webpack_require__.o, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./syncTest": 0,
	"./syncTest.js": 0
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
/*!**********************************************************!*\
  !*** ./parsing/complex-require/sync/ sync ^\.\/.*y.*.*$ ***!
  \**********************************************************/
/*! default exports */
/*! exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module, __webpack_require__.o, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./syncTest": 0,
	"./syncTest.js": 0
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
/*!*************************************************************!*\
  !*** ./parsing/complex-require/sync/ sync ^\.\/syncTest.*$ ***!
  \*************************************************************/
/*! default exports */
/*! exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module, __webpack_require__.o, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./syncTest": 0,
	"./syncTest.js": 0
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
/*!*****************************************************!*\
  !*** ./parsing/complex-require/sync/ sync ^\.\/.*$ ***!
  \*****************************************************/
/*! default exports */
/*! exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module, __webpack_require__.o, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./syncTest": 0,
	"./syncTest.js": 0
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
/*!****************************************!*\
  !*** ./parsing/complex-require/amd.js ***!
  \****************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__.e, __webpack_require__.oe, __webpack_require__, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 2:0-20:2 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


it("should parse template strings in amd requires", function(done) {
	var name = "abc";
	var suffix = "Test";

	var pending = [
		__webpack_require__.e(/*! AMD require */ 0).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ./abc/abcTest */ 1)]; (test).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this))['catch'](__webpack_require__.oe),
		__webpack_require__.e(/*! AMD require */ 1).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(2)(`./${name}Test`)]; (test).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this))['catch'](__webpack_require__.oe),
		__webpack_require__.e(/*! AMD require */ 4).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(4)(`./${name}/${name}Test`)]; (test).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this))['catch'](__webpack_require__.oe),
		__webpack_require__.e(/*! AMD require */ 5).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(5)(`./${name}${suffix}`)]; (test).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this))['catch'](__webpack_require__.oe),
		__webpack_require__.e(/*! AMD require */ 6).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(6)(String.raw`./${name}/${name}${suffix}`)]; (test).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this))['catch'](__webpack_require__.oe)
	].length;

	function test (result) {
		expect(result.default).toEqual("ok")
		if (--pending <= 0) {
			done()
		}
	}
})

it("should parse .concat strings in amd requires", function(done) {
	var name = "abc";
	var suffix = "Test";

	var pending = [
		__webpack_require__.e(/*! AMD require */ 0).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ./abc/abcTest */ 1)]; (test).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this))['catch'](__webpack_require__.oe),
		__webpack_require__.e(/*! AMD require */ 1).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(2)("./".concat(name, "Test"))]; (test).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this))['catch'](__webpack_require__.oe),
		__webpack_require__.e(/*! AMD require */ 7).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(7)("./".concat(name, "/").concat(name, "Test"))]; (test).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this))['catch'](__webpack_require__.oe),
		__webpack_require__.e(/*! AMD require */ 8).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(8)("./".concat(name).concat(suffix))]; (test).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this))['catch'](__webpack_require__.oe)
	].length;

	function test (result) {
		expect(result.default).toEqual("ok")
		if (--pending <= 0) {
			done()
		}
	}
})


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
/******/ 			9: 0
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************************!*\
  !*** ./parsing/complex-require/index.js ***!
  \******************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-15:3 */
it("should parse template strings in import", function(done) {
	var name = "abc".split("");
	var suffix = "Test";
	Promise.all([
		__webpack_require__(10)(`./${name[0]}${name[1]}${name[2]}Test`),
		__webpack_require__(11)(String.raw`./${name.join("")}/${name.join("")}Test`),
		__webpack_require__(12)(String.raw`./${name.join("")}${suffix}`)
	])
	.then(function (imports) {
		for (var i = 0; i < imports.length; i++) {
			expect(imports[i].default).toEqual("ok");
		}
	})
	.then(function () { done(); }, done)
});

it("should parse .concat strings in import", function(done) {
	var name = "abc".split("");
	var suffix = "Test";
	__webpack_require__(13)("./".concat(name[0]).concat(name[1]).concat(name[2], "Test"))
	.then(function (imported) {
		expect(imported.default).toEqual("ok");
	})
	.then(function () { done(); }, done)
});

__webpack_require__(/*! ./cjs */ 14)
__webpack_require__(/*! ./amd */ 19)

})();

/******/ })()
;