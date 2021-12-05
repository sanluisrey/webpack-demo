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
/*!*******************************!*\
  !*** ./index.js + 10 modules ***!
  \*******************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__.n, __webpack_require__.* */

;// CONCATENATED MODULE: external "42"
const external_42_namespaceObject = 42;
var external_42_default = /*#__PURE__*/__webpack_require__.n(external_42_namespaceObject);
;// CONCATENATED MODULE: ./module.js
const object = {
	layer: "entry-layer"
};



;
const __loaderValue = "entry";
;// CONCATENATED MODULE: ./reexport.js


;// CONCATENATED MODULE: external "43"
const external_43_namespaceObject = 43;
var external_43_default = /*#__PURE__*/__webpack_require__.n(external_43_namespaceObject);
;// CONCATENATED MODULE: ./module.js
const module_object = {
	layer: "layer"
};



;
const module_loaderValue = "ok";
;// CONCATENATED MODULE: ./reexport.js


;// CONCATENATED MODULE: ./module-layer-change.js




;// CONCATENATED MODULE: ./module.js
const module_object_0 = {
	layer: "other-layer"
};



;
const module_loaderValue_0 = "other";
;// CONCATENATED MODULE: ./reexport.js


;// CONCATENATED MODULE: ./module-other-layer-change.js




;// CONCATENATED MODULE: ./index.js
















it("should allow to duplicate modules with layers", () => {
	expect(object).toBe(object);
	expect(module_object).toBe(module_object);
	expect(module_object_0).toBe(module_object_0);

	expect(module_object).not.toBe(object);
	expect(module_object_0).not.toBe(object);
	expect(module_object_0).not.toBe(module_object);
});

it("apply rules based on layer", () => {
	expect(module_loaderValue).toBe("ok");
	expect(module_loaderValue_0).toBe("other");
	expect(__loaderValue).toBe("entry");
});

it("apply externals based on layer", () => {
	expect((external_42_default())).toBe(42);
	expect((external_42_default())).toBe(42);
	expect((external_43_default())).toBe(43);
	expect((external_43_default())).toBe(43);
});

/******/ })()
;