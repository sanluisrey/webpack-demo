import { createRequire as __WEBPACK_EXTERNAL_createRequire } from "module";
import * as __WEBPACK_EXTERNAL_MODULE_fs_promises_f8dae9d1__ from "fs/promises";
import * as __WEBPACK_EXTERNAL_MODULE_path__ from "path";
/******/ // The require scope
/******/ var __webpack_require__ = {};
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/ (() => {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		var getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ })();
/******/ 
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
  !*** ./index.js + 4 modules ***!
  \******************************/

;// CONCATENATED MODULE: external "fs/promises"
const promises_namespaceObject = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("fs/promises");
var promises_default = /*#__PURE__*/__webpack_require__.n(promises_namespaceObject);
;// CONCATENATED MODULE: external "fs/promises"
var x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var y = x => () => x
const external_fs_promises_namespaceObject_0 = x({ ["default"]: () => __WEBPACK_EXTERNAL_MODULE_fs_promises_f8dae9d1__["default"] });
;// CONCATENATED MODULE: external "path"
const external_path_namespaceObject = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("path");
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_namespaceObject);
;// CONCATENATED MODULE: external "path"
var external_path_x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var external_path_y = x => () => x
const external_path_namespaceObject_1 = external_path_x({ ["default"]: () => __WEBPACK_EXTERNAL_MODULE_path__["default"] });
;// CONCATENATED MODULE: ./index.js







it("should be possible to import multiple module externals", () => {
	expect(external_fs_promises_namespaceObject_0["default"]).toBe((promises_default()));
	expect(external_path_namespaceObject_1["default"]).toBe((external_path_default()));
	expect(external_fs_promises_namespaceObject_0["default"]).toBe((promises_default()));
});

