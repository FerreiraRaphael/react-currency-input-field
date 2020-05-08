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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/example.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/react-hot-loader/dist/react-hot-loader.production.min.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-hot-loader/dist/react-hot-loader.production.min.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var React=_interopDefault(__webpack_require__(/*! react */ "react"));function AppContainer(e){return AppContainer.warnAboutHMRDisabled&&(AppContainer.warnAboutHMRDisabled=!0,console.error("React-Hot-Loader: misconfiguration detected, using production version in non-production environment."),console.error("React-Hot-Loader: Hot Module Replacement is not enabled.")),React.Children.only(e.children)}AppContainer.warnAboutHMRDisabled=!1;var hot=function e(){return e.shouldWrapWithAppContainer?function(e){return function(n){return React.createElement(AppContainer,null,React.createElement(e,n))}}:function(e){return e}};hot.shouldWrapWithAppContainer=!1;var areComponentsEqual=function(e,n){return e===n},setConfig=function(){},cold=function(e){return e},configureComponent=function(){};exports.AppContainer=AppContainer,exports.hot=hot,exports.areComponentsEqual=areComponentsEqual,exports.setConfig=setConfig,exports.cold=cold,exports.configureComponent=configureComponent;


/***/ }),

/***/ "./node_modules/react-hot-loader/index.js":
/*!************************************************!*\
  !*** ./node_modules/react-hot-loader/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else if (false) {} else if (typeof window === 'undefined') {
  // this is just server environment
  module.exports = __webpack_require__(/*! ./dist/react-hot-loader.production.min.js */ "./node_modules/react-hot-loader/dist/react-hot-loader.production.min.js");
} else if (true) {
  module.exports = __webpack_require__(/*! ./dist/react-hot-loader.production.min.js */ "./node_modules/react-hot-loader/dist/react-hot-loader.production.min.js");
  module.exports.AppContainer.warnAboutHMRDisabled = true;
  module.exports.hot.shouldWrapWithAppContainer = true;
} else { var jsFeaturesPresent, evalError, evalAllowed; }


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/components/CurrencyInput.tsx":
/*!******************************************!*\
  !*** ./src/components/CurrencyInput.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(/*! react */ "react"));
var utilities_1 = __webpack_require__(/*! ./utilities */ "./src/components/utilities.ts");
exports.CurrencyInput = function (_a) {
    var _b = _a.allowDecimals, allowDecimals = _b === void 0 ? true : _b, id = _a.id, name = _a.name, className = _a.className, _c = _a.decimalsLimit, decimalsLimit = _c === void 0 ? 2 : _c, defaultValue = _a.defaultValue, _d = _a.disabled, disabled = _d === void 0 ? false : _d, onChange = _a.onChange, placeholder = _a.placeholder, prefix = _a.prefix, maxLength = _a.maxLength, props = __rest(_a, ["allowDecimals", "id", "name", "className", "decimalsLimit", "defaultValue", "disabled", "onChange", "placeholder", "prefix", "maxLength"]);
    var _defaultValue = defaultValue ? utilities_1.formatValue(String(defaultValue), prefix) : '';
    var _e = react_1.useState(_defaultValue), stateValue = _e[0], setStateValue = _e[1];
    var _f = react_1.useState(0), cursor = _f[0], setCursor = _f[1];
    var inputRef = react_1.useRef(null);
    var onFocus = function () { return (stateValue ? stateValue.length : 0); };
    var processChange = function (event) {
        var _a = event.target, selectionStart = _a.selectionStart, value = _a.value;
        var valueOnly = utilities_1.cleanValue(value, allowDecimals, decimalsLimit, prefix);
        if (!valueOnly) {
            onChange && onChange(null, name);
            return setStateValue('');
        }
        if (utilities_1.checkIsValidNumber(valueOnly)) {
            var formattedValue = utilities_1.formatValue(valueOnly, prefix);
            if (selectionStart) {
                var cursor_1 = selectionStart + (formattedValue.length - value.length) || 1;
                setCursor(cursor_1);
            }
            setStateValue(formattedValue);
        }
        onChange && onChange(Number(valueOnly), name);
    };
    react_1.useEffect(function () {
        if (inputRef && inputRef.current) {
            inputRef.current.setSelectionRange(cursor, cursor);
        }
    }, [cursor, inputRef, stateValue]);
    return (react_1.default.createElement("input", __assign({ type: "text", inputMode: "decimal", id: id, name: name, className: className, onChange: processChange, onFocus: onFocus, placeholder: placeholder, disabled: disabled, value: stateValue, ref: inputRef, maxLength: maxLength }, props)));
};
exports.default = exports.CurrencyInput;


/***/ }),

/***/ "./src/components/parseAbbrValue.ts":
/*!******************************************!*\
  !*** ./src/components/parseAbbrValue.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Abbreviate number eg. 1000 = 1k
 *
 * Source: https://stackoverflow.com/a/9345181
 */
exports.abbrValue = function (value, _decimalPlaces) {
    if (_decimalPlaces === void 0) { _decimalPlaces = 10; }
    if (value > 999) {
        var valueLength = ('' + value).length;
        var p = Math.pow;
        var d = p(10, _decimalPlaces);
        valueLength -= valueLength % 3;
        return Math.round((value * d) / p(10, valueLength)) / d + ' kMGTPE'[valueLength / 3];
    }
    return String(value);
};
var abbrMap = { k: 1000, m: 1000000, b: 1000000000 };
/**
 * Parse a value with abbreviation e.g 1k = 1000
 */
exports.parseAbbrValue = function (value) {
    var match = value.match(/(\d+(.\d+)?)([kmb])$/i);
    if (match) {
        var digits = match[1], abbr = match[3];
        var multiplier = abbr ? abbrMap[abbr.toLowerCase()] : null;
        if (digits && multiplier) {
            return Number(digits) * multiplier;
        }
    }
    return undefined;
};


/***/ }),

/***/ "./src/components/utilities.ts":
/*!*************************************!*\
  !*** ./src/components/utilities.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var parseAbbrValue_1 = __webpack_require__(/*! ./parseAbbrValue */ "./src/components/parseAbbrValue.ts");
exports.addCommas = function (value) { return value.replace(/\B(?=(\d{3})+(?!\d))/g, ','); };
exports.removeCommas = function (value) { return value.replace(/,/g, ''); };
exports.checkIsValidNumber = function (input) {
    if (Number(input) < 0 || isNaN(Number(input))) {
        return false;
    }
    return true;
};
/**
 * Remove prefix, commas and extra decimals from value
 */
exports.cleanValue = function (value, allowDecimals, decimalsLimit, prefix) {
    var withoutPrefix = prefix ? value.replace(prefix, '') : value;
    var withoutCommas = exports.removeCommas(withoutPrefix);
    var parsed = parseAbbrValue_1.parseAbbrValue(withoutCommas) || withoutCommas;
    if (String(parsed).includes('.')) {
        var _a = withoutCommas.split('.'), int = _a[0], decimals = _a[1];
        var includeDecimals = allowDecimals
            ? "." + (decimalsLimit ? decimals.slice(0, decimalsLimit) : decimals)
            : '';
        return "" + int + includeDecimals;
    }
    return String(parsed);
};
/**
 * Format value with commas and prefix
 */
exports.formatValue = function (value, prefix) {
    var _a = value.split('.'), int = _a[0], decimals = _a[1];
    var includePrefix = prefix ? prefix : '';
    var includeDecimals = value.includes('.') ? "." + decimals : '';
    return "" + includePrefix + exports.addCommas(int) + includeDecimals;
};


/***/ }),

/***/ "./src/example.tsx":
/*!*************************!*\
  !*** ./src/example.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ "react-dom"));
var Example1_1 = __importDefault(__webpack_require__(/*! ./examples/Example1 */ "./src/examples/Example1.tsx"));
var Example2_1 = __importDefault(__webpack_require__(/*! ./examples/Example2 */ "./src/examples/Example2.tsx"));
react_dom_1.default.render(react_1.default.createElement(Example1_1.default, null), document.getElementById('example-1'));
react_dom_1.default.render(react_1.default.createElement(Example2_1.default, null), document.getElementById('example-2'));


/***/ }),

/***/ "./src/examples/Example1.tsx":
/*!***********************************!*\
  !*** ./src/examples/Example1.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(/*! react */ "react"));
var CurrencyInput_1 = __importDefault(__webpack_require__(/*! ../components/CurrencyInput */ "./src/components/CurrencyInput.tsx"));
exports.Example1 = function () {
    var limit = 1000;
    var prefix = '£';
    var _a = react_1.useState(''), errorMessage = _a[0], setErrorMessage = _a[1];
    var _b = react_1.useState(''), className = _b[0], setClassName = _b[1];
    /**
     * Handle validation
     */
    var validateValue = function (value) {
        if (value === null) {
            setClassName('');
        }
        else if (Number.isNaN(value)) {
            setErrorMessage('Please enter a valid number');
            setClassName('is-invalid');
        }
        else if (value > limit) {
            setErrorMessage("Max: " + prefix + limit);
            setClassName('is-invalid');
        }
        else {
            setClassName('is-valid');
        }
    };
    return (react_1.default.createElement("form", { className: "needs-validation" },
        react_1.default.createElement("div", { className: "form-row" },
            react_1.default.createElement("div", { className: "col-sm-12" },
                react_1.default.createElement("label", { htmlFor: "validationCustom01" }, "Please enter a value (max \u00A31,000)"),
                react_1.default.createElement(CurrencyInput_1.default, { id: "validationCustom01", name: "input-1", defaultValue: 999.99, className: "form-control " + className, onChange: validateValue, prefix: prefix }),
                react_1.default.createElement("div", { className: "invalid-feedback" }, errorMessage)))));
};
exports.default = exports.Example1;


/***/ }),

/***/ "./src/examples/Example2.tsx":
/*!***********************************!*\
  !*** ./src/examples/Example2.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(/*! react */ "react"));
var react_hot_loader_1 = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js");
var CurrencyInput_1 = __importDefault(__webpack_require__(/*! ../components/CurrencyInput */ "./src/components/CurrencyInput.tsx"));
exports.Example2 = function () {
    var _a = react_1.useState(''), errorMessage = _a[0], setErrorMessage = _a[1];
    var _b = react_1.useState(''), className = _b[0], setClassName = _b[1];
    var validateValue = function (value) {
        if (value === null) {
            setClassName('');
        }
        else if (Number.isNaN(value)) {
            setErrorMessage('Please enter a valid number');
            setClassName('is-invalid');
        }
        else {
            setClassName('is-valid');
        }
    };
    return (react_1.default.createElement("form", { className: "needs-validation" },
        react_1.default.createElement("div", { className: "form-row" },
            react_1.default.createElement("div", { className: "col-sm-12" },
                react_1.default.createElement("label", { htmlFor: "validationCustom01" }, "Please input a value:"),
                react_1.default.createElement(CurrencyInput_1.default, { id: "validationCustom01", placeholder: "$1,234,567", allowDecimals: false, className: "form-control " + className, onChange: validateValue, prefix: '$' }),
                react_1.default.createElement("div", { className: "invalid-feedback" }, errorMessage)))));
};
exports.default = react_hot_loader_1.hot(module)(exports.Example2);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

/******/ });
//# sourceMappingURL=index.js.map