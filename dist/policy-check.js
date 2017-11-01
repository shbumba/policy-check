(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("PolicyCheck", [], factory);
	else if(typeof exports === 'object')
		exports["PolicyCheck"] = factory();
	else
		root["PolicyCheck"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function PolicyCheck(btn, options) {
    var self = this;

    self.__data = {
        btn: undefined,
        form: undefined,
        submit: undefined,
        checked: false
    };
    self.__option = Object.assign({}, {
        text: 'First, you agree with the rules.'
    }, options);

    var methods = {
        init: function init() {
            self.__data.btn = btn;

            self.__data.form = methods.parents(self.__data.btn, 'form')[0];
            self.__data.submit = self.__data.form.querySelector('[type="submit"]');

            methods.setEvents();
            methods.setChecked();

            return {
                'self': self,
                'changeSubmitState': methods.changeSubmitState,
                'setChecked': methods.setChecked
            };
        },
        setEvents: function setEvents() {
            self.__data.btn.addEventListener('change', events.OnChangeInput);

            self.__data.form.addEventListener('submit', events.OnSubmitForm);

            self.__data.submit.addEventListener('click', events.OnSubmitForm);
        },
        changeSubmitState: function changeSubmitState() {
            self.__data.submit.disabled = !self.__data.checked;
        },
        setChecked: function setChecked() {
            self.__data.checked = self.__data.btn.checked;

            methods.changeSubmitState();
        },
        parents: function parents(elem, selector) {
            var elements = [];
            var isHaveSelector = selector !== undefined;

            while ((elem = elem.parentElement) !== null) {
                if (elem.nodeType !== Node.ELEMENT_NODE) {
                    continue;
                } else if (!isHaveSelector || elem.matches(selector)) {
                    elements.push(elem);
                }
            }

            return elements;
        }
    };

    var events = {
        OnChangeInput: function OnChangeInput(event) {
            methods.setChecked();
        },
        OnSubmitForm: function OnSubmitForm(event) {
            methods.setChecked();

            if (!self.__data.checked) {
                event.preventDefault();
                alert(self.__option.text);
            }
        }
    };

    return methods.init();
}

exports.default = PolicyCheck;

/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=policy-check.map