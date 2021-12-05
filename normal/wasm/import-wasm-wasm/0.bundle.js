"use strict";
exports.id = 0;
exports.ids = [0];
exports.modules = [
/* 0 */,
/* 1 */
/*!****************************************!*\
  !*** ./wasm/import-wasm-wasm/wasm.wat ***!
  \****************************************/
/*! namespace exports */
/*! export addNumber [provided] [maybe used in main (runtime-defined)] [usage and provision prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module, module.id, __webpack_exports__, __webpack_require__.v, __webpack_require__, __webpack_require__.a, __webpack_require__.* */
/***/ ((module, exports, __webpack_require__) => {

var __webpack_instantiate__ = ([WEBPACK_IMPORTED_MODULE_0]) => {
	return __webpack_require__.v(exports, module.id, "101e4e43b129f0416e62", {
		"./wasm2.wat": {
			"getNumber": WEBPACK_IMPORTED_MODULE_0.getNumber
		}
	});
}
__webpack_require__.a(module, (__webpack_handle_async_dependencies__) => {
	/* harmony import */ var WEBPACK_IMPORTED_MODULE_0 = __webpack_require__(/*! ./wasm2.wat */ 2);
	var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([WEBPACK_IMPORTED_MODULE_0]);
	return __webpack_async_dependencies__.then ? __webpack_async_dependencies__.then(__webpack_instantiate__) : __webpack_instantiate__(__webpack_async_dependencies__);
}, 1);

/***/ }),
/* 2 */
/*!*****************************************!*\
  !*** ./wasm/import-wasm-wasm/wasm2.wat ***!
  \*****************************************/
/*! namespace exports */
/*! export getNumber [provided] [used in main] [provision prevents renaming] */
/*! runtime requirements: module, module.id, __webpack_exports__, __webpack_require__.v, __webpack_require__.* */
/***/ ((module, exports, __webpack_require__) => {

module.exports = __webpack_require__.v(exports, module.id, "af8681e5cf242fd3bc3a");

/***/ })
];
;