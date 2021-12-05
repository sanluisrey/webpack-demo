/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/*!**************************************!*\
  !*** ./parsing/issue-8874/module.js ***!
  \**************************************/
/*! namespace exports */
/*! export default [provided] [used in main] [renamed to Z] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ myFunction)
/* harmony export */ });


function myFunction() {
	let iifeExecutionCount = 0;

	(function someFunction (recurse) {
		iifeExecutionCount++;

		if (recurse) {
			someFunction(false);
		}
	})(true);

	return iifeExecutionCount;
}


/***/ }),
/* 2 */
/*!******************************************************!*\
  !*** ./parsing/issue-8874/moduleDefaultParameter.js ***!
  \******************************************************/
/*! namespace exports */
/*! export default [provided] [used in main] [renamed to Z] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ myFunction)
/* harmony export */ });
function myFunction() {
	let iifeExecutionCount = 0;

	(function someFunction (recurse, recurseFunction = someFunction) {
		iifeExecutionCount++;

		if (recurse) {
			recurseFunction(false);
		}
	})(true);

	return iifeExecutionCount;
}


/***/ }),
/* 3 */
/*!****************************************************************!*\
  !*** ./parsing/issue-8874/moduleExportedFunctionExpression.js ***!
  \****************************************************************/
/*! namespace exports */
/*! export default [provided] [used in main] [renamed to Z] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function someFunction (recurse = true) {
	if (recurse) {
		return 1 + someFunction(false);
	}

	return 1;
});


/***/ }),
/* 4 */
/*!********************************************************************************!*\
  !*** ./parsing/issue-8874/moduleExportedFunctionExpressionDefaultParameter.js ***!
  \********************************************************************************/
/*! namespace exports */
/*! export default [provided] [used in main] [renamed to Z] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function someFunction (recurse = true, recurseFunction = someFunction) {
	if (recurse) {
		return 1 + recurseFunction(false);
	}

	return 1;
});


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
/*!*************************************!*\
  !*** ./parsing/issue-8874/index.js ***!
  \*************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 6:0-8:3 */
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module */ 1);
/* harmony import */ var _moduleDefaultParameter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moduleDefaultParameter */ 2);
/* harmony import */ var _moduleExportedFunctionExpression__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moduleExportedFunctionExpression */ 3);
/* harmony import */ var _moduleExportedFunctionExpressionDefaultParameter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./moduleExportedFunctionExpressionDefaultParameter */ 4);





it('should execute IIFE twice', () => {
	expect((0,_module__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)()).toBe(2);
});

it('should execute IIFE twice when using IIFE function name as default parameter', () => {
	expect((0,_moduleDefaultParameter__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)()).toBe(2);
});

it('should execute Function Expression twice', () => {
	expect((0,_moduleExportedFunctionExpression__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)()).toBe(2);
});

it('should execute Function Expression twice when using IIFE function name as default parameter', () => {
	expect((0,_moduleExportedFunctionExpressionDefaultParameter__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)()).toBe(2);
});

})();

/******/ })()
;