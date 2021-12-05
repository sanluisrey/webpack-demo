/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 461:
/*!**********************************!*\
  !*** ./node_modules/external.js ***!
  \**********************************/
/***/ ((module) => {

module.exports = ["external"];


/***/ }),

/***/ 180:
/*!************************************************************************!*\
  !*** ../../../js/ConfigTestCases/library/0-create-library/amd-iife.js ***!
  \************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (() => { return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __nested_webpack_require_129__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__nested_webpack_require_129__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__nested_webpack_require_129__.o(definition, key) && !__nested_webpack_require_129__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nested_webpack_require_129__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nested_webpack_require_129__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!******************************!*\
  !*** ./index.js + 2 modules ***!
  \******************************/
// ESM COMPAT FLAG
__nested_webpack_require_129__.r(__webpack_exports__);

// EXPORTS
__nested_webpack_require_129__.d(__webpack_exports__, {
  "a": () => (/* reexport */ a),
  "b": () => (/* binding */ b),
  "default": () => (/* binding */ index),
  "external": () => (/* reexport */ non_external)
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

/******/ 	return __webpack_exports__;
/******/ })()
;
}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));;

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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/* harmony import */ var library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! library */ 180);
/* harmony import */ var library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(library__WEBPACK_IMPORTED_MODULE_0__);



it(
	"should be able to import harmony exports from library (" + "amd-iife" + ")",
	function () {
		expect((library__WEBPACK_IMPORTED_MODULE_0___default())).toBe("default-value");
		expect(library__WEBPACK_IMPORTED_MODULE_0__.a).toBe("a");
		expect(library__WEBPACK_IMPORTED_MODULE_0__.b).toBe("b");
		if (typeof TEST_EXTERNAL !== "undefined" && TEST_EXTERNAL) {
			expect(library__WEBPACK_IMPORTED_MODULE_0__.external).toEqual(["external"]);
			expect(library__WEBPACK_IMPORTED_MODULE_0__.external).toBe(__webpack_require__(/*! external */ 461));
		} else {
			expect(library__WEBPACK_IMPORTED_MODULE_0__.external).toBe("non-external");
		}
	}
);

})();

/******/ })()
;