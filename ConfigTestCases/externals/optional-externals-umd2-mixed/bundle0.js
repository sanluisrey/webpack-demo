(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("fs"), (function webpackLoadOptionalExternalModule() { try { return require("external"); } catch(e) {} }()));
	else if(typeof define === 'function' && define.amd)
		define(["fs"], function webpackLoadOptionalExternalModuleAmd(__WEBPACK_EXTERNAL_MODULE__346__) {
			return factory(__WEBPACK_EXTERNAL_MODULE__346__, root["external"]);
		});
	else {
		var a = typeof exports === 'object' ? factory(require("fs"), (function webpackLoadOptionalExternalModule() { try { return require("external"); } catch(e) {} }())) : factory(root["fs"], root["external"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function(__WEBPACK_EXTERNAL_MODULE__346__, __WEBPACK_EXTERNAL_MODULE__179__) {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 179:
/*!***************************!*\
  !*** external "external" ***!
  \***************************/
/***/ ((module) => {

"use strict";
if(typeof __WEBPACK_EXTERNAL_MODULE__179__ === 'undefined') { var e = new Error("Cannot find module 'external'"); e.code = 'MODULE_NOT_FOUND'; throw e; }

module.exports = __WEBPACK_EXTERNAL_MODULE__179__;

/***/ }),

/***/ 346:
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__346__;

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
it("should not fail on optional externals", function() {
	__webpack_require__(/*! external2 */ 346);
	try {
		__webpack_require__(/*! external */ 179);
	} catch(e) {
		expect(e).toBeInstanceOf(Error);
		expect(e.code).toBe("MODULE_NOT_FOUND");
		return;
	}
	throw new Error("It doesn't fail");
});

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});