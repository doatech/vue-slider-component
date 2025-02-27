(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-slider-component"] = factory(require("vue"));
	else
		root["vue-slider-component"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "2638":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _extends(){return _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}var normalMerge=["attrs","props","domProps"],toArrayMerge=["class","style","directives"],functionalMerge=["on","nativeOn"],mergeJsxProps=function(a){return a.reduce(function(c,a){for(var b in a)if(!c[b])c[b]=a[b];else if(-1!==normalMerge.indexOf(b))c[b]=_extends({},c[b],a[b]);else if(-1!==toArrayMerge.indexOf(b)){var d=c[b]instanceof Array?c[b]:[c[b]],e=a[b]instanceof Array?a[b]:[a[b]];c[b]=d.concat(e)}else if(-1!==functionalMerge.indexOf(b)){for(var f in a[b])if(c[b][f]){var g=c[b][f]instanceof Array?c[b][f]:[c[b][f]],h=a[b][f]instanceof Array?a[b][f]:[a[b][f]];c[b][f]=g.concat(h)}else c[b][f]=a[b][f];}else if("hook"==b)for(var i in a[b])c[b][i]=c[b][i]?mergeFn(c[b][i],a[b][i]):a[b][i];else c[b]=a[b];return c},{})},mergeFn=function(a,b){return function(){a&&a.apply(this,arguments),b&&b.apply(this,arguments)}};module.exports=mergeJsxProps;


/***/ }),

/***/ "4abb":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "4ed8":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "556c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "65d9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
  * vue-class-component v7.0.1
  * (c) 2015-present Evan You
  * @license MIT
  */


Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Vue = _interopDefault(__webpack_require__("8bbf"));

// The rational behind the verbose Reflect-feature check below is the fact that there are polyfills
// which add an implementation for Reflect.defineMetadata but not for Reflect.getOwnMetadataKeys.
// Without this check consumers will encounter hard to track down runtime errors.
var reflectionIsSupported = typeof Reflect !== 'undefined' && Reflect.defineMetadata && Reflect.getOwnMetadataKeys;
function copyReflectionMetadata(to, from) {
    forwardMetadata(to, from);
    Object.getOwnPropertyNames(from.prototype).forEach(function (key) {
        forwardMetadata(to.prototype, from.prototype, key);
    });
    Object.getOwnPropertyNames(from).forEach(function (key) {
        forwardMetadata(to, from, key);
    });
}
function forwardMetadata(to, from, propertyKey) {
    var metaKeys = propertyKey
        ? Reflect.getOwnMetadataKeys(from, propertyKey)
        : Reflect.getOwnMetadataKeys(from);
    metaKeys.forEach(function (metaKey) {
        var metadata = propertyKey
            ? Reflect.getOwnMetadata(metaKey, from, propertyKey)
            : Reflect.getOwnMetadata(metaKey, from);
        if (propertyKey) {
            Reflect.defineMetadata(metaKey, metadata, to, propertyKey);
        }
        else {
            Reflect.defineMetadata(metaKey, metadata, to);
        }
    });
}

var fakeArray = { __proto__: [] };
var hasProto = fakeArray instanceof Array;
function createDecorator(factory) {
    return function (target, key, index) {
        var Ctor = typeof target === 'function'
            ? target
            : target.constructor;
        if (!Ctor.__decorators__) {
            Ctor.__decorators__ = [];
        }
        if (typeof index !== 'number') {
            index = undefined;
        }
        Ctor.__decorators__.push(function (options) { return factory(options, key, index); });
    };
}
function mixins() {
    var Ctors = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Ctors[_i] = arguments[_i];
    }
    return Vue.extend({ mixins: Ctors });
}
function isPrimitive(value) {
    var type = typeof value;
    return value == null || (type !== 'object' && type !== 'function');
}
function warn(message) {
    if (typeof console !== 'undefined') {
        console.warn('[vue-class-component] ' + message);
    }
}

function collectDataFromConstructor(vm, Component) {
    // override _init to prevent to init as Vue instance
    var originalInit = Component.prototype._init;
    Component.prototype._init = function () {
        var _this = this;
        // proxy to actual vm
        var keys = Object.getOwnPropertyNames(vm);
        // 2.2.0 compat (props are no longer exposed as self properties)
        if (vm.$options.props) {
            for (var key in vm.$options.props) {
                if (!vm.hasOwnProperty(key)) {
                    keys.push(key);
                }
            }
        }
        keys.forEach(function (key) {
            if (key.charAt(0) !== '_') {
                Object.defineProperty(_this, key, {
                    get: function () { return vm[key]; },
                    set: function (value) { vm[key] = value; },
                    configurable: true
                });
            }
        });
    };
    // should be acquired class property values
    var data = new Component();
    // restore original _init to avoid memory leak (#209)
    Component.prototype._init = originalInit;
    // create plain data object
    var plainData = {};
    Object.keys(data).forEach(function (key) {
        if (data[key] !== undefined) {
            plainData[key] = data[key];
        }
    });
    if (false) {}
    return plainData;
}

var $internalHooks = [
    'data',
    'beforeCreate',
    'created',
    'beforeMount',
    'mounted',
    'beforeDestroy',
    'destroyed',
    'beforeUpdate',
    'updated',
    'activated',
    'deactivated',
    'render',
    'errorCaptured',
    'serverPrefetch' // 2.6
];
function componentFactory(Component, options) {
    if (options === void 0) { options = {}; }
    options.name = options.name || Component._componentTag || Component.name;
    // prototype props.
    var proto = Component.prototype;
    Object.getOwnPropertyNames(proto).forEach(function (key) {
        if (key === 'constructor') {
            return;
        }
        // hooks
        if ($internalHooks.indexOf(key) > -1) {
            options[key] = proto[key];
            return;
        }
        var descriptor = Object.getOwnPropertyDescriptor(proto, key);
        if (descriptor.value !== void 0) {
            // methods
            if (typeof descriptor.value === 'function') {
                (options.methods || (options.methods = {}))[key] = descriptor.value;
            }
            else {
                // typescript decorated data
                (options.mixins || (options.mixins = [])).push({
                    data: function () {
                        var _a;
                        return _a = {}, _a[key] = descriptor.value, _a;
                    }
                });
            }
        }
        else if (descriptor.get || descriptor.set) {
            // computed properties
            (options.computed || (options.computed = {}))[key] = {
                get: descriptor.get,
                set: descriptor.set
            };
        }
    });
    (options.mixins || (options.mixins = [])).push({
        data: function () {
            return collectDataFromConstructor(this, Component);
        }
    });
    // decorate options
    var decorators = Component.__decorators__;
    if (decorators) {
        decorators.forEach(function (fn) { return fn(options); });
        delete Component.__decorators__;
    }
    // find super
    var superProto = Object.getPrototypeOf(Component.prototype);
    var Super = superProto instanceof Vue
        ? superProto.constructor
        : Vue;
    var Extended = Super.extend(options);
    forwardStaticMembers(Extended, Component, Super);
    if (reflectionIsSupported) {
        copyReflectionMetadata(Extended, Component);
    }
    return Extended;
}
var reservedPropertyNames = [
    // Unique id
    'cid',
    // Super Vue constructor
    'super',
    // Component options that will be used by the component
    'options',
    'superOptions',
    'extendOptions',
    'sealedOptions',
    // Private assets
    'component',
    'directive',
    'filter'
];
function forwardStaticMembers(Extended, Original, Super) {
    // We have to use getOwnPropertyNames since Babel registers methods as non-enumerable
    Object.getOwnPropertyNames(Original).forEach(function (key) {
        // `prototype` should not be overwritten
        if (key === 'prototype') {
            return;
        }
        // Some browsers does not allow reconfigure built-in properties
        var extendedDescriptor = Object.getOwnPropertyDescriptor(Extended, key);
        if (extendedDescriptor && !extendedDescriptor.configurable) {
            return;
        }
        var descriptor = Object.getOwnPropertyDescriptor(Original, key);
        // If the user agent does not support `__proto__` or its family (IE <= 10),
        // the sub class properties may be inherited properties from the super class in TypeScript.
        // We need to exclude such properties to prevent to overwrite
        // the component options object which stored on the extended constructor (See #192).
        // If the value is a referenced value (object or function),
        // we can check equality of them and exclude it if they have the same reference.
        // If it is a primitive value, it will be forwarded for safety.
        if (!hasProto) {
            // Only `cid` is explicitly exluded from property forwarding
            // because we cannot detect whether it is a inherited property or not
            // on the no `__proto__` environment even though the property is reserved.
            if (key === 'cid') {
                return;
            }
            var superDescriptor = Object.getOwnPropertyDescriptor(Super, key);
            if (!isPrimitive(descriptor.value) &&
                superDescriptor &&
                superDescriptor.value === descriptor.value) {
                return;
            }
        }
        // Warn if the users manually declare reserved properties
        if (false) {}
        Object.defineProperty(Extended, key, descriptor);
    });
}

function Component(options) {
    if (typeof options === 'function') {
        return componentFactory(options);
    }
    return function (Component) {
        return componentFactory(Component, options);
    };
}
Component.registerHooks = function registerHooks(keys) {
    $internalHooks.push.apply($internalHooks, keys);
};

exports.default = Component;
exports.createDecorator = createDecorator;
exports.mixins = mixins;


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js
var helper = __webpack_require__("2638");
var helper_default = /*#__PURE__*/__webpack_require__.n(helper);

// CONCATENATED MODULE: ./node_modules/tslib/tslib.es6.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
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
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// EXTERNAL MODULE: ./node_modules/vue-class-component/dist/vue-class-component.common.js
var vue_class_component_common = __webpack_require__("65d9");
var vue_class_component_common_default = /*#__PURE__*/__webpack_require__.n(vue_class_component_common);

// CONCATENATED MODULE: ./node_modules/vue-property-decorator/lib/vue-property-decorator.js
/** vue-property-decorator verson 8.0.0 MIT LICENSE copyright 2018 kaorun343 */




/**
 * decorator of an inject
 * @param from key
 * @return PropertyDecorator
 */
function Inject(options) {
    return Object(vue_class_component_common["createDecorator"])(function (componentOptions, key) {
        if (typeof componentOptions.inject === 'undefined') {
            componentOptions.inject = {};
        }
        if (!Array.isArray(componentOptions.inject)) {
            componentOptions.inject[key] = options || key;
        }
    });
}
/**
 * decorator of a provide
 * @param key key
 * @return PropertyDecorator | void
 */
function Provide(key) {
    return Object(vue_class_component_common["createDecorator"])(function (componentOptions, k) {
        var provide = componentOptions.provide;
        if (typeof provide !== 'function' || !provide.managed) {
            var original_1 = componentOptions.provide;
            provide = componentOptions.provide = function () {
                var rv = Object.create((typeof original_1 === 'function' ? original_1.call(this) : original_1) || null);
                for (var i in provide.managed)
                    rv[provide.managed[i]] = this[i];
                return rv;
            };
            provide.managed = {};
        }
        provide.managed[k] = key || k;
    });
}
/**
 * decorator of model
 * @param  event event name
 * @param options options
 * @return PropertyDecorator
 */
function Model(event, options) {
    if (options === void 0) { options = {}; }
    return Object(vue_class_component_common["createDecorator"])(function (componentOptions, k) {
        (componentOptions.props || (componentOptions.props = {}))[k] = options;
        componentOptions.model = { prop: k, event: event || k };
    });
}
/**
 * decorator of a prop
 * @param  options the options for the prop
 * @return PropertyDecorator | void
 */
function Prop(options) {
    if (options === void 0) { options = {}; }
    return Object(vue_class_component_common["createDecorator"])(function (componentOptions, k) {
        (componentOptions.props || (componentOptions.props = {}))[k] = options;
    });
}
/**
 * decorator of a watch function
 * @param  path the path or the expression to observe
 * @param  WatchOption
 * @return MethodDecorator
 */
function Watch(path, options) {
    if (options === void 0) { options = {}; }
    var _a = options.deep, deep = _a === void 0 ? false : _a, _b = options.immediate, immediate = _b === void 0 ? false : _b;
    return Object(vue_class_component_common["createDecorator"])(function (componentOptions, handler) {
        if (typeof componentOptions.watch !== 'object') {
            componentOptions.watch = Object.create(null);
        }
        var watch = componentOptions.watch;
        if (typeof watch[path] === 'object' && !Array.isArray(watch[path])) {
            watch[path] = [watch[path]];
        }
        else if (typeof watch[path] === 'undefined') {
            watch[path] = [];
        }
        watch[path].push({ handler: handler, deep: deep, immediate: immediate });
    });
}
// Code copied from Vue/src/shared/util.js
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = function (str) { return str.replace(hyphenateRE, '-$1').toLowerCase(); };
/**
 * decorator of an event-emitter function
 * @param  event The name of the event
 * @return MethodDecorator
 */
function Emit(event) {
    return function (_target, key, descriptor) {
        key = hyphenate(key);
        var original = descriptor.value;
        descriptor.value = function emitter() {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var emit = function (returnValue) {
                if (returnValue !== undefined)
                    args.unshift(returnValue);
                _this.$emit.apply(_this, [event || key].concat(args));
            };
            var returnValue = original.apply(this, args);
            if (isPromise(returnValue)) {
                returnValue.then(function (returnValue) {
                    emit(returnValue);
                });
            }
            else {
                emit(returnValue);
            }
        };
    };
}
function isPromise(obj) {
    return obj instanceof Promise || (obj && typeof obj.then === 'function');
}

// EXTERNAL MODULE: ./lib/styles/dot.scss
var dot = __webpack_require__("4ed8");

// CONCATENATED MODULE: ./lib/vue-slider-dot.tsx
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var VueSliderDot =
/*#__PURE__*/
function (_Vue) {
  _inherits(VueSliderDot, _Vue);

  function VueSliderDot() {
    _classCallCheck(this, VueSliderDot);

    return _possibleConstructorReturn(this, _getPrototypeOf(VueSliderDot).apply(this, arguments));
  }

  _createClass(VueSliderDot, [{
    key: "dragStart",
    value: function dragStart(e) {
      if (this.disabled) {
        return false;
      }

      this.$emit('drag-start');
    }
  }, {
    key: "render",
    value: function render() {
      var h = arguments[0];
      return h("div", {
        "ref": "dot",
        "class": this.dotClasses,
        "on": {
          "mousedown": this.dragStart,
          "touchstart": this.dragStart
        }
      }, [this.$slots.dot || h("div", {
        "class": this.handleClasses,
        "style": this.dotStyle
      }), this.tooltip !== 'none' ? h("div", {
        "class": this.tooltipClasses
      }, [this.$slots.tooltip || h("div", {
        "class": this.tooltipInnerClasses,
        "style": this.tooltipStyle
      }, [h("span", {
        "class": 'vue-slider-dot-tooltip-text'
      }, [this.tooltipValue])])]) : null]);
    }
  }, {
    key: "dotClasses",
    get: function get() {
      return ['vue-slider-dot', {
        'vue-slider-dot-disabled': this.disabled,
        'vue-slider-dot-focus': this.focus
      }];
    }
  }, {
    key: "handleClasses",
    get: function get() {
      return ['vue-slider-dot-handle', {
        'vue-slider-dot-handle-disabled': this.disabled,
        'vue-slider-dot-handle-focus': this.focus
      }];
    }
  }, {
    key: "tooltipClasses",
    get: function get() {
      return ['vue-slider-dot-tooltip', ["vue-slider-dot-tooltip-".concat(this.tooltipPlacement)], {
        'vue-slider-dot-tooltip-show': this.showTooltip
      }];
    }
  }, {
    key: "tooltipInnerClasses",
    get: function get() {
      return ['vue-slider-dot-tooltip-inner', ["vue-slider-dot-tooltip-inner-".concat(this.tooltipPlacement)], {
        'vue-slider-dot-tooltip-inner-disabled': this.disabled,
        'vue-slider-dot-tooltip-inner-focus': this.focus
      }];
    }
  }, {
    key: "showTooltip",
    get: function get() {
      switch (this.tooltip) {
        case 'always':
          return true;

        case 'none':
          return false;

        case 'focus':
          return !!this.focus;

        default:
          return false;
      }
    }
  }, {
    key: "tooltipValue",
    get: function get() {
      if (this.tooltipFormatter) {
        return typeof this.tooltipFormatter === 'string' ? this.tooltipFormatter.replace(/\{value\}/, String(this.value)) : this.tooltipFormatter(this.value);
      } else {
        return this.value;
      }
    }
  }]);

  return VueSliderDot;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([Prop({
  default: 0
})], VueSliderDot.prototype, "value", void 0);

__decorate([Prop()], VueSliderDot.prototype, "tooltip", void 0);

__decorate([Prop()], VueSliderDot.prototype, "dotStyle", void 0);

__decorate([Prop()], VueSliderDot.prototype, "tooltipStyle", void 0);

__decorate([Prop({
  type: String,
  validator: function validator(val) {
    return ['top', 'right', 'bottom', 'left'].indexOf(val) > -1;
  },
  required: true
})], VueSliderDot.prototype, "tooltipPlacement", void 0);

__decorate([Prop({
  type: [String, Function]
})], VueSliderDot.prototype, "tooltipFormatter", void 0);

__decorate([Prop({
  type: Boolean,
  default: false
})], VueSliderDot.prototype, "focus", void 0);

__decorate([Prop({
  default: false
})], VueSliderDot.prototype, "disabled", void 0);

VueSliderDot = __decorate([vue_class_component_common_default.a], VueSliderDot);
/* harmony default export */ var vue_slider_dot = (VueSliderDot);
// EXTERNAL MODULE: ./lib/styles/mark.scss
var mark = __webpack_require__("556c");

// CONCATENATED MODULE: ./lib/vue-slider-mark.tsx
function vue_slider_mark_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { vue_slider_mark_typeof = function _typeof(obj) { return typeof obj; }; } else { vue_slider_mark_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return vue_slider_mark_typeof(obj); }

function vue_slider_mark_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function vue_slider_mark_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function vue_slider_mark_createClass(Constructor, protoProps, staticProps) { if (protoProps) vue_slider_mark_defineProperties(Constructor.prototype, protoProps); if (staticProps) vue_slider_mark_defineProperties(Constructor, staticProps); return Constructor; }

function vue_slider_mark_possibleConstructorReturn(self, call) { if (call && (vue_slider_mark_typeof(call) === "object" || typeof call === "function")) { return call; } return vue_slider_mark_assertThisInitialized(self); }

function vue_slider_mark_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function vue_slider_mark_getPrototypeOf(o) { vue_slider_mark_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return vue_slider_mark_getPrototypeOf(o); }

function vue_slider_mark_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) vue_slider_mark_setPrototypeOf(subClass, superClass); }

function vue_slider_mark_setPrototypeOf(o, p) { vue_slider_mark_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return vue_slider_mark_setPrototypeOf(o, p); }





var VueSlideMark =
/*#__PURE__*/
function (_Vue) {
  vue_slider_mark_inherits(VueSlideMark, _Vue);

  function VueSlideMark() {
    vue_slider_mark_classCallCheck(this, VueSlideMark);

    return vue_slider_mark_possibleConstructorReturn(this, vue_slider_mark_getPrototypeOf(VueSlideMark).apply(this, arguments));
  }

  vue_slider_mark_createClass(VueSlideMark, [{
    key: "labelClickHandle",
    value: function labelClickHandle(e) {
      e.stopPropagation();
      this.$emit('pressLabel', this.mark.pos);
    }
  }, {
    key: "render",
    value: function render() {
      var h = arguments[0];
      var mark = this.mark;
      return h("div", {
        "class": this.marksClasses
      }, [this.$slots.step || h("div", {
        "class": this.stepClasses,
        "style": [this.stepStyle, mark.style, mark.active ? this.stepActiveStyle : null, mark.active ? mark.activeStyle : null]
      }), !this.hideLabel ? this.$slots.label || h("div", {
        "class": this.labelClasses,
        "style": [this.labelStyle, mark.labelStyle, mark.active ? this.labelActiveStyle : null, mark.active ? mark.labelActiveStyle : null],
        "on": {
          "click": this.labelClickHandle
        }
      }, [mark.label]) : null]);
    }
  }, {
    key: "marksClasses",
    get: function get() {
      return ['vue-slider-mark', {
        'vue-slider-mark-active': this.mark.active
      }];
    }
  }, {
    key: "stepClasses",
    get: function get() {
      return ['vue-slider-mark-step', {
        'vue-slider-mark-step-active': this.mark.active
      }];
    }
  }, {
    key: "labelClasses",
    get: function get() {
      return ['vue-slider-mark-label', {
        'vue-slider-mark-label-active': this.mark.active
      }];
    }
  }]);

  return VueSlideMark;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([Prop({
  required: true
})], VueSlideMark.prototype, "mark", void 0);

__decorate([Prop(Boolean)], VueSlideMark.prototype, "hideLabel", void 0);

__decorate([Prop()], VueSlideMark.prototype, "stepStyle", void 0);

__decorate([Prop()], VueSlideMark.prototype, "stepActiveStyle", void 0);

__decorate([Prop()], VueSlideMark.prototype, "labelStyle", void 0);

__decorate([Prop()], VueSlideMark.prototype, "labelActiveStyle", void 0);

VueSlideMark = __decorate([vue_class_component_common_default.a], VueSlideMark);
/* harmony default export */ var vue_slider_mark = (VueSlideMark);
// CONCATENATED MODULE: ./lib/utils/index.ts
var getSize = function getSize(value) {
  return typeof value === 'number' ? "".concat(value, "px") : value;
};
/** Get the distance of the element from the top/left of the page */

var getOffset = function getOffset(elem) {
  var doc = document.documentElement;
  var body = document.body;
  var rect = elem.getBoundingClientRect();
  var offset = {
    y: rect.top + (window.pageYOffset || doc.scrollTop) - (doc.clientTop || body.clientTop || 0),
    x: rect.left + (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || body.clientLeft || 0)
  };
  return offset;
};
/**
 * Get the position of the mouse/finger in the element
 * @param e Trigger event
 * @param elem Container element
 * @param isReverse From the right/bottom
 */

var getPos = function getPos(e, elem, isReverse) {
  var event = 'targetTouches' in e ? e.targetTouches[0] : e;
  var offset = getOffset(elem);
  var posObj = {
    x: event.pageX - offset.x,
    y: event.pageY - offset.y
  };
  return {
    x: isReverse ? elem.offsetWidth - posObj.x : posObj.x,
    y: isReverse ? elem.offsetHeight - posObj.y : posObj.y
  };
};
var KEY_CODE;

(function (KEY_CODE) {
  KEY_CODE[KEY_CODE["PAGE_UP"] = 33] = "PAGE_UP";
  KEY_CODE[KEY_CODE["PAGE_DOWN"] = 34] = "PAGE_DOWN";
  KEY_CODE[KEY_CODE["END"] = 35] = "END";
  KEY_CODE[KEY_CODE["HOME"] = 36] = "HOME";
  KEY_CODE[KEY_CODE["LEFT"] = 37] = "LEFT";
  KEY_CODE[KEY_CODE["UP"] = 38] = "UP";
  KEY_CODE[KEY_CODE["RIGHT"] = 39] = "RIGHT";
  KEY_CODE[KEY_CODE["DOWN"] = 40] = "DOWN";
})(KEY_CODE || (KEY_CODE = {}));

var getKeyboardHandleFunc = function getKeyboardHandleFunc(e, params) {
  if (params.hook) {
    var result = params.hook(e);
    if (typeof result === 'function') return result;
    if (!result) return null;
  }

  switch (e.keyCode) {
    case KEY_CODE.UP:
      return function (i) {
        return params.direction === 'ttb' ? i - 1 : i + 1;
      };

    case KEY_CODE.RIGHT:
      return function (i) {
        return params.direction === 'rtl' ? i - 1 : i + 1;
      };

    case KEY_CODE.DOWN:
      return function (i) {
        return params.direction === 'ttb' ? i + 1 : i - 1;
      };

    case KEY_CODE.LEFT:
      return function (i) {
        return params.direction === 'rtl' ? i + 1 : i - 1;
      };

    case KEY_CODE.END:
      return function () {
        return params.max;
      };

    case KEY_CODE.HOME:
      return function () {
        return params.min;
      };

    case KEY_CODE.PAGE_UP:
      return function (i) {
        return i + 10;
      };

    case KEY_CODE.PAGE_DOWN:
      return function (i) {
        return i - 10;
      };

    default:
      return null;
  }
};
// CONCATENATED MODULE: ./lib/utils/decimal.ts
function decimal_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function decimal_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function decimal_createClass(Constructor, protoProps, staticProps) { if (protoProps) decimal_defineProperties(Constructor.prototype, protoProps); if (staticProps) decimal_defineProperties(Constructor, staticProps); return Constructor; }

/**
 * For any precise floating point calculation
 *
 * @export
 * @class Decimal
 */
var Decimal =
/*#__PURE__*/
function () {
  function Decimal(num) {
    decimal_classCallCheck(this, Decimal);

    this.num = num;
  }

  decimal_createClass(Decimal, [{
    key: "decimal",
    value: function decimal(num2, operator) {
      var num1 = this.num;
      var len1 = this.getDecimalLen(num1);
      var len2 = this.getDecimalLen(num2);
      var base = 0;

      switch (operator) {
        case '+':
          base = this.getExponent(len1, len2);
          this.num = (this.safeRoundUp(num1, base) + this.safeRoundUp(num2, base)) / base;
          break;

        case '-':
          base = this.getExponent(len1, len2);
          this.num = (this.safeRoundUp(num1, base) - this.safeRoundUp(num2, base)) / base;
          break;

        case '*':
          this.num = this.safeRoundUp(this.safeRoundUp(num1, this.getExponent(len1)), this.safeRoundUp(num2, this.getExponent(len2))) / this.getExponent(len1 + len2);
          break;

        case '/':
          base = this.getExponent(len1, len2);
          this.num = this.safeRoundUp(num1, base) / this.safeRoundUp(num2, base);
          break;

        case '%':
          base = this.getExponent(len1, len2);
          this.num = this.safeRoundUp(num1, base) % this.safeRoundUp(num2, base) / base;
          break;
      }

      return this;
    }
  }, {
    key: "plus",
    value: function plus(num2) {
      return this.decimal(num2, '+');
    }
  }, {
    key: "minus",
    value: function minus(num2) {
      return this.decimal(num2, '-');
    }
  }, {
    key: "multiply",
    value: function multiply(num2) {
      return this.decimal(num2, '*');
    }
  }, {
    key: "divide",
    value: function divide(num2) {
      return this.decimal(num2, '/');
    }
  }, {
    key: "remainder",
    value: function remainder(num2) {
      return this.decimal(num2, '%');
    }
  }, {
    key: "toNumber",
    value: function toNumber() {
      return this.num;
    }
  }, {
    key: "getDecimalLen",
    value: function getDecimalLen(num) {
      return ("".concat(num).split('.')[1] || '').length;
    }
  }, {
    key: "getExponent",
    value: function getExponent(num1, num2) {
      return Math.pow(10, num2 !== void 0 ? Math.max(num1, num2) : num1);
    } // fix: 9999999.99995 * 100000 = 999999999994.9999

  }, {
    key: "safeRoundUp",
    value: function safeRoundUp(num, exponent) {
      return Math.round(num * exponent);
    }
  }]);

  return Decimal;
}();


// CONCATENATED MODULE: ./lib/utils/control.ts
var _ERROR_MSG;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function control_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function control_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function control_createClass(Constructor, protoProps, staticProps) { if (protoProps) control_defineProperties(Constructor.prototype, protoProps); if (staticProps) control_defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var ERROR_TYPE;

(function (ERROR_TYPE) {
  ERROR_TYPE[ERROR_TYPE["VALUE"] = 1] = "VALUE";
  ERROR_TYPE[ERROR_TYPE["INTERVAL"] = 2] = "INTERVAL";
  ERROR_TYPE[ERROR_TYPE["MIN"] = 3] = "MIN";
  ERROR_TYPE[ERROR_TYPE["MAX"] = 4] = "MAX";
  ERROR_TYPE[ERROR_TYPE["ORDER"] = 5] = "ORDER";
})(ERROR_TYPE || (ERROR_TYPE = {}));

var ERROR_MSG = (_ERROR_MSG = {}, _defineProperty(_ERROR_MSG, ERROR_TYPE.VALUE, 'The type of the "value" is illegal'), _defineProperty(_ERROR_MSG, ERROR_TYPE.INTERVAL, 'The prop "interval" is invalid, "(max - min)" cannot be divisible by "interval"'), _defineProperty(_ERROR_MSG, ERROR_TYPE.MIN, 'The "value" cannot be less than the minimum.'), _defineProperty(_ERROR_MSG, ERROR_TYPE.MAX, 'The "value" cannot be greater than the maximum.'), _defineProperty(_ERROR_MSG, ERROR_TYPE.ORDER, 'When "order" is false, the parameters "minRange", "maxRange", "fixed", "enabled" are invalid.'), _ERROR_MSG);
/**
 * Slider logic control center
 *
 * @export
 * @class Control
 */

var control_Control =
/*#__PURE__*/
function () {
  function Control(options) {
    control_classCallCheck(this, Control);

    this.dotsPos = []; // The position of each slider

    this.dotsValue = []; // The value of each slider

    this.data = options.data;
    this.max = options.max;
    this.min = options.min;
    this.interval = options.interval;
    this.order = options.order;
    this.marks = options.marks;
    this.included = options.included;
    this.process = options.process;
    this.adsorb = options.adsorb;
    this.dotOptions = options.dotOptions;
    this.onError = options.onError;

    if (this.order) {
      this.minRange = options.minRange || 0;
      this.maxRange = options.maxRange || 0;
      this.enableCross = options.enableCross;
      this.fixed = options.fixed;
    } else {
      if (options.minRange || options.maxRange || !options.enableCross || options.fixed) {
        this.emitError(ERROR_TYPE.ORDER);
      }

      this.minRange = 0;
      this.maxRange = 0;
      this.enableCross = true;
      this.fixed = false;
    }

    this.setValue(options.value);
  }

  control_createClass(Control, [{
    key: "setValue",
    value: function setValue(value) {
      this.setDotsValue(Array.isArray(value) ? _toConsumableArray(value) : [value], true);
    }
  }, {
    key: "setDotsValue",
    value: function setDotsValue(value, syncPos) {
      this.dotsValue = value;

      if (syncPos) {
        this.syncDotsPos();
      }
    } // Set the slider position

  }, {
    key: "setDotsPos",
    value: function setDotsPos(dotsPos) {
      var _this = this;

      var list = this.order ? _toConsumableArray(dotsPos).sort(function (a, b) {
        return a - b;
      }) : dotsPos;
      this.dotsPos = list;
      this.setDotsValue(list.map(function (dotPos) {
        return _this.getValueByPos(dotPos);
      }), this.adsorb);
    } // Get value by position

  }, {
    key: "getValueByPos",
    value: function getValueByPos(pos) {
      var value = this.parsePos(pos); // When included is true, the return value is the value of the nearest mark

      if (this.included) {
        var dir = 100;
        this.markList.forEach(function (mark) {
          var curDir = Math.abs(mark.pos - pos);

          if (curDir < dir) {
            dir = curDir;
            value = mark.value;
          }
        });
      }

      return value;
    } // Sync slider position

  }, {
    key: "syncDotsPos",
    value: function syncDotsPos() {
      var _this2 = this;

      this.dotsPos = this.dotsValue.map(function (v) {
        return _this2.parseValue(v);
      });
    }
    /**
     * Get all the marks
     *
     * @readonly
     * @type {Mark[]}
     * @memberof Control
     */

  }, {
    key: "getRecentDot",

    /**
     * Get the most recent slider index by position
     *
     * @param {number} pos
     * @returns {number}
     * @memberof Control
     */
    value: function getRecentDot(pos) {
      var arr = this.dotsPos.map(function (dotPos) {
        return Math.abs(dotPos - pos);
      });
      return arr.indexOf(Math.min.apply(Math, _toConsumableArray(arr)));
    }
    /**
     * Get index by value
     *
     * @param {Value} value
     * @returns {number}
     * @memberof Control
     */

  }, {
    key: "getIndexByValue",
    value: function getIndexByValue(value) {
      if (this.data) {
        return this.data.indexOf(value);
      }

      return new Decimal(+value).minus(this.min).divide(this.interval).toNumber();
    }
    /**
     * Get value by index
     *
     * @param {index} number
     * @returns {Value}
     * @memberof Control
     */

  }, {
    key: "getValueByIndex",
    value: function getValueByIndex(index) {
      if (index < 0) {
        index = 0;
      } else if (index > this.total) {
        index = this.total;
      }

      return this.data ? this.data[index] : new Decimal(index).multiply(this.interval).plus(this.min).toNumber();
    }
    /**
     * Set the position of a single slider
     *
     * @param {number} pos
     * @param {number} index
     */

  }, {
    key: "setDotPos",
    value: function setDotPos(pos, index) {
      pos = this.getValidPos(pos, index).pos;
      var changePos = pos - this.dotsPos[index];

      if (!changePos) {
        return;
      }

      var changePosArr = new Array(this.dotsPos.length);

      if (this.fixed) {
        changePosArr = this.getFixedChangePosArr(changePos, index);
      } else if (this.minRange || this.maxRange) {
        changePosArr = this.getLimitRangeChangePosArr(pos, changePos, index);
      } else {
        changePosArr[index] = changePos;
      }

      this.setDotsPos(this.dotsPos.map(function (curPos, i) {
        return curPos + (changePosArr[i] || 0);
      }));
    }
    /**
     * In fixed mode, get the position of all slider changes
     *
     * @param {number} changePos Change distance of a single slider
     * @param {number} index slider index
     * @returns {DotsPosChangeArray}
     * @memberof Control
     */

  }, {
    key: "getFixedChangePosArr",
    value: function getFixedChangePosArr(changePos, index) {
      var _this3 = this;

      this.dotsPos.forEach(function (originPos, i) {
        if (i !== index) {
          var _this3$getValidPos = _this3.getValidPos(originPos + changePos, i),
              lastPos = _this3$getValidPos.pos,
              inRange = _this3$getValidPos.inRange;

          if (!inRange) {
            changePos = Math.min(Math.abs(lastPos - originPos), Math.abs(changePos)) * (changePos < 0 ? -1 : 1);
          }
        }
      });
      return this.dotsPos.map(function (_) {
        return changePos;
      });
    }
    /**
     * In minRange/maxRange mode, get the position of all slider changes
     *
     * @param {number} pos position of a single slider
     * @param {number} changePos Change distance of a single slider
     * @param {number} index slider index
     * @returns {DotsPosChangeArray}
     * @memberof Control
     */

  }, {
    key: "getLimitRangeChangePosArr",
    value: function getLimitRangeChangePosArr(pos, changePos, index) {
      var _this4 = this;

      var changeDots = [{
        index: index,
        changePos: changePos
      }];
      var newChangePos = changePos;
      [this.minRange, this.maxRange].forEach(function (isLimitRange, rangeIndex) {
        if (!isLimitRange) {
          return false;
        }

        var isMinRange = rangeIndex === 0;
        var isForward = changePos > 0;
        var next = 0;

        if (isMinRange) {
          next = isForward ? 1 : -1;
        } else {
          next = isForward ? -1 : 1;
        } // Determine if the two positions are within the legal interval


        var inLimitRange = function inLimitRange(pos2, pos1) {
          var diff = Math.abs(pos2 - pos1);
          return isMinRange ? diff < _this4.minRangeDir : diff > _this4.maxRangeDir;
        };

        var i = index + next;
        var nextPos = _this4.dotsPos[i];
        var curPos = pos;

        while (_this4.isPos(nextPos) && inLimitRange(nextPos, curPos)) {
          var _this4$getValidPos = _this4.getValidPos(nextPos + newChangePos, i),
              lastPos = _this4$getValidPos.pos;

          changeDots.push({
            index: i,
            changePos: lastPos - nextPos
          });
          i = i + next;
          curPos = lastPos;
          nextPos = _this4.dotsPos[i];
        }
      });
      return this.dotsPos.map(function (_, i) {
        var changeDot = changeDots.filter(function (dot) {
          return dot.index === i;
        });
        return changeDot.length ? changeDot[0].changePos : 0;
      });
    }
  }, {
    key: "isPos",
    value: function isPos(pos) {
      return typeof pos === 'number';
    }
    /**
     * Get a valid position by pos
     *
     * @param {number} pos
     * @param {number} index
     * @returns {{ pos: number, inRange: boolean }}
     */

  }, {
    key: "getValidPos",
    value: function getValidPos(pos, index) {
      var range = this.valuePosRange[index];
      var inRange = true;

      if (pos < range[0]) {
        pos = range[0];
        inRange = false;
      } else if (pos > range[1]) {
        pos = range[1];
        inRange = false;
      }

      return {
        pos: pos,
        inRange: inRange
      };
    }
    /**
     * Calculate the position of the slider by value
     *
     * @param {Value} val
     * @returns {number}
     */

  }, {
    key: "parseValue",
    value: function parseValue(val) {
      if (this.data) {
        val = this.data.indexOf(val);
      } else if (typeof val === 'number' || typeof val === 'string') {
        val = +val;

        if (val < this.min) {
          this.emitError(ERROR_TYPE.MIN);
          return 0;
        }

        if (val > this.max) {
          this.emitError(ERROR_TYPE.MAX);
          return 0;
        }

        if (typeof val !== 'number' || val !== val) {
          this.emitError(ERROR_TYPE.VALUE);
          return 0;
        }

        val = new Decimal(val).minus(this.min).divide(this.interval).toNumber();
      }

      var pos = new Decimal(val).multiply(this.gap).toNumber();
      return pos < 0 ? 0 : pos > 100 ? 100 : pos;
    }
    /**
     * Calculate the value by position
     *
     * @param {number} pos
     * @returns {Value}
     * @memberof Control
     */

  }, {
    key: "parsePos",
    value: function parsePos(pos) {
      var index = Math.round(pos / this.gap);
      return this.getValueByIndex(index);
    }
    /**
     * Determine if the location is active
     *
     * @param {number} pos
     * @returns {boolean}
     * @memberof Control
     */

  }, {
    key: "isActiveByPos",
    value: function isActiveByPos(pos) {
      return this.processArray.some(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            start = _ref2[0],
            end = _ref2[1];

        return pos >= start && pos <= end;
      });
    }
    /**
     * Get each value
     *
     * @returns {Value[]}
     * @memberof Control
     */

  }, {
    key: "getValues",
    value: function getValues() {
      if (this.data) {
        return this.data;
      } else {
        var values = [];

        for (var i = 0; i <= this.total; i++) {
          values.push(new Decimal(i).multiply(this.interval).plus(this.min).toNumber());
        }

        return values;
      }
    }
  }, {
    key: "emitError",
    value: function emitError(type) {
      if (this.onError) {
        this.onError(type, ERROR_MSG[type]);
      }
    }
  }, {
    key: "getDotRange",
    value: function getDotRange(index, key, defaultValue) {
      if (!this.dotOptions) {
        return defaultValue;
      }

      var option = Array.isArray(this.dotOptions) ? this.dotOptions[index] : this.dotOptions;
      return option && option[key] !== void 0 ? this.parseValue(option[key]) : defaultValue;
    }
    /**
     * Sliding range of each slider
     *
     * @type {Array<[number, number]>}
     * @memberof Control
     */

  }, {
    key: "markList",
    get: function get() {
      var _this5 = this;

      if (!this.marks) {
        return [];
      }

      var getMarkByValue = function getMarkByValue(value, mark) {
        var pos = _this5.parseValue(value);

        return _objectSpread({
          pos: pos,
          value: value,
          label: value,
          active: _this5.isActiveByPos(pos)
        }, mark);
      };

      if (this.marks === true) {
        return this.getValues().map(function (value) {
          return getMarkByValue(value);
        });
      } else if (Object.prototype.toString.call(this.marks) === '[object Object]') {
        return Object.keys(this.marks).sort(function (a, b) {
          return +a - +b;
        }).map(function (value) {
          var item = _this5.marks[value];
          return getMarkByValue(value, typeof item !== 'string' ? item : {
            label: item
          });
        });
      } else if (Array.isArray(this.marks)) {
        return this.marks.map(function (value) {
          return getMarkByValue(value);
        });
      } else if (typeof this.marks === 'function') {
        return this.getValues().map(function (value) {
          return {
            value: value,
            result: _this5.marks(value)
          };
        }).filter(function (_ref3) {
          var result = _ref3.result;
          return !!result;
        }).map(function (_ref4) {
          var value = _ref4.value,
              result = _ref4.result;
          return getMarkByValue(value, result);
        });
      } else {
        return [];
      }
    }
  }, {
    key: "processArray",
    get: function get() {
      if (this.process) {
        if (typeof this.process === 'function') {
          return this.process(this.dotsPos);
        } else if (this.dotsPos.length === 1) {
          return [[0, this.dotsPos[0]]];
        } else if (this.dotsPos.length > 1) {
          return [[Math.min.apply(Math, _toConsumableArray(this.dotsPos)), Math.max.apply(Math, _toConsumableArray(this.dotsPos))]];
        }
      }

      return [];
    }
    /**
     * The total number of values
     *
     * @type {number}
     * @memberof Control
     */

  }, {
    key: "total",
    get: function get() {
      var total = 0;

      if (this.data) {
        total = this.data.length - 1;
      } else {
        total = new Decimal(this.max).minus(this.min).divide(this.interval).toNumber();
      }

      if (total - Math.floor(total) !== 0) {
        this.emitError(ERROR_TYPE.INTERVAL);
        return 0;
      }

      return total;
    } // Distance between each value

  }, {
    key: "gap",
    get: function get() {
      return 100 / this.total;
    } // The minimum distance between the two sliders

  }, {
    key: "minRangeDir",
    get: function get() {
      return this.minRange ? this.minRange * this.gap : 0;
    } // Maximum distance between the two sliders

  }, {
    key: "maxRangeDir",
    get: function get() {
      return this.maxRange ? this.maxRange * this.gap : 100;
    }
  }, {
    key: "valuePosRange",
    get: function get() {
      var _this6 = this;

      var dotsPos = this.dotsPos;
      var valuePosRange = [];
      dotsPos.forEach(function (pos, i) {
        valuePosRange.push([Math.max(_this6.minRange ? _this6.minRangeDir * i : 0, !_this6.enableCross ? dotsPos[i - 1] || 0 : 0, _this6.getDotRange(i, 'min', 0)), Math.min(_this6.minRange ? 100 - _this6.minRangeDir * (dotsPos.length - 1 - i) : 100, !_this6.enableCross ? dotsPos[i + 1] || 100 : 100, _this6.getDotRange(i, 'max', 100))]);
      });
      return valuePosRange;
    }
  }, {
    key: "dotsIndex",
    get: function get() {
      var _this7 = this;

      return this.dotsValue.map(function (val) {
        return _this7.getIndexByValue(val);
      });
    }
  }]);

  return Control;
}();


// CONCATENATED MODULE: ./lib/utils/state.ts
function state_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function state_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function state_createClass(Constructor, protoProps, staticProps) { if (protoProps) state_defineProperties(Constructor.prototype, protoProps); if (staticProps) state_defineProperties(Constructor, staticProps); return Constructor; }

var State =
/*#__PURE__*/
function () {
  function State(map) {
    state_classCallCheck(this, State);

    this.states = 0;
    this.map = map;
  }

  state_createClass(State, [{
    key: "add",
    value: function add(state) {
      this.states |= state;
    }
  }, {
    key: "delete",
    value: function _delete(state) {
      this.states &= ~state;
    }
  }, {
    key: "toggle",
    value: function toggle(state) {
      if (this.has(state)) {
        this.delete(state);
      } else {
        this.add(state);
      }
    }
  }, {
    key: "has",
    value: function has(state) {
      return !!(this.states & state);
    }
  }]);

  return State;
}();


// EXTERNAL MODULE: ./lib/styles/slider.scss
var slider = __webpack_require__("4abb");

// CONCATENATED MODULE: ./lib/vue-slider.tsx


function vue_slider_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { vue_slider_typeof = function _typeof(obj) { return typeof obj; }; } else { vue_slider_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return vue_slider_typeof(obj); }

function vue_slider_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { vue_slider_defineProperty(target, key, source[key]); }); } return target; }

function vue_slider_slicedToArray(arr, i) { return vue_slider_arrayWithHoles(arr) || vue_slider_iterableToArrayLimit(arr, i) || vue_slider_nonIterableRest(); }

function vue_slider_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function vue_slider_iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function vue_slider_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function vue_slider_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function vue_slider_toConsumableArray(arr) { return vue_slider_arrayWithoutHoles(arr) || vue_slider_iterableToArray(arr) || vue_slider_nonIterableSpread(); }

function vue_slider_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function vue_slider_iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function vue_slider_arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function vue_slider_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function vue_slider_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function vue_slider_createClass(Constructor, protoProps, staticProps) { if (protoProps) vue_slider_defineProperties(Constructor.prototype, protoProps); if (staticProps) vue_slider_defineProperties(Constructor, staticProps); return Constructor; }

function vue_slider_possibleConstructorReturn(self, call) { if (call && (vue_slider_typeof(call) === "object" || typeof call === "function")) { return call; } return vue_slider_assertThisInitialized(self); }

function vue_slider_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function vue_slider_getPrototypeOf(o) { vue_slider_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return vue_slider_getPrototypeOf(o); }

function vue_slider_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) vue_slider_setPrototypeOf(subClass, superClass); }

function vue_slider_setPrototypeOf(o, p) { vue_slider_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return vue_slider_setPrototypeOf(o, p); }










var SliderState = {
  None: 0,
  Drag: 1 << 1,
  Focus: 1 << 2
};
var DEFAULT_SLIDER_SIZE = 4;

var vue_slider_VueSlider =
/*#__PURE__*/
function (_Vue) {
  vue_slider_inherits(VueSlider, _Vue);

  function VueSlider() {
    var _this;

    vue_slider_classCallCheck(this, VueSlider);

    _this = vue_slider_possibleConstructorReturn(this, vue_slider_getPrototypeOf(VueSlider).apply(this, arguments));
    _this.states = new State(SliderState); // The width of the component is divided into one hundred, the width of each one.

    _this.scale = 1; // Currently dragged slider index

    _this.focusDotIndex = 0;
    return _this;
  }

  vue_slider_createClass(VueSlider, [{
    key: "onValueChanged",
    value: function onValueChanged() {
      if (!this.states.has(SliderState.Drag) && this.isNotSync) {
        this.control.setValue(this.value);
      }
    }
  }, {
    key: "created",
    value: function created() {
      this.initControl();
    }
  }, {
    key: "mounted",
    value: function mounted() {
      this.bindEvent();
    }
  }, {
    key: "beforeDestroy",
    value: function beforeDestroy() {
      this.unbindEvent();
    }
  }, {
    key: "bindEvent",
    value: function bindEvent() {
      document.addEventListener('touchmove', this.dragMove, {
        passive: false
      });
      document.addEventListener('touchend', this.dragEnd, {
        passive: false
      });
      document.addEventListener('mousedown', this.blurHandle);
      document.addEventListener('mousemove', this.dragMove);
      document.addEventListener('mouseup', this.dragEnd);
      document.addEventListener('mouseleave', this.dragEnd);
      document.addEventListener('keydown', this.keydownHandle);
    }
  }, {
    key: "unbindEvent",
    value: function unbindEvent() {
      document.removeEventListener('touchmove', this.dragMove);
      document.removeEventListener('touchend', this.dragEnd);
      document.removeEventListener('mousedown', this.blurHandle);
      document.removeEventListener('mousemove', this.dragMove);
      document.removeEventListener('mouseup', this.dragEnd);
      document.removeEventListener('mouseleave', this.dragEnd);
      document.removeEventListener('keydown', this.keydownHandle);
    }
  }, {
    key: "setScale",
    value: function setScale() {
      this.scale = new Decimal(Math.floor(this.isHorizontal ? this.$el.offsetWidth : this.$el.offsetHeight)).divide(100).toNumber();
    }
  }, {
    key: "initControl",
    value: function initControl() {
      var _this2 = this;

      this.control = new control_Control({
        value: this.value,
        data: this.data,
        enableCross: this.enableCross,
        fixed: this.fixed,
        max: this.max,
        min: this.min,
        interval: this.interval,
        minRange: this.minRange,
        maxRange: this.maxRange,
        order: this.order,
        marks: this.marks,
        included: this.included,
        process: this.process,
        adsorb: this.adsorb,
        dotOptions: this.dotOptions,
        onError: this.emitError
      });
      ['data', 'enableCross', 'fixed', 'max', 'min', 'interval', 'minRange', 'maxRange', 'order', 'marks', 'process', 'adsorb', 'included', 'dotOptions'].forEach(function (name) {
        _this2.$watch(name, function (val) {
          if (name === 'data' && Array.isArray(_this2.control.data) && Array.isArray(val) && _this2.control.data.length === val.length && val.every(function (item, index) {
            return item === _this2.control.data[index];
          })) {
            return false;
          }

          ;
          _this2.control[name] = val;

          if (['data', 'max', 'min', 'interval'].indexOf(name) > -1) {
            _this2.control.syncDotsPos();
          }
        });
      });
    }
  }, {
    key: "syncValueByPos",
    value: function syncValueByPos() {
      var values = this.control.dotsValue;

      if (this.isDiff(values, Array.isArray(this.value) ? this.value : [this.value])) {
        this.$emit('change', values.length === 1 ? values[0] : vue_slider_toConsumableArray(values));
      }
    } // Slider value and component internal value are inconsistent

  }, {
    key: "isDiff",
    value: function isDiff(value1, value2) {
      return value1.length !== value2.length || value1.some(function (val, index) {
        return val !== value2[index];
      });
    }
  }, {
    key: "emitError",
    value: function emitError(type, message) {
      if (!this.silent) {
        console.error("[VueSlider error]: ".concat(message));
      }

      this.$emit('error', type, message);
    }
    /**
     * Get the drag range of the slider
     *
     * @private
     * @param {number} index slider index
     * @returns {[number, number]} range [start, end]
     * @memberof VueSlider
     */

  }, {
    key: "dragStart",
    value: function dragStart(index) {
      this.focusDotIndex = index;
      this.setScale();
      this.states.add(SliderState.Drag);
      this.states.add(SliderState.Focus);
      this.$emit('drag-start');
    }
  }, {
    key: "dragMove",
    value: function dragMove(e) {
      if (!this.states.has(SliderState.Drag)) {
        return false;
      }

      e.preventDefault();
      var pos = this.getPosByEvent(e);
      this.isCrossDot(pos);
      this.control.setDotPos(pos, this.focusDotIndex);

      if (!this.lazy) {
        this.syncValueByPos();
      }

      var value = this.control.dotsValue;
      this.$emit('dragging', value.length === 1 ? value[0] : vue_slider_toConsumableArray(value));
    } // If the component is sorted, then when the slider crosses, toggle the currently selected slider index

  }, {
    key: "isCrossDot",
    value: function isCrossDot(pos) {
      if (this.canSort) {
        var curIndex = this.focusDotIndex;
        var curPos = pos;

        if (curPos > this.dragRange[1]) {
          curPos = this.dragRange[1];
          this.focusDotIndex++;
        } else if (curPos < this.dragRange[0]) {
          curPos = this.dragRange[0];
          this.focusDotIndex--;
        }

        if (curIndex !== this.focusDotIndex) {
          this.control.setDotPos(curPos, curIndex);
        }
      }
    }
  }, {
    key: "dragEnd",
    value: function dragEnd() {
      var _this3 = this;

      if (!this.states.has(SliderState.Drag)) {
        return false;
      }

      setTimeout(function () {
        if (_this3.included && _this3.isNotSync) {
          _this3.control.setValue(_this3.value);
        } else {
          // Sync slider position
          _this3.control.syncDotsPos();
        }

        if (_this3.lazy) {
          _this3.syncValueByPos();
        }

        _this3.states.delete(SliderState.Drag); // If useKeyboard is true, keep focus status after dragging


        if (!_this3.useKeyboard) {
          _this3.states.delete(SliderState.Focus);
        }

        _this3.$emit('drag-end');
      });
    }
  }, {
    key: "blurHandle",
    value: function blurHandle(e) {
      if (this.dragOnClick) {
        this.clickHandle(e);
        return;
      } else if (!this.states.has(SliderState.Focus) || !this.$refs.container || this.$refs.container.contains(e.target)) {
        return false;
      }

      this.states.delete(SliderState.Focus);
    }
  }, {
    key: "clickHandle",
    value: function clickHandle(e) {
      if (!this.clickable || this.disabled || !this.$refs.container.contains(e.target) || this.$refs["dot-".concat(this.focusDotIndex)].$el === e.target) {
        return false;
      }

      if (this.states.has(SliderState.Drag)) {
        return;
      }

      this.setScale();
      var pos = this.getPosByEvent(e);
      this.setValueByPos(pos);

      if (this.dragOnClick) {
        this.dragStart(this.focusDotIndex);
      }
    }
  }, {
    key: "focus",
    value: function focus() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      this.states.add(SliderState.Focus);
      this.focusDotIndex = index;
    }
  }, {
    key: "blur",
    value: function blur() {
      this.states.delete(SliderState.Focus);
    }
  }, {
    key: "getValue",
    value: function getValue() {
      var values = this.control.dotsValue;
      return values.length === 1 ? values[0] : values;
    }
  }, {
    key: "getIndex",
    value: function getIndex() {
      var indexes = this.control.dotsIndex;
      return indexes.length === 1 ? indexes[0] : indexes;
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      this.control.setValue(Array.isArray(value) ? vue_slider_toConsumableArray(value) : [value]);
      this.syncValueByPos();
    }
  }, {
    key: "setIndex",
    value: function setIndex(index) {
      var _this4 = this;

      var value = Array.isArray(index) ? index.map(function (n) {
        return _this4.control.getValueByIndex(n);
      }) : this.control.getValueByIndex(index);
      this.setValue(value);
    }
  }, {
    key: "setValueByPos",
    value: function setValueByPos(pos) {
      var _this5 = this;

      var index = this.control.getRecentDot(pos);

      if (this.disabled || this.dots[index].disabled) {
        return false;
      }

      this.focusDotIndex = index;
      this.control.setDotPos(pos, index);
      this.syncValueByPos();

      if (this.useKeyboard) {
        this.states.add(SliderState.Focus);
      }

      setTimeout(function () {
        if (_this5.included && _this5.isNotSync) {
          _this5.control.setValue(_this5.value);
        } else {
          _this5.control.syncDotsPos();
        }
      });
    }
  }, {
    key: "keydownHandle",
    value: function keydownHandle(e) {
      var _this6 = this;

      if (!this.useKeyboard || !this.states.has(SliderState.Focus)) {
        return false;
      }

      var isInclude = this.included && this.marks;
      var handleFunc = getKeyboardHandleFunc(e, {
        direction: this.direction,
        max: isInclude ? this.control.markList.length - 1 : this.control.total,
        min: 0,
        hook: this.keydownHook
      });

      if (handleFunc) {
        e.preventDefault();
        var newIndex = -1;
        var pos = 0;

        if (isInclude) {
          this.control.markList.some(function (mark, index) {
            if (mark.value === _this6.control.dotsValue[_this6.focusDotIndex]) {
              newIndex = handleFunc(index);
              return true;
            }

            return false;
          });

          if (newIndex < 0) {
            newIndex = 0;
          } else if (newIndex > this.control.markList.length - 1) {
            newIndex = this.control.markList.length - 1;
          }

          pos = this.control.markList[newIndex].pos;
        } else {
          newIndex = handleFunc(this.control.getIndexByValue(this.control.dotsValue[this.focusDotIndex]));
          pos = this.control.parseValue(this.control.getValueByIndex(newIndex));
        }

        this.isCrossDot(pos);
        this.control.setDotPos(pos, this.focusDotIndex);
        this.syncValueByPos();
      }
    }
  }, {
    key: "getPosByEvent",
    value: function getPosByEvent(e) {
      return getPos(e, this.$el, this.isReverse)[this.isHorizontal ? 'x' : 'y'] / this.scale;
    }
  }, {
    key: "renderSlot",
    value: function renderSlot(name, data, defaultSlot, isDefault) {
      var h = this.$createElement;
      var scopedSlot = this.$scopedSlots[name];
      return scopedSlot ? isDefault ? scopedSlot(data) : h("template", {
        "slot": name
      }, [scopedSlot(data)]) : defaultSlot;
    }
  }, {
    key: "render",
    value: function render() {
      var _this7 = this;

      var h = arguments[0];
      return h("div", helper_default()([{
        "ref": "container",
        "class": this.containerClasses,
        "style": this.containerStyles,
        "on": {
          "click": this.clickHandle
        }
      }, this.$attrs]), [h("div", {
        "class": "vue-slider-rail",
        "style": this.railStyle
      }, [this.processArray.map(function (item, index) {
        return _this7.renderSlot('process', item, h("div", {
          "class": "vue-slider-process",
          "key": "process-".concat(index),
          "style": item.style
        }), true);
      }), this.marks ? h("div", {
        "class": "vue-slider-marks"
      }, [this.control.markList.map(function (mark, index) {
        var _style;

        return _this7.renderSlot('mark', mark, h("vue-slider-mark", {
          "key": "mark-".concat(index),
          "attrs": {
            "mark": mark,
            "hideLabel": _this7.hideLabel,
            "stepStyle": _this7.stepStyle,
            "stepActiveStyle": _this7.stepActiveStyle,
            "labelStyle": _this7.labelStyle,
            "labelActiveStyle": _this7.labelActiveStyle
          },
          "style": (_style = {}, vue_slider_defineProperty(_style, _this7.isHorizontal ? 'height' : 'width', '100%'), vue_slider_defineProperty(_style, _this7.isHorizontal ? 'width' : 'height', _this7.tailSize), vue_slider_defineProperty(_style, _this7.mainDirection, "".concat(mark.pos, "%")), _style),
          "on": {
            "pressLabel": function pressLabel(pos) {
              return _this7.setValueByPos(pos);
            }
          }
        }, [_this7.renderSlot('step', mark, null), _this7.renderSlot('label', mark, null)]), true);
      })]) : null, this.dots.map(function (dot, index) {
        var _ref;

        return h("vue-slider-dot", {
          "ref": "dot-".concat(index),
          "key": "dot-".concat(index),
          "attrs": {
            "value": dot.value,
            "disabled": dot.disabled,
            "focus": dot.focus,
            "dot-style": [dot.style, dot.disabled ? dot.disabledStyle : null, dot.focus ? dot.focusStyle : null],
            "tooltip": dot.tooltip || _this7.tooltip,
            "tooltip-style": [_this7.tooltipStyle, dot.tooltipStyle, dot.disabled ? dot.tooltipDisabledStyle : null, dot.focus ? dot.tooltipFocusStyle : null],
            "tooltip-formatter": Array.isArray(_this7.tooltipFormatter) ? _this7.tooltipFormatter[index] : _this7.tooltipFormatter,
            "tooltip-placement": _this7.tooltipDirections[index]
          },
          "style": [_this7.dotBaseStyle, (_ref = {}, vue_slider_defineProperty(_ref, _this7.mainDirection, "".concat(dot.pos, "%")), vue_slider_defineProperty(_ref, "transition", "".concat(_this7.mainDirection, " ").concat(_this7.animateTime, "s")), _ref)],
          "on": {
            "drag-start": function dragStart() {
              return _this7.dragStart(index);
            }
          }
        }, [_this7.renderSlot('dot', dot, null), _this7.renderSlot('tooltip', dot, null)]);
      }), this.renderSlot('default', null, null, true)])]);
    }
  }, {
    key: "tailSize",
    get: function get() {
      return getSize((this.isHorizontal ? this.height : this.width) || DEFAULT_SLIDER_SIZE);
    }
  }, {
    key: "containerClasses",
    get: function get() {
      return ['vue-slider', ["vue-slider-".concat(this.direction)], {
        'vue-slider-disabled': this.disabled
      }];
    }
  }, {
    key: "containerStyles",
    get: function get() {
      var _ref2 = Array.isArray(this.dotSize) ? this.dotSize : [this.dotSize, this.dotSize],
          _ref3 = vue_slider_slicedToArray(_ref2, 2),
          dotWidth = _ref3[0],
          dotHeight = _ref3[1];

      var containerWidth = this.width ? getSize(this.width) : this.isHorizontal ? 'auto' : getSize(DEFAULT_SLIDER_SIZE);
      var containerHeight = this.height ? getSize(this.height) : this.isHorizontal ? getSize(DEFAULT_SLIDER_SIZE) : 'auto';
      return {
        padding: this.contained ? "".concat(dotHeight / 2, "px ").concat(dotWidth / 2, "px") : this.isHorizontal ? "".concat(dotHeight / 2, "px 0") : "0 ".concat(dotWidth / 2, "px"),
        width: containerWidth,
        height: containerHeight
      };
    }
  }, {
    key: "processArray",
    get: function get() {
      var _this8 = this;

      return this.control.processArray.map(function (_ref4, index) {
        var _objectSpread2;

        var _ref5 = vue_slider_slicedToArray(_ref4, 3),
            start = _ref5[0],
            end = _ref5[1],
            style = _ref5[2];

        if (start > end) {
          /* tslint:disable:semicolon */
          ;
          var _ref6 = [end, start];
          start = _ref6[0];
          end = _ref6[1];
        }

        var sizeStyleKey = _this8.isHorizontal ? 'width' : 'height';
        return {
          start: start,
          end: end,
          index: index,
          style: vue_slider_objectSpread((_objectSpread2 = {}, vue_slider_defineProperty(_objectSpread2, _this8.isHorizontal ? 'height' : 'width', '100%'), vue_slider_defineProperty(_objectSpread2, _this8.isHorizontal ? 'top' : 'left', 0), vue_slider_defineProperty(_objectSpread2, _this8.mainDirection, "".concat(start, "%")), vue_slider_defineProperty(_objectSpread2, sizeStyleKey, "".concat(end - start, "%")), vue_slider_defineProperty(_objectSpread2, "transitionProperty", "".concat(sizeStyleKey, ",").concat(_this8.mainDirection)), vue_slider_defineProperty(_objectSpread2, "transitionDuration", "".concat(_this8.animateTime, "s")), _objectSpread2), _this8.processStyle, style)
        };
      });
    }
  }, {
    key: "dotBaseStyle",
    get: function get() {
      var _ref7 = Array.isArray(this.dotSize) ? this.dotSize : [this.dotSize, this.dotSize],
          _ref8 = vue_slider_slicedToArray(_ref7, 2),
          dotWidth = _ref8[0],
          dotHeight = _ref8[1];

      var dotPos;

      if (this.isHorizontal) {
        dotPos = vue_slider_defineProperty({
          transform: "translate(".concat(this.isReverse ? '50%' : '-50%', ", -50%)"),
          WebkitTransform: "translate(".concat(this.isReverse ? '50%' : '-50%', ", -50%)"),
          top: '50%'
        }, this.direction === 'ltr' ? 'left' : 'right', '0');
      } else {
        dotPos = vue_slider_defineProperty({
          transform: "translate(-50%, ".concat(this.isReverse ? '50%' : '-50%', ")"),
          WebkitTransform: "translate(-50%, ".concat(this.isReverse ? '50%' : '-50%', ")"),
          left: '50%'
        }, this.direction === 'btt' ? 'bottom' : 'top', '0');
      }

      return vue_slider_objectSpread({
        width: "".concat(dotWidth, "px"),
        height: "".concat(dotHeight, "px")
      }, dotPos);
    }
  }, {
    key: "mainDirection",
    get: function get() {
      switch (this.direction) {
        case 'ltr':
          return 'left';

        case 'rtl':
          return 'right';

        case 'btt':
          return 'bottom';

        case 'ttb':
          return 'top';
      }
    }
  }, {
    key: "isHorizontal",
    get: function get() {
      return this.direction === 'ltr' || this.direction === 'rtl';
    }
  }, {
    key: "isReverse",
    get: function get() {
      return this.direction === 'rtl' || this.direction === 'btt';
    }
  }, {
    key: "tooltipDirections",
    get: function get() {
      var dir = this.tooltipPlacement || (this.isHorizontal ? 'top' : 'left');

      if (Array.isArray(dir)) {
        return dir;
      } else {
        return this.dots.map(function () {
          return dir;
        });
      }
    }
  }, {
    key: "dots",
    get: function get() {
      var _this9 = this;

      return this.control.dotsPos.map(function (pos, index) {
        return vue_slider_objectSpread({
          pos: pos,
          index: index,
          value: _this9.control.dotsValue[index],
          focus: _this9.states.has(SliderState.Focus) && _this9.focusDotIndex === index,
          disabled: _this9.disabled,
          style: _this9.dotStyle
        }, (Array.isArray(_this9.dotOptions) ? _this9.dotOptions[index] : _this9.dotOptions) || {});
      });
    }
  }, {
    key: "animateTime",
    get: function get() {
      if (this.states.has(SliderState.Drag)) {
        return 0;
      }

      return this.duration;
    }
  }, {
    key: "canSort",
    get: function get() {
      return this.order && !this.minRange && !this.maxRange && !this.fixed && this.enableCross;
    }
  }, {
    key: "isNotSync",
    get: function get() {
      var values = this.control.dotsValue;
      return Array.isArray(this.value) ? this.value.length !== values.length || this.value.some(function (val, index) {
        return val !== values[index];
      }) : this.value !== values[0];
    }
  }, {
    key: "dragRange",
    get: function get() {
      var prevDot = this.dots[this.focusDotIndex - 1];
      var nextDot = this.dots[this.focusDotIndex + 1];
      return [prevDot ? prevDot.pos : -Infinity, nextDot ? nextDot.pos : Infinity];
    }
  }]);

  return VueSlider;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([Model('change', {
  default: 0
})], vue_slider_VueSlider.prototype, "value", void 0);

__decorate([Prop({
  type: Boolean,
  default: false
})], vue_slider_VueSlider.prototype, "silent", void 0);

__decorate([Prop({
  default: 'ltr',
  validator: function validator(dir) {
    return ['ltr', 'rtl', 'ttb', 'btt'].indexOf(dir) > -1;
  }
})], vue_slider_VueSlider.prototype, "direction", void 0);

__decorate([Prop({
  type: [Number, String]
})], vue_slider_VueSlider.prototype, "width", void 0);

__decorate([Prop({
  type: [Number, String]
})], vue_slider_VueSlider.prototype, "height", void 0);

__decorate([Prop({
  default: 14
})], vue_slider_VueSlider.prototype, "dotSize", void 0);

__decorate([Prop({
  default: false
})], vue_slider_VueSlider.prototype, "contained", void 0);

__decorate([Prop({
  type: Number,
  default: 0
})], vue_slider_VueSlider.prototype, "min", void 0);

__decorate([Prop({
  type: Number,
  default: 100
})], vue_slider_VueSlider.prototype, "max", void 0);

__decorate([Prop({
  type: Number,
  default: 1
})], vue_slider_VueSlider.prototype, "interval", void 0);

__decorate([Prop({
  type: Boolean,
  default: false
})], vue_slider_VueSlider.prototype, "disabled", void 0);

__decorate([Prop({
  type: Boolean,
  default: true
})], vue_slider_VueSlider.prototype, "clickable", void 0);

__decorate([Prop({
  type: Boolean,
  default: false
})], vue_slider_VueSlider.prototype, "dragOnClick", void 0);

__decorate([Prop({
  type: Number,
  default: 0.5
})], vue_slider_VueSlider.prototype, "duration", void 0);

__decorate([Prop(Array)], vue_slider_VueSlider.prototype, "data", void 0);

__decorate([Prop({
  type: Boolean,
  default: false
})], vue_slider_VueSlider.prototype, "lazy", void 0);

__decorate([Prop({
  type: String,
  validator: function validator(val) {
    return ['none', 'always', 'focus'].indexOf(val) > -1;
  },
  default: 'focus'
})], vue_slider_VueSlider.prototype, "tooltip", void 0);

__decorate([Prop({
  type: [String, Array],
  validator: function validator(data) {
    return (Array.isArray(data) ? data : [data]).every(function (val) {
      return ['top', 'right', 'bottom', 'left'].indexOf(val) > -1;
    });
  }
})], vue_slider_VueSlider.prototype, "tooltipPlacement", void 0);

__decorate([Prop({
  type: [String, Array, Function]
})], vue_slider_VueSlider.prototype, "tooltipFormatter", void 0);

__decorate([Prop({
  type: Boolean,
  default: false
})], vue_slider_VueSlider.prototype, "useKeyboard", void 0);

__decorate([Prop(Function)], vue_slider_VueSlider.prototype, "keydownHook", void 0);

__decorate([Prop({
  type: Boolean,
  default: true
})], vue_slider_VueSlider.prototype, "enableCross", void 0);

__decorate([Prop({
  type: Boolean,
  default: false
})], vue_slider_VueSlider.prototype, "fixed", void 0);

__decorate([Prop({
  type: Boolean,
  default: true
})], vue_slider_VueSlider.prototype, "order", void 0);

__decorate([Prop(Number)], vue_slider_VueSlider.prototype, "minRange", void 0);

__decorate([Prop(Number)], vue_slider_VueSlider.prototype, "maxRange", void 0);

__decorate([Prop({
  type: [Boolean, Object, Array, Function],
  default: false
})], vue_slider_VueSlider.prototype, "marks", void 0);

__decorate([Prop({
  type: [Boolean, Function],
  default: true
})], vue_slider_VueSlider.prototype, "process", void 0);

__decorate([Prop(Boolean)], vue_slider_VueSlider.prototype, "included", void 0);

__decorate([Prop(Boolean)], vue_slider_VueSlider.prototype, "adsorb", void 0);

__decorate([Prop(Boolean)], vue_slider_VueSlider.prototype, "hideLabel", void 0);

__decorate([Prop()], vue_slider_VueSlider.prototype, "dotOptions", void 0);

__decorate([Prop()], vue_slider_VueSlider.prototype, "railStyle", void 0);

__decorate([Prop()], vue_slider_VueSlider.prototype, "processStyle", void 0);

__decorate([Prop()], vue_slider_VueSlider.prototype, "dotStyle", void 0);

__decorate([Prop()], vue_slider_VueSlider.prototype, "tooltipStyle", void 0);

__decorate([Prop()], vue_slider_VueSlider.prototype, "stepStyle", void 0);

__decorate([Prop()], vue_slider_VueSlider.prototype, "stepActiveStyle", void 0);

__decorate([Prop()], vue_slider_VueSlider.prototype, "labelStyle", void 0);

__decorate([Prop()], vue_slider_VueSlider.prototype, "labelActiveStyle", void 0);

__decorate([Watch('value')], vue_slider_VueSlider.prototype, "onValueChanged", null);

vue_slider_VueSlider = __decorate([vue_class_component_common_default()({
  data: function data() {
    return {
      control: null
    };
  },
  components: {
    VueSliderDot: vue_slider_dot,
    VueSliderMark: vue_slider_mark
  }
})], vue_slider_VueSlider);
/* harmony default export */ var vue_slider = (vue_slider_VueSlider);
// CONCATENATED MODULE: ./lib/index.ts
/* tslint:disable:import-spacing */




vue_slider.VueSliderMark = vue_slider_mark;
vue_slider.VueSliderDot = vue_slider_dot;
/* harmony default export */ var lib = (vue_slider);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js
/* concated harmony reexport ERROR_TYPE */__webpack_require__.d(__webpack_exports__, "ERROR_TYPE", function() { return ERROR_TYPE; });
/* concated harmony reexport VueSliderMark */__webpack_require__.d(__webpack_exports__, "VueSliderMark", function() { return vue_slider_mark; });
/* concated harmony reexport VueSliderDot */__webpack_require__.d(__webpack_exports__, "VueSliderDot", function() { return vue_slider_dot; });


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (lib);



/***/ })

/******/ })["default"];
});
//# sourceMappingURL=vue-slider-component.umd.js.map