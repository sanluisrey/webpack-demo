/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 461:
/*!**********************************!*\
  !*** ./node_modules/external.js ***!
  \**********************************/
/***/ ((module) => {

module.exports = ["external"];


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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************************!*\
  !*** ./index.js + 1 modules ***!
  \******************************/

;// CONCATENATED MODULE: external "(require(\"../0-create-library/global-runtimeChunk/runtime.js\"), require(\"../0-create-library/global-runtimeChunk/main.js\"), globalName.x.y)"
const main_js_globalName_x_y_namespaceObject = (require("../0-create-library/global-runtimeChunk/runtime.js"), require("../0-create-library/global-runtimeChunk/main.js"), globalName.x.y);
var main_js_globalName_x_y_default = /*#__PURE__*/__webpack_require__.n(main_js_globalName_x_y_namespaceObject);
;// CONCATENATED MODULE: ./index.js



it(
	"should be able to import harmony exports from library (" + "global-runtimeChunk" + ")",
	function () {
		expect((main_js_globalName_x_y_default())).toBe("default-value");
		expect(main_js_globalName_x_y_namespaceObject.a).toBe("a");
		expect(main_js_globalName_x_y_namespaceObject.b).toBe("b");
		if (typeof TEST_EXTERNAL !== "undefined" && TEST_EXTERNAL) {
			expect(main_js_globalName_x_y_namespaceObject.external).toEqual(["external"]);
			expect(main_js_globalName_x_y_namespaceObject.external).toBe(__webpack_require__(/*! external */ 461));
		} else {
			expect(main_js_globalName_x_y_namespaceObject.external).toBe("non-external");
		}
	}
);

})();

/******/ })()
;