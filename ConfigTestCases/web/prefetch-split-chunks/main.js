"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["main"],{

/***/ 10:
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _public_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public-path */ 150);
/* harmony import */ var _public_path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_public_path__WEBPACK_IMPORTED_MODULE_0__);


it("should prefetch correctly", () => {
	expect(document.head._children).toHaveLength(1);

	// Test prefetch from entry chunk
	const link = document.head._children[0];
	expect(link._type).toBe("link");
	expect(link.rel).toBe("prefetch");
	expect(link.href).toBe("https://example.com/public/path/chunk1.js");

	if (Math.random() < -1) {
		__webpack_require__.e(/*! import() | chunk1 */ "chunk1").then(__webpack_require__.t.bind(__webpack_require__, /*! ./chunk1 */ 22, 23));
	}
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ /* webpack/runtime/startup prefetch */
/******/ (() => {
/******/ 	__webpack_require__.O(0, ["main"], () => {
/******/ 		__webpack_require__.E("chunk1");
/******/ 	}, 5);
/******/ })();
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["separate-public-path_js"], () => (__webpack_exec__(10)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);