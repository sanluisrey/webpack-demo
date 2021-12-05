(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["test-library"] = factory();
	else
		root["testLibrary"] = factory();
})(global, function() {
return /******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!******************!*\
  !*** ./index.js ***!
  \******************/
it("should run", function() {

});
/******/ 	return __webpack_exports__;
/******/ })()
;
});