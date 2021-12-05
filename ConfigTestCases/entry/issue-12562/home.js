"use strict";
(() => {
var exports = {};
exports.id = 177;
exports.ids = [177];
exports.modules = {

/***/ 91:
/*!*****************!*\
  !*** ./home.js ***!
  \*****************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 2:0-10 */
/*! ModuleConcatenation bailout: Cannot concat with ./log.js: Module ./log.js is referenced from different chunks by these modules: ./test.js */
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log */ 437);

(0,_log__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("Hi");

it("should load", () => {});


/***/ }),

/***/ 437:
/*!****************!*\
  !*** ./log.js ***!
  \****************/
/*! namespace exports */
/*! export default [provided] [used in runtime] [renamed to Z] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(msg) {
	console.log.bind(console, msg);
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("./runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [143], () => (__webpack_exec__(91)));

})();