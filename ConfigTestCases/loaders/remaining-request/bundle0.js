/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 150:
/*!**************!*\
  !*** ./a.js ***!
  \**************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! !!./loader2.js??loader2!./a.js */ 990);

/***/ }),

/***/ 456:
/*!**************!*\
  !*** ./b.js ***!
  \**************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! !!./loader2.js??ruleSet[1].rules[1].use[1]!./b.js */ 446);

/***/ }),

/***/ 499:
/*!**************!*\
  !*** ./c.js ***!
  \**************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! !!./loader2.js??ruleSet[1].rules[3]!./c.js */ 340);

/***/ }),

/***/ 990:
/*!************************************!*\
  !*** ./loader2.js??loader2!./a.js ***!
  \************************************/
/***/ ((module) => {

module.exports = "ok"

/***/ }),

/***/ 446:
/*!*******************************************************!*\
  !*** ./loader2.js??ruleSet[1].rules[1].use[1]!./b.js ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "ok"

/***/ }),

/***/ 340:
/*!************************************************!*\
  !*** ./loader2.js??ruleSet[1].rules[3]!./c.js ***!
  \************************************************/
/***/ ((module) => {

module.exports = "ok"

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
it("should correctly pass complex query object with remaining request (with custom ident)", function() {
	expect(__webpack_require__(/*! ./a */ 150)).toBe("ok");
});

it("should correctly pass complex query object with remaining request (with default ident)", function() {
	expect(__webpack_require__(/*! ./b */ 456)).toBe("ok");
});

it("should correctly pass complex query object with remaining request (with shorthand syntax and default ident)", function() {
	expect(__webpack_require__(/*! ./c */ 499)).toBe("ok");
});

})();

/******/ })()
;