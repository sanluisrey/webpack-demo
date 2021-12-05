/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/*!****************************************************************!*\
  !*** ./side-effects/issue-11673/node_modules/package/index.js ***!
  \****************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module */
/*! CommonJS bailout: module.exports is used directly at 2:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-21 */
/***/ ((module, exports) => {

exports["default"] = 42;
module.exports = exports.default;


/***/ }),
/* 1 */
/*!*********************************!*\
  !*** external "worker_threads" ***!
  \*********************************/
/*! dynamic exports */
/*! export Worker [maybe provided (runtime-defined)] [used in main] [provision prevents renaming] */
/*! export parentPort [maybe provided (runtime-defined)] [used in 96d82233f8e4aa297f66] [provision prevents renaming] */
/*! other exports [maybe provided (runtime-defined)] [unused] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
module.exports = require("worker_threads");

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */
/*!********************************************!*\
  !*** ./side-effects/issue-11673/module.js ***!
  \********************************************/
/*! namespace exports */
/*! export X [provided] [used in main] [could be renamed] */
/*! export Y [provided] [used in 96d82233f8e4aa297f66] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ X)
/* harmony export */ });
/* unused harmony export Y */
/* harmony import */ var package__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! package */ 0);
/* harmony import */ var package__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(package__WEBPACK_IMPORTED_MODULE_0__);


function X() {
	return "X";
}

function Y() {
	return (package__WEBPACK_IMPORTED_MODULE_0___default());
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/readFile chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = require("url").pathToFileURL(__filename);
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "0" means "already loaded", Promise means loading
/******/ 		var installedChunks = {
/******/ 			0: 0
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no chunk install function needed
/******/ 		
/******/ 		// no chunk loading
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*******************************************!*\
  !*** ./side-effects/issue-11673/index.js ***!
  \*******************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.p, __webpack_require__.b, __webpack_require__.u, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 5:0-12:3 */
/* harmony import */ var worker_threads__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! worker_threads */ 1);
/* harmony import */ var worker_threads__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(worker_threads__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module */ 4);


// test

it("should compile", done => {
	expect((0,_module__WEBPACK_IMPORTED_MODULE_1__.X)()).toBe("X");
	const worker = new worker_threads__WEBPACK_IMPORTED_MODULE_0__.Worker(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u(1), __webpack_require__.b));
	worker.once("message", value => {
		expect(value).toBe(42);
		Promise.resolve(worker.terminate()).then(() => done(), done);
	});
});

})();

/******/ })()
;