import * as __WEBPACK_EXTERNAL_MODULE__imported_mjs_fe6de46d__ from "./imported.mjs";
/******/ // The require scope
/******/ var __webpack_require__ = {};
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
/*!******************************!*\
  !*** ./index.js + 2 modules ***!
  \******************************/

;// CONCATENATED MODULE: external "./imported.mjs"
var x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var y = x => () => x
const external_imported_mjs_namespaceObject = x({ ["default"]: () => __WEBPACK_EXTERNAL_MODULE__imported_mjs_fe6de46d__["default"] });
;// CONCATENATED MODULE: ./module.js
/* harmony default export */ const module_0 = (40);

;// CONCATENATED MODULE: ./index.js



it("should allow to use externals in concatenated modules", () => {
	expect(external_imported_mjs_namespaceObject["default"]).toBe(42);
	expect(module_0).toBe(40);
});

