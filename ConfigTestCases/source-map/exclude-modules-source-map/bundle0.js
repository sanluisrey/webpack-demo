/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 10:
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("it(\"bundle1 should include eval sourcemapped test1.js and test2.js as is\", function() {\n\tvar fs = __webpack_require__(/*! fs */ 147);\n\tvar path = __webpack_require__(/*! path */ 17);\n\tvar bundle1 = fs.readFileSync(path.join(__dirname, \"bundle1.js\"), \"utf-8\");\n\texpect(bundle1).toMatch(\"eval(\\\"var test1marker\");\n\texpect(bundle1).toMatch(\"var test2marker\");\n\texpect(bundle1).not.toMatch(\"eval(\\\"var test2marker\");\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2luZGV4LmpzPzQxZjUiXSwic291cmNlc0NvbnRlbnQiOlsiaXQoXCJidW5kbGUxIHNob3VsZCBpbmNsdWRlIGV2YWwgc291cmNlbWFwcGVkIHRlc3QxLmpzIGFuZCB0ZXN0Mi5qcyBhcyBpc1wiLCBmdW5jdGlvbigpIHtcblx0dmFyIGZzID0gcmVxdWlyZShcImZzXCIpO1xuXHR2YXIgcGF0aCA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuXHR2YXIgYnVuZGxlMSA9IGZzLnJlYWRGaWxlU3luYyhwYXRoLmpvaW4oX19kaXJuYW1lLCBcImJ1bmRsZTEuanNcIiksIFwidXRmLThcIik7XG5cdGV4cGVjdChidW5kbGUxKS50b01hdGNoKFwiZXZhbChcXFwidmFyIHRlc3QxbWFya2VyXCIpO1xuXHRleHBlY3QoYnVuZGxlMSkudG9NYXRjaChcInZhciB0ZXN0Mm1hcmtlclwiKTtcblx0ZXhwZWN0KGJ1bmRsZTEpLm5vdC50b01hdGNoKFwiZXZhbChcXFwidmFyIHRlc3QybWFya2VyXCIpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///10\n");

/***/ }),

/***/ 147:
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 17:
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__(10);
/******/ 	
/******/ })()
;