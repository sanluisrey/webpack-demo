(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("external0"));
	else if(typeof define === 'function' && define.amd)
		define(["external0"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("external0")) : factory(root["external0"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function(__WEBPACK_EXTERNAL_MODULE__584__) {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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

/***/ }),

/***/ 584:
/*!****************************!*\
  !*** external "external0" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__584__;

/***/ }),

/***/ 5:
/*!************************!*\
  !*** external "'abc'" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = 'abc';

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
var fs = __webpack_require__(/*! fs */ 147);
var path = __webpack_require__(/*! path */ 17);

it("should correctly import a UMD external", function() {
	var external = __webpack_require__(/*! external0 */ 584);
	expect(external).toBe("module 0");
});

it("should contain `require()` statements for the UMD external", function() {
	var source = fs.readFileSync(path.join(__dirname, "bundle0.js"), "utf-8");
	expect(source).toMatch("require(\"external0\")");
});

it("should correctly import a non-UMD external", function() {
	var external = __webpack_require__(/*! external1 */ 5);
	expect(external).toBe("abc");
});

it("should not contain `require()` statements for the non-UMD external", function() {
	var source = fs.readFileSync(path.join(__dirname, "bundle0.js"), "utf-8");
	expect(source).not.toMatch("require(\"'abc'\")");
});

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});