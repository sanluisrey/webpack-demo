/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/*!**********************************************************************************************!*\
  !*** ./chunks/named-chunks/ lazy ^\.\/e.*2$ chunkName: context-named-chunk namespace object ***!
  \**********************************************************************************************/
/*! default exports */
/*! exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module, __webpack_require__.o, __webpack_require__, __webpack_require__.e, __webpack_require__.t, __webpack_require__.* */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./empty2": [
		15,
		1
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
		return __webpack_require__.t(id, 7 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 1;
module.exports = webpackAsyncContext;

/***/ }),
/* 2 */
/*!**********************************************************************************************!*\
  !*** ./chunks/named-chunks/ lazy ^\.\/e.*3$ chunkName: context-named-chunk namespace object ***!
  \**********************************************************************************************/
/*! default exports */
/*! exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module, __webpack_require__.o, __webpack_require__, __webpack_require__.e, __webpack_require__.t, __webpack_require__.* */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./empty3": [
		16,
		1
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
		return __webpack_require__.t(id, 7 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 2;
module.exports = webpackAsyncContext;

/***/ }),
/* 3 */
/*!************************************************************************************************!*\
  !*** ./chunks/named-chunks/ lazy ^\.\/e.*4$ chunkName: context-named-chunk-2 namespace object ***!
  \************************************************************************************************/
/*! default exports */
/*! exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module, __webpack_require__.o, __webpack_require__, __webpack_require__.e, __webpack_require__.t, __webpack_require__.* */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./empty4": [
		17,
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
		return __webpack_require__.t(id, 7 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 3;
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
/******/ 			6: 0
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
/*!**************************************!*\
  !*** ./chunks/named-chunks/index.js ***!
  \**************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__, __webpack_require__.e, __webpack_require__.t, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-20:3 */
it("should handle named chunks", function(done) {
	var sync = false;
	__webpack_require__.e(/*! require.ensure | named-chunk */ 4).then((function(require) {
		__webpack_require__(/*! ./empty?a */ 4);
		__webpack_require__(/*! ./empty?b */ 5);
		testLoad();
		sync = true;
		process.nextTick(function() {
			sync = false;
		});
	}).bind(null, __webpack_require__))['catch'](__webpack_require__.oe);
	function testLoad() {
		__webpack_require__.e(/*! require.ensure | named-chunk */ 4).then((function(require) {
			__webpack_require__(/*! ./empty?c */ 6);
			__webpack_require__(/*! ./empty?d */ 7);
			expect(sync).toBeTruthy();
			done();
		}).bind(null, __webpack_require__))['catch'](__webpack_require__.oe);
	}
});

it("should handle empty named chunks", function(done) {
	var sync = false;
	Promise.resolve(/*! require.ensure */).then((function(require) {
		expect(sync).toBeTruthy();
	}).bind(null, __webpack_require__))['catch'](__webpack_require__.oe);
	Promise.resolve(/*! require.ensure */).then((function(require) {
		expect(sync).toBeTruthy();
		done();
	}).bind(null, __webpack_require__))['catch'](__webpack_require__.oe);
	sync = true;
	setImmediate(function() {
		sync = false;
	});
});

it("should handle named chunks when there is an error callback", function(done) {
	var sync = false;
	__webpack_require__.e(/*! require.ensure | named-chunk-for-error-callback */ 5).then((function(require) {
		__webpack_require__(/*! ./empty?e */ 8);
		__webpack_require__(/*! ./empty?f */ 9);
		testLoad();
		sync = true;
		process.nextTick(function() {
			sync = false;
		});
	}).bind(null, __webpack_require__))['catch'](function(error) {});
	function testLoad() {
		__webpack_require__.e(/*! require.ensure | named-chunk-for-error-callback */ 5).then((function(require) {
			__webpack_require__(/*! ./empty?g */ 10);
			__webpack_require__(/*! ./empty?h */ 11);
			expect(sync).toBeTruthy();
			done();
		}).bind(null, __webpack_require__))['catch'](function(error) {});
	}
});

it("should handle empty named chunks when there is an error callback", function(done) {
	var sync = false;
	Promise.resolve(/*! require.ensure */).then((function(require) {
		expect(sync).toBeTruthy();
	}).bind(null, __webpack_require__))['catch'](function(error) {});
	Promise.resolve(/*! require.ensure */).then((function(require) {
		expect(sync).toBeTruthy();
		done();
	}).bind(null, __webpack_require__))['catch'](function(error) {});
	sync = true;
	setImmediate(function() {
		sync = false;
	});
});

it("should be able to use named chunks in import()", function(done) {
	var sync = false;
	__webpack_require__.e(/*! import() | import-named-chunk-1 */ 2).then(__webpack_require__.t.bind(__webpack_require__, /*! ./empty?import1-in-chunk1 */ 12, 23)).then(function(result){
		var i = 0;
		__webpack_require__.e(/*! import() | import-named-chunk-1 */ 2).then(__webpack_require__.t.bind(__webpack_require__, /*! ./empty?import2-in-chunk1 */ 13, 23)).then(function(result){
			expect(sync).toBeTruthy();
			if(i++ > 0) done();
		}).catch(function(err){
			done(err);
		});
		__webpack_require__.e(/*! import() | import-named-chunk-2 */ 3).then(__webpack_require__.t.bind(__webpack_require__, /*! ./empty?import3-in-chunk2 */ 14, 23)).then(function(result){
			expect(sync).toBeFalsy();
			if(i++ > 0) done();
		}).catch(function(err){
			done(err);
		});
		sync = true;
		Promise.resolve().then(function(){}).then(function(){}).then(function(){
			sync = false;
		});
	});
});

it("should be able to use named chunk in context import()", function(done) {
	var mpty = "mpty";
	var sync = false;
	__webpack_require__(1)("./e" + mpty + "2").then(function(result) {
		var i = 0;
		__webpack_require__(2)("./e" + mpty + "3").then(function(result){
			expect(sync).toBeTruthy();
			if(i++ > 0) done();
		}).catch(function(err){
			done(err);
		});
		__webpack_require__(3)("./e" + mpty + "4").then(function(result){
			expect(sync).toBeFalsy();
			if(i++ > 0) done();
		}).catch(function(err){
			done(err);
		});
		sync = true;
		Promise.resolve().then(function(){}).then(function(){}).then(function(){
			sync = false;
		});
	});
});

})();

/******/ })()
;