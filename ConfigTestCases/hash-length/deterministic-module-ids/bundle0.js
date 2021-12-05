/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 294:
/*!************************!*\
  !*** ./files/file1.js ***!
  \************************/
/***/ ((module) => {

module.exports = module.id;


/***/ }),

/***/ 654:
/*!*************************!*\
  !*** ./files/file10.js ***!
  \*************************/
/***/ ((module) => {

module.exports = module.id;


/***/ }),

/***/ 684:
/*!*************************!*\
  !*** ./files/file11.js ***!
  \*************************/
/***/ ((module) => {

module.exports = module.id;


/***/ }),

/***/ 421:
/*!*************************!*\
  !*** ./files/file12.js ***!
  \*************************/
/***/ ((module) => {

module.exports = module.id;


/***/ }),

/***/ 995:
/*!*************************!*\
  !*** ./files/file13.js ***!
  \*************************/
/***/ ((module) => {

module.exports = module.id;


/***/ }),

/***/ 601:
/*!*************************!*\
  !*** ./files/file14.js ***!
  \*************************/
/***/ ((module) => {

module.exports = module.id;


/***/ }),

/***/ 872:
/*!*************************!*\
  !*** ./files/file15.js ***!
  \*************************/
/***/ ((module) => {

module.exports = module.id;


/***/ }),

/***/ 202:
/*!************************!*\
  !*** ./files/file2.js ***!
  \************************/
/***/ ((module) => {

module.exports = module.id;


/***/ }),

/***/ 997:
/*!************************!*\
  !*** ./files/file3.js ***!
  \************************/
/***/ ((module) => {

module.exports = module.id;


/***/ }),

/***/ 999:
/*!************************!*\
  !*** ./files/file4.js ***!
  \************************/
/***/ ((module) => {

module.exports = module.id;


/***/ }),

/***/ 848:
/*!************************!*\
  !*** ./files/file5.js ***!
  \************************/
/***/ ((module) => {

module.exports = module.id;


/***/ }),

/***/ 484:
/*!************************!*\
  !*** ./files/file6.js ***!
  \************************/
/***/ ((module) => {

module.exports = module.id;


/***/ }),

/***/ 667:
/*!************************!*\
  !*** ./files/file7.js ***!
  \************************/
/***/ ((module) => {

module.exports = module.id;


/***/ }),

/***/ 835:
/*!************************!*\
  !*** ./files/file8.js ***!
  \************************/
/***/ ((module) => {

module.exports = module.id;


/***/ }),

/***/ 159:
/*!************************!*\
  !*** ./files/file9.js ***!
  \************************/
/***/ ((module) => {

module.exports = module.id;


/***/ }),

/***/ 599:
/*!**************************************!*\
  !*** ./files/ sync ^\.\/file.*\.js$ ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./file1.js": 294,
	"./file10.js": 654,
	"./file11.js": 684,
	"./file12.js": 421,
	"./file13.js": 995,
	"./file14.js": 601,
	"./file15.js": 872,
	"./file2.js": 202,
	"./file3.js": 997,
	"./file4.js": 999,
	"./file5.js": 848,
	"./file6.js": 484,
	"./file7.js": 667,
	"./file8.js": 835,
	"./file9.js": 159
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
webpackContext.id = 599;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
it("should have unique ids", function () {
	var ids = [];
	for(var i = 1; i <= 15; i++) {
		var id = __webpack_require__(599)("./file" + i + ".js");
		expect(ids.indexOf(id)).toBe(-1);
		ids.push(id);
	}
});

})();

/******/ })()
;