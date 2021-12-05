/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/*!***********************************************************************!*\
  !*** ./inner-graph/reexport-namespace-and-default/package1/script.js ***!
  \***********************************************************************/
/*! namespace exports */
/*! export default [provided] [unused] [renamed to Z] */
/*! export exportDefaultUsed [provided] [used in main] [renamed to K] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Statement (ExportNamedDeclaration) with side effects in source code at 5:0-71 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ exportDefaultUsed)
/* harmony export */ });
/* harmony import */ var _script1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script1 */ 3);

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_script1__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);


const exportDefaultUsed = false;


/***/ }),
/* 1 */
/*!************************************************************************!*\
  !*** ./inner-graph/reexport-namespace-and-default/package1/script2.js ***!
  \************************************************************************/
/*! namespace exports */
/*! export default [provided] [unused] [renamed to Z] */
/*! export exportDefaultUsed [provided] [used in main] [renamed to K] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Statement (ExportNamedDeclaration) with side effects in source code at 5:0-71 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ exportDefaultUsed)
/* harmony export */ });
/* harmony import */ var _script3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script3 */ 6);

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() { return _script3__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z };


const exportDefaultUsed = false;


/***/ }),
/* 2 */
/*!***********************************************************************!*\
  !*** ./inner-graph/reexport-namespace-and-default/package2/script.js ***!
  \***********************************************************************/
/*! namespace exports */
/*! export default [provided] [used in main] [renamed to Z] */
/*! export exportDefaultUsed [provided] [used in main] [renamed to K] */
/*! runtime requirements: __webpack_exports__, __webpack_require__, __webpack_require__.d, __webpack_require__.* */
/*! Statement (ExportNamedDeclaration) with side effects in source code at 5:0-71 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "K": () => (/* binding */ exportDefaultUsed)
/* harmony export */ });
/* harmony import */ var _script1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script1 */ 7);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_script1__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);


const exportDefaultUsed = true;


/***/ }),
/* 3 */
/*!************************************************************************!*\
  !*** ./inner-graph/reexport-namespace-and-default/package1/script1.js ***!
  \************************************************************************/
/*! namespace exports */
/*! export default [provided] [used in main] [renamed to Z] */
/*! export exportDefaultUsed [provided] [unused] [renamed to K] -> ./inner-graph/reexport-namespace-and-default/package1/script2.js .exportDefaultUsed */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Dependency (harmony side effect evaluation) with side effects at 1:0-25 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _script2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script2 */ 1);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (1);


/***/ }),
/* 4 */,
/* 5 */
/*!**************************************************************!*\
  !*** ./inner-graph/reexport-namespace-and-default/module.js ***!
  \**************************************************************/
/*! namespace exports */
/*! export mod [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Dependency (harmony side effect evaluation) with side effects at 1:0-43 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mod": () => (/* binding */ mod)
/* harmony export */ });
/* harmony import */ var _package1_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./package1/script */ 0);
/* harmony import */ var _package2_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./package2/script */ 2);



const mod = _package2_script__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z;


/***/ }),
/* 6 */
/*!************************************************************************!*\
  !*** ./inner-graph/reexport-namespace-and-default/package1/script3.js ***!
  \************************************************************************/
/*! namespace exports */
/*! export default [provided] [used in main] [renamed to Z] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (1);


/***/ }),
/* 7 */
/*!************************************************************************!*\
  !*** ./inner-graph/reexport-namespace-and-default/package2/script1.js ***!
  \************************************************************************/
/*! namespace exports */
/*! export default [provided] [used in main] [renamed to Z] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/*!*************************************************************!*\
  !*** ./inner-graph/reexport-namespace-and-default/index.js ***!
  \*************************************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 5:0-7:3 */
/* harmony import */ var _package1_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./package1/script */ 0);
/* harmony import */ var _package1_script2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./package1/script2 */ 1);
/* harmony import */ var _package2_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./package2/script */ 2);




it("should load module correctly", () => {
	__webpack_require__(/*! ./module */ 5);
});

if (process.env.NODE_ENV === "production") {
	it("default export should be unused", () => {
		expect(_package1_script__WEBPACK_IMPORTED_MODULE_0__/* .exportDefaultUsed */ .K).toBe(false);
		expect(_package1_script2__WEBPACK_IMPORTED_MODULE_1__/* .exportDefaultUsed */ .K).toBe(false);
	});
}

it("default export should be used", () => {
	expect(_package2_script__WEBPACK_IMPORTED_MODULE_2__/* .exportDefaultUsed */ .K).toBe(true);
});

})();

/******/ })()
;