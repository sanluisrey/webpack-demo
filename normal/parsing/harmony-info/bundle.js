/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/*!****************************************!*\
  !*** ./parsing/harmony-info/module.js ***!
  \****************************************/
/*! namespace exports */
/*! export a [not provided] [used in main] [could be renamed] */
/*! export b [provided] [used in main] [could be renamed] */
/*! export c [provided] [used in main] [could be renamed] */
/*! export d [provided] [used in main] [could be renamed] */
/*! export default [not provided] [used in main] [could be renamed] */
/*! export e [not provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ b),
/* harmony export */   "c": () => (/* binding */ c),
/* harmony export */   "d": () => (/* binding */ d)
/* harmony export */ });
function b() {}



var c = 123;

function d() {}


/***/ }),
/* 2 */
/*!******************************************!*\
  !*** ./parsing/harmony-info/commonjs.js ***!
  \******************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {



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
/*!***************************************!*\
  !*** ./parsing/harmony-info/index.js ***!
  \***************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 4:0-6:3 */
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module */ 1);
/* harmony import */ var _commonjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commonjs */ 2);
/* harmony import */ var _commonjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_commonjs__WEBPACK_IMPORTED_MODULE_1__);



it("should emit the correct warnings", function() {
	_module__WEBPACK_IMPORTED_MODULE_0__["default"], _module__WEBPACK_IMPORTED_MODULE_0__.a, _module__WEBPACK_IMPORTED_MODULE_0__.b, _module__WEBPACK_IMPORTED_MODULE_0__.c, _module__WEBPACK_IMPORTED_MODULE_0__.d, _module__WEBPACK_IMPORTED_MODULE_0__.e, (_commonjs__WEBPACK_IMPORTED_MODULE_1___default()), _commonjs__WEBPACK_IMPORTED_MODULE_1__.g
});

})();

/******/ })()
;