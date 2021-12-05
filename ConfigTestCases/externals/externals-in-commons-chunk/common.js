(self["webpackChunk"] = self["webpackChunk"] || []).push([[592],{

/***/ 10:
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

it("should not move externals into the commons chunk", function() {
    var fs = __webpack_require__(/*! fs */ 147);
    var source1 = fs.readFileSync(__dirname + "/main.js", "utf-8");
    var source2 = fs.readFileSync(__dirname + "/other.js", "utf-8");
    var source3 = fs.readFileSync(__dirname + "/common.js", "utf-8");
    expect(source1).toMatch("1+" + (1+1));
    expect(source1).toMatch("3+" + (2+2));
    expect(source2).toMatch("1+" + (1+1));
    expect(source2).toMatch("5+" + (3+3));
    expect(source3).not.toMatch("1+" + (1+1));
    expect(source3).not.toMatch("3+" + (2+2));
    expect(source3).not.toMatch("5+" + (3+3));

    __webpack_require__(/*! external */ 305);
    __webpack_require__(/*! external2 */ 925);
    __webpack_require__(/*! ./module */ 662);
});


/***/ }),

/***/ 662:
/*!*******************!*\
  !*** ./module.js ***!
  \*******************/
/***/ (() => {



/***/ }),

/***/ 799:
/*!******************!*\
  !*** ./other.js ***!
  \******************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! external */ 305);
__webpack_require__(/*! external3 */ 808);
__webpack_require__(/*! ./module */ 662);


/***/ })

}]);