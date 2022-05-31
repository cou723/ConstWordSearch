import { addSearchBox } from "./searchBox";
import { loadStorage } from "./storage";
import pack_json from "../../package.json";

export function init(params) {
  var storage = loadStorage();
  //console.log(storage);
  draw(storage.word_list);
  setVersion();
  setURL();
}

function draw(word_list) {
  if (word_list[0] != "") return;
  for (const word of word_list) addSearchBox(word);
}

function setVersion() {
  $("#version").text(pack_json.version);
}

function setURL() {
  $("#url-text").text(location.href);
}
