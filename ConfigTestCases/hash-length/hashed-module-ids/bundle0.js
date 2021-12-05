/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "ab":
/*!************************!*\
  !*** ./files/file1.js ***!
  \************************/
/***/ ((module) => {

module.exports = module.id;


/***/ }),

/***/ "3c":
/*!*************************!*\
  !*** ./files/file10.js ***!
  \*************************/
/***/ ((module) => {

module.exports = module.id;


/***/ }),

/***/ "mv":
/*!*************************!*\
  !*** ./files/file11.js ***!
  \*************************/
/***/ ((module) => {

module.exports = module.id;


/***/ }),

/***/ "d+":
/*!*************************!*\
  !*** ./files/file12.js ***!
  \*************************/
/***/ ((module) => {

module.exports = module.id;


/***/ }),

/***/ "lB":
/*!*************************!*\
  !*** ./files/file13.js ***!
  \*************************/
/***/ ((module) => {

module.exports = module.id;


/***/ }),

/***/ "2c":
/*!*************************!*\
  !*** ./files/file14.js ***!
  \*************************/
/***/ ((module) => {

module.exports = module.id;


/***/ }),

/***/ "5w":
/*!*************************!*\
  !*** ./files/file15.js ***!
  \*************************/
/***/ ((module) => {

module.exports = module.id;


/***/ }),

/***/ "1u":
/*!************************!*\
  !*** ./files/file2.js ***!
  \************************/
/***/ ((module) => {

module.exports = module.id;


/***/ }),

/***/ "/E":
/*!************************!*\
  !*** ./files/file3.js ***!
  \************************/
/***/ ((module) => {

module.exports = module.id;


/***/ }),

/***/ "vD":
/*!************************!*\
  !*** ./files/file4.js ***!
  \************************/
/***/ ((module) => {

module.exports = module.id;


/***/ }),

/***/ "qG":
/*!************************!*\
  !*** ./files/file5.js ***!
  \************************/
/***/ ((module) => {

module.exports = module.id;


/***/ }),

/***/ "lx":
/*!************************!*\
  !*** ./files/file6.js ***!
  \************************/
/***/ ((module) => {

module.exports = module.id;


/***/ }),

/***/ "S+":
/*!************************!*\
  !*** ./files/file7.js ***!
  \************************/
/***/ ((module) => {

module.exports = module.id;


/***/ }),

/***/ "pz":
/*!************************!*\
  !*** ./files/file8.js ***!
  \************************/
/***/ ((module) => {

module.exports = module.id;


/***/ }),

/***/ "79":
/*!************************!*\
  !*** ./files/file9.js ***!
  \************************/
/***/ ((module) => {

module.exports = module.id;


/***/ }),

/***/ "Kv":
/*!**************************************!*\
  !*** ./files/ sync ^\.\/file.*\.js$ ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./file1.js": "ab",
	"./file10.js": "3c",
	"./file11.js": "mv",
	"./file12.js": "d+",
	"./file13.js": "lB",
	"./file14.js": "2c",
	"./file15.js": "5w",
	"./file2.js": "1u",
	"./file3.js": "/E",
	"./file4.js": "vD",
	"./file5.js": "qG",
	"./file6.js": "lx",
	"./file7.js": "S+",
	"./file8.js": "pz",
	"./file9.js": "79"
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
webpackContext.id = "Kv";

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
		var id = __webpack_require__("Kv")("./file" + i + ".js");
		expect(ids.indexOf(id)).toBe(-1);
		ids.push(id);
	}
});

})();

/******/ })()
;