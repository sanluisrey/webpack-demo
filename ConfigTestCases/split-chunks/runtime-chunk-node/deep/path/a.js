"use strict";
(() => {
var exports = {};
exports.id = "deep/path/a";
exports.ids = ["deep/path/a"];
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


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../other/path/runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["dep-shared_js_1"], () => (__webpack_exec__(847)));

})();