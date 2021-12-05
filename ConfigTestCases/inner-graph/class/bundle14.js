/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 326:
/*!***********************************!*\
  !*** ../_helpers/inner-file.js?0 ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ __usedExports)
/* harmony export */ });
/* harmony import */ var _unknown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unknown */ 256);
/* harmony import */ var _unknown__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_unknown__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_unknown__WEBPACK_IMPORTED_MODULE_0__, "deepEqual")) __webpack_require__.d(__webpack_exports__, { "deepEqual": function() { return _unknown__WEBPACK_IMPORTED_MODULE_0__.deepEqual; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_unknown__WEBPACK_IMPORTED_MODULE_0__, "equal")) __webpack_require__.d(__webpack_exports__, { "equal": function() { return _unknown__WEBPACK_IMPORTED_MODULE_0__.equal; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_unknown__WEBPACK_IMPORTED_MODULE_0__, "getNameA")) __webpack_require__.d(__webpack_exports__, { "getNameA": function() { return _unknown__WEBPACK_IMPORTED_MODULE_0__.getNameA; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_unknown__WEBPACK_IMPORTED_MODULE_0__, "getNameB")) __webpack_require__.d(__webpack_exports__, { "getNameB": function() { return _unknown__WEBPACK_IMPORTED_MODULE_0__.getNameB; } });


const __usedExports = ["__usedExports","deepEqual","equal","getNameA","getNameB"];


/***/ }),

/***/ 154:
/*!********************************************************************!*\
  !*** ../_helpers/testModuleLoader.js?["ExportCls1","ExportCls2"]! ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module */ 662);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([_module__WEBPACK_IMPORTED_MODULE_0__/* .ExportCls1 */ .jx, _module__WEBPACK_IMPORTED_MODULE_0__/* .ExportCls2 */ .$H]);

/***/ }),

/***/ 256:
/*!******************************!*\
  !*** ../_helpers/unknown.js ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ 662:
/*!*******************!*\
  !*** ./module.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "jx": () => (/* binding */ ExportCls1),
/* harmony export */   "$H": () => (/* binding */ ExportCls2)
/* harmony export */ });
/* unused harmony exports ExportCls3, ExportCls4, ExportCls5a, ExportCls5b, ExportCls6, ExportCls7 */
/* harmony import */ var _assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assert */ 326);


function fun1() {
	(0,_assert__WEBPACK_IMPORTED_MODULE_0__.deepEqual)(1, 1);
}

function fun2() {
	fun1();
}

function fun3() {
	fun2();
}

function fun4() {
	fun3();
}

class ExportCls1 {
	constructor() {
		fun4();
	}
}

class ExportCls2 {
	add() {
		this.name = _assert__WEBPACK_IMPORTED_MODULE_0__.equal;
	}
}

class ExportCls3 {
	static add = (/* unused pure expression or super */ null && (() => {
		strictEqual();
	}));
}

class ExportCls4 {
	static name = (/* unused pure expression or super */ null && (notEqual));
}

class ExportCls5a {
	static name = (0,_assert__WEBPACK_IMPORTED_MODULE_0__.getNameA)();
}

class ExportCls5b {
	static [(0,_assert__WEBPACK_IMPORTED_MODULE_0__.getNameB)()] = (/* unused pure expression or super */ null && ("name"));
}

class ExportCls6 {
	add = () => {
		maybeEqual();
	};
}

class ExportCls7 {
	add = definiteEqual();
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
/*!***********************************************************************************************************************************************************************!*\
  !*** ../_helpers/entryLoader.js?{"usedExports":["ExportCls1","ExportCls2"],"expect":{"./assert":["getNameA","getNameB","deepEqual","equal"]},"name":"ExportCls1_2"}! ***!
  \***********************************************************************************************************************************************************************/
/* harmony import */ var _assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assert */ 326);
if (Math.random() < 0) __webpack_require__(/*! ../_helpers/testModuleLoader?["ExportCls1","ExportCls2"]! */ 154);


it("ExportCls1_2 should have the correct exports used for ./assert", () => {
expect(_assert__WEBPACK_IMPORTED_MODULE_0__/* .__usedExports */ .b).toEqual(["__usedExports","deepEqual","equal","getNameA","getNameB"]);
});

})();

/******/ })()
;