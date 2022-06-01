"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
var searchBox_1 = require("./searchBox");
var storage_1 = require("./storage");
var package_json_1 = __importDefault(require("./package.json"));
var utils_js_1 = require("./utils.js");
function init() {
    utils_js_1.debug("run");
    var storage = storage_1.loadStorage();
    setSearchBox(storage.word_list);
    setVersion();
}
exports.init = init;
function setSearchBox(searchBoxList) {
    if (searchBoxList.length == 0) {
        console.info("前回のword_listは空か存在しません");
        return;
    }
    for (var _i = 0, searchBoxList_1 = searchBoxList; _i < searchBoxList_1.length; _i++) {
        var searchBox = searchBoxList_1[_i];
        searchBox_1.addSearchBox(searchBox);
    }
}
function setVersion() {
    var version = package_json_1.default.version;
    $("#version").text(version);
}
