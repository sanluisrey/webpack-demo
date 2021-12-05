/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 106:
/*!****************!*\
  !*** ./aaa.js ***!
  \****************/
/***/ ((module) => {

module.exports = "aaa";

/***/ }),

/***/ 380:
/*!*******************!*\
  !*** ./bbbccc.js ***!
  \*******************/
/***/ ((module) => {

module.exports = "bbbccc";

/***/ }),

/***/ 91:
/*!****************!*\
  !*** ./ddd.js ***!
  \****************/
/***/ ((module) => {

var ddd = {
	eee: {
		"3-f": "fff"
	}
};

module.exports = ddd;


/***/ }),

/***/ 784:
/*!****************!*\
  !*** ./env.js ***!
  \****************/
/***/ ((module) => {

module.exports = "development";

/***/ }),

/***/ 426:
/*!****************!*\
  !*** ./esm.js ***!
  \****************/
/***/ ((module) => {

module.exports = "esm";


/***/ }),

/***/ 356:
/*!********************!*\
  !*** ./harmony.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "alias": () => (/* binding */ alias),
/* harmony export */   "year": () => (/* binding */ year)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ECMAScript 2015");
const alias = "ECMAScript Harmony";
const year = 2015;


/***/ }),

/***/ 610:
/*!*****************!*\
  !*** ./foo.mjs ***!
  \*****************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ foo)
/* harmony export */ });
/* provided dependency */ var esm = __webpack_require__(/*! ./esm.js */ 426);
function foo() {
    return esm;
}


/***/ })

/******/ 	});
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
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/* provided dependency */ var aaa = __webpack_require__(/*! ./aaa */ 106);
/* provided dependency */ var __webpack_provided_bbb_dot_ccc = __webpack_require__(/*! ./bbbccc */ 380);
/* provided dependency */ var __webpack_provided_process_dot_env_dot_NODE_ENV = __webpack_require__(/*! ./env */ 784);
/* provided dependency */ var __webpack_provided_this_dot_aaa = __webpack_require__(/*! ./aaa */ 106);
/* provided dependency */ var dddeeefff = __webpack_require__(/*! ./ddd */ 91)["eee"]["3-f"];
/* provided dependency */ var es2015 = __webpack_require__(/*! ./harmony */ 356);
/* provided dependency */ var es2015_name = __webpack_require__(/*! ./harmony */ 356)["default"];
/* provided dependency */ var es2015_alias = __webpack_require__(/*! ./harmony */ 356)["alias"];
/* provided dependency */ var es2015_year = __webpack_require__(/*! ./harmony */ 356)["year"];
it("should provide a module for a simple free var", function() {
	expect(aaa).toBe("aaa");
});

it("should provide a module for a nested var", function() {
	expect((__webpack_provided_bbb_dot_ccc)).toBe("bbbccc");
	var x = __webpack_provided_bbb_dot_ccc;
	expect(x).toBe("bbbccc");
});

it("should provide a module for a nested var within a IIFE's argument", function() {
	(function(process) {
		expect((__webpack_provided_process_dot_env_dot_NODE_ENV)).toBe("development");
		var x = __webpack_provided_process_dot_env_dot_NODE_ENV;
		expect(x).toBe("development");
	}(process));
});

it("should provide a module for thisExpression", () => {
	expect(__webpack_provided_this_dot_aaa).toBe("aaa");
});

it("should provide a module for a nested var within a IIFE's this", function() {
	(function() {
		expect((__webpack_provided_process_dot_env_dot_NODE_ENV)).toBe("development");
		var x = __webpack_provided_process_dot_env_dot_NODE_ENV;
		expect(x).toBe("development");
	}.call(process));
});

it("should provide a module for a nested var within a nested IIFE's this", function() {
	(function() {
		(function() {
			expect((__webpack_provided_process_dot_env_dot_NODE_ENV)).toBe("development");
			var x = __webpack_provided_process_dot_env_dot_NODE_ENV;
			expect(x).toBe("development");
		}.call(this));
	}.call(process));
});

it("should not provide a module for a part of a var", function() {
	expect((typeof bbb)).toBe("undefined");
});

it("should provide a module for a property request", function() {
	expect((dddeeefff)).toBe("fff");
	var x = dddeeefff;
	expect(x).toBe("fff");
});

it("should provide ES2015 modules", function() {
	expect((es2015.default)).toBe("ECMAScript 2015");
	expect((es2015.alias)).toBe("ECMAScript Harmony");
	expect((es2015.year)).toBe(2015);
	expect((es2015_name)).toBe("ECMAScript 2015");
	expect((es2015_alias)).toBe("ECMAScript Harmony");
	expect((es2015_year)).toBe(2015);
});

it("should not provide for mjs", function(){
	var foo = (__webpack_require__(/*! ./foo.mjs */ 610)/* ["default"] */ .Z);
	expect(foo()).toBe("esm");
});

})();

/******/ })()
;