import $ from "jquery";
import { addSearchBox } from "./searchBox";
import { init } from "./init";
import { addWordStorage } from "./storage";

$("#add-word-button").on("click", addButtonClick);
init();
//dataReturnProcess();

// class SearchBox {
//   static latest_id: number;
//   readonly id: number;
//   readonly header_text: string;

//   constructor(header_text: string) {
//     this.header_text = header_text;
//     this.id = SearchBox.latest_id;
//     SearchBox.latest_id++;
//   }
// }

function addButtonClick() {
  var input_value: any = $("#add-word-input").val();
  if (typeof input_value === "undefined") {
    alert("単語を入力してください");
    return;
  }
  if (typeof input_value !== "string")
    return;

  var word: string = input_value;
  addSearchBox(word);
  addWordStorage(word);
}
