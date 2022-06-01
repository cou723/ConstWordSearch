"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchBox = void 0;
var SearchBox = /** @class */ (function () {
    function SearchBox(header_text) {
        this.headerText = header_text;
        this.id = SearchBox.latest_id;
        SearchBox.latest_id++;
    }
    return SearchBox;
}());
exports.SearchBox = SearchBox;
