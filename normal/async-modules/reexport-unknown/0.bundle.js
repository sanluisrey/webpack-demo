exports.id = 0;
exports.ids = [0];
exports.modules = [
/* 0 */,
/* 1 */
/*!************************************************!*\
  !*** ./async-modules/reexport-unknown/test.js ***!
  \************************************************/
/*! namespace exports */
/*! exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, module, __webpack_require__.a, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 10:0-17:2 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reexport_async_unknown_js_ns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reexport-async-unknown.js?ns */ 4);
/* harmony import */ var _reexport_async_unknown_js_named__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reexport-async-unknown.js?named */ 5);
/* harmony import */ var _reexport_async_unknown_js_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reexport-async-unknown.js?default */ 6);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reexport_async_unknown_js_default__WEBPACK_IMPORTED_MODULE_2__, _reexport_async_unknown_js_named__WEBPACK_IMPORTED_MODULE_1__, _reexport_async_unknown_js_ns__WEBPACK_IMPORTED_MODULE_0__]);
([_reexport_async_unknown_js_default__WEBPACK_IMPORTED_MODULE_2__, _reexport_async_unknown_js_named__WEBPACK_IMPORTED_MODULE_1__, _reexport_async_unknown_js_ns__WEBPACK_IMPORTED_MODULE_0__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);




function nsObj(m) {
	Object.defineProperty(m, Symbol.toStringTag, { value: "Module" });
	return m;
}

expect(_reexport_async_unknown_js_ns__WEBPACK_IMPORTED_MODULE_0__).toEqual(
	nsObj({
		default: "default",
		a: "a",
		b: "b",
		c: "c"
	})
);

expect(_reexport_async_unknown_js_named__WEBPACK_IMPORTED_MODULE_1__.a).toBe("a");
expect(_reexport_async_unknown_js_named__WEBPACK_IMPORTED_MODULE_1__.b).toBe("b");
expect(_reexport_async_unknown_js_named__WEBPACK_IMPORTED_MODULE_1__.c).toBe("c");

expect(_reexport_async_unknown_js_default__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z).toBe("default");

});

/***/ }),
/* 2 */
/*!*********************************************************!*\
  !*** ./async-modules/reexport-unknown/async-unknown.js ***!
  \*********************************************************/
/*! namespace exports */
/*! export a [maybe provided (runtime-defined)] [used in main] [usage and provision prevents renaming] -> ./async-modules/reexport-unknown/unknown.js .a */
/*! export b [maybe provided (runtime-defined)] [used in main] [usage and provision prevents renaming] -> ./async-modules/reexport-unknown/unknown.js .b */
/*! export c [maybe provided (runtime-defined)] [used in main] [usage and provision prevents renaming] -> ./async-modules/reexport-unknown/unknown.js .c */
/*! export default [not provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [maybe provided (runtime-defined)] [maybe used in main (runtime-defined)] -> ./async-modules/reexport-unknown/unknown.js */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, module, __webpack_require__.a, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 3:0-8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _unknown_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unknown.js */ 3);
/* harmony import */ var _unknown_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_unknown_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _unknown_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _unknown_js__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


await 1;

__webpack_handle_async_dependencies__();
}, 1);

/***/ }),
/* 3 */
/*!***************************************************!*\
  !*** ./async-modules/reexport-unknown/unknown.js ***!
  \***************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 7:0-14 */
/*! Statement (VariableDeclaration) with side effects in source code at 1:0-5:2 */
/***/ ((module) => {

const o = {
	a: "a",
	b: "b",
	c: "c"
};

module.exports = Object(o);


/***/ }),
/* 4 */
/*!*********************************************************************!*\
  !*** ./async-modules/reexport-unknown/reexport-async-unknown.js?ns ***!
  \*********************************************************************/
/*! namespace exports */
/*! export a [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./async-modules/reexport-unknown/unknown.js .a */
/*! export default [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [maybe provided (runtime-defined)] [maybe used in main (runtime-defined)] -> ./async-modules/reexport-unknown/async-unknown.js */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, module, __webpack_require__.a, __webpack_require__.* */
/*! Dependency (harmony side effect evaluation) with side effects at 1:0-35 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* reexport safe */ _async_unknown_js__WEBPACK_IMPORTED_MODULE_0__.a),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _async_unknown_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./async-unknown.js */ 2);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_async_unknown_js__WEBPACK_IMPORTED_MODULE_0__]);
_async_unknown_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _async_unknown_js__WEBPACK_IMPORTED_MODULE_0__) if(["default","a"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _async_unknown_js__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("default");

});

/***/ }),
/* 5 */
/*!************************************************************************!*\
  !*** ./async-modules/reexport-unknown/reexport-async-unknown.js?named ***!
  \************************************************************************/
/*! namespace exports */
/*! export a [provided] [used in main] [could be renamed] -> ./async-modules/reexport-unknown/unknown.js .a */
/*! export b [maybe provided (runtime-defined)] [used in main] [provision prevents renaming] -> ./async-modules/reexport-unknown/unknown.js .b */
/*! export c [maybe provided (runtime-defined)] [used in main] [provision prevents renaming] -> ./async-modules/reexport-unknown/unknown.js .c */
/*! export default [provided] [unused] [renamed to Z] */
/*! other exports [maybe provided (runtime-defined)] [unused] -> ./async-modules/reexport-unknown/async-unknown.js */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.o, module, __webpack_require__.a, __webpack_require__.* */
/*! Dependency (harmony side effect evaluation) with side effects at 1:0-35 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* reexport safe */ _async_unknown_js__WEBPACK_IMPORTED_MODULE_0__.a)
/* harmony export */ });
/* harmony import */ var _async_unknown_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./async-unknown.js */ 2);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_async_unknown_js__WEBPACK_IMPORTED_MODULE_0__]);
_async_unknown_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];
/* harmony reexport (checked) */ if(__webpack_require__.o(_async_unknown_js__WEBPACK_IMPORTED_MODULE_0__, "b")) __webpack_require__.d(__webpack_exports__, { "b": function() { return _async_unknown_js__WEBPACK_IMPORTED_MODULE_0__.b; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_async_unknown_js__WEBPACK_IMPORTED_MODULE_0__, "c")) __webpack_require__.d(__webpack_exports__, { "c": function() { return _async_unknown_js__WEBPACK_IMPORTED_MODULE_0__.c; } });


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ("default");

});

/***/ }),
/* 6 */
/*!**************************************************************************!*\
  !*** ./async-modules/reexport-unknown/reexport-async-unknown.js?default ***!
  \**************************************************************************/
/*! namespace exports */
/*! export a [provided] [unused] [could be renamed] -> ./async-modules/reexport-unknown/unknown.js .a */
/*! export default [provided] [used in main] [renamed to Z] */
/*! other exports [maybe provided (runtime-defined)] [unused] -> ./async-modules/reexport-unknown/async-unknown.js */
/*! runtime requirements: __webpack_require__, __webpack_exports__, module, __webpack_require__.a, __webpack_require__.d, __webpack_require__.* */
/*! Dependency (harmony side effect evaluation) with side effects at 1:0-35 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _async_unknown_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./async-unknown.js */ 2);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_async_unknown_js__WEBPACK_IMPORTED_MODULE_0__]);
_async_unknown_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("default");

});

/***/ })
];
;