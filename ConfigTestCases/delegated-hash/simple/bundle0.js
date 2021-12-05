/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "HJdw":
/*!*******************!*\
  !*** ./bundle.js ***!
  \*******************/
/***/ ((module) => {

module.exports = function(req) {
	return ["a", "b", "c"][req];
};


/***/ }),

/***/ "8pAQ":
/*!********************!*\
  !*** ./bundle2.js ***!
  \********************/
/***/ ((module) => {

module.exports = ["a", "b", "c", "d", "e"];


/***/ }),

/***/ "3LVs":
/*!**************************************!*\
  !*** delegated ./a.js from ./bundle ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = (__webpack_require__(/*! ./bundle */ "HJdw"))(0);

/***/ }),

/***/ "HadX":
/*!**************************************************!*\
  !*** delegated ./loader.js!./b.js from ./bundle ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = (__webpack_require__(/*! ./bundle */ "HJdw"))(1);

/***/ }),

/***/ "sjez":
/*!******************************************!*\
  !*** delegated ./dir/c.js from ./bundle ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = (__webpack_require__(/*! ./bundle */ "HJdw"))(2);

/***/ }),

/***/ "YNWZ":
/*!***************************************!*\
  !*** delegated ./d.js from ./bundle2 ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = (__webpack_require__(/*! ./bundle2 */ "8pAQ"))[3];

/***/ }),

/***/ "6o3R":
/*!***************************************!*\
  !*** delegated ./e.js from ./bundle2 ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = (__webpack_require__(/*! ./bundle2 */ "8pAQ"))[4];

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
	expect(__webpack_require__(/*! ./a */ "3LVs")).toBe("a");
	expect(__webpack_require__(/*! ./loader!./b */ "HadX")).toBe("b");
	expect(__webpack_require__(/*! ./dir/c */ "sjez")).toBe("c");
	expect(__webpack_require__(/*! ./d */ "YNWZ")).toBe("d");
	expect(__webpack_require__(/*! ./e */ "6o3R")).toBe("e");
});

})();

/******/ })()
;