"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeWordStorage = exports.addWordStorage = exports.loadStorage = exports.LOCAL_STORAGE_KEY = void 0;
var utils_js_1 = require("./utils.js");
exports.LOCAL_STORAGE_KEY = "cow-search";
function loadStorage() {
    var data = localStorage.getItem(exports.LOCAL_STORAGE_KEY);
    var JSONdata;
    var emptyWorldList = {
        word_list: [],
    };
    if (data == null || data == "")
        return emptyWorldList;
    utils_js_1.debug(data);
    try {
        JSONdata = JSON.parse(data);
    }
    catch (error) {
        console.error(error);
        console.error(data + "をjsonに変換できませんでした");
        return emptyWorldList;
    }
    return JSONdata;
}
exports.loadStorage = loadStorage;
function addWordStorage(searchBox) {
    var data = loadStorage();
    data.word_list.push(searchBox.headerText);
    localStorage.setItem(exports.LOCAL_STORAGE_KEY, JSON.stringify(data));
}
exports.addWordStorage = addWordStorage;
function removeWordStorage(searchBox) {
    var data = loadStorage();
    data.word_list = data.word_list.filter(function (item) { return item != searchBox.headerText; });
    localStorage.setItem(exports.LOCAL_STORAGE_KEY, JSON.stringify(data));
}
exports.removeWordStorage = removeWordStorage;
