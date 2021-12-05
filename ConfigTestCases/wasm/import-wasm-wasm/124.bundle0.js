"use strict";
exports.id = 124;
exports.ids = [124];
exports.modules = {

/***/ 124:
/*!******************!*\
  !*** ./wasm.wat ***!
  \******************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";
// Instantiate WebAssembly module
var wasmExports = __webpack_require__.w[module.id];
__webpack_require__.r(exports);
// export exports from WebAssembly module
for(var name in wasmExports) if(name) exports[name] = wasmExports[name];
// exec imports from WebAssembly module (for esm order)
/* harmony import */ var m0 = __webpack_require__(/*! ./wasm2.wat */ 811);


// exec wasm module
wasmExports[""]()

/***/ }),

/***/ 811:
/*!*******************!*\
  !*** ./wasm2.wat ***!
  \*******************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// Instantiate WebAssembly module
var wasmExports = __webpack_require__.w[module.id];

// export exports from WebAssembly module
module.exports = wasmExports;
// exec imports from WebAssembly module (for esm order)


// exec wasm module
wasmExports[""]()

/***/ })

};
;