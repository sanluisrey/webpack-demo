/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/*!**************************************!*\
  !*** ./json/import-by-name/index.js ***!
  \**************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__, __webpack_require__.t, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 7:0-21:3 */
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

var _data_d_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache;
/* harmony import */ var _data_c_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/c.json */ 2);
/* harmony import */ var _data_d_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/d.json */ 3);
/* harmony import */ var _data_e_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/e.json */ 4);
/* harmony import */ var _data_f_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/f.json */ 5);
/* harmony import */ var _data_g_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/g.json */ 6);






it("should be possible to import json data", function() {
	expect(_data_c_json__WEBPACK_IMPORTED_MODULE_0__[2]).toBe(3);
	expect(Object.keys(/*#__PURE__*/ (_data_d_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache || (_data_d_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache = __webpack_require__.t(_data_d_json__WEBPACK_IMPORTED_MODULE_1__, 2))))).toEqual(["default"]);
	expect(_data_e_json__WEBPACK_IMPORTED_MODULE_2__.aa).toBe(1);
	expect(_data_e_json__WEBPACK_IMPORTED_MODULE_2__.bb).toBe(2);
	expect(_data_f_json__WEBPACK_IMPORTED_MODULE_3__.named).toBe("named");
	expect({ f: _data_f_json__WEBPACK_IMPORTED_MODULE_3__ }).toEqual({
		f: {
			__esModule: true,
			default: "default",
			named: "named"
		}
	});
	expect(_data_g_json__WEBPACK_IMPORTED_MODULE_4__/* .named */ .t).toBe(_data_g_json__WEBPACK_IMPORTED_MODULE_4__/* .named */ .t);
});


/***/ }),
/* 2 */
/*!**************************!*\
  !*** ./json/data/c.json ***!
  \**************************/
/*! default exports */
/*! export 0 [provided] [unused] [could be renamed] */
/*! export 1 [provided] [unused] [could be renamed] */
/*! export 2 [provided] [used in main] [could be renamed] */
/*! export 3 [provided] [unused] [could be renamed] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = [0,0,3];

/***/ }),
/* 3 */
/*!**************************!*\
  !*** ./json/data/d.json ***!
  \**************************/
/*! default exports */
/*! exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = {};

/***/ }),
/* 4 */
/*!**************************!*\
  !*** ./json/data/e.json ***!
  \**************************/
/*! default exports */
/*! export 1 [provided] [unused] [could be renamed] */
/*! export aa [provided] [used in main] [could be renamed] */
/*! export bb [provided] [used in main] [could be renamed] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = {"bb":2,"aa":1};

/***/ }),
/* 5 */
/*!**************************!*\
  !*** ./json/data/f.json ***!
  \**************************/
/*! default exports */
/*! export __esModule [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export default [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export named [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = JSON.parse('{"named":"named","default":"default","__esModule":true}');

/***/ }),
/* 6 */
/*!**************************!*\
  !*** ./json/data/g.json ***!
  \**************************/
/*! default exports */
/*! export named [provided] [used in main] [renamed to t] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = {"t":{}};

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
/*!*********************************************************!*\
  !*** ./json/import-by-name-with-concatenation/index.js ***!
  \*********************************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__ */
/*! Dependency (harmony side effect evaluation) with side effects at 1:0-27 */
/* harmony import */ var _import_by_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../import-by-name */ 1);


})();

/******/ })()
;