/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 573:
/*!*********************!*\
  !*** ./dir/file.js ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {

var __filename = "dir/file.js";
var __dirname = "dir";
exports.v = __filename;
exports.X = __dirname;


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
var __dirname = "";
var __filename = "index.js";
it("should define __dirname and __filename", function() {
	expect(__dirname).toBe("");
	expect(__filename).toBe("index.js");
	expect((__webpack_require__(/*! ./dir/file */ 573)/* .dirname */ .X)).toBe("dir");
	expect((__webpack_require__(/*! ./dir/file */ 573)/* .filename */ .v)).toMatch(/^dir[\\\/]file.js$/);
});

})();

/******/ })()
;