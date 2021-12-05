/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
const fs = __webpack_require__(/*! fs */ 147);
const path = __webpack_require__(/*! path */ 17);

["import", "amd-require", "amd-define", "commonjs", "require.resolve"].forEach(
	method => {
		it(`should be able to replace ${method} param in DefinePlugin`, function() {
			const source = fs.readFileSync(
				path.join(__dirname, `bundle-${method}.js`),
				"utf-8"
			);
			expect(source).toContain(`\`./\${foobar}/suffix0`);
			expect(source).toContain(`\`./\${foobar}/suffix3`);
			expect(source).not.toContain(`\`./\${foobar}/suffix4`);
			expect(source).not.toContain(`\`./\${DEFINED_EXPRESSION}/\${CONST_SUFFIX4}`);
			expect(source).not.toContain(`typeof require ===`);
		});
	}
);

["import", "commonjs"].forEach(method => {
	it(`should be able to replace ${method} param in DefinePlugin for conditional expression`, function() {
		const source = fs.readFileSync(
			path.join(__dirname, `bundle-${method}.js`),
			"utf-8"
		);
		expect(source).toContain(`\`./\${"prefix1"}/\${foobar}/\${"suffix1"}`);
		expect(source).toContain(`\`./\${"prefix2"}/\${foobar}/\${"suffix2"}`);
	});
});

["amd-require", "amd-define", "require.resolve"].forEach(method => {
	it(`should be able to replace ${method} param in DefinePlugin for conditional expression`, function() {
		const source = fs.readFileSync(
			path.join(__dirname, `bundle-${method}.js`),
			"utf-8"
		);
		expect(source).toContain(`\`./\${foobar}/suffix1`);
		expect(source).toContain(`\`./\${foobar}/suffix2`);
	});
});

})();

/******/ })()
;