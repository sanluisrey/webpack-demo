/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/*!****************************************!*\
  !*** ./parsing/issue-3769/imported.js ***!
  \****************************************/
/*! default exports */
/*! export test [provided] [used in main] [renamed to B] */
/*! runtime requirements: __webpack_exports__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-22 */
/***/ ((__unused_webpack_module, exports) => {

exports.B = "test";


/***/ }),
/* 1 */,
/* 2 */
/*!**************************************!*\
  !*** ./parsing/issue-3769/module.js ***!
  \**************************************/
/*! namespace exports */
/*! export authentication [provided] [unused] [renamed to m3] -> ./parsing/issue-3769/d.js?3 .default */
/*! export block_user [provided] [unused] [renamed to J4] -> ./parsing/issue-3769/d.js?8 .default */
/*! export example_users [provided] [unused] [renamed to Bv] -> ./parsing/issue-3769/d.js?6 .default */
/*! export locale [provided] [unused] [renamed to SP] -> ./parsing/issue-3769/d.js?5 .default */
/*! export log [provided] [unused] [renamed to cM] -> ./parsing/issue-3769/d.js?9 .default */
/*! export myTest [provided] [used in main] [renamed to NC] -> ./parsing/issue-3769/imported.js .test */
/*! export navigator [provided] [unused] [renamed to ry] -> ./parsing/issue-3769/d.js?4 .default */
/*! export preload [provided] [unused] [renamed to MA] -> ./parsing/issue-3769/d.js?1 .default */
/*! export snackbar [provided] [unused] [renamed to E] -> ./parsing/issue-3769/d.js?2 .default */
/*! export user_profile [provided] [unused] [renamed to gf] -> ./parsing/issue-3769/d.js?7 .default */
/*! export user_settings [provided] [unused] [renamed to be] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Dependency (harmony side effect evaluation) with side effects at 6:0-44 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NC": () => (/* reexport safe */ _imported__WEBPACK_IMPORTED_MODULE_0__.B)
/* harmony export */ });
/* unused harmony export user_settings */
/* harmony import */ var _a__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./a */ 3);
/* harmony import */ var _c__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./c */ 4);
/* harmony import */ var _d__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./d */ 5);
/* harmony import */ var _imported__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imported */ 0);

















const user_settings = (_a__WEBPACK_IMPORTED_MODULE_1__/* .thing */ .t, _c__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, _d__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)



/***/ }),
/* 3 */
/*!*********************************!*\
  !*** ./parsing/issue-3769/a.js ***!
  \*********************************/
/*! namespace exports */
/*! export thing [provided] [used in main] [renamed to t] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ thing)
/* harmony export */ });
const thing = 123;


/***/ }),
/* 4 */
/*!*********************************!*\
  !*** ./parsing/issue-3769/c.js ***!
  \*********************************/
/*! namespace exports */
/*! export default [provided] [used in main] [renamed to Z] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (123);


/***/ }),
/* 5 */
/*!*********************************!*\
  !*** ./parsing/issue-3769/d.js ***!
  \*********************************/
/*! namespace exports */
/*! export default [provided] [used in main] [renamed to Z] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (123);


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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************************!*\
  !*** ./parsing/issue-3769/index.js ***!
  \*************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-3:3 */
it("should generate valid code", function() {
	expect((__webpack_require__(/*! ./module */ 2)/* .myTest */ .NC)).toBe("test");
});

})();

/******/ })()
;