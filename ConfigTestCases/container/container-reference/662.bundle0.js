"use strict";
exports.id = 662;
exports.ids = [662];
exports.modules = {

/***/ 662:
/*!*******************!*\
  !*** ./module.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "test": () => (/* binding */ test)
/* harmony export */ });
/* harmony import */ var abc_hello_world__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! abc/hello-world */ 273);
/* harmony import */ var abc_hello_world__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(abc_hello_world__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var abc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! abc */ 91);
/* harmony import */ var abc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(abc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var def_hello_world__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! def/hello-world */ 569);
/* harmony import */ var def_hello_world__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(def_hello_world__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var def_hello_other_world__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! def/hello/other/world */ 865);
/* harmony import */ var def_hello_other_world__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(def_hello_other_world__WEBPACK_IMPORTED_MODULE_3__);





function test() {
	expect((abc_hello_world__WEBPACK_IMPORTED_MODULE_0___default())).toBe("abc ./hello-world");
	expect((abc__WEBPACK_IMPORTED_MODULE_1___default())).toBe("abc .");
	expect((def_hello_world__WEBPACK_IMPORTED_MODULE_2___default())).toBe("def");
	expect((def_hello_other_world__WEBPACK_IMPORTED_MODULE_3___default())).toBe("def");
	expect(def_hello_world__WEBPACK_IMPORTED_MODULE_2__.module).toBe("./hello-world");
	expect(def_hello_other_world__WEBPACK_IMPORTED_MODULE_3__.module).toBe("./hello/other/world");
}


/***/ })

};
;