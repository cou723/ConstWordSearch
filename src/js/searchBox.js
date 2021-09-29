import {
  createDiv,
  createForm,
  createSearchP,
  createSearchInput,
  createSearchDeleteButton,
} from "./createDom.js";

export function addSearchBox(headerText) {
  var id = $("#searches").children().length;
  console.log(id);
  console.log("call:addSearchBox:" + headerText);
  //div生成
  createDiv(id);
  //form生成
  createForm(id);
  //p生成
  createSearchP(headerText, id);
  //input生成
  createSearchInput(id);
  //deleteButton作成
  createSearchDeleteButton(id);
  $(`#${id}`).on("keydown", (e) => {
    console.log("keydown取得");
    if (e.keyCode === 13) {
      search(id);
    }
  });
}

function search(index) {
  console.log("search!");
  var searchString =
    $(`#headerText${index}`).text() + " " + $(`#${index}`).val();
  searchString = encodeURIComponent(searchString);
  console.log(searchString);
  var query = `q=${searchString}&oq=${searchString}`;
  var url = "https://www.google.com/search?" + query;
  console.log(url);
  window.location.href = url;
}

export function getWordList() {}
