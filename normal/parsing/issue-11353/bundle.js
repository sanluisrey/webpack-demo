/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/*!***************************************************!*\
  !*** ./parsing/issue-11353/generator_function.js ***!
  \***************************************************/
/*! namespace exports */
/*! export default [provided] [used in main] [renamed to Z] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ idMaker)
/* harmony export */ });


function* idMaker(){
	var index = 0;
	while(true)
		yield index++;
}


/***/ }),
/* 2 */
/*!*********************************************************!*\
  !*** ./parsing/issue-11353/async_generator_function.js ***!
  \*********************************************************/
/*! namespace exports */
/*! export default [provided] [used in main] [renamed to Z] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ asyncIdMaker)
/* harmony export */ });


async function* asyncIdMaker(start = 1, end = 5){
	for (let i = start; i <= end; i++) {

		await new Promise(resolve => setTimeout(resolve, 1000));

		yield i;
	}
}


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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************************!*\
  !*** ./parsing/issue-11353/index.js ***!
  \**************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 6:0-8:3 */
/* harmony import */ var _generator_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generator_function.js */ 1);
/* harmony import */ var _async_generator_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./async_generator_function */ 2);





it('should correctly import generator function', () => {
	expect(typeof _generator_function_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z).toBe("function");
});

it('should correctly build the correct function string', () => {
	expect(_generator_function_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].toString */ .Z.toString().indexOf('function*')).toBe(0); // 0
});

it('should correctly provide the generator function interface', () => {
	let gen = (0,_generator_function_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
	expect(gen.next().value).toBe(0);
	expect(gen.next().value).toBe(1);
	expect(gen.next().value).toBe(2);
});

it('should correctly import async generator function', () => {
	expect(typeof _async_generator_function__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z).toBe("function");
});

it('should correctly build the correct async function string', () => {
	expect(_async_generator_function__WEBPACK_IMPORTED_MODULE_1__/* ["default"].toString */ .Z.toString().indexOf('async function*')).toBe(0);
});

it('should correctly provide the async generator function interface', async () => {
	let gen = (0,_async_generator_function__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(1, 5);
	let start = 0;
	for await (let value of gen) {
		start += 1;
		expect(value).toBe(start);
	}
});

})();

/******/ })()
;