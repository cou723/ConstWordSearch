import $ from "jquery";
import { addSearchBox } from "./searchBox";
import { init } from "./init";
import { addWordStorage } from "./storage";

$("#add-word-button").on("click", addButtonClick);
init();
//dataReturnProcess();

function addButtonClick() {
  var word = $("#add-word-input").val();
  if (word === "") {
    alert("単語を入力してください");
  } else {
    addSearchBox(word);
    addWordStorage(word);
  }
}
