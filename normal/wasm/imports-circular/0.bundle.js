"use strict";
exports.id = 0;
exports.ids = [0];
exports.modules = [
/* 0 */,
/* 1 */
/*!*****************************************!*\
  !*** ./wasm/imports-circular/module.js ***!
  \*****************************************/
/*! namespace exports */
/*! export getNumber [provided] [used in main] [usage prevents renaming] */
/*! export result [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, module, __webpack_require__.a, __webpack_require__.d, __webpack_require__.* */
/*! Statement (ExportNamedDeclaration) with side effects in source code at 3:0-34 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "result": () => (/* binding */ result),
/* harmony export */   "getNumber": () => (/* binding */ getNumber)
/* harmony export */ });
/* harmony import */ var _wasm_wat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wasm.wat */ 2);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_wasm_wat__WEBPACK_IMPORTED_MODULE_0__]);
_wasm_wat__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];


var result = (0,_wasm_wat__WEBPACK_IMPORTED_MODULE_0__.addNumber)(22);

function getNumber() {
	return 20;
}

});

/***/ }),
/* 2 */
/*!****************************************!*\
  !*** ./wasm/imports-circular/wasm.wat ***!
  \****************************************/
/*! namespace exports */
/*! export addNumber [provided] [used in main] [provision prevents renaming] */
/*! runtime requirements: module, module.id, __webpack_exports__, __webpack_require__.v, __webpack_require__, __webpack_require__.a, __webpack_require__.* */
/***/ ((module, exports, __webpack_require__) => {

var __webpack_instantiate__ = ([WEBPACK_IMPORTED_MODULE_0]) => {
	return __webpack_require__.v(exports, module.id, "34450bd5de00975b9c57", {
		"./module": {
			"getNumber": WEBPACK_IMPORTED_MODULE_0.getNumber
		}
	});
}
__webpack_require__.a(module, (__webpack_handle_async_dependencies__) => {
	/* harmony import */ var WEBPACK_IMPORTED_MODULE_0 = __webpack_require__(/*! ./module */ 1);
	var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([WEBPACK_IMPORTED_MODULE_0]);
	return __webpack_async_dependencies__.then ? __webpack_async_dependencies__.then(__webpack_instantiate__) : __webpack_instantiate__(__webpack_async_dependencies__);
}, 1);

/***/ })
];
;