(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["main"] = factory();
	else
		root["Foo"] = root["Foo"] || {}, root["Foo"]["main"] = factory();
})(global, function() {
return /******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!******************!*\
  !*** ./index.js ***!
  \******************/
it("should compile successfully when output.library.root is an array of strings", function () { });

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=bundle0.js.map