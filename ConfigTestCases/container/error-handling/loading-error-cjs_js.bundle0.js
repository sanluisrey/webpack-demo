"use strict";
exports.id = "loading-error-cjs_js";
exports.ids = ["loading-error-cjs_js"];
exports.modules = {

/***/ "./loading-error-cjs.js":
/*!******************************!*\
  !*** ./loading-error-cjs.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "error": () => (/* binding */ error)
/* harmony export */ });
let error;
try {
	__webpack_require__(/*! invalid/module */ "webpack/container/remote/invalid/module");
} catch (err) {
	error = err;
}


/***/ })

};
;