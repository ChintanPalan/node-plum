(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Chrome_1 = require("./apis/Runtime/Chrome");
exports.Runtime = Chrome_1.default;

},{"./apis/Runtime/Chrome":2}],2:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Runtime_1 = require("./Runtime");
var ChromeRuntime = (function (_super) {
    __extends(ChromeRuntime, _super);
    function ChromeRuntime() {
        var _this = _super.call(this) || this;
        _this.setRuntime();
        return _this;
    }
    ChromeRuntime.prototype.setRuntime = function () {
        this.runtime = chrome && chrome.runtime;
    };
    ChromeRuntime.prototype.onInstall = function (callback) {
        if (typeof callback !== "function") {
            throw new Error("Callback to installation script must be a function.");
        }
        if (this.runtime && this.runtime.onInstalled && typeof this.runtime.onInstalled.addListener === "function") {
            this.runtime.onInstalled.addListener(function () {
                callback();
            });
        }
        else {
            console.log("Something went wrong");
        }
    };
    return ChromeRuntime;
}(Runtime_1.default));
exports.default = ChromeRuntime;

},{"./Runtime":3}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Runtime = (function () {
    function Runtime() {
        this.setRuntime();
    }
    Runtime.prototype.setRuntime = function () {
        this.runtime = false;
    };
    return Runtime;
}());
exports.default = Runtime;

},{}],4:[function(require,module,exports){
const ext = require("../../dist/Chrome.js");
console.log("Loaded Plugin");

let Runtime = new ext.Runtime();

Runtime.onInstall(function() {
    console.log("Installed and fired script from framework");
});
},{"../../dist/Chrome.js":1}]},{},[4]);
