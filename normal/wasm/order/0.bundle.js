"use strict";
exports.id = 0;
exports.ids = [0];
exports.modules = [
/* 0 */,
/* 1 */
/*!*************************!*\
  !*** ./wasm/order/a.js ***!
  \*************************/
/*! namespace exports */
/*! export default [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, module, __webpack_require__.a, __webpack_require__.d, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 5:0-9 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tracker */ 2);
/* harmony import */ var _b_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./b.js */ 3);
/* harmony import */ var _wasm_wat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wasm.wat */ 4);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_wasm_wat__WEBPACK_IMPORTED_MODULE_2__]);
_wasm_wat__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];




(0,_tracker__WEBPACK_IMPORTED_MODULE_0__/* .trackA */ .zZ)();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_tracker__WEBPACK_IMPORTED_MODULE_0__/* .results */ .sW);

});

/***/ }),
/* 2 */
/*!*******************************!*\
  !*** ./wasm/order/tracker.js ***!
  \*******************************/
/*! namespace exports */
/*! export results [provided] [used in main] [renamed to sW] */
/*! export trackA [provided] [used in main] [renamed to zZ] */
/*! export trackB [provided] [used in main] [renamed to j5] */
/*! export trackC [provided] [used in main] [renamed to sw] */
/*! export trackWasm [provided] [used in main] [renamed to bZ] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 8:0-51 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sW": () => (/* binding */ results),
/* harmony export */   "zZ": () => (/* binding */ trackA),
/* harmony export */   "j5": () => (/* binding */ trackB),
/* harmony export */   "sw": () => (/* binding */ trackC),
/* harmony export */   "bZ": () => (/* binding */ trackWasm)
/* harmony export */ });
let results = [];

function trackA() { results.push("a"); }
function trackB() { results.push("b"); }
function trackC() { results.push("c"); }
function trackWasm(number) { results.push("wasm" + number); }

Promise.resolve().then(() => results.push("tick"));


/***/ }),
/* 3 */
/*!*************************!*\
  !*** ./wasm/order/b.js ***!
  \*************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 3:0-9 */
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _tracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tracker */ 2);


(0,_tracker__WEBPACK_IMPORTED_MODULE_0__/* .trackB */ .j5)();


/***/ }),
/* 4 */
/*!*****************************!*\
  !*** ./wasm/order/wasm.wat ***!
  \*****************************/
/*! namespace exports */
/*! runtime requirements: module, module.id, __webpack_exports__, __webpack_require__.v, __webpack_require__, __webpack_require__.* */
/***/ ((module, exports, __webpack_require__) => {

/* harmony import */ var WEBPACK_IMPORTED_MODULE_0 = __webpack_require__(/*! ./tracker */ 2);
/* harmony import */ var WEBPACK_IMPORTED_MODULE_1 = __webpack_require__(/*! ./c.js */ 5);
module.exports = __webpack_require__.v(exports, module.id, "582b37d6d8bb812baf7c", {
	"./tracker": {
		"trackWasm": WEBPACK_IMPORTED_MODULE_0/* .trackWasm */ .bZ
	},
	"./c.js": {
		"magicNumber": WEBPACK_IMPORTED_MODULE_1/* .magicNumber */ .r
	}
});

/***/ }),
/* 5 */
/*!*************************!*\
  !*** ./wasm/order/c.js ***!
  \*************************/
/*! namespace exports */
/*! export magicNumber [provided] [used in main] [renamed to r] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 3:0-9 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ magicNumber)
/* harmony export */ });
/* harmony import */ var _tracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tracker */ 2);


(0,_tracker__WEBPACK_IMPORTED_MODULE_0__/* .trackC */ .sw)();

const magicNumber = 42;


/***/ })
];
;