"use strict";
exports.id = 771;
exports.ids = [771];
exports.modules = {

/***/ 771:
/*!****************************!*\
  !*** ./App.js + 1 modules ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: consume shared module (default) react@* (strict) (fallback: ./node_modules/react.js)
var react_js_ = __webpack_require__(704);
var react_js_default = /*#__PURE__*/__webpack_require__.n(react_js_);
// EXTERNAL MODULE: remote containerA/ComponentA
var ComponentA = __webpack_require__(953);
var ComponentA_default = /*#__PURE__*/__webpack_require__.n(ComponentA);
// EXTERNAL MODULE: remote containerB/ComponentB
var ComponentB = __webpack_require__(524);
var ComponentB_default = /*#__PURE__*/__webpack_require__.n(ComponentB);
;// CONCATENATED MODULE: ./ComponentB.js


/* harmony default export */ const ComponentB_0 = (() => {
	return `ComponentB rendered with [${react_js_default()()}]`;
});

;// CONCATENATED MODULE: ./App.js





/* harmony default export */ const App = (() => {
	return `App rendered with [${react_js_default()()}] and [${ComponentA_default()()}] and [${ComponentB_default()()}]`;
});

expect((ComponentB_default())).not.toBe(ComponentB_0);


/***/ })

};
;