(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./index-umd.js ***!
  \**********************/
// This test verifies that the System.register context is not available for non-system entries

it("should not be able to use the System.register context in entries where library.type is not system", function() {
  expect(__webpack_require__.y).toBeUndefined();
});

/******/ 	return __webpack_exports__;
/******/ })()
;
});