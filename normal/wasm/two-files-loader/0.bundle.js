"use strict";
exports.id = 0;
exports.ids = [0];
exports.modules = [
/* 0 */,
/* 1 */
/*!**************************************************************************************!*\
  !*** ./wasm/two-files-loader/wrapper-loader.js!./wasm/two-files-loader/src/wasm.dat ***!
  \**************************************************************************************/
/*! namespace exports */
/*! export getString [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, module, __webpack_require__.a, __webpack_require__.d, __webpack_require__.* */
/*! Dependency (harmony side effect evaluation) with side effects at 2:1-79 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getString": () => (/* binding */ getString)
/* harmony export */ });
/* harmony import */ var _wasm_dat_wat_wasm_dat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wasm.dat.wat!=!./wasm.dat */ 3);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_wasm_dat_wat_wasm_dat__WEBPACK_IMPORTED_MODULE_0__]);
_wasm_dat_wat_wasm_dat__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];

	

	function getString() {
		const strBuf = new Uint8Array(_wasm_dat_wat_wasm_dat__WEBPACK_IMPORTED_MODULE_0__.memory.buffer, (0,_wasm_dat_wat_wasm_dat__WEBPACK_IMPORTED_MODULE_0__.getString)());
		const idx = strBuf.indexOf(0);
		const strBuf2 = strBuf.slice(0, idx);
		const str = Buffer.from(strBuf2).toString("utf-8");
		return str;
	};
	
});

/***/ }),
/* 2 */,
/* 3 */
/*!***************************************************************************************!*\
  !*** ./wasm/two-files-loader/src/wasm.dat.wat!=!./wasm/two-files-loader/src/wasm.dat ***!
  \***************************************************************************************/
/*! namespace exports */
/*! export getString [provided] [used in main] [provision prevents renaming] */
/*! export memory [provided] [used in main] [provision prevents renaming] */
/*! runtime requirements: module, module.id, __webpack_exports__, __webpack_require__.v, __webpack_require__.* */
/***/ ((module, exports, __webpack_require__) => {

module.exports = __webpack_require__.v(exports, module.id, "e932084b5dccb97ea89f");

/***/ })
];
;