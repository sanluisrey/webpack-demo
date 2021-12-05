System.register([], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {


	return {

		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/__system_context__ */
/******/ 	(() => {
/******/ 		__webpack_require__.y = __system_context__;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*************************!*\
  !*** ./index-system.js ***!
  \*************************/
// This test verifies that the System.register context is made available to webpack bundles

it("should be able to use the System.register context in entries where library.type is system", function() {
  expect(__webpack_require__.y).toBeTruthy();
  expect(__webpack_require__.y.meta).toBeTruthy();
  expect(typeof __webpack_require__.y.import).toBe("function");
  expect(typeof __webpack_require__.y.meta.url).toBe("string");
});

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});