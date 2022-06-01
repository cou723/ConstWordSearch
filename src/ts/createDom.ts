import { removeWordStorage } from "./storage";
import $ from "jquery";
import { debug } from "./utils.js";
import { SearchBox } from "./class";

//div要素の作成
export function createDiv(id: number) {
  $("#searches").append(`<div id="search${id}"></div>`);
  $(`#search${id}`).addClass("row p-0");
}

export function createForm(id: number) {
  $(`#search${id}`).append(
    `<form id="searchForm${id}" onsubmit="return false;"></form>`
  );
  $(`#searchForm${id}`).addClass("p-0 mb-2 input-group");
  $(`#searchFrom${id}`).attr({ onsubmit: "return false;" });
}
export function createSearchP(searchBox:SearchBox) {
  $(`#searchForm${searchBox.id}`).append(
    `<p id="headerText${searchBox.id}">${searchBox.headerText}</p>`
  );
  $(`#headerText${searchBox.id}`).addClass(
    `headerText col-2 mb-0 align-items-center d-flex flex-row-reverse input-group-addon border col-sm-4 col-md-2`
  );
}
export function createSearchInput(id: number) {
  $(`#searchForm${id}`).append(`<input id="${id}">`);
  $(`#${id}`).addClass(`form-control mb-0 rounded-right col-sm-8 col-md-10`);
  $(`#${id}`).attr({ type: "text", autocomplete: "off" });
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
export function createSearchDeleteButton(searchBox: SearchBox) {
  $(`#searchForm${searchBox.id}`).append(
    `<button searchBox.id="deleteButton${searchBox.id}">削除</button>`
  );
  $(`#deleteButton${searchBox.id}`).addClass(`btn btn-outline-warning ml-1`);
  $(`#deleteButton${searchBox.id}`).attr({ type: "button" });
  $(`#deleteButton${searchBox.id}`).attr({ tabindex: "-1" });
  $(`#deleteButton${searchBox.id}`).on("click", () => {
    debug("[PUSH]delete word");
    removeWordStorage(searchBox);
    location.reload();
  });
}
