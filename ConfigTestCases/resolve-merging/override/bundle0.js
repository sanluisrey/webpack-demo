/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 958:
/*!****************************!*\
  !*** ./node_modules/ok.js ***!
  \****************************/
/***/ ((module) => {

module.exports = "ok";


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
  !*** ./index.js + 6 modules ***!
  \******************************/

;// CONCATENATED MODULE: ./package/module.js
/* harmony default export */ const package_module = ("module");

;// CONCATENATED MODULE: ./package/index.js
/* harmony default export */ const package_0 = ("index");

;// CONCATENATED MODULE: ./package/other.js
/* harmony default export */ const other = ("other");

;// CONCATENATED MODULE: ./node_modules/package2/require.js
/* harmony default export */ const package2_require = ("require");

;// CONCATENATED MODULE: ./node_modules/package2/style.js
/* harmony default export */ const style = ("style");

;// CONCATENATED MODULE: ./node_modules/package2/default.js
/* harmony default export */ const package2_default = ("default");

;// CONCATENATED MODULE: ./index.js







it("should use byDependency defaults", () => {
	expect(package_module).toBe("module");
});

it("should override byDependency defaults", () => {
	expect(package_0).toBe("index");
});

it("should merge in the correct order", () => {
	expect(other).toBe("other");
});

it("should keep byDependency intact", () => {
	expect(package_module).toBe("module");
});

it("should allow to change byDependency", () => {
	expect(other).toBe("other");
});

it("should use backward-compat resolve by default in loader", () => {
	expect(package2_require).toBe("require");
	expect(package2_require).toBe("require");
});

it("should allow to override in loader", () => {
	expect(package_0).toBe("index");
});

it("should allow to use custom dependencyType", () => {
	expect(style).toBe("style");
	expect(package2_default).toBe("default");
});

it("should allow to alias 'byDependency'", () => {
	expect(__webpack_require__(/*! byDependency */ 958)).toBe("ok");
});

})();

/******/ })()
;