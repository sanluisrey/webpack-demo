/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 869:
/*!****************!*\
  !*** ./a/1.js ***!
  \****************/
/***/ ((module) => {

module.exports = 1;


/***/ }),

/***/ 723:
/*!****************!*\
  !*** ./b/2.js ***!
  \****************/
/***/ ((module) => {

module.exports = 2;


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
it("should resolve both alternatives", () => {
	const one = __webpack_require__(/*! ./b */ 869);
	const two = __webpack_require__(/*! ./b/2 */ 723);
	expect(one).toBe(1);
	expect(two).toBe(2);
});

})();

/******/ })()
;