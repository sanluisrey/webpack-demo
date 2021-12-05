/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 271:
/*!************************************************!*\
  !*** ./some-dir/check-here/check-here/file.js ***!
  \************************************************/
/***/ ((module) => {

module.exports = "thats good";


/***/ }),

/***/ 173:
/*!*************************************!*\
  !*** ./some-dir/check-here/file.js ***!
  \*************************************/
/***/ ((module) => {

module.exports = "thats good";


/***/ }),

/***/ 117:
/*!**************************!*\
  !*** ./some-dir/file.js ***!
  \**************************/
/***/ ((module) => {

module.exports = "thats good";


/***/ }),

/***/ 779:
/*!*********************************!*\
  !*** ./some-dir/ sync ^\.\/.*$ ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./check-here/check-here/file": 271,
	"./check-here/check-here/file.js": 271,
	"./check-here/file": 173,
	"./check-here/file.js": 173,
	"./file": 117,
	"./file.js": 117
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
webpackContext.id = 779;

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
/*!******************!*\
  !*** ./index.js ***!
  \******************/
function requireInContext(someVariable) {
	return __webpack_require__(779)(`./${someVariable}`);
}

it("should not exclude paths not matching the exclusion pattern", function() {
	expect(requireInContext("file")).toBe("thats good");
	expect(requireInContext("check-here/file")).toBe("thats good");
	expect(requireInContext("check-here/check-here/file")).toBe("thats good");
});

it("should exclude paths/files matching the exclusion pattern", function() {
		expect(() => requireInContext("dont")).toThrowError(/Cannot find module '.\/dont'/);

		expect(() => requireInContext("dont-check-here/file")).toThrowError(/Cannot find module '.\/dont-check-here\/file'/);

		expect(() => requireInContext("check-here/dont-check-here/file")).toThrowError(/Cannot find module '.\/check-here\/dont-check-here\/file'/);
});

})();

/******/ })()
;