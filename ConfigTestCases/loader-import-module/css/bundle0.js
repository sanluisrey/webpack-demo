/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 733:
/*!***********************!*\
  !*** ./stylesheet.js ***!
  \***********************/
/***/ ((module) => {

module.exports = "body { background: url(\"/public/assets/file.png\"); color: #f00; }";

/***/ }),

/***/ 986:
/*!*************************!*\
  !*** ./stylesheet.js?1 ***!
  \*************************/
/***/ ((module) => {

module.exports = "body { background: url(\"/public/assets/file.png?1\"); color: #f00; }";

/***/ }),

/***/ 801:
/*!*****************************!*\
  !*** ./other-stylesheet.js ***!
  \*****************************/
/***/ ((module) => {

module.exports = "body { background: url(\"/other/assets/file.jpg\"); color: #0f0; }";

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
/* harmony import */ var _stylesheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stylesheet */ 733);
/* harmony import */ var _stylesheet_1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stylesheet?1 */ 986);
/* harmony import */ var _other_stylesheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./other-stylesheet */ 801);




it("should be able to use build-time code", () => {
	expect(_stylesheet__WEBPACK_IMPORTED_MODULE_0__).toBe(
		'body { background: url("/public/assets/file.png"); color: #f00; }'
	);
	expect(_stylesheet_1__WEBPACK_IMPORTED_MODULE_1__).toBe(
		'body { background: url("/public/assets/file.png?1"); color: #f00; }'
	);
	expect(_other_stylesheet__WEBPACK_IMPORTED_MODULE_2__).toBe(
		'body { background: url("/other/assets/file.jpg"); color: #0f0; }'
	);
});

})();

/******/ })()
;