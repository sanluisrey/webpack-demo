/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/*!***************************************!*\
  !*** ./parsing/issue-2528/helperA.js ***!
  \***************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-42 */
/***/ ((module) => {

module.exports = function(a) { return a; }


/***/ }),
/* 1 */
/*!***************************************!*\
  !*** ./parsing/issue-2528/helperB.js ***!
  \***************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-3:1 */
/***/ ((module) => {

module.exports = {
	mark: function(a) { return a(); }
}


/***/ }),
/* 2 */
/*!***************************************!*\
  !*** ./parsing/issue-2528/helperC.js ***!
  \***************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-9:1 */
/***/ ((module) => {

module.exports = {
	wrap: function(fn) {
		return function() {
			var context = { prev: 0, next: 0, stop: function() { this.next = "end"; } };
			while(context.next !== "end")
				fn(context);
		}
	}
}


/***/ }),
/* 3 */,
/* 4 */
/*!**************************************!*\
  !*** ./parsing/issue-2528/module.js ***!
  \**************************************/
/*! namespace exports */
/*! export count [provided] [used in main] [renamed to Q] */
/*! export foo [provided] [used in main] [renamed to R] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ foo),
/* harmony export */   "Q": () => (/* binding */ count)
/* harmony export */ });
function foo() {
	count++;
    return;
}

var count = 0;


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************************!*\
  !*** ./parsing/issue-2528/index.js ***!
  \*************************************/
/*! namespace exports */
/*! export exportedAsync [provided] [unused] [renamed to O] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Statement (VariableDeclaration) with side effects in source code at 6:0-25:4 */
/* unused harmony export exportedAsync */
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module */ 4);
/* harmony import */ var _helperA__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helperA */ 0);
/* harmony import */ var _helperA__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_helperA__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helperB__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helperB */ 1);
/* harmony import */ var _helperB__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_helperB__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helperC__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helperC */ 2);
/* harmony import */ var _helperC__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_helperC__WEBPACK_IMPORTED_MODULE_2__);





var notExportedAsync = function () {
	var ref = _helperA__WEBPACK_IMPORTED_MODULE_0___default()(_helperB__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
		return _helperC__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						(0,_module__WEBPACK_IMPORTED_MODULE_3__/* .foo */ .R)();

					case 1:
					case 'end':
						return _context2.stop();
				}
			}
		}, _callee2, this);
	}));

	return function notExportedAsync() {
		return ref.apply(this, arguments);
	};
}();

var exportedAsync = function () {
	var ref = _helperA__WEBPACK_IMPORTED_MODULE_0___default()(_helperB__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
		return _helperC__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.next = 2;
						return (0,_module__WEBPACK_IMPORTED_MODULE_3__/* .foo */ .R)();

					case 2:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this);
	}));

	return function exportedAsync() {
		return ref.apply(this, arguments);
	};
}();



it("should run async functions", function() {
	var org = _module__WEBPACK_IMPORTED_MODULE_3__/* .count */ .Q;
	notExportedAsync();
	expect(_module__WEBPACK_IMPORTED_MODULE_3__/* .count */ .Q).toBe(org + 1);
	exportedAsync();
	expect(_module__WEBPACK_IMPORTED_MODULE_3__/* .count */ .Q).toBe(org + 2);
});

})();

/******/ })()
;