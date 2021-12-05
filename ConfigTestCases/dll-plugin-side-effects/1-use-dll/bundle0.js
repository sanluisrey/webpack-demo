/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 190:
/*!***********************************************************************!*\
  !*** delegated ./module.js from dll-reference ../0-create-dll/dll.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = (__webpack_require__(/*! dll-reference ../0-create-dll/dll.js */ 799))(662);

/***/ }),

/***/ 799:
/*!*****************************************!*\
  !*** external "../0-create-dll/dll.js" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("../0-create-dll/dll.js");

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
it("should include all exports and modules in the dll", function() {
	const { a, b, c } = __webpack_require__(/*! dll/module */ 190);
	expect(typeof a).toBe("function");
	expect(a()).toBe("a");
	expect(typeof b).toBe("function");
	expect(b()).toBe("b");
	expect(typeof c).toBe("function");
	expect(c()).toBe("c");
});

})();

/******/ })()
;