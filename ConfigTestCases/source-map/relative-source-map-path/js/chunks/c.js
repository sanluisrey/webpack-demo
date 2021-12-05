exports.id = "test_js";
exports.ids = ["test_js"];
exports.modules = {

/***/ "./test.js":
/*!*****************!*\
  !*** ./test.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var fs = __webpack_require__(/*! fs */ "fs");
var source = fs.readFileSync(__filename, "utf-8");
var match = /sourceMappingURL\s*=\s*(.*)/.exec(source);
expect(match[1]).toBe("c.js.map");


/***/ })

};
;
//# sourceMappingURL=c.js.map