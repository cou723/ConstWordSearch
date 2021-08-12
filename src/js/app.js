import $ from "jquery";
import { dataReturnProcess } from "./query.js";
import { createDiv, createForm, createSearchP, createSearchInput, createSearchDeleteButton } from "./createDom.js";
import { copyText } from "./copyURL.js";


function setSearchObjectFromQuery() {
    var queries = location.search.split(',');
    queries.shift();
    var inputs = new Array();
    var i = 0;
    queries.forEach(query => {
        console.log('query取得:' + query);
        addSearchObj(decodeURIComponent(query));
        inputs.push($(`#${i}`));
        i++;
    });

    for (let _i = 0; _i < inputs.length; _i++) {
        $(`#${_i}`).on('keydown', (e) => {
            console.log('keydown取得');
            if (e.keyCode === 13) {
                search(_i);
            }
        });
    }
}

function search(index) {
    console.log('search!');
    var searchString = $(`#headerText${index}`).text() + " " + $(`#${index}`).val();
    searchString = encodeURIComponent(searchString);
    console.log(searchString);
    var query = `q=${searchString}&oq=${searchString}`;
    var url = "https://www.google.com/search?" + query;
    console.log(url);
    window.location.href = url;
}

function addSearchObj(headerText) {
    var count = $('#searches').children().length;
    console.log(count);
    console.log("call:addSearchObj:" + headerText);
    //div生成
    createDiv(count);
    //form生成
    createForm(count);
    //p生成
    createSearchP(headerText, count);
    //input生成
    createSearchInput(count);
    //deleteButton作成
    createSearchDeleteButton(count);
}

$('#add-word-button').on('click',addButtonClick);
$('#copy-button').on('click',copyText);
dataReturnProcess();
setSearchObjectFromQuery();

function addButtonClick(){
    console.log('push!');
    if($('#add-word-input').val() === ""){
        alert('単語を入力してください');
    }else{
        if(location.href.split(',').length == 1){
            window.location.href = `${location.href}?,${encodeURIComponent($('#add-word-input').val())}`;
        }else{
            window.location.href = `${location.href},${encodeURIComponent($('#add-word-input').val())}`;
        }
    }
}
