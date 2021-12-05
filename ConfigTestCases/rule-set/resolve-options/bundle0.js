/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 847:
/*!**************!*\
  !*** ./a.js ***!
  \**************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./wrong */ 244) + __webpack_require__(/*! ./normal */ 634) + __webpack_require__(/*! ./wrong2 */ 881);


/***/ }),

/***/ 996:
/*!**************!*\
  !*** ./b.js ***!
  \**************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./wrong */ 244) + __webpack_require__(/*! ./normal */ 634) + __webpack_require__(/*! ./wrong2 */ 706);


/***/ }),

/***/ 460:
/*!**************!*\
  !*** ./c.js ***!
  \**************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./wrong */ 322) + __webpack_require__(/*! ./normal */ 634) + __webpack_require__(/*! ./wrong2 */ 881);


/***/ }),

/***/ 634:
/*!*******************!*\
  !*** ./normal.js ***!
  \*******************/
/***/ ((module) => {

module.exports = "-normal-";


/***/ }),

/***/ 244:
/*!***************!*\
  !*** ./ok.js ***!
  \***************/
/***/ ((module) => {

module.exports = "ok";


/***/ }),

/***/ 881:
/*!****************!*\
  !*** ./ok2.js ***!
  \****************/
/***/ ((module) => {

module.exports = "ok2";


/***/ }),

/***/ 706:
/*!********************!*\
  !*** ./ok2.yes.js ***!
  \********************/
/***/ ((module) => {

module.exports = "ok2-yes";


/***/ }),

/***/ 322:
/*!******************!*\
  !*** ./wrong.js ***!
  \******************/
/***/ ((module) => {

module.exports = "wrong";


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
it("should allow to set custom resolving rules", function() {
	var a = __webpack_require__(/*! ./a */ 847);
	expect(a).toBe("ok-normal-ok2");
	var b = __webpack_require__(/*! ./b */ 996);
	expect(b).toBe("ok-normal-ok2-yes");
	var c = __webpack_require__(/*! ./c */ 460);
	expect(c).toBe("wrong-normal-ok2");
});

})();

/******/ })()
;