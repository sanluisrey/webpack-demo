/******/ (() => { // webpackBootstrap
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/system */
/******/ 	(() => {
/******/ 		__webpack_require__.System = {
/******/ 			import: function () {
/******/ 				throw new Error('System.import cannot be used indirectly');
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!******************!*\
  !*** ./index.js ***!
  \******************/
it("should polyfill System", function() {
	if (false) {}
	expect(("object")).toBe("object");
	expect((typeof (void 0))).toBe("undefined");
	expect((typeof (void 0))).toBe("undefined");
	expect((typeof (void 0))).toBe("undefined");
	expect((typeof __webpack_require__.System.anyNewItem)).toBe("undefined");
	var x = __webpack_require__.System.anyNewItem;
	expect((typeof x)).toBe("undefined");
})

/******/ })()
;