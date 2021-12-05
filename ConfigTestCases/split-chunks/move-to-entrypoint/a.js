(() => {
var exports = {};
exports.id = "a";
exports.ids = ["a"];
exports.modules = {

/***/ 727:
/*!*******************!*\
  !*** ./entryA.js ***!
  \*******************/
/***/ (() => {



/***/ }),

/***/ 133:
/*!********************!*\
  !*** ./moduleA.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("This is module a");


/***/ })

};
;

// load runtime
var __webpack_require__ = require("./runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(727));

})();