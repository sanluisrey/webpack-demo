/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 367:
/*!*****************************************************************************************************!*\
  !*** external "/Users/yoh/Projects/repos/webpack/test/configCases/plugins/progress-plugin/data.js" ***!
  \*****************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/yoh/Projects/repos/webpack/test/configCases/plugins/progress-plugin/data.js");

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
it("should contain the custom progress messages", function () {
	var data = __webpack_require__(/*! data */ 367);
	expect(data).toContain("sealing|optimizing");
	expect(data).toContain("sealing|optimizing|CustomPlugin");
	expect(data).toContain(
		"sealing|optimizing|CustomPlugin|custom category|custom message"
	);
});

})();

/******/ })()
;