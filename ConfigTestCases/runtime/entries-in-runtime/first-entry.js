"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[33],{

/***/ 384:
/*!******************************!*\
  !*** ./index.js + 2 modules ***!
  \******************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


;// CONCATENATED MODULE: external "path"
const external_path_namespaceObject = require("path");
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_namespaceObject);
;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = require("fs");
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_namespaceObject);
;// CONCATENATED MODULE: ./index.js



it("should not have references to chunks of unrelated entrypoints in runtime", () => {
	const content = external_fs_default().readFileSync(
		external_path_default().resolve(__dirname, "runtime.js"),
		"utf-8"
	);
	expect(content).not.toContain("other-entry");
	expect(content).not.toContain("split");
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [179], () => (__webpack_exec__(384)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);