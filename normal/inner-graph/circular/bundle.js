/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/*!***************************************!*\
  !*** ./inner-graph/circular/inner.js ***!
  \***************************************/
/*! namespace exports */
/*! export A [provided] [used in main] [could be renamed] */
/*! export B [provided] [used in main] [could be renamed] */
/*! export C [provided] [used in main] [could be renamed] */
/*! export exportAUsed [provided] [used in main] [renamed to yM] */
/*! export exportBUsed [provided] [used in main] [renamed to jp] */
/*! export exportCUsed [provided] [used in main] [renamed to $b] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Statement (ExportNamedDeclaration) with side effects in source code at 11:0-59 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ A),
/* harmony export */   "B": () => (/* binding */ B),
/* harmony export */   "C": () => (/* binding */ C),
/* harmony export */   "yM": () => (/* binding */ exportAUsed),
/* harmony export */   "jp": () => (/* binding */ exportBUsed),
/* harmony export */   "$b": () => (/* binding */ exportCUsed)
/* harmony export */ });
function A(s) {
	return s + "A";
}
function B(s) {
	return s + "B";
}
function C(s) {
	return s + "C";
}

const exportAUsed = true;
const exportBUsed = true;
const exportCUsed = true;


/***/ }),
/* 1 */,
/* 2 */
/*!****************************************!*\
  !*** ./inner-graph/circular/module.js ***!
  \****************************************/
/*! namespace exports */
/*! export x [provided] [unused] [could be renamed] */
/*! export y [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Dependency (harmony side effect evaluation) with side effects at 1:0-34 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ y)
/* harmony export */ });
/* unused harmony export x */
/* harmony import */ var _inner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inner */ 0);


function x(type) {
	switch (type) {
		case "a":
			return withA("b");
		case "b":
			return withB("c");
		case "c":
			return "ok";
	}
}

function y(v) {
	return withA(v);
}

function withA(v) {
	const value = x(v);

	return (0,_inner__WEBPACK_IMPORTED_MODULE_0__.A)(value);
}

function withB(v) {
	const value = x(v);

	return (0,_inner__WEBPACK_IMPORTED_MODULE_0__.B)(value);
}

function withC(v) {
	const value = x(v);

	return (0,_inner__WEBPACK_IMPORTED_MODULE_0__.C)(value);
}




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
/******/ 			1: 0
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
/*!***************************************!*\
  !*** ./inner-graph/circular/index.js ***!
  \***************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__, __webpack_require__.e, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 4:0-12:3 */
/* harmony import */ var _inner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inner */ 0);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module */ 2);



it("export should be unused when only unused functions use it", () => {
	expect((0,_module__WEBPACK_IMPORTED_MODULE_1__.y)("a")).toBe("okBAA");
	expect(_inner__WEBPACK_IMPORTED_MODULE_0__/* .exportAUsed */ .yM).toBe(true);
	expect(_inner__WEBPACK_IMPORTED_MODULE_0__/* .exportBUsed */ .jp).toBe(true);
	if (process.env.NODE_ENV === "production") {
		expect(_inner__WEBPACK_IMPORTED_MODULE_0__/* .exportCUsed */ .$b).toBe(false);
	}
	return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(__webpack_require__, /*! ./chunk */ 3));
});

})();

/******/ })()
;