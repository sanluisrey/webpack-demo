"use strict";
exports.id = 1;
exports.ids = [1];
exports.modules = {

/***/ 2:
/*!*************************************************!*\
  !*** ./chunks/circular-correctness/module-b.js ***!
  \*************************************************/
/*! namespace exports */
/*! export default [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.e, __webpack_require__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
	return __webpack_require__.e(/*! import() | c */ 2).then(__webpack_require__.bind(__webpack_require__, /*! ./module-c */ 3));
};


/***/ })

};
;