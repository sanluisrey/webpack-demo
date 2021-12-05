/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/*!**************************!*\
  !*** ./json/data/c.json ***!
  \**************************/
/*! default exports */
/*! export 0 [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export 1 [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export 2 [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export 3 [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
module.exports = [1,2,3,4];

/***/ }),
/* 2 */
/*!***************************!*\
  !*** ./json/data/unknown ***!
  \***************************/
/*! default exports */
/*! export 0 [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export 1 [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export 2 [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export 3 [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
module.exports = [1,2,3,4];

/***/ }),
/* 3 */
/*!***********************************************************!*\
  !*** ./json/import-assertions-type-json/import-poison.js ***!
  \***********************************************************/
/*! namespace exports */
/*! export default [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/*! Dependency (harmony side effect evaluation) with side effects at 1:0-60 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_poison__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/poison */ 4);
/* harmony import */ var _data_poison__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_data_poison__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_data_poison__WEBPACK_IMPORTED_MODULE_0___default()));


/***/ }),
/* 4 */
/*!**************************!*\
  !*** ./json/data/poison ***!
  \**************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

throw new Error("Module parse failed: Unexpected token h in JSON at position 1 while parsing near 'throw new Error(\"impo...'\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\nSyntaxError: Unexpected token h in JSON at position 1 while parsing near 'throw new Error(\"impo...'\n    at JSON.parse (<anonymous>)\n    at parseJson (/Users/yoh/Projects/repos/webpack/node_modules/json-parse-better-errors/index.js:7:17)\n    at JsonParser.parse (/Users/yoh/Projects/repos/webpack/lib/json/JsonParser.js:43:7)\n    at /Users/yoh/Projects/repos/webpack/lib/NormalModule.js:1080:26\n    at processResult (/Users/yoh/Projects/repos/webpack/lib/NormalModule.js:793:11)\n    at /Users/yoh/Projects/repos/webpack/lib/NormalModule.js:853:5\n    at /Users/yoh/Projects/repos/webpack/node_modules/loader-runner/lib/LoaderRunner.js:406:3\n    at iterateNormalLoaders (/Users/yoh/Projects/repos/webpack/node_modules/loader-runner/lib/LoaderRunner.js:232:10)\n    at /Users/yoh/Projects/repos/webpack/node_modules/loader-runner/lib/LoaderRunner.js:223:4\n    at /Users/yoh/Projects/repos/webpack/lib/NormalModule.js:827:15");

/***/ }),
/* 5 */
/*!***************************!*\
  !*** ./json/data/unknown ***!
  \***************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

[1, 2, 3, 4]


/***/ })
/******/ 	]);
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***************************************************!*\
  !*** ./json/import-assertions-type-json/index.js ***!
  \***************************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 5:0-7:3 */
/* harmony import */ var _data_c_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/c.json */ 1);
/* harmony import */ var _data_unknown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/unknown */ 2);
/* harmony import */ var _data_unknown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/unknown */ 5);
/* harmony import */ var _data_unknown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_data_unknown__WEBPACK_IMPORTED_MODULE_2__);




it("should be possible to import json data with import assertion", function () {
	expect(_data_c_json__WEBPACK_IMPORTED_MODULE_0__).toEqual([1, 2, 3, 4]);
});

it("should be possible to import json data without extension with import assertion", function () {
	expect(_data_unknown__WEBPACK_IMPORTED_MODULE_1__).toEqual([1, 2, 3, 4]);
});

it("should be possible to import js without extension without import assertion in the same file", function () {
	expect((_data_unknown__WEBPACK_IMPORTED_MODULE_2___default())).toEqual({});
});

it("should not be possible to import js with import assertion", function () {
	expect(() => {
		__webpack_require__(/*! ./import-poison.js */ 3);
	}).toThrowError();
});

})();

/******/ })()
;