/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 379:
/*!*****************************!*\
  !*** ./dependencies/bar.js ***!
  \*****************************/
/***/ ((module) => {

module.exports = "Bar"

/***/ }),

/***/ 117:
/*!*****************************!*\
  !*** ./dependencies/foo.js ***!
  \*****************************/
/***/ ((module) => {

module.exports = "Foo"

/***/ }),

/***/ 412:
/*!*************************************!*\
  !*** ./dependencies/ sync ^\.\/.*$ ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./bar": 379,
	"./bar.js": 379,
	"./foo": 117,
	"./foo.js": 117
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
webpackContext.id = 412;

/***/ }),

/***/ 147:
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 17:
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
/******/ 			// no module.id needed
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
/*!*****************!*\
  !*** ./test.js ***!
  \*****************/
function loadDependency(dep) {
	__webpack_require__(412)("./" + dep);
}

it("should write relative dynamic-require paths to records", function() {
	var fs = __webpack_require__(/*! fs */ 147);
	var path = __webpack_require__(/*! path */ 17);
	var content = fs.readFileSync(path.join(__dirname, "records.json"), "utf-8");
	expect(content).toMatchSnapshot();
});

})();

/******/ })()
;