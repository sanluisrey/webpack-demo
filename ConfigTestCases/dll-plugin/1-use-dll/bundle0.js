/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************************!*\
  !*** ./index.js + 1 modules ***!
  \******************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: delegated ./d.js from dll-reference ../0-create-dll/dll.js
var dll = __webpack_require__("dll/d.js");
// EXTERNAL MODULE: delegated ./e1.js from dll-reference ../0-create-dll/dll.js
var delegated_e1from_dll_reference_0_create_dll_dll = __webpack_require__("dll/e1.js");
// EXTERNAL MODULE: delegated ./e2.js from dll-reference ../0-create-dll/dll.js
var delegated_e2from_dll_reference_0_create_dll_dll = __webpack_require__("dll/e2.js");
;// CONCATENATED MODULE: ./e.js



// EXTERNAL MODULE: delegated ./e.js from dll-reference ../0-create-dll/dll.js
var delegated_efrom_dll_reference_0_create_dll_dll = __webpack_require__("dll/e.js");
// EXTERNAL MODULE: delegated ./h.js from dll-reference ../0-create-dll/dll.js
var delegated_hfrom_dll_reference_0_create_dll_dll = __webpack_require__("dll/h.js");
;// CONCATENATED MODULE: ./index.js





it("should load a module from dll", function() {
	expect(__webpack_require__(/*! dll/a */ "dll/a.js")).toBe("a");
});

it("should load a module of non-default type without extension from dll", function() {
	expect(__webpack_require__(/*! dll/f */ "dll/f.jsx")).toBe("f");
});

it("should load an async module from dll", function(done) {
	__webpack_require__(/*! dll/b */ "dll/b.js")()
		.then(function(c) {
			expect(c).toEqual(nsObj({ default: "c" }));
			done();
		})
		.catch(done);
});

it("should load an harmony module from dll (default export)", function() {
	expect(dll["default"]).toBe("d");
});

it("should load an harmony module from dll (star export)", function() {
	expect(delegated_e1from_dll_reference_0_create_dll_dll.x1).toBe(123);
	expect(delegated_efrom_dll_reference_0_create_dll_dll.x2).toBe(123);
	expect(delegated_efrom_dll_reference_0_create_dll_dll.y1).toBe(456);
	expect(delegated_e2from_dll_reference_0_create_dll_dll.y2).toBe(456);
});

it("should load a module with loader applied", function() {
	expect(__webpack_require__(/*! dll/g.abc.js */ "dll/g.abc.js")).toBe("number");
});

it("should give modules the correct ids", function() {
	expect(
		Object.keys(__webpack_require__.m)
			.filter(m => !m.startsWith("../.."))
			.sort()
	).toEqual([
		"./index.js",
		"dll-reference ../0-create-dll/dll.js",
		"dll/a.js",
		"dll/b.js",
		"dll/d.js",
		"dll/e.js",
		"dll/e1.js",
		"dll/e2.js",
		"dll/f.jsx",
		"dll/g.abc.js",
		"dll/h.js"
	]);
});

it("should not crash on side-effect-free modules", function() {
	expect(delegated_hfrom_dll_reference_0_create_dll_dll.B).toBe("B");
});


/***/ }),

/***/ "dll/e2.js":
/*!*******************************************************************!*\
  !*** delegated ./e2.js from dll-reference ../0-create-dll/dll.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = (__webpack_require__(/*! dll-reference ../0-create-dll/dll.js */ "dll-reference ../0-create-dll/dll.js"))(120);

/***/ }),

/***/ "dll/h.js":
/*!******************************************************************!*\
  !*** delegated ./h.js from dll-reference ../0-create-dll/dll.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = (__webpack_require__(/*! dll-reference ../0-create-dll/dll.js */ "dll-reference ../0-create-dll/dll.js"))(307);

/***/ }),

/***/ "dll/e.js":
/*!******************************************************************!*\
  !*** delegated ./e.js from dll-reference ../0-create-dll/dll.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = (__webpack_require__(/*! dll-reference ../0-create-dll/dll.js */ "dll-reference ../0-create-dll/dll.js"))(390);

/***/ }),

/***/ "dll/e1.js":
/*!*******************************************************************!*\
  !*** delegated ./e1.js from dll-reference ../0-create-dll/dll.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = (__webpack_require__(/*! dll-reference ../0-create-dll/dll.js */ "dll-reference ../0-create-dll/dll.js"))(481);

/***/ }),

/***/ "dll/g.abc.js":
/*!**********************************************************************!*\
  !*** delegated ./g.abc.js from dll-reference ../0-create-dll/dll.js ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = (__webpack_require__(/*! dll-reference ../0-create-dll/dll.js */ "dll-reference ../0-create-dll/dll.js"))(681);

/***/ }),

/***/ "dll/d.js":
/*!******************************************************************!*\
  !*** delegated ./d.js from dll-reference ../0-create-dll/dll.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = (__webpack_require__(/*! dll-reference ../0-create-dll/dll.js */ "dll-reference ../0-create-dll/dll.js"))(767);

/***/ }),

/***/ "dll/a.js":
/*!******************************************************************!*\
  !*** delegated ./a.js from dll-reference ../0-create-dll/dll.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = (__webpack_require__(/*! dll-reference ../0-create-dll/dll.js */ "dll-reference ../0-create-dll/dll.js"))(847);

/***/ }),

/***/ "dll/f.jsx":
/*!*******************************************************************!*\
  !*** delegated ./f.jsx from dll-reference ../0-create-dll/dll.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = (__webpack_require__(/*! dll-reference ../0-create-dll/dll.js */ "dll-reference ../0-create-dll/dll.js"))(914);

/***/ }),

/***/ "dll/b.js":
/*!******************************************************************!*\
  !*** delegated ./b.js from dll-reference ../0-create-dll/dll.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = (__webpack_require__(/*! dll-reference ../0-create-dll/dll.js */ "dll-reference ../0-create-dll/dll.js"))(996);

/***/ }),

/***/ "dll-reference ../0-create-dll/dll.js":
/*!*****************************************!*\
  !*** external "../0-create-dll/dll.js" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("../0-create-dll/dll.js");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module factories are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;