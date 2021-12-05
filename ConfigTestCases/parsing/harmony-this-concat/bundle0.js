/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!******************************!*\
  !*** ./index.js + 3 modules ***!
  \******************************/

// NAMESPACE OBJECT: ./abc.js
var abc_namespaceObject = {};
__webpack_require__.r(abc_namespaceObject);
__webpack_require__.d(abc_namespaceObject, {
  "C": () => (C),
  "D": () => (D),
  "E": () => (E),
  "F": () => (F),
  "G": () => (G),
  "a": () => (a),
  "b": () => (b),
  "default": () => (abc),
  "extendThisClass": () => (extendThisClass),
  "f1": () => (f1),
  "f2": () => (f2),
  "f3": () => (f3),
  "returnThisArrow": () => (returnThisArrow),
  "returnThisMember": () => (returnThisMember),
  "that": () => (that)
});

;// CONCATENATED MODULE: ./abc.js
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

/* harmony default export */ const abc = (returnThis);

;// CONCATENATED MODULE: ./issue-7213.js
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

;// CONCATENATED MODULE: ./new.js
function new_C() {
	this.ok = this.pok;
}

new_C.prototype.pok = true;

/* harmony default export */ const new_0 = (new_C);


;// CONCATENATED MODULE: ./index.js








it("should have this = undefined on harmony modules", () => {
	expect((typeof that)).toBe("undefined");
	expect((typeof that)).toBe("undefined");
	expect((typeof returnThisArrow())).toBe("undefined");
	expect((typeof abc_namespaceObject.returnThisArrow())).toBe("undefined");
	expect(function() {
		returnThisMember();
	}).toThrowError();
	expect(function() {
		abc_namespaceObject.returnThisMember();
	}).toThrowError();
	expect(function() {
		extendThisClass();
	}).toThrowError();
});

it("should not break classes and functions", () => {
	expect((new C).foo()).toBe("bar");
	expect((new C).bar()).toBe("bar");
	expect((new D).prop()).toBe("ok");
	expect(E.foo()).toBe("bar");
	expect(F).toBe("ok");
	expect(f1.call({x: "f1"})).toBe("f1");
	expect(f2.call({x: "f2"})).toBe("f2");
	expect(f3.call("f3")).toBe(undefined);
	expect(f3()).toBe(undefined);
	expect((new G("ok")).getX()).toBe("ok");
});

function x() {
	throw new Error("should not be executed");
}

it("should have this = undefined on imported non-strict functions", () => {
	x
	abc
	x
	abc()
	expect(abc()).toBe("undefined");
	x
	a
	x
	a()
	expect(a()).toBe("undefined");
	expect(b()).toBe("undefined");
	expect(abc_namespaceObject.a()).toBeTypeOf("object");
	var thing = abc_namespaceObject.a();
	expect(Object.keys(thing)).toEqual(Object.keys(abc_namespaceObject));
});





it("should be possible to use new correctly", () => {
	expect(new new_C()).toEqual({ok: true});
	expect(new new_0()).toEqual({ok: true});
	expect(new new_C()).toEqual({ok: true});
});

it("should not break Babel arrow function transform", () => {
	expect(bindThis()).toBe(undefined);
	expect(callThis).toBe(undefined);
	expect(applyThis).toBe(undefined);
});

/******/ })()
;