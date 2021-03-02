/**自分的新要素
 * bootsrap
 * クエリパラメータ
 */
var searchesArea = document.getElementById("searches");

var queries = location.search.split(',');
queries.shift();
var inputs = new Array();
var i = 0;
queries.forEach(element => {

    addSearchObj(decodeURIComponent(element));
    inputs.push(document.getElementById(i));
    i++;
});

console.log(inputs.length);
console.log(inputs);
for (let _i = 0; _i < inputs.length; _i++) {
    console.log(_i);
    console.log(inputs[_i]);
    inputs[_i].addEventListener('keydown', (e) => {
        if (e.keyCode === 13) {
            console.log("click");
            Search(_i);
        }
    });
}

function Search(index) {
    var header = document.getElementById(`headerText${index}`).innerText;
    var input = document.getElementById(`${index}`).value;
    //console.log(`headerText${index}[${header}]`);
    //console.log(`searchInput${index}[${input}]`);
    var searchString = header + " " + input;
    searchString = encodeURIComponent(searchString);
    var query = `q=${searchString}&oq=${searchString}`;
    var url = "https://www.google.com/search?" + query;
    window.open(url, "_blank");
}

function addSearchObj(headerText) {
    var count = searchesArea.children.length;
    console.log("call:addSearchObj:" + headerText);
    //div生成
    var searchDiv = CreateDiv(count);
    searchesArea.appendChild(searchDiv);
    //form生成
    var searchForm = CreateForm(count);
    searchDiv.appendChild(searchForm);
    //p生成
    var searchP = CreateSearchP(headerText, count);
    searchForm.appendChild(searchP);
    //input生成
    var searchInput = CreateSearchInput(count);
    searchForm.appendChild(searchInput);
    //deleteButton作成
    var searchDeleteButton = CreateSearchDeleteButton(count);
    searchForm.appendChild(searchDeleteButton);

}

function CreateForm(count) {
    var searchForm = CreateElement("form", [`searchForm${count}`], ["p-0", "mb-2", "input-group"]);
    searchForm.onsubmit = 'return false';
    searchForm.setAttribute('onsubmit', 'return false');
    return searchForm;
}

function CreateDiv(count) {
    var searchDiv = CreateElement("div", [`search${count}`], ["row"]);
    return searchDiv;
}

function CreateSearchInput(count) {
    var searchInput = CreateElement("input", [`${count}`], ["form-control", "mb-0", "rounded-right", "col-sm-8", "col-md-10"]);
    searchInput.type = "text";
    AutocompleteInit();
    return searchInput
}

function CreateSearchP(headerText, count) {
    var searchP = CreateElement("p", [`headerText${count}`], ["headerText", "col-2", "mb-0", "align-items-center", "d-flex", "flex-row-reverse", "input-group-addon", "border", "col-sm-4", "col-md-2"]);
    searchP.innerText = headerText;
    return searchP;
}

function CreateSearchDeleteButton(count) {
    var searchDeleteButton = CreateElement("button", [`deleteButton${count}`], ["btn", "btn-outline-warning", "ml-1"]);
    searchDeleteButton.innerText = "削除";
    searchDeleteButton.onclick = () => {
        console.log(`delete:${searchDeleteButton.id.substr(12, searchDeleteButton.id.length)}`);
        /**方法1
         * q書き換え、リロード
         *
         */
        //書き換え
        var query = location.search.split(',');
        //console.log(query);
        query.shift();
        //console.log(query);
        for (var i = 0; i < query.length; i++) {
            if (query[i] == document.getElementById(`headerText${count}`).innerText) {
                query.splice(i,1);
                break;
            }
        }
        console.log(query);
        var newQuery = "?,";
        query.forEach((element)=>{
            newQuery += element + ",";
        })
        newQuery = newQuery.slice(0,-1);
        //リロード
        console.log(location.search);
        console.log(newQuery);
        location.search = newQuery;

    }
    return searchDeleteButton;
}

function CreateElement(tagName, idList, classList) {
    var element = document.createElement(tagName);
    idList.forEach((id) => {
        element.id = id;
    });
    classList.forEach((addClass) => {
        element.classList.add(addClass);
    });
    return element;
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
    console.log("log");
})
