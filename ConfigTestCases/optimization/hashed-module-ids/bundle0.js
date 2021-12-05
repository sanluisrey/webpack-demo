/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "abLY":
/*!************************!*\
  !*** ./files/file1.js ***!
  \************************/
/***/ ((module) => {

module.exports = module.id;


/***/ }),

/***/ "1uou":
/*!************************!*\
  !*** ./files/file2.js ***!
  \************************/
/***/ ((module) => {

module.exports = module.id;


/***/ }),

/***/ "/EdU":
/*!************************!*\
  !*** ./files/file3.js ***!
  \************************/
/***/ ((module) => {

module.exports = module.id;


/***/ }),

/***/ "vD2x":
/*!************************!*\
  !*** ./files/file4.js ***!
  \************************/
/***/ ((module) => {

module.exports = module.id;


/***/ }),

/***/ "qG9A":
/*!************************!*\
  !*** ./files/file5.js ***!
  \************************/
/***/ ((module) => {

module.exports = module.id;


/***/ }),

/***/ "KvV7":
/*!**************************************!*\
  !*** ./files/ sync ^\.\/file.*\.js$ ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./file1.js": "abLY",
	"./file2.js": "1uou",
	"./file3.js": "/EdU",
	"./file4.js": "vD2x",
	"./file5.js": "qG9A"
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
webpackContext.id = "KvV7";

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
it("should have named modules ids", function() {
	for (var i = 1; i <= 5; i++) {
		var moduleId = __webpack_require__("KvV7")("./file" + i + ".js");

		expect(moduleId).toMatch(/^[/=a-zA-Z0-9]{4,5}$/);
	}
});

})();

/******/ })()
;