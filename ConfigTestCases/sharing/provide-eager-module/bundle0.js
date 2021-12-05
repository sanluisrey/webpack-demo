/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("if (Math.random() < 0) {\n\t__webpack_require__(/*! common */ \"./node_modules/common/index.js\");\n\t__webpack_require__(/*! uncommon */ \"./node_modules/uncommon/index.js\");\n}\n\nit(\"should overwrite non-eager shared module with eager shared module\", async () => {\n\t__webpack_require__.S = {\n\t\teagerOverrideNonEager: {\n\t\t\tcommon: {\n\t\t\t\t\"1.0.0\": {\n\t\t\t\t\teager: undefined, // any falsy value\n\t\t\t\t\tfrom: \"dashboard\"\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t};\n\tawait __webpack_require__.I(\"eagerOverrideNonEager\");\n\texpect(\n\t\tObject.keys(__webpack_require__.S[\"eagerOverrideNonEager\"])\n\t).toContain(\"common\");\n\tconst commonModule = __webpack_require__.S.eagerOverrideNonEager.common;\n\texpect(Object.keys(commonModule)).toContain(\"1.0.0\");\n\texpect(commonModule[\"1.0.0\"].eager).toBe(true);\n});\nit(\"should not overwrite already shared eager module with non-eager module\", async () => {\n\t__webpack_require__.S = {\n\t\tnonEagerDontOverrideEager: {\n\t\t\tuncommon: {\n\t\t\t\t\"2.0.0\": {\n\t\t\t\t\teager: 1, // any truthy value\n\t\t\t\t\tfrom: \"aaa\"\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t};\n\tawait __webpack_require__.I(\"nonEagerDontOverrideEager\");\n\texpect(\n\t\tObject.keys(__webpack_require__.S[\"nonEagerDontOverrideEager\"])\n\t).toContain(\"uncommon\");\n\tconst uncommonModule =\n\t\t__webpack_require__.S.nonEagerDontOverrideEager.uncommon;\n\texpect(Object.keys(uncommonModule)).toContain(\"2.0.0\");\n\texpect(uncommonModule[\"2.0.0\"].eager).toBe(1);\n});\nit(\"should prefer shared non-eager module from newer container\", async () => {\n\t__webpack_require__.S = {\n\t\tnewerNonEager: {\n\t\t\tuncommon: {\n\t\t\t\t\"2.0.0\": {\n\t\t\t\t\tfrom: \"appshell-1.0\"\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t};\n\tawait __webpack_require__.I(\"newerNonEager\");\n\tconst uncommonModule = __webpack_require__.S.newerNonEager.uncommon;\n\texpect(Object.keys(uncommonModule)).toContain(\"2.0.0\");\n\texpect(uncommonModule[\"2.0.0\"].from).toBe(\"appshell-2.0\");\n});\nit(\"should prefer shared eager module from newer container\", async () => {\n\t__webpack_require__.S = {\n\t\tnewerEager: {\n\t\t\tcommon: {\n\t\t\t\t\"1.0.0\": {\n\t\t\t\t\tfrom: \"appshell-1.0\",\n\t\t\t\t\teager: true\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t};\n\tawait __webpack_require__.I(\"newerEager\");\n\tconst commonModule = __webpack_require__.S.newerEager.common;\n\texpect(Object.keys(commonModule)).toContain(\"1.0.0\");\n\texpect(commonModule[\"1.0.0\"].from).toBe(\"appshell-2.0\");\n});\n\n\n//# sourceURL=webpack://appshell-2.0/./index.js?");

/***/ }),

/***/ "./node_modules/common/index.js":
/*!**************************************!*\
  !*** ./node_modules/common/index.js ***!
  \**************************************/
/***/ ((module) => {

eval("module.exports = 42;\n\n\n//# sourceURL=webpack://appshell-2.0/./node_modules/common/index.js?");

/***/ }),

/***/ "./node_modules/uncommon/index.js":
/*!****************************************!*\
  !*** ./node_modules/uncommon/index.js ***!
  \****************************************/
/***/ ((module) => {

eval("module.exports = 42;\n\n\n//# sourceURL=webpack://appshell-2.0/./node_modules/uncommon/index.js?");

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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 			var uniqueName = "appshell-2.0";
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
/******/ 				case "eagerOverrideNonEager": {
/******/ 					register("common", "1.0.0", () => (() => (__webpack_require__(/*! ./node_modules/common/index.js */ "./node_modules/common/index.js"))), 1);
/******/ 				}
/******/ 				break;
/******/ 				case "newerEager": {
/******/ 					register("common", "1.0.0", () => (() => (__webpack_require__(/*! ./node_modules/common/index.js */ "./node_modules/common/index.js"))), 1);
/******/ 				}
/******/ 				break;
/******/ 				case "newerNonEager": {
/******/ 					register("uncommon", "2.0.0", () => (() => (__webpack_require__(/*! ./node_modules/uncommon/index.js */ "./node_modules/uncommon/index.js"))));
/******/ 				}
/******/ 				break;
/******/ 				case "nonEagerDontOverrideEager": {
/******/ 					register("uncommon", "2.0.0", () => (() => (__webpack_require__(/*! ./node_modules/uncommon/index.js */ "./node_modules/uncommon/index.js"))));
/******/ 				}
/******/ 				break;
/******/ 			}
/******/ 			if(!promises.length) return initPromises[name] = 1;
/******/ 			return initPromises[name] = Promise.all(promises).then(() => (initPromises[name] = 1));
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;