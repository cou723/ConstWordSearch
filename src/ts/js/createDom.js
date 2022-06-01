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
function createDiv(id) {
    jquery_1.default("#searches").append("<div id=\"search" + id + "\"></div>");
    jquery_1.default("#search" + id).addClass("row p-0");
}
exports.createDiv = createDiv;
function createForm(id) {
    jquery_1.default("#search" + id).append("<form id=\"searchForm" + id + "\" onsubmit=\"return false;\"></form>");
    jquery_1.default("#searchForm" + id).addClass("p-0 mb-2 input-group");
    jquery_1.default("#searchFrom" + id).attr({ onsubmit: "return false;" });
}
exports.createForm = createForm;
function createSearchP(searchBox) {
    jquery_1.default("#searchForm" + searchBox.id).append("<p id=\"headerText" + searchBox.id + "\">" + searchBox.headerText + "</p>");
    jquery_1.default("#headerText" + searchBox.id).addClass("headerText col-2 mb-0 align-items-center d-flex flex-row-reverse input-group-addon border col-sm-4 col-md-2");
}
exports.createSearchP = createSearchP;
function createSearchInput(id) {
    jquery_1.default("#searchForm" + id).append("<input id=\"" + id + "\">");
    jquery_1.default("#" + id).addClass("form-control mb-0 rounded-right col-sm-8 col-md-10");
    jquery_1.default("#" + id).attr({ type: "text", autocomplete: "off" });
    // ajaxを用いたオートコンプリート機能、GitHub Pagesでうまく動作しないためコメントアウト
    //$(`#${id}`).autocomplete({
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
function createSearchDeleteButton(searchBox) {
    jquery_1.default("#searchForm" + searchBox.id).append("<button searchBox.id=\"deleteButton" + searchBox.id + "\">\u524A\u9664</button>");
    jquery_1.default("#deleteButton" + searchBox.id).addClass("btn btn-outline-warning ml-1");
    jquery_1.default("#deleteButton" + searchBox.id).attr({ type: "button" });
    jquery_1.default("#deleteButton" + searchBox.id).attr({ tabindex: "-1" });
    jquery_1.default("#deleteButton" + searchBox.id).on("click", function () {
        utils_js_1.debug("[PUSH]delete word");
        storage_1.removeWordStorage(searchBox);
        location.reload();
    });
}
exports.createSearchDeleteButton = createSearchDeleteButton;
