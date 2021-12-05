/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/*!*********************************************!*\
  !*** ./entry-exports-field/self/module1.js ***!
  \*********************************************/
/*! dynamic exports */
/*! export __esModule [provided] [unused] [provision prevents renaming] -> ./entry-exports-field/self/lib/c.js .__esModule */
/*! export default [provided] [used in main] [provision prevents renaming] -> ./entry-exports-field/self/lib/c.js .default */
/*! runtime requirements: module, __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-45 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! @scope/self/a.js */ 2);


/***/ }),
/* 1 */,
/* 2 */
/*!*******************************************!*\
  !*** ./entry-exports-field/self/lib/c.js ***!
  \*******************************************/
/*! namespace exports */
/*! export __esModule [not provided] [unused] [could be renamed] */
/*! export default [provided] [used in main] [usage prevents renaming] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (2);


/***/ }),
/* 3 */
/*!*********************************************!*\
  !*** ./entry-exports-field/self/module3.js ***!
  \*********************************************/
/*! namespace exports */
/*! export default [provided] [used in main] [renamed to Z] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Dependency (harmony side effect evaluation) with side effects at 1:0-29 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _module2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module2.js */ 4);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_module2_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);


/***/ }),
/* 4 */
/*!*********************************************!*\
  !*** ./entry-exports-field/self/module2.js ***!
  \*********************************************/
/*! namespace exports */
/*! export default [provided] [used in main] [renamed to Z] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Dependency (harmony side effect evaluation) with side effects at 1:0-26 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _module1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module1 */ 0);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_module1__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),
/* 5 */
/*!*******************************************!*\
  !*** ./entry-exports-field/self/lib/b.js ***!
  \*******************************************/
/*! namespace exports */
/*! export default [provided] [used in main] [renamed to Z] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (1);


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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*******************************************!*\
  !*** ./entry-exports-field/self/index.js ***!
  \*******************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 5:0-9:3 */
/* harmony import */ var _scope_self_a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @scope/self/a.js */ 5);
/* harmony import */ var _module1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module1.js */ 0);
/* harmony import */ var _module3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module3.js */ 3);




it("should respect type of import", function() {
	expect(_scope_self_a_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z).toBe(1);
	expect(_module1_js__WEBPACK_IMPORTED_MODULE_0__["default"]).toBe(2);
	expect(_module3_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z).toBe(2);
});

})();

/******/ })()
;