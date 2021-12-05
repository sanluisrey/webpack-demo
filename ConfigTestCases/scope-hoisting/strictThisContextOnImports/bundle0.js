/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!******************************!*\
  !*** ./index.js + 1 modules ***!
  \******************************/

// NAMESPACE OBJECT: ./module.js
var module_namespaceObject = {};
__webpack_require__.r(module_namespaceObject);
__webpack_require__.d(module_namespaceObject, {
  "default": () => (module_0),
  "identity": () => (identity)
});

;// CONCATENATED MODULE: ./module.js
function identity(a) { return a; }
/* harmony default export */ const module_0 = (1234);

;// CONCATENATED MODULE: ./index.js



it("should parse and translate identifiers correctly", function() {
	expect(identity(module_0)).toBe(1234);
	expect(module_namespaceObject.identity(module_0)).toBe(1234);
	expect(module_namespaceObject.identity(identity)).toBe(identity);
	expect(module_namespaceObject.identity(identity)).toBe(identity);
	expect(identity(identity)).toBe(identity);
	expect(identity(module_0)).toBe(1234);
});

/******/ })()
;