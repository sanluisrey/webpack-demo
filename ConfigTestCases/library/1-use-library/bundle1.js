/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 461:
/*!**********************************!*\
  !*** ./node_modules/external.js ***!
  \**********************************/
/***/ ((module) => {

module.exports = ["external"];


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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************************!*\
  !*** ./index.js + 2 modules ***!
  \******************************/

// NAMESPACE OBJECT: ../../../js/ConfigTestCases/library/0-create-library/esm-runtimeChunk/main.js
var main_namespaceObject = {};
__webpack_require__.r(main_namespaceObject);
__webpack_require__.d(main_namespaceObject, {
  "a": () => (__webpack_exports__a),
  "b": () => (__webpack_exports__b),
  "default": () => (__webpack_exports__default),
  "external": () => (__webpack_exports__external),
  "id": () => (id),
  "ids": () => (ids),
  "modules": () => (modules)
});

;// CONCATENATED MODULE: ../../../js/ConfigTestCases/library/0-create-library/esm-runtimeChunk/runtime.js
/******/ var __webpack_modules__ = ({});
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __nested_webpack_require_241__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_241__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/******/ // expose the modules object (__webpack_modules__)
/******/ __nested_webpack_require_241__.m = __webpack_modules__;
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__nested_webpack_require_241__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__nested_webpack_require_241__.o(definition, key) && !__nested_webpack_require_241__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__nested_webpack_require_241__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/export webpack runtime */
/******/ /* harmony default export */ const runtime = (__nested_webpack_require_241__);
/******/ 
/******/ /* webpack/runtime/import chunk loading */
/******/ (() => {
/******/ 	// no baseURI
/******/ 	
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		666: 0
/******/ 	};
/******/ 	
/******/ 	var installChunk = (data) => {
/******/ 		var {ids, modules, runtime} = data;
/******/ 		// add "modules" to the modules object,
/******/ 		// then flag all "ids" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0;
/******/ 		for(moduleId in modules) {
/******/ 			if(__nested_webpack_require_241__.o(modules, moduleId)) {
/******/ 				__nested_webpack_require_241__.m[moduleId] = modules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(runtime) runtime(__nested_webpack_require_241__);
/******/ 		for(;i < ids.length; i++) {
/******/ 			chunkId = ids[i];
/******/ 			if(__nested_webpack_require_241__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				installedChunks[chunkId][0]();
/******/ 			}
/******/ 			installedChunks[ids[i]] = 0;
/******/ 		}
/******/ 	
/******/ 	}
/******/ 	
/******/ 	// no chunk on demand loading
/******/ 	
/******/ 	__nested_webpack_require_241__.C = installChunk;
/******/ 	
/******/ 	// no on chunks loaded
/******/ })();
/******/ 
/************************************************************************/
/******/ 
/******/ 

;// CONCATENATED MODULE: ../../../js/ConfigTestCases/library/0-create-library/esm-runtimeChunk/main.js
const id = 179;
const ids = [179];
const modules = {

/***/ 211:
/*!******************************!*\
  !*** ./index.js + 2 modules ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
runtime.d(__webpack_exports__, {
  "a": () => (/* reexport */ a),
  "b": () => (/* binding */ b),
  "Z": () => (/* binding */ index),
  "G": () => (/* reexport */ non_external)
});

;// CONCATENATED MODULE: ./a.js
var a = "a";

;// CONCATENATED MODULE: ./non-external.js
/* harmony default export */ const non_external = ("non-external");

;// CONCATENATED MODULE: ./index.js

/* harmony default export */ const index = ("default-value");
var b = "b";


var index_module = "should not conflict",
	index_define = "should not conflict",
	index_require = "should not conflict",
	index_exports = "should not conflict",
	globalName = "should not conflict";
console.log.bind(console, index_module, index_define, index_require, index_exports, globalName);


/***/ })

};
;

// load runtime

var __webpack_exec__ = (moduleId) => (runtime(runtime.s = moduleId))
;
runtime.C(main_namespaceObject);
var __webpack_exports__ = __webpack_exec__(211);
var __webpack_exports__a = __webpack_exports__.a;
var __webpack_exports__b = __webpack_exports__.b;
var __webpack_exports__default = __webpack_exports__.Z;
var __webpack_exports__external = __webpack_exports__.G;


;// CONCATENATED MODULE: ./index.js



it(
	"should be able to import harmony exports from library (" + "esm-runtimeChunk" + ")",
	function () {
		expect(__webpack_exports__default).toBe("default-value");
		expect(__webpack_exports__a).toBe("a");
		expect(__webpack_exports__b).toBe("b");
		if (typeof TEST_EXTERNAL !== "undefined" && TEST_EXTERNAL) {
			expect(__webpack_exports__external).toEqual(["external"]);
			expect(__webpack_exports__external).toBe(__webpack_require__(/*! external */ 461));
		} else {
			expect(__webpack_exports__external).toBe("non-external");
		}
	}
);

})();

/******/ })()
;