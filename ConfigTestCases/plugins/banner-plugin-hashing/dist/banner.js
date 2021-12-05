/*! fullhash:f36537b199bb0c813734, chunkhash:5d35be0c75082cd4da40, name:dist/banner, base:banner.js, query:?value, file:dist/banner.js, path:dist/, ext:.js */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 393:
/*!*****************!*\
  !*** ./test.js ***!
  \*****************/
/***/ ((module) => {

var foo = {};

module.exports = foo;


/***/ }),

/***/ 147:
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
const parseBanner = banner => {
	return banner
		.slice(4, -3)
		.split(", ")
		.map(n => n.split(":"))
		.reduce((acc, val) => {
			acc[val[0]] = val[1];
			return acc;
		}, {});
};

var source = (__webpack_require__(/*! fs */ 147).readFileSync)(__filename, "utf-8")
	.split("\n")
	.slice(0, 1)[0];

const banner = parseBanner(source);
const REGEXP_HASH = /^[A-Za-z0-9]{20}$/;

it("should interpolate file hash in chunk banner", () => {
	expect(REGEXP_HASH.test(banner["fullhash"])).toBe(true);
});

it("should interpolate chunkHash in chunk banner", () => {
	expect(REGEXP_HASH.test(banner["chunkhash"])).toBe(true);
});

it("should interpolate file into chunk banner", () => {
	expect(banner["file"]).toBe("dist/banner.js");
});

it("should interpolate name in chunk banner", () => {
	expect(banner["name"]).toBe("dist/banner");
});

it("should interpolate basename in chunk banner", () => {
	expect(banner["base"]).toBe("banner.js");
});

it("should interpolate query in chunk banner", () => {
	expect(banner["query"]).toBe("?value");
});

it("should interpolate path in chunk banner", () => {
	expect(banner["path"]).toBe("dist/");
});

it("should interpolate ext in chunk banner", () => {
	expect(banner["ext"]).toBe(".js");
});

it("should parse entry into file in chunk banner", () => {
	expect(banner["file"]).not.toBe(banner["base"]);
});

it("should parse entry into name in chunk banner", () => {
	expect(banner["base"]).not.toBe(banner["name"]);
});

if (Math.random() < 0) __webpack_require__(/*! ./test.js */ 393);

})();

/******/ })()
;