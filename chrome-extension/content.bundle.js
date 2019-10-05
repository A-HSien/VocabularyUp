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
/******/ 	return __webpack_require__(__webpack_require__.s = "./chrome-extension/content/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./chrome-extension/content/main.js":
/*!******************************************!*\
  !*** ./chrome-extension/content/main.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parseCambridgePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parseCambridgePage */ "./chrome-extension/content/parseCambridgePage.js");
/* harmony import */ var _syncStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./syncStorage */ "./chrome-extension/content/syncStorage.js");





(async function main() { 
    if (location.host.includes('dictionary.cambridge.org')) {
        const toAdd = Object(_parseCambridgePage__WEBPACK_IMPORTED_MODULE_0__["parseCambridgePage"])();
        if (toAdd) await _syncStorage__WEBPACK_IMPORTED_MODULE_1__["setAsync"](toAdd.word, toAdd);
        console.log(toAdd);
    } else if (document.getElementById('wordListSaved')) {
        const all = await _syncStorage__WEBPACK_IMPORTED_MODULE_1__["getAllAsync"]();
        const array = Object.keys(all).map(key => all[key]);
        sessionStorage.setItem('wordList', JSON.stringify(array));
        document.getElementById('wordListSaved').click();
    }
})();



/***/ }),

/***/ "./chrome-extension/content/parseCambridgePage.js":
/*!********************************************************!*\
  !*** ./chrome-extension/content/parseCambridgePage.js ***!
  \********************************************************/
/*! exports provided: parseCambridgePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseCambridgePage", function() { return parseCambridgePage; });

function parseCambridgePage() { 
    const ele = document.querySelector('.headword');
    if (!ele) return;
    const word = ele.innerText;
    const pron = document.querySelector('.us.dpron-i .pron').innerText;

    const defs = [...document.querySelectorAll('.def-block')]
        .map(block => {
            const examps = [...block.querySelectorAll('.examp')];
            return {
                def: block.querySelector('.ddef_h').innerText.replace('[ ', '[').replace(' ]', ']').replace('\n', ' '),
                trans: block.querySelector('.trans').innerText,
                examps: examps.map(examp => {
                    return {
                        examp: examp.querySelector('.eg').innerText,
                        trans: examp.querySelector('.trans').innerText,
                    };
                })
            };
        });
    return { word, pron, defs };
};

/***/ }),

/***/ "./chrome-extension/content/syncStorage.js":
/*!*************************************************!*\
  !*** ./chrome-extension/content/syncStorage.js ***!
  \*************************************************/
/*! exports provided: getAllAsync, getAsync, setAsync */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllAsync", function() { return getAllAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAsync", function() { return getAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAsync", function() { return setAsync; });
function getAllAsync() {
    return new Promise(
        (resolve, reject) => chrome.storage.sync.get(null, data => resolve(data))
    );
};
function getAsync(key) {
    return new Promise(
        (resolve, reject) => chrome.storage.sync.get(key, data => resolve(data[key]))
    );
};
function setAsync(key, data) {
    const toStore = {};
    toStore[key] = data;
    return new Promise(
        (resolve, reject) => chrome.storage.sync.set(toStore, () => resolve())
    );
};

/***/ })

/******/ });
//# sourceMappingURL=content.bundle.js.map