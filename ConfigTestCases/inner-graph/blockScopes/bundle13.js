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
/* harmony reexport (checked) */ if(__webpack_require__.o(_unknown__WEBPACK_IMPORTED_MODULE_0__, "F")) __webpack_require__.d(__webpack_exports__, { "F": function() { return _unknown__WEBPACK_IMPORTED_MODULE_0__.F; } });


const __usedExports = ["F","__usedExports"];


/***/ }),

/***/ 483:
/*!**********************************************************!*\
  !*** ../_helpers/testModuleLoader.js?["f"]! + 1 modules ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ testModuleLoader_f_)
});

// EXTERNAL MODULE: ../_helpers/inner-file.js?0
var inner_file0 = __webpack_require__(326);
;// CONCATENATED MODULE: ./module.js




if (Math.random() > 0.5) {
	var a = () => A;
	let b = () => B;
}

let b;

var c = () => C1;
couldCallExportC();
var c = () => C2;
couldCallExportC();

while (Math.random() > 0.5) {
	let d = () => D1;
}

while (Math.random() > 0.5) {
	var d = () => D2;
}

while (Math.random() > 0.5) {
	let d = () => D1;
}

if (false) {}

var e = (/* unused pure expression or super */ null && ( true ? E2 : 0));



if (true) {
	let inner = () => inner_file0.F;

	var f = () => inner();
}

if (true) {
	const inner = () => G;

	var g = () => inner();
}

;// CONCATENATED MODULE: ../_helpers/testModuleLoader.js?["f"]!

/* harmony default export */ const testModuleLoader_f_ = ([f]);

/***/ }),

/***/ 256:
/*!******************************!*\
  !*** ../_helpers/unknown.js ***!
  \******************************/
/***/ (() => {



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
/*!**********************************************************************************************!*\
  !*** ../_helpers/entryLoader.js?{"usedExports":["f"],"expect":{"./test":["F"]},"name":"f"}! ***!
  \**********************************************************************************************/
/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test */ 326);
if (Math.random() < 0) __webpack_require__(/*! ../_helpers/testModuleLoader?["f"]! */ 483);


it("f should have the correct exports used for ./test", () => {
expect(_test__WEBPACK_IMPORTED_MODULE_0__/* .__usedExports */ .b).toEqual(["F","__usedExports"]);
});

})();

/******/ })()
;