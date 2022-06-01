"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jquery_1 = __importDefault(require("jquery"));
var searchBox_1 = require("./searchBox");
var init_1 = require("./init");
var storage_1 = require("./storage");
var class_1 = require("./class");
jquery_1.default("#add-word-button").on("click", addButtonClick);
init_1.init();
//dataReturnProcess();
function addButtonClick() {
    var inputValue = jquery_1.default("#add-word-input").val();
    if (typeof inputValue === "undefined") {
        alert("単語を入力してください");
        return;
    }
    if (typeof inputValue !== "string")
        return;
    var searchBox = new class_1.SearchBox(inputValue);
    searchBox_1.addSearchBox(searchBox);
    storage_1.addWordStorage(searchBox);
}
