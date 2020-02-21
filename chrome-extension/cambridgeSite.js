/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./chrome-extension-src/cambridgeSite/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./chrome-extension-src/cambridgeSite/main.ts":
/*!****************************************************!*\
  !*** ./chrome-extension-src/cambridgeSite/main.ts ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parseCambridgePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parseCambridgePage */ "./chrome-extension-src/cambridgeSite/parseCambridgePage.ts");
/* harmony import */ var _syncStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./syncStorage */ "./chrome-extension-src/cambridgeSite/syncStorage.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


(function main() {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var toAdd, all_1, array;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!location.host.includes('dictionary.cambridge.org')) return [3 /*break*/, 3];
                    toAdd = Object(_parseCambridgePage__WEBPACK_IMPORTED_MODULE_0__["parseCambridgePage"])();
                    if (!toAdd) return [3 /*break*/, 2];
                    return [4 /*yield*/, _syncStorage__WEBPACK_IMPORTED_MODULE_1__["setAsync"](toAdd.word, toAdd)];
                case 1:
                    _b.sent();
                    _b.label = 2;
                case 2:
                    console.log(toAdd);
                    return [3 /*break*/, 5];
                case 3:
                    if (!document.getElementById('wordListSaved')) return [3 /*break*/, 5];
                    return [4 /*yield*/, _syncStorage__WEBPACK_IMPORTED_MODULE_1__["getAllAsync"]()];
                case 4:
                    all_1 = _b.sent();
                    array = Object.keys(all_1).map(function (key) { return all_1[key]; });
                    sessionStorage.setItem('wordList', JSON.stringify(array));
                    (_a = document.getElementById('wordListSaved')) === null || _a === void 0 ? void 0 : _a.click();
                    _b.label = 5;
                case 5: return [2 /*return*/];
            }
        });
    });
})();


/***/ }),

/***/ "./chrome-extension-src/cambridgeSite/parseCambridgePage.ts":
/*!******************************************************************!*\
  !*** ./chrome-extension-src/cambridgeSite/parseCambridgePage.ts ***!
  \******************************************************************/
/*! exports provided: parseCambridgePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseCambridgePage", function() { return parseCambridgePage; });
function parseCambridgePage() {
    var _a;
    var ele = document.querySelector('.headword');
    if (!ele)
        return;
    var word = ele.innerText;
    var pron = (_a = document.querySelector('.us.dpron-i .pron')) === null || _a === void 0 ? void 0 : _a.innerText;
    var blocks = document.querySelectorAll('.def-block');
    var defs = Array.from(blocks)
        .map(function (block) {
        var _a, _b;
        var examps = Array.from(block.querySelectorAll('.examp'));
        return {
            def: (_a = block.querySelector('.ddef_h')) === null || _a === void 0 ? void 0 : _a.innerText.replace('[ ', '[').replace(' ]', ']').replace('\n', ' '),
            trans: (_b = block.querySelector('.trans')) === null || _b === void 0 ? void 0 : _b.innerText,
            examps: examps.map(function (examp) {
                var _a, _b;
                return {
                    examp: (_a = examp.querySelector('.eg')) === null || _a === void 0 ? void 0 : _a.innerText,
                    trans: (_b = examp.querySelector('.trans')) === null || _b === void 0 ? void 0 : _b.innerText,
                };
            })
        };
    });
    return { word: word, pron: pron, defs: defs };
}
;


/***/ }),

/***/ "./chrome-extension-src/cambridgeSite/syncStorage.ts":
/*!***********************************************************!*\
  !*** ./chrome-extension-src/cambridgeSite/syncStorage.ts ***!
  \***********************************************************/
/*! exports provided: getAllAsync, getAsync, setAsync */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllAsync", function() { return getAllAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAsync", function() { return getAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAsync", function() { return setAsync; });
function getAllAsync() {
    return new Promise(function (resolve, reject) { return chrome.storage.sync.get(null, function (data) { return resolve(data); }); });
}
;
function getAsync(key) {
    return new Promise(function (resolve, reject) { return chrome.storage.sync.get(key, function (data) { return resolve(data[key]); }); });
}
;
function setAsync(key, data) {
    var toStore = {};
    toStore[key] = data;
    return new Promise(function (resolve, reject) { return chrome.storage.sync.set(toStore, function () { return resolve(); }); });
}
;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2hyb21lLWV4dGVuc2lvbi1zcmMvY2FtYnJpZGdlU2l0ZS9tYWluLnRzIiwid2VicGFjazovLy8uL2Nocm9tZS1leHRlbnNpb24tc3JjL2NhbWJyaWRnZVNpdGUvcGFyc2VDYW1icmlkZ2VQYWdlLnRzIiwid2VicGFjazovLy8uL2Nocm9tZS1leHRlbnNpb24tc3JjL2NhbWJyaWRnZVNpdGUvc3luY1N0b3JhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pGMEQ7QUFDYjtBQUc3QyxDQUFDLFNBQWUsSUFBSTs7Ozs7Ozt5QkFDWixRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxFQUFsRCx3QkFB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QUFPLEVBQUUsTUFBTSxJQUFLLGFBQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsY0FBSSxJQUFJLGNBQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBbEIsQ0FBa0IsQ0FBQyxFQUF4RCxDQUF3RCxDQUNoRixDQUFDO0FBQ04sQ0FBQztBQUFBLENBQUM7QUFDSyxTQUFTLFFBQVEsQ0FBQyxHQUFXLEVBQUUsSUFBUztJQUMzQyxJQUFNLE9BQU8sR0FBRyxFQUFTLENBQUM7SUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztJQUNwQixPQUFPLElBQUksT0FBTyxDQUNkLFVBQUMsT0FBTyxFQUFFLE1BQU0sSUFBSyxhQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLGNBQU0sY0FBTyxFQUFFLEVBQVQsQ0FBUyxDQUFDLEVBQWpELENBQWlELENBQ3pFLENBQUM7QUFDTixDQUFDO0FBQUEsQ0FBQyIsImZpbGUiOiJjYW1icmlkZ2VTaXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9jaHJvbWUtZXh0ZW5zaW9uLXNyYy9jYW1icmlkZ2VTaXRlL21haW4udHNcIik7XG4iLCJcclxuaW1wb3J0IHsgcGFyc2VDYW1icmlkZ2VQYWdlIH0gZnJvbSAnLi9wYXJzZUNhbWJyaWRnZVBhZ2UnO1xyXG5pbXBvcnQgKiBhcyBzeW5jU3RvcmFnZSBmcm9tICcuL3N5bmNTdG9yYWdlJztcclxuXHJcblxyXG4oYXN5bmMgZnVuY3Rpb24gbWFpbigpIHsgXHJcbiAgICBpZiAobG9jYXRpb24uaG9zdC5pbmNsdWRlcygnZGljdGlvbmFyeS5jYW1icmlkZ2Uub3JnJykpIHtcclxuICAgICAgICBjb25zdCB0b0FkZCA9IHBhcnNlQ2FtYnJpZGdlUGFnZSgpO1xyXG4gICAgICAgIGlmICh0b0FkZCkgYXdhaXQgc3luY1N0b3JhZ2Uuc2V0QXN5bmModG9BZGQud29yZCwgdG9BZGQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRvQWRkKTtcclxuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dvcmRMaXN0U2F2ZWQnKSkge1xyXG4gICAgICAgIGNvbnN0IGFsbCA9IGF3YWl0IHN5bmNTdG9yYWdlLmdldEFsbEFzeW5jKCk7XHJcbiAgICAgICAgY29uc3QgYXJyYXkgPSBPYmplY3Qua2V5cyhhbGwpLm1hcChrZXkgPT4gYWxsW2tleV0pO1xyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3dvcmRMaXN0JywgSlNPTi5zdHJpbmdpZnkoYXJyYXkpKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd29yZExpc3RTYXZlZCcpPy5jbGljaygpO1xyXG4gICAgfVxyXG59KSgpO1xyXG5cclxuIiwiXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUNhbWJyaWRnZVBhZ2UoKSB7XHJcbiAgICBjb25zdCBlbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignLmhlYWR3b3JkJyk7XHJcbiAgICBpZiAoIWVsZSkgcmV0dXJuO1xyXG4gICAgY29uc3Qgd29yZCA9IGVsZS5pbm5lclRleHQ7XHJcbiAgICBjb25zdCBwcm9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy51cy5kcHJvbi1pIC5wcm9uJyk/LmlubmVyVGV4dDtcclxuICAgIGNvbnN0IGJsb2NrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWYtYmxvY2snKTtcclxuICAgIGNvbnN0IGRlZnMgPSBBcnJheS5mcm9tKGJsb2NrcylcclxuICAgICAgICAubWFwKGJsb2NrID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZXhhbXBzID0gQXJyYXkuZnJvbShibG9jay5xdWVyeVNlbGVjdG9yQWxsKCcuZXhhbXAnKSk7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBkZWY6IGJsb2NrLnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcuZGRlZl9oJyk/LmlubmVyVGV4dC5yZXBsYWNlKCdbICcsICdbJykucmVwbGFjZSgnIF0nLCAnXScpLnJlcGxhY2UoJ1xcbicsICcgJyksXHJcbiAgICAgICAgICAgICAgICB0cmFuczogYmxvY2sucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy50cmFucycpPy5pbm5lclRleHQsXHJcbiAgICAgICAgICAgICAgICBleGFtcHM6IGV4YW1wcy5tYXAoZXhhbXAgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4YW1wOiBleGFtcC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignLmVnJyk/LmlubmVyVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnM6IGV4YW1wLnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcudHJhbnMnKT8uaW5uZXJUZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgcmV0dXJuIHsgd29yZCwgcHJvbiwgZGVmcyB9O1xyXG59OyIsInR5cGUgU3RvcmFnZURhdGFUeXBlID0geyBba2V5OiBzdHJpbmddOiBhbnkgfTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxBc3luYygpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxTdG9yYWdlRGF0YVR5cGU+KFxyXG4gICAgICAgIChyZXNvbHZlLCByZWplY3QpID0+IGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KG51bGwsIGRhdGEgPT4gcmVzb2x2ZShkYXRhKSlcclxuICAgICk7XHJcbn07XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBc3luYyhrZXk6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKFxyXG4gICAgICAgIChyZXNvbHZlLCByZWplY3QpID0+IGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KGtleSwgZGF0YSA9PiByZXNvbHZlKGRhdGFba2V5XSkpXHJcbiAgICApO1xyXG59O1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0QXN5bmMoa2V5OiBzdHJpbmcsIGRhdGE6IGFueSkge1xyXG4gICAgY29uc3QgdG9TdG9yZSA9IHt9IGFzIGFueTtcclxuICAgIHRvU3RvcmVba2V5XSA9IGRhdGE7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoXHJcbiAgICAgICAgKHJlc29sdmUsIHJlamVjdCkgPT4gY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQodG9TdG9yZSwgKCkgPT4gcmVzb2x2ZSgpKVxyXG4gICAgKTtcclxufTsiXSwic291cmNlUm9vdCI6IiJ9