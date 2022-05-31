import utils from "./utils.js";
import {
  createDiv,
  createForm,
  createSearchP,
  createSearchInput,
  createSearchDeleteButton,
} from "./createDom.js";

export function addSearchBox(headerText) {
  var id = $("#searches").children().length;
  debug(id);
  debug("call:addSearchBox:" + headerText);
  createDiv(id);
  createForm(id);
  createSearchP(headerText, id);
  createSearchInput(id);
  createSearchDeleteButton(id);
  $(`#${id}`).on("keydown", (e) => {
    debug("keydown取得");
    if (e.key === 'Enter') {
      search(id);
    }
  });
}

function search(index) {
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

export function getWordList() {}
