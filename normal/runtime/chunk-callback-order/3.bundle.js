exports.id = 3;
exports.ids = [3,2];
exports.modules = [
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/*!*******************************************!*\
  !*** ./runtime/chunk-callback-order/a.js ***!
  \*******************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-21 */
/***/ ((module) => {

module.exports = "a";

/***/ }),
/* 4 */
/*!*******************************************!*\
  !*** ./runtime/chunk-callback-order/b.js ***!
  \*******************************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [maybe used in main (runtime-defined)] -> ./runtime/chunk-callback-order/a.js */
/*! runtime requirements: module, __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-32 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./a */ 3);

/***/ })
];
;