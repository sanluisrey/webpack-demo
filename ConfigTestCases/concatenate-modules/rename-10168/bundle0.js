/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 569:
/*!**************!*\
  !*** ./D.js ***!
  \**************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ D)
/* harmony export */ });
class D {}


/***/ }),

/***/ 921:
/*!****************************!*\
  !*** ./all.js + 4 modules ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "A": () => (/* reexport */ A),
  "B": () => (/* reexport */ B_B),
  "CC": () => (/* reexport */ C),
  "D": () => (/* reexport */ D_0.D),
  "E": () => (/* reexport */ E)
});

;// CONCATENATED MODULE: ./A.js
class A {}

;// CONCATENATED MODULE: ./B.js
class B_B {}

;// CONCATENATED MODULE: ./C.js


const X = 0;
var Y = 0;

class C extends (function() {
	var A = 0;
	var B = 0;
	return B_B;
})() {}

// EXTERNAL MODULE: ./D.js
var D_0 = __webpack_require__(569);
;// CONCATENATED MODULE: ./E.js


class E extends (function() {
	var D = 0;
	return D_0.D;
})() {}

;// CONCATENATED MODULE: ./all.js








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
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/* harmony import */ var _all__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./all */ 921);


__webpack_require__(/*! ./all */ 921);
__webpack_require__(/*! ./D */ 569);

it("should not rename classes unnecessary", () => {
	expect(_all__WEBPACK_IMPORTED_MODULE_0__.A.name).toBe("A");
	expect(_all__WEBPACK_IMPORTED_MODULE_0__.B.name).toBe("B_B");
	expect(_all__WEBPACK_IMPORTED_MODULE_0__.CC.name).toBe("C");
	expect(_all__WEBPACK_IMPORTED_MODULE_0__.D.name).toBe("D");
	expect(_all__WEBPACK_IMPORTED_MODULE_0__.E.name).toBe("E");
});

})();

/******/ })()
;