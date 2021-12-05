"use strict";
exports.id = 0;
exports.ids = [0];
exports.modules = [
/* 0 */,
/* 1 */
/*!****************************!*\
  !*** ./wasm/memory/run.js ***!
  \****************************/
/*! namespace exports */
/*! export x1 [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export x2 [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export y1 [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export y2 [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, module, __webpack_require__.a, __webpack_require__.d, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 4:0-11 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x1": () => (/* binding */ x1),
/* harmony export */   "x2": () => (/* binding */ x2),
/* harmony export */   "y1": () => (/* binding */ y1),
/* harmony export */   "y2": () => (/* binding */ y2)
/* harmony export */ });
/* harmony import */ var _mem_access_wat_1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mem-access.wat?1 */ 3);
/* harmony import */ var _mem_access_wat_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mem-access.wat?2 */ 4);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_mem_access_wat_2__WEBPACK_IMPORTED_MODULE_1__, _mem_access_wat_1__WEBPACK_IMPORTED_MODULE_0__]);
([_mem_access_wat_2__WEBPACK_IMPORTED_MODULE_1__, _mem_access_wat_1__WEBPACK_IMPORTED_MODULE_0__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);



_mem_access_wat_1__WEBPACK_IMPORTED_MODULE_0__.set(42);
const x1 = _mem_access_wat_1__WEBPACK_IMPORTED_MODULE_0__.get();
const x2 = _mem_access_wat_2__WEBPACK_IMPORTED_MODULE_1__.get();
_mem_access_wat_2__WEBPACK_IMPORTED_MODULE_1__.set(11);
const y1 = _mem_access_wat_1__WEBPACK_IMPORTED_MODULE_0__.get();
const y2 = _mem_access_wat_2__WEBPACK_IMPORTED_MODULE_1__.get();

});

/***/ }),
/* 2 */
/*!********************************!*\
  !*** ./wasm/memory/memory.wat ***!
  \********************************/
/*! namespace exports */
/*! export memory [provided] [used in main] [provision prevents renaming] */
/*! runtime requirements: module, module.id, __webpack_exports__, __webpack_require__.v, __webpack_require__.* */
/***/ ((module, exports, __webpack_require__) => {

module.exports = __webpack_require__.v(exports, module.id, "4f9c86ec27c1f26c73ae");

/***/ }),
/* 3 */
/*!**************************************!*\
  !*** ./wasm/memory/mem-access.wat?1 ***!
  \**************************************/
/*! namespace exports */
/*! export get [provided] [used in main] [provision prevents renaming] */
/*! export set [provided] [used in main] [provision prevents renaming] */
/*! runtime requirements: module, module.id, __webpack_exports__, __webpack_require__.v, __webpack_require__, __webpack_require__.a, __webpack_require__.* */
/***/ ((module, exports, __webpack_require__) => {

var __webpack_instantiate__ = ([WEBPACK_IMPORTED_MODULE_0]) => {
	return __webpack_require__.v(exports, module.id, "3b4e58d2d5e88a9f31ac", {
		"./memory.wat": {
			"memory": WEBPACK_IMPORTED_MODULE_0.memory
		}
	});
}
__webpack_require__.a(module, (__webpack_handle_async_dependencies__) => {
	/* harmony import */ var WEBPACK_IMPORTED_MODULE_0 = __webpack_require__(/*! ./memory.wat */ 2);
	var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([WEBPACK_IMPORTED_MODULE_0]);
	return __webpack_async_dependencies__.then ? __webpack_async_dependencies__.then(__webpack_instantiate__) : __webpack_instantiate__(__webpack_async_dependencies__);
}, 1);

/***/ }),
/* 4 */
/*!**************************************!*\
  !*** ./wasm/memory/mem-access.wat?2 ***!
  \**************************************/
/*! namespace exports */
/*! export get [provided] [used in main] [provision prevents renaming] */
/*! export set [provided] [used in main] [provision prevents renaming] */
/*! runtime requirements: module, module.id, __webpack_exports__, __webpack_require__.v, __webpack_require__, __webpack_require__.a, __webpack_require__.* */
/***/ ((module, exports, __webpack_require__) => {

var __webpack_instantiate__ = ([WEBPACK_IMPORTED_MODULE_0]) => {
	return __webpack_require__.v(exports, module.id, "d995c2196f7d5ae04f7a", {
		"./memory.wat": {
			"memory": WEBPACK_IMPORTED_MODULE_0.memory
		}
	});
}
__webpack_require__.a(module, (__webpack_handle_async_dependencies__) => {
	/* harmony import */ var WEBPACK_IMPORTED_MODULE_0 = __webpack_require__(/*! ./memory.wat */ 2);
	var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([WEBPACK_IMPORTED_MODULE_0]);
	return __webpack_async_dependencies__.then ? __webpack_async_dependencies__.then(__webpack_instantiate__) : __webpack_instantiate__(__webpack_async_dependencies__);
}, 1);

/***/ })
];
;