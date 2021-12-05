(() => {
var exports = {};
exports.id = 179;
exports.ids = [179];
exports.modules = {

/***/ 10:
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

it("should load the component from container", () => {
	return Promise.all(/*! import() */[__webpack_require__.e(704), __webpack_require__.e(690), __webpack_require__.e(771)]).then(__webpack_require__.bind(__webpack_require__, /*! ./App */ 771)).then(({ default: App }) => {
		const rendered = App();
		expect(rendered).toBe(
			"App rendered with [This is react 2.1.0] and [ComponentA rendered with [This is react 2.1.0]] and [ComponentB rendered with [This is react 2.1.0]]"
		);
		return Promise.all(/*! import() */[__webpack_require__.e(704), __webpack_require__.e(539)]).then(__webpack_require__.bind(__webpack_require__, /*! ./upgrade-react */ 539)).then(({ default: upgrade }) => {
			upgrade();
			const rendered = App();
			expect(rendered).toBe(
				"App rendered with [This is react 3.2.1] and [ComponentA rendered with [This is react 3.2.1]] and [ComponentB rendered with [This is react 3.2.1]]"
			);
		});
	});
});


/***/ }),

/***/ 745:
/*!***************************************************!*\
  !*** external "../0-container-full/container.js" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("../0-container-full/container.js");

/***/ }),

/***/ 11:
/*!*********************************!*\
  !*** external "./container.js" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("./container.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("./runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(10));

})();