exports.id = 214;
exports.ids = [214];
exports.modules = {

/***/ 48:
/*!*****************************************!*\
  !*** ./new-context/modules/replaced.js ***!
  \*****************************************/
/***/ ((module) => {

module.exports = "ok";

/***/ }),

/***/ 214:
/*!********************************************************!*\
  !*** ./new-context/ sync ^replaced$|^\.\/modules\/rep ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./modules/replaced": 48,
	"./modules/replaced.js": 48,
	"replaced": 48
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 214;

/***/ })

};
;