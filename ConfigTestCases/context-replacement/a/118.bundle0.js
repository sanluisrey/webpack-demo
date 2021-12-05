exports.id = 118;
exports.ids = [118];
exports.modules = {

/***/ 637:
/*!**********************************************!*\
  !*** ./new-context/node_modules/replaced.js ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "ok";

/***/ }),

/***/ 118:
/*!**************************************!*\
  !*** ./new-context/ sync ^replaced$ ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"replaced": 637
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
webpackContext.id = 118;

/***/ })

};
;