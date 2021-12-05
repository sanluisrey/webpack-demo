/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var dll_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dll/index */ "dll/index.js");


it("should load a module from dll", function() {
	expect(__webpack_require__(/*! dll/index */ "dll/index.js")).toEqual(nsObj({ bar: "bar", default: 42 }));
});

it("should load an harmony module from dll (default export)", function() {
	expect(dll_index__WEBPACK_IMPORTED_MODULE_0__["default"]).toBe(42);
});

it("should load an harmony module from dll (star export)", function() {
	expect(dll_index__WEBPACK_IMPORTED_MODULE_0__.bar).toBe("bar");
});

it("should give modules the correct ids", function() {
	expect(
		Object.keys(__webpack_require__.m)
			.filter(m => !m.startsWith("../.."))
			.sort()
	).toEqual([
		"./index.js",
		"dll-reference ../0-create-dll/dll.js",
		"dll/index.js"
	]);
});


/***/ }),

/***/ "dll/index.js":
/*!**********************************************************************!*\
  !*** delegated ./index.js from dll-reference ../0-create-dll/dll.js ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = (__webpack_require__(/*! dll-reference ../0-create-dll/dll.js */ "dll-reference ../0-create-dll/dll.js"))(158);

/***/ }),

/***/ "dll-reference ../0-create-dll/dll.js":
/*!*****************************************!*\
  !*** external "../0-create-dll/dll.js" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("../0-create-dll/dll.js");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module factories are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;