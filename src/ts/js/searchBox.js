"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWordList = exports.addSearchBox = void 0;
var utils_js_1 = require("./utils.js");
var createDom_js_1 = require("./createDom.js");
function addSearchBox(searchBox) {
    utils_js_1.debug(searchBox.id);
    utils_js_1.debug("call:addSearchBox:" + searchBox.headerText);
    createDom_js_1.createDiv(searchBox.id);
    createDom_js_1.createForm(searchBox.id);
    createDom_js_1.createSearchP(searchBox);
    createDom_js_1.createSearchInput(searchBox.id);
    createDom_js_1.createSearchDeleteButton(searchBox);
    $("#" + searchBox.id).on("keydown", function (e) {
        utils_js_1.debug("keydown取得");
        if (e.key === "Enter") {
            search(searchBox.id);
        }
    });
}
exports.addSearchBox = addSearchBox;
function search(index) {
    utils_js_1.debug("search!");
    var searchString = $("#headerText" + index).text() + " " + $("#" + index).val();
    searchString = encodeURIComponent(searchString);
    utils_js_1.debug(searchString);
    var query = "q=" + searchString + "&oq=" + searchString;
    var url = "https://www.google.com/search?" + query;
    utils_js_1.debug(url);
    window.location.href = url;
}
function getWordList() { }
exports.getWordList = getWordList;
