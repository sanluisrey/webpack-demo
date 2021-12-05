"use strict";
exports.id = "a_js";
exports.ids = ["a_js","deep/path/a","dep-shared_js_1"];
exports.modules = {

/***/ 847:
/*!**************!*\
  !*** ./a.js ***!
  \**************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared?1 */ 305);


it("should share the instance with the other entry point", () => {
	expect(_shared_1__WEBPACK_IMPORTED_MODULE_0__/* .value */ .S).toBe(42);
});

it("should be able to load the shared instance on demand", () =>
	__webpack_require__.e(/*! import() | shared */ "shared").then(__webpack_require__.bind(__webpack_require__, /*! ./shared?2 */ 991)).then(({ value }) => {
		expect(value).toBe(24);
	}));


/***/ }),

/***/ 305:
/*!*********************!*\
  !*** ./shared.js?1 ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ value),
/* harmony export */   "s": () => (/* binding */ setValue)
/* harmony export */ });
let value = 0;
function setValue(v) {
	value = v;
}


/***/ })

};
;