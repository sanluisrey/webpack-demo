"use strict";
exports.id = 0;
exports.ids = [0];
exports.modules = [
/* 0 */,
/* 1 */
/*!***************************************************!*\
  !*** ./wasm/wasm-explorer-examples-sync/tests.js ***!
  \***************************************************/
/*! namespace exports */
/*! export run_Q_rsqrt [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export run_duff [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export run_fact [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export run_fastMath [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export run_popcnt [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export run_testFunction [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, module, __webpack_require__.a, __webpack_require__.d, __webpack_require__.* */
/*! Dependency (harmony side effect evaluation) with side effects at 1:0-42 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "run_Q_rsqrt": () => (/* binding */ run_Q_rsqrt),
/* harmony export */   "run_testFunction": () => (/* binding */ run_testFunction),
/* harmony export */   "run_fact": () => (/* binding */ run_fact),
/* harmony export */   "run_popcnt": () => (/* binding */ run_popcnt),
/* harmony export */   "run_fastMath": () => (/* binding */ run_fastMath),
/* harmony export */   "run_duff": () => (/* binding */ run_duff)
/* harmony export */ });
/* harmony import */ var _Q_rsqrt_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Q_rsqrt.wasm */ 2);
/* harmony import */ var _testFunction_wasm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./testFunction.wasm */ 3);
/* harmony import */ var _fact_wasm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fact.wasm */ 4);
/* harmony import */ var _popcnt_wasm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popcnt.wasm */ 5);
/* harmony import */ var _fast_math_wasm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fast-math.wasm */ 6);
/* harmony import */ var _duff_wasm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./duff.wasm */ 8);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_duff_wasm__WEBPACK_IMPORTED_MODULE_5__, _fast_math_wasm__WEBPACK_IMPORTED_MODULE_4__, _popcnt_wasm__WEBPACK_IMPORTED_MODULE_3__, _fact_wasm__WEBPACK_IMPORTED_MODULE_2__, _testFunction_wasm__WEBPACK_IMPORTED_MODULE_1__, _Q_rsqrt_wasm__WEBPACK_IMPORTED_MODULE_0__]);
([_duff_wasm__WEBPACK_IMPORTED_MODULE_5__, _fast_math_wasm__WEBPACK_IMPORTED_MODULE_4__, _popcnt_wasm__WEBPACK_IMPORTED_MODULE_3__, _fact_wasm__WEBPACK_IMPORTED_MODULE_2__, _testFunction_wasm__WEBPACK_IMPORTED_MODULE_1__, _Q_rsqrt_wasm__WEBPACK_IMPORTED_MODULE_0__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);







function run_Q_rsqrt() {
	const result = _Q_rsqrt_wasm__WEBPACK_IMPORTED_MODULE_0__._Z7Q_rsqrtf(1/1764);
	expect(result).toBeGreaterThan(41.9);
	expect(result).toBeLessThan(42.1);
}

function run_testFunction() {
	const view = new Int32Array(_testFunction_wasm__WEBPACK_IMPORTED_MODULE_1__.memory.buffer);
	view[0] = 123;
	view[1] = 1;
	view[2] = 2;
	view[3] = 3;
	const result = _testFunction_wasm__WEBPACK_IMPORTED_MODULE_1__._Z12testFunctionPii(4, 3);
	expect(result).toEqual(6);
}

function run_fact() {
	const result = _fact_wasm__WEBPACK_IMPORTED_MODULE_2__._Z4facti(11);
	expect(result).toEqual(39916800);
}

function run_popcnt() {
	expect(_popcnt_wasm__WEBPACK_IMPORTED_MODULE_3__.main(0xF0F)).toEqual(16);
	expect(_popcnt_wasm__WEBPACK_IMPORTED_MODULE_3__._Z5countj(0xF0F)).toEqual(8);
}

function run_fastMath() {
	expect(_fast_math_wasm__WEBPACK_IMPORTED_MODULE_4__._Z3food(42)).toEqual(14);
	expect(_fast_math_wasm__WEBPACK_IMPORTED_MODULE_4__._Z9maybe_mindd(42, 24)).toEqual(24);
	expect(_fast_math_wasm__WEBPACK_IMPORTED_MODULE_4__._Z8call_powd(42)).toEqual(9682651996416);
	expect(_fast_math_wasm__WEBPACK_IMPORTED_MODULE_4__._Z6do_powd(42)).toEqual(9682651996416);
	expect(_fast_math_wasm__WEBPACK_IMPORTED_MODULE_4__._Z6factorddd(42, 42, 42)).toEqual(3528);
}

function run_duff() {
	const view = new Uint8Array(_duff_wasm__WEBPACK_IMPORTED_MODULE_5__.memory.buffer);
	view[0] = 123;
	for(let i = 1; i < 100; i++)
		view[i] = i;
	const result = _duff_wasm__WEBPACK_IMPORTED_MODULE_5__._Z4sendPcS_m(200, 1, 100);
	for(let i = 1; i < 100; i++)
		expect(view[199 + i]).toEqual(i);
}

});

/***/ }),
/* 2 */
/*!*******************************************************!*\
  !*** ./wasm/wasm-explorer-examples-sync/Q_rsqrt.wasm ***!
  \*******************************************************/
/*! namespace exports */
/*! export _Z7Q_rsqrtf [provided] [used in main] [provision prevents renaming] */
/*! export memory [provided] [unused] [provision prevents renaming] */
/*! runtime requirements: module, module.id, __webpack_exports__, __webpack_require__.v, __webpack_require__.* */
/***/ ((module, exports, __webpack_require__) => {

module.exports = __webpack_require__.v(exports, module.id, "830a34301bf67f029bdf");

/***/ }),
/* 3 */
/*!************************************************************!*\
  !*** ./wasm/wasm-explorer-examples-sync/testFunction.wasm ***!
  \************************************************************/
/*! namespace exports */
/*! export _Z12testFunctionPii [provided] [used in main] [provision prevents renaming] */
/*! export memory [provided] [used in main] [provision prevents renaming] */
/*! runtime requirements: module, module.id, __webpack_exports__, __webpack_require__.v, __webpack_require__.* */
/***/ ((module, exports, __webpack_require__) => {

module.exports = __webpack_require__.v(exports, module.id, "e0c4c460967584e814a4");

/***/ }),
/* 4 */
/*!****************************************************!*\
  !*** ./wasm/wasm-explorer-examples-sync/fact.wasm ***!
  \****************************************************/
/*! namespace exports */
/*! export _Z4facti [provided] [used in main] [provision prevents renaming] */
/*! export memory [provided] [unused] [provision prevents renaming] */
/*! runtime requirements: module, module.id, __webpack_exports__, __webpack_require__.v, __webpack_require__.* */
/***/ ((module, exports, __webpack_require__) => {

module.exports = __webpack_require__.v(exports, module.id, "48bbd7cc517ba442ccea");

/***/ }),
/* 5 */
/*!******************************************************!*\
  !*** ./wasm/wasm-explorer-examples-sync/popcnt.wasm ***!
  \******************************************************/
/*! namespace exports */
/*! export _Z5countj [provided] [used in main] [provision prevents renaming] */
/*! export main [provided] [used in main] [provision prevents renaming] */
/*! export memory [provided] [unused] [provision prevents renaming] */
/*! runtime requirements: module, module.id, __webpack_exports__, __webpack_require__.v, __webpack_require__.* */
/***/ ((module, exports, __webpack_require__) => {

module.exports = __webpack_require__.v(exports, module.id, "d8b9982db915469ade50");

/***/ }),
/* 6 */
/*!*********************************************************!*\
  !*** ./wasm/wasm-explorer-examples-sync/fast-math.wasm ***!
  \*********************************************************/
/*! namespace exports */
/*! export _Z3food [provided] [used in main] [provision prevents renaming] */
/*! export _Z6do_powd [provided] [used in main] [provision prevents renaming] */
/*! export _Z6factorddd [provided] [used in main] [provision prevents renaming] */
/*! export _Z8call_powd [provided] [used in main] [provision prevents renaming] */
/*! export _Z9maybe_mindd [provided] [used in main] [provision prevents renaming] */
/*! export memory [provided] [unused] [provision prevents renaming] */
/*! runtime requirements: module, module.id, __webpack_exports__, __webpack_require__.v, __webpack_require__, __webpack_require__.* */
/***/ ((module, exports, __webpack_require__) => {

/* harmony import */ var WEBPACK_IMPORTED_MODULE_0 = __webpack_require__(/*! env */ 7);
module.exports = __webpack_require__.v(exports, module.id, "5564c45a44998a102c13", {
	"env": {
		"_Z3powdd": WEBPACK_IMPORTED_MODULE_0/* ._Z3powdd */ .j
	}
});

/***/ }),
/* 7 */
/*!**************************************************************!*\
  !*** ./wasm/wasm-explorer-examples-sync/node_modules/env.js ***!
  \**************************************************************/
/*! namespace exports */
/*! export _Z3powdd [provided] [used in main] [renamed to j] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Statement (ExportNamedDeclaration) with side effects in source code at 1:0-33 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ _Z3powdd)
/* harmony export */ });
const _Z3powdd = Math.pow;


/***/ }),
/* 8 */
/*!****************************************************!*\
  !*** ./wasm/wasm-explorer-examples-sync/duff.wasm ***!
  \****************************************************/
/*! namespace exports */
/*! export _Z4sendPcS_m [provided] [used in main] [provision prevents renaming] */
/*! export memory [provided] [used in main] [provision prevents renaming] */
/*! runtime requirements: module, module.id, __webpack_exports__, __webpack_require__.v, __webpack_require__.* */
/***/ ((module, exports, __webpack_require__) => {

module.exports = __webpack_require__.v(exports, module.id, "7eada966ddcdc162daf2");

/***/ })
];
;