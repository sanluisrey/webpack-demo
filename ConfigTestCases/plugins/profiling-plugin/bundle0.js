/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 611:
/*!******************************!*\
  !*** ./index.js + 1 modules ***!
  \******************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


;// CONCATENATED MODULE: ./test.json
const test_namespaceObject = {};
;// CONCATENATED MODULE: ./index.js


it("should generate a events.json file", () => {
	var fs = __webpack_require__(/*! fs */ 147);
	var path = __webpack_require__(/*! path */ 17);

	expect(fs.existsSync(path.join(__dirname, "in/directory/events.json"))).toBe(
		true
	);
});

it("should have proper setup record inside of the json stream", () => {
	var fs = __webpack_require__(/*! fs */ 147);
	var path = __webpack_require__(/*! path */ 17);

	var source = JSON.parse(
		fs.readFileSync(path.join(__dirname, "in/directory/events.json"), "utf-8")
	);
	expect(source[0].id).toEqual(1);
});


/***/ }),

/***/ 147:
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 17:
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module doesn't tell about it's top-level declarations so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(611);
/******/ 	
/******/ })()
;