/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 326:
/*!***********************************!*\
  !*** ../_helpers/inner-file.js?0 ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ __usedExports)
/* harmony export */ });


const __usedExports = ["__usedExports"];


/***/ }),

/***/ 873:
/*!*******************************************************!*\
  !*** ../_helpers/testModuleLoader.js?[]! + 1 modules ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ testModuleLoader_)
});

// EXTERNAL MODULE: ../_helpers/inner-file.js?0
var inner_file0 = __webpack_require__(326);
;// CONCATENATED MODULE: ./module.js




if (Math.random() > 0.5) {
	var a = () => A;
	let b = () => B;
}

let b;

var c = () => C1;
couldCallExportC();
var c = () => C2;
couldCallExportC();

while (Math.random() > 0.5) {
	let d = () => D1;
}

while (Math.random() > 0.5) {
	var d = () => D2;
}

while (Math.random() > 0.5) {
	let d = () => D1;
}

if (false) {}

var e = (/* unused pure expression or super */ null && ( true ? E2 : 0));



if (true) {
	let inner = () => F;

	var f = () => inner();
}

if (true) {
	const inner = () => G;

	var g = () => inner();
}

;// CONCATENATED MODULE: ../_helpers/testModuleLoader.js?[]!

/* harmony default export */ const testModuleLoader_ = ([]);

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************************************************************************************!*\
  !*** ../_helpers/entryLoader.js?{"usedExports":[],"expect":{"./test":[]},"name":"nothing"}! ***!
  \**********************************************************************************************/
/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test */ 326);
if (Math.random() < 0) __webpack_require__(/*! ../_helpers/testModuleLoader?[]! */ 873);


it("nothing should have the correct exports used for ./test", () => {
expect(_test__WEBPACK_IMPORTED_MODULE_0__/* .__usedExports */ .b).toEqual(["__usedExports"]);
});

})();

/******/ })()
;