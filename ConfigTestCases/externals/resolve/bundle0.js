/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 242:
/*!********************************************************************************************************************!*\
  !*** external "\"/Users/yoh/Projects/repos/webpack/test/configCases/externals/resolve/node_modules/external.js\"" ***!
  \********************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "/Users/yoh/Projects/repos/webpack/test/configCases/externals/resolve/node_modules/external.js";

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
it("should allow functions as externals with promise and resolver", function () {
	const result = __webpack_require__(/*! external */ 242);
	expect(result).toMatch(/^[a-z]:\\|\//i);
	expect(result).toMatch(/resolve.node_modules.external\.js$/);
});

})();

/******/ })()
;