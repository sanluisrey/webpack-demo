/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 89:
/*!******************!*\
  !*** ./empty.js ***!
  \******************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (() => {



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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************************!*\
  !*** ./index.js + 2 modules ***!
  \******************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__ */
/*! ModuleConcatenation bailout: Cannot concat with ./empty.js: Module is not an ECMAScript module */

;// CONCATENATED MODULE: ./a.js
const a = "a";

;// CONCATENATED MODULE: ./b.js
const b = "b";

// EXTERNAL MODULE: ./empty.js
var empty = __webpack_require__(89);
;// CONCATENATED MODULE: ./index.js



it("should skip over module", () => {
	empty.a = "not a";
	empty.b = "not b";
	expect(a).toBe("a");
	expect(b).toBe("b");
	expect(__STATS__.children.length).toBe(2);
	for (const stats of __STATS__.children) {
		const module = stats.modules.find(m => m.name.endsWith("module.js"));
		expect(module).toHaveProperty("orphan", true);
	}
});

})();

/******/ })()
;