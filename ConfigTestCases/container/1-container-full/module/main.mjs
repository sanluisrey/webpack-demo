import * as __WEBPACK_EXTERNAL_MODULE__0_container_full_module_container_mjs_bb3f2fce__ from "../../0-container-full/module/container.mjs";
import * as __WEBPACK_EXTERNAL_MODULE__container_mjs_6f4cf51f__ from "./container.mjs";
export const id = 179;
export const ids = [179];
export const modules = {

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

/***/ 599:
/*!**************************************************************!*\
  !*** external "../../0-container-full/module/container.mjs" ***!
  \**************************************************************/
/***/ ((module) => {

var x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var y = x => () => x
module.exports = __WEBPACK_EXTERNAL_MODULE__0_container_full_module_container_mjs_bb3f2fce__;

/***/ }),

/***/ 796:
/*!**********************************!*\
  !*** external "./container.mjs" ***!
  \**********************************/
/***/ ((module) => {

var x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var y = x => () => x
module.exports = __WEBPACK_EXTERNAL_MODULE__container_mjs_6f4cf51f__;

/***/ })

};
;

// load runtime
import __webpack_require__ from "./runtime.mjs";
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
import * as __webpack_chunk_0__ from "./main.mjs";
__webpack_require__.C(__webpack_chunk_0__);
var __webpack_exports__ = __webpack_exec__(10);
