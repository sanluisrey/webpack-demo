/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/*!******************************************!*\
  !*** ./optimize/tree-shaking-star2/a.js ***!
  \******************************************/
/*! namespace exports */
/*! export aa [provided] [used in main] [could be renamed] -> ./optimize/tree-shaking-star2/aa.js .aa */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aa": () => (/* reexport safe */ _aa__WEBPACK_IMPORTED_MODULE_0__.aa)
/* harmony export */ });
/* harmony import */ var _aa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aa */ 1);



/***/ }),
/* 1 */
/*!*******************************************!*\
  !*** ./optimize/tree-shaking-star2/aa.js ***!
  \*******************************************/
/*! namespace exports */
/*! export aa [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aa": () => (/* binding */ aa)
/* harmony export */ });
var aa = "aa";


/***/ }),
/* 2 */
/*!**********************************************!*\
  !*** ./optimize/tree-shaking-star2/root2.js ***!
  \**********************************************/
/*! namespace exports */
/*! export aa [provided] [used in main] [could be renamed] -> ./optimize/tree-shaking-star2/aa.js .aa */
/*! export bb [provided] [unused] [could be renamed] -> ./optimize/tree-shaking-star2/bb.js .bb */
/*! export c [provided] [unused] [could be renamed] -> ./optimize/tree-shaking-star2/c.js .c */
/*! export d [provided] [used in main] [could be renamed] -> ./optimize/tree-shaking-star2/d.js .d */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Dependency (harmony side effect evaluation) with side effects at 4:0-20 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aa": () => (/* reexport safe */ _a__WEBPACK_IMPORTED_MODULE_0__.aa),
/* harmony export */   "d": () => (/* reexport safe */ _d__WEBPACK_IMPORTED_MODULE_1__.d)
/* harmony export */ });
/* harmony import */ var _a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a */ 0);
/* harmony import */ var _d__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./d */ 3);






/***/ }),
/* 3 */
/*!******************************************!*\
  !*** ./optimize/tree-shaking-star2/d.js ***!
  \******************************************/
/*! default exports */
/*! export d [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-16 */
/***/ ((__unused_webpack_module, exports) => {

exports.d = "d";


/***/ }),
/* 4 */
/*!**********************************************!*\
  !*** ./optimize/tree-shaking-star2/root5.js ***!
  \**********************************************/
/*! dynamic exports */
/*! export __esModule [provided] [used in main] [provision prevents renaming] -> ./optimize/tree-shaking-star2/root4.js .__esModule */
/*! export aa [provided] [used in main] [provision prevents renaming] -> ./optimize/tree-shaking-star2/aa.js .aa */
/*! export c [provided] [used in main] [provision prevents renaming] -> ./optimize/tree-shaking-star2/c.js .c */
/*! runtime requirements: module, __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-36 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./root4 */ 8);

/***/ }),
/* 5 */,
/* 6 */
/*!**********************************************!*\
  !*** ./optimize/tree-shaking-star2/root3.js ***!
  \**********************************************/
/*! namespace exports */
/*! export aa [provided] [used in main] [could be renamed] -> ./optimize/tree-shaking-star2/aa.js .aa */
/*! export bb [provided] [unused] [could be renamed] -> ./optimize/tree-shaking-star2/bb.js .bb */
/*! export c [provided] [unused] [could be renamed] -> ./optimize/tree-shaking-star2/c.js .c */
/*! export d [provided] [used in main] [could be renamed] -> ./optimize/tree-shaking-star2/d.js .d */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Dependency (harmony side effect evaluation) with side effects at 1:0-24 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aa": () => (/* reexport safe */ _root2__WEBPACK_IMPORTED_MODULE_0__.aa),
/* harmony export */   "d": () => (/* reexport safe */ _root2__WEBPACK_IMPORTED_MODULE_0__.d)
/* harmony export */ });
/* harmony import */ var _root2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./root2 */ 2);



/***/ }),
/* 7 */
/*!**********************************************!*\
  !*** ./optimize/tree-shaking-star2/root6.js ***!
  \**********************************************/
/*! namespace exports */
/*! export __esModule [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./optimize/tree-shaking-star2/root4.js .__esModule */
/*! export aa [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./optimize/tree-shaking-star2/aa.js .aa */
/*! export c [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./optimize/tree-shaking-star2/c.js .c */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/*! Dependency (harmony side effect evaluation) with side effects at 1:0-24 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__esModule": () => (/* reexport safe */ _root5__WEBPACK_IMPORTED_MODULE_0__.__esModule),
/* harmony export */   "aa": () => (/* reexport safe */ _root5__WEBPACK_IMPORTED_MODULE_0__.aa),
/* harmony export */   "c": () => (/* reexport safe */ _root5__WEBPACK_IMPORTED_MODULE_0__.c)
/* harmony export */ });
/* harmony import */ var _root5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./root5 */ 4);



/***/ }),
/* 8 */
/*!**********************************************!*\
  !*** ./optimize/tree-shaking-star2/root4.js ***!
  \**********************************************/
/*! namespace exports */
/*! export __esModule [not provided] [used in main] [usage prevents renaming] */
/*! export aa [provided] [used in main] [usage prevents renaming] -> ./optimize/tree-shaking-star2/aa.js .aa */
/*! export c [provided] [used in main] [usage prevents renaming] -> ./optimize/tree-shaking-star2/c.js .c */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aa": () => (/* reexport safe */ _a__WEBPACK_IMPORTED_MODULE_0__.aa),
/* harmony export */   "c": () => (/* reexport safe */ _c__WEBPACK_IMPORTED_MODULE_1__.c)
/* harmony export */ });
/* harmony import */ var _a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a */ 0);
/* harmony import */ var _c__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./c */ 9);




/***/ }),
/* 9 */
/*!******************************************!*\
  !*** ./optimize/tree-shaking-star2/c.js ***!
  \******************************************/
/*! namespace exports */
/*! export c [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ c)
/* harmony export */ });
var c = "c";


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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************************************!*\
  !*** ./optimize/tree-shaking-star2/index.js ***!
  \**********************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__ */
/*! Statement (VariableDeclaration) with side effects in source code at 3:0-31 */
/* harmony import */ var _root__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./root */ 1);
/* harmony import */ var _root3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./root3 */ 6);


var root6 = __webpack_require__(/*! ./root6 */ 7);

it("should correctly tree shake star exports", function() {
	expect(_root__WEBPACK_IMPORTED_MODULE_1__.aa).toBe("aa");
	expect(_root3__WEBPACK_IMPORTED_MODULE_0__.aa).toBe("aa");
	expect(_root3__WEBPACK_IMPORTED_MODULE_0__.d).toBe("d");
	expect(root6).toEqual(nsObj({
		aa: "aa",
		c: "c"
	}));
});

})();

/******/ })()
;