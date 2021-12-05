System.register([], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {


	return {

		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 670:
/*!**************************!*\
  !*** external "rootExt" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = rootExt;

/***/ }),

/***/ 262:
/*!*************************!*\
  !*** external "varExt" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = varExt;

/***/ }),

/***/ 369:
/*!****************************!*\
  !*** external "windowExt" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = window["windowExt"];

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
// This test verifies that the System.register context is made available to webpack bundles

it("should correctly handle externals of different type", function() {
	expect(__webpack_require__(/*! rootExt */ 670)).toEqual("works");
	expect(__webpack_require__(/*! varExt */ 262)).toEqual("works");
	expect(__webpack_require__(/*! windowExt */ 369)).toEqual("works");
});

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});