/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 488:
/*!***********************!*\
  !*** ./file.png?used ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = "" + __webpack_require__.p + "89a353e9c515885abd8e.png?used";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/readFile chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = require("url").pathToFileURL(__filename);
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "0" means "already loaded", Promise means loading
/******/ 		var installedChunks = {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no chunk install function needed
/******/ 		
/******/ 		// no chunk loading
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./index.js + 1 modules ***!
  \******************************/

;// CONCATENATED MODULE: ./module.js
/* harmony default export */ const module_0 = ((/* unused pure expression or super */ null && (/* unused asset import */ undefined)));
const named = (/* unused pure expression or super */ null && (/* unused asset import */ undefined));
const indirect = (/* unused pure expression or super */ null && (fn));
const used = new URL(/* asset import */ __webpack_require__(/*! file.png?used */ 488), __webpack_require__.b);

function fn() {
	return /* unused asset import */ undefined;
}

;// CONCATENATED MODULE: ./index.js


it("should not include unused assets", () => {
	expect(used.href).toMatch(/png/);
	expect(__STATS__.modules.find(m => m.name.includes("file.png?used"))).toEqual(
		expect.objectContaining({
			orphan: false
		})
	);
	expect(
		__STATS__.modules.find(m => m.name.includes("file.png?default"))
	).toEqual(
		expect.objectContaining({
			orphan: true
		})
	);
	expect(
		__STATS__.modules.find(m => m.name.includes("file.png?named"))
	).toEqual(
		expect.objectContaining({
			orphan: true
		})
	);
	expect(
		__STATS__.modules.find(m => m.name.includes("file.png?indirect"))
	).toEqual(
		expect.objectContaining({
			orphan: true
		})
	);
});

})();

/******/ })()
;