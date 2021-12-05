/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 395:
/*!******************!*\
  !*** ./dir/a.js ***!
  \******************/
/***/ (() => {



/***/ }),

/***/ 681:
/*!*********************************!*\
  !*** ./dir/ sync ^\.\/.*a\.js$ ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./a.js": 395
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 681;

/***/ }),

/***/ 838:
/*!*****************************!*\
  !*** ./dir/ sync ^\.\/.*s$ ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./a.js": 395
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 838;

/***/ }),

/***/ 397:
/*!*********************************!*\
  !*** ./dir/ sync ^\.\/a\.j.*s$ ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./a.js": 395
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 397;

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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
function donotcallme() {
	expect("asi unsafe call happened").toBe(false);
}

it("should define FALSE", function() {
	expect(false).toBe(false);
	expect("boolean").toBe("boolean");
	var x = __webpack_require__(/*! ./dir/a */ 395);
	var y =  false ? 0 : __webpack_require__(/*! ./dir/a */ 395);
});
it("should define TRUE", function() {
	expect(true).toBe(true);
	expect("boolean").toBe("boolean");
	var x = __webpack_require__(/*! ./dir/a */ 395);
	var y =  true ? __webpack_require__(/*! ./dir/a */ 395) : 0;
});
it("should define CODE", function() {
	expect((1+2)).toBe(3);
	expect("number").toBe("number");
	if (false) {}
	if (false) {}
});
it("should define FUNCTION", function() {
	expect((function (a) {
				return a + 1;
			})(5)).toBe(6);
	expect("function").toBe("function");
	if (false) {}
});
it("should define NULL", function() {
	expect(null).toBeNull();
	if (false) {}
	if (false) {}
	if (false) {}
});
it("should define UNDEFINED", function() {
	expect("undefined").toBe("undefined");
	if (false) {}
});
it("should define NUMBER", function() {
	expect(100.05).toBe(100.05);
	expect("number").toBe("number");
	if (false) {}
	if (false) {}
});
it("should define ZERO", function() {
	expect(0).toBe(0);
	expect("number").toBe("number");
	if (false) {}
	if (false) {}
});
it("should define ONE", function() {
	expect(1).toBe(1);
	expect("number").toBe("number");
	expect(42 / 1).toBe(42);
	if (false) {}
	if (false) {}
});
it("should define BIGINT", function() {
	expect(BigInt("9007199254740993")).toBe(9007199254740993n);
	expect(typeof BigInt("9007199254740993")).toBe("bigint");
});
it("should define ZERO_BIGINT", function() {
	expect(BigInt("0")).toBe(0n);
	expect(typeof BigInt("9007199254740993")).toBe("bigint");
});
it("should define POSITIVE_ZERO", function() {
	expect(0).toBe(+0);
	expect(0).toBe(0);
	expect("number").toBe("number");
	expect(Object.is(0, 0)).toBe(true);
	expect(Object.is(0, +0)).toBe(true);
	expect(Object.is(0, -0)).toBe(false);
	if (false) {}
	if (false) {}
	if (false) {}
	if (false) {}
	if (false) {}
	if (false) {}
});
it("should define NEGATIVE_ZER0", function() {
	expect(-0).toBe(-0);
	expect("number").toBe("number");
	expect(Object.is(-0, 0)).toBe(false);
	expect(Object.is(-0, +0)).toBe(false);
	expect(Object.is(-0, -0)).toBe(true);
	if (false) {}
	if (false) {}
	if (false) {}
	if (false) {}
	if (false) {}
	if (false) {}
});
it("should define NEGATIVE_NUMBER", function() {
	expect(-100.25).toBe(-100.25);
	expect("number").toBe("number");
	expect(100.25 / -100.25).toBe(-1);
	if (false) {}
	if (false) {}
});
it("should define POSITIVE_NUMBER", function() {
	expect(100.25).toBe(+100.25);
	expect("number").toBe("number");
	expect(100.25 / 100.25).toBe(1);
	if (false) {}
	if (false) {}
});
it("should define STRING", function() {
	expect("string").toBe("string");
	expect("string").toBe("string");
	if (false) {}
	if (false) {}
	if (false) {}
	if (false) {}
});
it("should define EMPTY_STRING", function() {
	expect("").toBe("");
	expect("string").toBe("string");
	if (false) {}
	if (false) {}
	if (false) {}
	if (false) {}
});
it("should define REGEXP", function() {
	expect(/abc/i.toString()).toBe("/abc/i");
	expect("object").toBe("object");
	if (false) {}
});
it("should define OBJECT", function() {
	var o = ({"SUB":{"UNDEFINED":undefined,"FUNCTION":(function (a) {
						return a + 1;
					}),"CODE":(1+2),"REGEXP":/abc/i,"STRING":"string"}});
	expect(o.SUB.FUNCTION(10)).toBe(11);
});
it("should define OBJECT.SUB.CODE", function() {
	(donotcallme)
	;({"SUB":{"UNDEFINED":undefined,"FUNCTION":(function (a) {
						return a + 1;
					}),"CODE":(1+2),"REGEXP":/abc/i,"STRING":"string"}});
	(donotcallme)
	;({"UNDEFINED":undefined,"FUNCTION":(function (a) {
						return a + 1;
					}),"CODE":(1+2),"REGEXP":/abc/i,"STRING":"string"});
	expect("number").toBe("number");
	expect((1+2)).toBe(3);
	if (false) {}
	if (false) {}

	(function(sub) {
		// should not crash
		expect(sub.CODE).toBe(3);
	})(({"UNDEFINED":undefined,"FUNCTION":(function (a) {
						return a + 1;
					}),"CODE":(1+2),"REGEXP":/abc/i,"STRING":"string"}));
});
it("should define OBJECT.SUB.STRING", function() {
	expect("string").toBe("string");
	expect("string").toBe("string");
	if (false) {}
	if (false) {}

	(function(sub) {
		// should not crash
		expect(sub.STRING).toBe("string");
	})(({"UNDEFINED":undefined,"FUNCTION":(function (a) {
						return a + 1;
					}),"CODE":(1+2),"REGEXP":/abc/i,"STRING":"string"}));
});
it("should define ARRAY", function() {
	(donotcallme)
	;[2,["six"]];
	expect(Array.isArray([2,["six"]])).toBeTruthy();
	expect([2,["six"]]).toHaveLength(2);
});
it("should define ARRAY[0]", function() {
	expect(2).toBe(2);
});
it("should define ARRAY[1][0]", function() {
	expect(Array.isArray(["six"])).toBeTruthy();
	expect(["six"]).toHaveLength(1);
	expect("six").toBe("six");
});
it("should define process.env.DEFINED_NESTED_KEY", function() {
	expect(5).toBe(5);
	expect("number").toBe("number");
	if (false) {}
	if (false) {}

	var x = 5;
	expect(x).toBe(5);

	var indirect = process.env;
	expect(5).toBe(5);

	(function(env) {
		expect(5).toBe(5);
		expect("number").toBe("number");
		if (false) {}
		if (false) {}

		var x = 5;
		expect(x).toBe(5);
	})(process.env);
});
it("should define process.env.DEFINED_NESTED_KEY_STRING", function() {
	if (false) {}
});
it("should assign to process.env", function() {
	process.env.TEST = "test";
	expect(process.env.TEST).toBe("test");
});
it("should not have brackets on start", function() {
	function f() {
		throw new Error("should not be called");
	}
	f; // <- no semicolon here
	({"SUB":{"UNDEFINED":undefined,"FUNCTION":(function (a) {
						return a + 1;
					}),"CODE":(1+2),"REGEXP":/abc/i,"STRING":"string"}});
});

it("should not explode on recursive typeof calls", function() {
	expect(typeof suppe).toEqual("undefined"); // <- is recursively defined in config
});

it("should not explode on recursive statements", function() {
	expect(function() {
		suppe; // <- is recursively defined in config
	}).toThrowError("suppe is not defined");
});

it("should evaluate composed expressions (issue 5100)", function() {
	if (true) {
		// ok
	} else {}
});

it("should follow renamings in var (issue 5215)", function() {
	var _process$env = process.env,
		TEST = _process$env.TEST,
		DEFINED_NESTED_KEY = 5;
	expect(TEST).toBe("test");
	expect(DEFINED_NESTED_KEY).toBe(5);
});

it("should check that runtimeValue callback argument is a module", function() {
	expect(true).toEqual(true);
});

it("should expand properly", function() {
	const a = __webpack_require__(/*! ./dir/a */ 395);
	var tmp = "";
	expect(__webpack_require__(397)("./a.j" + tmp + "s")).toBe(a);
	expect(__webpack_require__(681)("./" + tmp + "a.js")).toBe(a);
	expect(__webpack_require__(838)("./" + tmp + "a.j" + tmp + "s")).toBe(a);
	expect(__webpack_require__(838)("./" + tmp + "a.j" + (tmp + "s"))).toBe(a);
	expect(__webpack_require__(838)("./" + tmp + ("a.j" + tmp + "s"))).toBe(a);
	expect(__webpack_require__(838)("./" + tmp + ("a.j" + tmp) + "s")).toBe(a);
	expect(__webpack_require__(838)("./" + (tmp + "a.j" + tmp + "s"))).toBe(a);
	expect(__webpack_require__(838)("./" + (tmp + "a.j" + tmp) + "s")).toBe(a);
	expect(__webpack_require__(838)("./" + (tmp + "a.j") + tmp + "s")).toBe(a);
});

})();

/******/ })()
;