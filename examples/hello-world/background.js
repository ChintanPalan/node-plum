const ext = require("../../dist/Chrome.js");
console.log("Loaded Plugin");

let Runtime = new ext.Runtime();

Runtime.onInstall(function() {
    console.log("Installed and fired script from framework");
});