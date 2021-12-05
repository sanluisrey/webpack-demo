/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 136:
/*!******************************!*\
  !*** ./src/normal-module.js ***!
  \******************************/
/***/ ((module) => {

module.exports = "normal";


/***/ }),

/***/ 116:
/*!****************************!*\
  !*** ./src/ sync ^\.\/.*$ ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./normal-module": 136,
	"./normal-module.js": 136
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
webpackContext.id = 116;

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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*****************!*\
  !*** ./test.js ***!
  \*****************/
/* globals it */


it("should ignore ignored resources", function() {
	const folderBContext = function(mod) {
		__webpack_require__(116)("./" + mod);
	};

	expect(function() {
		folderBContext("ignored-module");
	}).toThrowError();
});
it("should not ignore resources that do not match", function() {
	const folderBContext = function(mod) {
		__webpack_require__(116)("./" + mod);
	};

	expect(function() {
		folderBContext("normal-module");
	}).not.toThrowError();
});

})();

/******/ })()
;