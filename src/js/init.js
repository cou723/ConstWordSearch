import { addSearchBox } from "./searchBox";
import { loadStorage } from "./storage";
import pack_json from "../../package.json";
import { debug } from "./utils.js";

export function init(params) {
  var storage = loadStorage();
  setSearchBox(storage.word_list);
  setVersion();
}

function setSearchBox(word_list) {
  if (word_list[0] != "") return;
  for (const word of word_list) addSearchBox(word);
}

function setVersion() {
  let version = pack_json.version;
  $("#version").text(version);
}