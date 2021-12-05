/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 862:
/*!**************!*\
  !*** ./b.js ***!
  \**************/
/***/ ((module) => {

module.exports="someOtherMessage"

/***/ }),

/***/ 189:
/*!**************!*\
  !*** ./a.js ***!
  \**************/
/***/ ((module) => {

module.exports="someMessage"

/***/ }),

/***/ 794:
/*!***************!*\
  !*** ./b2.js ***!
  \***************/
/***/ ((module) => {

module.exports="someOtherMessage"

/***/ }),

/***/ 344:
/*!***************!*\
  !*** ./b3.js ***!
  \***************/
/***/ ((module) => {

module.exports="someOtherMessage"

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
it("should resolve aliased loader module with query", function() {
	var foo = __webpack_require__(/*! ./a */ 189);

	expect(foo).toBe("someMessage");
});

it("should favor explicit loader query over aliased query (options in rule)", function() {
	var foo = __webpack_require__(/*! ./b */ 862);

	expect(foo).toBe("someOtherMessage");
});

it("should favor explicit loader query over aliased query (inline query in rule)", function() {
	var foo = __webpack_require__(/*! ./b2 */ 794);

	expect(foo).toBe("someOtherMessage");
});

it("should favor explicit loader query over aliased query (inline query in rule.use)", function() {
	var foo = __webpack_require__(/*! ./b3 */ 344);

	expect(foo).toBe("someOtherMessage");
});

})();

/******/ })()
;