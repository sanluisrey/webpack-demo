/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "4THw":
/*!*******************************************************************!*\
  !*** delegated ./e2.js from dll-reference ../0-create-dll/dll.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = (__webpack_require__(/*! dll-reference ../0-create-dll/dll.js */ "9cD8"))(120);

/***/ }),

/***/ "I5dJ":
/*!******************************************************************!*\
  !*** delegated ./e.js from dll-reference ../0-create-dll/dll.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = (__webpack_require__(/*! dll-reference ../0-create-dll/dll.js */ "9cD8"))(390);

/***/ }),

/***/ "xh4s":
/*!*******************************************************************!*\
  !*** delegated ./e1.js from dll-reference ../0-create-dll/dll.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = (__webpack_require__(/*! dll-reference ../0-create-dll/dll.js */ "9cD8"))(481);

/***/ }),

/***/ "PROB":
/*!**********************************************************************!*\
  !*** delegated ./g.abc.js from dll-reference ../0-create-dll/dll.js ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = (__webpack_require__(/*! dll-reference ../0-create-dll/dll.js */ "9cD8"))(681);

/***/ }),

/***/ "5Fs3":
/*!******************************************************************!*\
  !*** delegated ./d.js from dll-reference ../0-create-dll/dll.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = (__webpack_require__(/*! dll-reference ../0-create-dll/dll.js */ "9cD8"))(767);

/***/ }),

/***/ "4uGQ":
/*!******************************************************************!*\
  !*** delegated ./a.js from dll-reference ../0-create-dll/dll.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = (__webpack_require__(/*! dll-reference ../0-create-dll/dll.js */ "9cD8"))(847);

/***/ }),

/***/ "SWjn":
/*!******************************************************************!*\
  !*** delegated ./b.js from dll-reference ../0-create-dll/dll.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = (__webpack_require__(/*! dll-reference ../0-create-dll/dll.js */ "9cD8"))(996);

/***/ }),

/***/ "9cD8":
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************************!*\
  !*** ./index.js + 1 modules ***!
  \******************************/

// EXTERNAL MODULE: delegated ./d.js from dll-reference ../0-create-dll/dll.js
var dll = __webpack_require__("5Fs3");
// EXTERNAL MODULE: delegated ./e1.js from dll-reference ../0-create-dll/dll.js
var delegated_e1from_dll_reference_0_create_dll_dll = __webpack_require__("xh4s");
// EXTERNAL MODULE: delegated ./e2.js from dll-reference ../0-create-dll/dll.js
var delegated_e2from_dll_reference_0_create_dll_dll = __webpack_require__("4THw");
;// CONCATENATED MODULE: ./e.js



// EXTERNAL MODULE: delegated ./e.js from dll-reference ../0-create-dll/dll.js
var delegated_efrom_dll_reference_0_create_dll_dll = __webpack_require__("I5dJ");
;// CONCATENATED MODULE: ./index.js




it("should load a module from dll", function() {
	expect(__webpack_require__(/*! ../0-create-dll/a */ "4uGQ")).toBe("a");
});

it("should load an async module from dll", function(done) {
	__webpack_require__(/*! ../0-create-dll/b */ "SWjn")().then(function(c) {
		expect(c).toEqual(nsObj({ default: "c" }));
		done();
	}).catch(done);
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
	expect(__webpack_require__(/*! ../0-create-dll/g.abc.js */ "PROB")).toBe("number");
});

})();

/******/ })()
;