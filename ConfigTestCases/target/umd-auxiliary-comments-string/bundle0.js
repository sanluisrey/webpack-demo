(function webpackUniversalModuleDefinition(root, factory) {
	//test comment
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	//test comment
	else if(typeof define === 'function' && define.amd)
		define("NamedLibrary", [], factory);
	//test comment
	else if(typeof exports === 'object')
		exports["NamedLibrary"] = factory();
	//test comment
	else
		root["NamedLibrary"] = factory();
})(global, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 147:
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

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
it("should run", function() {

});

it("should have auxiliary comment string", function() {
	var fs = __webpack_require__(/*! fs */ 147);
	var source = fs.readFileSync(__filename, "utf-8");

	expect(source).toMatch("//test " + "comment");
});

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});