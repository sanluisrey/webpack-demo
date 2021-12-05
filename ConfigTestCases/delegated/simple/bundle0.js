/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 904:
/*!*******************!*\
  !*** ./bundle.js ***!
  \*******************/
/***/ ((module) => {

module.exports = function(req) {
	return ["a", "b", "c"][req];
}

/***/ }),

/***/ 307:
/*!**************************************!*\
  !*** delegated ./a.js from ./bundle ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = (__webpack_require__(/*! ./bundle */ 904))(0);

/***/ }),

/***/ 873:
/*!**************************************************!*\
  !*** delegated ./loader.js!./b.js from ./bundle ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = (__webpack_require__(/*! ./bundle */ 904))(1);

/***/ }),

/***/ 158:
/*!******************************************!*\
  !*** delegated ./dir/c.js from ./bundle ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = (__webpack_require__(/*! ./bundle */ 904))(2);

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
it("should delegate the modules", function() {
	expect(__webpack_require__(/*! ./a */ 307)).toBe("a");
	expect(__webpack_require__(/*! ./loader!./b */ 873)).toBe("b");
	expect(__webpack_require__(/*! ./dir/c */ 158)).toBe("c");
});

})();

/******/ })()
;