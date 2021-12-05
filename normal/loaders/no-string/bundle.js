/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/*!*****************************************************************!*\
  !*** ./loaders/no-string/loader.js!./loaders/no-string/file.js ***!
  \*****************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

throw new Error("Module build failed: Error: Final loader (./loaders/no-string/loader.js) didn't return a Buffer or String\n    at processResult (/Users/yoh/Projects/repos/webpack/lib/NormalModule.js:767:17)\n    at /Users/yoh/Projects/repos/webpack/lib/NormalModule.js:853:5\n    at /Users/yoh/Projects/repos/webpack/node_modules/loader-runner/lib/LoaderRunner.js:406:3\n    at iterateNormalLoaders (/Users/yoh/Projects/repos/webpack/node_modules/loader-runner/lib/LoaderRunner.js:232:10)\n    at iterateNormalLoaders (/Users/yoh/Projects/repos/webpack/node_modules/loader-runner/lib/LoaderRunner.js:239:10)\n    at /Users/yoh/Projects/repos/webpack/node_modules/loader-runner/lib/LoaderRunner.js:254:3\n    at runSyncOrAsync (/Users/yoh/Projects/repos/webpack/node_modules/loader-runner/lib/LoaderRunner.js:143:11)\n    at iterateNormalLoaders (/Users/yoh/Projects/repos/webpack/node_modules/loader-runner/lib/LoaderRunner.js:250:2)\n    at /Users/yoh/Projects/repos/webpack/node_modules/loader-runner/lib/LoaderRunner.js:223:4\n    at /Users/yoh/Projects/repos/webpack/lib/NormalModule.js:827:15\n    at eval (<anonymous>:12:1)\n    at runCallbacks (/Users/yoh/Projects/repos/webpack/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:34:4)\n    at /Users/yoh/Projects/repos/webpack/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:200:4\n    at /Users/yoh/Projects/repos/webpack/node_modules/graceful-fs/graceful-fs.js:123:16\n    at FSReqCallback.readFileAfterClose [as oncomplete] (node:internal/fs/read_file_context:68:3)\n");

/***/ }),
/* 2 */
/*!*****************************************************************************************************!*\
  !*** ./loaders/no-string/loader.js!./loaders/no-string/pitch-loader.js!./loaders/no-string/file.js ***!
  \*****************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

throw new Error("Module build failed: Error: Final loader (./loaders/no-string/loader.js) didn't return a Buffer or String\n    at processResult (/Users/yoh/Projects/repos/webpack/lib/NormalModule.js:767:17)\n    at /Users/yoh/Projects/repos/webpack/lib/NormalModule.js:853:5\n    at /Users/yoh/Projects/repos/webpack/node_modules/loader-runner/lib/LoaderRunner.js:406:3\n    at iterateNormalLoaders (/Users/yoh/Projects/repos/webpack/node_modules/loader-runner/lib/LoaderRunner.js:232:10)\n    at iterateNormalLoaders (/Users/yoh/Projects/repos/webpack/node_modules/loader-runner/lib/LoaderRunner.js:239:10)\n    at /Users/yoh/Projects/repos/webpack/node_modules/loader-runner/lib/LoaderRunner.js:254:3\n    at runSyncOrAsync (/Users/yoh/Projects/repos/webpack/node_modules/loader-runner/lib/LoaderRunner.js:143:11)\n    at iterateNormalLoaders (/Users/yoh/Projects/repos/webpack/node_modules/loader-runner/lib/LoaderRunner.js:250:2)\n    at iterateNormalLoaders (/Users/yoh/Projects/repos/webpack/node_modules/loader-runner/lib/LoaderRunner.js:239:10)\n    at /Users/yoh/Projects/repos/webpack/node_modules/loader-runner/lib/LoaderRunner.js:254:3\n    at runSyncOrAsync (/Users/yoh/Projects/repos/webpack/node_modules/loader-runner/lib/LoaderRunner.js:143:11)\n    at iterateNormalLoaders (/Users/yoh/Projects/repos/webpack/node_modules/loader-runner/lib/LoaderRunner.js:250:2)\n    at /Users/yoh/Projects/repos/webpack/node_modules/loader-runner/lib/LoaderRunner.js:223:4\n    at /Users/yoh/Projects/repos/webpack/lib/NormalModule.js:827:15\n    at eval (<anonymous>:12:1)\n    at runCallbacks (/Users/yoh/Projects/repos/webpack/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:34:4)\n    at /Users/yoh/Projects/repos/webpack/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:200:4\n    at /Users/yoh/Projects/repos/webpack/node_modules/graceful-fs/graceful-fs.js:123:16\n    at FSReqCallback.readFileAfterClose [as oncomplete] (node:internal/fs/read_file_context:68:3)\n");

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
/*!************************************!*\
  !*** ./loaders/no-string/index.js ***!
  \************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-8:3 */
it("should emit the correct error for loaders not returning buffer or string", function() {
	expect(() => __webpack_require__(/*! ./loader.js!./file.js */ 1)).toThrowError(
		/Module build failed/
	);
	expect(() => __webpack_require__(/*! ./loader.js!./pitch-loader.js!./file.js */ 2)).toThrowError(
		/Module build failed/
	);
});

})();

/******/ })()
;