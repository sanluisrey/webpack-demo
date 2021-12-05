"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[966,128,459,417,28],{

/***/ 417:
/*!******************!*\
  !*** ./async.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "nested": () => (/* binding */ nested)
/* harmony export */ });
// This is the async chunk
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (42);
const nested = () => __webpack_require__.e(/*! import() */ 28).then(__webpack_require__.bind(__webpack_require__, /*! ./nested */ 28));


/***/ }),

/***/ 138:
/*!**************************!*\
  !*** ./b.js + 1 modules ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = require("fs");
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_namespaceObject);
;// CONCATENATED MODULE: ./b.js


it("should include all async imports in the main chunk", async () => {
	expect((await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./async */ 417))).default).toEqual(42);
	expect((await (await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./async */ 417))).nested()).default).toEqual(43);
	expect(external_fs_default().readFileSync(__filename, "utf-8")).toContain(
		"This is the async chunk"
	);
	expect(external_fs_default().readFileSync(__filename, "utf-8")).toContain(
		"This is the nested async chunk"
	);
});


/***/ }),

/***/ 28:
/*!*******************!*\
  !*** ./nested.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// This is the nested async chunk
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (43);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(138));
/******/ }
]);