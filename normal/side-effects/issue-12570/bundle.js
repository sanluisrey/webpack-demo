/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/*!****************************************************!*\
  !*** ./side-effects/issue-12570/inner-reexport.js ***!
  \****************************************************/
/*! namespace exports */
/*! export other [provided] [used in main] [renamed to Y] */
/*! export value [provided] [used in main] [renamed to S] -> ./side-effects/issue-12570/inner-module.js .value */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* reexport safe */ _inner_module_js__WEBPACK_IMPORTED_MODULE_0__.S),
/* harmony export */   "Y": () => (/* binding */ other)
/* harmony export */ });
/* harmony import */ var _inner_module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inner-module.js */ 4);

var other = 1;


/***/ }),
/* 1 */,
/* 2 */
/*!********************************************!*\
  !*** ./side-effects/issue-12570/module.js ***!
  \********************************************/
/*! namespace exports */
/*! export other [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./side-effects/issue-12570/inner-reexport.js .other */
/*! export value [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./side-effects/issue-12570/inner-module.js .value */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "other": () => (/* reexport safe */ _reexport__WEBPACK_IMPORTED_MODULE_0__.Y),
/* harmony export */   "value": () => (/* reexport safe */ _reexport__WEBPACK_IMPORTED_MODULE_0__.S)
/* harmony export */ });
/* harmony import */ var _reexport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reexport */ 3);



/***/ }),
/* 3 */
/*!**********************************************!*\
  !*** ./side-effects/issue-12570/reexport.js ***!
  \**********************************************/
/*! namespace exports */
/*! export other [provided] [used in main] [renamed to Y] -> ./side-effects/issue-12570/inner-reexport.js .other */
/*! export value [provided] [used in main] [renamed to S] -> ./side-effects/issue-12570/inner-module.js .value */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* reexport safe */ _inner_reexport__WEBPACK_IMPORTED_MODULE_0__.Y),
/* harmony export */   "S": () => (/* reexport safe */ _inner_reexport__WEBPACK_IMPORTED_MODULE_0__.S)
/* harmony export */ });
/* harmony import */ var _inner_reexport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inner-reexport */ 0);




/***/ }),
/* 4 */
/*!**************************************************!*\
  !*** ./side-effects/issue-12570/inner-module.js ***!
  \**************************************************/
/*! namespace exports */
/*! export value [provided] [used in main] [renamed to S] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ value)
/* harmony export */ });
const value = 42;


/***/ }),
/* 5 */
/*!*******************************************!*\
  !*** ./side-effects/issue-12570/chunk.js ***!
  \*******************************************/
/*! namespace exports */
/*! exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 3:0-33 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inner_reexport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inner-reexport */ 0);


console.log.bind(console, _inner_reexport__WEBPACK_IMPORTED_MODULE_0__/* .other */ .Y);


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
/*!*******************************************!*\
  !*** ./side-effects/issue-12570/index.js ***!
  \*******************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-4:3 */
it("should compile", () => {
	__webpack_require__(/*! ./module */ 2);
	__webpack_require__(/*! ./chunk */ 5);
});

})();

/******/ })()
;