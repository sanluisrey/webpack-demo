exports.id = 8;
exports.ids = [8,7];
exports.modules = {

/***/ 8:
/*!*****************************!*\
  !*** ./chunks/runtime/a.js ***!
  \*****************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-21 */
/***/ ((module) => {

module.exports = "a";

/***/ }),

/***/ 9:
/*!*****************************!*\
  !*** ./chunks/runtime/b.js ***!
  \*****************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [maybe used in main (runtime-defined)] -> ./chunks/runtime/a.js */
/*! runtime requirements: module, __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-32 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./a */ 8);

/***/ })

};
;