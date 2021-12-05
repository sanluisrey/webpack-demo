/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/*!***************************************************!*\
  !*** ./async-modules/micro-ticks-parents/tick.js ***!
  \***************************************************/
/*! namespace exports */
/*! export currentTick [provided] [unused] [renamed to Li] */
/*! export entries [provided] [unused] [renamed to qh] */
/*! export report [provided] [used in main] [renamed to Hj] */
/*! export start [provided] [used in main] [renamed to BL] */
/*! export stop [provided] [used in main] [renamed to sT] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hj": () => (/* binding */ report),
/* harmony export */   "BL": () => (/* binding */ start),
/* harmony export */   "sT": () => (/* binding */ stop)
/* harmony export */ });
/* unused harmony exports currentTick, entries */
let currentTick = 0;
const report = name => {
	entries.push(`${name} ${currentTick}`);
};
let entries = [];
let running = false;
const start = async () => {
	entries = [];
	running = true;
	currentTick = 0;
	while (running) {
		await 0;
		currentTick++;
	}
};
const stop = () => {
	running = false;
	return entries;
};


/***/ }),
/* 1 */
/*!***********************************************************!*\
  !*** ./async-modules/micro-ticks-parents/case-a/async.js ***!
  \***********************************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__, module, __webpack_require__.a, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 3:0-23 */
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony import */ var _tick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tick */ 0);


(0,_tick__WEBPACK_IMPORTED_MODULE_0__/* .report */ .Hj)("async before");
await 0;
(0,_tick__WEBPACK_IMPORTED_MODULE_0__/* .report */ .Hj)("async middle");
await 0;
(0,_tick__WEBPACK_IMPORTED_MODULE_0__/* .report */ .Hj)("async after");

__webpack_handle_async_dependencies__();
}, 1);

/***/ }),
/* 2 */
/*!***********************************************************!*\
  !*** ./async-modules/micro-ticks-parents/case-b/async.js ***!
  \***********************************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__, module, __webpack_require__.a, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 3:0-23 */
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony import */ var _tick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tick */ 0);


(0,_tick__WEBPACK_IMPORTED_MODULE_0__/* .report */ .Hj)("async before");
await 0;
(0,_tick__WEBPACK_IMPORTED_MODULE_0__/* .report */ .Hj)("async middle");
await 0;
(0,_tick__WEBPACK_IMPORTED_MODULE_0__/* .report */ .Hj)("async after");

__webpack_handle_async_dependencies__();
}, 1);

/***/ }),
/* 3 */
/*!*******************************************************!*\
  !*** ./async-modules/micro-ticks-parents/case-b/c.js ***!
  \*******************************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__, module, __webpack_require__.a, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 4:0-12 */
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony import */ var _tick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tick */ 0);
/* harmony import */ var _async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./async */ 2);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_async__WEBPACK_IMPORTED_MODULE_0__]);
_async__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



(0,_tick__WEBPACK_IMPORTED_MODULE_1__/* .report */ .Hj)("c");

});

/***/ }),
/* 4 */
/*!*******************************************************!*\
  !*** ./async-modules/micro-ticks-parents/case-c/a.js ***!
  \*******************************************************/
/*! namespace exports */
/*! exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, module, __webpack_require__.a, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 5:0-19 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tick */ 0);
/* harmony import */ var _b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./b */ 21);
/* harmony import */ var _a__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./a */ 4);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_a__WEBPACK_IMPORTED_MODULE_1__]);
_a__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];




(0,_tick__WEBPACK_IMPORTED_MODULE_2__/* .report */ .Hj)("a before");
await 0;
(0,_tick__WEBPACK_IMPORTED_MODULE_2__/* .report */ .Hj)("a after");

__webpack_handle_async_dependencies__();
}, 1);

/***/ }),
/* 5 */
/*!*******************************************************!*\
  !*** ./async-modules/micro-ticks-parents/case-d/a.js ***!
  \*******************************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__, module, __webpack_require__.a, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 4:0-19 */
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony import */ var _tick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tick */ 0);
/* harmony import */ var _b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./b */ 6);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_b__WEBPACK_IMPORTED_MODULE_0__]);
_b__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



(0,_tick__WEBPACK_IMPORTED_MODULE_1__/* .report */ .Hj)("a before");
await 0;
(0,_tick__WEBPACK_IMPORTED_MODULE_1__/* .report */ .Hj)("a after");

__webpack_handle_async_dependencies__();
}, 1);

/***/ }),
/* 6 */
/*!*******************************************************!*\
  !*** ./async-modules/micro-ticks-parents/case-d/b.js ***!
  \*******************************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__, module, __webpack_require__.a, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 4:0-19 */
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony import */ var _tick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tick */ 0);
/* harmony import */ var _c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./c */ 24);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_c__WEBPACK_IMPORTED_MODULE_0__]);
_c__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



(0,_tick__WEBPACK_IMPORTED_MODULE_1__/* .report */ .Hj)("b before");
await 0;
(0,_tick__WEBPACK_IMPORTED_MODULE_1__/* .report */ .Hj)("b after");

__webpack_handle_async_dependencies__();
}, 1);

/***/ }),
/* 7 */
/*!*******************************************************!*\
  !*** ./async-modules/micro-ticks-parents/case-e/a.js ***!
  \*******************************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__, module, __webpack_require__.a, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 4:0-12 */
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony import */ var _tick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tick */ 0);
/* harmony import */ var _async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./async */ 8);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_async__WEBPACK_IMPORTED_MODULE_0__]);
_async__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



(0,_tick__WEBPACK_IMPORTED_MODULE_1__/* .report */ .Hj)("a");

});

/***/ }),
/* 8 */
/*!***********************************************************!*\
  !*** ./async-modules/micro-ticks-parents/case-e/async.js ***!
  \***********************************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__, module, __webpack_require__.a, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 3:0-23 */
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony import */ var _tick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tick */ 0);


(0,_tick__WEBPACK_IMPORTED_MODULE_0__/* .report */ .Hj)("async before");
await 0;
(0,_tick__WEBPACK_IMPORTED_MODULE_0__/* .report */ .Hj)("async middle");
await 0;
(0,_tick__WEBPACK_IMPORTED_MODULE_0__/* .report */ .Hj)("async after");

__webpack_handle_async_dependencies__();
}, 1);

/***/ }),
/* 9 */,
/* 10 */
/*!*******************************************************!*\
  !*** ./async-modules/micro-ticks-parents/case-a/f.js ***!
  \*******************************************************/
/*! namespace exports */
/*! exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, module, __webpack_require__.a, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 5:0-12 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tick */ 0);
/* harmony import */ var _e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./e */ 11);
/* harmony import */ var _async2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./async2 */ 12);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_async2__WEBPACK_IMPORTED_MODULE_1__]);
_async2__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];




(0,_tick__WEBPACK_IMPORTED_MODULE_2__/* .report */ .Hj)("f");

});

/***/ }),
/* 11 */
/*!*******************************************************!*\
  !*** ./async-modules/micro-ticks-parents/case-a/e.js ***!
  \*******************************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 3:0-12 */
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _tick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tick */ 0);


(0,_tick__WEBPACK_IMPORTED_MODULE_0__/* .report */ .Hj)("e");


/***/ }),
/* 12 */
/*!************************************************************!*\
  !*** ./async-modules/micro-ticks-parents/case-a/async2.js ***!
  \************************************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__, module, __webpack_require__.a, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 4:0-24 */
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony import */ var _tick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tick */ 0);
/* harmony import */ var _d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./d */ 13);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_d__WEBPACK_IMPORTED_MODULE_0__]);
_d__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



(0,_tick__WEBPACK_IMPORTED_MODULE_1__/* .report */ .Hj)("async2 before");
await 0;
(0,_tick__WEBPACK_IMPORTED_MODULE_1__/* .report */ .Hj)("async2 middle");
await 0;
(0,_tick__WEBPACK_IMPORTED_MODULE_1__/* .report */ .Hj)("async2 after");

__webpack_handle_async_dependencies__();
}, 1);

/***/ }),
/* 13 */
/*!*******************************************************!*\
  !*** ./async-modules/micro-ticks-parents/case-a/d.js ***!
  \*******************************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__, module, __webpack_require__.a, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 5:0-12 */
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony import */ var _tick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tick */ 0);
/* harmony import */ var _c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./c */ 14);
/* harmony import */ var _a__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./a */ 16);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_a__WEBPACK_IMPORTED_MODULE_1__, _c__WEBPACK_IMPORTED_MODULE_0__]);
([_a__WEBPACK_IMPORTED_MODULE_1__, _c__WEBPACK_IMPORTED_MODULE_0__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);




(0,_tick__WEBPACK_IMPORTED_MODULE_2__/* .report */ .Hj)("d");

});

/***/ }),
/* 14 */
/*!*******************************************************!*\
  !*** ./async-modules/micro-ticks-parents/case-a/c.js ***!
  \*******************************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__, module, __webpack_require__.a, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 4:0-12 */
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony import */ var _tick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tick */ 0);
/* harmony import */ var _b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./b */ 15);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_b__WEBPACK_IMPORTED_MODULE_0__]);
_b__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



(0,_tick__WEBPACK_IMPORTED_MODULE_1__/* .report */ .Hj)("c");

});

/***/ }),
/* 15 */
/*!*******************************************************!*\
  !*** ./async-modules/micro-ticks-parents/case-a/b.js ***!
  \*******************************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__, module, __webpack_require__.a, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 4:0-12 */
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony import */ var _tick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tick */ 0);
/* harmony import */ var _async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./async */ 1);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_async__WEBPACK_IMPORTED_MODULE_0__]);
_async__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



(0,_tick__WEBPACK_IMPORTED_MODULE_1__/* .report */ .Hj)("b");

});

/***/ }),
/* 16 */
/*!*******************************************************!*\
  !*** ./async-modules/micro-ticks-parents/case-a/a.js ***!
  \*******************************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__, module, __webpack_require__.a, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 4:0-12 */
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony import */ var _tick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tick */ 0);
/* harmony import */ var _async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./async */ 1);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_async__WEBPACK_IMPORTED_MODULE_0__]);
_async__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



(0,_tick__WEBPACK_IMPORTED_MODULE_1__/* .report */ .Hj)("a");

});

/***/ }),
/* 17 */
/*!*******************************************************!*\
  !*** ./async-modules/micro-ticks-parents/case-b/e.js ***!
  \*******************************************************/
/*! namespace exports */
/*! exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, module, __webpack_require__.a, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 5:0-23 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tick */ 0);
/* harmony import */ var _a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a */ 18);
/* harmony import */ var _d__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./d */ 20);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_d__WEBPACK_IMPORTED_MODULE_1__, _a__WEBPACK_IMPORTED_MODULE_0__]);
([_d__WEBPACK_IMPORTED_MODULE_1__, _a__WEBPACK_IMPORTED_MODULE_0__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);




(0,_tick__WEBPACK_IMPORTED_MODULE_2__/* .report */ .Hj)("async before");
await 0;
(0,_tick__WEBPACK_IMPORTED_MODULE_2__/* .report */ .Hj)("async middle");
await 0;
(0,_tick__WEBPACK_IMPORTED_MODULE_2__/* .report */ .Hj)("async after");

__webpack_handle_async_dependencies__();
}, 1);

/***/ }),
/* 18 */
/*!*******************************************************!*\
  !*** ./async-modules/micro-ticks-parents/case-b/a.js ***!
  \*******************************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__, module, __webpack_require__.a, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 5:0-12 */
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony import */ var _tick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tick */ 0);
/* harmony import */ var _async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./async */ 2);
/* harmony import */ var _b__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./b */ 19);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_b__WEBPACK_IMPORTED_MODULE_1__, _async__WEBPACK_IMPORTED_MODULE_0__]);
([_b__WEBPACK_IMPORTED_MODULE_1__, _async__WEBPACK_IMPORTED_MODULE_0__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);




(0,_tick__WEBPACK_IMPORTED_MODULE_2__/* .report */ .Hj)("a");

});

/***/ }),
/* 19 */
/*!*******************************************************!*\
  !*** ./async-modules/micro-ticks-parents/case-b/b.js ***!
  \*******************************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__, module, __webpack_require__.a, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 4:0-12 */
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony import */ var _tick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tick */ 0);
/* harmony import */ var _c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./c */ 3);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_c__WEBPACK_IMPORTED_MODULE_0__]);
_c__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



(0,_tick__WEBPACK_IMPORTED_MODULE_1__/* .report */ .Hj)("b");

});

/***/ }),
/* 20 */
/*!*******************************************************!*\
  !*** ./async-modules/micro-ticks-parents/case-b/d.js ***!
  \*******************************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__, module, __webpack_require__.a, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 4:0-12 */
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony import */ var _tick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tick */ 0);
/* harmony import */ var _c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./c */ 3);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_c__WEBPACK_IMPORTED_MODULE_0__]);
_c__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



(0,_tick__WEBPACK_IMPORTED_MODULE_1__/* .report */ .Hj)("d");

});

/***/ }),
/* 21 */
/*!*******************************************************!*\
  !*** ./async-modules/micro-ticks-parents/case-c/b.js ***!
  \*******************************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 3:0-12 */
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _tick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tick */ 0);


(0,_tick__WEBPACK_IMPORTED_MODULE_0__/* .report */ .Hj)("b");


/***/ }),
/* 22 */
/*!***********************************************************!*\
  !*** ./async-modules/micro-ticks-parents/case-d/index.js ***!
  \***********************************************************/
/*! namespace exports */
/*! exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, module, __webpack_require__.a, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 5:0-16 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tick */ 0);
/* harmony import */ var _x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./x */ 23);
/* harmony import */ var _y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./y */ 25);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_y__WEBPACK_IMPORTED_MODULE_1__, _x__WEBPACK_IMPORTED_MODULE_0__]);
([_y__WEBPACK_IMPORTED_MODULE_1__, _x__WEBPACK_IMPORTED_MODULE_0__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);




(0,_tick__WEBPACK_IMPORTED_MODULE_2__/* .report */ .Hj)("index");

});

/***/ }),
/* 23 */
/*!*******************************************************!*\
  !*** ./async-modules/micro-ticks-parents/case-d/x.js ***!
  \*******************************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__, module, __webpack_require__.a, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 4:0-12 */
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony import */ var _tick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tick */ 0);
/* harmony import */ var _a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a */ 5);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_a__WEBPACK_IMPORTED_MODULE_0__]);
_a__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



(0,_tick__WEBPACK_IMPORTED_MODULE_1__/* .report */ .Hj)("x");

});

/***/ }),
/* 24 */
/*!*******************************************************!*\
  !*** ./async-modules/micro-ticks-parents/case-d/c.js ***!
  \*******************************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__, module, __webpack_require__.a, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 4:0-19 */
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony import */ var _tick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tick */ 0);
/* harmony import */ var _a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a */ 5);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_a__WEBPACK_IMPORTED_MODULE_0__]);
_a__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



(0,_tick__WEBPACK_IMPORTED_MODULE_1__/* .report */ .Hj)("c before");
await 0;
(0,_tick__WEBPACK_IMPORTED_MODULE_1__/* .report */ .Hj)("c after");

__webpack_handle_async_dependencies__();
}, 1);

/***/ }),
/* 25 */
/*!*******************************************************!*\
  !*** ./async-modules/micro-ticks-parents/case-d/y.js ***!
  \*******************************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__, module, __webpack_require__.a, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 4:0-12 */
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony import */ var _tick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tick */ 0);
/* harmony import */ var _b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./b */ 6);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_b__WEBPACK_IMPORTED_MODULE_0__]);
_b__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



(0,_tick__WEBPACK_IMPORTED_MODULE_1__/* .report */ .Hj)("y");

});

/***/ }),
/* 26 */
/*!***********************************************************!*\
  !*** ./async-modules/micro-ticks-parents/case-e/index.js ***!
  \***********************************************************/
/*! namespace exports */
/*! exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, module, __webpack_require__.a, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 6:0-16 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tick */ 0);
/* harmony import */ var _a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a */ 7);
/* harmony import */ var _b__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./b */ 27);
/* harmony import */ var _x__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./x */ 28);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_x__WEBPACK_IMPORTED_MODULE_2__, _b__WEBPACK_IMPORTED_MODULE_1__, _a__WEBPACK_IMPORTED_MODULE_0__]);
([_x__WEBPACK_IMPORTED_MODULE_2__, _b__WEBPACK_IMPORTED_MODULE_1__, _a__WEBPACK_IMPORTED_MODULE_0__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);





(0,_tick__WEBPACK_IMPORTED_MODULE_3__/* .report */ .Hj)("index");

});

/***/ }),
/* 27 */
/*!*******************************************************!*\
  !*** ./async-modules/micro-ticks-parents/case-e/b.js ***!
  \*******************************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__, module, __webpack_require__.a, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 4:0-12 */
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony import */ var _tick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tick */ 0);
/* harmony import */ var _async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./async */ 8);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_async__WEBPACK_IMPORTED_MODULE_0__]);
_async__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



(0,_tick__WEBPACK_IMPORTED_MODULE_1__/* .report */ .Hj)("b");

});

/***/ }),
/* 28 */
/*!*******************************************************!*\
  !*** ./async-modules/micro-ticks-parents/case-e/x.js ***!
  \*******************************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__, module, __webpack_require__.a, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 4:0-12 */
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony import */ var _tick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tick */ 0);
/* harmony import */ var _a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a */ 7);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_a__WEBPACK_IMPORTED_MODULE_0__]);
_a__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



(0,_tick__WEBPACK_IMPORTED_MODULE_1__/* .report */ .Hj)("x");

});

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackThen = typeof Symbol === "function" ? Symbol("webpack then") : "__webpack_then__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var completeQueue = (queue) => {
/******/ 			if(queue) {
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var completeFunction = (fn) => (!--fn.r && fn());
/******/ 		var queueFunction = (queue, fn) => (queue ? queue.push(fn) : completeFunction(fn));
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackThen]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						completeQueue(queue);
/******/ 						queue = 0;
/******/ 					});
/******/ 					var obj = {};
/******/ 												obj[webpackThen] = (fn, reject) => (queueFunction(queue, fn), dep['catch'](reject));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 								ret[webpackThen] = (fn) => (completeFunction(fn));
/******/ 								ret[webpackExports] = dep;
/******/ 								return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue = hasAwait && [];
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var isEvaluating = true;
/******/ 			var nested = false;
/******/ 			var whenAll = (deps, onResolve, onReject) => {
/******/ 				if (nested) return;
/******/ 				nested = true;
/******/ 				onResolve.r += deps.length;
/******/ 				deps.map((dep, i) => (dep[webpackThen](onResolve, onReject)));
/******/ 				nested = false;
/******/ 			};
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = () => (resolve(exports), completeQueue(queue), queue = 0);
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackThen] = (fn, rejectFn) => {
/******/ 				if (isEvaluating) { return completeFunction(fn); }
/******/ 				if (currentDeps) whenAll(currentDeps, fn, rejectFn);
/******/ 				queueFunction(queue, fn);
/******/ 				promise['catch'](rejectFn);
/******/ 			};
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				if(!deps) return outerResolve();
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn, result;
/******/ 				var promise = new Promise((resolve, reject) => {
/******/ 					fn = () => (resolve(result = currentDeps.map((d) => (d[webpackExports]))));
/******/ 					fn.r = 0;
/******/ 					whenAll(currentDeps, fn, reject);
/******/ 				});
/******/ 				return fn.r ? promise : result;
/******/ 			}).then(outerResolve, reject);
/******/ 			isEvaluating = false;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************************************!*\
  !*** ./async-modules/micro-ticks-parents/index.js ***!
  \****************************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 3:0-20:3 */
/* harmony import */ var _tick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tick */ 0);


it("should execute async modules in to correct order and without additional ticks (case a)", async () => {
	_tick__WEBPACK_IMPORTED_MODULE_0__/* .start */ .BL();
	await __webpack_require__(/*! ./case-a/f */ 10);
	expect(_tick__WEBPACK_IMPORTED_MODULE_0__/* .stop */ .sT()).toEqual([
		"e 0",
		"async before 0",
		"async middle 1",
		"async after 2",
		"b 3",
		"c 3",
		"a 3",
		"d 3",
		"async2 before 3",
		"async2 middle 4",
		"async2 after 5",
		"f 6"
	]);
});

it("should execute async modules in to correct order and without additional ticks (case b)", async () => {
	_tick__WEBPACK_IMPORTED_MODULE_0__/* .start */ .BL();
	await __webpack_require__(/*! ./case-b/e */ 17);
	expect(_tick__WEBPACK_IMPORTED_MODULE_0__/* .stop */ .sT()).toEqual([
		"async before 0",
		"async middle 1",
		"async after 2",
		"c 3",
		"b 3",
		"a 3",
		"d 3",
		"async before 3",
		"async middle 4",
		"async after 5"
	]);
});

it("should execute async modules in to correct order and without additional ticks (case c)", async () => {
	_tick__WEBPACK_IMPORTED_MODULE_0__/* .start */ .BL();
	await __webpack_require__(/*! ./case-c/a */ 4);
	expect(_tick__WEBPACK_IMPORTED_MODULE_0__/* .stop */ .sT()).toEqual(["b 0", "a before 0", "a after 1"]);
});

it("should execute async modules in to correct order and without additional ticks (case d)", async () => {
	_tick__WEBPACK_IMPORTED_MODULE_0__/* .start */ .BL();
	await __webpack_require__(/*! ./case-d/index */ 22);
	expect(_tick__WEBPACK_IMPORTED_MODULE_0__/* .stop */ .sT()).toEqual([
		"c before 0",
		"c after 1",
		"b before 2",
		"b after 3",
		"a before 4",
		"a after 5",
		"x 6",
		"y 6",
		"index 6"
	]);
});

it("should execute async modules in to correct order and without additional ticks (case e)", async () => {
	_tick__WEBPACK_IMPORTED_MODULE_0__/* .start */ .BL();
	await __webpack_require__(/*! ./case-e/index */ 26);
	expect(_tick__WEBPACK_IMPORTED_MODULE_0__/* .stop */ .sT()).toEqual([
		"async before 0",
		"async middle 1",
		"async after 2",
		"a 3",
		// see https://github.com/tc39/proposal-top-level-await/issues/158
		"b 3",
		"x 3",
		"index 3"
	]);
});

})();

/******/ })()
;