// runtime can't be in strict mode because a global variable is assign and maybe created.
(self["webpackChunkMyLibraryRuntimeChunk"] = self["webpackChunkMyLibraryRuntimeChunk"] || []).push([[179],{

/***/ 10:
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "answer": () => (/* binding */ answer)
/* harmony export */ });
it("should define global object with property", function () {
	expect(MyLibraryRuntimeChunk["answer"]).toEqual(42);
});

const answer = 42;


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(10));
/******/ MyLibraryRuntimeChunk = __webpack_exports__;
/******/ }
]);