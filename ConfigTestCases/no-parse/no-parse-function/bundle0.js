/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 256:
/*!*************************!*\
  !*** ./not-parsed-a.js ***!
  \*************************/
/***/ (function(module, exports) {

module.exports = "ok";


/***/ }),

/***/ 294:
/*!*************************!*\
  !*** ./not-parsed-b.js ***!
  \*************************/
/***/ (function(module, exports) {

Object.defineProperty(module, "exports", {
	get: function() {
		return "ok";
	}
});


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
it("should correctly export stuff from not parsed modules", function() {
	expect(__webpack_require__(/*! ./not-parsed-a */ 256)).toBe("ok");
	expect(__webpack_require__(/*! ./not-parsed-b */ 294)).toBe("ok");
});

})();

/******/ })()
;