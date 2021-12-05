/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!******************************!*\
  !*** ./index.js + 7 modules ***!
  \******************************/

;// CONCATENATED MODULE: ./node_modules/pmodule/tracker.js
function track(file) {
	log.push(file);
	log.sort();
}

var log = [];

function tracker_reset() {
	log.length = 0;
}

;// CONCATENATED MODULE: ./node_modules/nmodule/tracker.js
function tracker_track(file) {
	tracker_log.push(file);
	tracker_log.sort();
}

var tracker_log = [];

function nmodule_tracker_reset() {
	tracker_log.length = 0;
}

;// CONCATENATED MODULE: ./node_modules/pmodule/a.js
var a = "a";
var b = "b";
var c = "c";




track("a.js");

;// CONCATENATED MODULE: ./node_modules/pmodule/c.js
var z = "z";




track("c.js");

;// CONCATENATED MODULE: ./node_modules/pmodule/b.js
var x = "x";
var y = "y";





track("b.js");

;// CONCATENATED MODULE: ./node_modules/pmodule/index.js




track("index.js");

/* harmony default export */ const pmodule = ("def");

;// CONCATENATED MODULE: ./node_modules/nmodule/index.js




tracker_track("index.js");

/* harmony default export */ const nmodule = ("def");

;// CONCATENATED MODULE: ./index.js





it("should be able to override side effects", function() {
	expect(pmodule).toBe("def");
	expect(nmodule).toBe("def");
	expect(log).toEqual(["a.js", "b.js", "c.js", "index.js"]);
	expect(tracker_log).toEqual(["index.js"]);
});

/******/ })()
;