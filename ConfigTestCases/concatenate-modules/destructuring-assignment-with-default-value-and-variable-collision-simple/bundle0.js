/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!******************************!*\
  !*** ./index.js + 2 modules ***!
  \******************************/

;// CONCATENATED MODULE: ./module-a.js
const variableClash = "valueFromSomeFile";

/* harmony default export */ const module_a = (variableClash);

;// CONCATENATED MODULE: ./config.js
/* harmony default export */ const config = ({
	variableClash: "Correct value"
});

;// CONCATENATED MODULE: ./index.js



const { variableClash: index_variableClash = "defaultValue" } = config;

it("renames a destructured assignment with default value correctly", () => {
	expect(module_a).toBe("valueFromSomeFile");
	expect(index_variableClash).toBe("Correct value");
});

/******/ })()
;