/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/*!****************************!*\
  !*** ./parsing/asi/b.json ***!
  \****************************/
/*! default exports */
/*! exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = {};

/***/ }),
/* 1 */,
/* 2 */
/*!**************************!*\
  !*** ./parsing/asi/a.js ***!
  \**************************/
/*! namespace exports */
/*! export a [provided] [used in main] [could be renamed] */
/*! export callme [provided] [used in main] [renamed to F] */
/*! export getCount [provided] [used in main] [renamed to s] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ a),
/* harmony export */   "F": () => (/* binding */ callme),
/* harmony export */   "s": () => (/* binding */ getCount)
/* harmony export */ });
function a() {}

let count = 0;

function callme() {
	count++;
}

function getCount() {
	return count;
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
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
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
/*!******************************!*\
  !*** ./parsing/asi/index.js ***!
  \******************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__, __webpack_require__.t, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 8:0-48:3 */
var _b__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
/* harmony import */ var _a__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./a */ 2);
/* harmony import */ var _b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./b */ 0);



function donotcallme() {
	expect("asi unsafe call happened").toBe(false);
}

it("should respect asi flag", () => {
	(donotcallme)
	;({});
	(donotcallme)
	;(0,_a__WEBPACK_IMPORTED_MODULE_1__.a)();
	(donotcallme)
	/*#__PURE__*/ ;(_b__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_b__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_b__WEBPACK_IMPORTED_MODULE_0__, 2)));

	var i = 0
	for (;i < 10;i++) (0,_a__WEBPACK_IMPORTED_MODULE_1__/* .callme */ .F)()
	var i = 0
	for (;i < 10;(function() {
		i++
	})()) (0,_a__WEBPACK_IMPORTED_MODULE_1__/* .callme */ .F)()
	var i = 0
	for (;i < 2;i++) {
		(donotcallme)
		;(0,_a__WEBPACK_IMPORTED_MODULE_1__.a)();
	}
	var i = 0
	if (i++) (0,_a__WEBPACK_IMPORTED_MODULE_1__/* .callme */ .F)()
	var i = 1
	if (i)
		(donotcallme)
	else
		(0,_a__WEBPACK_IMPORTED_MODULE_1__/* .callme */ .F)()
	var i = 0
	while (i++ < 4) (0,_a__WEBPACK_IMPORTED_MODULE_1__/* .callme */ .F)()
	do (donotcallme)
	while (i++ < 4) (0,_a__WEBPACK_IMPORTED_MODULE_1__/* .callme */ .F)()
	var i = 0
	while (i++ < 4) (function () {
		var i = 4
		return (0,_a__WEBPACK_IMPORTED_MODULE_1__/* .callme */ .F)()
	})()

	;(donotcallme)
	__webpack_require__(/*! ./b.json */ 0).prop

	expect((0,_a__WEBPACK_IMPORTED_MODULE_1__/* .getCount */ .s)()).toBe(29)
});

})();

/******/ })()
;