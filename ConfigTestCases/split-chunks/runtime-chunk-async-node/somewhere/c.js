(() => {
var exports = {};
exports.id = "somewhere/c";
exports.ids = ["somewhere/c"];
exports.modules = {

/***/ 460:
/*!**************!*\
  !*** ./c.js ***!
  \**************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

beforeEach(done => {
	global.it = it;
	done();
});
afterEach(done => {
	delete global.it;
	done();
});

it("should be able to load the other entry on demand", () => __webpack_require__.e(/*! import() */ "a_js").then(__webpack_require__.bind(__webpack_require__, /*! ./a */ 847)));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../deep/other/path/runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(460));
module.exports = __webpack_exports__;

})();