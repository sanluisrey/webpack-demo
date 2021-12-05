/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 446:
/*!****************************************!*\
  !*** ./node_modules/loader1.js!./c.js ***!
  \****************************************/
/***/ ((module) => {

module.exports = ["c"];

module.exports.push("2");
module.exports.push("1");

/***/ }),

/***/ 98:
/*!***********************************************!*\
  !*** c.js!=!./node_modules/loader1.js!./b.js ***!
  \***********************************************/
/***/ ((module) => {

module.exports = ["b"];

module.exports.push("1");
module.exports.push("2");

/***/ }),

/***/ 812:
/*!***********************************************!*\
  !*** d.js!=!./node_modules/loader1.js!./c.js ***!
  \***********************************************/
/***/ ((module) => {

module.exports = ["c"];

module.exports.push("1");
module.exports.push("3");

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
it("should apply inline loaders before matchResource", function() {
	var foo = __webpack_require__(/*! c.js!=!loader1!./b.js */ 98);

	expect(foo).toEqual(["b", "1", "2"]);
});

it("should apply config loaders before inline loaders", function() {
	var foo = __webpack_require__(/*! loader1!./c.js */ 446);

	expect(foo).toEqual(["c", "2", "1"]);
});

it("should not apply config loaders when matchResource is used", function() {
	var foo = __webpack_require__(/*! d.js!=!loader1!./c.js */ 812);

	expect(foo).toEqual(["c", "1", "3"]);
});

})();

/******/ })()
;