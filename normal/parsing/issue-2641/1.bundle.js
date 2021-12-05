exports.id = 1;
exports.ids = [1];
exports.modules = {

/***/ 2:
/*!****************************************!*\
  !*** ./parsing/issue-2641/throwing.js ***!
  \****************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__, __webpack_exports__, module */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-3:3 */
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	throw new Error('message');
}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

};
;