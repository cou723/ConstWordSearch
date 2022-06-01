import $ from "jquery";
import { addSearchBox } from "./searchBox";
import { init } from "./init";
import { addWordStorage } from "./storage";
import { SearchBox } from "./class";


$("#add-word-button").on("click", addButtonClick);
init();
//dataReturnProcess();

function addButtonClick() {
  var inputValue: any = $("#add-word-input").val();
  if (typeof inputValue === "undefined") {
    alert("単語を入力してください");
    return;
  }
  if (typeof inputValue !== "string")
    return;

  var searchBox: SearchBox = new SearchBox(inputValue);
  addSearchBox(searchBox);
  addWordStorage(searchBox);
}
