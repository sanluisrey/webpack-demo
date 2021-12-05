/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!******************************!*\
  !*** ./index.js + 3 modules ***!
  \******************************/

;// CONCATENATED MODULE: external "'abc'"
const external_abc_namespaceObject = 'abc';
var external_abc_default = /*#__PURE__*/__webpack_require__.n(external_abc_namespaceObject);
;// CONCATENATED MODULE: external "{ default: 'default', named: 'named' }"
const external_default_default_named_named_namespaceObject = { default: 'default', named: 'named' };
var external_default_default_named_named_default = /*#__PURE__*/__webpack_require__.n(external_default_default_named_named_namespaceObject);
;// CONCATENATED MODULE: external "{ __esModule: true, default: 'default', named: 'named' }"
const external_esModule_true_default_default_named_named_namespaceObject = { __esModule: true, default: 'default', named: 'named' };
var external_esModule_true_default_default_named_named_default = /*#__PURE__*/__webpack_require__.n(external_esModule_true_default_default_named_named_namespaceObject);
;// CONCATENATED MODULE: ./index.js


it("should harmony import a external value", function () {
	expect((external_abc_default())).toBe("abc");
	expect(external_abc_namespaceObject.named).toBe(undefined);
});



it("should harmony import a external value", function () {
	expect((external_default_default_named_named_default())).toMatchObject({
		named: "named",
		default: "default"
	});
	expect(external_default_default_named_named_namespaceObject.named).toBe("named");
});



it("should harmony import a external value", function () {
	expect((external_esModule_true_default_default_named_named_default())).toBe("default");
	expect(external_esModule_true_default_default_named_named_namespaceObject.named).toBe("named");
});

/******/ })()
;