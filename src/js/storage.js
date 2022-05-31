import utils from "./utils.js";
export var LOCAL_STORAGE_KEY = "cow-search";

export function loadStorage() {
  debug("[CALL]loadStorage");
  var data = localStorage.getItem(LOCAL_STORAGE_KEY);
  var dataObject;
  var error;
  debug(data);
  try {
    dataObject = JSON.parse(data);
  } catch (error) {
    error = true;
  }
  if (data == null || error) {
    return {
      word_list: [],
    };
  } else return dataObject;
}

export function addWordStorage(word) {
  debug("[CALL]addWordStorage");
  var data = loadStorage();
  data.word_list.push(word);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
}

export function removeWordStorage(word) {
  debug("[CALL]removeWordStorage", word);
  var data = loadStorage();
  data.word_list = data.word_list.filter((item) => item != word);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
}
