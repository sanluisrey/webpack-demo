/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./a.js":
/*!**************!*\
  !*** ./a.js ***!
  \**************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__(/*! ./c */ \"./c.js?aff9\");\n\n\n//# sourceURL=webpack:///./a.js?");

/***/ }),

/***/ "./b.js":
/*!**************!*\
  !*** ./b.js ***!
  \**************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__(/*! ./c */ \"./c.js?a40a\");\n\n\n//# sourceURL=webpack:///./b.js?");

/***/ }),

/***/ "./c.js?da0f":
/*!**************!*\
  !*** ./c.js ***!
  \**************/
/***/ ((module) => {

eval("module.exports = module.id;\n\n\n//# sourceURL=webpack:///./c.js?");

/***/ }),

/***/ "./c.js?aff9":
/*!**************!*\
  !*** ./c.js ***!
  \**************/
/***/ ((module) => {

eval("module.exports = \"loader-a\" + module.id\n\n//# sourceURL=webpack:///./c.js?");

/***/ }),

/***/ "./c.js?a40a":
/*!**************!*\
  !*** ./c.js ***!
  \**************/
/***/ ((module) => {

eval("module.exports = \"loader-b\" + module.id\n\n//# sourceURL=webpack:///./c.js?");

/***/ }),

/***/ "./test.js":
/*!*****************!*\
  !*** ./test.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("it(\"should assign different names to the same module with different issuers \", function() {\n\tvar regex = \"\\\\./c\\\\.js\\\\?\\\\w{4}\";\n\texpect(__webpack_require__(/*! ./c */ \"./c.js?da0f\")).toMatch(new RegExp(regex));\n\texpect(__webpack_require__(/*! ./a */ \"./a.js\")).toMatch(new RegExp(\"loader-a\" + regex));\n\texpect(__webpack_require__(/*! ./b */ \"./b.js\")).toMatch(new RegExp(\"loader-b\" + regex));\n});\n\n\n//# sourceURL=webpack:///./test.js?");

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
/******/ 			id: moduleId,
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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./a.js");
/******/ 	__webpack_require__("./b.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./test.js");
/******/ 	
/******/ })()
;