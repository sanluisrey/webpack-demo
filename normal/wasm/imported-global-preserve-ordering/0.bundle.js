"use strict";
exports.id = 0;
exports.ids = [0];
exports.modules = [
/* 0 */,
/* 1 */
/*!***********************************************************!*\
  !*** ./wasm/imported-global-preserve-ordering/module.wat ***!
  \***********************************************************/
/*! namespace exports */
/*! export c [provided] [maybe used in main (runtime-defined)] [usage and provision prevents renaming] */
/*! export d [provided] [maybe used in main (runtime-defined)] [usage and provision prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module, module.id, __webpack_exports__, __webpack_require__.v, __webpack_require__, __webpack_require__.* */
/***/ ((module, exports, __webpack_require__) => {

/* harmony import */ var WEBPACK_IMPORTED_MODULE_0 = __webpack_require__(/*! ./env.js */ 2);
module.exports = __webpack_require__.v(exports, module.id, "70f50809cf02ab5206ce", {
	"./env.js": {
		"a": WEBPACK_IMPORTED_MODULE_0.a,
		"b": WEBPACK_IMPORTED_MODULE_0.b
	}
});

/***/ }),
/* 2 */
/*!*******************************************************!*\
  !*** ./wasm/imported-global-preserve-ordering/env.js ***!
  \*******************************************************/
/*! namespace exports */
/*! export a [provided] [used in main] [could be renamed] */
/*! export b [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ a),
/* harmony export */   "b": () => (/* binding */ b)
/* harmony export */ });
const a = 1;
const b = 2;


/***/ })
];
;