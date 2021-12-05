export const id = 179;
export const ids = [179];
export const modules = {

/***/ 211:
/*!******************************!*\
  !*** ./index.js + 2 modules ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "a": () => (/* reexport */ a),
  "b": () => (/* binding */ b),
  "Z": () => (/* binding */ index),
  "G": () => (/* reexport */ non_external)
});

;// CONCATENATED MODULE: ./a.js
var a = "a";

;// CONCATENATED MODULE: ./non-external.js
/* harmony default export */ const non_external = ("non-external");

;// CONCATENATED MODULE: ./index.js

/* harmony default export */ const index = ("default-value");
var b = "b";


var index_module = "should not conflict",
	index_define = "should not conflict",
	index_require = "should not conflict",
	index_exports = "should not conflict",
	globalName = "should not conflict";
console.log.bind(console, index_module, index_define, index_require, index_exports, globalName);


/***/ })

};
;

// load runtime
import __webpack_require__ from "./runtime.js";
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
import * as __webpack_chunk_0__ from "./main.js";
__webpack_require__.C(__webpack_chunk_0__);
var __webpack_exports__ = __webpack_exec__(211);
var __webpack_exports__a = __webpack_exports__.a;
var __webpack_exports__b = __webpack_exports__.b;
var __webpack_exports__default = __webpack_exports__.Z;
var __webpack_exports__external = __webpack_exports__.G;
export { __webpack_exports__a as a, __webpack_exports__b as b, __webpack_exports__default as default, __webpack_exports__external as external };
