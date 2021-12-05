"use strict";
exports.id = 115;
exports.ids = [115];
exports.modules = {

/***/ 579:
/*!************************!*\
  !*** ./init-module.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ 40);

(0,_state__WEBPACK_IMPORTED_MODULE_0__/* .set */ .t)("ok");


/***/ }),

/***/ 40:
/*!******************!*\
  !*** ./state.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ value),
/* harmony export */   "t": () => (/* binding */ set)
/* harmony export */ });
let value = "";
function set(v) {
	value = v;
}


/***/ }),

/***/ 768:
/*!******************!*\
  !*** ./test2.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "other": () => (/* binding */ other)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ 40);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("test2");
const other = "other";

expect(_state__WEBPACK_IMPORTED_MODULE_0__/* .value */ .S).toBe("ok");


/***/ })

};
;