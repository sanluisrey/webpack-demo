/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.errors.js":
/*!*************************!*\
  !*** ./index.errors.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var http_localhost_9990_asset_txt_ignore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http://localhost:9990/asset.txt?ignore */ \"http://localhost:9990/asset.txt?ignore\");\n/* harmony import */ var http_localhost_9990_index_css_query_fragment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! http://localhost:9990/index.css?query#fragment */ \"http://localhost:9990/index.css?query#fragment\");\nit(\"error when lockfile is outdated/invalid\", () => {\n\texpect(() => {\n\t\t__webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'http://localhost:9990/index.css?cache'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\t}).toThrowError();\n\texpect(() => {\n\t\t__webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'http://localhost:9990/index.css?no-cache'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\t}).toThrowError();\n\texpect(() => {\n\t\t__webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'http://localhost:9990/index.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\t}).toThrowError();\n\texpect(() => {\n\t\t__webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'http://localhost:9990/resolve.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\t}).toThrowError();\n\texpect(() => {\n\t\t__webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'http://localhost:9990/fallback.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\t}).toThrowError();\n\texpect(() => {\n\t\t__webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'http://localhost:9990/redirect'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\t}).toThrowError();\n});\n\n\n\nit(\"should allow to ignore lockfile entries\", () => {\n\texpect(http_localhost_9990_asset_txt_ignore__WEBPACK_IMPORTED_MODULE_0__.trim()).toBe(\"Hello World\");\n});\n\n\n\nit(\"should use the entry with query and fragment\", () => {\n\texpect(http_localhost_9990_index_css_query_fragment__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).toBe(\"a {}.webpack{}\");\n});\n\n\n//# sourceURL=webpack:///./index.errors.js?");

/***/ }),

/***/ "http://localhost:9990/index.css?query#fragment":
/*!******************************************************!*\
  !*** http://localhost:9990/index.css?query#fragment ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"a {}.webpack{}\");\n\n//# sourceURL=webpack:///http://localhost:9990/index.css?");

/***/ }),

/***/ "http://localhost:9990/asset.txt?ignore":
/*!**********************************************!*\
  !*** http://localhost:9990/asset.txt?ignore ***!
  \**********************************************/
/***/ ((module) => {

eval("module.exports = \"Hello World\";\n\n//# sourceURL=webpack:///http://localhost:9990/asset.txt?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.errors.js");
/******/ 	
/******/ })()
;