/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!******************!*\
  !*** ./index.js ***!
  \******************/
it("should answer typeof System correctly", () => {
	if(false) {} else {
		expect((typeof System)).toBe("undefined");
	}
});

it("should answer typeof System.import correctly", () => {
	if(false) {} else {
		expect(() => {
			typeof System.import;
		}).toThrowError();
	}
});

it("should be able to use System.import()", done => {
	try {
		System.import("./module").then(mod => {
			if(false) {} else {
				done(new Error("System.import should not be parsed"));
			}
		});
	} catch(e) {
		if(false) {} else {
			done();
		}
	}
});

/******/ })()
;