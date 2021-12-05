/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/*!*******************************************!*\
  !*** ./json/data/f.json?default-imported ***!
  \*******************************************/
/*! default exports */
/*! export __esModule [provided] [unused] [renamed to X$] */
/*! export default [provided] [used in main] [renamed to ZP] */
/*! export named [provided] [unused] [renamed to t6] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = {"ZP":"default"};

/***/ }),
/* 2 */
/*!**************************************!*\
  !*** ./json/data/f.json?ns-imported ***!
  \**************************************/
/*! default exports */
/*! export __esModule [provided] [unused] [renamed to X$] */
/*! export default [provided] [used in main] [renamed to ZP] */
/*! export named [provided] [unused] [renamed to t6] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = {"ZP":"default"};

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
/*!***************************************!*\
  !*** ./json/default-default/index.js ***!
  \***************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 4:0-7:3 */
/* harmony import */ var _data_f_json_default_imported__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/f.json?default-imported */ 1);
/* harmony import */ var _data_f_json_ns_imported__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/f.json?ns-imported */ 2);



it("should be possible to access a default key", () => {
	expect(_data_f_json_default_imported__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP).toBe("default");
	expect(_data_f_json_ns_imported__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP).toBe("default");
});

})();

/******/ })()
;