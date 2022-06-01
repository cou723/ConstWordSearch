import { debug } from "./utils.js";
import {
  createDiv,
  createForm,
  createSearchP,
  createSearchInput,
  createSearchDeleteButton,
} from "./createDom.js";
import { SearchBox } from "./class";

export function addSearchBox(searchBox: SearchBox) {
  debug(searchBox.id);
  debug("call:addSearchBox:" + searchBox.headerText);
  createDiv(searchBox.id);
  createForm(searchBox.id);
  createSearchP(searchBox);
  createSearchInput(searchBox.id);
  createSearchDeleteButton(searchBox);
  $(`#${searchBox.id}`).on("keydown", (e) => {
    debug("keydown取得");
    if (e.key === "Enter") {
      search(searchBox.id);
    }
  });
}

function search(index: number) {
  debug("search!");
  var searchString =
    $(`#headerText${index}`).text() + " " + $(`#${index}`).val();
  searchString = encodeURIComponent(searchString);
  debug(searchString);
  var query = `q=${searchString}&oq=${searchString}`;
  var url = "https://www.google.com/search?" + query;
  debug(url);
  window.location.href = url;
}

export function getWordList() { }
