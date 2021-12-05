/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 491:
/*!****************!*\
  !*** ./abc.js ***!
  \****************/
/***/ ((module) => {

module.exports = ["abc"];

module.exports.push("?b");
module.exports.push("?a");

/***/ }),

/***/ 313:
/*!****************!*\
  !*** ./def.js ***!
  \****************/
/***/ ((module) => {

module.exports = ["def"];

module.exports.push("?d");
module.exports.push("?c");

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
it("should match rule with multiple loaders in 'loader'", function() {
	var abc = __webpack_require__(/*! ./abc */ 491);
	expect(abc).toEqual([
		"abc",
		"?b",
		"?a"
	]);
});
it("should match rule with multiple loaders in 'loaders'", function() {
	var def = __webpack_require__(/*! ./def */ 313);
	expect(def).toEqual([
		"def",
		"?d",
		"?c"
	]);
});

})();

/******/ })()
;