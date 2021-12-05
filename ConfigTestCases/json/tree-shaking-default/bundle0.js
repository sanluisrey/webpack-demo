/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 635:
/*!******************************!*\
  !*** ./index.js + 2 modules ***!
  \******************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


;// CONCATENATED MODULE: ./data.json
const data_namespaceObject = JSON.parse('{"Hk":{"Jy":"value","$3":"value2","IX":[1,2,3],"W8":[1,2,3],"pz":[0,"ok"],"g1":{"10":"ok"},"Ck":["ok"],"D3":[0,"ok",0],"Us":{"10":"ok","length":11},"_M":{"0":"ok","length":11},"Ry":{"test":"TESTVALUE"},"lP":{},"nh":{},"Rx":42},"DF":[0,[0,{"k":{"k":"ok"}}]]}');
;// CONCATENATED MODULE: ../../../../package.json
const package_namespaceObject = JSON.parse('{"u2":"webpack","cj":{"H":"https://github.com/webpack/webpack.git"}}');
;// CONCATENATED MODULE: ./index.js



it("should have to correct values", () => {
	expect(data_namespaceObject.Hk.Jy).toBe("value");
});

it("should be able to write properties", () => {
	// known key
	data_namespaceObject.Hk.$3 = "new value";
	expect(data_namespaceObject.Hk.$3).toBe("new value");
	// unknown key
	data_namespaceObject.Hk.key3 = "value3";
	expect(data_namespaceObject.Hk.key3).toBe("value3");
	// array methods and prototype properties
	data_namespaceObject.Hk.IX.push(4);
	expect(data_namespaceObject.Hk.IX.length).toEqual(4);
	// direct and nested access
	const a = data_namespaceObject.Hk.W8;
	data_namespaceObject.Hk.W8[1] = 42;
	expect(a[1]).toEqual(42);
	expect(a.length).toEqual(3);
	// only nested access
	expect(data_namespaceObject.Hk.pz[1]).toBe("ok");
	expect(data_namespaceObject.Hk.g1[10]).toBe("ok");
	expect(data_namespaceObject.Hk.Ck[0]).toBe("ok");
	// nested access and length
	expect(data_namespaceObject.Hk.D3[1]).toBe("ok");
	expect(data_namespaceObject.Hk.D3.length).toBe(3);
	expect(data_namespaceObject.Hk.Us[10]).toBe("ok");
	expect(data_namespaceObject.Hk.Us.length).toBe(11);
	expect(data_namespaceObject.Hk._M[0]).toBe("ok");
	expect(data_namespaceObject.Hk._M.length).toBe(11);
	// object methods
	expect(data_namespaceObject.Hk.Ry.hasOwnProperty("test")).toBe(true);
	// unknown object property
	data_namespaceObject.Hk.lP.unknownProperty = 42;
	expect(data_namespaceObject.Hk.lP.unknownProperty).toBe(42);
	data_namespaceObject.Hk.nh.unknownProperty = { deep: "deep" };
	expect(data_namespaceObject.Hk.nh.unknownProperty.deep).toBe("deep");
	// number methods
	expect(data_namespaceObject.Hk.Rx.toFixed(1)).toBe("42.0");
	// nested in array
	expect(data_namespaceObject.DF[1][1].k.k).toBe("ok");
});

it("should not have unused keys in bundle", () => {
	const fs = __webpack_require__(/*! fs */ 147);
	const content = fs.readFileSync(__filename, "utf-8");
	expect(content).toMatch(/\\?"TESTVALUE\\?"/);
	expect(content).not.toMatch(/\\?"UNUSEDKEY\\?"/);
	expect(content).not.toMatch(/\\?"UNUSEDVALUE\\?"/);
	expect(content).not.toMatch(/\\?"nested\\?"/);
	expect(content).toMatch(/\.unknownProperty\s*=/);
	expect(content).toMatch(/\.unknownProperty\.deep\)/);
	expect(content).not.toMatch(/\\?"dependencies\\?"/);
	expect(content).not.toMatch(/\\?"scripts\\?"/);
});

it("should tree-shake package.json too", () => {
	expect(package_namespaceObject.u2).toBe("webpack");
	expect(package_namespaceObject.cj.H).toBe(
		"https://github.com/webpack/webpack.git"
	);
});


/***/ }),

/***/ 147:
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

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
/******/ 	// This entry module doesn't tell about it's top-level declarations so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(635);
/******/ 	
/******/ })()
;