//var headerText = document.getElementById('headerText').innerText;
//var searchInput = document.getElementById('input');
//var searchButton = document.getElementById('search');
var searchesArea = document.getElementById('searches');

var headers = ['C\#','JavaScript','minecraft'];
var buttons = new Array();
var i = 0;
headers.forEach(element => {

    addSearchObj(element);
    buttons.push(document.getElementById(i));
    i++;
});

console.log(buttons.length);
console.log(buttons);
for (let _i = 0; _i < buttons.length; _i++) {
    buttons[_i].onclick = () => {
        console.log('click');
        var header = document.getElementById(`headerText${_i}`).innerText;
        var input = document.getElementById(`searchInput${_i}`).value;
        console.log(`headerText${_i}[${header}]`);
        console.log(`searchInput${_i}[${input}]`);
        var searchString = header + '+' + input;
        searchString = encodeURI(searchString);
        console.log(searchString);
        var query = `q=${searchString}&oq=${searchString}`;
        console.log(query);
        var url = 'https://www.google.com/search?' + query;
        console.log(url);
        //window.open(url, '_blank');
    };

}

function addSearchObj(headerText) {
    var count = searchesArea.children.length;
    console.log('call:addSearchObj:' + headerText );
    //div生成
    var searchDiv = document.createElement('div');
    searchDiv.id = `search${count}`;
    searchesArea.appendChild(searchDiv);
    //p生成
    var searchP = document.createElement('p');
    searchP.innerText = headerText;
    searchP.id = `headerText${count}`;
    searchP.class = 'headerText';
    searchDiv.appendChild(searchP);
    //form生成
    var searchForm = document.createElement('form');
    searchForm.method = 'post';
    searchForm.id = `searchForm${count}`;
    searchForm.onsubmit = 'return false';
    searchDiv.appendChild(searchForm);
    //input生成
    var searchInput = document.createElement('input');
    searchInput.id = `searchInput${count}`;
    searchInput.type = 'text';
    searchForm.appendChild(searchInput);
    //button生成
    var searchButton = document.createElement('input');
    searchButton.value = '検索';
    searchButton.type = 'submit';
    searchButton.id = `${count}`;
    searchForm.appendChild(searchButton);
}
