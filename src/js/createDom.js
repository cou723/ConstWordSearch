//div要素の作成
export function createDiv(count) {
    $('#searches').append(`<div id="search${count}"></div>`);
    $(`#search${count}`).addClass('row p-0');
}

export function createForm(count) {
    $(`#search${count}`).append(`<form id="searchForm${count}" onsubmit="return false;"></form>`);
    $(`#searchForm${count}`).addClass('p-0 mb-2 input-group');
    $(`#searchFrom${count}`).attr({'onsubmit': 'return false;'});
}
export function createSearchP(headerText, count) {
    $(`#searchForm${count}`).append(`<p id="headerText${count}">${headerText}</p>`);
    $(`#headerText${count}`).addClass(`headerText col-2 mb-0 align-items-center d-flex flex-row-reverse input-group-addon border col-sm-4 col-md-2`);
}
export function createSearchInput(count) {
    $(`#searchForm${count}`).append(`<input id="${count}">`);
    $(`#${count}`).addClass(`form-control mb-0 rounded-right col-sm-8 col-md-10`);
    $(`#${count}`).attr({'type': 'text','autocomplete':'off'});
    $(`#${count}`).autocomplete({
        source: function(request, response) {
            $.ajax({
                url: "http://www.google.com/complete/search",
                data: {hl:'ja', client:'firefox', q: request.term},
                dataType: "jsonp",
                type: "GET",
                success :function(data) {
                    response(data[1]);
                }
            });
        },
        autoFocus: true,
        delay: 300,
        minLength: 2,
    });
}
export function createSearchDeleteButton(count) {
    $(`#searchForm${count}`).append(`<button id="deleteButton${count}">削除</button>`);
    $(`#deleteButton${count}`).addClass(`btn btn-outline-warning ml-1`);
    $(`#deleteButton${count}`).attr({'type':'button'});
    $(`#deleteButton${count}`).attr({'tabindex':'-1'});
    $(`#deleteButton${count}`).on('click', () => {
        console.log('delete word !!');
        //console.log(`delete:${$(`#deleteButton${count}`).id.substr(12, $(`#deleteButton${count}`).id.length)}`);
        //やってること:削除が押された内容をurlから消してリロード
        //消す単語の取得
        var deleteWord = encodeURI($(`headerText${count}`).text())
        console.log(`delete word:${deleteWord}`);
        //現在のクエリの取得
        var queries = location.search.split(',').pop();
        console.log(queries);

        var elements = new Array();
        for (var i = 0; i < queries.length; i++) {
            if (queries[i] == encodeURI($(`headerText${count}`).text())) {
                queries.splice(i, 1);
                break;
            }
        }
        var newQuery = "?,";
        queries.forEach((element) => {
            newQuery += element + ",";
        })
        newQuery = newQuery.slice(0, -1);
        //リロード
        location.search = newQuery;
    })
}