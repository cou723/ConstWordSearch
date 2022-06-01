import { SearchBox } from "./class.js";
import { debug } from "./utils.js";
export var LOCAL_STORAGE_KEY = "cow-search";

export function loadStorage() {
  var data = localStorage.getItem(LOCAL_STORAGE_KEY);
  let JSONdata;
  let emptyWorldList = {
    word_list: [],
  };
  if (data == null || data == "") return emptyWorldList;
  debug(data);
  try {
    JSONdata = JSON.parse(data);
  } catch (error) {
    console.error(error);
    console.error(data + "をjsonに変換できませんでした");
    return emptyWorldList;
  }
  return JSONdata;
}

export function addWordStorage(searchBox: SearchBox) {
  var data = loadStorage();
  data.word_list.push(searchBox.headerText);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
}

export function removeWordStorage(searchBox: SearchBox) {
  var data = loadStorage();
  data.word_list = data.word_list.filter((item: string) => item != searchBox.headerText);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
}
