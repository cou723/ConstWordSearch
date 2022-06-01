import { addSearchBox } from "./searchBox";
import { loadStorage } from "./storage";
import pack_json from "./package.json";
import { debug } from "./utils.js";
import { SearchBox } from "./class";

export function init() {
  debug("run");
  var storage = loadStorage();
  setSearchBox(storage.word_list);
  setVersion();
}

function setSearchBox(searchBoxList: SearchBox[]) {
  if (searchBoxList.length == 0) {
    console.info("前回のword_listは空か存在しません");
    return;
  }
  for (const searchBox of searchBoxList) addSearchBox(searchBox);
}

function setVersion() {
  let version = pack_json.version;
  $("#version").text(version);
}