/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 10:
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var promise_external__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! promise-external */ 456);
/* harmony import */ var module_promise_external__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! module-promise-external */ 79);
/* harmony import */ var object_promise_external__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! object-promise-external */ 993);
/* harmony import */ var import_external__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! import-external */ 964);
/* harmony import */ var _module_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./module.mjs */ 73);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([import_external__WEBPACK_IMPORTED_MODULE_3__, object_promise_external__WEBPACK_IMPORTED_MODULE_2__, module_promise_external__WEBPACK_IMPORTED_MODULE_1__, promise_external__WEBPACK_IMPORTED_MODULE_0__, _module_mjs__WEBPACK_IMPORTED_MODULE_4__]);
([import_external__WEBPACK_IMPORTED_MODULE_3__, object_promise_external__WEBPACK_IMPORTED_MODULE_2__, module_promise_external__WEBPACK_IMPORTED_MODULE_1__, promise_external__WEBPACK_IMPORTED_MODULE_0__, _module_mjs__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);
/* harmony import */ var promise_external__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(promise_external__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var module_promise_external__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(module_promise_external__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var object_promise_external__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(object_promise_external__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var import_external__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(import_external__WEBPACK_IMPORTED_MODULE_3__);






it("should allow async externals", () => {
	expect((promise_external__WEBPACK_IMPORTED_MODULE_0___default())).toBe(42);
	expect((module_promise_external__WEBPACK_IMPORTED_MODULE_1___default())).toBe(42);
	expect((object_promise_external__WEBPACK_IMPORTED_MODULE_2___default())).toEqual({ default: 42, named: true });
	expect((import_external__WEBPACK_IMPORTED_MODULE_3___default())).toBe("/hello/world.js");
});

it("should allow to catch errors of async externals", () => {
	return expect(() => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! failing-promise-external */ 916)).then((m) => (__webpack_require__.t(m, 22)))).rejects.toEqual(
		expect.objectContaining({
			message: "external reject"
		})
	);
});

it("should allow dynamic import promise externals", () => {
	return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! promise-external */ 456)).then((m) => (__webpack_require__.t(m, 22))).then(module => {
		expect(module).toMatchObject({ default: 42 });
	});
});

it("should allow dynamic import promise externals that are modules", () => {
	return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! module-promise-external */ 79)).then((m) => (__webpack_require__.t(m, 22))).then(module => {
		expect(module).toMatchObject({ default: 42, named: true });
	});
});

it("should allow dynamic import promise externals that are objects", () => {
	return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! object-promise-external */ 993)).then((m) => (__webpack_require__.t(m, 22))).then(module => {
		expect(module).toMatchObject({
			default: { default: 42, named: true },
			named: true
		});
	});
});

});

/***/ }),

/***/ 964:
/*!**********************************************!*\
  !*** external ["/hello/world.js","request"] ***!
  \**********************************************/
/***/ ((module) => {

module.exports = ((name) => Promise.resolve({ request: name }))("/hello/world.js").then((module) => (module.request));;

/***/ }),

/***/ 916:
/*!****************************************************************************************************************!*\
  !*** external "new Promise((resolve, reject) => setTimeout(() => reject(new Error('external reject')), 100))" ***!
  \****************************************************************************************************************/
/***/ ((module) => {

module.exports = new Promise((resolve, reject) => setTimeout(() => reject(new Error('external reject')), 100));

/***/ }),

/***/ 456:
/*!*****************************************************************************!*\
  !*** external "new Promise(resolve => setTimeout(() => resolve(42), 100))" ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = new Promise(resolve => setTimeout(() => resolve(42), 100));

/***/ }),

/***/ 79:
/*!*************************************************************************************************************************!*\
  !*** external "new Promise(resolve => setTimeout(() => resolve({ __esModule: true, default: 42, named: true }), 100))" ***!
  \*************************************************************************************************************************/
/***/ ((module) => {

module.exports = new Promise(resolve => setTimeout(() => resolve({ __esModule: true, default: 42, named: true }), 100));

/***/ }),

/***/ 993:
/*!*******************************************************************************************************!*\
  !*** external "new Promise(resolve => setTimeout(() => resolve({ default: 42, named: true }), 100))" ***!
  \*******************************************************************************************************/
/***/ ((module) => {

module.exports = new Promise(resolve => setTimeout(() => resolve({ default: 42, named: true }), 100));

/***/ }),

/***/ 73:
/*!********************!*\
  !*** ./module.mjs ***!
  \********************/
/***/ ((__webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__) => {
/* harmony import */ var promise_external__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! promise-external */ 456);
/* harmony import */ var module_promise_external__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! module-promise-external */ 79);
/* harmony import */ var object_promise_external__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! object-promise-external */ 993);
/* harmony import */ var import_external__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! import-external */ 964);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([import_external__WEBPACK_IMPORTED_MODULE_3__, object_promise_external__WEBPACK_IMPORTED_MODULE_2__, module_promise_external__WEBPACK_IMPORTED_MODULE_1__, promise_external__WEBPACK_IMPORTED_MODULE_0__]);
([import_external__WEBPACK_IMPORTED_MODULE_3__, object_promise_external__WEBPACK_IMPORTED_MODULE_2__, module_promise_external__WEBPACK_IMPORTED_MODULE_1__, promise_external__WEBPACK_IMPORTED_MODULE_0__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);





it("should allow async externals (in strict esm)", () => {
	expect(promise_external__WEBPACK_IMPORTED_MODULE_0__).toBe(42);
	expect(module_promise_external__WEBPACK_IMPORTED_MODULE_1__).toEqual({ __esModule: true, default: 42, named: true });
	expect(object_promise_external__WEBPACK_IMPORTED_MODULE_2__).toEqual({ default: 42, named: true });
	expect(import_external__WEBPACK_IMPORTED_MODULE_3__).toBe("/hello/world.js");
});

it("should allow to catch errors of async externals (in strict esm)", () => {
	return expect(() => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! failing-promise-external */ 916)).then((m) => (__webpack_require__.t(m, 18)))).rejects.toEqual(
		expect.objectContaining({
			message: "external reject"
		})
	);
});

it("should allow dynamic import promise externals (in strict esm)", () => {
	return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! promise-external */ 456)).then((m) => (__webpack_require__.t(m, 18))).then(module => {
		expect(module).toMatchObject({ default: 42 });
	});
});

it("should allow dynamic import promise externals that are modules (in strict esm)", () => {
	return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! module-promise-external */ 79)).then((m) => (__webpack_require__.t(m, 18))).then(module => {
		expect(module).toMatchObject({
			default: { __esModule: true, default: 42, named: true }
		});
	});
});

it("should allow dynamic import promise externals that are objects (in strict esm)", () => {
	return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! object-promise-external */ 993)).then((m) => (__webpack_require__.t(m, 18))).then(module => {
		expect(module).toMatchObject({
			default: { default: 42, named: true }
		});
	});
});

});

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
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackThen = typeof Symbol === "function" ? Symbol("webpack then") : "__webpack_then__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var completeQueue = (queue) => {
/******/ 			if(queue) {
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var completeFunction = (fn) => (!--fn.r && fn());
/******/ 		var queueFunction = (queue, fn) => (queue ? queue.push(fn) : completeFunction(fn));
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackThen]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						completeQueue(queue);
/******/ 						queue = 0;
/******/ 					});
/******/ 					var obj = {};
/******/ 												obj[webpackThen] = (fn, reject) => (queueFunction(queue, fn), dep['catch'](reject));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 								ret[webpackThen] = (fn) => (completeFunction(fn));
/******/ 								ret[webpackExports] = dep;
/******/ 								return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue = hasAwait && [];
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var isEvaluating = true;
/******/ 			var nested = false;
/******/ 			var whenAll = (deps, onResolve, onReject) => {
/******/ 				if (nested) return;
/******/ 				nested = true;
/******/ 				onResolve.r += deps.length;
/******/ 				deps.map((dep, i) => (dep[webpackThen](onResolve, onReject)));
/******/ 				nested = false;
/******/ 			};
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = () => (resolve(exports), completeQueue(queue), queue = 0);
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackThen] = (fn, rejectFn) => {
/******/ 				if (isEvaluating) { return completeFunction(fn); }
/******/ 				if (currentDeps) whenAll(currentDeps, fn, rejectFn);
/******/ 				queueFunction(queue, fn);
/******/ 				promise['catch'](rejectFn);
/******/ 			};
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				if(!deps) return outerResolve();
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn, result;
/******/ 				var promise = new Promise((resolve, reject) => {
/******/ 					fn = () => (resolve(result = currentDeps.map((d) => (d[webpackExports]))));
/******/ 					fn.r = 0;
/******/ 					whenAll(currentDeps, fn, reject);
/******/ 				});
/******/ 				return fn.r ? promise : result;
/******/ 			}).then(outerResolve, reject);
/******/ 			isEvaluating = false;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(10);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;