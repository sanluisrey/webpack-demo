/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/*!***********************************************!*\
  !*** ./mjs/non-mjs-cjs-import-default/cjs.js ***!
  \***********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-4:2 */
/***/ ((module) => {

module.exports = {
	data: "ok",
	default: "default"
};


/***/ }),
/* 1 */
/*!***************************************************!*\
  !*** ./mjs/non-mjs-cjs-import-default/dynamic.js ***!
  \***************************************************/
/*! dynamic exports */
/*! export __esModule [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export data [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export default [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_exports__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-40 */
/***/ ((__unused_webpack_module, exports) => {

exports.__esModule = Math.random() < -1;
exports.data = "ok";
exports["default"] = "default";


/***/ }),
/* 2 */
/*!***************************************************!*\
  !*** ./mjs/non-mjs-cjs-import-default/flagged.js ***!
  \***************************************************/
/*! flagged exports */
/*! export __esModule [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export data [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export default [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_exports__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-26 */
/***/ ((__unused_webpack_module, exports) => {

exports.__esModule = true;
exports.data = "ok";
exports["default"] = "default";


/***/ }),
/* 3 */
/*!**********************************************************!*\
  !*** ./mjs/non-mjs-cjs-import-default/dynamicFlagged.js ***!
  \**********************************************************/
/*! dynamic exports */
/*! export __esModule [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export data [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export default [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_exports__ */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-40 */
/***/ ((__unused_webpack_module, exports) => {

exports.__esModule = Math.random() > -1;
exports.data = "ok";
exports["default"] = "default";


/***/ }),
/* 4 */
/*!****************************************************!*\
  !*** ./mjs/non-mjs-cjs-import-default/reexport.js ***!
  \****************************************************/
/*! namespace exports */
/*! export data [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./mjs/non-mjs-cjs-import-default/cjs.js .data */
/*! export def [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./mjs/non-mjs-cjs-import-default/cjs.js .default */
/*! export default [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./mjs/non-mjs-cjs-import-default/cjs.js .default */
/*! export ns [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./mjs/non-mjs-cjs-import-default/cjs.js */
/*!   export data [maybe provided (runtime-defined)] [no usage info in main] [usage and provision prevents renaming] */
/*!   export default [maybe provided (runtime-defined)] [no usage info in main] [usage and provision prevents renaming] */
/*!   other exports [maybe provided (runtime-defined)] [no usage info in main] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/*! Dependency (harmony side effect evaluation) with side effects at 1:0-31 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ns": () => (/* reexport module object */ _cjs_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   "default": () => (/* reexport default from dynamic */ _cjs_js__WEBPACK_IMPORTED_MODULE_0___default.a),
/* harmony export */   "def": () => (/* reexport default from dynamic */ _cjs_js__WEBPACK_IMPORTED_MODULE_0___default.a),
/* harmony export */   "data": () => (/* reexport safe */ _cjs_js__WEBPACK_IMPORTED_MODULE_0__.data)
/* harmony export */ });
/* harmony import */ var _cjs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cjs.js */ 0);
/* harmony import */ var _cjs_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_cjs_js__WEBPACK_IMPORTED_MODULE_0__);







/***/ }),
/* 5 */
/*!**************************************************!*\
  !*** ./mjs/non-mjs-cjs-import-default/data.json ***!
  \**************************************************/
/*! default exports */
/*! export __esModule [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export data [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export default [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"__esModule":true,"data":"ok","default":"default"}');

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
/*!*************************************************!*\
  !*** ./mjs/non-mjs-cjs-import-default/index.js ***!
  \*************************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.t, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 22:0-80:3 */
var _data_json__WEBPACK_IMPORTED_MODULE_5___namespace_cache;
/* harmony import */ var _cjs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cjs.js */ 0);
/* harmony import */ var _cjs_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_cjs_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reexport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reexport.js */ 4);
/* harmony import */ var _dynamic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dynamic.js */ 1);
/* harmony import */ var _dynamic_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dynamic_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _flagged_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flagged.js */ 2);
/* harmony import */ var _dynamicFlagged_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dynamicFlagged.js */ 3);
/* harmony import */ var _dynamicFlagged_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_dynamicFlagged_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data.json */ 5);





















it("should get correct values when importing named exports from a CommonJs module from non-mjs", function () {
	expect(typeof _cjs_js__WEBPACK_IMPORTED_MODULE_0__.data).toBe("string");
	expect({ data: _cjs_js__WEBPACK_IMPORTED_MODULE_0__.data }).toEqual({ data: "ok" });
	expect((_cjs_js__WEBPACK_IMPORTED_MODULE_0___default())).toEqual({
		data: "ok",
		default: "default"
	});
	expect({ def: (_cjs_js__WEBPACK_IMPORTED_MODULE_0___default()) }).toEqual({
		def: {
			data: "ok",
			default: "default"
		}
	});
	expect(_cjs_js__WEBPACK_IMPORTED_MODULE_0__).toEqual({
		data: "ok",
		default: "default"
	});
	expect({ star: _cjs_js__WEBPACK_IMPORTED_MODULE_0__ }).toEqual({
		star: {
			data: "ok",
			default: "default"
		}
	});
	expect((_cjs_js__WEBPACK_IMPORTED_MODULE_0___default())).toEqual({
		data: "ok",
		default: "default"
	});
	expect(_reexport_js__WEBPACK_IMPORTED_MODULE_1__.ns).toEqual({
		data: "ok",
		default: "default"
	});
	expect(_reexport_js__WEBPACK_IMPORTED_MODULE_1__["default"]).toEqual({
		data: "ok",
		default: "default"
	});
	expect(_reexport_js__WEBPACK_IMPORTED_MODULE_1__.def).toEqual({
		data: "ok",
		default: "default"
	});
	expect(typeof _reexport_js__WEBPACK_IMPORTED_MODULE_1__.data).toBe("string");
	expect({ data2: _reexport_js__WEBPACK_IMPORTED_MODULE_1__.data }).toEqual({ data2: "ok" });
	expect(_reexport_js__WEBPACK_IMPORTED_MODULE_1__).toEqual(
		nsObj({
			ns: {
				data: "ok",
				default: "default"
			},
			default: {
				data: "ok",
				default: "default"
			},
			def: {
				data: "ok",
				default: "default"
			},
			data: "ok"
		})
	);
});

it("should get correct values when importing named exports from a flagged module from non-mjs", function () {
	expect(typeof _flagged_js__WEBPACK_IMPORTED_MODULE_3__.data).toBe("string");
	expect({ flaggedData: _flagged_js__WEBPACK_IMPORTED_MODULE_3__.data }).toEqual({ flaggedData: "ok" });
	expect(_flagged_js__WEBPACK_IMPORTED_MODULE_3__["default"]).toBe("default");
	expect({ flaggedDef: _flagged_js__WEBPACK_IMPORTED_MODULE_3__["default"] }).toEqual({
		flaggedDef: "default"
	});
	expect(_flagged_js__WEBPACK_IMPORTED_MODULE_3__).toEqual({
		__esModule: true,
		default: "default",
		data: "ok"
	});
	expect({ flaggedStar: _flagged_js__WEBPACK_IMPORTED_MODULE_3__ }).toEqual({
		flaggedStar: {
			__esModule: true,
			default: "default",
			data: "ok"
		}
	});
	expect(_flagged_js__WEBPACK_IMPORTED_MODULE_3__["default"]).toBe("default");
});

it("should get correct values when importing named exports from a dynamic (non-flagged) module from non-mjs", function () {
	expect(typeof _dynamic_js__WEBPACK_IMPORTED_MODULE_2__.data).toBe("string");
	expect({ dynamicData: _dynamic_js__WEBPACK_IMPORTED_MODULE_2__.data }).toEqual({ dynamicData: "ok" });
	expect((_dynamic_js__WEBPACK_IMPORTED_MODULE_2___default())).toEqual({
		__esModule: false,
		data: "ok",
		default: "default"
	});
	expect({ dynamicDef: (_dynamic_js__WEBPACK_IMPORTED_MODULE_2___default()) }).toEqual({
		dynamicDef: {
			__esModule: false,
			data: "ok",
			default: "default"
		}
	});
	expect(_dynamic_js__WEBPACK_IMPORTED_MODULE_2__).toEqual({
		__esModule: false,
		data: "ok",
		default: "default"
	});
	expect({ dynamicStar: _dynamic_js__WEBPACK_IMPORTED_MODULE_2__ }).toEqual({
		dynamicStar: {
			__esModule: false,
			data: "ok",
			default: "default"
		}
	});
	expect((_dynamic_js__WEBPACK_IMPORTED_MODULE_2___default())).toEqual({
		__esModule: false,
		data: "ok",
		default: "default"
	});
});

it("should get correct values when importing named exports from a dynamic (flagged) module from non-mjs", function () {
	expect(typeof _dynamicFlagged_js__WEBPACK_IMPORTED_MODULE_4__.data).toBe("string");
	expect({ dynamicFlaggedData: _dynamicFlagged_js__WEBPACK_IMPORTED_MODULE_4__.data }).toEqual({ dynamicFlaggedData: "ok" });
	expect((_dynamicFlagged_js__WEBPACK_IMPORTED_MODULE_4___default())).toBe("default");
	expect({ dynamicFlaggedDef: (_dynamicFlagged_js__WEBPACK_IMPORTED_MODULE_4___default()) }).toEqual({
		dynamicFlaggedDef: "default"
	});
	expect(_dynamicFlagged_js__WEBPACK_IMPORTED_MODULE_4__).toEqual({
		__esModule: true,
		default: "default",
		data: "ok"
	});
	expect({ dynamicFlaggedStar: _dynamicFlagged_js__WEBPACK_IMPORTED_MODULE_4__ }).toEqual({
		dynamicFlaggedStar: {
			__esModule: true,
			default: "default",
			data: "ok"
		}
	});
	expect((_dynamicFlagged_js__WEBPACK_IMPORTED_MODULE_4___default())).toBe("default");
});

it("should get correct values when importing named exports from a default-only module from non-mjs", function () {
	expect(_data_json__WEBPACK_IMPORTED_MODULE_5__).toEqual({
		__esModule: true,
		data: "ok",
		default: "default"
	});
	expect({ jsonDef: _data_json__WEBPACK_IMPORTED_MODULE_5__ }).toEqual({
		jsonDef: {
			__esModule: true,
			data: "ok",
			default: "default"
		}
	});
	expect(/*#__PURE__*/ (_data_json__WEBPACK_IMPORTED_MODULE_5___namespace_cache || (_data_json__WEBPACK_IMPORTED_MODULE_5___namespace_cache = __webpack_require__.t(_data_json__WEBPACK_IMPORTED_MODULE_5__, 2)))).toEqual(
		nsObj({
			data: "ok",
			default: {
				__esModule: true,
				data: "ok",
				default: "default"
			}
		})
	);
	expect({ jsonStar: /*#__PURE__*/ (_data_json__WEBPACK_IMPORTED_MODULE_5___namespace_cache || (_data_json__WEBPACK_IMPORTED_MODULE_5___namespace_cache = __webpack_require__.t(_data_json__WEBPACK_IMPORTED_MODULE_5__, 2))) }).toEqual({
		jsonStar: nsObj({
			data: "ok",
			default: {
				__esModule: true,
				data: "ok",
				default: "default"
			}
		})
	});
	expect(_data_json__WEBPACK_IMPORTED_MODULE_5__).toEqual({
		__esModule: true,
		data: "ok",
		default: "default"
	});
});

})();

/******/ })()
;