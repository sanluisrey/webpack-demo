/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/*!*********************************************!*\
  !*** ./parsing/extract-amd.nominimize/a.js ***!
  \*********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-21 */
/***/ ((module) => {

module.exports = "a";

/***/ }),
/* 1 */
/*!*************************************************!*\
  !*** ./parsing/extract-amd.nominimize/index.js ***!
  \*************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_exports__, module.loaded, module.id, __webpack_require__.nmd, __webpack_require__, __webpack_require__.oe, __webpack_require__.e, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 8:8-22 */
/*! CommonJS bailout: module.exports is used directly at 15:8-22 */
/*! CommonJS bailout: exports is used directly at 23:17-24 */
/*! CommonJS bailout: exports is used directly at 31:17-24 */
/*! CommonJS bailout: exports is used directly at 89:21-28 */
/*! CommonJS bailout: exports is used directly at 93:9-16 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-16:3 */
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_RESULT__;it("should parse fancy function calls with arrow functions", function() {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./constructor */ 2)], __WEBPACK_AMD_DEFINE_RESULT__ = ((c) => {
		return new c(1324);
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	expect(module.exports).toHaveProperty("value", 1324);
	(!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./constructor */ 2)], __WEBPACK_AMD_DEFINE_RESULT__ = ((c) => {
		return new c(4231);
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)));
	expect(module.exports).toHaveProperty("value", 4231);
});

it("should parse fancy AMD calls with arrow functions", function() {
	Promise.resolve(/*! AMD require */).then(function() {[__webpack_require__(/*! ./constructor */ 2), __webpack_require__(/*! ./a */ 0)];})['catch'](__webpack_require__.oe);
	Promise.resolve(/*! AMD require */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__, module, exports, __webpack_require__(/*! ./constructor */ 2), __webpack_require__(/*! ./a */ 0)]; ((require, module, exports, constructor, a) => {
		expect(("function")).toBe("function");
		expect(("object")).toBe("object");
		expect((typeof exports)).toBe("object");
		expect((typeof __webpack_require__(/*! ./constructor */ 2))).toBe("function");
		expect((typeof constructor)).toBe("function");
		expect(a).toBe("a");
	}).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);})['catch'](__webpack_require__.oe);
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, module, exports, __webpack_require__(/*! ./constructor */ 2), __webpack_require__(/*! ./a */ 0)], __WEBPACK_AMD_DEFINE_RESULT__ = ((require, module, exports, constructor, a) => {
		expect(("function")).toBe("function");
		expect(("object")).toBe("object");
		expect((typeof exports)).toBe("object");
		expect((typeof __webpack_require__(/*! ./constructor */ 2))).toBe("function");
		expect((typeof constructor)).toBe("function");
		expect(a).toBe("a");
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
});

it("should be able to use AMD-style require with arrow functions", function(done) {
	var template = "b";
	__webpack_require__.e(/*! AMD require */ 1).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ./circular */ 3), __webpack_require__(8)("./" + template), __webpack_require__(/*! ./circular */ 3)]; ((circular, testTemplate, circular2) => {
		expect(circular).toBe(1);
		expect(circular2).toBe(1);
		expect(testTemplate).toBe("b");
		done();
	}).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);})['catch'](__webpack_require__.oe);
});

it("should be able to use require.js-style define with arrow functions", function(done) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./circular */ 3)], __WEBPACK_AMD_DEFINE_RESULT__ = ((circular) => {
		expect(circular).toBe(1);
		done();
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
});

it("should be able to use require.js-style define, optional dependencies, not exist, with arrow function", function(done) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./optional */ 4)], __WEBPACK_AMD_DEFINE_RESULT__ = ((optional) => {
		expect(optional.b).toBeFalsy();
		done();
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
});

it("should be able to use require.js-style define, special string, with arrow function", function(done) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__], __WEBPACK_AMD_DEFINE_RESULT__ = ((require) => {
		expect(__webpack_require__(/*! ./circular */ 3)).toBe(1);
		done();
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
});

it("should be able to use require.js-style define, without name, with arrow function", function(done) {
	 true && !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./circular */ 3)], __WEBPACK_AMD_DEFINE_RESULT__ = ((circular) => {
		expect(circular).toBe(1);
		done();
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
});

it("should be able to use require.js-style define, with empty dependencies, with arrow function", function(done) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (() => {
		done();
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
});

it("should be able to use require.js-style define, without dependencies, with arrow function", function(done) {
	 true && !(__WEBPACK_AMD_DEFINE_RESULT__ = (() => {
		done();
	}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
});

it("should offer AMD-style define for CommonJs with arrow function", function(done) {
	var _test_exports = exports;
	var _test_module = module;
	!(__WEBPACK_AMD_DEFINE_RESULT__ = ((require, exports, module) => {
		expect(("function")).toBe("function");
		expect(exports).toBe(_test_exports);
		expect(module).toBe(_test_module);
		expect(__webpack_require__(/*! ./circular */ 3)).toBe(1);
		done();
	}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
});

it("should pull in all dependencies of an AMD module with arrow function", function(done) {
	!(__WEBPACK_AMD_DEFINE_RESULT__ = ((require) => {
		expect(__webpack_require__(/*! ./amdmodule */ 5)).toBe("a");
		done();
	}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
});

it("should create a chunk for require.js require, with arrow function", function(done) {
	var sameTick = true;
	__webpack_require__.e(/*! AMD require */ 0).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ./c */ 6)]; ((c) => {
		expect(sameTick).toBe(false);
		expect(c).toBe("c");
		expect(__webpack_require__(/*! ./d */ 7)).toBe("d");
		done();
	}).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);})['catch'](__webpack_require__.oe);
	sameTick = false;
});


/***/ }),
/* 2 */
/*!*******************************************************!*\
  !*** ./parsing/extract-amd.nominimize/constructor.js ***!
  \*******************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-3:1 */
/***/ ((module) => {

module.exports = function(value) {
	this.value = value;
}

/***/ }),
/* 3 */
/*!****************************************************!*\
  !*** ./parsing/extract-amd.nominimize/circular.js ***!
  \****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-19 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = 1;
module.exports = __webpack_require__(/*! ./circular */ 3);

/***/ }),
/* 4 */
/*!****************************************************!*\
  !*** ./parsing/extract-amd.nominimize/optional.js ***!
  \****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-19 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = 2;
try { module.exports.a = __webpack_require__(/*! ./a */ 0); } catch (e) {};
try { module.exports.b = Object(function webpackMissingModule() { var e = new Error("Cannot find module './b'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()); } catch (e) {};


/***/ }),
/* 5 */
/*!*****************************************************!*\
  !*** ./parsing/extract-amd.nominimize/amdmodule.js ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__, __webpack_exports__, module */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-3:3 */
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = ((require) => {
	return __webpack_require__(/*! ./a */ 0);
}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
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
/******/ 			2: 0
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
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(1);
/******/ 	
/******/ })()
;