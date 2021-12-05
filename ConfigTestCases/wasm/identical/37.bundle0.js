"use strict";
exports.id = 37;
exports.ids = [37];
exports.modules = {

/***/ 37:
/*!*********************!*\
  !*** ./module.js?2 ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "run": () => (/* binding */ run)
/* harmony export */ });
/* harmony import */ var _wasm_wat_1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wasm.wat?1 */ 276);
/* harmony import */ var _wasm_wat_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wasm.wat?2 */ 709);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_wasm_wat_2__WEBPACK_IMPORTED_MODULE_1__, _wasm_wat_1__WEBPACK_IMPORTED_MODULE_0__]);
([_wasm_wat_2__WEBPACK_IMPORTED_MODULE_1__, _wasm_wat_1__WEBPACK_IMPORTED_MODULE_0__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);



function run() {
	return (0,_wasm_wat_1__WEBPACK_IMPORTED_MODULE_0__.getNumber)() + (0,_wasm_wat_2__WEBPACK_IMPORTED_MODULE_1__.getNumber)();
}

});

/***/ }),

/***/ 276:
/*!********************!*\
  !*** ./wasm.wat?1 ***!
  \********************/
/***/ ((module, exports, __webpack_require__) => {

module.exports = __webpack_require__.v(exports, module.id, "e21657260ec0f18a4134");

/***/ }),

/***/ 709:
/*!********************!*\
  !*** ./wasm.wat?2 ***!
  \********************/
/***/ ((module, exports, __webpack_require__) => {

module.exports = __webpack_require__.v(exports, module.id, "a04d6a1abf22eca33af0");

/***/ })

};
;