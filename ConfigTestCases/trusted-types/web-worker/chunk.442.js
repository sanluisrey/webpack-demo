/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*******************!*\
  !*** ./worker.js ***!
  \*******************/
//importScripts("./imported.js");
onmessage = async event => {
	postMessage(`data: ${event.data}, thanks`);
};

/******/ })()
;