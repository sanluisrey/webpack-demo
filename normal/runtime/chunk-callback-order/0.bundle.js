exports.id = 0;
exports.ids = [0];
exports.modules = [
/* 0 */,
/* 1 */
/*!***************************************************!*\
  !*** ./runtime/chunk-callback-order/duplicate.js ***!
  \***************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__, __webpack_require__.e, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-3:2 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__.e(/*! require.ensure */ 2).then((function(require) {
	expect(__webpack_require__(/*! ./a */ 3)).toBe("a");
}).bind(null, __webpack_require__))['catch'](__webpack_require__.oe)


/***/ }),
/* 2 */
/*!****************************************************!*\
  !*** ./runtime/chunk-callback-order/duplicate2.js ***!
  \****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__, __webpack_require__.e, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-3:2 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__.e(/*! require.ensure */ 3).then((function(require) {
	expect(__webpack_require__(/*! ./b */ 4)).toBe("a");
}).bind(null, __webpack_require__))['catch'](__webpack_require__.oe)


/***/ })
];
;