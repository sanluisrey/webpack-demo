"use strict";
(() => {
var exports = {};
exports.id = "b";
exports.ids = ["b"];
exports.modules = {

/***/ 950:
/*!*******************************!*\
  !*** ./entryB.js + 2 modules ***!
  \*******************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = require("fs");
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_namespaceObject);
;// CONCATENATED MODULE: external "path"
const external_path_namespaceObject = require("path");
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_namespaceObject);
;// CONCATENATED MODULE: ./entryB.js



it("should place the module correctly", async () => {
	const { moduleA, moduleB, moduleC } = await Promise.all(/*! import() */[__webpack_require__.e("b"), __webpack_require__.e("a"), __webpack_require__.e("chunk_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./chunk */ 52));
	expect(external_fs_default().readFileSync(external_path_default().resolve(__dirname, "a.js"), "utf-8")).toContain(
		moduleA
	);
	expect(external_fs_default().readFileSync(external_path_default().resolve(__dirname, "b.js"), "utf-8")).toContain(
		moduleB
	);
	expect(
		external_fs_default().readFileSync(external_path_default().resolve(__dirname, "runtime.js"), "utf-8")
	).toContain(moduleC);
});


/***/ }),

/***/ 962:
/*!********************!*\
  !*** ./moduleB.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("This is module b");


/***/ })

};
;

// load runtime
var __webpack_require__ = require("./runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["a"], () => (__webpack_exec__(950)));

})();