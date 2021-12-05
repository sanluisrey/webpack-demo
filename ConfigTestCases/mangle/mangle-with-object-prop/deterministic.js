/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 186:
/*!*********************!*\
  !*** ./commonjs.js ***!
  \*********************/
/***/ ((module, exports) => {

var __webpack_unused_export__;
exports.Oi = "abc";
__webpack_unused_export__ = "def";
exports.dQ = () => {
	exports.toString = () => "toString";
};
exports.qP = module.id;
exports.a = "single char";
exports.jN = "single char non-identifier";
exports.$1 = "double char";
exports.Dm = "3 chars";


/***/ }),

/***/ 10:
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module */ 662);

const moduleId2 = (__webpack_require__(/*! ./commonjs */ 186)/* .moduleId */ .qP);
const toString2 = (__webpack_require__(/*! ./commonjs */ 186).toString);
const setToString2 = (__webpack_require__(/*! ./commonjs */ 186)/* .setToString */ .dQ);
const abc2 = (__webpack_require__(/*! ./commonjs */ 186)/* .abc */ .Oi);
const a2 = (__webpack_require__(/*! ./commonjs */ 186).a);
const equals2 = (__webpack_require__(/*! ./commonjs */ 186)/* ["="] */ .jN);
const $12 = (__webpack_require__(/*! ./commonjs */ 186).$1);
const __12 = (__webpack_require__(/*! ./commonjs */ 186)/* .__1 */ .Dm);

it("should mangle names and remove exports even with toString named export (ESM)", () => {
	expect(_module__WEBPACK_IMPORTED_MODULE_0__/* .abc */ .Oi).toBe("abc");
	expect(_module__WEBPACK_IMPORTED_MODULE_0__/* .toString */ .BB).toBe(undefined);
	(0,_module__WEBPACK_IMPORTED_MODULE_0__/* .setToString */ .dQ)();
	expect((0,_module__WEBPACK_IMPORTED_MODULE_0__/* .toString */ .BB)()).toBe("toString");
	expect(_module__WEBPACK_IMPORTED_MODULE_0__.a).toBe("single char");
	expect(_module__WEBPACK_IMPORTED_MODULE_0__.$1).toBe("double char");
	expect(_module__WEBPACK_IMPORTED_MODULE_0__/* .__1 */ .Dm).toBe("3 chars");
	expect(
		Object.keys(__webpack_require__.c[_module__WEBPACK_IMPORTED_MODULE_0__/* .moduleId */ .qP].exports)
			.map(p => p.length)
			.sort()
	).toEqual(
		 true
			? [1, 2, 2, 2, 2, 2, 2]
			: 0
	);
});

it("should mangle names and remove exports even with toString named export (CJS)", () => {
	expect(abc2).toBe("abc");
	expect(toString2).toBe(Object.prototype.toString);
	setToString2();
	const toString3 = (__webpack_require__(/*! ./commonjs */ 186).toString);
	expect(toString3()).toBe("toString");
	expect(a2).toBe("single char");
	expect(equals2).toBe("single char non-identifier");
	expect($12).toBe("double char");
	expect(__12).toBe("3 chars");
	expect(
		Object.keys(__webpack_require__.c[moduleId2].exports)
			.map(p => p.length)
			.sort()
	).toEqual(
		 true
			? [1, 2, 2, 2, 2, 2, 2, 8]
			: 0
	);
});


/***/ }),

/***/ 662:
/*!*******************!*\
  !*** ./module.js ***!
  \*******************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Oi": () => (/* binding */ abc),
/* harmony export */   "BB": () => (/* binding */ toString),
/* harmony export */   "dQ": () => (/* binding */ setToString),
/* harmony export */   "qP": () => (/* binding */ moduleId),
/* harmony export */   "a": () => (/* binding */ a),
/* harmony export */   "$1": () => (/* binding */ $1),
/* harmony export */   "Dm": () => (/* binding */ __1)
/* harmony export */ });
/* unused harmony export def */
const abc = "abc";
const def = "def";
let toString;
const setToString = () => {
	toString = () => "toString";
};
const moduleId = module.id;
const a = "single char";
const $1 = "double char";
const __1 = "3 chars";


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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
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
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__(10);
/******/ 	
/******/ })()
;