/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 64:
/*!************************************!*\
  !*** ./folder-a/ignored-module.js ***!
  \************************************/
/***/ ((module) => {

module.exports = "ignored";


/***/ }),

/***/ 543:
/*!***********************************!*\
  !*** ./folder-a/normal-module.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./normal-module */ 543);


/***/ }),

/***/ 233:
/*!*********************************!*\
  !*** ./folder-a/ sync ^\.\/.*$ ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ignored-module": 64,
	"./ignored-module.js": 64,
	"./normal-module": 543,
	"./normal-module.js": 543
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
webpackContext.id = 233;

/***/ }),

/***/ 781:
/*!***********************************!*\
  !*** ./folder-b/normal-module.js ***!
  \***********************************/
/***/ ((module) => {

module.exports = Object(function webpackMissingModule() { var e = new Error("Cannot find module './ignored-module'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


/***/ }),

/***/ 765:
/*!************************************************!*\
  !*** ./folder-b/only-context-match-require.js ***!
  \************************************************/
/***/ ((module) => {

module.exports = "should be fine";


/***/ }),

/***/ 562:
/*!****************************************!*\
  !*** ./folder-b/only-context-match.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./only-context-match-require */ 765);


/***/ }),

/***/ 788:
/*!*********************************!*\
  !*** ./folder-b/ sync ^\.\/.*$ ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./normal-module": 781,
	"./normal-module.js": 781,
	"./only-context-match": 562,
	"./only-context-match-require": 765,
	"./only-context-match-require.js": 765,
	"./only-context-match.js": 562
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
webpackContext.id = 788;

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


it("should ignore context modules that match resource regex and context", function() {
	const folderBContext = function(mod) {
		__webpack_require__(788)("./" + mod);
	};

	expect(function() {
		folderBContext("normal-module");
	}).toThrowError();
});

it("should not ignore context modules that dont match the resource", function() {
	const folderBContext = function(mod) {
		__webpack_require__(788)("./" + mod);
	};

	expect(function() {
		folderBContext("only-context-match");
	}).not.toThrowError();
});

it("should not ignore context modules that dont match the context", function() {
	const folderBContext = function(mod) {
		__webpack_require__(233)("./" + mod);
	};

	expect(function() {
		folderBContext("normal-module");
	}).not.toThrowError();
	expect(function() {
		folderBContext("ignored-module");
	}).not.toThrowError();
});

})();

/******/ })()
;