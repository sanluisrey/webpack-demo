/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/*!************************************!*\
  !*** ./parsing/issue-758/index.js ***!
  \************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__, __webpack_require__.e, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-9:3 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

it("should require existing module with supplied error callback", function(done) {
	__webpack_require__.e(/*! require.ensure */ 0).then((function(){
		try {
			var file = __webpack_require__(/*! ./file */ 1);
			expect(file).toBe("file");
			done();
		} catch(e) { done(e); }
	}).bind(null, __webpack_require__))['catch'](function(error) {});
});

it("should call error callback on missing module", function(done) {
	Promise.resolve(/*! require.ensure */).then((function(){
		__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module './missingModule'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	}).bind(null, __webpack_require__))['catch'](function(error) {
		expect(error).toBeInstanceOf(Error);
		expect(error.message).toBe("Cannot find module './missingModule'");
		done();
	});
});

it("should call error callback on missing module in context", function(done) {
	(function(module) {
		__webpack_require__.e(/*! require.ensure */ 2).then((function(){
			__webpack_require__(3)("./" + module);
		}).bind(null, __webpack_require__))['catch'](function(error) {
			expect(error).toBeInstanceOf(Error);
			expect(error.message).toBe("Cannot find module './missingModule'");
			done();
		});
	})('missingModule');
});

it("should call error callback on exception thrown in loading module", function(done) {
	__webpack_require__.e(/*! require.ensure */ 1).then((function(){
		__webpack_require__(/*! ./throwing */ 2);
	}).bind(null, __webpack_require__))['catch'](function(error) {
		expect(error).toBeInstanceOf(Error);
		expect(error.message).toBe('message');
		done();
	});
});

it("should not call error callback on exception thrown in require callback", function(done) {
	__webpack_require__.e(/*! require.ensure */ 1).then((function() {
		throw new Error('message');
	}).bind(null, __webpack_require__))['catch'](function(error) {
		expect(error).toBeInstanceOf(Error);
		expect(error.message).toBe('message');
		done();
	});
});

it("should call error callback when there is an error loading the chunk", function(done) {
	var temp = __webpack_require__.e;
	__webpack_require__.e = function() { return Promise.resolve().then(function() { throw 'fake chunk load error'; }); };
	__webpack_require__.e(/*! require.ensure */ 0).then((function(){
		try {
			var file = __webpack_require__(/*! ./file */ 1);
		} catch(e) { done(e); }
	}).bind(null, __webpack_require__))['catch'](function(error) {
		expect(error).toBe('fake chunk load error');
		done();
	});
	__webpack_require__.e = temp;
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
/******/ 	/* webpack/runtime/readFile chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "0" means "already loaded", Promise means loading
/******/ 		var installedChunks = {
/******/ 			3: 0
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
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	
/******/ })()
;