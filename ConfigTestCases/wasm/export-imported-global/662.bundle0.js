"use strict";
exports.id = 662;
exports.ids = [662];
exports.modules = {

/***/ 784:
/*!****************!*\
  !*** ./env.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ n),
/* harmony export */   "m": () => (/* binding */ m)
/* harmony export */ });
const n = 1;
const m = 1.25


/***/ }),

/***/ 662:
/*!*******************!*\
  !*** ./module.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "test": () => (/* reexport safe */ _module_wat__WEBPACK_IMPORTED_MODULE_0__.test),
/* harmony export */   "v": () => (/* reexport safe */ _module_wat__WEBPACK_IMPORTED_MODULE_0__.v),
/* harmony export */   "w": () => (/* reexport safe */ _module_wat__WEBPACK_IMPORTED_MODULE_0__.w),
/* harmony export */   "x": () => (/* reexport safe */ _module_wat__WEBPACK_IMPORTED_MODULE_0__.x)
/* harmony export */ });
/* harmony import */ var _module_wat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module.wat */ 110);



/***/ }),

/***/ 110:
/*!********************!*\
  !*** ./module.wat ***!
  \********************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";
// Instantiate WebAssembly module
var wasmExports = __webpack_require__.w[module.id];

// export exports from WebAssembly module
for(var name in wasmExports) if(name) exports[name] = wasmExports[name];
// exec imports from WebAssembly module (for esm order)
/* harmony import */ var m0 = __webpack_require__(/*! ./env.js */ 784);
exports["v"] = m0.n;
if(WebAssembly.Global) exports["v"] = new WebAssembly.Global({ value: "i32" }, exports["v"]);
exports["w"] = m0.n;
if(WebAssembly.Global) exports["w"] = new WebAssembly.Global({ value: "i32" }, exports["w"]);
exports["x"] = m0.m;
if(WebAssembly.Global) exports["x"] = new WebAssembly.Global({ value: "f64" }, exports["x"]);

// exec wasm module
wasmExports[""](m0.n, m0.m)

/***/ })

};
;