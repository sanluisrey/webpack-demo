"use strict";
exports.id = 1;
exports.ids = [1];
exports.modules = [
/* 0 */,
/* 1 */,
/* 2 */
/*!*************************************************************!*\
  !*** ./scope-hoisting/circular-root-export/external-ref.js ***!
  \*************************************************************/
/*! namespace exports */
/*! exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/*! Dependency (harmony side effect evaluation) with side effects at 1:0-20 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _external__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./external */ 3);



/***/ }),
/* 3 */
/*!*********************************************************!*\
  !*** ./scope-hoisting/circular-root-export/external.js ***!
  \*********************************************************/
/*! namespace exports */
/*! export test [provided] [used in main] [renamed to B] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 3:0-22 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ test)
/* harmony export */ });
/* harmony import */ var _root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./root */ 4);


expect((0,_root__WEBPACK_IMPORTED_MODULE_0__.a)()).toBe("a");
if (process.env.NODE_ENV === "production") {
	// These two cases only work correctly when scope hoisted
	expect((0,_root__WEBPACK_IMPORTED_MODULE_0__.b)()).toBe("b");
	expect(Object(_root__WEBPACK_IMPORTED_MODULE_0__.c).b()).toBe("b");
}
expect(() => _root__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z).toThrow();

function test() {
	expect(_root__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z).toBe(_root__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);
}


/***/ }),
/* 4 */
/*!*****************************************************!*\
  !*** ./scope-hoisting/circular-root-export/root.js ***!
  \*****************************************************/
/*! namespace exports */
/*! export a [provided] [used in main] [could be renamed] */
/*! export aa [provided] [unused] [could be renamed] */
/*! export b [provided] [used in main] [could be renamed] -> ./scope-hoisting/circular-root-export/module.js .b */
/*! export bb [provided] [unused] [could be renamed] -> ./scope-hoisting/circular-root-export/module.js .bb */
/*! export c [provided] [used in main] [could be renamed] -> ./scope-hoisting/circular-root-export/module.js */
/*!   export b [provided] [used in main] [usage prevents renaming] */
/*!   export bb [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*!   other exports [not provided] [maybe used in main (runtime-defined)] */
/*! export cc [provided] [unused] [could be renamed] -> ./scope-hoisting/circular-root-export/module.js */
/*!   ... (3 already listed exports) */
/*! export default [provided] [used in main] [renamed to Z] */
/*! export test [provided] [used in main] [renamed to B] -> ./scope-hoisting/circular-root-export/external.js .test */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Dependency (harmony side effect evaluation) with side effects at 1:0-34 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* reexport safe */ _external__WEBPACK_IMPORTED_MODULE_0__.B),
/* harmony export */   "c": () => (/* reexport module object */ _module__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "b": () => (/* reexport safe */ _module__WEBPACK_IMPORTED_MODULE_1__.b),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "a": () => (/* binding */ a)
/* harmony export */ });
/* unused harmony export aa */
/* harmony import */ var _external__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./external */ 3);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module */ 5);






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("d");
function a() {
	return "a";
}
function aa() {
	return "aa";
}


/***/ }),
/* 5 */
/*!*******************************************************!*\
  !*** ./scope-hoisting/circular-root-export/module.js ***!
  \*******************************************************/
/*! namespace exports */
/*! export b [provided] [used in main] [usage prevents renaming] */
/*! export bb [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ b),
/* harmony export */   "bb": () => (/* binding */ bb)
/* harmony export */ });
function b() {
	return "b";
}
function bb() {
	return "bb";
}


/***/ })
];
;