/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 774:
/*!**************!*\
  !*** ./d.js ***!
  \**************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! !!./loader1.js!./loader1.js!./loader2.js??ruleSet[1].rules[4].use[3]!./d.js */ 435);

/***/ }),

/***/ 435:
/*!*********************************************************************************!*\
  !*** ./loader1.js!./loader1.js!./loader2.js??ruleSet[1].rules[4].use[3]!./d.js ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! !!./loader1.js!./loader2.js??ruleSet[1].rules[4].use[3]!./d.js */ 117);

/***/ }),

/***/ 542:
/*!**************!*\
  !*** ./a.js ***!
  \**************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! !!./loader2.js??ruleSet[1].rules[0].use[1]!./a.js */ 317);

/***/ }),

/***/ 29:
/*!**************!*\
  !*** ./b.js ***!
  \**************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! !!./loader2.js??ruleSet[1].rules[2].use!./b.js */ 183);

/***/ }),

/***/ 502:
/*!**************!*\
  !*** ./c.js ***!
  \**************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! !!./loader2.js??ruleSet[1].rules[3].use!./c.js */ 370);

/***/ }),

/***/ 117:
/*!********************************************************************!*\
  !*** ./loader1.js!./loader2.js??ruleSet[1].rules[4].use[3]!./d.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! !!./loader2.js??ruleSet[1].rules[4].use[3]!./d.js */ 920);

/***/ }),

/***/ 317:
/*!*******************************************************!*\
  !*** ./loader2.js??ruleSet[1].rules[0].use[1]!./a.js ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "ok"

/***/ }),

/***/ 183:
/*!****************************************************!*\
  !*** ./loader2.js??ruleSet[1].rules[2].use!./b.js ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "maybe"

/***/ }),

/***/ 370:
/*!****************************************************!*\
  !*** ./loader2.js??ruleSet[1].rules[3].use!./c.js ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "yes"

/***/ }),

/***/ 920:
/*!*******************************************************!*\
  !*** ./loader2.js??ruleSet[1].rules[4].use[3]!./d.js ***!
  \*******************************************************/
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
it("should correctly pass complex query object with remaining request", function() {
	expect(__webpack_require__(/*! ./a */ 542)).toBe("ok");
	expect(__webpack_require__(/*! ./b */ 29)).toBe("maybe");
	expect(__webpack_require__(/*! ./c */ 502)).toBe("yes");
	expect(__webpack_require__(/*! ./d */ 774)).toBe("ok");
});

})();

/******/ })()
;