/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({});
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!************************************!*\
  !*** ./parsing/issue-551/index.js ***!
  \************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__.p, __webpack_require__, __webpack_require__.* */
/*! Statement (VariableDeclaration) with side effects in source code at 1:0-16 */
var window = {};

it("should be able to set the public path", function() {
	var originalValue = __webpack_require__.p;

	global.xyz = "xyz";
	__webpack_require__.p = global.xyz;
	expect(__webpack_require__.p).toBe("xyz");
	delete global.xyz;

	window.something = "something";
	__webpack_require__.p = window.something;
	expect(__webpack_require__.p).toBe("something");
	delete window.something;

	__webpack_require__.p = "abc";
	expect(__webpack_require__.p).toBe("abc");

	__webpack_require__.p = func();
	expect(__webpack_require__.p).toBe("func");

	__webpack_require__.p = originalValue;

	function func() {
		return "func";
	}
});

/******/ })()
;