/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/*!*************************************************************!*\
  !*** ./cjs-tree-shaking/namespace/namespace-via-literal.js ***!
  \*************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-5:2 */
/***/ ((module) => {

module.exports = {
	__esModule: true,
	abc: "abc",
	default: "default"
};


/***/ }),
/* 1 */
/*!***********************************************************************!*\
  !*** ./cjs-tree-shaking/namespace/namespace-via-define-properties.js ***!
  \***********************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__ */
/*! CommonJS bailout: exports is used directly at 1:24-31 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-5:3 */
/***/ ((__unused_webpack_module, exports) => {

Object.defineProperties(exports, {
	__esModule: { value: true },
	abc: { enumerable: true, value: "abc" },
	default: { enumerable: true, value: "default" }
});


/***/ }),
/* 2 */
/*!*************************************************************!*\
  !*** ./cjs-tree-shaking/namespace/namespace-via-exports.js ***!
  \*************************************************************/
/*! flagged exports */
/*! export __esModule [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export abc [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export default [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_exports__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-26 */
/***/ ((__unused_webpack_module, exports) => {

exports.__esModule = true;
exports.abc = "abc";
exports["default"] = "default";

/***/ }),
/* 3 */
/*!*********************************************************************!*\
  !*** ./cjs-tree-shaking/namespace/namespace-via-define-property.js ***!
  \*********************************************************************/
/*! flagged exports */
/*! export __esModule [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export abc [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export default [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_exports__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-62 */
/***/ ((__unused_webpack_module, exports) => {

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.abc = "abc";
exports["default"] = "default";


/***/ }),
/* 4 */
/*!*******************************************************************************!*\
  !*** ./cjs-tree-shaking/namespace/namespace-via-define-property-minimized.js ***!
  \*******************************************************************************/
/*! flagged exports */
/*! export __esModule [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export abc [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export default [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_exports__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-60 */
/***/ ((__unused_webpack_module, exports) => {

Object.defineProperty(exports, "__esModule", ({ value: !0 }));
exports.abc = "abc";
exports["default"] = "default";


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
/*!*********************************************!*\
  !*** ./cjs-tree-shaking/namespace/index.js ***!
  \*********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__, __webpack_require__.t, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-5:3 */
it("should allow to create namespace exports via __esModule on exports", async () => {
	expect(await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./namespace-via-exports */ 2))).toBe(
		__webpack_require__(/*! ./namespace-via-exports */ 2)
	);
});
it("should allow to create namespace exports via __esModule on literal", async () => {
	expect(await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./namespace-via-literal */ 0, 23))).toBe(
		__webpack_require__(/*! ./namespace-via-literal */ 0)
	);
});
it("should allow to create namespace exports via __esModule with Object.defineProperty", async () => {
	expect(await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./namespace-via-define-property */ 3))).toBe(
		__webpack_require__(/*! ./namespace-via-define-property */ 3)
	);
});
it("should allow to create namespace exports via __esModule with Object.defineProperty minimized true", async () => {
	expect(await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./namespace-via-define-property-minimized */ 4))).toBe(
		__webpack_require__(/*! ./namespace-via-define-property-minimized */ 4)
	);
});
it("should allow to create namespace exports via __esModule with Object.defineProperties", async () => {
	expect(await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./namespace-via-define-properties */ 1, 23))).toBe(
		__webpack_require__(/*! ./namespace-via-define-properties */ 1)
	);
});

})();

/******/ })()
;