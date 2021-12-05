(() => {
var exports = {};
exports.id = 179;
exports.ids = [179];
exports.modules = {

/***/ 10:
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! x */ 801);
/* harmony import */ var x__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(x__WEBPACK_IMPORTED_MODULE_0__);


it("should work", () => {
	expect((x__WEBPACK_IMPORTED_MODULE_0___default())).toBe(42);
});


/***/ }),

/***/ 801:
/*!*********************************!*\
  !*** ./node_modules/x/index.js ***!
  \*********************************/
/***/ ((module) => {

module.exports = 42;


/***/ })

};
;

// load runtime
var __webpack_require__ = require("./runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(10));

})();