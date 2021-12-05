"use strict";
exports.id = 22;
exports.ids = [22];
exports.modules = {

/***/ 22:
/*!*******************!*\
  !*** ./chunk1.js ***!
  \*******************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _big_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./big-module */ 425);
/* harmony import */ var _wasm_wat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wasm.wat */ 366);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_wasm_wat__WEBPACK_IMPORTED_MODULE_0__]);
_wasm_wat__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_big_module__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z + _wasm_wat__WEBPACK_IMPORTED_MODULE_0__.add);

});

/***/ }),

/***/ 366:
/*!******************!*\
  !*** ./wasm.wat ***!
  \******************/
/***/ ((module, exports, __webpack_require__) => {

module.exports = __webpack_require__.v(exports, module.id, "c3d39c3705a9cfd830ed");

/***/ })

};
;