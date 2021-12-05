"use strict";
exports.id = 2;
exports.ids = [2];
exports.modules = [
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/*!*************************************************!*\
  !*** ./chunks/circular-correctness/module-c.js ***!
  \*************************************************/
/*! namespace exports */
/*! export default [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.e, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _module_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module-x */ 4);


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
	if(Math.random() < -1) {
		__webpack_require__.e(/*! import() | a */ 0).then(__webpack_require__.bind(__webpack_require__, /*! ./module-a */ 1));
		__webpack_require__.e(/*! import() | b */ 1).then(__webpack_require__.bind(__webpack_require__, /*! ./module-b */ 2));
	}
	return _module_x__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z;
}


/***/ }),
/* 4 */
/*!*************************************************!*\
  !*** ./chunks/circular-correctness/module-x.js ***!
  \*************************************************/
/*! namespace exports */
/*! export default [provided] [used in main] [renamed to Z] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("x");


/***/ })
];
;