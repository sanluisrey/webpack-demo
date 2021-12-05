"use strict";
exports.id = 0;
exports.ids = [0];
exports.modules = [
/* 0 */,
/* 1 */
/*!*******************************************!*\
  !*** ./wasm/imports-many-direct/wasm.wat ***!
  \*******************************************/
/*! namespace exports */
/*! export testI64 [provided] [maybe used in main (runtime-defined)] [usage and provision prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module, module.id, __webpack_exports__, __webpack_require__.v, __webpack_require__, __webpack_require__.a, __webpack_require__.* */
/***/ ((module, exports, __webpack_require__) => {

var __webpack_instantiate__ = ([WEBPACK_IMPORTED_MODULE_0, WEBPACK_IMPORTED_MODULE_1]) => {
	return __webpack_require__.v(exports, module.id, "5af491a7eb5438cac79e", {
		"./other1.wat": {
			"getI64": WEBPACK_IMPORTED_MODULE_0.getI64
		},
		"./other2.wat": {
			"getI64": WEBPACK_IMPORTED_MODULE_1.getI64
		}
	});
}
__webpack_require__.a(module, (__webpack_handle_async_dependencies__) => {
	/* harmony import */ var WEBPACK_IMPORTED_MODULE_0 = __webpack_require__(/*! ./other1.wat */ 2);
	/* harmony import */ var WEBPACK_IMPORTED_MODULE_1 = __webpack_require__(/*! ./other2.wat */ 3);
	var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([WEBPACK_IMPORTED_MODULE_0, WEBPACK_IMPORTED_MODULE_1]);
	return __webpack_async_dependencies__.then ? __webpack_async_dependencies__.then(__webpack_instantiate__) : __webpack_instantiate__(__webpack_async_dependencies__);
}, 1);

/***/ }),
/* 2 */
/*!*********************************************!*\
  !*** ./wasm/imports-many-direct/other1.wat ***!
  \*********************************************/
/*! namespace exports */
/*! export getI64 [provided] [used in main] [provision prevents renaming] */
/*! runtime requirements: module, module.id, __webpack_exports__, __webpack_require__.v, __webpack_require__.* */
/***/ ((module, exports, __webpack_require__) => {

module.exports = __webpack_require__.v(exports, module.id, "732bd690b2e27111440a");

/***/ }),
/* 3 */
/*!*********************************************!*\
  !*** ./wasm/imports-many-direct/other2.wat ***!
  \*********************************************/
/*! namespace exports */
/*! export getI64 [provided] [used in main] [provision prevents renaming] */
/*! runtime requirements: module, module.id, __webpack_exports__, __webpack_require__.v, __webpack_require__.* */
/***/ ((module, exports, __webpack_require__) => {

module.exports = __webpack_require__.v(exports, module.id, "5eaaa19b5f9140f3d1a4");

/***/ })
];
;