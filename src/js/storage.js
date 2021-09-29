export var LOCAL_STORAGE_KEY = "cow-search";

export function loadStorage() {
  console.log("[CALL]loadStorage");
  var data = localStorage.getItem(LOCAL_STORAGE_KEY);
  var dataObject;
  var error;
  console.log(data);
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
  console.log("[CALL]addWordStorage");
  var data = loadStorage();
  data.word_list.push(word);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
}

export function removeWordStorage(word) {
  console.log("[CALL]removeWordStorage", word);
  var data = loadStorage();
  data.word_list = data.word_list.filter((item) => item != word);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
}
