"use strict";
exports.id = 0;
exports.ids = [0];
exports.modules = [
/* 0 */,
/* 1 */
/*!*********************************************************************************!*\
  !*** ./wasm/finalize-exports-issue-8261/node_modules/side-effect-free/index.js ***!
  \*********************************************************************************/
/*! namespace exports */
/*! export a [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./wasm/finalize-exports-issue-8261/node_modules/side-effect-free/module.wat .a */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, module, __webpack_require__.a, __webpack_require__.* */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* reexport safe */ _module_wat__WEBPACK_IMPORTED_MODULE_0__.a)
/* harmony export */ });
/* harmony import */ var _module_wat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module.wat */ 2);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_module_wat__WEBPACK_IMPORTED_MODULE_0__]);
_module_wat__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];


});

/***/ }),
/* 2 */
/*!***********************************************************************************!*\
  !*** ./wasm/finalize-exports-issue-8261/node_modules/side-effect-free/module.wat ***!
  \***********************************************************************************/
/*! namespace exports */
/*! export a [provided] [used in main] [provision prevents renaming] */
/*! runtime requirements: module, module.id, __webpack_exports__, __webpack_require__.v, __webpack_require__.* */
/***/ ((module, exports, __webpack_require__) => {

module.exports = __webpack_require__.v(exports, module.id, "646392bddc5d93e18a59");

/***/ })
];
;