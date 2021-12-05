/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/*!*********************************************!*\
  !*** ./parsing/harmony-export-hoist/foo.js ***!
  \*********************************************/
/*! namespace exports */
/*! export default [provided] [used in main] [renamed to ZP] */
/*! export foo [provided] [used in main] [renamed to RN] */
/*! export foo2 [provided] [used in main] [renamed to l6] */
/*! export results [provided] [used in main] [renamed to sW] -> ./parsing/harmony-export-hoist/bar.js .default */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Dependency (harmony side effect evaluation) with side effects at 1:0-28 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RN": () => (/* binding */ foo),
/* harmony export */   "l6": () => (/* binding */ foo2),
/* harmony export */   "ZP": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "sW": () => (/* reexport safe */ _bar__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bar */ 9);


function foo() {
	return "ok";
}

function foo2() {
	return "ok";
}


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
	return "ok";
}




/***/ }),
/* 1 */
/*!**************************************************************!*\
  !*** ./parsing/harmony-export-hoist/func-no-args-no-name.js ***!
  \**************************************************************/
/*! namespace exports */
/*! export default [provided] [used in main] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 3:0-23 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _get_func_no_args_no_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-func-no-args-no-name */ 11);


expect((0,_get_func_no_args_no_name__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)()).toBe("ok");

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
	return "ok";
}


/***/ }),
/* 2 */
/*!****************************************************************!*\
  !*** ./parsing/harmony-export-hoist/func-no-args-with-name.js ***!
  \****************************************************************/
/*! namespace exports */
/*! export default [provided] [used in main] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 3:0-23 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ def)
/* harmony export */ });
/* harmony import */ var _get_func_no_args_with_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-func-no-args-with-name */ 12);


expect((0,_get_func_no_args_with_name__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)()).toBe("ok");
expect(def).toBe(_get_func_no_args_with_name__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);
if (process.env.NODE_ENV !== "production") expect(_get_func_no_args_with_name__WEBPACK_IMPORTED_MODULE_0__/* ["default"].name */ .Z.name).toBe("def");

function def() {
	return "ok";
}


/***/ }),
/* 3 */
/*!****************************************************************!*\
  !*** ./parsing/harmony-export-hoist/func-with-args-no-name.js ***!
  \****************************************************************/
/*! namespace exports */
/*! export default [provided] [used in main] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 3:0-29 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _get_func_with_args_no_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-func-with-args-no-name */ 13);


expect((0,_get_func_with_args_no_name__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(123)).toBe("ok123");

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(x) {
	return "ok" + x;
}


/***/ }),
/* 4 */
/*!******************************************************************!*\
  !*** ./parsing/harmony-export-hoist/func-with-args-with-name.js ***!
  \******************************************************************/
/*! namespace exports */
/*! export default [provided] [used in main] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 3:0-29 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ def)
/* harmony export */ });
/* harmony import */ var _get_func_with_args_with_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-func-with-args-with-name */ 14);


expect((0,_get_func_with_args_with_name__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(123)).toBe("ok123");
if (process.env.NODE_ENV !== "production") expect(_get_func_with_args_with_name__WEBPACK_IMPORTED_MODULE_0__/* ["default"].name */ .Z.name).toBe("def");
expect(def).toBe(_get_func_with_args_with_name__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

function def(x) {
	return "ok" + x;
}


/***/ }),
/* 5 */
/*!*******************************************************!*\
  !*** ./parsing/harmony-export-hoist/class-no-name.js ***!
  \*******************************************************/
/*! namespace exports */
/*! export default [provided] [used in main] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 9:0-31 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _get_class_no_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-class-no-name */ 15);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {
	f() {
		return "ok";
	}
});

expect(new _get_class_no_name__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z().f()).toBe("ok");


/***/ }),
/* 6 */
/*!*********************************************************!*\
  !*** ./parsing/harmony-export-hoist/class-with-name.js ***!
  \*********************************************************/
/*! namespace exports */
/*! export default [provided] [used in main] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 9:0-31 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ def)
/* harmony export */ });
/* harmony import */ var _get_class_with_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-class-with-name */ 16);


class def {
	f() {
		return "ok";
	}
}

expect(new _get_class_with_name__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z().f()).toBe("ok");
if (process.env.NODE_ENV !== "production") expect(_get_class_with_name__WEBPACK_IMPORTED_MODULE_0__/* ["default"].name */ .Z.name).toBe("def");
expect(def).toBe(_get_class_with_name__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);


/***/ }),
/* 7 */
/*!******************************************************************!*\
  !*** ./parsing/harmony-export-hoist/class-with-super-no-name.js ***!
  \******************************************************************/
/*! namespace exports */
/*! export default [provided] [used in main] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 15:0-31 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _get_class_with_super_no_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-class-with-super-no-name */ 17);


class sup {
	g() {
		return "ok";
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class extends sup {
	f() {
		return "ok";
	}
});

expect(new _get_class_with_super_no_name__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z().f()).toBe("ok");
expect(new _get_class_with_super_no_name__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z().g()).toBe("ok");


/***/ }),
/* 8 */
/*!********************************************************************!*\
  !*** ./parsing/harmony-export-hoist/class-with-super-with-name.js ***!
  \********************************************************************/
/*! namespace exports */
/*! export default [provided] [used in main] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 15:0-31 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ def)
/* harmony export */ });
/* harmony import */ var _get_class_with_super_with_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-class-with-super-with-name */ 18);


class sup {
	g() {
		return "ok";
	}
}

class def extends sup {
	f() {
		return "ok";
	}
}

expect(new _get_class_with_super_with_name__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z().f()).toBe("ok");
expect(new _get_class_with_super_with_name__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z().g()).toBe("ok");
if (process.env.NODE_ENV !== "production") expect(_get_class_with_super_with_name__WEBPACK_IMPORTED_MODULE_0__/* ["default"].name */ .Z.name).toBe("def");
expect(_get_class_with_super_with_name__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z).toBe(def);


/***/ }),
/* 9 */
/*!*********************************************!*\
  !*** ./parsing/harmony-export-hoist/bar.js ***!
  \*********************************************/
/*! namespace exports */
/*! export default [provided] [used in main] [renamed to Z] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Statement (ExportDefaultDeclaration) with side effects in source code at 4:0-8:2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _foo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./foo */ 0);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
	foo: _foo__WEBPACK_IMPORTED_MODULE_0__/* .foo */ .RN,
	foo2: _foo__WEBPACK_IMPORTED_MODULE_0__/* .foo2 */ .l6,
	foo3: _foo__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP
});


/***/ }),
/* 10 */,
/* 11 */
/*!******************************************************************!*\
  !*** ./parsing/harmony-export-hoist/get-func-no-args-no-name.js ***!
  \******************************************************************/
/*! namespace exports */
/*! export default [provided] [used in main] [renamed to Z] -> ./parsing/harmony-export-hoist/func-no-args-no-name.js .default */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Dependency (harmony side effect evaluation) with side effects at 1:0-49 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _func_no_args_no_name__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _func_no_args_no_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./func-no-args-no-name */ 1);



/***/ }),
/* 12 */
/*!********************************************************************!*\
  !*** ./parsing/harmony-export-hoist/get-func-no-args-with-name.js ***!
  \********************************************************************/
/*! namespace exports */
/*! export default [provided] [used in main] [renamed to Z] -> ./parsing/harmony-export-hoist/func-no-args-with-name.js .default */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Dependency (harmony side effect evaluation) with side effects at 1:0-51 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _func_no_args_with_name__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _func_no_args_with_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./func-no-args-with-name */ 2);



/***/ }),
/* 13 */
/*!********************************************************************!*\
  !*** ./parsing/harmony-export-hoist/get-func-with-args-no-name.js ***!
  \********************************************************************/
/*! namespace exports */
/*! export default [provided] [used in main] [renamed to Z] -> ./parsing/harmony-export-hoist/func-with-args-no-name.js .default */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Dependency (harmony side effect evaluation) with side effects at 1:0-51 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _func_with_args_no_name__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _func_with_args_no_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./func-with-args-no-name */ 3);



/***/ }),
/* 14 */
/*!**********************************************************************!*\
  !*** ./parsing/harmony-export-hoist/get-func-with-args-with-name.js ***!
  \**********************************************************************/
/*! namespace exports */
/*! export default [provided] [used in main] [renamed to Z] -> ./parsing/harmony-export-hoist/func-with-args-with-name.js .default */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Dependency (harmony side effect evaluation) with side effects at 1:0-53 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _func_with_args_with_name__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _func_with_args_with_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./func-with-args-with-name */ 4);



/***/ }),
/* 15 */
/*!***********************************************************!*\
  !*** ./parsing/harmony-export-hoist/get-class-no-name.js ***!
  \***********************************************************/
/*! namespace exports */
/*! export default [provided] [used in main] [renamed to Z] -> ./parsing/harmony-export-hoist/class-no-name.js .default */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Dependency (harmony side effect evaluation) with side effects at 1:0-42 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _class_no_name__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _class_no_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class-no-name */ 5);



/***/ }),
/* 16 */
/*!*************************************************************!*\
  !*** ./parsing/harmony-export-hoist/get-class-with-name.js ***!
  \*************************************************************/
/*! namespace exports */
/*! export default [provided] [used in main] [renamed to Z] -> ./parsing/harmony-export-hoist/class-with-name.js .default */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Dependency (harmony side effect evaluation) with side effects at 1:0-44 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _class_with_name__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _class_with_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class-with-name */ 6);



/***/ }),
/* 17 */
/*!**********************************************************************!*\
  !*** ./parsing/harmony-export-hoist/get-class-with-super-no-name.js ***!
  \**********************************************************************/
/*! namespace exports */
/*! export default [provided] [used in main] [renamed to Z] -> ./parsing/harmony-export-hoist/class-with-super-no-name.js .default */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Dependency (harmony side effect evaluation) with side effects at 1:0-53 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _class_with_super_no_name__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _class_with_super_no_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class-with-super-no-name */ 7);



/***/ }),
/* 18 */
/*!************************************************************************!*\
  !*** ./parsing/harmony-export-hoist/get-class-with-super-with-name.js ***!
  \************************************************************************/
/*! namespace exports */
/*! export default [provided] [used in main] [renamed to Z] -> ./parsing/harmony-export-hoist/class-with-super-with-name.js .default */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/*! Dependency (harmony side effect evaluation) with side effects at 1:0-55 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _class_with_super_with_name__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _class_with_super_with_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class-with-super-with-name */ 8);



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
/*!***********************************************!*\
  !*** ./parsing/harmony-export-hoist/index.js ***!
  \***********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/*! Statement (ExpressionStatement) with side effects in source code at 3:0-11:3 */


it("should hoist exports", function () {
	var result = (__webpack_require__(/*! ./foo */ 0)/* .results */ .sW);
	expect(typeof result.foo).toEqual("function");
	expect(typeof result.foo2).toEqual("function");
	expect(typeof result.foo3).toEqual("function");
	expect(result.foo()).toBe("ok");
	expect(result.foo2()).toBe("ok");
	expect(result.foo3()).toBe("ok");
});

it("should hoist export default functions", () => {
	__webpack_require__(/*! ./func-no-args-no-name */ 1);
	__webpack_require__(/*! ./func-no-args-with-name */ 2);
	__webpack_require__(/*! ./func-with-args-no-name */ 3);
	__webpack_require__(/*! ./func-with-args-with-name */ 4);
});

it("should hoist export default classes", () => {
	__webpack_require__(/*! ./class-no-name */ 5);
	__webpack_require__(/*! ./class-with-name */ 6);
	__webpack_require__(/*! ./class-with-super-no-name */ 7);
	__webpack_require__(/*! ./class-with-super-with-name */ 8);
});

})();

/******/ })()
;