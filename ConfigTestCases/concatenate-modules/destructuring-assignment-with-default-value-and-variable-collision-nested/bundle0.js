/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!******************************!*\
  !*** ./index.js + 2 modules ***!
  \******************************/

;// CONCATENATED MODULE: ./module-a.js
const deeply = "Ignore me please";
const nested = "Ignore me please";
const thing = "Ignore me please";

;// CONCATENATED MODULE: ./config.js
/* harmony default export */ const config = ({
  deeply: {
    nested: {
      thing: 'Correct value',
    },
  },
});

;// CONCATENATED MODULE: ./index.js



const {
	deeply: {
		nested: { thing: index_thing = "defaultValue" }
	}
} = config;

it("renames a nested destructured assignment with default value correctly", () => {
	expect(deeply).toBe("Ignore me please");
	expect(nested).toBe("Ignore me please");
	expect(thing).toBe("Ignore me please");

	expect(index_thing).toBe("Correct value");
});

/******/ })()
;