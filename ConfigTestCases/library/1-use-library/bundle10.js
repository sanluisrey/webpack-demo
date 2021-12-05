/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 454:
/*!*************************************************************************!*\
  !*** ../../../js/ConfigTestCases/library/0-create-library/this-iife.js ***!
  \*************************************************************************/
/***/ (function() {

/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __nested_webpack_require_107__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__nested_webpack_require_107__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__nested_webpack_require_107__.o(definition, key) && !__nested_webpack_require_107__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nested_webpack_require_107__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nested_webpack_require_107__.r = (exports) => {
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
__nested_webpack_require_107__.r(__webpack_exports__);

// EXPORTS
__nested_webpack_require_107__.d(__webpack_exports__, {
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

var __webpack_export_target__ = this;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./this-test.js ***!
  \**********************/
var data = __webpack_require__(/*! library */ 454);

it("should be able get items from library (" + "this-iife" + ")", function() {
	expect(data).toHaveProperty("default", "default-value");
	expect(data).toHaveProperty("a", "a");
	expect(data).toHaveProperty("b", "b");
});

})();

/******/ })()
;