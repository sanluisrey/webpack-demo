/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 19:
/*!***************************************!*\
  !*** external "EXTERNAL_TEST_GLOBAL" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = global["EXTERNAL_TEST_GLOBAL"];

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
afterEach(done => {
	delete global.EXTERNAL_TEST_GLOBAL;
	done();
});

it("should move externals in chunks into entry chunk", function() {
	global.EXTERNAL_TEST_GLOBAL = 42;
	// eslint-disable-next-line node/no-missing-require
	const result = __webpack_require__(/*! external */ 19);
	expect(result).toBe(42);
});

})();

/******/ })()
;