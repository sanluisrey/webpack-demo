"use strict";
exports.id = 0;
exports.ids = [0];
exports.modules = [
/* 0 */,
/* 1 */
/*!***********************************************!*\
  !*** ./wasm/export-imported-global/module.js ***!
  \***********************************************/
/*! namespace exports */
/*! export test [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./wasm/export-imported-global/module.wat .test */
/*! export v [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./wasm/export-imported-global/module.wat .v */
/*! export w [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./wasm/export-imported-global/module.wat .w */
/*! export x [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./wasm/export-imported-global/module.wat .x */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, module, __webpack_require__.a, __webpack_require__.* */
/*! Dependency (harmony side effect evaluation) with side effects at 1:0-29 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "test": () => (/* reexport safe */ _module_wat__WEBPACK_IMPORTED_MODULE_0__.test),
/* harmony export */   "v": () => (/* reexport safe */ _module_wat__WEBPACK_IMPORTED_MODULE_0__.v),
/* harmony export */   "w": () => (/* reexport safe */ _module_wat__WEBPACK_IMPORTED_MODULE_0__.w),
/* harmony export */   "x": () => (/* reexport safe */ _module_wat__WEBPACK_IMPORTED_MODULE_0__.x)
/* harmony export */ });
/* harmony import */ var _module_wat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module.wat */ 2);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_module_wat__WEBPACK_IMPORTED_MODULE_0__]);
_module_wat__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];


});

/***/ }),
/* 2 */
/*!************************************************!*\
  !*** ./wasm/export-imported-global/module.wat ***!
  \************************************************/
/*! namespace exports */
/*! export test [provided] [used in main] [provision prevents renaming] */
/*! export v [provided] [used in main] [provision prevents renaming] */
/*! export w [provided] [used in main] [provision prevents renaming] */
/*! export x [provided] [used in main] [provision prevents renaming] */
/*! runtime requirements: module, module.id, __webpack_exports__, __webpack_require__.v, __webpack_require__, __webpack_require__.* */
/***/ ((module, exports, __webpack_require__) => {

/* harmony import */ var WEBPACK_IMPORTED_MODULE_0 = __webpack_require__(/*! ./env.js */ 3);
module.exports = __webpack_require__.v(exports, module.id, "18cde192f3f0d3d4eeb4", {
	"./env.js": {
		"n": WEBPACK_IMPORTED_MODULE_0.n,
		"m": WEBPACK_IMPORTED_MODULE_0.m
	}
});

/***/ }),
/* 3 */
/*!********************************************!*\
  !*** ./wasm/export-imported-global/env.js ***!
  \********************************************/
/*! namespace exports */
/*! export m [provided] [used in main] [could be renamed] */
/*! export n [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ n),
/* harmony export */   "m": () => (/* binding */ m)
/* harmony export */ });
const n = 1;
const m = 1.25


/***/ })
];
;