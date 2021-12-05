(self["webpackChunk"] = self["webpackChunk"] || []).push([[592],{

/***/ 847:
/*!**************!*\
  !*** ./a.js ***!
  \**************/
/***/ ((module) => {

module.exports = "a";


/***/ }),

/***/ 996:
/*!**************!*\
  !*** ./b.js ***!
  \**************/
/***/ ((module) => {

module.exports = "b";


/***/ }),

/***/ 10:
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

it("should be main", function () {
	__webpack_require__(/*! ./a */ 847);
	__webpack_require__(/*! ./b */ 996);

	expect(window["webpackChunk"].length).toBe(1);
});


/***/ }),

/***/ 46:
/*!*******************!*\
  !*** ./index2.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

it("should run", function() {
	var a = __webpack_require__(/*! ./a */ 847);
	var b = __webpack_require__(/*! ./b */ 996);
	expect(a).toBe("a");
	expect(b).toBe("b");
});


/***/ })

}]);