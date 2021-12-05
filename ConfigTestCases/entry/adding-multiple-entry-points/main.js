(self["webpackChunk"] = self["webpackChunk"] || []).push([[179],{

/***/ 956:
/*!*****************!*\
  !*** ./fail.js ***!
  \*****************/
/***/ (() => {

// no test here, this will fail when only this entry is loaded


/***/ }),

/***/ 244:
/*!***************!*\
  !*** ./ok.js ***!
  \***************/
/***/ (() => {

it("should load correct entry", function() {
	// ok
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(956), __webpack_exec__(244));
/******/ }
]);