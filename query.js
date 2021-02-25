var urlLabel = document.getElementById("url");
urlLabel.innerText = location.href.split('?,')[0];
console.log(urlLabel.innerText);
urlLabel.innerText += '?';
var queries = location.href.split(',');
queries.shift();
console.log(queries);
queries.forEach((e)=>{
    urlLabel.innerText += `,${e}`;
});

var copyButton = document.getElementById('copy-button');
copyButton.onclick = () =>{
    console.log('push');
    urlLabel.select();
    document.execCommand("Copy");
}
