/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./loader-no-source-root.js!":
/*!***********************************!*\
  !*** ./loader-no-source-root.js! ***!
  \***********************************/
/***/ ((module) => {

module.exports = 'ok';

/***/ }),

/***/ "./loader-pre-relative.js!":
/*!*********************************!*\
  !*** ./loader-pre-relative.js! ***!
  \*********************************/
/***/ ((module) => {

module.exports = 'ok';

/***/ }),

/***/ "./loader-source-root-2-slash.js!":
/*!****************************************!*\
  !*** ./loader-source-root-2-slash.js! ***!
  \****************************************/
/***/ ((module) => {

module.exports = 'ok';

/***/ }),

/***/ "./loader-source-root-slash.js!":
/*!**************************************!*\
  !*** ./loader-source-root-slash.js! ***!
  \**************************************/
/***/ ((module) => {

module.exports = 'ok';

/***/ }),

/***/ "./loader-source-root-source-slash.js!":
/*!*********************************************!*\
  !*** ./loader-source-root-source-slash.js! ***!
  \*********************************************/
/***/ ((module) => {

module.exports = 'ok';

/***/ }),

/***/ "./loader-source-root.js!":
/*!********************************!*\
  !*** ./loader-source-root.js! ***!
  \********************************/
/***/ ((module) => {

module.exports = 'ok';

/***/ }),

/***/ "fs":
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
it("should run", () => {
	__webpack_require__(/*! ./loader-source-root! */ "./loader-source-root.js!");
	__webpack_require__(/*! ./loader-source-root-slash! */ "./loader-source-root-slash.js!");
	__webpack_require__(/*! ./loader-source-root-source-slash! */ "./loader-source-root-source-slash.js!");
	__webpack_require__(/*! ./loader-source-root-2-slash! */ "./loader-source-root-2-slash.js!");
	__webpack_require__(/*! ./loader-no-source-root! */ "./loader-no-source-root.js!");
	__webpack_require__(/*! ./loader-pre-relative! */ "./loader-pre-relative.js!");
});

it("should generate the correct SourceMap", function() {
	var fs = __webpack_require__(/*! fs */ "fs");
	var source = JSON.parse(fs.readFileSync(__filename + ".map", "utf-8"));
	expect(source.sources).toContain("webpack:///./folder/test1.txt");
	expect(source.sources).toContain("webpack:///./folder/test2.txt");
	expect(source.sources).toContain("webpack:///./folder/test3.txt");
	expect(source.sources).toContain("webpack:///./folder/test4.txt");
	expect(source.sources).toContain("webpack:///./folder/test5.txt");
	expect(source.sources).toContain("webpack:///./folder/test6.txt");
});

})();

/******/ })()
;
//# sourceMappingURL=bundle0.js.map