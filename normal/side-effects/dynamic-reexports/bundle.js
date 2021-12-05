/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/*!*************************************************************************!*\
  !*** ./side-effects/dynamic-reexports/dedupe-target-with-side/empty.js ***!
  \*************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {



/***/ }),
/* 1 */
/*!*****************************************************************!*\
  !*** ./side-effects/dynamic-reexports/direct-export/dynamic.js ***!
  \*****************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__ */
/*! CommonJS bailout: exports is used directly at 1:7-14 */
/*! CommonJS bailout: exports is used directly at 2:7-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-28 */
/***/ ((__unused_webpack_module, exports) => {

Object(exports).value = 123;
Object(exports).value2 = 42;


/***/ }),
/* 2 */
/*!******************************************************************!*\
  !*** ./side-effects/dynamic-reexports/checked-export/dynamic.js ***!
  \******************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__ */
/*! CommonJS bailout: exports is used directly at 1:7-14 */
/*! CommonJS bailout: exports is used directly at 2:7-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-28 */
/***/ ((__unused_webpack_module, exports) => {

Object(exports).value = 123;
Object(exports).value2 = 42;


/***/ }),
/* 3 */
/*!**************************************************************!*\
  !*** ./side-effects/dynamic-reexports/multiple-sources/b.js ***!
  \**************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__ */
/*! CommonJS bailout: exports is used directly at 1:7-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-28 */
/***/ ((__unused_webpack_module, exports) => {

Object(exports).value2 = 42;


/***/ }),
/* 4 */
/*!**************************************************************!*\
  !*** ./side-effects/dynamic-reexports/multiple-sources/a.js ***!
  \**************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__ */
/*! CommonJS bailout: exports is used directly at 1:7-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-27 */
/***/ ((__unused_webpack_module, exports) => {

Object(exports).value = 42;


/***/ }),
/* 5 */
/*!************************************************************!*\
  !*** ./side-effects/dynamic-reexports/default-export/b.js ***!
  \************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-20 */
/***/ ((module) => {

module.exports = 42;


/***/ }),
/* 6 */
/*!*****************************************************!*\
  !*** ./side-effects/dynamic-reexports/swapped/b.js ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__ */
/*! CommonJS bailout: exports is used directly at 1:7-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-23 */
/***/ ((__unused_webpack_module, exports) => {

Object(exports).b = 43;


/***/ }),
/* 7 */
/*!*********************************************************************!*\
  !*** ./side-effects/dynamic-reexports/dedupe-target-with-side/a.js ***!
  \*********************************************************************/
/*! namespace exports */
/*! export default [not provided] [unused] [could be renamed] */
/*! export value [maybe provided (runtime-defined)] [used in main] [provision prevents renaming] -> ./side-effects/dynamic-reexports/dedupe-target-with-side/empty.js .value */
/*! export valueUsed [provided] [used in main] [renamed to u] */
/*! other exports [maybe provided (runtime-defined)] [unused] -> ./side-effects/dynamic-reexports/dedupe-target-with-side/empty.js */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.d, __webpack_require__.o, __webpack_require__.* */
/*! Statement (ExportNamedDeclaration) with side effects in source code at 2:0-61 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ valueUsed)
/* harmony export */ });
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./empty */ 0);
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_empty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_empty__WEBPACK_IMPORTED_MODULE_0__, "value")) __webpack_require__.d(__webpack_exports__, { "value": function() { return _empty__WEBPACK_IMPORTED_MODULE_0__.value; } });

const valueUsed = true;


/***/ }),
/* 8 */,
/* 9 */
/*!*************************************************************************!*\
  !*** ./side-effects/dynamic-reexports/dedupe-target-with-side/index.js ***!
  \*************************************************************************/
/*! namespace exports */
/*! export default [not provided] [unused] [could be renamed] */
/*! export value [maybe provided (runtime-defined)] [used in main] [provision prevents renaming] -> ./side-effects/dynamic-reexports/dedupe-target-with-side/empty.js .value */
/*! export valueUsed [maybe provided (runtime-defined)] [used in main] [provision prevents renaming] -> ./side-effects/dynamic-reexports/dedupe-target-with-side/a.js .valueUsed */
/*! other exports [maybe provided (runtime-defined)] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.o, __webpack_require__.* */
/*! Dependency (harmony side effect evaluation) with side effects at 1:0-20 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "valueUsed": () => (/* reexport safe */ _a__WEBPACK_IMPORTED_MODULE_0__.u)
/* harmony export */ });
/* harmony import */ var _a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a */ 7);
/* harmony reexport (checked) */ if(__webpack_require__.o(_a__WEBPACK_IMPORTED_MODULE_0__, "value")) __webpack_require__.d(__webpack_exports__, { "value": function() { return _a__WEBPACK_IMPORTED_MODULE_0__.value; } });
/* harmony import */ var _b__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./b */ 10);
/* harmony reexport (checked) */ if(__webpack_require__.o(_b__WEBPACK_IMPORTED_MODULE_1__, "value")) __webpack_require__.d(__webpack_exports__, { "value": function() { return _b__WEBPACK_IMPORTED_MODULE_1__.value; } });




/***/ }),
/* 10 */
/*!*********************************************************************!*\
  !*** ./side-effects/dynamic-reexports/dedupe-target-with-side/b.js ***!
  \*********************************************************************/
/*! namespace exports */
/*! export default [not provided] [unused] [could be renamed] */
/*! export value [maybe provided (runtime-defined)] [used in main] [provision prevents renaming] -> ./side-effects/dynamic-reexports/dedupe-target-with-side/empty.js .value */
/*! other exports [maybe provided (runtime-defined)] [unused] -> ./side-effects/dynamic-reexports/dedupe-target-with-side/empty.js */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.d, __webpack_require__.o, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./empty */ 0);
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_empty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_empty__WEBPACK_IMPORTED_MODULE_0__, "value")) __webpack_require__.d(__webpack_exports__, { "value": function() { return _empty__WEBPACK_IMPORTED_MODULE_0__.value; } });



/***/ }),
/* 11 */
/*!****************************************************************************!*\
  !*** ./side-effects/dynamic-reexports/reexports-excludes-default/index.js ***!
  \****************************************************************************/
/*! namespace exports */
/*! export default [not provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [maybe provided (runtime-defined)] [maybe used in main (runtime-defined)] -> ./side-effects/dynamic-reexports/reexports-excludes-default/module.js */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module */ 12);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _module__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _module__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);



/***/ }),
/* 12 */
/*!*****************************************************************************!*\
  !*** ./side-effects/dynamic-reexports/reexports-excludes-default/module.js ***!
  \*****************************************************************************/
/*! namespace exports */
/*! export default [not provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export defaultProvided [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export defaultUsed [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [maybe provided (runtime-defined)] [maybe used in main (runtime-defined)] -> ./side-effects/dynamic-reexports/reexports-excludes-default/empty.js */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/*! Statement (ExportNamedDeclaration) with side effects in source code at 2:0-65 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultUsed": () => (/* binding */ defaultUsed),
/* harmony export */   "defaultProvided": () => (/* binding */ defaultProvided)
/* harmony export */ });
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./empty */ 13);
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_empty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _empty__WEBPACK_IMPORTED_MODULE_0__) if(["default","defaultUsed","defaultProvided"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _empty__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);

const defaultUsed = true;
const defaultProvided = false;


/***/ }),
/* 13 */
/*!****************************************************************************!*\
  !*** ./side-effects/dynamic-reexports/reexports-excludes-default/empty.js ***!
  \****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {



/***/ }),
/* 14 */
/*!********************************************************************!*\
  !*** ./side-effects/dynamic-reexports/multiple-sources/module2.js ***!
  \********************************************************************/
/*! namespace exports */
/*! export default [not provided] [unused] [could be renamed] */
/*! export value [maybe provided (runtime-defined)] [used in main] [provision prevents renaming] -> ./side-effects/dynamic-reexports/multiple-sources/b.js .value */
/*! export value2 [maybe provided (runtime-defined)] [used in main] [provision prevents renaming] -> ./side-effects/dynamic-reexports/multiple-sources/b.js .value2 */
/*! other exports [maybe provided (runtime-defined)] [unused] -> ./side-effects/dynamic-reexports/multiple-sources/b.js */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.d, __webpack_require__.o, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./b */ 3);
/* harmony import */ var _b__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_b__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_b__WEBPACK_IMPORTED_MODULE_0__, "value")) __webpack_require__.d(__webpack_exports__, { "value": function() { return _b__WEBPACK_IMPORTED_MODULE_0__.value; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_b__WEBPACK_IMPORTED_MODULE_0__, "value2")) __webpack_require__.d(__webpack_exports__, { "value2": function() { return _b__WEBPACK_IMPORTED_MODULE_0__.value2; } });



/***/ }),
/* 15 */
/*!***********************************************************************!*\
  !*** ./side-effects/dynamic-reexports/dedupe-target-static/module.js ***!
  \***********************************************************************/
/*! namespace exports */
/*! export value [provided] [used in main] [renamed to S] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ value)
/* harmony export */ });
const value = 42;


/***/ }),
/* 16 */
/*!******************************************************************!*\
  !*** ./side-effects/dynamic-reexports/dedupe-target-static/a.js ***!
  \******************************************************************/
/*! namespace exports */
/*! export value [provided] [unused] [renamed to S] -> ./side-effects/dynamic-reexports/dedupe-target-static/module.js .value */
/*! export valueUsed [provided] [used in main] [renamed to u] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Statement (ExportNamedDeclaration) with side effects in source code at 2:0-61 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ valueUsed)
/* harmony export */ });

const valueUsed = false;


/***/ }),
/* 17 */
/*!**************************************************!*\
  !*** ./side-effects/dynamic-reexports/unused.js ***!
  \**************************************************/
/*! namespace exports */
/*! export unprovided [provided] [used in main] [renamed to D_] */
/*! export unused [provided] [used in main] [renamed to rI] */
/*! export value [provided] [unused] [renamed to S3] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Statement (ExportNamedDeclaration) with side effects in source code at 2:0-58 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rI": () => (/* binding */ unused),
/* harmony export */   "D_": () => (/* binding */ unprovided)
/* harmony export */ });
/* unused harmony export value */
const value = 42;
const unused = false;
const unprovided = false;


/***/ }),
/* 18 */
/*!***************************************************************!*\
  !*** ./side-effects/dynamic-reexports/dedupe-target/empty.js ***!
  \***************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {



/***/ }),
/* 19 */
/*!***********************************************************!*\
  !*** ./side-effects/dynamic-reexports/dedupe-target/a.js ***!
  \***********************************************************/
/*! namespace exports */
/*! export default [not provided] [unused] [could be renamed] */
/*! export value [maybe provided (runtime-defined)] [unused] [provision prevents renaming] -> ./side-effects/dynamic-reexports/dedupe-target/empty.js .value */
/*! export valueUsed [provided] [used in main] [renamed to u] */
/*! other exports [maybe provided (runtime-defined)] [unused] -> ./side-effects/dynamic-reexports/dedupe-target/empty.js */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Statement (ExportNamedDeclaration) with side effects in source code at 2:0-61 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ valueUsed)
/* harmony export */ });

const valueUsed = false;


/***/ }),
/* 20 */
/*!************************************************************!*\
  !*** ./side-effects/dynamic-reexports/default-export/a.js ***!
  \************************************************************/
/*! namespace exports */
/*! export default [provided] [used in main] [renamed to Z] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (42);


/***/ }),
/* 21 */
/*!****************************************************************!*\
  !*** ./side-effects/dynamic-reexports/default-export/empty.js ***!
  \****************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {



/***/ }),
/* 22 */
/*!*****************************************************************!*\
  !*** ./side-effects/dynamic-reexports/default-export/json.json ***!
  \*****************************************************************/
/*! default exports */
/*! export default [not provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
module.exports = 42;

/***/ }),
/* 23 */
/*!****************************************************************!*\
  !*** ./side-effects/dynamic-reexports/direct-export/module.js ***!
  \****************************************************************/
/*! namespace exports */
/*! export default [not provided] [unused] [could be renamed] */
/*! export value [provided] [used in main] [renamed to S] */
/*! export value2 [maybe provided (runtime-defined)] [unused] [provision prevents renaming] -> ./side-effects/dynamic-reexports/direct-export/dynamic.js .value2 */
/*! other exports [maybe provided (runtime-defined)] [unused] -> ./side-effects/dynamic-reexports/direct-export/dynamic.js */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ value)
/* harmony export */ });
const value = 42;



/***/ }),
/* 24 */
/*!*****************************************************************!*\
  !*** ./side-effects/dynamic-reexports/checked-export/module.js ***!
  \*****************************************************************/
/*! namespace exports */
/*! export default [not provided] [unused] [could be renamed] */
/*! export value [provided] [used in main] [renamed to S] */
/*! export value2 [maybe provided (runtime-defined)] [unused] [provision prevents renaming] -> ./side-effects/dynamic-reexports/checked-export/dynamic.js .value2 */
/*! other exports [maybe provided (runtime-defined)] [unused] -> ./side-effects/dynamic-reexports/checked-export/dynamic.js */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ value)
/* harmony export */ });
const value = 42;



/***/ }),
/* 25 */
/*!***************************************************************!*\
  !*** ./side-effects/dynamic-reexports/direct-export/index.js ***!
  \***************************************************************/
/*! namespace exports */
/*! export default [not provided] [used in main] [could be renamed] */
/*! export value [maybe provided (runtime-defined)] [unused] [provision prevents renaming] -> ./side-effects/dynamic-reexports/direct-export/module.js .value */
/*! export value2 [maybe provided (runtime-defined)] [unused] [provision prevents renaming] -> ./side-effects/dynamic-reexports/direct-export/dynamic.js .value2 */
/*! other exports [maybe provided (runtime-defined)] [unused] -> ./side-effects/dynamic-reexports/direct-export/module.js */
/*! runtime requirements:  */
/***/ (() => {

"use strict";



/***/ }),
/* 26 */
/*!**************************************************************************!*\
  !*** ./side-effects/dynamic-reexports/dynamic-reexport-default/index.js ***!
  \**************************************************************************/
/*! namespace exports */
/*! export default [provided] [used in main] [renamed to Z] */
/*! other exports [maybe provided (runtime-defined)] [unused] -> ./side-effects/dynamic-reexports/dynamic-reexport-default/dynamic.js */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("static");


/***/ }),
/* 27 */
/*!*******************************************************************!*\
  !*** ./side-effects/dynamic-reexports/multiple-sources/module.js ***!
  \*******************************************************************/
/*! namespace exports */
/*! export default [not provided] [unused] [could be renamed] */
/*! export value [maybe provided (runtime-defined)] [used in main] [provision prevents renaming] */
/*! export value2 [maybe provided (runtime-defined)] [used in main] [provision prevents renaming] */
/*! other exports [maybe provided (runtime-defined)] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.o, __webpack_require__.n, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _module2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module2 */ 14);
/* harmony reexport (checked) */ if(__webpack_require__.o(_module2__WEBPACK_IMPORTED_MODULE_0__, "value")) __webpack_require__.d(__webpack_exports__, { "value": function() { return _module2__WEBPACK_IMPORTED_MODULE_0__.value; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_module2__WEBPACK_IMPORTED_MODULE_0__, "value2")) __webpack_require__.d(__webpack_exports__, { "value2": function() { return _module2__WEBPACK_IMPORTED_MODULE_0__.value2; } });
/* harmony import */ var _a__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./a */ 4);
/* harmony import */ var _a__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_a__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_a__WEBPACK_IMPORTED_MODULE_1__, "value")) __webpack_require__.d(__webpack_exports__, { "value": function() { return _a__WEBPACK_IMPORTED_MODULE_1__.value; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_a__WEBPACK_IMPORTED_MODULE_1__, "value2")) __webpack_require__.d(__webpack_exports__, { "value2": function() { return _a__WEBPACK_IMPORTED_MODULE_1__.value2; } });




/***/ }),
/* 28 */
/*!*****************************************************!*\
  !*** ./side-effects/dynamic-reexports/swapped/a.js ***!
  \*****************************************************/
/*! namespace exports */
/*! export a [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ a)
/* harmony export */ });
const a = 42;


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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************************************!*\
  !*** ./side-effects/dynamic-reexports/index.js ***!
  \*************************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 28:0-31:3 */
/* harmony import */ var _unused__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./unused */ 17);
/* harmony import */ var _dedupe_target_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dedupe-target-static */ 15);
/* harmony import */ var _dedupe_target_static__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dedupe-target-static */ 16);
/* harmony import */ var _dedupe_target_with_side__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dedupe-target-with-side */ 9);
/* harmony import */ var _dedupe_target__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dedupe-target */ 18);
/* harmony import */ var _dedupe_target__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_dedupe_target__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _dedupe_target__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dedupe-target */ 19);
/* harmony import */ var _default_export__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./default-export */ 20);
/* harmony import */ var _default_export__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./default-export */ 5);
/* harmony import */ var _default_export__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_default_export__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _default_export__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./default-export */ 21);
/* harmony import */ var _default_export__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_default_export__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _default_export__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./default-export */ 22);
/* harmony import */ var _direct_export__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./direct-export */ 23);
/* harmony import */ var _direct_export__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./direct-export */ 1);
/* harmony import */ var _direct_export__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_direct_export__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _direct_export__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./direct-export */ 25);
/* harmony import */ var _checked_export__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./checked-export */ 24);
/* harmony import */ var _checked_export__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./checked-export */ 2);
/* harmony import */ var _checked_export__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_checked_export__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _dynamic_reexport_default__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dynamic-reexport-default */ 26);
/* harmony import */ var _multiple_sources__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./multiple-sources */ 27);
/* harmony import */ var _swapped__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./swapped */ 6);
/* harmony import */ var _swapped__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_swapped__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _swapped__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./swapped */ 28);











it("should dedupe static reexport target", () => {
	expect(_dedupe_target_static__WEBPACK_IMPORTED_MODULE_1__/* .value */ .S).toBe(42);
	expect(_dedupe_target_static__WEBPACK_IMPORTED_MODULE_2__/* .valueUsed */ .u).toBe(_unused__WEBPACK_IMPORTED_MODULE_3__/* .unused */ .rI);
});

it("should dedupe dynamic reexport target", () => {
	expect(_dedupe_target__WEBPACK_IMPORTED_MODULE_4__.value).toBe(undefined);
	expect(_dedupe_target__WEBPACK_IMPORTED_MODULE_5__/* .valueUsed */ .u).toBe(_unused__WEBPACK_IMPORTED_MODULE_3__/* .unused */ .rI);
});

it("should not dedupe dynamic reexport target when it has side-effects", () => {
	expect(_dedupe_target_with_side__WEBPACK_IMPORTED_MODULE_0__.value).toBe(undefined);
	expect(_dedupe_target_with_side__WEBPACK_IMPORTED_MODULE_0__.valueUsed).toBe(true);
});

it("should optimize dynamic default reexport", () => {
	expect(_default_export__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z).toBe(42);
	expect((_default_export__WEBPACK_IMPORTED_MODULE_7___default())).toBe(42);
	expect((_default_export__WEBPACK_IMPORTED_MODULE_8___default())).toEqual({});
	expect(_default_export__WEBPACK_IMPORTED_MODULE_9__).toBe(42);
});

it("should handle default export when reexporting", () => {
	const module = Object(__webpack_require__(/*! ./reexports-excludes-default */ 11));
	expect(module.defaultProvided).toBe(_unused__WEBPACK_IMPORTED_MODULE_3__/* .unprovided */ .D_);
});

it("should handle direct export when reexporting", () => {
	expect(_direct_export__WEBPACK_IMPORTED_MODULE_10__/* .value */ .S).toBe(42);
	expect(_direct_export__WEBPACK_IMPORTED_MODULE_11__.value2).toBe(42);
});

it("should handle checked dynamic export when reexporting", () => {
	expect(_checked_export__WEBPACK_IMPORTED_MODULE_12__/* .value */ .S).toBe(42);
	expect(_checked_export__WEBPACK_IMPORTED_MODULE_13__.value2).toBe(42);
});

it("should handle default export correctly", () => {
	expect(_direct_export__WEBPACK_IMPORTED_MODULE_14__["default"]).toBe(undefined);
	expect(_dynamic_reexport_default__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z).toBe("static");
});

it("should handle multiple dynamic sources correctly", () => {
	expect(_multiple_sources__WEBPACK_IMPORTED_MODULE_16__.value).toBe(42);
	expect(_multiple_sources__WEBPACK_IMPORTED_MODULE_16__.value2).toBe(42);
});

it("should handle renamed dynamic reexports", () => {
	expect(_swapped__WEBPACK_IMPORTED_MODULE_17__.b).toBe(43);
	expect(_swapped__WEBPACK_IMPORTED_MODULE_18__.a).toBe(42);
});

})();

/******/ })()
;