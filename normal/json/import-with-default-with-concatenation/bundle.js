/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/*!*******************************************!*\
  !*** ./json/import-with-default/index.js ***!
  \*******************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 8:0-23:3 */
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _data_a_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/a.json */ 2);
/* harmony import */ var _data_b_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/b.json */ 3);
/* harmony import */ var _data_c_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/c.json */ 4);
/* harmony import */ var _data_d_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/d.json */ 5);
/* harmony import */ var _data_e_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/e.json */ 6);
/* harmony import */ var _data_f_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/f.json */ 7);







it("should be possible to import json data", function() {
	expect({a: _data_a_json__WEBPACK_IMPORTED_MODULE_0__}).toEqual({a: null});
	expect(_data_b_json__WEBPACK_IMPORTED_MODULE_1__).toBe(123);
	expect(_data_c_json__WEBPACK_IMPORTED_MODULE_2__).toEqual([1, 2, 3, 4]);
	expect(_data_d_json__WEBPACK_IMPORTED_MODULE_3__).toEqual({});
	expect(_data_e_json__WEBPACK_IMPORTED_MODULE_4__).toEqual({
		aa: 1,
		bb: 2,
		"1": "x"
	});
	expect(_data_f_json__WEBPACK_IMPORTED_MODULE_5__).toEqual({
		named: "named",
		"default": "default",
		__esModule: true
	});
});


/***/ }),
/* 2 */
/*!**************************!*\
  !*** ./json/data/a.json ***!
  \**************************/
/*! default exports */
/*! exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = null;

/***/ }),
/* 3 */
/*!**************************!*\
  !*** ./json/data/b.json ***!
  \**************************/
/*! default exports */
/*! exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = 123;

/***/ }),
/* 4 */
/*!**************************!*\
  !*** ./json/data/c.json ***!
  \**************************/
/*! default exports */
/*! export 0 [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export 1 [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export 2 [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export 3 [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = [1,2,3,4];

/***/ }),
/* 5 */
/*!**************************!*\
  !*** ./json/data/d.json ***!
  \**************************/
/*! default exports */
/*! exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = {};

/***/ }),
/* 6 */
/*!**************************!*\
  !*** ./json/data/e.json ***!
  \**************************/
/*! default exports */
/*! export 1 [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export aa [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export bb [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = JSON.parse('{"1":"x","bb":2,"aa":1}');

/***/ }),
/* 7 */
/*!**************************!*\
  !*** ./json/data/f.json ***!
  \**************************/
/*! default exports */
/*! export __esModule [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export default [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export named [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = JSON.parse('{"named":"named","default":"default","__esModule":true}');

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************************************************!*\
  !*** ./json/import-with-default-with-concatenation/index.js ***!
  \**************************************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__ */
/*! Dependency (harmony side effect evaluation) with side effects at 1:0-32 */
/* harmony import */ var _import_with_default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../import-with-default */ 1);


})();

/******/ })()
;