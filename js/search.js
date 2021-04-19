/**自分的新要素
 * bootstrap
 * クエリパラメータ
 */
//import { $ } from "jquery";

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
    inputs[_i].on('keydown', (e) => {
        if (e.keyCode === 13) {
            search(_i);
        }
    });
}

function search(index) {
    //console.log(`headerText${index}[${header}]`);
    //console.log(`searchInput${index}[${input}]`);
    console.log('search!!!!!!!!!!!!');
    var searchString = $(`headerText${index}`).text() + " " + $(`${index}`).val();
    searchString = encodeURIComponent(searchString);
    var query = `q=${searchString}&oq=${searchString}`;
    var url = "https://www.google.com/search?" + query;
    console.log(url);
    //window.location.href = url;
}

function addSearchObj(headerText) {
    var count = $('#searches').length;
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

//div要素の作成
function createDiv(count) {
    $('#searches').append(`<div id="search${count}"></div>`);
}

function createForm(count) {
    $(`#search${count}`).append(`<form id="searchForm${count}"></form>`);
    $(`#searchForm${count}`).addClass('p-0 mb-2 input-group');
    $(`#searchFrom${count}`).attr('onsubmit', 'return false;');
}
function createSearchP(headerText, count) {
    $(`#searchForm${count}`).append(`<p id="headerText${count}">${headerText}</p>`);
    $(`#headerText${count}`).addClass(`headerText col-2 mb-0 align-items-center d-flex flex-row-reverse input-group-addon border col-sm-4 col-md-2`);
}
function createSearchInput(count) {
    $(`#searchForm${count}`).append(`<input id="${count}">`);
    $(`#${count}`).addClass(`form-control mb-0 rounded-right col-sm-8 col-md-10`);
    $(`#${count}`).attr('type', 'text');
}
function createSearchDeleteButton(count) {
    $(`#searchForm${count}`).append(`<button id="deleteButton${count}">削除</button>`);
    $(`#deleteButton${count}`).addClass(`btn btn-outline-warning ml-1`);
    $(`#deleteButton${count}`).on('click', () => {
        console.log(`delete:${searchDeleteButton.id.substr(12, searchDeleteButton.id.length)}`);
        /**方法1
         * q書き換え、リロード
         *
         */
        //書き換え
        var query = location.search.split(',').shift();
        //console.log(query);
        for (var i = 0; i < query.length; i++) {
            if (query[i] == encodeURI(document.getElementById(`headerText${count}`).innerText)) {
                query.splice(i, 1);
                break;
            }
        }
        var newQuery = "?,";
        query.forEach((element) => {
            newQuery += element + ",";
        })
        newQuery = newQuery.slice(0, -1);
        //リロード
        location.search = newQuery;

    })
}

function AutocompleteInit(count) {
    $(`${count}`).autocomplete({
        source: (request, response) => {
            $.ajax({
                url: "http://www.google.com/complete/search",
                data: { hl: 'ja', client: 'firefox', q: request.term },
                dataType: "jsonp",
                type: "GET",
                success: (data) => {
                    response(data[1]);
                }
            });
        },
        autoFocus: true,
        delay: 300,
        minLength: 2,
    });
    console.log("log");
}

$(document).ready(() => {
    $('url-text').autocomplete({
        source: (request, response) => {
            $.ajax({
                url: "http://www.google.com/complete/search",
                data: { hl: 'ja', client: 'firefox', q: request.term },
                dataType: "jsonp",
                type: "GET",
                success: (data) => {
                    response(data[1]);
                }
            });
        },
        autoFocus: true,
        delay: 300,
        minLength: 2,
    });
})
