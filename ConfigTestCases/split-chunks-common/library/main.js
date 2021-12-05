(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("external1"), require("external2"), require("fs"), require("path"));
	else if(typeof define === 'function' && define.amd)
		define(["external1", "external2", "fs", "path"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("external1"), require("external2"), require("fs"), require("path")) : factory(root["external1"], root["external2"], root["fs"], root["path"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, function(__WEBPACK_EXTERNAL_MODULE__237__, __WEBPACK_EXTERNAL_MODULE__960__, __WEBPACK_EXTERNAL_MODULE__89__, __WEBPACK_EXTERNAL_MODULE__56__) {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 847:
/*!**************!*\
  !*** ./a.js ***!
  \**************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var path = __webpack_require__(/*! path */ 56);
module.exports = {
	vendor: (__webpack_require__(/*! fs */ 89).readFileSync)(path.join(__dirname, "vendor.js"), "utf-8"),
	main: (__webpack_require__(/*! fs */ 89).readFileSync)(path.join(__dirname, "main.js"), "utf-8")
};


/***/ }),

/***/ 237:
/*!****************************!*\
  !*** external "external1" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__237__;

/***/ }),

/***/ 960:
/*!****************************!*\
  !*** external "external2" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__960__;

/***/ }),

/***/ 89:
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__89__;

/***/ }),

/***/ 56:
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__56__;

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
if (Math.random() < 0) __webpack_require__(/*! external1 */ 237);
Promise.resolve(/*! require.ensure */).then((function() {
	if (Math.random() < 0) __webpack_require__(/*! external2 */ 960);
}).bind(null, __webpack_require__))['catch'](__webpack_require__.oe);

it("should have externals in main file", function() {
	var a = __webpack_require__(/*! ./a */ 847);
	expect(a.vendor).toMatch('require("external0")');
	expect(a.main).toMatch('require("external1")');
	expect(a.main).toMatch('require("external2")');
});

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});