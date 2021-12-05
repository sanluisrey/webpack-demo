"use strict";
exports.id = 4;
exports.ids = [4];
exports.modules = {

/***/ 2:
/*!************************!*\
  !*** ./inner-dir/b.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dummy": () => (/* reexport safe */ dummy_module__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var dummy_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dummy_module */ 1);


it("should load", () => {
	expect((0,dummy_module__WEBPACK_IMPORTED_MODULE_0__["default"])()).toBe("this is just a dummy function");
	return __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.bind(__webpack_require__, /*! ./some-module */ 4)).then(importedModule => {
		expect(importedModule.dummy()).toBe("this is just a dummy function");
	});
});




/***/ })

};
;