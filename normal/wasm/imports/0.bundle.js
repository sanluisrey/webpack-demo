"use strict";
exports.id = 0;
exports.ids = [0];
exports.modules = [
/* 0 */,
/* 1 */
/*!*********************************!*\
  !*** ./wasm/imports/wasm.wat?1 ***!
  \*********************************/
/*! namespace exports */
/*! export addNumber [provided] [maybe used in main (runtime-defined)] [usage and provision prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module, module.id, __webpack_exports__, __webpack_require__.v, __webpack_require__, __webpack_require__.* */
/***/ ((module, exports, __webpack_require__) => {

/* harmony import */ var WEBPACK_IMPORTED_MODULE_0 = __webpack_require__(/*! ./module */ 2);
module.exports = __webpack_require__.v(exports, module.id, "8386e1069a2a951143be", {
	"./module": {
		"getNumber": WEBPACK_IMPORTED_MODULE_0/* .getNumber */ .D
	}
});

/***/ }),
/* 2 */
/*!********************************!*\
  !*** ./wasm/imports/module.js ***!
  \********************************/
/*! namespace exports */
/*! export getNumber [provided] [used in main] [renamed to D] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ getNumber)
/* harmony export */ });
function getNumber() {
	return 8;
}


/***/ })
];
;