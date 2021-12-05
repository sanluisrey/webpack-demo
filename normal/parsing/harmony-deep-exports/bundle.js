/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/*!************************************************************!*\
  !*** ./parsing/harmony-deep-exports/reexport-namespace.js ***!
  \************************************************************/
/*! namespace exports */
/*! export counter [provided] [only properties used in main] [renamed to cL] -> ./parsing/harmony-deep-exports/counter.js */
/*!   export counter [provided] [used in main] [renamed to cL] */
/*!   export exportsInfo [provided] [used in main] [renamed to R5] */
/*!   export increment [provided] [used in main] [renamed to nP] */
/*!   export reset [provided] [used in main] [renamed to mc] */
/*!   export unusedExport [provided] [unused] [renamed to $y] */
/*! export counter2 [provided] [unused] [renamed to az] -> ./parsing/harmony-deep-exports/counter.js */
/*!   ... (6 already listed exports) */
/*! export exportsInfo [provided] [used in main] [renamed to R5] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Statement (ExportNamedDeclaration) with side effects in source code at 6:0-24:2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cL": () => (/* reexport module object */ _counter__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   "R5": () => (/* binding */ exportsInfo)
/* harmony export */ });
/* harmony import */ var _counter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./counter */ 2);





const exportsInfo = {
	increment: true,
	counter: true,
	reset: true,
	unusedExport: false,
	somethingElse: false,
	incrementInfo: true,
	counterInfo: true,
	resetInfo: true,
	unusedExportInfo: false,
	somethingElseInfo: false,
	incrementProvideInfo: true,
	somethingElseProvideInfo:
		false,
	ns: true,
	nsInfo: true,
	ns2: false,
	ns2Info: false
};


/***/ }),
/* 1 */
/*!*********************************************!*\
  !*** ./parsing/harmony-deep-exports/cjs.js ***!
  \*********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-3:2 */
/***/ ((module) => {

module.exports = {
	a: { b: { c: { d: () => 42 } } }
};


/***/ }),
/* 2 */
/*!*************************************************!*\
  !*** ./parsing/harmony-deep-exports/counter.js ***!
  \*************************************************/
/*! namespace exports */
/*! export counter [provided] [used in main] [renamed to cL] */
/*! export exportsInfo [provided] [used in main] [renamed to R5] */
/*! export increment [provided] [used in main] [renamed to nP] */
/*! export reset [provided] [used in main] [renamed to mc] */
/*! export unusedExport [provided] [unused] [renamed to $y] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Statement (ExportNamedDeclaration) with side effects in source code at 10:0-23:2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cL": () => (/* binding */ counter),
/* harmony export */   "nP": () => (/* binding */ increment),
/* harmony export */   "mc": () => (/* binding */ reset),
/* harmony export */   "R5": () => (/* binding */ exportsInfo)
/* harmony export */ });
/* unused harmony export unusedExport */
let counter = 0;
const increment = () => {
	counter++;
};
function reset() {
	counter = 0;
}
const unusedExport = 42;

const exportsInfo = {
	increment: true,
	counter: true,
	reset: true,
	unusedExport: false,
	somethingElse: false,
	incrementInfo: true,
	counterInfo: true,
	resetInfo: true,
	unusedExportInfo: false,
	somethingElseInfo: false,
	incrementProvideInfo: true,
	somethingElseProvideInfo: false
};


/***/ }),
/* 3 */,
/* 4 */
/*!******************************************************************!*\
  !*** ./parsing/harmony-deep-exports/reexport-namespace-again.js ***!
  \******************************************************************/
/*! namespace exports */
/*! export CC [provided] [only properties used in main] [could be renamed] -> ./parsing/harmony-deep-exports/reexport-namespace.js */
/*!   export counter [provided] [only properties used in main] [renamed to cL] -> ./parsing/harmony-deep-exports/counter.js */
/*!     export counter [provided] [used in main] [renamed to cL] */
/*!     export exportsInfo [provided] [used in main] [renamed to R5] */
/*!     export increment [provided] [used in main] [renamed to nP] */
/*!     export reset [provided] [used in main] [renamed to mc] */
/*!     export unusedExport [provided] [unused] [renamed to $y] */
/*!   export counter2 [provided] [unused] [renamed to az] -> ./parsing/harmony-deep-exports/counter.js */
/*!     ... (6 already listed exports) */
/*!   export exportsInfo [provided] [used in main] [renamed to R5] */
/*! export exportsInfo [provided] [used in main] [renamed to R] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Statement (ExportNamedDeclaration) with side effects in source code at 4:0-52 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CC": () => (/* reexport module object */ _reexport_namespace__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   "R": () => (/* binding */ exportsInfo)
/* harmony export */ });
/* harmony import */ var _reexport_namespace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reexport-namespace */ 0);



const exportsInfo = true;


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
/*!***********************************************!*\
  !*** ./parsing/harmony-deep-exports/index.js ***!
  \***********************************************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 5:0-10:3 */
/* harmony import */ var _reexport_namespace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reexport-namespace */ 0);
/* harmony import */ var _reexport_namespace_again__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reexport-namespace-again */ 4);
/* harmony import */ var _cjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cjs */ 1);
/* harmony import */ var _cjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_cjs__WEBPACK_IMPORTED_MODULE_2__);




it("should allow to reexport namespaces 1", () => {
	(0, _reexport_namespace__WEBPACK_IMPORTED_MODULE_0__/* .counter.reset */ .cL.mc)();
	expect(_reexport_namespace__WEBPACK_IMPORTED_MODULE_0__/* .counter.counter */ .cL.cL).toBe(0);
	(0, _reexport_namespace__WEBPACK_IMPORTED_MODULE_0__/* .counter.increment */ .cL.nP)();
	expect(_reexport_namespace__WEBPACK_IMPORTED_MODULE_0__/* .counter.counter */ .cL.cL).toBe(1);
});

it("should allow to reexport namespaces 2", () => {
	(0, _reexport_namespace__WEBPACK_IMPORTED_MODULE_0__/* .counter.reset */ .cL.mc)();
	expect(_reexport_namespace__WEBPACK_IMPORTED_MODULE_0__/* .counter.counter */ .cL.cL).toBe(0);
	(0, _reexport_namespace__WEBPACK_IMPORTED_MODULE_0__/* .counter.increment */ .cL.nP)();
	expect(_reexport_namespace__WEBPACK_IMPORTED_MODULE_0__/* .counter.counter */ .cL.cL).toBe(1);
});

it("should allow to reexport namespaces 3", () => {
	(0, _reexport_namespace_again__WEBPACK_IMPORTED_MODULE_1__/* .CC.counter.reset */ .CC.cL.mc)();
	expect(_reexport_namespace_again__WEBPACK_IMPORTED_MODULE_1__/* .CC.counter.counter */ .CC.cL.cL).toBe(0);
	(0, _reexport_namespace_again__WEBPACK_IMPORTED_MODULE_1__/* .CC.counter.increment */ .CC.cL.nP)();
	expect(_reexport_namespace_again__WEBPACK_IMPORTED_MODULE_1__/* .CC.counter.counter */ .CC.cL.cL).toBe(1);
});



it("should be able to call a deep function in commonjs", () => {
	expect(_cjs__WEBPACK_IMPORTED_MODULE_2___default().a.b.c.d()).toBe(42);
});

it("should report consistent exports info", () => {
	const x1 = _reexport_namespace__WEBPACK_IMPORTED_MODULE_0__/* .counter.exportsInfo */ .cL.R5;

	if (process.env.NODE_ENV === "production") {
		expect(x1.incrementInfo).toBe(true);
		expect(x1.counterInfo).toBe(true);
		expect(x1.resetInfo).toBe(true);
		expect(x1.unusedExport).toBe(false);
		expect(x1.unusedExportInfo).toBe(false);
		expect(x1.somethingElse).toBe(false);
		expect(x1.somethingElseInfo).toBe(false);
		expect(_reexport_namespace__WEBPACK_IMPORTED_MODULE_0__/* .exportsInfo.nsInfo */ .R5.nsInfo).toBe(true);
		expect(_reexport_namespace__WEBPACK_IMPORTED_MODULE_0__/* .exportsInfo.ns2 */ .R5.ns2).toBe(false);
		expect(_reexport_namespace__WEBPACK_IMPORTED_MODULE_0__/* .exportsInfo.ns2Info */ .R5.ns2Info).toBe(false);
	} else if (process.env.NODE_ENV === "development") {
		expect(x1.incrementInfo).toBe(undefined);
		expect(x1.counterInfo).toBe(undefined);
		expect(x1.resetInfo).toBe(undefined);
		expect(x1.unusedExport).toBe(true);
		expect(x1.unusedExportInfo).toBe(undefined);
		expect(x1.somethingElse).toBe(true);
		expect(x1.somethingElseInfo).toBe(undefined);
		expect(_reexport_namespace__WEBPACK_IMPORTED_MODULE_0__/* .exportsInfo.nsInfo */ .R5.nsInfo).toBe(undefined);
		expect(_reexport_namespace__WEBPACK_IMPORTED_MODULE_0__/* .exportsInfo.ns2 */ .R5.ns2).toBe(true);
		expect(_reexport_namespace__WEBPACK_IMPORTED_MODULE_0__/* .exportsInfo.ns2Info */ .R5.ns2Info).toBe(undefined);
	}
	expect(x1.increment).toBe(true);
	expect(x1.counter).toBe(true);
	expect(x1.reset).toBe(true);
	expect(x1.incrementProvideInfo).toBe(true);
	expect(x1.somethingElseProvideInfo).toBe(false);
	expect(_reexport_namespace__WEBPACK_IMPORTED_MODULE_0__/* .exportsInfo.increment */ .R5.increment).toBe(x1.increment);
	expect(_reexport_namespace__WEBPACK_IMPORTED_MODULE_0__/* .exportsInfo.counter */ .R5.counter).toBe(x1.counter);
	expect(_reexport_namespace__WEBPACK_IMPORTED_MODULE_0__/* .exportsInfo.reset */ .R5.reset).toBe(x1.reset);
	expect(_reexport_namespace__WEBPACK_IMPORTED_MODULE_0__/* .exportsInfo.unusedExport */ .R5.unusedExport).toBe(x1.unusedExport);
	expect(_reexport_namespace__WEBPACK_IMPORTED_MODULE_0__/* .exportsInfo.incrementInfo */ .R5.incrementInfo).toBe(x1.incrementInfo);
	expect(_reexport_namespace__WEBPACK_IMPORTED_MODULE_0__/* .exportsInfo.counterInfo */ .R5.counterInfo).toBe(x1.counterInfo);
	expect(_reexport_namespace__WEBPACK_IMPORTED_MODULE_0__/* .exportsInfo.resetInfo */ .R5.resetInfo).toBe(x1.resetInfo);
	expect(_reexport_namespace__WEBPACK_IMPORTED_MODULE_0__/* .exportsInfo.unusedExportInfo */ .R5.unusedExportInfo).toBe(x1.unusedExportInfo);
	expect(_reexport_namespace__WEBPACK_IMPORTED_MODULE_0__/* .exportsInfo.incrementProvideInfo */ .R5.incrementProvideInfo).toBe(x1.incrementProvideInfo);
	expect(_reexport_namespace__WEBPACK_IMPORTED_MODULE_0__/* .exportsInfo.somethingElseProvideInfo */ .R5.somethingElseProvideInfo).toBe(
		x1.somethingElseProvideInfo
	);
	expect(_reexport_namespace__WEBPACK_IMPORTED_MODULE_0__/* .exportsInfo.ns */ .R5.ns).toBe(true);
	expect(_reexport_namespace_again__WEBPACK_IMPORTED_MODULE_1__/* .exportsInfo */ .R).toBe(true);
	expect(true).toBe(true);
});

})();

/******/ })()
;