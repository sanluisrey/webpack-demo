/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/*!**************************************!*\
  !*** ./parsing/issue-4596/module.js ***!
  \**************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {



/***/ })
/******/ 	]);
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************************!*\
  !*** ./parsing/issue-4596/index.js ***!
  \*************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-7:3 */
it("should evaluate require.resolve as truthy value", function() {
	var id;
	if(true)
		id = /*require.resolve*/(/*! ./module.js */ 0);

	expect(typeof id === "number" || typeof id === "string").toBeTruthy();
});

it("should evaluate require.resolve in ?: expression", function() {
	var id =  true ? /*require.resolve*/(/*! ./module.js */ 0) : 0;

	expect(typeof id === "number" || typeof id === "string").toBeTruthy();
});

})();

/******/ })()
;