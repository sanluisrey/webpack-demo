/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/*!**************************!*\
  !*** ./json/data/a.json ***!
  \**************************/
/*! default exports */
/*! exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
module.exports = null;

/***/ }),
/* 2 */
/*!**************************!*\
  !*** ./json/data/b.json ***!
  \**************************/
/*! default exports */
/*! exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
module.exports = 123;

/***/ }),
/* 3 */
/*!**************************!*\
  !*** ./json/data/c.json ***!
  \**************************/
/*! default exports */
/*! export 0 [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export 1 [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export 2 [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export 3 [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
module.exports = [1,2,3,4];

/***/ }),
/* 4 */
/*!**************************!*\
  !*** ./json/data/e.json ***!
  \**************************/
/*! default exports */
/*! export 1 [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export aa [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export bb [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"1":"x","bb":2,"aa":1}');

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
/*!****************************!*\
  !*** ./json/data/index.js ***!
  \****************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-10:3 */
it("should require json via require", function() {
	expect({ data: __webpack_require__(/*! ./a.json */ 1) }).toEqual({ data: null });
	expect({ data: __webpack_require__(/*! ./b.json */ 2) }).toEqual({ data: 123 });
	expect({ data: __webpack_require__(/*! ./c.json */ 3) }).toEqual({ data: [1, 2, 3, 4] });
	expect({ data: __webpack_require__(/*! ./e.json */ 4) }).toEqual({ data: {
		"aa": 1,
		"bb": 2,
		"1": "x"
	} });
});

})();

/******/ })()
;