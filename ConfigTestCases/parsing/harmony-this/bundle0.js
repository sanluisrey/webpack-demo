/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 169:
/*!****************!*\
  !*** ./abc.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ a),
/* harmony export */   "b": () => (/* binding */ b),
/* harmony export */   "that": () => (/* binding */ that),
/* harmony export */   "returnThisArrow": () => (/* binding */ returnThisArrow),
/* harmony export */   "returnThisMember": () => (/* binding */ returnThisMember),
/* harmony export */   "C": () => (/* binding */ C),
/* harmony export */   "extendThisClass": () => (/* binding */ extendThisClass),
/* harmony export */   "D": () => (/* binding */ D),
/* harmony export */   "E": () => (/* binding */ E),
/* harmony export */   "F": () => (/* binding */ F),
/* harmony export */   "f1": () => (/* binding */ f1),
/* harmony export */   "f2": () => (/* binding */ f2),
/* harmony export */   "f3": () => (/* binding */ f3),
/* harmony export */   "G": () => (/* binding */ G),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function returnThis() {
	if (typeof this === "undefined") return "undefined";
	return this;
}

var a = returnThis;
var b = returnThis;



const that = undefined;
const returnThisArrow = () => undefined;
const returnThisMember = () => undefined.a;

class C {
	constructor() {
		this.x = "bar";
	}
	foo() {
		return this.x;
	}
	bar(x = this.x) {
		return x;
	}
}

const extendThisClass = () => {
	return class extends undefined.Buffer {};
};

function D() {
	this.prop = () => "ok";
}

// See https://github.com/webpack/webpack/issues/6379
const E = {
	x: "bar",
	foo(x = this.x) {
		return x;
	}
};

// See https://github.com/webpack/webpack/issues/6967
const F = function() {
	return this;
}.call("ok");

function f1(x = this.x) {
	return x;
}

const f2 = function(x = this.x) {
	return x;
};

const f3 = (x = undefined) => x;

function G(x) {
	this.x = x;
	this.getX = (y = this.x) => y;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (returnThis);


/***/ }),

/***/ 341:
/*!***********************!*\
  !*** ./issue-7213.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "xB": () => (/* binding */ bindThis),
/* harmony export */   "sJ": () => (/* binding */ callThis),
/* harmony export */   "D7": () => (/* binding */ applyThis)
/* harmony export */ });
// This helper is taken from Babel
function _newArrowCheck(innerThis, boundThis) {
	if (innerThis !== boundThis) {
		throw new TypeError("Cannot instantiate an arrow function");
	}
}

let _this = undefined;
let bindThis = function() {
	_newArrowCheck(this, _this);
	return this
}.bind(undefined);

let callThis = function() {
	return this
}.call(undefined)

let applyThis = function() {
	return this
}.apply(undefined)


/***/ }),

/***/ 838:
/*!****************!*\
  !*** ./new.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "C": () => (/* binding */ C)
/* harmony export */ });
function C() {
	this.ok = this.pok;
}

C.prototype.pok = true;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (C);



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
/* harmony import */ var _abc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abc */ 169);
/* harmony import */ var _issue_7213__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./issue-7213 */ 341);
/* harmony import */ var _new__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new */ 838);








it("should have this = undefined on harmony modules", () => {
	expect((typeof _abc__WEBPACK_IMPORTED_MODULE_0__.that)).toBe("undefined");
	expect((typeof _abc__WEBPACK_IMPORTED_MODULE_0__.that)).toBe("undefined");
	expect((typeof (0,_abc__WEBPACK_IMPORTED_MODULE_0__.returnThisArrow)())).toBe("undefined");
	expect((typeof _abc__WEBPACK_IMPORTED_MODULE_0__.returnThisArrow())).toBe("undefined");
	expect(function() {
		(0,_abc__WEBPACK_IMPORTED_MODULE_0__.returnThisMember)();
	}).toThrowError();
	expect(function() {
		_abc__WEBPACK_IMPORTED_MODULE_0__.returnThisMember();
	}).toThrowError();
	expect(function() {
		(0,_abc__WEBPACK_IMPORTED_MODULE_0__.extendThisClass)();
	}).toThrowError();
});

it("should not break classes and functions", () => {
	expect((new _abc__WEBPACK_IMPORTED_MODULE_0__.C).foo()).toBe("bar");
	expect((new _abc__WEBPACK_IMPORTED_MODULE_0__.C).bar()).toBe("bar");
	expect((new _abc__WEBPACK_IMPORTED_MODULE_0__.D).prop()).toBe("ok");
	expect(_abc__WEBPACK_IMPORTED_MODULE_0__.E.foo()).toBe("bar");
	expect(_abc__WEBPACK_IMPORTED_MODULE_0__.F).toBe("ok");
	expect(_abc__WEBPACK_IMPORTED_MODULE_0__.f1.call({x: "f1"})).toBe("f1");
	expect(_abc__WEBPACK_IMPORTED_MODULE_0__.f2.call({x: "f2"})).toBe("f2");
	expect(_abc__WEBPACK_IMPORTED_MODULE_0__.f3.call("f3")).toBe(undefined);
	expect((0,_abc__WEBPACK_IMPORTED_MODULE_0__.f3)()).toBe(undefined);
	expect((new _abc__WEBPACK_IMPORTED_MODULE_0__.G("ok")).getX()).toBe("ok");
});

function x() {
	throw new Error("should not be executed");
}

it("should have this = undefined on imported non-strict functions", () => {
	x
	_abc__WEBPACK_IMPORTED_MODULE_0__["default"]
	x
	;(0,_abc__WEBPACK_IMPORTED_MODULE_0__["default"])()
	expect((0,_abc__WEBPACK_IMPORTED_MODULE_0__["default"])()).toBe("undefined");
	x
	_abc__WEBPACK_IMPORTED_MODULE_0__.a
	x
	;(0,_abc__WEBPACK_IMPORTED_MODULE_0__.a)()
	expect((0,_abc__WEBPACK_IMPORTED_MODULE_0__.a)()).toBe("undefined");
	x
	_abc__WEBPACK_IMPORTED_MODULE_0__.b
	x
	;(0,_abc__WEBPACK_IMPORTED_MODULE_0__.b)()
	expect((0,_abc__WEBPACK_IMPORTED_MODULE_0__.b)()).toBe("undefined");
	x
	_abc__WEBPACK_IMPORTED_MODULE_0__.a
	x
	_abc__WEBPACK_IMPORTED_MODULE_0__.a()
	expect(_abc__WEBPACK_IMPORTED_MODULE_0__.a()).toBeTypeOf("object");
	var thing = _abc__WEBPACK_IMPORTED_MODULE_0__.a();
	expect(Object.keys(thing)).toEqual(Object.keys(_abc__WEBPACK_IMPORTED_MODULE_0__));
});





it("should be possible to use new correctly", () => {
	expect(new _new__WEBPACK_IMPORTED_MODULE_2__.C()).toEqual({ok: true});
	expect(new _new__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z()).toEqual({ok: true});
	expect(new _new__WEBPACK_IMPORTED_MODULE_2__.C()).toEqual({ok: true});
});

it("should not break Babel arrow function transform", () => {
	expect((0,_issue_7213__WEBPACK_IMPORTED_MODULE_1__/* .bindThis */ .xB)()).toBe(undefined);
	expect(_issue_7213__WEBPACK_IMPORTED_MODULE_1__/* .callThis */ .sJ).toBe(undefined);
	expect(_issue_7213__WEBPACK_IMPORTED_MODULE_1__/* .applyThis */ .D7).toBe(undefined);
});

})();

/******/ })()
;