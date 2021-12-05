"use strict";
exports.id = "a-or-b_js";
exports.ids = ["a-or-b_js"];
exports.modules = {

/***/ 359:
/*!*******************!*\
  !*** ./a-or-b.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module */ 662);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (it =>
	it("should have the correct exports", () => {
		expect(_module__WEBPACK_IMPORTED_MODULE_0__.w).toBe("w");
		if (__webpack_require__.j === "a") {
			expect(_module__WEBPACK_IMPORTED_MODULE_0__/* .used */ .A).toEqual({
				w: true,
				v: false,
				x: true,
				y: false,
				z: false
			});
		} else if (__webpack_require__.j === "b") {
			expect(_module__WEBPACK_IMPORTED_MODULE_0__/* .used */ .A).toEqual({
				w: true,
				v: true,
				x: false,
				y: true,
				z: false
			});
		} else {
			expect(__webpack_require__.j).toBe("a or b");
		}
	}));


/***/ })

};
;