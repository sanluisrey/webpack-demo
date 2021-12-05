/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 329:
/*!***************************************!*\
  !*** ./node_modules/package/index.js ***!
  \***************************************/
/***/ ((module) => {

module.exports = "package";


/***/ })

/******/ 	});
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
/******/ 			return "" + chunkId + ".bundle0.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/sharing */
/******/ 	(() => {
/******/ 		__webpack_require__.S = {};
/******/ 		var initPromises = {};
/******/ 		var initTokens = {};
/******/ 		__webpack_require__.I = (name, initScope) => {
/******/ 			if(!initScope) initScope = [];
/******/ 			// handling circular init calls
/******/ 			var initToken = initTokens[name];
/******/ 			if(!initToken) initToken = initTokens[name] = {};
/******/ 			if(initScope.indexOf(initToken) >= 0) return;
/******/ 			initScope.push(initToken);
/******/ 			// only runs once
/******/ 			if(initPromises[name]) return initPromises[name];
/******/ 			// creates a new share scope if needed
/******/ 			if(!__webpack_require__.o(__webpack_require__.S, name)) __webpack_require__.S[name] = {};
/******/ 			// runs all init snippets from all modules reachable
/******/ 			var scope = __webpack_require__.S[name];
/******/ 			var warn = (msg) => (typeof console !== "undefined" && console.warn && console.warn(msg));
/******/ 			var uniqueName = undefined;
/******/ 			var register = (name, version, factory, eager) => {
/******/ 				var versions = scope[name] = scope[name] || {};
/******/ 				var activeVersion = versions[version];
/******/ 				if(!activeVersion || (!activeVersion.loaded && (!eager != !activeVersion.eager ? eager : uniqueName > activeVersion.from))) versions[version] = { get: factory, from: uniqueName, eager: !!eager };
/******/ 			};
/******/ 			var initExternal = (id) => {
/******/ 				var handleError = (err) => (warn("Initialization of sharing external failed: " + err));
/******/ 				try {
/******/ 					var module = __webpack_require__(id);
/******/ 					if(!module) return;
/******/ 					var initFn = (module) => (module && module.init && module.init(__webpack_require__.S[name], initScope))
/******/ 					if(module.then) return promises.push(module.then(initFn, handleError));
/******/ 					var initResult = initFn(module);
/******/ 					if(initResult && initResult.then) return promises.push(initResult['catch'](handleError));
/******/ 				} catch(err) { handleError(err); }
/******/ 			}
/******/ 			var promises = [];
/******/ 			switch(name) {
/******/ 				case "default": {
/******/ 					register("package", "1.0.0", () => (() => (__webpack_require__(/*! ./node_modules/package/index.js */ 329))));
/******/ 				}
/******/ 				break;
/******/ 				case "other-scope": {
/******/ 					register("test2", "1.1.9", () => (__webpack_require__.e(744).then(() => (() => (__webpack_require__(/*! ./test2-wrong */ 744))))));
/******/ 					register("test2", "1.2.3", () => (__webpack_require__.e(744).then(() => (() => (__webpack_require__(/*! ./test2-wrong */ 744))))));
/******/ 					register("test2", "1.3.0", () => (__webpack_require__.e(768).then(() => (() => (__webpack_require__(/*! ./test2 */ 768))))));
/******/ 				}
/******/ 				break;
/******/ 				case "test-scope": {
/******/ 					register("./test1", "0", () => (__webpack_require__.e(770).then(() => (() => (__webpack_require__(/*! ./test1 */ 770))))));
/******/ 					register("package", "1.0.0", () => (() => (__webpack_require__(/*! ./node_modules/package/index.js */ 329))));
/******/ 				}
/******/ 				break;
/******/ 			}
/******/ 			if(!promises.length) return initPromises[name] = 1;
/******/ 			return initPromises[name] = Promise.all(promises).then(() => (initPromises[name] = 1));
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
/******/ 			179: 0
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
/*!******************!*\
  !*** ./index.js ***!
  \******************/
if (Math.random() < 0) {
	__webpack_require__(/*! package */ 329);
}

it("should add provided modules to the share scope on init", async () => {
	expect(__webpack_require__.S).toEqual({});
	await __webpack_require__.I("default");
	expect(Object.keys(__webpack_require__.S)).toEqual(["default"]);
	await __webpack_require__.I("test-scope");
	await __webpack_require__.I("other-scope");
	expect(__webpack_require__.I("other-scope")).toBe(
		__webpack_require__.I("other-scope")
	);
	expect(Object.keys(__webpack_require__.S).length).toBe(3);
	expect(Object.keys(__webpack_require__.S)).toContain("default");
	expect(Object.keys(__webpack_require__.S)).toContain("test-scope");
	expect(Object.keys(__webpack_require__.S)).toContain("other-scope");
	expect(Object.keys(__webpack_require__.S.default)).toContain("package");
	expect(Object.keys(__webpack_require__.S["test-scope"])).toContain(
		"package"
	);
	expect(
		Object.keys(__webpack_require__.S["test-scope"]["package"])
	).toContain("1.0.0");
	expect(Object.keys(__webpack_require__.S["test-scope"])).toContain(
		"./test1"
	);
	expect(
		Object.keys(__webpack_require__.S["test-scope"]["./test1"])
	).toContain("0");
	expect(Object.keys(__webpack_require__.S["other-scope"])).toContain(
		"test2"
	);
	const test2Versions = Object.keys(
		__webpack_require__.S["other-scope"]["test2"]
	);
	expect(test2Versions).toContain("1.3.0");
	expect(test2Versions).toContain("1.1.9");
	expect(test2Versions).toContain("1.2.3");

	{
		const factory = await __webpack_require__.S["test-scope"]["./test1"][
			"0"
		].get();
		expect(factory()).toBe("test1");
	}

	{
		const factory = await __webpack_require__.S["other-scope"]["test2"][
			"1.3.0"
		].get();
		expect(factory()).toBe("test2");
	}
});

})();

/******/ })()
;