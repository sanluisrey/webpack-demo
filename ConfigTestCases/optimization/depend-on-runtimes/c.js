"use strict";
(() => {
var exports = {};
exports.id = "c";
exports.ids = ["c"];
exports.modules = {

/***/ 460:
/*!**************!*\
  !*** ./c.js ***!
  \**************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module */ 662);


it("should have the correct exports", () => {
	expect(_module__WEBPACK_IMPORTED_MODULE_0__.z).toBe("z");
	expect(_module__WEBPACK_IMPORTED_MODULE_0__/* .used */ .A).toEqual({
		w: false,
		v: true,
		x: false,
		y: false,
		z: true
	});

	return __webpack_require__.e(/*! import() */ "b-or-c_js").then(__webpack_require__.bind(__webpack_require__, /*! ./b-or-c */ 395)).then(m => m.default(it));
});


/***/ }),

/***/ 662:
/*!*******************!*\
  !*** ./module.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ v),
/* harmony export */   "z": () => (/* binding */ z),
/* harmony export */   "A": () => (/* binding */ used)
/* harmony export */ });
/* unused harmony exports w, x, y */
const v = "v";
const w = "w";
const x = "x";
const y = "y";
const z = "z";
const used = {
	w: false,
	v: true,
	x: false,
	y: false,
	z: true
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("./runtime-c.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(460));

})();