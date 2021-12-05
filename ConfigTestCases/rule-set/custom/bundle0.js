/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 645:
/*!**************!*\
  !*** ./a.js ***!
  \**************/
/***/ ((module) => {

module.exports = ["a"];

module.exports.push({"resource":"a.js","resourceQuery":"","issuer":"index.js"});

/***/ }),

/***/ 256:
/*!********************!*\
  !*** ./a.js?hello ***!
  \********************/
/***/ ((module) => {

module.exports = ["a"];

module.exports.push({"resource":"a.js","resourceQuery":"?hello","issuer":"call-a.js"});

/***/ }),

/***/ 656:
/*!********************!*\
  !*** ./b.js?hello ***!
  \********************/
/***/ ((module) => {

module.exports = ["b"];

module.exports.push({"resource":"b.js","resourceQuery":"?hello","issuer":"index.js"});

/***/ }),

/***/ 802:
/*!*************************!*\
  !*** ./call-a.js?hello ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./a?hello */ 256);

module.exports.push({"resource":"call-a.js","resourceQuery":"?hello","issuer":"index.js"});

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
it("should match a custom loader", function() {
	var a = __webpack_require__(/*! ./a */ 645);
	expect(a).toEqual([
		"a",
		{
			issuer: "index.js",
			resource: "a.js",
			resourceQuery: ""
		}
	]);
	var b = __webpack_require__(/*! ./b?hello */ 656);
	expect(b).toEqual([
		"b",
		{
			issuer: "index.js",
			resource: "b.js",
			resourceQuery: "?hello"
		}
	]);
	var ca = __webpack_require__(/*! ./call-a?hello */ 802);
	expect(ca).toEqual([
		"a",
		{
			issuer: "call-a.js",
			resource: "a.js",
			resourceQuery: "?hello"
		},
		{
			issuer: "index.js",
			resource: "call-a.js",
			resourceQuery: "?hello"
		}
	]);
});

})();

/******/ })()
;