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
function setSearchBox(word_list) {
    if (word_list[0] == "") {
        console.info("前回のword_listは空か存在しません");
        return;
    }
    for (var _i = 0, word_list_1 = word_list; _i < word_list_1.length; _i++) {
        var word = word_list_1[_i];
        searchBox_1.addSearchBox(word);
    }
}
function setVersion() {
    var version = package_json_1.default.version;
    $("#version").text(version);
}
