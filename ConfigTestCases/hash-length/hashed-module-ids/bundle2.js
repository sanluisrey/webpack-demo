/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "IfL":
/*!************************!*\
  !*** ./files/file1.js ***!
  \************************/
/***/ ((module) => {

module.exports = module.id;


/***/ }),

/***/ "0Ov":
/*!*************************!*\
  !*** ./files/file10.js ***!
  \*************************/
/***/ ((module) => {

module.exports = module.id;


/***/ }),

/***/ "Opm":
/*!*************************!*\
  !*** ./files/file11.js ***!
  \*************************/
/***/ ((module) => {

module.exports = module.id;


/***/ }),

/***/ "Rc+":
/*!*************************!*\
  !*** ./files/file12.js ***!
  \*************************/
/***/ ((module) => {

module.exports = module.id;


/***/ }),

/***/ "Y0n":
/*!*************************!*\
  !*** ./files/file13.js ***!
  \*************************/
/***/ ((module) => {

module.exports = module.id;


/***/ }),

/***/ "O2m":
/*!*************************!*\
  !*** ./files/file14.js ***!
  \*************************/
/***/ ((module) => {

module.exports = module.id;


/***/ }),

/***/ "wsA":
/*!*************************!*\
  !*** ./files/file15.js ***!
  \*************************/
/***/ ((module) => {

module.exports = module.id;


/***/ }),

/***/ "eNQ":
/*!************************!*\
  !*** ./files/file2.js ***!
  \************************/
/***/ ((module) => {

module.exports = module.id;


/***/ }),

/***/ "8B+":
/*!************************!*\
  !*** ./files/file3.js ***!
  \************************/
/***/ ((module) => {

module.exports = module.id;


/***/ }),

/***/ "f11":
/*!************************!*\
  !*** ./files/file4.js ***!
  \************************/
/***/ ((module) => {

module.exports = module.id;


/***/ }),

/***/ "9fn":
/*!************************!*\
  !*** ./files/file5.js ***!
  \************************/
/***/ ((module) => {

module.exports = module.id;


/***/ }),

/***/ "N6l":
/*!************************!*\
  !*** ./files/file6.js ***!
  \************************/
/***/ ((module) => {

module.exports = module.id;


/***/ }),

/***/ "gmC":
/*!************************!*\
  !*** ./files/file7.js ***!
  \************************/
/***/ ((module) => {

module.exports = module.id;


/***/ }),

/***/ "QH2":
/*!************************!*\
  !*** ./files/file8.js ***!
  \************************/
/***/ ((module) => {

module.exports = module.id;


/***/ }),

/***/ "Soo":
/*!************************!*\
  !*** ./files/file9.js ***!
  \************************/
/***/ ((module) => {

module.exports = module.id;


/***/ }),

/***/ "VKr":
/*!**************************************!*\
  !*** ./files/ sync ^\.\/file.*\.js$ ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./file1.js": "IfL",
	"./file10.js": "0Ov",
	"./file11.js": "Opm",
	"./file12.js": "Rc+",
	"./file13.js": "Y0n",
	"./file14.js": "O2m",
	"./file15.js": "wsA",
	"./file2.js": "eNQ",
	"./file3.js": "8B+",
	"./file4.js": "f11",
	"./file5.js": "9fn",
	"./file6.js": "N6l",
	"./file7.js": "gmC",
	"./file8.js": "QH2",
	"./file9.js": "Soo"
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
webpackContext.id = "VKr";

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
		var id = __webpack_require__("VKr")("./file" + i + ".js");
		expect(ids.indexOf(id)).toBe(-1);
		ids.push(id);
	}
});

})();

/******/ })()
;