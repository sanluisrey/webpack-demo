/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.css?query=yes#fragment":
/*!**************************************!*\
  !*** ./index.css?query=yes#fragment ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = "" + __webpack_require__.p + "index.css?query=yes#fragment";

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
/******/ 	/* webpack/runtime/relative url */
/******/ 	(() => {
/******/ 		__webpack_require__.U = function RelativeURL(url) {
/******/ 			var realUrl = new URL(url, "x:/");
/******/ 			var values = {};
/******/ 			for (var key in realUrl) values[key] = realUrl[key];
/******/ 			values.href = url;
/******/ 			values.pathname = url.replace(/[?#].*/, "");
/******/ 			values.origin = values.protocol = "";
/******/ 			values.toString = values.toJSON = () => (url);
/******/ 			for (var key in values) Object.defineProperty(this, key, { enumerable: true, configurable: true, value: values[key] });
/******/ 		};
/******/ 		__webpack_require__.U.prototype = URL.prototype;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "public/";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
it("should handle import.meta.url in URL()", () => {
	const url = /* asset import */ new __webpack_require__.U(__webpack_require__(/*! ./index.css?query=yes#fragment */ "./index.css?query=yes#fragment"));

	expect(url.href).toBe("public/index.css?query=yes#fragment");
	expect(url.origin).toBe("");
	expect(url.protocol).toBe("");
	expect(url.username).toBe("");
	expect(url.password).toBe("");
	expect(url.host).toBe("");
	expect(url.hostname).toBe("");
	expect(url.port).toBe("");
	expect(url.pathname).toBe("public/index.css");
	expect(url.search).toBe("?query=yes");
	expect(url.searchParams.get("query")).toBe("yes");
	expect(url.hash).toBe("#fragment");
	expect(url + "").toBe("public/index.css?query=yes#fragment");
	expect(url.toString()).toBe("public/index.css?query=yes#fragment");
	expect(JSON.stringify(url)).toBe('"public/index.css?query=yes#fragment"');
	expect(url instanceof URL).toBe(true);
});

})();

/******/ })()
;