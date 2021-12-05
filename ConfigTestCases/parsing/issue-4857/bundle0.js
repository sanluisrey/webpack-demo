/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!******************!*\
  !*** ./index.js ***!
  \******************/
it("should transpile unreachable branches", () => {
	let count = 0;

	// BlockStatement
	if(true) {
		count++;
	} else {}
	if(false) {} else {
		count++;
	}

	// ExpressionStatement
	if(true) count++;
	else {}
	if(false) {}
	else count++;

	// ConditionalExpression
	 true ? count++ : 0;
	 false ? 0 : count++;

	expect(count).toBe(6);
});

it("should not remove hoisted variable declarations", () => {
	if(false) { var o, n, m, l, k, j, i, h, g, f, a, b, e, d, c; }
	expect(() => {
		a;
		b;
		c;
		d;
		e;
		f;
		g;
		h;
		i;
		j;
		k;
		l;
		m;
		n;
		o;
	}).not.toThrowError();
	expect(() => {
		withVar;
	}).toThrowError();
});

it("should not remove hoisted function declarations in loose mode", () => {
	if(false) { var funcDecl; }
	expect(() => {
		funcDecl;
	}).not.toThrowError();
});

it("should remove hoisted function declarations in strict mode", () => {
	"use strict";
	if(false) {}
	expect(() => {
		funcDecl;
	}).toThrowError();
});

/******/ })()
;