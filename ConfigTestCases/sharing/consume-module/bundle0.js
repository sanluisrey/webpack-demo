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

eval("let warnings = [];\nlet oldWarn;\n\nbeforeEach(done => {\n\toldWarn = console.warn;\n\tconsole.warn = m => warnings.push(m);\n\tdone();\n});\n\nafterEach(done => {\n\texpectWarning();\n\tconsole.warn = oldWarn;\n\tdone();\n});\n\nconst expectWarning = regexp => {\n\tif (!regexp) {\n\t\texpect(warnings).toEqual([]);\n\t} else {\n\t\texpect(warnings).toEqual(\n\t\t\texpect.objectContaining({\n\t\t\t\t0: expect.stringMatching(regexp),\n\t\t\t\tlength: 1\n\t\t\t})\n\t\t);\n\t}\n\twarnings.length = 0;\n};\n\nit(\"should load the shared modules\", async () => {\n\t__webpack_require__.S[\"test-scope\"] = {\n\t\tpackage: {\n\t\t\t\"0\": {\n\t\t\t\tget: () => () => \"shared package\"\n\t\t\t}\n\t\t},\n\t\t\"@scoped/package\": {\n\t\t\t\"0\": {\n\t\t\t\tget: () => Promise.resolve(() => \"shared @scoped/package\")\n\t\t\t}\n\t\t},\n\t\t\"prefix/a\": {\n\t\t\t\"0\": {\n\t\t\t\tget: () => () => \"shared prefix/a\"\n\t\t\t}\n\t\t},\n\t\t\"prefix/deep/c\": {\n\t\t\t\"0\": {\n\t\t\t\tget: () => () => \"shared prefix/deep/c\"\n\t\t\t}\n\t\t},\n\t\t\"./relative1\": {\n\t\t\t\"0\": {\n\t\t\t\tget: () => () => \"shared relative1\"\n\t\t\t}\n\t\t}\n\t};\n\t__webpack_require__.S[\"other-scope\"] = {\n\t\t\"advanced/123\": {\n\t\t\t\"1.2.beta.1\": {\n\t\t\t\tget: () => () => \"123\"\n\t\t\t}\n\t\t},\n\t\t\"advanced/error1\": {\n\t\t\t\"1.2.3\": {\n\t\t\t\tget: () => {\n\t\t\t\t\tthrow new Error(\"error1\");\n\t\t\t\t}\n\t\t\t}\n\t\t},\n\t\t\"advanced/error2\": {\n\t\t\t\"1.2.3\": {\n\t\t\t\tget: () =>\n\t\t\t\t\tPromise.resolve().then(() => {\n\t\t\t\t\t\tthrow new Error(\"error2\");\n\t\t\t\t\t})\n\t\t\t}\n\t\t},\n\t\t\"advanced/error3\": {\n\t\t\t\"1.2.3\": {\n\t\t\t\tget: () =>\n\t\t\t\t\tPromise.resolve().then(() => () => {\n\t\t\t\t\t\tthrow new Error(\"error3\");\n\t\t\t\t\t})\n\t\t\t}\n\t\t},\n\t\t\"advanced/error4\": {\n\t\t\t\"1.0.0\": {\n\t\t\t\tget: () => () => \"wrong\"\n\t\t\t}\n\t\t}\n\t};\n\t{\n\t\tconst result = await __webpack_require__.e(/*! import() */ \"webpack_sharing_consume_test-scope_package_package\").then(__webpack_require__.t.bind(__webpack_require__, /*! package */ \"webpack/sharing/consume/test-scope/package/package\", 23));\n\t\texpect(result.default).toBe(\"shared package\");\n\t}\n\t{\n\t\tconst result = await __webpack_require__.e(/*! import() */ \"webpack_sharing_consume_test-scope_scoped_package_scoped_package\").then(__webpack_require__.t.bind(__webpack_require__, /*! @scoped/package */ \"webpack/sharing/consume/test-scope/@scoped/package/@scoped/package\", 23));\n\t\texpect(result.default).toBe(\"shared @scoped/package\");\n\t}\n\t{\n\t\tconst result = await __webpack_require__.e(/*! import() */ \"webpack_sharing_consume_test-scope_prefix_a_prefix_a\").then(__webpack_require__.t.bind(__webpack_require__, /*! prefix/a */ \"webpack/sharing/consume/test-scope/prefix/a/prefix/a\", 23));\n\t\texpect(result.default).toBe(\"shared prefix/a\");\n\t}\n\t{\n\t\tconst result = await __webpack_require__.e(/*! import() */ \"webpack_sharing_consume_test-scope_prefix_deep_b_prefix_deep_b\").then(__webpack_require__.t.bind(__webpack_require__, /*! prefix/deep/b */ \"webpack/sharing/consume/test-scope/prefix/deep/b/prefix/deep/b\", 23));\n\t\texpect(result.default).toBe(\"b\");\n\t}\n\t{\n\t\tconst result = await __webpack_require__.e(/*! import() */ \"webpack_sharing_consume_test-scope_prefix_deep_c\").then(__webpack_require__.t.bind(__webpack_require__, /*! prefix/deep/c */ \"webpack/sharing/consume/test-scope/prefix/deep/c\", 23));\n\t\texpect(result.default).toBe(\"shared prefix/deep/c\");\n\t}\n\t{\n\t\tconst result = await __webpack_require__.e(/*! import() */ \"webpack_sharing_consume_test-scope_relative1_relative1\").then(__webpack_require__.t.bind(__webpack_require__, /*! ./relative1 */ \"webpack/sharing/consume/test-scope/./relative1/./relative1\", 23));\n\t\texpect(result.default).toBe(\"shared relative1\");\n\t}\n\t{\n\t\tconst result = await __webpack_require__.e(/*! import() */ \"webpack_sharing_consume_test-scope_relative2_relative2\").then(__webpack_require__.t.bind(__webpack_require__, /*! ./relative2 */ \"webpack/sharing/consume/test-scope/./relative2/./relative2\", 23));\n\t\texpect(result.default).toBe(\"relative2\");\n\t}\n\t{\n\t\tconst result = await __webpack_require__.e(/*! import() */ \"webpack_sharing_consume_other-scope_advanced_123\").then(__webpack_require__.t.bind(__webpack_require__, /*! advanced/123 */ \"webpack/sharing/consume/other-scope/advanced/123\", 23));\n\t\texpect(result.default).toBe(\"123\");\n\t}\n\t{\n\t\tawait expect(() => __webpack_require__.e(/*! import() */ \"webpack_sharing_consume_other-scope_advanced_error0\").then(__webpack_require__.t.bind(__webpack_require__, /*! advanced/error0 */ \"webpack/sharing/consume/other-scope/advanced/error0\", 23))).rejects.toEqual(\n\t\t\texpect.objectContaining({\n\t\t\t\tmessage: expect.stringContaining(\"advanced/error0\")\n\t\t\t})\n\t\t);\n\t}\n\t{\n\t\tawait expect(() => __webpack_require__.e(/*! import() */ \"webpack_sharing_consume_other-scope_advanced_error1\").then(__webpack_require__.t.bind(__webpack_require__, /*! advanced/error1 */ \"webpack/sharing/consume/other-scope/advanced/error1\", 23))).rejects.toEqual(\n\t\t\texpect.objectContaining({\n\t\t\t\tmessage: expect.stringContaining(\"error1\")\n\t\t\t})\n\t\t);\n\t}\n\t{\n\t\tawait expect(() => __webpack_require__.e(/*! import() */ \"webpack_sharing_consume_other-scope_advanced_error2\").then(__webpack_require__.t.bind(__webpack_require__, /*! advanced/error2 */ \"webpack/sharing/consume/other-scope/advanced/error2\", 23))).rejects.toEqual(\n\t\t\texpect.objectContaining({\n\t\t\t\tmessage: expect.stringContaining(\"error2\")\n\t\t\t})\n\t\t);\n\t}\n\t{\n\t\tawait expect(() => __webpack_require__.e(/*! import() */ \"webpack_sharing_consume_other-scope_advanced_error3\").then(__webpack_require__.t.bind(__webpack_require__, /*! advanced/error3 */ \"webpack/sharing/consume/other-scope/advanced/error3\", 23))).rejects.toEqual(\n\t\t\texpect.objectContaining({\n\t\t\t\tmessage: expect.stringContaining(\"error3\")\n\t\t\t})\n\t\t);\n\t}\n\t{\n\t\tawait expect(() => __webpack_require__.e(/*! import() */ \"webpack_sharing_consume_other-scope_advanced_error4\").then(__webpack_require__.t.bind(__webpack_require__, /*! advanced/error4 */ \"webpack/sharing/consume/other-scope/advanced/error4\", 23))).rejects.toEqual(\n\t\t\texpect.objectContaining({\n\t\t\t\tmessage: expect.stringContaining(\"1.2.3\")\n\t\t\t})\n\t\t);\n\t}\n});\n\nit(\"should handle version matching correctly in strict and singleton mode\", async () => {\n\t__webpack_require__.S[\"default\"] = {\n\t\tstrict0: {\n\t\t\t\"1.1.1\": {\n\t\t\t\tget: () => () => \"shared strict0\"\n\t\t\t}\n\t\t},\n\t\tstrict1: {\n\t\t\t\"1.1.1\": {\n\t\t\t\tget: () => () => \"shared strict1\"\n\t\t\t}\n\t\t},\n\t\tstrict2: {\n\t\t\t\"1.1.1\": {\n\t\t\t\tget: () => () => \"shared strict2\"\n\t\t\t}\n\t\t},\n\t\tstrict3: {\n\t\t\t\"1.1.1\": {\n\t\t\t\tget: () => () => \"shared strict3\"\n\t\t\t}\n\t\t},\n\t\tstrict4: {\n\t\t\t\"1.1.1\": {\n\t\t\t\tget: () => () => \"shared strict4\"\n\t\t\t}\n\t\t},\n\t\tstrict5: {\n\t\t\t\"1.1.1\": {\n\t\t\t\tget: () => () => \"shared strict5\"\n\t\t\t}\n\t\t},\n\t\tsingleton: {\n\t\t\t\"1.1.1\": {\n\t\t\t\tget: () => () => \"shared singleton\",\n\t\t\t\tfrom: 'container-a'\n\t\t\t}\n\t\t}\n\t};\n\t{\n\t\tconst result = await __webpack_require__.e(/*! import() */ \"webpack_sharing_consume_default_strict0_strict0\").then(__webpack_require__.t.bind(__webpack_require__, /*! strict0 */ \"webpack/sharing/consume/default/strict0/strict0\", 23));\n\t\texpect(result.default).toBe(\"shared strict0\");\n\t\texpectWarning();\n\t}\n\t{\n\t\tconst result = await __webpack_require__.e(/*! import() */ \"webpack_sharing_consume_default_strict1_strict1\").then(__webpack_require__.t.bind(__webpack_require__, /*! strict1 */ \"webpack/sharing/consume/default/strict1/strict1\", 23));\n\t\texpect(result.default).toBe(\"strict\");\n\t}\n\t{\n\t\tconst result = await __webpack_require__.e(/*! import() */ \"webpack_sharing_consume_default_strict2_strict2\").then(__webpack_require__.t.bind(__webpack_require__, /*! strict2 */ \"webpack/sharing/consume/default/strict2/strict2\", 23));\n\t\texpect(result.default).toBe(\"strict\");\n\t}\n\t{\n\t\tconst result = await __webpack_require__.e(/*! import() */ \"webpack_sharing_consume_default_strict3_strict3\").then(__webpack_require__.t.bind(__webpack_require__, /*! strict3 */ \"webpack/sharing/consume/default/strict3/strict3\", 23));\n\t\texpect(result.default).toBe(\"strict\");\n\t}\n\t{\n\t\tconst result = await __webpack_require__.e(/*! import() */ \"webpack_sharing_consume_default_strict4_strict4\").then(__webpack_require__.t.bind(__webpack_require__, /*! strict4 */ \"webpack/sharing/consume/default/strict4/strict4\", 23));\n\t\texpect(result.default).toBe(\"strict\");\n\t}\n\t{\n\t\tawait expect(() => __webpack_require__.e(/*! import() */ \"webpack_sharing_consume_default_strict5\").then(__webpack_require__.t.bind(__webpack_require__, /*! strict5 */ \"webpack/sharing/consume/default/strict5\", 23))).rejects.toEqual(\n\t\t\texpect.objectContaining({\n\t\t\t\tmessage: expect.stringContaining(\"strict5\")\n\t\t\t})\n\t\t);\n\t\texpectWarning();\n\t}\n\t{\n\t\tconst result = await __webpack_require__.e(/*! import() */ \"webpack_sharing_consume_default_singleton_singleton\").then(__webpack_require__.t.bind(__webpack_require__, /*! singleton */ \"webpack/sharing/consume/default/singleton/singleton\", 23));\n\t\texpect(result.default).toBe(\"shared singleton\");\n\t\texpectWarning(\n\t\t\t/Unsatisfied version 1\\.1\\.1 from container-a of shared singleton module singleton \\(required =1\\.1\\.0\\)/\n\t\t);\n\t}\n});\n\n\n//# sourceURL=webpack:///./index.js?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".bundle0.js";
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
/******/ 			var uniqueName = undefined;
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
/******/ 			}
/******/ 			if(!promises.length) return initPromises[name] = 1;
/******/ 			return initPromises[name] = Promise.all(promises).then(() => (initPromises[name] = 1));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/consumes */
/******/ 	(() => {
/******/ 		var parseVersion = (str) => {
/******/ 			// see webpack/lib/util/semver.js for original code
/******/ 			var p=p=>{return p.split(".").map((p=>{return+p==p?+p:p}))},n=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(str),r=n[1]?p(n[1]):[];return n[2]&&(r.length++,r.push.apply(r,p(n[2]))),n[3]&&(r.push([]),r.push.apply(r,p(n[3]))),r;
/******/ 		}
/******/ 		var versionLt = (a, b) => {
/******/ 			// see webpack/lib/util/semver.js for original code
/******/ 			a=parseVersion(a),b=parseVersion(b);for(var r=0;;){if(r>=a.length)return r<b.length&&"u"!=(typeof b[r])[0];var e=a[r],n=(typeof e)[0];if(r>=b.length)return"u"==n;var t=b[r],f=(typeof t)[0];if(n!=f)return"o"==n&&"n"==f||("s"==f||"u"==n);if("o"!=n&&"u"!=n&&e!=t)return e<t;r++}
/******/ 		}
/******/ 		var rangeToString = (range) => {
/******/ 			// see webpack/lib/util/semver.js for original code
/******/ 			var r=range[0],n="";if(1===range.length)return"*";if(r+.5){n+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var e=1,a=1;a<range.length;a++){e--,n+="u"==(typeof(t=range[a]))[0]?"-":(e>0?".":"")+(e=2,t)}return n}var g=[];for(a=1;a<range.length;a++){var t=range[a];g.push(0===t?"not("+o()+")":1===t?"("+o()+" || "+o()+")":2===t?g.pop()+" "+g.pop():rangeToString(t))}return o();function o(){return g.pop().replace(/^\((.+)\)$/,"$1")}
/******/ 		}
/******/ 		var satisfy = (range, version) => {
/******/ 			// see webpack/lib/util/semver.js for original code
/******/ 			if(0 in range){version=parseVersion(version);var e=range[0],r=e<0;r&&(e=-e-1);for(var n=0,i=1,a=!0;;i++,n++){var f,s,g=i<range.length?(typeof range[i])[0]:"";if(n>=version.length||"o"==(s=(typeof(f=version[n]))[0]))return!a||("u"==g?i>e&&!r:""==g!=r);if("u"==s){if(!a||"u"!=g)return!1}else if(a)if(g==s)if(i<=e){if(f!=range[i])return!1}else{if(r?f>range[i]:f<range[i])return!1;f!=range[i]&&(a=!1)}else if("s"!=g&&"n"!=g){if(r||i<=e)return!1;a=!1,i--}else{if(i<=e||s<g!=r)return!1;a=!1}else"s"!=g&&"n"!=g&&(a=!1,i--)}}var t=[],o=t.pop.bind(t);for(n=1;n<range.length;n++){var u=range[n];t.push(1==u?o()|o():2==u?o()&o():u?satisfy(u,version):!o())}return!!o();
/******/ 		}
/******/ 		var ensureExistence = (scopeName, key) => {
/******/ 			var scope = __webpack_require__.S[scopeName];
/******/ 			if(!scope || !__webpack_require__.o(scope, key)) throw new Error("Shared module " + key + " doesn't exist in shared scope " + scopeName);
/******/ 			return scope;
/******/ 		};
/******/ 		var findVersion = (scope, key) => {
/******/ 			var versions = scope[key];
/******/ 			var key = Object.keys(versions).reduce((a, b) => {
/******/ 				return !a || versionLt(a, b) ? b : a;
/******/ 			}, 0);
/******/ 			return key && versions[key]
/******/ 		};
/******/ 		var findSingletonVersionKey = (scope, key) => {
/******/ 			var versions = scope[key];
/******/ 			return Object.keys(versions).reduce((a, b) => {
/******/ 				return !a || (!versions[a].loaded && versionLt(a, b)) ? b : a;
/******/ 			}, 0);
/******/ 		};
/******/ 		var getInvalidSingletonVersionMessage = (scope, key, version, requiredVersion) => {
/******/ 			return "Unsatisfied version " + version + " from " + (version && scope[key][version].from) + " of shared singleton module " + key + " (required " + rangeToString(requiredVersion) + ")"
/******/ 		};
/******/ 		var getSingletonVersion = (scope, scopeName, key, requiredVersion) => {
/******/ 			var version = findSingletonVersionKey(scope, key);
/******/ 			if (!satisfy(requiredVersion, version)) typeof console !== "undefined" && console.warn && console.warn(getInvalidSingletonVersionMessage(scope, key, version, requiredVersion));
/******/ 			return get(scope[key][version]);
/******/ 		};
/******/ 		var getStrictSingletonVersion = (scope, scopeName, key, requiredVersion) => {
/******/ 			var version = findSingletonVersionKey(scope, key);
/******/ 			if (!satisfy(requiredVersion, version)) throw new Error(getInvalidSingletonVersionMessage(scope, key, version, requiredVersion));
/******/ 			return get(scope[key][version]);
/******/ 		};
/******/ 		var findValidVersion = (scope, key, requiredVersion) => {
/******/ 			var versions = scope[key];
/******/ 			var key = Object.keys(versions).reduce((a, b) => {
/******/ 				if (!satisfy(requiredVersion, b)) return a;
/******/ 				return !a || versionLt(a, b) ? b : a;
/******/ 			}, 0);
/******/ 			return key && versions[key]
/******/ 		};
/******/ 		var getInvalidVersionMessage = (scope, scopeName, key, requiredVersion) => {
/******/ 			var versions = scope[key];
/******/ 			return "No satisfying version (" + rangeToString(requiredVersion) + ") of shared module " + key + " found in shared scope " + scopeName + ".\n" +
/******/ 				"Available versions: " + Object.keys(versions).map((key) => {
/******/ 				return key + " from " + versions[key].from;
/******/ 			}).join(", ");
/******/ 		};
/******/ 		var getValidVersion = (scope, scopeName, key, requiredVersion) => {
/******/ 			var entry = findValidVersion(scope, key, requiredVersion);
/******/ 			if(entry) return get(entry);
/******/ 			throw new Error(getInvalidVersionMessage(scope, scopeName, key, requiredVersion));
/******/ 		};
/******/ 		var warnInvalidVersion = (scope, scopeName, key, requiredVersion) => {
/******/ 			typeof console !== "undefined" && console.warn && console.warn(getInvalidVersionMessage(scope, scopeName, key, requiredVersion));
/******/ 		};
/******/ 		var get = (entry) => {
/******/ 			entry.loaded = 1;
/******/ 			return entry.get()
/******/ 		};
/******/ 		var init = (fn) => (function(scopeName, a, b, c) {
/******/ 			var promise = __webpack_require__.I(scopeName);
/******/ 			if (promise && promise.then) return promise.then(fn.bind(fn, scopeName, __webpack_require__.S[scopeName], a, b, c));
/******/ 			return fn(scopeName, __webpack_require__.S[scopeName], a, b, c);
/******/ 		});
/******/ 		
/******/ 		var load = /*#__PURE__*/ init((scopeName, scope, key) => {
/******/ 			ensureExistence(scopeName, key);
/******/ 			return get(findVersion(scope, key));
/******/ 		});
/******/ 		var loadFallback = /*#__PURE__*/ init((scopeName, scope, key, fallback) => {
/******/ 			return scope && __webpack_require__.o(scope, key) ? get(findVersion(scope, key)) : fallback();
/******/ 		});
/******/ 		var loadVersionCheck = /*#__PURE__*/ init((scopeName, scope, key, version) => {
/******/ 			ensureExistence(scopeName, key);
/******/ 			return get(findValidVersion(scope, key, version) || warnInvalidVersion(scope, scopeName, key, version) || findVersion(scope, key));
/******/ 		});
/******/ 		var loadSingletonVersionCheck = /*#__PURE__*/ init((scopeName, scope, key, version) => {
/******/ 			ensureExistence(scopeName, key);
/******/ 			return getSingletonVersion(scope, scopeName, key, version);
/******/ 		});
/******/ 		var loadStrictVersionCheck = /*#__PURE__*/ init((scopeName, scope, key, version) => {
/******/ 			ensureExistence(scopeName, key);
/******/ 			return getValidVersion(scope, scopeName, key, version);
/******/ 		});
/******/ 		var loadStrictSingletonVersionCheck = /*#__PURE__*/ init((scopeName, scope, key, version) => {
/******/ 			ensureExistence(scopeName, key);
/******/ 			return getStrictSingletonVersion(scope, scopeName, key, version);
/******/ 		});
/******/ 		var loadVersionCheckFallback = /*#__PURE__*/ init((scopeName, scope, key, version, fallback) => {
/******/ 			if(!scope || !__webpack_require__.o(scope, key)) return fallback();
/******/ 			return get(findValidVersion(scope, key, version) || warnInvalidVersion(scope, scopeName, key, version) || findVersion(scope, key));
/******/ 		});
/******/ 		var loadSingletonVersionCheckFallback = /*#__PURE__*/ init((scopeName, scope, key, version, fallback) => {
/******/ 			if(!scope || !__webpack_require__.o(scope, key)) return fallback();
/******/ 			return getSingletonVersion(scope, scopeName, key, version);
/******/ 		});
/******/ 		var loadStrictVersionCheckFallback = /*#__PURE__*/ init((scopeName, scope, key, version, fallback) => {
/******/ 			var entry = scope && __webpack_require__.o(scope, key) && findValidVersion(scope, key, version);
/******/ 			return entry ? get(entry) : fallback();
/******/ 		});
/******/ 		var loadStrictSingletonVersionCheckFallback = /*#__PURE__*/ init((scopeName, scope, key, version, fallback) => {
/******/ 			if(!scope || !__webpack_require__.o(scope, key)) return fallback();
/******/ 			return getStrictSingletonVersion(scope, scopeName, key, version);
/******/ 		});
/******/ 		var installedModules = {};
/******/ 		var moduleToHandlerMapping = {
/******/ 			"webpack/sharing/consume/test-scope/package/package": () => (loadVersionCheckFallback("test-scope", "package", [0], () => (__webpack_require__.e("node_modules_package_js").then(() => (() => (__webpack_require__(/*! package */ "./node_modules/package.js"))))))),
/******/ 			"webpack/sharing/consume/test-scope/@scoped/package/@scoped/package": () => (loadVersionCheckFallback("test-scope", "@scoped/package", [0], () => (__webpack_require__.e("node_modules_scoped_package_index_js").then(() => (() => (__webpack_require__(/*! @scoped/package */ "./node_modules/@scoped/package/index.js"))))))),
/******/ 			"webpack/sharing/consume/test-scope/prefix/a/prefix/a": () => (loadVersionCheckFallback("test-scope", "prefix/a", [0], () => (__webpack_require__.e("node_modules_prefix_a_js").then(() => (() => (__webpack_require__(/*! prefix/a */ "./node_modules/prefix/a.js"))))))),
/******/ 			"webpack/sharing/consume/test-scope/prefix/deep/b/prefix/deep/b": () => (loadVersionCheckFallback("test-scope", "prefix/deep/b", [0], () => (__webpack_require__.e("node_modules_prefix_deep_b_js").then(() => (() => (__webpack_require__(/*! prefix/deep/b */ "./node_modules/prefix/deep/b.js"))))))),
/******/ 			"webpack/sharing/consume/test-scope/prefix/deep/c": () => (loadVersionCheck("test-scope", "prefix/deep/c", [0])),
/******/ 			"webpack/sharing/consume/test-scope/./relative1/./relative1": () => (loadFallback("test-scope", "./relative1", () => (__webpack_require__.e("relative1_js").then(() => (() => (__webpack_require__(/*! ./relative1 */ "./relative1.js"))))))),
/******/ 			"webpack/sharing/consume/test-scope/./relative2/./relative2": () => (loadFallback("test-scope", "./relative2", () => (__webpack_require__.e("relative2_js").then(() => (() => (__webpack_require__(/*! ./relative2 */ "./relative2.js"))))))),
/******/ 			"webpack/sharing/consume/other-scope/advanced/123": () => (loadStrictVersionCheck("other-scope", "advanced/123", [1,1,2,3])),
/******/ 			"webpack/sharing/consume/other-scope/advanced/error0": () => (loadStrictVersionCheck("other-scope", "advanced/error0", [1,1,2,3])),
/******/ 			"webpack/sharing/consume/other-scope/advanced/error1": () => (loadStrictVersionCheck("other-scope", "advanced/error1", [1,1,2,3])),
/******/ 			"webpack/sharing/consume/other-scope/advanced/error2": () => (loadStrictVersionCheck("other-scope", "advanced/error2", [1,1,2,3])),
/******/ 			"webpack/sharing/consume/other-scope/advanced/error3": () => (loadStrictVersionCheck("other-scope", "advanced/error3", [1,1,2,3])),
/******/ 			"webpack/sharing/consume/other-scope/advanced/error4": () => (loadStrictVersionCheck("other-scope", "advanced/error4", [1,1,2,3])),
/******/ 			"webpack/sharing/consume/default/strict0/strict0": () => (loadStrictVersionCheckFallback("default", "strict0", [1,1,0,0], () => (__webpack_require__.e("node_modules_strict0_js").then(() => (() => (__webpack_require__(/*! strict0 */ "./node_modules/strict0.js"))))))),
/******/ 			"webpack/sharing/consume/default/strict1/strict1": () => (loadStrictVersionCheckFallback("default", "strict1", [0,1,2,0], () => (__webpack_require__.e("node_modules_strict1_js").then(() => (() => (__webpack_require__(/*! strict1 */ "./node_modules/strict1.js"))))))),
/******/ 			"webpack/sharing/consume/default/strict2/strict2": () => (loadStrictVersionCheckFallback("default", "strict2", [4,1,1,0], () => (__webpack_require__.e("node_modules_strict2_js").then(() => (() => (__webpack_require__(/*! strict2 */ "./node_modules/strict2.js"))))))),
/******/ 			"webpack/sharing/consume/default/strict3/strict3": () => (loadStrictVersionCheckFallback("default", "strict3", [2,1,0,0], () => (__webpack_require__.e("node_modules_strict3_js").then(() => (() => (__webpack_require__(/*! strict3 */ "./node_modules/strict3.js"))))))),
/******/ 			"webpack/sharing/consume/default/strict4/strict4": () => (loadStrictVersionCheckFallback("default", "strict4", [1,2,2,3], () => (__webpack_require__.e("node_modules_strict4_js").then(() => (() => (__webpack_require__(/*! strict4 */ "./node_modules/strict4.js"))))))),
/******/ 			"webpack/sharing/consume/default/strict5": () => (loadStrictVersionCheck("default", "strict5", [1,"alpha"])),
/******/ 			"webpack/sharing/consume/default/singleton/singleton": () => (loadSingletonVersionCheckFallback("default", "singleton", [4,1,1,0], () => (__webpack_require__.e("node_modules_singleton_js").then(() => (() => (__webpack_require__(/*! singleton */ "./node_modules/singleton.js")))))))
/******/ 		};
/******/ 		// no consumes in initial chunks
/******/ 		var chunkMapping = {
/******/ 			"webpack_sharing_consume_test-scope_package_package": [
/******/ 				"webpack/sharing/consume/test-scope/package/package"
/******/ 			],
/******/ 			"webpack_sharing_consume_test-scope_scoped_package_scoped_package": [
/******/ 				"webpack/sharing/consume/test-scope/@scoped/package/@scoped/package"
/******/ 			],
/******/ 			"webpack_sharing_consume_test-scope_prefix_a_prefix_a": [
/******/ 				"webpack/sharing/consume/test-scope/prefix/a/prefix/a"
/******/ 			],
/******/ 			"webpack_sharing_consume_test-scope_prefix_deep_b_prefix_deep_b": [
/******/ 				"webpack/sharing/consume/test-scope/prefix/deep/b/prefix/deep/b"
/******/ 			],
/******/ 			"webpack_sharing_consume_test-scope_prefix_deep_c": [
/******/ 				"webpack/sharing/consume/test-scope/prefix/deep/c"
/******/ 			],
/******/ 			"webpack_sharing_consume_test-scope_relative1_relative1": [
/******/ 				"webpack/sharing/consume/test-scope/./relative1/./relative1"
/******/ 			],
/******/ 			"webpack_sharing_consume_test-scope_relative2_relative2": [
/******/ 				"webpack/sharing/consume/test-scope/./relative2/./relative2"
/******/ 			],
/******/ 			"webpack_sharing_consume_other-scope_advanced_123": [
/******/ 				"webpack/sharing/consume/other-scope/advanced/123"
/******/ 			],
/******/ 			"webpack_sharing_consume_other-scope_advanced_error0": [
/******/ 				"webpack/sharing/consume/other-scope/advanced/error0"
/******/ 			],
/******/ 			"webpack_sharing_consume_other-scope_advanced_error1": [
/******/ 				"webpack/sharing/consume/other-scope/advanced/error1"
/******/ 			],
/******/ 			"webpack_sharing_consume_other-scope_advanced_error2": [
/******/ 				"webpack/sharing/consume/other-scope/advanced/error2"
/******/ 			],
/******/ 			"webpack_sharing_consume_other-scope_advanced_error3": [
/******/ 				"webpack/sharing/consume/other-scope/advanced/error3"
/******/ 			],
/******/ 			"webpack_sharing_consume_other-scope_advanced_error4": [
/******/ 				"webpack/sharing/consume/other-scope/advanced/error4"
/******/ 			],
/******/ 			"webpack_sharing_consume_default_strict0_strict0": [
/******/ 				"webpack/sharing/consume/default/strict0/strict0"
/******/ 			],
/******/ 			"webpack_sharing_consume_default_strict1_strict1": [
/******/ 				"webpack/sharing/consume/default/strict1/strict1"
/******/ 			],
/******/ 			"webpack_sharing_consume_default_strict2_strict2": [
/******/ 				"webpack/sharing/consume/default/strict2/strict2"
/******/ 			],
/******/ 			"webpack_sharing_consume_default_strict3_strict3": [
/******/ 				"webpack/sharing/consume/default/strict3/strict3"
/******/ 			],
/******/ 			"webpack_sharing_consume_default_strict4_strict4": [
/******/ 				"webpack/sharing/consume/default/strict4/strict4"
/******/ 			],
/******/ 			"webpack_sharing_consume_default_strict5": [
/******/ 				"webpack/sharing/consume/default/strict5"
/******/ 			],
/******/ 			"webpack_sharing_consume_default_singleton_singleton": [
/******/ 				"webpack/sharing/consume/default/singleton/singleton"
/******/ 			]
/******/ 		};
/******/ 		__webpack_require__.f.consumes = (chunkId, promises) => {
/******/ 			if(__webpack_require__.o(chunkMapping, chunkId)) {
/******/ 				chunkMapping[chunkId].forEach((id) => {
/******/ 					if(__webpack_require__.o(installedModules, id)) return promises.push(installedModules[id]);
/******/ 					var onFactory = (factory) => {
/******/ 						installedModules[id] = 0;
/******/ 						__webpack_require__.m[id] = (module) => {
/******/ 							delete __webpack_require__.c[id];
/******/ 							module.exports = factory();
/******/ 						}
/******/ 					};
/******/ 					var onError = (error) => {
/******/ 						delete installedModules[id];
/******/ 						__webpack_require__.m[id] = (module) => {
/******/ 							delete __webpack_require__.c[id];
/******/ 							throw error;
/******/ 						}
/******/ 					};
/******/ 					try {
/******/ 						var promise = moduleToHandlerMapping[id]();
/******/ 						if(promise.then) {
/******/ 							promises.push(installedModules[id] = promise.then(onFactory)['catch'](onError));
/******/ 						} else onFactory(promise);
/******/ 					} catch(e) { onError(e); }
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/consumes */
/******/ 	(() => {
/******/ 		var parseVersion = (str) => {
/******/ 			// see webpack/lib/util/semver.js for original code
/******/ 			var p=p=>{return p.split(".").map((p=>{return+p==p?+p:p}))},n=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(str),r=n[1]?p(n[1]):[];return n[2]&&(r.length++,r.push.apply(r,p(n[2]))),n[3]&&(r.push([]),r.push.apply(r,p(n[3]))),r;
/******/ 		}
/******/ 		var versionLt = (a, b) => {
/******/ 			// see webpack/lib/util/semver.js for original code
/******/ 			a=parseVersion(a),b=parseVersion(b);for(var r=0;;){if(r>=a.length)return r<b.length&&"u"!=(typeof b[r])[0];var e=a[r],n=(typeof e)[0];if(r>=b.length)return"u"==n;var t=b[r],f=(typeof t)[0];if(n!=f)return"o"==n&&"n"==f||("s"==f||"u"==n);if("o"!=n&&"u"!=n&&e!=t)return e<t;r++}
/******/ 		}
/******/ 		var rangeToString = (range) => {
/******/ 			// see webpack/lib/util/semver.js for original code
/******/ 			var r=range[0],n="";if(1===range.length)return"*";if(r+.5){n+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var e=1,a=1;a<range.length;a++){e--,n+="u"==(typeof(t=range[a]))[0]?"-":(e>0?".":"")+(e=2,t)}return n}var g=[];for(a=1;a<range.length;a++){var t=range[a];g.push(0===t?"not("+o()+")":1===t?"("+o()+" || "+o()+")":2===t?g.pop()+" "+g.pop():rangeToString(t))}return o();function o(){return g.pop().replace(/^\((.+)\)$/,"$1")}
/******/ 		}
/******/ 		var satisfy = (range, version) => {
/******/ 			// see webpack/lib/util/semver.js for original code
/******/ 			if(0 in range){version=parseVersion(version);var e=range[0],r=e<0;r&&(e=-e-1);for(var n=0,i=1,a=!0;;i++,n++){var f,s,g=i<range.length?(typeof range[i])[0]:"";if(n>=version.length||"o"==(s=(typeof(f=version[n]))[0]))return!a||("u"==g?i>e&&!r:""==g!=r);if("u"==s){if(!a||"u"!=g)return!1}else if(a)if(g==s)if(i<=e){if(f!=range[i])return!1}else{if(r?f>range[i]:f<range[i])return!1;f!=range[i]&&(a=!1)}else if("s"!=g&&"n"!=g){if(r||i<=e)return!1;a=!1,i--}else{if(i<=e||s<g!=r)return!1;a=!1}else"s"!=g&&"n"!=g&&(a=!1,i--)}}var t=[],o=t.pop.bind(t);for(n=1;n<range.length;n++){var u=range[n];t.push(1==u?o()|o():2==u?o()&o():u?satisfy(u,version):!o())}return!!o();
/******/ 		}
/******/ 		var ensureExistence = (scopeName, key) => {
/******/ 			var scope = __webpack_require__.S[scopeName];
/******/ 			if(!scope || !__webpack_require__.o(scope, key)) throw new Error("Shared module " + key + " doesn't exist in shared scope " + scopeName);
/******/ 			return scope;
/******/ 		};
/******/ 		var findVersion = (scope, key) => {
/******/ 			var versions = scope[key];
/******/ 			var key = Object.keys(versions).reduce((a, b) => {
/******/ 				return !a || versionLt(a, b) ? b : a;
/******/ 			}, 0);
/******/ 			return key && versions[key]
/******/ 		};
/******/ 		var findSingletonVersionKey = (scope, key) => {
/******/ 			var versions = scope[key];
/******/ 			return Object.keys(versions).reduce((a, b) => {
/******/ 				return !a || (!versions[a].loaded && versionLt(a, b)) ? b : a;
/******/ 			}, 0);
/******/ 		};
/******/ 		var getInvalidSingletonVersionMessage = (scope, key, version, requiredVersion) => {
/******/ 			return "Unsatisfied version " + version + " from " + (version && scope[key][version].from) + " of shared singleton module " + key + " (required " + rangeToString(requiredVersion) + ")"
/******/ 		};
/******/ 		var getSingletonVersion = (scope, scopeName, key, requiredVersion) => {
/******/ 			var version = findSingletonVersionKey(scope, key);
/******/ 			if (!satisfy(requiredVersion, version)) typeof console !== "undefined" && console.warn && console.warn(getInvalidSingletonVersionMessage(scope, key, version, requiredVersion));
/******/ 			return get(scope[key][version]);
/******/ 		};
/******/ 		var getStrictSingletonVersion = (scope, scopeName, key, requiredVersion) => {
/******/ 			var version = findSingletonVersionKey(scope, key);
/******/ 			if (!satisfy(requiredVersion, version)) throw new Error(getInvalidSingletonVersionMessage(scope, key, version, requiredVersion));
/******/ 			return get(scope[key][version]);
/******/ 		};
/******/ 		var findValidVersion = (scope, key, requiredVersion) => {
/******/ 			var versions = scope[key];
/******/ 			var key = Object.keys(versions).reduce((a, b) => {
/******/ 				if (!satisfy(requiredVersion, b)) return a;
/******/ 				return !a || versionLt(a, b) ? b : a;
/******/ 			}, 0);
/******/ 			return key && versions[key]
/******/ 		};
/******/ 		var getInvalidVersionMessage = (scope, scopeName, key, requiredVersion) => {
/******/ 			var versions = scope[key];
/******/ 			return "No satisfying version (" + rangeToString(requiredVersion) + ") of shared module " + key + " found in shared scope " + scopeName + ".\n" +
/******/ 				"Available versions: " + Object.keys(versions).map((key) => {
/******/ 				return key + " from " + versions[key].from;
/******/ 			}).join(", ");
/******/ 		};
/******/ 		var getValidVersion = (scope, scopeName, key, requiredVersion) => {
/******/ 			var entry = findValidVersion(scope, key, requiredVersion);
/******/ 			if(entry) return get(entry);
/******/ 			throw new Error(getInvalidVersionMessage(scope, scopeName, key, requiredVersion));
/******/ 		};
/******/ 		var warnInvalidVersion = (scope, scopeName, key, requiredVersion) => {
/******/ 			typeof console !== "undefined" && console.warn && console.warn(getInvalidVersionMessage(scope, scopeName, key, requiredVersion));
/******/ 		};
/******/ 		var get = (entry) => {
/******/ 			entry.loaded = 1;
/******/ 			return entry.get()
/******/ 		};
/******/ 		var init = (fn) => (function(scopeName, a, b, c) {
/******/ 			var promise = __webpack_require__.I(scopeName);
/******/ 			if (promise && promise.then) return promise.then(fn.bind(fn, scopeName, __webpack_require__.S[scopeName], a, b, c));
/******/ 			return fn(scopeName, __webpack_require__.S[scopeName], a, b, c);
/******/ 		});
/******/ 		
/******/ 		var load = /*#__PURE__*/ init((scopeName, scope, key) => {
/******/ 			ensureExistence(scopeName, key);
/******/ 			return get(findVersion(scope, key));
/******/ 		});
/******/ 		var loadFallback = /*#__PURE__*/ init((scopeName, scope, key, fallback) => {
/******/ 			return scope && __webpack_require__.o(scope, key) ? get(findVersion(scope, key)) : fallback();
/******/ 		});
/******/ 		var loadVersionCheck = /*#__PURE__*/ init((scopeName, scope, key, version) => {
/******/ 			ensureExistence(scopeName, key);
/******/ 			return get(findValidVersion(scope, key, version) || warnInvalidVersion(scope, scopeName, key, version) || findVersion(scope, key));
/******/ 		});
/******/ 		var loadSingletonVersionCheck = /*#__PURE__*/ init((scopeName, scope, key, version) => {
/******/ 			ensureExistence(scopeName, key);
/******/ 			return getSingletonVersion(scope, scopeName, key, version);
/******/ 		});
/******/ 		var loadStrictVersionCheck = /*#__PURE__*/ init((scopeName, scope, key, version) => {
/******/ 			ensureExistence(scopeName, key);
/******/ 			return getValidVersion(scope, scopeName, key, version);
/******/ 		});
/******/ 		var loadStrictSingletonVersionCheck = /*#__PURE__*/ init((scopeName, scope, key, version) => {
/******/ 			ensureExistence(scopeName, key);
/******/ 			return getStrictSingletonVersion(scope, scopeName, key, version);
/******/ 		});
/******/ 		var loadVersionCheckFallback = /*#__PURE__*/ init((scopeName, scope, key, version, fallback) => {
/******/ 			if(!scope || !__webpack_require__.o(scope, key)) return fallback();
/******/ 			return get(findValidVersion(scope, key, version) || warnInvalidVersion(scope, scopeName, key, version) || findVersion(scope, key));
/******/ 		});
/******/ 		var loadSingletonVersionCheckFallback = /*#__PURE__*/ init((scopeName, scope, key, version, fallback) => {
/******/ 			if(!scope || !__webpack_require__.o(scope, key)) return fallback();
/******/ 			return getSingletonVersion(scope, scopeName, key, version);
/******/ 		});
/******/ 		var loadStrictVersionCheckFallback = /*#__PURE__*/ init((scopeName, scope, key, version, fallback) => {
/******/ 			var entry = scope && __webpack_require__.o(scope, key) && findValidVersion(scope, key, version);
/******/ 			return entry ? get(entry) : fallback();
/******/ 		});
/******/ 		var loadStrictSingletonVersionCheckFallback = /*#__PURE__*/ init((scopeName, scope, key, version, fallback) => {
/******/ 			if(!scope || !__webpack_require__.o(scope, key)) return fallback();
/******/ 			return getStrictSingletonVersion(scope, scopeName, key, version);
/******/ 		});
/******/ 		var installedModules = {};
/******/ 		var moduleToHandlerMapping = {
/******/ 			"webpack/sharing/consume/test-scope/package/package": () => (loadVersionCheckFallback("test-scope", "package", [0], () => (__webpack_require__.e("node_modules_package_js").then(() => (() => (__webpack_require__(/*! package */ "./node_modules/package.js"))))))),
/******/ 			"webpack/sharing/consume/test-scope/@scoped/package/@scoped/package": () => (loadVersionCheckFallback("test-scope", "@scoped/package", [0], () => (__webpack_require__.e("node_modules_scoped_package_index_js").then(() => (() => (__webpack_require__(/*! @scoped/package */ "./node_modules/@scoped/package/index.js"))))))),
/******/ 			"webpack/sharing/consume/test-scope/prefix/a/prefix/a": () => (loadVersionCheckFallback("test-scope", "prefix/a", [0], () => (__webpack_require__.e("node_modules_prefix_a_js").then(() => (() => (__webpack_require__(/*! prefix/a */ "./node_modules/prefix/a.js"))))))),
/******/ 			"webpack/sharing/consume/test-scope/prefix/deep/b/prefix/deep/b": () => (loadVersionCheckFallback("test-scope", "prefix/deep/b", [0], () => (__webpack_require__.e("node_modules_prefix_deep_b_js").then(() => (() => (__webpack_require__(/*! prefix/deep/b */ "./node_modules/prefix/deep/b.js"))))))),
/******/ 			"webpack/sharing/consume/test-scope/prefix/deep/c": () => (loadVersionCheck("test-scope", "prefix/deep/c", [0])),
/******/ 			"webpack/sharing/consume/test-scope/./relative1/./relative1": () => (loadFallback("test-scope", "./relative1", () => (__webpack_require__.e("relative1_js").then(() => (() => (__webpack_require__(/*! ./relative1 */ "./relative1.js"))))))),
/******/ 			"webpack/sharing/consume/test-scope/./relative2/./relative2": () => (loadFallback("test-scope", "./relative2", () => (__webpack_require__.e("relative2_js").then(() => (() => (__webpack_require__(/*! ./relative2 */ "./relative2.js"))))))),
/******/ 			"webpack/sharing/consume/other-scope/advanced/123": () => (loadStrictVersionCheck("other-scope", "advanced/123", [1,1,2,3])),
/******/ 			"webpack/sharing/consume/other-scope/advanced/error0": () => (loadStrictVersionCheck("other-scope", "advanced/error0", [1,1,2,3])),
/******/ 			"webpack/sharing/consume/other-scope/advanced/error1": () => (loadStrictVersionCheck("other-scope", "advanced/error1", [1,1,2,3])),
/******/ 			"webpack/sharing/consume/other-scope/advanced/error2": () => (loadStrictVersionCheck("other-scope", "advanced/error2", [1,1,2,3])),
/******/ 			"webpack/sharing/consume/other-scope/advanced/error3": () => (loadStrictVersionCheck("other-scope", "advanced/error3", [1,1,2,3])),
/******/ 			"webpack/sharing/consume/other-scope/advanced/error4": () => (loadStrictVersionCheck("other-scope", "advanced/error4", [1,1,2,3])),
/******/ 			"webpack/sharing/consume/default/strict0/strict0": () => (loadStrictVersionCheckFallback("default", "strict0", [1,1,0,0], () => (__webpack_require__.e("node_modules_strict0_js").then(() => (() => (__webpack_require__(/*! strict0 */ "./node_modules/strict0.js"))))))),
/******/ 			"webpack/sharing/consume/default/strict1/strict1": () => (loadStrictVersionCheckFallback("default", "strict1", [0,1,2,0], () => (__webpack_require__.e("node_modules_strict1_js").then(() => (() => (__webpack_require__(/*! strict1 */ "./node_modules/strict1.js"))))))),
/******/ 			"webpack/sharing/consume/default/strict2/strict2": () => (loadStrictVersionCheckFallback("default", "strict2", [4,1,1,0], () => (__webpack_require__.e("node_modules_strict2_js").then(() => (() => (__webpack_require__(/*! strict2 */ "./node_modules/strict2.js"))))))),
/******/ 			"webpack/sharing/consume/default/strict3/strict3": () => (loadStrictVersionCheckFallback("default", "strict3", [2,1,0,0], () => (__webpack_require__.e("node_modules_strict3_js").then(() => (() => (__webpack_require__(/*! strict3 */ "./node_modules/strict3.js"))))))),
/******/ 			"webpack/sharing/consume/default/strict4/strict4": () => (loadStrictVersionCheckFallback("default", "strict4", [1,2,2,3], () => (__webpack_require__.e("node_modules_strict4_js").then(() => (() => (__webpack_require__(/*! strict4 */ "./node_modules/strict4.js"))))))),
/******/ 			"webpack/sharing/consume/default/strict5": () => (loadStrictVersionCheck("default", "strict5", [1,"alpha"])),
/******/ 			"webpack/sharing/consume/default/singleton/singleton": () => (loadSingletonVersionCheckFallback("default", "singleton", [4,1,1,0], () => (__webpack_require__.e("node_modules_singleton_js").then(() => (() => (__webpack_require__(/*! singleton */ "./node_modules/singleton.js")))))))
/******/ 		};
/******/ 		// no consumes in initial chunks
/******/ 		var chunkMapping = {
/******/ 			"webpack_sharing_consume_test-scope_package_package": [
/******/ 				"webpack/sharing/consume/test-scope/package/package"
/******/ 			],
/******/ 			"webpack_sharing_consume_test-scope_scoped_package_scoped_package": [
/******/ 				"webpack/sharing/consume/test-scope/@scoped/package/@scoped/package"
/******/ 			],
/******/ 			"webpack_sharing_consume_test-scope_prefix_a_prefix_a": [
/******/ 				"webpack/sharing/consume/test-scope/prefix/a/prefix/a"
/******/ 			],
/******/ 			"webpack_sharing_consume_test-scope_prefix_deep_b_prefix_deep_b": [
/******/ 				"webpack/sharing/consume/test-scope/prefix/deep/b/prefix/deep/b"
/******/ 			],
/******/ 			"webpack_sharing_consume_test-scope_prefix_deep_c": [
/******/ 				"webpack/sharing/consume/test-scope/prefix/deep/c"
/******/ 			],
/******/ 			"webpack_sharing_consume_test-scope_relative1_relative1": [
/******/ 				"webpack/sharing/consume/test-scope/./relative1/./relative1"
/******/ 			],
/******/ 			"webpack_sharing_consume_test-scope_relative2_relative2": [
/******/ 				"webpack/sharing/consume/test-scope/./relative2/./relative2"
/******/ 			],
/******/ 			"webpack_sharing_consume_other-scope_advanced_123": [
/******/ 				"webpack/sharing/consume/other-scope/advanced/123"
/******/ 			],
/******/ 			"webpack_sharing_consume_other-scope_advanced_error0": [
/******/ 				"webpack/sharing/consume/other-scope/advanced/error0"
/******/ 			],
/******/ 			"webpack_sharing_consume_other-scope_advanced_error1": [
/******/ 				"webpack/sharing/consume/other-scope/advanced/error1"
/******/ 			],
/******/ 			"webpack_sharing_consume_other-scope_advanced_error2": [
/******/ 				"webpack/sharing/consume/other-scope/advanced/error2"
/******/ 			],
/******/ 			"webpack_sharing_consume_other-scope_advanced_error3": [
/******/ 				"webpack/sharing/consume/other-scope/advanced/error3"
/******/ 			],
/******/ 			"webpack_sharing_consume_other-scope_advanced_error4": [
/******/ 				"webpack/sharing/consume/other-scope/advanced/error4"
/******/ 			],
/******/ 			"webpack_sharing_consume_default_strict0_strict0": [
/******/ 				"webpack/sharing/consume/default/strict0/strict0"
/******/ 			],
/******/ 			"webpack_sharing_consume_default_strict1_strict1": [
/******/ 				"webpack/sharing/consume/default/strict1/strict1"
/******/ 			],
/******/ 			"webpack_sharing_consume_default_strict2_strict2": [
/******/ 				"webpack/sharing/consume/default/strict2/strict2"
/******/ 			],
/******/ 			"webpack_sharing_consume_default_strict3_strict3": [
/******/ 				"webpack/sharing/consume/default/strict3/strict3"
/******/ 			],
/******/ 			"webpack_sharing_consume_default_strict4_strict4": [
/******/ 				"webpack/sharing/consume/default/strict4/strict4"
/******/ 			],
/******/ 			"webpack_sharing_consume_default_strict5": [
/******/ 				"webpack/sharing/consume/default/strict5"
/******/ 			],
/******/ 			"webpack_sharing_consume_default_singleton_singleton": [
/******/ 				"webpack/sharing/consume/default/singleton/singleton"
/******/ 			]
/******/ 		};
/******/ 		__webpack_require__.f.consumes = (chunkId, promises) => {
/******/ 			if(__webpack_require__.o(chunkMapping, chunkId)) {
/******/ 				chunkMapping[chunkId].forEach((id) => {
/******/ 					if(__webpack_require__.o(installedModules, id)) return promises.push(installedModules[id]);
/******/ 					var onFactory = (factory) => {
/******/ 						installedModules[id] = 0;
/******/ 						__webpack_require__.m[id] = (module) => {
/******/ 							delete __webpack_require__.c[id];
/******/ 							module.exports = factory();
/******/ 						}
/******/ 					};
/******/ 					var onError = (error) => {
/******/ 						delete installedModules[id];
/******/ 						__webpack_require__.m[id] = (module) => {
/******/ 							delete __webpack_require__.c[id];
/******/ 							throw error;
/******/ 						}
/******/ 					};
/******/ 					try {
/******/ 						var promise = moduleToHandlerMapping[id]();
/******/ 						if(promise.then) {
/******/ 							promises.push(installedModules[id] = promise.then(onFactory)['catch'](onError));
/******/ 						} else onFactory(promise);
/******/ 					} catch(e) { onError(e); }
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/readFile chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "0" means "already loaded", Promise means loading
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++) {
/******/ 				if(installedChunks[chunkIds[i]]) {
/******/ 					installedChunks[chunkIds[i]][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 		
/******/ 		};
/******/ 		
/******/ 		// ReadFile + VM.run chunk loading for javascript
/******/ 		__webpack_require__.f.readFileVm = function(chunkId, promises) {
/******/ 		
/******/ 			var installedChunkData = installedChunks[chunkId];
/******/ 			if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 				// array of [resolve, reject, promise] means "currently loading"
/******/ 				if(installedChunkData) {
/******/ 					promises.push(installedChunkData[2]);
/******/ 				} else {
/******/ 					if(/^(node_modules_(p(refix_(a|deep_b)_js|ackage_js)|s(trict[01234]_js|(coped_package_index|ingleton)_js))|relative[12]_js|main)$/.test(chunkId)) {
/******/ 						// load the chunk and return promise to it
/******/ 						var promise = new Promise(function(resolve, reject) {
/******/ 							installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 							var filename = require('path').join(__dirname, "" + __webpack_require__.u(chunkId));
/******/ 							require('fs').readFile(filename, 'utf-8', function(err, content) {
/******/ 								if(err) return reject(err);
/******/ 								var chunk = {};
/******/ 								require('vm').runInThisContext('(function(exports, require, __dirname, __filename) {' + content + '\n})', filename)(chunk, require, require('path').dirname(filename), filename);
/******/ 								installChunk(chunk);
/******/ 							});
/******/ 						});
/******/ 						promises.push(installedChunkData[2] = promise);
/******/ 					} else installedChunks[chunkId] = 0;
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;