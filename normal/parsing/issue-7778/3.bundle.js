exports.id = 3;
exports.ids = [3];
exports.modules = {

/***/ 9:
/*!*************************************************!*\
  !*** ./parsing/issue-7778/index.js?queryString ***!
  \*************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__, __webpack_require__.e, __webpack_require__.* */
/*! Statement (ExpressionStatement) with side effects in source code at 1:0-16:3 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

it("should detect query strings in dynamic import as a static value 1 ", function() {
	return Promise.all([
		__webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(__webpack_require__, /*! ./a */ 6)).then(({ default: a }) => {
			expect(a()).toBe("a");
		}),
		__webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(__webpack_require__, /*! ./abc */ 0)).then(({ default: a }) => {
			expect(a()).toBe("abc");
		}),
		__webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(__webpack_require__, /*! ./a?queryString */ 7)).then(({ default: a }) => {
			expect(a()).toBe("a?queryString");
		}),
		__webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(__webpack_require__, /*! ./abc?query?String */ 8)).then(({ default: a }) => {
			expect(a()).toBe("abc?query?String");
		}),
	]);
});

it("should detect query strings in dynamic import as a static value 2", function() {
	var testFileName = "a";

	return Promise.all([
		__webpack_require__(2)(`./${testFileName}`).then(({ default: a }) => {
			expect(a()).toBe("a");
		}),
		__webpack_require__(3)(`./${testFileName}bc`).then(({ default: a }) => {
			expect(a()).toBe("abc");
		}),
		__webpack_require__(4)(`./${testFileName}`).then(({ default: a }) => {
			expect(a()).toBe("a?queryString");
		}),
		__webpack_require__(5)(`./${testFileName}bc`).then(({ default: a }) => {
			expect(a()).toBe("abc?query?String");
		})
	]);
});

it("should detect query strings in dynamic import as a static value 3", function() {
	var testFileName = "a";

	return Promise.all([
		__webpack_require__(2)("./" + testFileName).then(({ default: a }) => {
			expect(a()).toBe("a");
		}),
		__webpack_require__(2)("./" + testFileName + "").then(({ default: a }) => {
			expect(a()).toBe("a");
		}),
		__webpack_require__(3)("./" + testFileName + "bc").then(({ default: a }) => {
			expect(a()).toBe("abc");
		}),
		__webpack_require__(4)("./" + testFileName + "").then(({ default: a }) => {
			expect(a()).toBe("a?queryString");
		}),
		__webpack_require__(5)("./" + testFileName + "bc").then(({ default: a }) => {
			expect(a()).toBe("abc?query?String");
		})
	]);
});


/***/ })

};
;