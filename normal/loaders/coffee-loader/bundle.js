/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/*!******************************************!*\
  !*** ./loaders/_resources/script.coffee ***!
  \******************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 10:2-16 */
/*! Statement (ExpressionStatement) with side effects in source code at 3:0-17 */
/***/ ((module) => {

var condition, obj;

condition = true;

obj = {
  text: "coffee test"
};

if (condition != null) {
  module.exports = obj.text;
}


/***/ }),
/* 1 */
/*!******************************************************************************************************!*\
  !*** ../../node_modules/coffee-loader/dist/cjs.js?literate!./loaders/coffee-loader/script.coffee.md ***!
  \******************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 15:2-16 */
/*! Statement (ExpressionStatement) with side effects in source code at 6:0-17 */
/***/ ((module) => {

// # literate coffeescript test

// Set some `condition` to `true
var condition, obj;

condition = true;

// Create an object with some text
obj = {
  text: "literate coffee test"
};

if (condition != null) {
  // Export the text if the condition is true
  module.exports = obj.text;
}


/***/ }),
/* 2 */
/*!***********************************************************************************************!*\
  !*** ../../node_modules/coffee-loader/dist/cjs.js!./loaders/coffee-loader/module-only.coffee ***!
  \***********************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module.loaded, module.id, module, __webpack_require__.nmd, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-7 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
module;



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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************************!*\
  !*** ./loaders/coffee-loader/index.js ***!
  \****************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-4:3 */
it("should handle the coffee loader correctly", function() {
	expect(__webpack_require__(/*! !coffee-loader!../_resources/script.coffee */ 0)).toBe("coffee test");
	expect(__webpack_require__(/*! ../_resources/script.coffee */ 0)).toBe("coffee test");
});

it("should handle literate coffee script correctly", function() {
	expect(__webpack_require__(/*! !coffee-loader?literate!./script.coffee.md */ 1)).toBe("literate coffee test");
});

it("should generate valid code with cheap-source-map", function() {
	__webpack_require__(/*! !coffee-loader!./module-only.coffee */ 2);
});

})();

/******/ })()
;