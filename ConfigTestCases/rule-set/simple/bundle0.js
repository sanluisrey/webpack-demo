/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 580:
/*!*******************!*\
  !*** ./ab.js?not ***!
  \*******************/
/***/ ((module) => {

module.exports = ["ab"];


/***/ }),

/***/ 996:
/*!**************!*\
  !*** ./b.js ***!
  \**************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = [__webpack_require__(/*! ./a */ 814)];



/***/ }),

/***/ 814:
/*!**************!*\
  !*** ./a.js ***!
  \**************/
/***/ ((module) => {

module.exports = ["a"];

module.exports.push("second-3");
module.exports.push("?second-2");
module.exports.push("");

/***/ }),

/***/ 190:
/*!***************!*\
  !*** ./ab.js ***!
  \***************/
/***/ ((module) => {

module.exports = ["ab"];

module.exports.push("?first");

/***/ }),

/***/ 845:
/*!**************!*\
  !*** ./a.js ***!
  \**************/
/***/ ((module) => {

module.exports = ["a"];

module.exports.push("?third");

/***/ }),

/***/ 636:
/*!*******************!*\
  !*** ./not-ab.js ***!
  \*******************/
/***/ ((module) => {

module.exports = ["not-ab"];


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
it("should match only one rule in a oneOf block", function () {
	var ab = __webpack_require__(/*! ./ab */ 190);
	expect(ab).toEqual(["ab", "?first"]);
});

it("should not match not condition (absolute)", function () {
	var ab = __webpack_require__(/*! ./not-ab */ 636);
	expect(ab).toEqual(["not-ab"]);
});

it("should not match not condition (not absolute)", function () {
	var ab = __webpack_require__(/*! ./ab?not */ 580);
	expect(ab).toEqual(["ab"]);
});

it("should match with issuer and any option value", function () {
	var a = __webpack_require__(/*! ./a */ 845);
	var b = __webpack_require__(/*! ./b */ 996);
	expect(a).toEqual(["a", "?third"]);
	expect(b).toEqual([["a", "second-3", "?second-2", ""]]);
});

})();

/******/ })()
;