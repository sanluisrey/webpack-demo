/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/*!************************************************!*\
  !*** ./scope-hoisting/renaming-4967/module.js ***!
  \************************************************/
/*! namespace exports */
/*! export c [provided] [used in main] [could be renamed] */
/*! export d [provided] [used in main] [could be renamed] */
/*! export test [provided] [used in main] [renamed to B] -> ./scope-hoisting/renaming-4967/file1.js .test */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Statement (VariableDeclaration) with side effects in source code at 3:0-7:2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ c),
/* harmony export */   "d": () => (/* binding */ d),
/* harmony export */   "B": () => (/* reexport safe */ _file1__WEBPACK_IMPORTED_MODULE_0__.B)
/* harmony export */ });
/* harmony import */ var _file1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./file1 */ 2);


var c = {
    a: function a() {
        return (0,_file1__WEBPACK_IMPORTED_MODULE_0__.a)();
    },
};

var d = {
    x: function x() {
		function a() {
			return "fail";
		}
        return (0,_file1__WEBPACK_IMPORTED_MODULE_0__.a)();
    },
};




/***/ }),
/* 1 */,
/* 2 */
/*!***********************************************!*\
  !*** ./scope-hoisting/renaming-4967/file1.js ***!
  \***********************************************/
/*! namespace exports */
/*! export a [provided] [used in main] [could be renamed] */
/*! export test [provided] [used in main] [renamed to B] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ a),
/* harmony export */   "B": () => (/* binding */ test)
/* harmony export */ });
function a() {
	return "ok";
}

function test() {
	function file1_js_a() {
		return "fail";
	}
	function file1_a() {
		return "fail";
	}
	return a();
}

function renaming_4967_file1_js_a() {
	return "fail";
}
function renaming_4967_file1_a() {
	return "fail";
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
/*!***********************************************!*\
  !*** ./scope-hoisting/renaming-4967/index.js ***!
  \***********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-5:3 */
it("should check existing variables when renaming", function() {
	expect((__webpack_require__(/*! ./module */ 0).d.x)()).toBe("ok");
	expect((__webpack_require__(/*! ./module */ 0).c.a)()).toBe("ok");
	expect((__webpack_require__(/*! ./module */ 0)/* .test */ .B)()).toBe("ok");
});

})();

/******/ })()
;