/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*************************************!*\
  !*** ./parsing/issue-4709/index.js ***!
  \*************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/*! Statement (ExpressionStatement) with side effects in source code at 15:0-17:3 */
function getDirectiveRequire(directive) {
	var require = directive.require || (directive.controller && directive.name);

	if (!isArray(require) && isObject(require)) {
		forEach(require, function(value, key) {
			var match = value.match(REQUIRE_PREFIX_REGEXP);
			var name = value.substring(match[0].length);
			if (!name) require[key] = match[0] + key;
		});
	}

	return require;
}

it("should parse these snippets successfully", function() {

});

/******/ })()
;