/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/*!*****************************************************!*\
  !*** ./cjs-tree-shaking/objects/direct-object.js?1 ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-4:2 */
/***/ ((module) => {

module.exports = {
	abc: "abc",
	def: "def"
};


/***/ }),
/* 1 */
/*!*****************************************************!*\
  !*** ./cjs-tree-shaking/objects/direct-object.js?2 ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-4:2 */
/***/ ((module) => {

module.exports = {
	abc: "abc",
	def: "def"
};


/***/ }),
/* 2 */
/*!*******************************************************!*\
  !*** ./cjs-tree-shaking/objects/indirect-object.js?1 ***!
  \*******************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 6:0-14 */
/*! Statement (VariableDeclaration) with side effects in source code at 1:0-4:2 */
/***/ ((module) => {

var value = {
	abc: "abc",
	def: "def"
};

module.exports = value;


/***/ }),
/* 3 */
/*!*******************************************************!*\
  !*** ./cjs-tree-shaking/objects/indirect-object.js?2 ***!
  \*******************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 6:0-14 */
/*! Statement (VariableDeclaration) with side effects in source code at 1:0-4:2 */
/***/ ((module) => {

var value = {
	abc: "abc",
	def: "def"
};

module.exports = value;


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
  !*** ./cjs-tree-shaking/objects/index.js ***!
  \*******************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-4:3 */
it("should be able to export an object literal", () => {
	expect((__webpack_require__(/*! ./direct-object?1 */ 0).abc)).toBe("abc");
	expect(__webpack_require__(/*! ./direct-object?2 */ 1)).toEqual({ abc: "abc", def: "def" });
});

it("should be able to export an object literal indirect", () => {
	expect((__webpack_require__(/*! ./indirect-object?1 */ 2).abc)).toBe("abc");
	expect(__webpack_require__(/*! ./indirect-object?2 */ 3)).toEqual({ abc: "abc", def: "def" });
});

})();

/******/ })()
;