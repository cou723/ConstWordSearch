/**自分的新要素
 * bootsrap
 * クエリパラメータ
 */
//var headerText = document.getElementById("headerText").innerText;
//var searchInput = document.getElementById("input");
//var searchButton = document.getElementById("search");
var searchesArea = document.getElementById("searches");

//var headers = ["C#","JavaScript","minecraft"];
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
    console.log(`headerText${index}[${header}]`);
    console.log(`searchInput${index}[${input}]`);
    var searchString = header + " " + input;
    searchString = encodeURIComponent(searchString);
    console.log(searchString);
    var query = `q=${searchString}&oq=${searchString}`;
    console.log(query);
    var url = "https://www.google.com/search?" + query;
    console.log(url);
    window.open(url, "_blank");
}

function addSearchObj(headerText) {
    var count = searchesArea.children.length;
    console.log("call:addSearchObj:" + headerText);

    //div生成
    var searchDiv = document.createElement("div");
    searchDiv.id = `search${count}`;
    searchDiv.classList.add("row");
    searchesArea.appendChild(searchDiv);

    //form生成
    var searchForm = document.createElement("form");
    searchForm.id = `searchForm${count}`;
    searchForm.onsubmit = 'return false';
    searchForm.setAttribute('onsubmit', 'return false');
    searchForm.classList.add("p-0");
    //searchForm.classList.add("col-10");
    searchForm.classList.add("mb-2");
    searchForm.classList.add("input-group");
    searchDiv.appendChild(searchForm);

    //p生成
    var searchP = document.createElement("p");
    searchP.innerText = headerText;
    searchP.id = `headerText${count}`;
    searchP.classList.add("headerText");
    searchP.classList.add("col-2");
    searchP.classList.add("mb-0");
    searchP.classList.add("align-items-center");
    searchP.classList.add("d-flex");
    searchP.classList.add("flex-row-reverse");
    searchP.classList.add("input-group-addon");
    //searchP.classList.add("border-right-0");
    searchP.classList.add("border");
    searchP.classList.add("rounded-left");
    //searchP.classList.add("rounded-left");
    searchForm.appendChild(searchP);



    //input生成
    var searchInput = document.createElement("input");
    searchInput.id = `${count}`;
    searchInput.type = "text";
    searchInput.classList.add("form-control");
    searchInput.classList.add("mb-0");
    searchInput.classList.add("rounded-right");
    searchForm.appendChild(searchInput);

    /**
     *  <div class="input-group">
            <span class="input-group-addon">Text</span>
            <input id="msg" type="text" class="form-control" name="msg" placeholder="Additional Info">
        </div>
     */
}
