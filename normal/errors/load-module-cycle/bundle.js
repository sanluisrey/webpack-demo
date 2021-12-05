/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/*!********************************************************************************!*\
  !*** ./errors/load-module-cycle/loader.js!./errors/load-module-cycle/2/a.json ***!
  \********************************************************************************/
/*! default exports */
/*! exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
module.exports = "source: err: There is a circular build dependency, which makes it impossible to create this module";

/***/ }),
/* 2 */
/*!********************************************************************************!*\
  !*** ./errors/load-module-cycle/loader.js!./errors/load-module-cycle/3/a.json ***!
  \********************************************************************************/
/*! default exports */
/*! exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
module.exports = "source: source: err: There is a circular build dependency, which makes it impossible to create this module";

/***/ }),
/* 3 */
/*!********************************************************************************!*\
  !*** ./errors/load-module-cycle/loader.js!./errors/load-module-cycle/1/a.json ***!
  \********************************************************************************/
/*! default exports */
/*! exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
module.exports = "err: There is a circular build dependency, which makes it impossible to create this module";

/***/ })
/******/ 	]);
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
/*!*******************************************!*\
  !*** ./errors/load-module-cycle/index.js ***!
  \*******************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-5:3 */
it("should error loadModule when a cycle with 2 modules is requested", () => {
	expect(__webpack_require__(/*! ./loader!./2/a */ 1)).toMatch(
		/^source: err: There is a circular build dependency/
	);
});
it("should error loadModule when a cycle with 3 modules is requested", () => {
	expect(__webpack_require__(/*! ./loader!./3/a */ 2)).toMatch(
		/^source: source: err: There is a circular build dependency/
	);
});
it("should error loadModule when requesting itself", () => {
	expect(__webpack_require__(/*! ./loader!./1/a */ 3)).toMatch(
		/^err: There is a circular build dependency/
	);
});

})();

/******/ })()
;