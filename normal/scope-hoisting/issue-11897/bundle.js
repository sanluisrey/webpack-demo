/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/*!*******************************************!*\
  !*** ./scope-hoisting/issue-11897/cjs.js ***!
  \*******************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-32 */
/***/ ((module) => {

module.exports = { flag: true };


/***/ }),
/* 1 */,
/* 2 */
/*!**********************************************!*\
  !*** ./scope-hoisting/issue-11897/module.js ***!
  \**********************************************/
/*! namespace exports */
/*! export value [provided] [used in main] [renamed to S] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ value)
/* harmony export */ });
/* harmony import */ var _cjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cjs */ 0);
/* harmony import */ var _cjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_cjs__WEBPACK_IMPORTED_MODULE_0__);
(_cjs__WEBPACK_IMPORTED_MODULE_0___default().flag)++;

// prettier-ignore
const value = true


/***/ }),
/* 3 */
/*!********************************************!*\
  !*** ./scope-hoisting/issue-11897/iife.js ***!
  \********************************************/
/*! namespace exports */
/*! export value [provided] [used in main] [renamed to S] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-19 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ value)
/* harmony export */ });
(function () {})();

// prettier-ignore
const value = true


/***/ }),
/* 4 */
/*!************************************************!*\
  !*** ./scope-hoisting/issue-11897/module.js?2 ***!
  \************************************************/
/*! namespace exports */
/*! export value [provided] [used in main] [renamed to S] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ value)
/* harmony export */ });
/* harmony import */ var _cjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cjs */ 0);
/* harmony import */ var _cjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_cjs__WEBPACK_IMPORTED_MODULE_0__);
(_cjs__WEBPACK_IMPORTED_MODULE_0___default().flag)++;

// prettier-ignore
const value = true


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
/*!*********************************************!*\
  !*** ./scope-hoisting/issue-11897/index.js ***!
  \*********************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 3:0-15 */
/* harmony import */ var _cjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cjs */ 0);
/* harmony import */ var _cjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_cjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module */ 2);
/* harmony import */ var _iife__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./iife */ 3);
/* harmony import */ var _module_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module?2 */ 4);

// prettier-ignore
(_cjs__WEBPACK_IMPORTED_MODULE_0___default().flag) = true
;


(_cjs__WEBPACK_IMPORTED_MODULE_0___default().flag) = true;

it("should not break on ASI-code", () => {
	expect((_cjs__WEBPACK_IMPORTED_MODULE_0___default().flag)).toBe(true);
	expect(_module__WEBPACK_IMPORTED_MODULE_1__/* .value */ .S).toBe(true);
	expect(_iife__WEBPACK_IMPORTED_MODULE_2__/* .value */ .S).toBe(true);
	expect(_module_2__WEBPACK_IMPORTED_MODULE_3__/* .value */ .S).toBe(true);
});

})();

/******/ })()
;