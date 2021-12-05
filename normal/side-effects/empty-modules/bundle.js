/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/*!*******************************************************!*\
  !*** ./side-effects/empty-modules/side-referenced.js ***!
  \*******************************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.* */
/*! Dependency (harmony side effect evaluation) with side effects at 1:0-16 */
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _side__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./side */ 2);
/* harmony import */ var _side__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_side__WEBPACK_IMPORTED_MODULE_0__);



/***/ }),
/* 2 */
/*!********************************************!*\
  !*** ./side-effects/empty-modules/side.js ***!
  \********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-20 */
/***/ (() => {

global.value = true;


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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************************************!*\
  !*** ./side-effects/empty-modules/index.js ***!
  \*********************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__ */
/*! Statement (IfStatement) with side effects in source code at 7:0-14:1 */
/* harmony import */ var _side_referenced__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./side-referenced */ 1);






if (process.env.NODE_ENV === "production") {
	it("should skip imports to empty modules", () => {
		expect(/*require.resolve*/(null /* weak dependency, without id */)).toBe(null);
		expect(/*require.resolve*/(null /* weak dependency, without id */)).toBe(null);
		expect(/*require.resolve*/(null /* weak dependency, without id */)).toBe(null);
		expect(/*require.resolve*/(null /* weak dependency, without id */)).toBe(null);
	});
}

it("should not skip transitive side effects", () => {
	expect(global.value).toBe(true);
	delete global.value;
});

})();

/******/ })()
;