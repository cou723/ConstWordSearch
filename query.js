var urlLabel = document.getElementById("url");
urlLabel.innerText = location.href.split('?')[0];
console.log(location.href.split('?')[0]);
urlLabel.innerText += '?,';

var copyButton = document.getElementById('copy-button');
copyButton.onclick = () =>{
    console.log('push');
    urlLabel.select();
    document.execCommand("Copy");
}
