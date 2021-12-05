/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 512:
/*!*************************************************************************!*\
  !*** ./node_modules/my-module/node_modules/shared/index.js + 1 modules ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "name": () => (/* reexport */ package_namespaceObject.u),
  "version": () => (/* reexport */ package_namespaceObject.i)
});

;// CONCATENATED MODULE: ./node_modules/my-module/node_modules/shared/package.json
const package_namespaceObject = JSON.parse('{"u":"shared","i":"2.0.0"}');
;// CONCATENATED MODULE: ./node_modules/my-module/node_modules/shared/index.js



/***/ }),

/***/ 973:
/*!**************************************************!*\
  !*** ./node_modules/shared/index.js + 1 modules ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "name": () => (/* reexport */ package_namespaceObject.u),
  "version": () => (/* reexport */ package_namespaceObject.i)
});

;// CONCATENATED MODULE: ./node_modules/shared/package.json
const package_namespaceObject = JSON.parse('{"u":"shared","i":"1.0.0"}');
;// CONCATENATED MODULE: ./node_modules/shared/index.js



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
/******/ 	/* webpack/runtime/sharing */
/******/ 	(() => {
/******/ 		__webpack_require__.S = {};
/******/ 		var initPromises = {};
/******/ 		var initTokens = {};
/******/ 		__webpack_require__.I = (name, initScope) => {
/******/ 			if(!initScope) initScope = [];
/******/ 			// handling circular init calls
/******/ 			var initToken = initTokens[name];
/******/ 			if(!initToken) initToken = initTokens[name] = {};
/******/ 			if(initScope.indexOf(initToken) >= 0) return;
/******/ 			initScope.push(initToken);
/******/ 			// only runs once
/******/ 			if(initPromises[name]) return initPromises[name];
/******/ 			// creates a new share scope if needed
/******/ 			if(!__webpack_require__.o(__webpack_require__.S, name)) __webpack_require__.S[name] = {};
/******/ 			// runs all init snippets from all modules reachable
/******/ 			var scope = __webpack_require__.S[name];
/******/ 			var warn = (msg) => (typeof console !== "undefined" && console.warn && console.warn(msg));
/******/ 			var uniqueName = "package-name";
/******/ 			var register = (name, version, factory, eager) => {
/******/ 				var versions = scope[name] = scope[name] || {};
/******/ 				var activeVersion = versions[version];
/******/ 				if(!activeVersion || (!activeVersion.loaded && (!eager != !activeVersion.eager ? eager : uniqueName > activeVersion.from))) versions[version] = { get: factory, from: uniqueName, eager: !!eager };
/******/ 			};
/******/ 			var initExternal = (id) => {
/******/ 				var handleError = (err) => (warn("Initialization of sharing external failed: " + err));
/******/ 				try {
/******/ 					var module = __webpack_require__(id);
/******/ 					if(!module) return;
/******/ 					var initFn = (module) => (module && module.init && module.init(__webpack_require__.S[name], initScope))
/******/ 					if(module.then) return promises.push(module.then(initFn, handleError));
/******/ 					var initResult = initFn(module);
/******/ 					if(initResult && initResult.then) return promises.push(initResult['catch'](handleError));
/******/ 				} catch(err) { handleError(err); }
/******/ 			}
/******/ 			var promises = [];
/******/ 			switch(name) {
/******/ 				case "default": {
/******/ 					register("shared", "1.0.0", () => (() => (__webpack_require__(/*! ./node_modules/shared/index.js */ 973))));
/******/ 					register("shared", "2.0.0", () => (() => (__webpack_require__(/*! ./node_modules/my-module/node_modules/shared/index.js */ 512))));
/******/ 				}
/******/ 				break;
/******/ 			}
/******/ 			if(!promises.length) return initPromises[name] = 1;
/******/ 			return initPromises[name] = Promise.all(promises).then(() => (initPromises[name] = 1));
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./index.js + 1 modules ***!
  \******************************/

// EXTERNAL MODULE: ./node_modules/shared/index.js + 1 modules
var shared = __webpack_require__(973);
// EXTERNAL MODULE: ./node_modules/my-module/node_modules/shared/index.js + 1 modules
var node_modules_shared = __webpack_require__(512);
;// CONCATENATED MODULE: ./node_modules/my-module/index.js


;// CONCATENATED MODULE: ./index.js



it("should provide both shared versions, but not the unused one", async () => {
	await __webpack_require__.I("default");
	expect(Object.keys(__webpack_require__.S.default)).toContain("shared");
	expect(Object.keys(__webpack_require__.S.default.shared)).toContain(
		"1.0.0"
	);
	expect(Object.keys(__webpack_require__.S.default.shared)).toContain(
		"2.0.0"
	);
	expect(Object.keys(__webpack_require__.S.default.shared)).not.toContain(
		"3.0.0"
	);
	expect(__webpack_require__.S.default.shared["1.0.0"].from).toEqual(
		"package-name"
	);
	expect(__webpack_require__.S.default.shared["2.0.0"].from).toEqual(
		"package-name"
	);
});

it("should import the correct versions", () => {
	expect(shared.version).toBe("1.0.0");
	expect(node_modules_shared.version).toBe("2.0.0");
});

})();

/******/ })()
;