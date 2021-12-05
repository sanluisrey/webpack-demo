/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/*!***********************************************!*\
  !*** ./parsing/harmony-spec/order-tracker.js ***!
  \***********************************************/
/*! namespace exports */
/*! export getLog [provided] [used in main] [renamed to B] */
/*! export log [provided] [used in main] [renamed to c] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ log),
/* harmony export */   "B": () => (/* binding */ getLog)
/* harmony export */ });
var data = [];
function log(x) {
	data.push(x);
};
function getLog() {
	return data;
};


/***/ }),
/* 1 */
/*!************************************************!*\
  !*** ./parsing/harmony-spec/export-cycle-a.js ***!
  \************************************************/
/*! namespace exports */
/*! export default [provided] [used in main] [renamed to Z] */
/*! export fun [provided] [used in main] [renamed to I] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Statement (ExportDefaultDeclaration) with side effects in source code at 7:0-25 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "I": () => (/* binding */ fun)
/* harmony export */ });
/* harmony import */ var _export_cycle_b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./export-cycle-b */ 8);
function fun() {
	return true;
};



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_export_cycle_b__WEBPACK_IMPORTED_MODULE_0__/* .callFun */ .W)());




/***/ }),
/* 2 */
/*!********************************************!*\
  !*** ./parsing/harmony-spec/self-cycle.js ***!
  \********************************************/
/*! namespace exports */
/*! export a [provided] [used in main] [could be renamed] */
/*! export data [provided] [used in main] [renamed to Q] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 5:0-13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ a),
/* harmony export */   "Q": () => (/* binding */ data)
/* harmony export */ });
/* harmony import */ var _self_cycle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./self-cycle */ 2);


var data = [];

data.push(_self_cycle__WEBPACK_IMPORTED_MODULE_0__.a);
var a = 1;
data.push(_self_cycle__WEBPACK_IMPORTED_MODULE_0__.a);
a = 2;
data.push(_self_cycle__WEBPACK_IMPORTED_MODULE_0__.a);



/***/ }),
/* 3 */,
/* 4 */
/*!******************************************!*\
  !*** ./parsing/harmony-spec/live-es5.js ***!
  \******************************************/
/*! flagged exports */
/*! export __esModule [provided] [unused] [renamed to X$] */
/*! export add [provided] [used in main] [renamed to IH] */
/*! export value [provided] [used in main] [renamed to S3] */
/*! runtime requirements: __webpack_exports__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-26 */
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;
__webpack_unused_export__ = true;
exports.S3 = 0;
exports.IH = function add(x) {
	exports.S3 += x;
};


/***/ }),
/* 5 */
/*!*****************************************!*\
  !*** ./parsing/harmony-spec/order-c.js ***!
  \*****************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 3:0-9 */
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _order_tracker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-tracker */ 0);
/* harmony import */ var _order_a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-a */ 6);
/* harmony import */ var _order_b__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order-b */ 7);


(0,_order_tracker__WEBPACK_IMPORTED_MODULE_1__/* .log */ .c)("c");



/***/ }),
/* 6 */
/*!*****************************************!*\
  !*** ./parsing/harmony-spec/order-a.js ***!
  \*****************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 2:0-9 */
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _order_tracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-tracker */ 0);

(0,_order_tracker__WEBPACK_IMPORTED_MODULE_0__/* .log */ .c)("a");


/***/ }),
/* 7 */
/*!*****************************************!*\
  !*** ./parsing/harmony-spec/order-b.js ***!
  \*****************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 2:0-9 */
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _order_tracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-tracker */ 0);

(0,_order_tracker__WEBPACK_IMPORTED_MODULE_0__/* .log */ .c)("b");


/***/ }),
/* 8 */
/*!************************************************!*\
  !*** ./parsing/harmony-spec/export-cycle-b.js ***!
  \************************************************/
/*! namespace exports */
/*! export callFun [provided] [used in main] [renamed to W] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Dependency (harmony side effect evaluation) with side effects at 1:0-39 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ callFun)
/* harmony export */ });
/* harmony import */ var _export_cycle_a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./export-cycle-a */ 1);


function callFun() {
	return (0,_export_cycle_a__WEBPACK_IMPORTED_MODULE_0__/* .fun */ .I)();
}


/***/ }),
/* 9 */
/*!**************************************!*\
  !*** ./parsing/harmony-spec/live.js ***!
  \**************************************/
/*! namespace exports */
/*! export add [provided] [used in main] [renamed to I] */
/*! export value [provided] [used in main] [renamed to S] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ value),
/* harmony export */   "I": () => (/* binding */ add)
/* harmony export */ });
var value = 0;
function add(x) {
	value += x;
};


/***/ }),
/* 10 */
/*!**************************************!*\
  !*** ./parsing/harmony-spec/eval.js ***!
  \**************************************/
/*! namespace exports */
/*! export evalInModule [provided] [used in main] [renamed to _] */
/*! export value [provided] [used in main] [renamed to S] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ value),
/* harmony export */   "_": () => (/* binding */ evalInModule)
/* harmony export */ });
var value = 0;
function evalInModule(x) {
	eval(x);
};


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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***************************************!*\
  !*** ./parsing/harmony-spec/index.js ***!
  \***************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 8:0-12:3 */
/* harmony import */ var _live__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./live */ 9);
/* harmony import */ var _live_es5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./live-es5 */ 4);
/* harmony import */ var _order_tracker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order-tracker */ 0);
/* harmony import */ var _order_c__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-c */ 5);
/* harmony import */ var _export_cycle_a__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./export-cycle-a */ 1);
/* harmony import */ var _self_cycle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./self-cycle */ 2);
/* harmony import */ var _eval__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./eval */ 10);







it("should establish live binding of values", function() {
	expect(_live__WEBPACK_IMPORTED_MODULE_4__/* .value */ .S).toBe(0);
	(0,_live__WEBPACK_IMPORTED_MODULE_4__/* .add */ .I)(2);
	expect(_live__WEBPACK_IMPORTED_MODULE_4__/* .value */ .S).toBe(2);
});

it("should establish live binding of values with transpiled es5 module", function() {
	expect(_live_es5__WEBPACK_IMPORTED_MODULE_0__/* .value */ .S3).toBe(0);
	(0,_live_es5__WEBPACK_IMPORTED_MODULE_0__/* .add */ .IH)(5);
	expect(_live_es5__WEBPACK_IMPORTED_MODULE_0__/* .value */ .S3).toBe(5);
});

it("should allow to use eval with exports", function() {
	expect(_eval__WEBPACK_IMPORTED_MODULE_5__/* .value */ .S).toBe(0);
	(0,_eval__WEBPACK_IMPORTED_MODULE_5__/* .evalInModule */ ._)("value = 5");
	expect(_eval__WEBPACK_IMPORTED_MODULE_5__/* .value */ .S).toBe(5);
});

it("should execute modules in the correct order", function() {
	expect((0,_order_tracker__WEBPACK_IMPORTED_MODULE_6__/* .getLog */ .B)()).toEqual(["a", "b", "c"]);
});

it("should bind exports before the module executes", function() {
	expect(_export_cycle_a__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z).toBe(true);
});

it("should allow to import live variables from itself", function() {
	expect(_self_cycle__WEBPACK_IMPORTED_MODULE_3__/* .data */ .Q).toEqual([undefined, 1, 2]);
});



})();

/******/ })()
;