import $ from "jquery";
import { addSearchBox } from "./searchBox";
import { init } from "./init";
import { copyText } from "./copyURL.js";
import { addWordStorage } from "./storage";

$("#add-word-button").on("click", addButtonClick);
$("#copy-button").on("click", copyText);
init();
//dataReturnProcess();

function addButtonClick() {
  console.log("push!");
  var word = $("#add-word-input").val();
  if (word === "") {
    alert("単語を入力してください");
  } else {
    addSearchBox(word);
    addWordStorage(word);
  }
}
