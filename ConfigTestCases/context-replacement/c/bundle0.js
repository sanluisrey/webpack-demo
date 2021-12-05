/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 839:
/*!**********************!*\
  !*** ./modules/a.js ***!
  \**********************/
/***/ ((module) => {

module.exports = "a";


/***/ }),

/***/ 98:
/*!*****************************!*\
  !*** ./modules/module-b.js ***!
  \*****************************/
/***/ ((module) => {

module.exports = "b";


/***/ }),

/***/ 344:
/*!***********************!*\
  !*** ./modules/ sync ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./c": 98,
	"./d": 882,
	"a": 839,
	"b": 98,
	"d": 882
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
webpackContext.id = 344;

/***/ }),

/***/ 882:
/*!***************************!*\
  !*** ./node_modules/d.js ***!
  \***************************/
/***/ ((module) => {

module.exports = "d";


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
it("should replace a context with a manual map", function() {
	function rqInContext(x) {
		return __webpack_require__(344)(x);
	}
	expect(rqInContext("a")).toBe("a");
	expect(rqInContext("b")).toBe("b");
	expect(rqInContext("./c")).toBe("b");
	expect(rqInContext("d")).toBe("d");
	expect(rqInContext("./d")).toBe("d");
	(expect(function() {
		rqInContext("module-b")
	}).toThrowError());
});

})();

/******/ })()
;