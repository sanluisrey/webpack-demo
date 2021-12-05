/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/*!****************************************************!*\
  !*** ./parsing/missing-export-warning-nested/e.js ***!
  \****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-3:5 */
/***/ ((module) => {

module.exports = (() => {
	return undefined;
})();


/***/ }),
/* 1 */
/*!****************************************************!*\
  !*** ./parsing/missing-export-warning-nested/b.js ***!
  \****************************************************/
/*! namespace exports */
/*! export B [not provided] [used in main] [could be renamed] */
/*! export b [provided] [unused] [could be renamed] */
/*! export y [provided] [only properties used in main] [could be renamed] -> ./parsing/missing-export-warning-nested/c.js */
/*!   export C [not provided] [used in main] [could be renamed] */
/*!   export Z [provided] [only properties used in main] [could be renamed] -> ./parsing/missing-export-warning-nested/e.js */
/*!     export D [maybe provided (runtime-defined)] [no usage info in main] [usage and provision prevents renaming] */
/*!     export v [maybe provided (runtime-defined)] [no usage info in main] [usage and provision prevents renaming] */
/*!     other exports [maybe provided (runtime-defined)] [no usage info in main] */
/*!   export c [provided] [unused] [could be renamed] */
/*!   export z [provided] [only properties used in main] [could be renamed] -> ./parsing/missing-export-warning-nested/d.js */
/*!     export D [not provided] [used in main] [could be renamed] */
/*!     export d [provided] [unused] [could be renamed] */
/*!     export default [provided] [unused] [provision prevents renaming] -> ./parsing/missing-export-warning-nested/d.js */
/*!       ... (4 already listed exports) */
/*!     export v [not provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Dependency (harmony side effect evaluation) with side effects at 2:0-25 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* reexport module object */ _c__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* unused harmony export b */
/* harmony import */ var _c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./c */ 2);
const b = 42;




/***/ }),
/* 2 */
/*!****************************************************!*\
  !*** ./parsing/missing-export-warning-nested/c.js ***!
  \****************************************************/
/*! namespace exports */
/*! export C [not provided] [used in main] [could be renamed] */
/*! export Z [provided] [only properties used in main] [could be renamed] -> ./parsing/missing-export-warning-nested/e.js */
/*!   export D [maybe provided (runtime-defined)] [no usage info in main] [usage and provision prevents renaming] */
/*!   export v [maybe provided (runtime-defined)] [no usage info in main] [usage and provision prevents renaming] */
/*!   other exports [maybe provided (runtime-defined)] [no usage info in main] */
/*! export c [provided] [unused] [could be renamed] */
/*! export z [provided] [only properties used in main] [could be renamed] -> ./parsing/missing-export-warning-nested/d.js */
/*!   export D [not provided] [used in main] [could be renamed] */
/*!   export d [provided] [unused] [could be renamed] */
/*!   export default [provided] [unused] [provision prevents renaming] -> ./parsing/missing-export-warning-nested/d.js */
/*!     ... (4 already listed exports) */
/*!   export v [not provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.d, __webpack_require__.t, __webpack_require__.* */
/*! Dependency (harmony side effect evaluation) with side effects at 2:0-25 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
var _d__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* reexport fake namespace object from non-harmony */ _d__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_d__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_d__WEBPACK_IMPORTED_MODULE_0__, 2))),
/* harmony export */   "Z": () => (/* reexport module object */ _e__WEBPACK_IMPORTED_MODULE_1__)
/* harmony export */ });
/* unused harmony export c */
/* harmony import */ var _d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./d */ 3);
/* harmony import */ var _e__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./e */ 0);
/* harmony import */ var _e__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_e__WEBPACK_IMPORTED_MODULE_1__);
const c = 42;





/***/ }),
/* 3 */
/*!****************************************************!*\
  !*** ./parsing/missing-export-warning-nested/d.js ***!
  \****************************************************/
/*! default exports */
/*! export D [not provided] [used in main] [could be renamed] */
/*! export d [provided] [unused] [could be renamed] */
/*! export v [not provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-15 */
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;
__webpack_unused_export__ = 42;


/***/ }),
/* 4 */,
/* 5 */
/*!****************************************************!*\
  !*** ./parsing/missing-export-warning-nested/a.js ***!
  \****************************************************/
/*! namespace exports */
/*! export A [not provided] [used in main] [could be renamed] */
/*! export a [provided] [unused] [could be renamed] */
/*! export p [not provided] [used in main] [could be renamed] */
/*! export x [provided] [only properties used in main] [could be renamed] -> ./parsing/missing-export-warning-nested/b.js */
/*!   export B [not provided] [used in main] [could be renamed] */
/*!   export b [provided] [unused] [could be renamed] */
/*!   export y [provided] [only properties used in main] [could be renamed] -> ./parsing/missing-export-warning-nested/c.js */
/*!     export C [not provided] [used in main] [could be renamed] */
/*!     export Z [provided] [only properties used in main] [could be renamed] -> ./parsing/missing-export-warning-nested/e.js */
/*!       export D [maybe provided (runtime-defined)] [no usage info in main] [usage and provision prevents renaming] */
/*!       export v [maybe provided (runtime-defined)] [no usage info in main] [usage and provision prevents renaming] */
/*!       other exports [maybe provided (runtime-defined)] [no usage info in main] */
/*!     export c [provided] [unused] [could be renamed] */
/*!     export z [provided] [only properties used in main] [could be renamed] -> ./parsing/missing-export-warning-nested/d.js */
/*!       export D [not provided] [used in main] [could be renamed] */
/*!       export d [provided] [unused] [could be renamed] */
/*!       export default [provided] [unused] [provision prevents renaming] -> ./parsing/missing-export-warning-nested/d.js */
/*!         ... (4 already listed exports) */
/*!       export v [not provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Dependency (harmony side effect evaluation) with side effects at 2:0-25 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* reexport module object */ _b__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* unused harmony export a */
/* harmony import */ var _b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./b */ 1);
const a = 42;




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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!********************************************************!*\
  !*** ./parsing/missing-export-warning-nested/index.js ***!
  \********************************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__ */
/*! Statement (IfStatement) with side effects in source code at 3:0-12:1 */
/* harmony import */ var _a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a */ 5);


if (Math.random() < 0) {
	_a__WEBPACK_IMPORTED_MODULE_0__.A;
	_a__WEBPACK_IMPORTED_MODULE_0__.x.B;
	_a__WEBPACK_IMPORTED_MODULE_0__.x.y.C;
	_a__WEBPACK_IMPORTED_MODULE_0__.x.y.z.D;
	_a__WEBPACK_IMPORTED_MODULE_0__.x.y.Z.D;
	_a__WEBPACK_IMPORTED_MODULE_0__.x.y.z.v.E;
	_a__WEBPACK_IMPORTED_MODULE_0__.x.y.Z.v.E;
	_a__WEBPACK_IMPORTED_MODULE_0__.p.r.q;
}

it("should emit the correct warnings", () => {});

})();

/******/ })()
;