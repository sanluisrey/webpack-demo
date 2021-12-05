/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!******************************!*\
  !*** ./index.js + 6 modules ***!
  \******************************/

;// CONCATENATED MODULE: ./node_modules/boolean-value-module/tracker.js
function track(file) {
	log.push(file);
	log.sort();
}

var log = [];

function tracker_reset() {
	log.length = 0;
}

;// CONCATENATED MODULE: ./node_modules/boolean-value-module/index.js




track("index.js");

/* harmony default export */ const boolean_value_module = ("def");

;// CONCATENATED MODULE: ./node_modules/glob-value-module/tracker.js
function tracker_track(file) {
	tracker_log.push(file);
	tracker_log.sort();
}

var tracker_log = [];

function glob_value_module_tracker_reset() {
	tracker_log.length = 0;
}

;// CONCATENATED MODULE: ./node_modules/glob-value-module/a.js
var z = "z";




tracker_track("a.js");

;// CONCATENATED MODULE: ./node_modules/glob-value-module/src/a.js
var a = "a";




tracker_track("./src/a.js");

;// CONCATENATED MODULE: ./node_modules/glob-value-module/index.js





tracker_track("index.js");

/* harmony default export */ const glob_value_module = ("def");

;// CONCATENATED MODULE: ./index.js





it("should handle a boolean", function() {
	expect(boolean_value_module).toBe("def");
	expect(log).toEqual(["index.js"]);
});

it("should handle globs", function() {
	expect(glob_value_module).toBe("def");
	expect(tracker_log).toEqual([
		"./src/a.js",
		"a.js",
		"index.js",
	]);
});

/******/ })()
;