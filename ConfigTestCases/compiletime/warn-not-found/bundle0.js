/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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

// NAMESPACE OBJECT: ./stub.js
var stub_namespaceObject = {};
__webpack_require__.r(stub_namespaceObject);

;// CONCATENATED MODULE: ./stub.js
const foo = 'bar'

/* harmony default export */ const stub = ((/* unused pure expression or super */ null && (foo)));

;// CONCATENATED MODULE: ./index.js


it('should do nothing', function() {
  if (typeof stub_namespaceObject.NotHere !== 'undefined') {
    throw new Error('This shouldn\'t be here!');
  }
});

/******/ })()
;