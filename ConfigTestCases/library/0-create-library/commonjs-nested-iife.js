/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!*******************************!*\
  !*** ./nested.js + 3 modules ***!
  \*******************************/

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "NS": () => (/* reexport */ index_namespaceObject)
});

// NAMESPACE OBJECT: ./index.js
var index_namespaceObject = {};
__webpack_require__.r(index_namespaceObject);
__webpack_require__.d(index_namespaceObject, {
  "a": () => (a),
  "b": () => (b),
  "default": () => (index),
  "external": () => (non_external)
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

;// CONCATENATED MODULE: ./nested.js


var nested_module = "should not conflict",
	nested_define = "should not conflict",
	nested_require = "should not conflict",
	nested_exports = "should not conflict",
	nested_globalName = "should not conflict";
console.log.bind(console, nested_module, nested_define, nested_require, nested_exports, nested_globalName);

var __webpack_export_target__ = exports;
var __webpack_exports_export__ = __webpack_exports__.NS;
for(var i in __webpack_exports_export__) __webpack_export_target__[i] = __webpack_exports_export__[i];
if(__webpack_exports_export__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;