"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[484],{

/***/ 832:
/*!******************!*\
  !*** ./page1.js ***!
  \******************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ 691);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 44);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ 62);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var test__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! test */ 513);




it("should be able to load the modules", () => {
	expect((isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default())).toBe("isomorphic-fetch");
	expect((react__WEBPACK_IMPORTED_MODULE_1___default())).toBe("react");
	expect((react_dom__WEBPACK_IMPORTED_MODULE_2___default())).toBe("react-dom");
});

it("should have the correct modules in a lazy chunk", () => {
	const promise = __webpack_require__.e(/*! import() | lazy */ 675).then(__webpack_require__.bind(__webpack_require__, /*! ./lazy */ 401)).then(
		module => {
			module.default();
		}
	);
	require("./lazy.js");
	document.head._children[0].onload();
	return promise;
});



it("other-vendors should run too", () => {
	expect(test__WEBPACK_IMPORTED_MODULE_3__/* .value */ .S).toBe("ok");
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [143,703,205], () => (__webpack_exec__(832)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);