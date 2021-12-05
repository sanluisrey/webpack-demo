/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/*!********************************************!*\
  !*** ./parsing/class-properties/module.js ***!
  \********************************************/
/*! namespace exports */
/*! export A [provided] [used in main] [could be renamed] */
/*! export B [provided] [used in main] [could be renamed] */
/*! export prop [provided] [used in main] [renamed to v] */
/*! export staticProp [provided] [used in main] [renamed to w] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ staticProp),
/* harmony export */   "v": () => (/* binding */ prop),
/* harmony export */   "A": () => (/* binding */ A),
/* harmony export */   "B": () => (/* binding */ B)
/* harmony export */ });
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module */ 0);


const staticProp = "value";
const prop = "value";

class A {
	static staticProp = staticProp;
	static [staticProp] = staticProp;
	prop = prop;
	[prop] = prop;
}

class B {
	static staticProp = _module__WEBPACK_IMPORTED_MODULE_0__/* .staticProp */ .w;
	static [_module__WEBPACK_IMPORTED_MODULE_0__/* .staticProp */ .w] = _module__WEBPACK_IMPORTED_MODULE_0__/* .staticProp */ .w;
	prop = _module__WEBPACK_IMPORTED_MODULE_0__/* .prop */ .v;
	[_module__WEBPACK_IMPORTED_MODULE_0__/* .prop */ .v] = _module__WEBPACK_IMPORTED_MODULE_0__/* .prop */ .v;
}


/***/ }),
/* 1 */,
/* 2 */
/*!**********************************************!*\
  !*** ./parsing/class-properties/module.js?1 ***!
  \**********************************************/
/*! namespace exports */
/*! export A [provided] [used in main] [could be renamed] */
/*! export B [provided] [used in main] [could be renamed] */
/*! export prop [provided] [unused] [renamed to v] */
/*! export staticProp [provided] [unused] [renamed to w] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ A),
/* harmony export */   "B": () => (/* binding */ B)
/* harmony export */ });
/* unused harmony exports staticProp, prop */
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module */ 0);


const staticProp = "value";
const prop = "value";

class A {
	static staticProp = staticProp;
	static [staticProp] = staticProp;
	prop = prop;
	[prop] = prop;
}

class B {
	static staticProp = _module__WEBPACK_IMPORTED_MODULE_0__/* .staticProp */ .w;
	static [_module__WEBPACK_IMPORTED_MODULE_0__/* .staticProp */ .w] = _module__WEBPACK_IMPORTED_MODULE_0__/* .staticProp */ .w;
	prop = _module__WEBPACK_IMPORTED_MODULE_0__/* .prop */ .v;
	[_module__WEBPACK_IMPORTED_MODULE_0__/* .prop */ .v] = _module__WEBPACK_IMPORTED_MODULE_0__/* .prop */ .v;
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
/*!*******************************************!*\
  !*** ./parsing/class-properties/index.js ***!
  \*******************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 4:0-21:3 */
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module */ 0);
/* harmony import */ var _module_1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module?1 */ 2);



it("should not rename class properties", function () {
	expect(_module__WEBPACK_IMPORTED_MODULE_0__.A.staticProp).toBe("value");
	expect(_module__WEBPACK_IMPORTED_MODULE_0__.B.staticProp).toBe("value");
	expect(_module_1__WEBPACK_IMPORTED_MODULE_1__.A.staticProp).toBe("value");
	expect(_module_1__WEBPACK_IMPORTED_MODULE_1__.B.staticProp).toBe("value");
	expect(_module__WEBPACK_IMPORTED_MODULE_0__.A.value).toBe("value");
	expect(_module__WEBPACK_IMPORTED_MODULE_0__.B.value).toBe("value");
	expect(_module_1__WEBPACK_IMPORTED_MODULE_1__.A.value).toBe("value");
	expect(_module_1__WEBPACK_IMPORTED_MODULE_1__.B.value).toBe("value");
	expect(new _module__WEBPACK_IMPORTED_MODULE_0__.A().prop).toBe("value");
	expect(new _module__WEBPACK_IMPORTED_MODULE_0__.B().prop).toBe("value");
	expect(new _module_1__WEBPACK_IMPORTED_MODULE_1__.A().prop).toBe("value");
	expect(new _module_1__WEBPACK_IMPORTED_MODULE_1__.B().prop).toBe("value");
	expect(new _module__WEBPACK_IMPORTED_MODULE_0__.A().value).toBe("value");
	expect(new _module__WEBPACK_IMPORTED_MODULE_0__.B().value).toBe("value");
	expect(new _module_1__WEBPACK_IMPORTED_MODULE_1__.A().value).toBe("value");
	expect(new _module_1__WEBPACK_IMPORTED_MODULE_1__.B().value).toBe("value");
});

})();

/******/ })()
;