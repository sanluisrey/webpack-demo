/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 461:
/*!**********************************!*\
  !*** ./node_modules/external.js ***!
  \**********************************/
/***/ ((module) => {

module.exports = ["external"];


/***/ }),

/***/ 845:
/*!*******************************************************************************!*\
  !*** ../../../js/ConfigTestCases/library/0-create-library/commonjs-nested.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/******/ 
/******/ // The require scope
/******/ var __nested_webpack_require_66__ = {};
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__nested_webpack_require_66__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__nested_webpack_require_66__.o(definition, key) && !__nested_webpack_require_66__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__nested_webpack_require_66__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__nested_webpack_require_66__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
/*!*******************************!*\
  !*** ./nested.js + 3 modules ***!
  \*******************************/

// EXPORTS
__nested_webpack_require_66__.d(__webpack_exports__, {
  "NS": () => (/* reexport */ index_namespaceObject)
});

// NAMESPACE OBJECT: ./index.js
var index_namespaceObject = {};
__nested_webpack_require_66__.r(index_namespaceObject);
__nested_webpack_require_66__.d(index_namespaceObject, {
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
/* harmony import */ var library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! library */ 845);
/* harmony import */ var library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(library__WEBPACK_IMPORTED_MODULE_0__);



it(
	"should be able to import harmony exports from library (" + "commonjs-nested" + ")",
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