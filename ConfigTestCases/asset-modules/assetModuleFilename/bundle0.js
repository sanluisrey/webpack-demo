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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _images_file_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_images/file.png */ \"../_images/file.png\");\n/* harmony import */ var _images_file_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_images/file.svg */ \"../_images/file.svg\");\n/* harmony import */ var _images_file_svg_custom2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_images/file.svg?custom2 */ \"../_images/file.svg?custom2\");\n\n\n\n\nit(\"should change filenames\", () => {\n\texpect(_images_file_png__WEBPACK_IMPORTED_MODULE_0__).toEqual(\"images/[ext]/success-png.png\");\n\texpect(_images_file_svg__WEBPACK_IMPORTED_MODULE_1__).toEqual(\"images/success-svg.svg\");\n\texpect(_images_file_svg_custom2__WEBPACK_IMPORTED_MODULE_2__).toEqual(\"custom-images/success.svg\");\n});\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "../_images/file.png":
/*!***************************!*\
  !*** ../_images/file.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = \"\" + __webpack_require__.p + \"images/[ext]/success-png.png\";\n\n//# sourceURL=webpack:///../_images/file.png?");

/***/ }),

/***/ "../_images/file.svg":
/*!***************************!*\
  !*** ../_images/file.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = \"\" + __webpack_require__.p + \"images/success-svg.svg\";\n\n//# sourceURL=webpack:///../_images/file.svg?");

/***/ }),

/***/ "../_images/file.svg?custom2":
/*!***********************************!*\
  !*** ../_images/file.svg?custom2 ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = \"\" + __webpack_require__.p + \"custom-images/success.svg\";\n\n//# sourceURL=webpack:///../_images/file.svg?");

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;