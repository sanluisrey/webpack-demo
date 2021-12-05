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
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _shared_1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared?1 */ 305);


it("should share the instance with the other entry point", () => {
	expect(_shared_1__WEBPACK_IMPORTED_MODULE_0__/* .value */ .S).toBe(42);
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["dep-shared_js_1"], () => (__webpack_exec__(847)));

})();