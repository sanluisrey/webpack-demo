"use strict";
exports.id = 0;
exports.ids = [0];
exports.modules = [
/* 0 */,
/* 1 */
/*!***************************************************!*\
  !*** ./async-modules/top-level-await/reexport.js ***!
  \***************************************************/
/*! namespace exports */
/*! export default [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./async-modules/top-level-await/module.js .default */
/*! export other [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, module, __webpack_require__.a, __webpack_require__.* */
/*! Dependency (harmony side effect evaluation) with side effects at 1:0-35 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _module__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "other": () => (/* binding */ other)
/* harmony export */ });
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module */ 2);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_module__WEBPACK_IMPORTED_MODULE_0__]);
_module__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



const other = _module__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z;

});

/***/ }),
/* 2 */
/*!*************************************************!*\
  !*** ./async-modules/top-level-await/module.js ***!
  \*************************************************/
/*! namespace exports */
/*! export default [provided] [used in main] [renamed to Z] */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__.a, __webpack_require__.d, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-43 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
await new Promise(r => setTimeout(r, 100));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (42);

__webpack_handle_async_dependencies__();
}, 1);

/***/ })
];
;