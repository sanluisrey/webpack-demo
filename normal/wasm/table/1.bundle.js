"use strict";
exports.id = 1;
exports.ids = [1,0];
exports.modules = [
/* 0 */,
/* 1 */
/*!******************************************!*\
  !*** ./wasm/table/wasm-table-export.wat ***!
  \******************************************/
/*! namespace exports */
/*! export table [provided] [used in main] [usage and provision prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module, module.id, __webpack_exports__, __webpack_require__.v, __webpack_require__.* */
/***/ ((module, exports, __webpack_require__) => {

module.exports = __webpack_require__.v(exports, module.id, "0b2ed789e3bdf2bd213a");

/***/ }),
/* 2 */,
/* 3 */
/*!********************************************!*\
  !*** ./wasm/table/wasm-table-imported.wat ***!
  \********************************************/
/*! namespace exports */
/*! export callByIndex [provided] [maybe used in main (runtime-defined)] [usage and provision prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module, module.id, __webpack_exports__, __webpack_require__.v, __webpack_require__, __webpack_require__.a, __webpack_require__.* */
/***/ ((module, exports, __webpack_require__) => {

var __webpack_instantiate__ = ([WEBPACK_IMPORTED_MODULE_0]) => {
	return __webpack_require__.v(exports, module.id, "2977a7422d987474135e", {
		"./wasm-table-export.wat": {
			"table": WEBPACK_IMPORTED_MODULE_0.table
		}
	});
}
__webpack_require__.a(module, (__webpack_handle_async_dependencies__) => {
	/* harmony import */ var WEBPACK_IMPORTED_MODULE_0 = __webpack_require__(/*! ./wasm-table-export.wat */ 1);
	var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([WEBPACK_IMPORTED_MODULE_0]);
	return __webpack_async_dependencies__.then ? __webpack_async_dependencies__.then(__webpack_instantiate__) : __webpack_instantiate__(__webpack_async_dependencies__);
}, 1);

/***/ })
];
;