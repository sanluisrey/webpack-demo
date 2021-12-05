/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/*!******************************************************************************!*\
  !*** ./errors/load-module-error/loader.js!./errors/load-module-error/a.json ***!
  \******************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

throw new Error("Module build failed (from ./errors/load-module-error/loader.js):\nError: The loaded module contains errors\n    at /Users/yoh/Projects/repos/webpack/lib/dependencies/LoaderPlugin.js:108:11\n    at /Users/yoh/Projects/repos/webpack/lib/Compilation.js:1930:5\n    at /Users/yoh/Projects/repos/webpack/lib/util/AsyncQueue.js:352:5\n    at Hook.eval [as callAsync] (eval at create (/Users/yoh/Projects/repos/webpack/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)\n    at AsyncQueue._handleResult (/Users/yoh/Projects/repos/webpack/lib/util/AsyncQueue.js:322:21)\n    at /Users/yoh/Projects/repos/webpack/lib/util/AsyncQueue.js:305:11\n    at /Users/yoh/Projects/repos/webpack/lib/Compilation.js:1392:15\n    at /Users/yoh/Projects/repos/webpack/lib/HookWebpackError.js:68:3\n    at Hook.eval [as callAsync] (eval at create (/Users/yoh/Projects/repos/webpack/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)\n    at Cache.store (/Users/yoh/Projects/repos/webpack/lib/Cache.js:107:20)");

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************************!*\
  !*** ./errors/load-module-error/index.js ***!
  \*******************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-5:3 */
it("should error loadModule when the referenced module contains errors", () => {
	expect(function() {
		__webpack_require__(/*! ./loader!./a */ 1)
	}).toThrowError();
});

})();

/******/ })()
;