/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/*!**************!*\
  !*** ./a.js ***!
  \**************/
/***/ ((module) => {

module.exports = {"arg":true,"arg1":null,"arg3":1234567890,"arg4":"string","arg5":[1,2,3],"arg6":{"foo":"value","bar":{"baz":"other-value"}}}

/***/ }),
/* 2 */
/*!**************!*\
  !*** ./b.js ***!
  \**************/
/***/ ((module) => {

module.exports = {"arg":true,"arg1":null,"arg3":1234567890,"arg4":"string","arg5":[1,2,3],"arg6":{"foo":"value","bar":{"baz":"other-value"}}}

/***/ }),
/* 3 */
/*!**************!*\
  !*** ./c.js ***!
  \**************/
/***/ ((module) => {

module.exports = {"arg":true,"arg1":null,"arg3":1234567890,"arg4":"string","arg5":[1,2,3],"arg6":{"foo":"value","bar":{"baz":"other-value"}}}

/***/ }),
/* 4 */
/*!**************!*\
  !*** ./d.js ***!
  \**************/
/***/ ((module) => {

module.exports = {"arg4":"text"}

/***/ }),
/* 5 */
/*!**************!*\
  !*** ./e.js ***!
  \**************/
/***/ (() => {



/***/ }),
/* 6 */
/*!**************!*\
  !*** ./f.js ***!
  \**************/
/***/ ((module) => {

module.exports = {"name":"cheesecake","slices":"8","delicious":"","warm":"false"}

/***/ }),
/* 7 */
/*!**************!*\
  !*** ./g.js ***!
  \**************/
/***/ ((module) => {

module.exports = {"=":"="}

/***/ }),
/* 8 */
/*!**************!*\
  !*** ./h.js ***!
  \**************/
/***/ ((module) => {

module.exports = {"foo":"bar"}

/***/ }),
/* 9 */
/*!**************!*\
  !*** ./i.js ***!
  \**************/
/***/ ((module) => {

module.exports = {"foo":"bar"}

/***/ }),
/* 10 */
/*!*******************!*\
  !*** ./error1.js ***!
  \*******************/
/***/ (() => {

throw new Error("Module build failed (from ./loader-1.js):\nValidationError: Invalid options object. Loader has been initialized using an options object that does not match the API schema.\n - options.arg6.bar.baz should be a string.\n    at validate (/Users/yoh/Projects/repos/webpack/node_modules/schema-utils/dist/validate.js:105:11)\n    at Object.getOptions (/Users/yoh/Projects/repos/webpack/lib/NormalModule.js:578:19)\n    at Object.<anonymous>.module.exports (/Users/yoh/Projects/repos/webpack/test/configCases/loaders/options/loader-1.js:5:23)");

/***/ }),
/* 11 */
/*!*******************!*\
  !*** ./error2.js ***!
  \*******************/
/***/ (() => {

throw new Error("Module build failed (from ./loader-2.js):\nValidationError: Invalid configuration object. Custom Loader Name has been initialized using a configuration object that does not match the API schema.\n - configuration.arg should be true.\n    at validate (/Users/yoh/Projects/repos/webpack/node_modules/schema-utils/dist/validate.js:105:11)\n    at Object.getOptions (/Users/yoh/Projects/repos/webpack/lib/NormalModule.js:578:19)\n    at Object.<anonymous>.module.exports (/Users/yoh/Projects/repos/webpack/test/configCases/loaders/options/loader-2.js:5:23)");

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
it("should get options", function() {
	expect(__webpack_require__(/*! ./a */ 1)).toStrictEqual({
		arg: true,
		arg1: null,
		arg3: 1234567890,
		arg4: "string",
		arg5: [1, 2, 3],
		arg6: { foo: "value", bar: { baz: "other-value" } }
	});
	expect(__webpack_require__(/*! ./b */ 2)).toStrictEqual({
		arg: true,
		arg1: null,
		arg3: 1234567890,
		arg4: "string",
		arg5: [1, 2, 3],
		arg6: { foo: "value", bar: { baz: "other-value" } }
	});
	expect(__webpack_require__(/*! ./c */ 3)).toStrictEqual({
		arg: true,
		arg1: null,
		arg3: 1234567890,
		arg4: "string",
		arg5: [1, 2, 3],
		arg6: { foo: "value", bar: { baz: "other-value" } }
	});
	expect(__webpack_require__(/*! ./d */ 4)).toStrictEqual({
		arg4: "text"
	});
	expect(__webpack_require__(/*! ./e */ 5)).toStrictEqual({});
	expect(__webpack_require__(/*! ./f */ 6)).toStrictEqual({
		delicious: "",
		name: "cheesecake",
		slices: "8",
		warm: "false"
	});
	expect(__webpack_require__(/*! ./g */ 7)).toStrictEqual({
		"=": "="
	});
	expect(__webpack_require__(/*! ./h */ 8)).toStrictEqual({
		foo: "bar"
	});
	expect(__webpack_require__(/*! ./i */ 9)).toStrictEqual({
		foo: "bar"
	});
});

const never = false;
if (never) {
	__webpack_require__(/*! ./error1 */ 10);
	__webpack_require__(/*! ./error2 */ 11);
}

})();

/******/ })()
;