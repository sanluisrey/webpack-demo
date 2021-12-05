/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 847:
/*!**************!*\
  !*** ./a.js ***!
  \**************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PK": () => (/* reexport safe */ _other_file__WEBPACK_IMPORTED_MODULE_0__.doThings),
/* harmony export */   "RN": () => (/* reexport safe */ _other_file__WEBPACK_IMPORTED_MODULE_0__.foo),
/* harmony export */   "JZ": () => (/* binding */ valueFromA)
/* harmony export */ });
/* harmony import */ var _other_file__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./other-file */ 74);
/* harmony import */ var _other_file__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_other_file__WEBPACK_IMPORTED_MODULE_0__);




const valueFromA = "A";


/***/ }),

/***/ 74:
/*!***********************!*\
  !*** ./other-file.js ***!
  \***********************/
/***/ ((module) => {

module.exports = { foo: { foo: 'bar' }, doThings: (v) => v}

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
/* harmony import */ var _a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a */ 847);

it("should compile", function (done) {
	expect((0,_a__WEBPACK_IMPORTED_MODULE_0__/* .doThings */ .PK)("ok")).toBe("ok");

	// Should be replaced by the code in the config.
	expect(_a__WEBPACK_IMPORTED_MODULE_0__/* .foo.foo */ .RN.foo).toBe("bar");
	expect(_a__WEBPACK_IMPORTED_MODULE_0__/* .valueFromA */ .JZ).toBe("A");

	done();
});

it("should not reference the chunk", () => {
	expect(__STATS__.chunks.length).toEqual(1);
	expect(
		__STATS__.modules
			.filter(m => m.moduleType !== "runtime")
			.map(m => m.name)
			.sort()
	).toEqual(["./a.js", "./index.js", "./other-file.js"]);
});

})();

/******/ })()
;