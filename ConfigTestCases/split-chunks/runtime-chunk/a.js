(self["webpackChunk"] = self["webpackChunk"] || []).push([["a"],{

/***/ 847:
/*!**************!*\
  !*** ./a.js ***!
  \**************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

it("should be able to load the split chunk on demand", () => {
	const promise = __webpack_require__.e(/*! import() | shared */ "dep-shared_js").then(__webpack_require__.t.bind(__webpack_require__, /*! ./shared */ 52, 23));

	const script = document.head._children[0];
	expect(script.src).toBe("https://test.cases/path/dep-shared_js.js");

	require("./dep-shared_js.js");

	return promise;
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(847));
/******/ }
]);