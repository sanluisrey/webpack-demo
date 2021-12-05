/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({});
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
/******/ 	/* webpack/runtime/wasm loading */
/******/ 	(() => {
/******/ 		__webpack_require__.v = (exports, wasmModuleId, wasmModuleHash, importsObj) => {
/******/ 			var req = new Promise(function (resolve, reject) {
/******/ 				try {
/******/ 					var { readFile } = require('fs');
/******/ 					var { join } = require('path');
/******/ 		
/******/ 					readFile(join(__dirname, "" + wasmModuleHash + ".module.wasm"), function(err, buffer){
/******/ 						if (err) return reject(err);
/******/ 		
/******/ 						// Fake fetch response
/******/ 						resolve({
/******/ 							arrayBuffer() { return buffer; }
/******/ 						});
/******/ 					});
/******/ 				} catch (err) { reject(err); }
/******/ 			});
/******/ 			// no support for streaming compilation
/******/ 			return req
/******/ 				.then((x) => (x.arrayBuffer()))
/******/ 				.then((bytes) => (WebAssembly.instantiate(bytes, importsObj)))
/******/ 				.then((res) => (Object.assign(exports, res.instance.exports)));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
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
/*!****************************************************!*\
  !*** ./wasm/wasm-explorer-examples-async/index.js ***!
  \****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__.e, __webpack_require__, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-7:3 */
it("Q_rsqrt should work", function() {
	return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(__webpack_require__, /*! ./Q_rsqrt.wasm */ 1)).then(function(wasm) {
		const result = wasm._Z7Q_rsqrtf(1/1764);
		expect(result).toBeGreaterThan(41.9);
		expect(result).toBeLessThan(42.1);
	});
});

it("testFunction should work", function() {
	return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(__webpack_require__, /*! ./testFunction.wasm */ 2)).then(function(wasm) {
		const view = new Int32Array(wasm.memory.buffer);
		view[0] = 123;
		view[1] = 1;
		view[2] = 2;
		view[3] = 3;
		const result = wasm._Z12testFunctionPii(4, 3);
		expect(result).toEqual(6);
	});
});

it("fact should work", function() {
	return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(__webpack_require__, /*! ./fact.wasm */ 3)).then(function(wasm) {
		const result = wasm._Z4facti(11);
		expect(result).toEqual(39916800);
	});
});

it("popcnt should work", function() {
	return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(__webpack_require__, /*! ./popcnt.wasm */ 4)).then(function(wasm) {
		expect(wasm.main(0xF0F)).toEqual(16);
		expect(wasm._Z5countj(0xF0F)).toEqual(8);
	});
});

it("fast-math should work", function() {
	return __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(__webpack_require__, /*! ./fast-math.wasm */ 5)).then(function(wasm) {
		expect(wasm._Z3food(42)).toEqual(14);
		expect(wasm._Z9maybe_mindd(42, 24)).toEqual(24);
		expect(wasm._Z8call_powd(42)).toEqual(9682651996416);
		expect(wasm._Z6do_powd(42)).toEqual(9682651996416);
		expect(wasm._Z6factorddd(42, 42, 42)).toEqual(3528);
	});
});

it("duff should work", function() {
	return __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.bind(__webpack_require__, /*! ./duff.wasm */ 6)).then(function(wasm) {
		const view = new Uint8Array(wasm.memory.buffer);
		view[0] = 123;
		for(let i = 1; i < 100; i++)
			view[i] = i;
		const result = wasm._Z4sendPcS_m(200, 1, 100);
		for(let i = 1; i < 100; i++)
			expect(view[199 + i]).toEqual(i);
	});
});

/******/ })()
;