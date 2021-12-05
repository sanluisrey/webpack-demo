"use strict";
exports.id = 0;
exports.ids = [0];
exports.modules = [
/* 0 */,
/* 1 */
/*!**************************************!*\
  !*** ./wasm/unused-export/module.js ***!
  \**************************************/
/*! namespace exports */
/*! export run [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, module, __webpack_require__.a, __webpack_require__.d, __webpack_require__.* */
/*! Dependency (harmony side effect evaluation) with side effects at 1:0-39 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "run": () => (/* binding */ run)
/* harmony export */ });
/* harmony import */ var _wasm_wat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wasm.wat */ 2);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_wasm_wat__WEBPACK_IMPORTED_MODULE_0__]);
_wasm_wat__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];


function run() {
	return (0,_wasm_wat__WEBPACK_IMPORTED_MODULE_0__.getNumber)();
}

});

/***/ }),
/* 2 */
/*!*************************************!*\
  !*** ./wasm/unused-export/wasm.wat ***!
  \*************************************/
/*! namespace exports */
/*! export add [provided] [unused] [provision prevents renaming] */
/*! export getNumber [provided] [used in main] [provision prevents renaming] */
/*! runtime requirements: module, module.id, __webpack_exports__, __webpack_require__.v, __webpack_require__.* */
/***/ ((module, exports, __webpack_require__) => {

module.exports = __webpack_require__.v(exports, module.id, "22d022dab3ac7dd8cd35");

/***/ })
];
;