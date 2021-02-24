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
        var header = document.getElementById(`headerText${_i}`).innerText;
        var input = document.getElementById(`searchInput${_i}`).value;
        console.log(`headerText${_i}[${header}]`);
        console.log(`searchInput${_i}[${input}]`);
        var searchString = header + '+' + input;
        console.log(searchString);
        var query = `q=${searchString}&oq=${searchString}`;
        console.log(query);
        var url = 'https://www.google.com/search?' + query;
        console.log(url);
        //window.open(url, '_blank');
    };

}

//searchButton.onclick = () => {

    //console.log(searchInput.value);
    //var query;
    //var q = headerText + searchInput.value;
    //query = `q=${q}&oq=${q}`;
    //var url = 'https://www.google.com/search?' + query ;
    //console.log(url);
    //window.open(url, '_blank'); // 新しいタブを開き、ページを表示
//};

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
    //input生成
    var searchInput = document.createElement('input');
    searchInput.id = `searchInput${count}`;
    searchInput.type = 'text';
    searchDiv.appendChild(searchInput);
    //button生成
    var searchButton = document.createElement('button');
    searchButton.innerText = '検索';
    searchButton.id = `${count}`;
    searchDiv.appendChild(searchButton);
}
