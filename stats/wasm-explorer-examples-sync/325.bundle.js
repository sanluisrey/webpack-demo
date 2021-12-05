"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[325],{

/***/ 325:
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
/* harmony import */ var _Q_rsqrt_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(189);
/* harmony import */ var _testFunction_wasm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(881);
/* harmony import */ var _fact_wasm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(242);
/* harmony import */ var _popcnt_wasm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(517);
/* harmony import */ var _fast_math_wasm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(980);
/* harmony import */ var _duff_wasm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20);
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

/***/ 881:
/***/ ((module, exports, __webpack_require__) => {

module.exports = __webpack_require__.v(exports, module.id, "ebbf27083d239c1ad5e3");

/***/ })

}]);