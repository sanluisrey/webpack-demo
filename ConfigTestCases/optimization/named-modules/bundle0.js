/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./files/file1.js":
/*!************************!*\
  !*** ./files/file1.js ***!
  \************************/
/***/ ((module) => {

module.exports = module.id;


/***/ }),

/***/ "./files/file2.js":
/*!************************!*\
  !*** ./files/file2.js ***!
  \************************/
/***/ ((module) => {

module.exports = module.id;


/***/ }),

/***/ "./files/file3.js":
/*!************************!*\
  !*** ./files/file3.js ***!
  \************************/
/***/ ((module) => {

module.exports = module.id;


/***/ }),

/***/ "./files/file4.js":
/*!************************!*\
  !*** ./files/file4.js ***!
  \************************/
/***/ ((module) => {

module.exports = module.id;


/***/ }),

/***/ "./files/file5.js":
/*!************************!*\
  !*** ./files/file5.js ***!
  \************************/
/***/ ((module) => {

module.exports = module.id;


/***/ }),

/***/ "./files sync recursive ^\\.\\/file.*\\.js$":
/*!**************************************!*\
  !*** ./files/ sync ^\.\/file.*\.js$ ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./file1.js": "./files/file1.js",
	"./file2.js": "./files/file2.js",
	"./file3.js": "./files/file3.js",
	"./file4.js": "./files/file4.js",
	"./file5.js": "./files/file5.js"
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
webpackContext.id = "./files sync recursive ^\\.\\/file.*\\.js$";

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

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
var path = __webpack_require__(/*! path */ "path");

it("should have named modules ids", function() {
	for (var i = 1; i <= 5; i++) {
		var expectedModuleId = "file" + i + ".js";
		var moduleId = __webpack_require__("./files sync recursive ^\\.\\/file.*\\.js$")("./file" + i + ".js");

		expect(path.basename(moduleId)).toBe(expectedModuleId);
	}
});

})();

/******/ })()
;