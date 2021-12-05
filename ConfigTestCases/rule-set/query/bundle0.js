/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 847:
/*!**************!*\
  !*** ./a.js ***!
  \**************/
/***/ ((module) => {

module.exports = ["a"];


/***/ }),

/***/ 337:
/*!********************!*\
  !*** ./a.js?other ***!
  \********************/
/***/ ((module) => {

module.exports = ["a"];


/***/ }),

/***/ 859:
/*!*********************!*\
  !*** ./a.js?loader ***!
  \*********************/
/***/ ((module) => {

module.exports = ["a"];

module.exports.push("?query");

/***/ }),

/***/ 229:
/*!*****************************************************!*\
  !*** data:application/node,module.exports = ["a"]; ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = ["a"];

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
it("should match rule with resource query", function () {
	var a1 = __webpack_require__(/*! ./a */ 847);
	expect(a1).toEqual(["a"]);
	var a2 = __webpack_require__(/*! ./a?loader */ 859);
	expect(a2).toEqual(["a", "?query"]);
	var a3 = __webpack_require__(/*! ./a?other */ 337);
	expect(a3).toEqual(["a"]);
	var a4 = __webpack_require__(/*! data:application/node,module.exports = ["a"]; */ 229);
	expect(a4).toEqual(["a"]);
});

})();

/******/ })()
;