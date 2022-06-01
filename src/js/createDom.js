"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSearchDeleteButton = exports.createSearchInput = exports.createSearchP = exports.createForm = exports.createDiv = void 0;
var storage_1 = require("./storage");
var jquery_1 = __importDefault(require("jquery"));
var utils_js_1 = require("./utils.js");
//div要素の作成
function createDiv(count) {
    jquery_1.default("#searches").append("<div id=\"search" + count + "\"></div>");
    jquery_1.default("#search" + count).addClass("row p-0");
}
exports.createDiv = createDiv;
function createForm(count) {
    jquery_1.default("#search" + count).append("<form id=\"searchForm" + count + "\" onsubmit=\"return false;\"></form>");
    jquery_1.default("#searchForm" + count).addClass("p-0 mb-2 input-group");
    jquery_1.default("#searchFrom" + count).attr({ onsubmit: "return false;" });
}
exports.createForm = createForm;
function createSearchP(headerText, count) {
    jquery_1.default("#searchForm" + count).append("<p id=\"headerText" + count + "\">" + headerText + "</p>");
    jquery_1.default("#headerText" + count).addClass("headerText col-2 mb-0 align-items-center d-flex flex-row-reverse input-group-addon border col-sm-4 col-md-2");
}
exports.createSearchP = createSearchP;
function createSearchInput(count) {
    jquery_1.default("#searchForm" + count).append("<input id=\"" + count + "\">");
    jquery_1.default("#" + count).addClass("form-control mb-0 rounded-right col-sm-8 col-md-10");
    jquery_1.default("#" + count).attr({ type: "text", autocomplete: "off" });
    // ajaxを用いたオートコンプリート機能、GitHub Pagesでうまく動作しないためコメントアウト
    //$(`#${count}`).autocomplete({
    //  source: function (request, response) {
    //    $.ajax({
    //      url: "http://www.google.com/complete/search",
    //      data: { hl: "ja", client: "firefox", q: request.term },
    //      dataType: "jsonp",
    //      type: "GET",
    //      success: function (data) {
    //        response(data[1]);
    //      },
    //    });
    //  },
    //  autoFocus: true,
    //  delay: 300,
    //  minLength: 2,
    //});
}
exports.createSearchInput = createSearchInput;
function createSearchDeleteButton(count) {
    jquery_1.default("#searchForm" + count).append("<button id=\"deleteButton" + count + "\">\u524A\u9664</button>");
    jquery_1.default("#deleteButton" + count).addClass("btn btn-outline-warning ml-1");
    jquery_1.default("#deleteButton" + count).attr({ type: "button" });
    jquery_1.default("#deleteButton" + count).attr({ tabindex: "-1" });
    jquery_1.default("#deleteButton" + count).on("click", function () {
        utils_js_1.debug("[PUSH]delete word");
        utils_js_1.debug(jquery_1.default("#headerText" + count)[0]);
        var deleteWord = jquery_1.default("#headerText" + count).text();
        utils_js_1.debug("delete word:" + deleteWord);
        storage_1.removeWordStorage(deleteWord);
        location.reload();
    });
}
exports.createSearchDeleteButton = createSearchDeleteButton;
