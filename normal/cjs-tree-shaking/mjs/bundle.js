/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/*!****************************************!*\
  !*** ./cjs-tree-shaking/mjs/index.mjs ***!
  \****************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 6:0-25:3 */
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _cjs_js_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cjs.js?mjs */ 2);
/* harmony import */ var _cjs_flagged_js_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cjs-flagged.js?mjs */ 3);
/* harmony import */ var _cjs_dynamic_js_mjs_yes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cjs-dynamic.js?mjs-yes */ 4);
/* harmony import */ var _cjs_dynamic_js_mjs_no__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cjs-dynamic.js?mjs-no */ 5);





it("should return correct exports when default is imported", () => {
	expect(_cjs_js_mjs__WEBPACK_IMPORTED_MODULE_0__).toEqual({
		abc: "abc",
		default: "default"
	});
	expect(_cjs_flagged_js_mjs__WEBPACK_IMPORTED_MODULE_1__).toEqual({
		__esModule: true,
		abc: "abc",
		default: "default"
	});
	expect(_cjs_dynamic_js_mjs_yes__WEBPACK_IMPORTED_MODULE_2__).toMatchObject({
		__esModule: true,
		abc: "abc",
		default: "default"
	});
	expect(_cjs_dynamic_js_mjs_no__WEBPACK_IMPORTED_MODULE_3__).toMatchObject({
		abc: "abc",
		default: "default"
	});
});


/***/ }),
/* 2 */
/*!*****************************************!*\
  !*** ./cjs-tree-shaking/mjs/cjs.js?mjs ***!
  \*****************************************/
/*! default exports */
/*! export abc [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export default [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_exports__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-20 */
/***/ ((__unused_webpack_module, exports) => {

exports.abc = "abc";
exports["default"] = "default";


/***/ }),
/* 3 */
/*!*************************************************!*\
  !*** ./cjs-tree-shaking/mjs/cjs-flagged.js?mjs ***!
  \*************************************************/
/*! flagged exports */
/*! export __esModule [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export abc [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export default [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_exports__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-26 */
/***/ ((__unused_webpack_module, exports) => {

exports.__esModule = true;
exports.abc = "abc";
exports["default"] = "default";


/***/ }),
/* 4 */
/*!*****************************************************!*\
  !*** ./cjs-tree-shaking/mjs/cjs-dynamic.js?mjs-yes ***!
  \*****************************************************/
/*! dynamic exports */
/*! export __esModule [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export abc [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export default [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_exports__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-20 */
/***/ ((__unused_webpack_module, exports) => {

var __resourceQuery = "?mjs-yes";
exports.abc = "abc";
exports["default"] = "default";
const flagIt = () => (exports.__esModule = true);

const query = __resourceQuery;
if (query.includes("yes")) flagIt();


/***/ }),
/* 5 */
/*!****************************************************!*\
  !*** ./cjs-tree-shaking/mjs/cjs-dynamic.js?mjs-no ***!
  \****************************************************/
/*! dynamic exports */
/*! export __esModule [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export abc [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export default [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_exports__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-20 */
/***/ ((__unused_webpack_module, exports) => {

var __resourceQuery = "?mjs-no";
exports.abc = "abc";
exports["default"] = "default";
const flagIt = () => (exports.__esModule = true);

const query = __resourceQuery;
if (query.includes("yes")) flagIt();


/***/ }),
/* 6 */
/*!****************************************!*\
  !*** ./cjs-tree-shaking/mjs/cjs.js?js ***!
  \****************************************/
/*! default exports */
/*! export abc [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export default [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_exports__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-20 */
/***/ ((__unused_webpack_module, exports) => {

exports.abc = "abc";
exports["default"] = "default";


/***/ }),
/* 7 */
/*!************************************************!*\
  !*** ./cjs-tree-shaking/mjs/cjs-flagged.js?js ***!
  \************************************************/
/*! flagged exports */
/*! export __esModule [provided] [unused] [renamed to X$] */
/*! export abc [provided] [unused] [renamed to Oi] */
/*! export default [provided] [used in main] [renamed to ZP] */
/*! runtime requirements: __webpack_exports__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-26 */
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;
__webpack_unused_export__ = true;
__webpack_unused_export__ = "abc";
exports.ZP = "default";


/***/ }),
/* 8 */
/*!****************************************************!*\
  !*** ./cjs-tree-shaking/mjs/cjs-dynamic.js?js-yes ***!
  \****************************************************/
/*! dynamic exports */
/*! export __esModule [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export abc [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export default [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_exports__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-20 */
/***/ ((__unused_webpack_module, exports) => {

var __resourceQuery = "?js-yes";
exports.abc = "abc";
exports["default"] = "default";
const flagIt = () => (exports.__esModule = true);

const query = __resourceQuery;
if (query.includes("yes")) flagIt();


/***/ }),
/* 9 */
/*!***************************************************!*\
  !*** ./cjs-tree-shaking/mjs/cjs-dynamic.js?js-no ***!
  \***************************************************/
/*! dynamic exports */
/*! export __esModule [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export abc [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export default [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_exports__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-20 */
/***/ ((__unused_webpack_module, exports) => {

var __resourceQuery = "?js-no";
exports.abc = "abc";
exports["default"] = "default";
const flagIt = () => (exports.__esModule = true);

const query = __resourceQuery;
if (query.includes("yes")) flagIt();


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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***************************************!*\
  !*** ./cjs-tree-shaking/mjs/index.js ***!
  \***************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 8:0-19:3 */
/* harmony import */ var _index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.mjs */ 1);
/* harmony import */ var _cjs_js_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cjs.js?js */ 6);
/* harmony import */ var _cjs_flagged_js_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cjs-flagged.js?js */ 7);
/* harmony import */ var _cjs_dynamic_js_js_yes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cjs-dynamic.js?js-yes */ 8);
/* harmony import */ var _cjs_dynamic_js_js_yes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_cjs_dynamic_js_js_yes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _cjs_dynamic_js_js_no__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cjs-dynamic.js?js-no */ 9);
/* harmony import */ var _cjs_dynamic_js_js_no__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_cjs_dynamic_js_js_no__WEBPACK_IMPORTED_MODULE_4__);







it("should return correct exports when default is imported", () => {
	expect(_cjs_js_js__WEBPACK_IMPORTED_MODULE_1__).toEqual({
		abc: "abc",
		default: "default"
	});
	expect(_cjs_flagged_js_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP).toEqual("default");
	expect((_cjs_dynamic_js_js_yes__WEBPACK_IMPORTED_MODULE_3___default())).toEqual("default");
	expect((_cjs_dynamic_js_js_no__WEBPACK_IMPORTED_MODULE_4___default())).toMatchObject({
		abc: "abc",
		default: "default"
	});
});

})();

/******/ })()
;