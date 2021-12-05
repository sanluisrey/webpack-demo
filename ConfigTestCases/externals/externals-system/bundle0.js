System.register(["external3","external4","external1","external2","external5"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE__618__ = {};
	var __WEBPACK_EXTERNAL_MODULE__43__ = {};
	var __WEBPACK_EXTERNAL_MODULE__87__ = {};
	var __WEBPACK_EXTERNAL_MODULE__524__ = {};
	var __WEBPACK_EXTERNAL_MODULE__756__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__87__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__524__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__756__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				__WEBPACK_EXTERNAL_MODULE__618__["default"] = module["default"];
				__WEBPACK_EXTERNAL_MODULE__618__.namedThing = module.namedThing;
			},
			function() {},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE__87__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE__524__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE__756__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 434:
/*!******************************!*\
  !*** ./reexport-external.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ external5__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var external5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! external5 */ 756);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in external5__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => external5__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);




/***/ }),

/***/ 87:
/*!****************************!*\
  !*** external "external1" ***!
  \****************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__87__;

/***/ }),

/***/ 524:
/*!****************************!*\
  !*** external "external2" ***!
  \****************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__524__;

/***/ }),

/***/ 618:
/*!****************************!*\
  !*** external "external3" ***!
  \****************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__618__;

/***/ }),

/***/ 43:
/*!****************************!*\
  !*** external "external4" ***!
  \****************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__43__;

/***/ }),

/***/ 756:
/*!****************************!*\
  !*** external "external5" ***!
  \****************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__756__;

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
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var external3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! external3 */ 618);
/* harmony import */ var external4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! external4 */ 43);



/* This test verifies that webpack externals are properly indicated as dependencies to System.
 * Also that when System provides the external variables to webpack that the variables get plumbed
 * through correctly and are usable by the webpack bundle.
 */
it("should get an external from System", function () {
	const external1 = __webpack_require__(/*! external1 */ 87);
	expect(external1.default).toBe("the external1 value");

	const external2 = __webpack_require__(/*! external2 */ 524);
	expect(external2.default).toBe("the external2 value");

	expect(external3__WEBPACK_IMPORTED_MODULE_0__["default"]).toBe("the external3 default export");
	expect(external3__WEBPACK_IMPORTED_MODULE_0__.namedThing).toBe("the external3 named export");

	const external5 = __webpack_require__(/*! ./reexport-external.js */ 434);
	expect(external5.default).toBe("the external5 default export");
	expect(external5.namedThing).toBe("the external5 named export");
});

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});