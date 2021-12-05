/*!
 * trim trailing whitespace
 *
 * no trailing whitespace
 */
/*!
 * trim trailing whitespace
 *
 * trailing whitespace
 */
/*!
 * multiline
 * banner
 * bundle0
 */
/*! A test value */
/*! banner is a function */
/*! banner is a string */
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

/***/ }),

/***/ 17:
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

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
const fs = __webpack_require__(/*! fs */ 147);
const path = __webpack_require__(/*! path */ 17);

it("should contain banner in bundle0 chunk", () => {
	const source = fs.readFileSync(__filename, "utf-8");
	expect(source).toMatch("A test value");
	expect(source).toMatch("banner is a string");
	expect(source).toMatch("banner is a function");
	expect(source).toMatch("/*!\n * multiline\n * banner\n * bundle0\n */");
	expect(source).toMatch(
		"/*!\n * trim trailing whitespace\n *\n * trailing whitespace\n */"
	);
	expect(source).toMatch(
		"/*!\n * trim trailing whitespace\n *\n * no trailing whitespace\n */"
	);
});

it("should not contain banner in vendors chunk", () => {
	const source = fs.readFileSync(path.join(__dirname, "vendors.js"), "utf-8");
	expect(source).not.toMatch("A test value");
});

if (Math.random() < 0) __webpack_require__(/*! ./test.js */ 393);

})();

/******/ })()
;