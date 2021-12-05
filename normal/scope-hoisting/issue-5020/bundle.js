/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/*!*****************************************************!*\
  !*** ./scope-hoisting/issue-5020/src/icon/index.js ***!
  \*****************************************************/
/*! namespace exports */
/*! export svg [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./scope-hoisting/issue-5020/src/icon/svg/index.js */
/*!   export clinical1 [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*!   export clinical2 [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*!   other exports [not provided] [maybe used in main (runtime-defined)] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/*! Dependency (harmony side effect evaluation) with side effects at 1:0-29 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "svg": () => (/* reexport module object */ _svg__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./svg */ 1);





/***/ }),
/* 1 */
/*!*********************************************************!*\
  !*** ./scope-hoisting/issue-5020/src/icon/svg/index.js ***!
  \*********************************************************/
/*! namespace exports */
/*! export clinical1 [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export clinical2 [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Statement (VariableDeclaration) with side effects in source code at 4:0-6:2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clinical1": () => (/* binding */ clinical1),
/* harmony export */   "clinical2": () => (/* binding */ clinical2)
/* harmony export */ });
/* harmony import */ var _svg1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./svg1 */ 6);
/* harmony import */ var _svg2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./svg2 */ 7);



const clinical1 = {
    svg1: _svg1__WEBPACK_IMPORTED_MODULE_0__/* .svg1 */ .o
};
const clinical2 = {
    svg2: _svg2__WEBPACK_IMPORTED_MODULE_1__/* .svg2 */ .D
};




/***/ }),
/* 2 */
/*!******************************************************!*\
  !*** ./scope-hoisting/issue-5020/src/icon1/index.js ***!
  \******************************************************/
/*! namespace exports */
/*! export svg [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./scope-hoisting/issue-5020/src/icon1/svg/index.js */
/*!   export clinical2 [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*!   export test [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*!   other exports [not provided] [maybe used in main (runtime-defined)] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/*! Dependency (harmony side effect evaluation) with side effects at 1:0-29 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "svg": () => (/* reexport module object */ _svg__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./svg */ 3);





/***/ }),
/* 3 */
/*!**********************************************************!*\
  !*** ./scope-hoisting/issue-5020/src/icon1/svg/index.js ***!
  \**********************************************************/
/*! namespace exports */
/*! export clinical2 [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export test [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Statement (VariableDeclaration) with side effects in source code at 4:0-6:2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "test": () => (/* binding */ test),
/* harmony export */   "clinical2": () => (/* binding */ clinical2)
/* harmony export */ });
/* harmony import */ var _svg1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./svg1 */ 8);
/* harmony import */ var _svg2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./svg2 */ 9);



const test = {
    svg1: _svg1__WEBPACK_IMPORTED_MODULE_0__/* .svg1 */ .o
};
const clinical2 = {
    svg2: _svg2__WEBPACK_IMPORTED_MODULE_1__/* .svg2 */ .D
};




/***/ }),
/* 4 */,
/* 5 */
/*!************************************************!*\
  !*** ./scope-hoisting/issue-5020/src/index.js ***!
  \************************************************/
/*! namespace exports */
/*! export svg5 [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./scope-hoisting/issue-5020/src/icon/index.js */
/*!   export svg [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./scope-hoisting/issue-5020/src/icon/svg/index.js */
/*!     export clinical1 [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*!     export clinical2 [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*!     other exports [not provided] [maybe used in main (runtime-defined)] */
/*!   other exports [not provided] [maybe used in main (runtime-defined)] */
/*! export svg6 [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./scope-hoisting/issue-5020/src/icon1/index.js */
/*!   export svg [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./scope-hoisting/issue-5020/src/icon1/svg/index.js */
/*!     export clinical2 [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*!     export test [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*!     other exports [not provided] [maybe used in main (runtime-defined)] */
/*!   other exports [not provided] [maybe used in main (runtime-defined)] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/*! Dependency (harmony side effect evaluation) with side effects at 1:0-31 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "svg5": () => (/* reexport module object */ _icon__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   "svg6": () => (/* reexport module object */ _icon1__WEBPACK_IMPORTED_MODULE_1__)
/* harmony export */ });
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon */ 0);
/* harmony import */ var _icon1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon1 */ 2);






/***/ }),
/* 6 */
/*!********************************************************!*\
  !*** ./scope-hoisting/issue-5020/src/icon/svg/svg1.js ***!
  \********************************************************/
/*! namespace exports */
/*! export svg1 [provided] [used in main] [renamed to o] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ svg1)
/* harmony export */ });
const svg1 = 1;


/***/ }),
/* 7 */
/*!********************************************************!*\
  !*** ./scope-hoisting/issue-5020/src/icon/svg/svg2.js ***!
  \********************************************************/
/*! namespace exports */
/*! export svg2 [provided] [used in main] [renamed to D] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ svg2)
/* harmony export */ });
const svg2 = 2;


/***/ }),
/* 8 */
/*!*********************************************************!*\
  !*** ./scope-hoisting/issue-5020/src/icon1/svg/svg1.js ***!
  \*********************************************************/
/*! namespace exports */
/*! export svg1 [provided] [used in main] [renamed to o] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ svg1)
/* harmony export */ });
const svg1 = 10;


/***/ }),
/* 9 */
/*!*********************************************************!*\
  !*** ./scope-hoisting/issue-5020/src/icon1/svg/svg2.js ***!
  \*********************************************************/
/*! namespace exports */
/*! export svg2 [provided] [used in main] [renamed to D] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ svg2)
/* harmony export */ });
const svg2 = 20;


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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************************!*\
  !*** ./scope-hoisting/issue-5020/index.js ***!
  \********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/*! Statement (VariableDeclaration) with side effects in source code at 1:0-41 */
var testData = __webpack_require__(/*! ./src/index.js */ 5);

it("should export the correct values", function() {
	expect(testData).toEqual(
		nsObj({
			svg5: nsObj({
				svg: nsObj({
					clinical1: {
						svg1: 1
					},
					clinical2: {
						svg2: 2
					}
				})
			}),
			svg6: nsObj({
				svg: nsObj({
					test: {
						svg1: 10
					},
					clinical2: {
						svg2: 20
					}
				})
			})
		})
	);
})

})();

/******/ })()
;