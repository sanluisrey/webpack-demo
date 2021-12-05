"use strict";
(() => {
var exports = {};
exports.id = "b";
exports.ids = ["b","shared"];
exports.modules = {

/***/ 996:
/*!**************!*\
  !*** ./b.js ***!
  \**************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared?1 */ 305);
/* harmony import */ var _shared_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared?2 */ 991);



(0,_shared_1__WEBPACK_IMPORTED_MODULE_0__/* .setValue */ .s)(42);
(0,_shared_2__WEBPACK_IMPORTED_MODULE_1__.setValue)(24);


/***/ }),

/***/ 991:
/*!*********************!*\
  !*** ./shared.js?2 ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "value": () => (/* binding */ value),
/* harmony export */   "setValue": () => (/* binding */ setValue)
/* harmony export */ });
let value = 0;
function setValue(v) {
	value = v;
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("./deep/other/path/runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["dep-shared_js_1"], () => (__webpack_exec__(305), __webpack_exec__(991), __webpack_exec__(996)));
module.exports = __webpack_exports__;

})();