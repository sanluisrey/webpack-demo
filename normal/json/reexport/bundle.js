/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/*!**************************!*\
  !*** ./json/data/e.json ***!
  \**************************/
/*! default exports */
/*! export 1 [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export aa [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export bb [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export default [not provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = JSON.parse('{"1":"x","bb":2,"aa":1}');

/***/ }),
/* 1 */
/*!*******************************************!*\
  !*** ./json/data/f.json?default-exported ***!
  \*******************************************/
/*! default exports */
/*! export __esModule [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export default [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export named [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = JSON.parse('{"named":"named","default":"default","__esModule":true}');

/***/ }),
/* 2 */
/*!**********************************************!*\
  !*** ./json/data/f.json?only-named-exported ***!
  \**********************************************/
/*! default exports */
/*! export __esModule [provided] [unused] [renamed to X$] */
/*! export default [provided] [unused] [renamed to ZP] */
/*! export named [provided] [used in main] [renamed to t6] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = {"t6":"named"};

/***/ }),
/* 3 */
/*!****************************************************!*\
  !*** ./json/data/f.json?namespace-object-exported ***!
  \****************************************************/
/*! default exports */
/*! export __esModule [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export default [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export named [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = JSON.parse('{"named":"named","default":"default","__esModule":true}');

/***/ }),
/* 4 */
/*!********************************************************************************!*\
  !*** ./json/data/f.json?namespace-object-exported-but-only-default-named-used ***!
  \********************************************************************************/
/*! default exports */
/*! export __esModule [provided] [unused] [renamed to X$] */
/*! export default [provided] [unused] [renamed to ZP] */
/*! export named [provided] [used in main] [renamed to t6] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = {"t6":"named"};

/***/ }),
/* 5 */
/*!************************************************************************!*\
  !*** ./json/data/f.json?namespace-object-exported-but-only-named-used ***!
  \************************************************************************/
/*! default exports */
/*! export __esModule [provided] [unused] [renamed to X$] */
/*! export default [provided] [unused] [renamed to ZP] */
/*! export named [provided] [used in main] [renamed to t6] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = {"t6":"named"};

/***/ }),
/* 6 */,
/* 7 */
/*!***********************************!*\
  !*** ./json/reexport/reexport.js ***!
  \***********************************/
/*! namespace exports */
/*! export e [provided] [used in main] [could be renamed] -> ./json/data/e.json .default */
/*! export f [provided] [used in main] [could be renamed] -> ./json/data/f.json?default-exported .default */
/*! export fNamed [provided] [used in main] [renamed to U4] -> ./json/data/f.json?only-named-exported .named */
/*! export fStar [provided] [used in main] [renamed to Ac] -> ./json/data/f.json?namespace-object-exported */
/*!   export __esModule [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*!   export default [provided] [unused] [provision prevents renaming] -> ./json/data/f.json?namespace-object-exported */
/*!     export default [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*!     ... (3 already listed exports) */
/*!   export named [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*!   other exports [not provided] [maybe used in main (runtime-defined)] */
/*! export fStarPartial [provided] [only properties used in main] [renamed to cu] -> ./json/data/f.json?namespace-object-exported-but-only-default-named-used */
/*!   export __esModule [provided] [unused] [renamed to X$] */
/*!   export default [provided] [only properties used in main] [provision prevents renaming] -> ./json/data/f.json?namespace-object-exported-but-only-default-named-used */
/*!     export default [provided] [unused] [renamed to ZP] */
/*!     ... (3 already listed exports) */
/*!   export named [provided] [used in main] [renamed to t6] */
/*! export fStarPartial2 [provided] [only properties used in main] [renamed to gU] -> ./json/data/f.json?namespace-object-exported-but-only-named-used */
/*!   export __esModule [provided] [unused] [renamed to X$] */
/*!   export default [provided] [unused] [provision prevents renaming] -> ./json/data/f.json?namespace-object-exported-but-only-named-used */
/*!     export default [provided] [unused] [renamed to ZP] */
/*!     ... (3 already listed exports) */
/*!   export named [provided] [used in main] [renamed to t6] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.t, __webpack_require__.* */
/*! Dependency (harmony side effect evaluation) with side effects at 1:0-46 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

var _data_f_json_namespace_object_exported__WEBPACK_IMPORTED_MODULE_3___namespace_cache;
var _data_f_json_namespace_object_exported_but_only_default_named_used__WEBPACK_IMPORTED_MODULE_4___namespace_cache;
var _data_f_json_namespace_object_exported_but_only_named_used__WEBPACK_IMPORTED_MODULE_5___namespace_cache;
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* reexport default export from named module */ _data_e_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   "f": () => (/* reexport default export from named module */ _data_f_json_default_exported__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "U4": () => (/* reexport safe */ _data_f_json_only_named_exported__WEBPACK_IMPORTED_MODULE_2__.t6),
/* harmony export */   "Ac": () => (/* reexport fake namespace object from non-harmony */ _data_f_json_namespace_object_exported__WEBPACK_IMPORTED_MODULE_3___namespace_cache || (_data_f_json_namespace_object_exported__WEBPACK_IMPORTED_MODULE_3___namespace_cache = __webpack_require__.t(_data_f_json_namespace_object_exported__WEBPACK_IMPORTED_MODULE_3__, 2))),
/* harmony export */   "cu": () => (/* reexport fake namespace object from non-harmony */ _data_f_json_namespace_object_exported_but_only_default_named_used__WEBPACK_IMPORTED_MODULE_4___namespace_cache || (_data_f_json_namespace_object_exported_but_only_default_named_used__WEBPACK_IMPORTED_MODULE_4___namespace_cache = __webpack_require__.t(_data_f_json_namespace_object_exported_but_only_default_named_used__WEBPACK_IMPORTED_MODULE_4__, 2))),
/* harmony export */   "gU": () => (/* reexport fake namespace object from non-harmony */ _data_f_json_namespace_object_exported_but_only_named_used__WEBPACK_IMPORTED_MODULE_5___namespace_cache || (_data_f_json_namespace_object_exported_but_only_named_used__WEBPACK_IMPORTED_MODULE_5___namespace_cache = __webpack_require__.t(_data_f_json_namespace_object_exported_but_only_named_used__WEBPACK_IMPORTED_MODULE_5__, 2)))
/* harmony export */ });
/* harmony import */ var _data_e_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/e.json */ 0);
/* harmony import */ var _data_f_json_default_exported__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/f.json?default-exported */ 1);
/* harmony import */ var _data_f_json_only_named_exported__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/f.json?only-named-exported */ 2);
/* harmony import */ var _data_f_json_namespace_object_exported__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/f.json?namespace-object-exported */ 3);
/* harmony import */ var _data_f_json_namespace_object_exported_but_only_default_named_used__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/f.json?namespace-object-exported-but-only-default-named-used */ 4);
/* harmony import */ var _data_f_json_namespace_object_exported_but_only_named_used__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/f.json?namespace-object-exported-but-only-named-used */ 5);











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
/*!********************************!*\
  !*** ./json/reexport/index.js ***!
  \********************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 3:0-22:3 */
/* harmony import */ var _reexport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reexport */ 7);


it("should be possible to reexport json data", function() {
	expect(_reexport__WEBPACK_IMPORTED_MODULE_0__.e.aa).toBe(1);
	expect(_reexport__WEBPACK_IMPORTED_MODULE_0__.e.bb).toBe(2);
	expect(_reexport__WEBPACK_IMPORTED_MODULE_0__.f).toEqual({
		named: "named",
		default: "default",
		__esModule: true
	});
	expect(_reexport__WEBPACK_IMPORTED_MODULE_0__/* .fNamed */ .U4).toBe("named");
	const _fStar = _reexport__WEBPACK_IMPORTED_MODULE_0__/* .fStar */ .Ac;
	expect(_fStar).toEqual(
		nsObj({
			named: "named",
			default: { named: "named", default: "default", __esModule: true }
		})
	);
	expect(_fStar.__esModule).toBe(true);
	expect(_reexport__WEBPACK_IMPORTED_MODULE_0__/* .fStarPartial["default"].named */ .cu["default"].t6).toBe("named");
	expect(_reexport__WEBPACK_IMPORTED_MODULE_0__/* .fStarPartial2.named */ .gU.t6).toBe("named");
});

})();

/******/ })()
;