/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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
it("should contain publicPath prefix in [url] and resolve relatively to fileContext", function() {
	var fs = __webpack_require__(/*! fs */ 147),
			path = __webpack_require__(/*! path */ 17);
	var source = fs.readFileSync(path.join(__dirname, "public/test.js"), "utf-8");
	expect(source).toMatch("//# sourceMappingURL=https://10.10.10.10/project/sourcemaps/test.js.map");
});

it("should write sourcemap file relative fo fileContext", function() {
	var fs = __webpack_require__(/*! fs */ 147),
			path = __webpack_require__(/*! path */ 17);
	expect(fs.existsSync(path.join(__dirname, "sourcemaps/test.js.map"))).toBe(true);
});

})();

/******/ })()
;
//# sourceMappingURL=https://10.10.10.10/project/sourcemaps/../bundle0.js.map