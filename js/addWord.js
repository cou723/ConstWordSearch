var button = document.getElementById('add-word-button');

function buttonClick(){
    var addWord = document.getElementById('add-word-input').value;
    if(addWord === ""){
        alert('単語を入力してください');
    }else{
        if(location.href.split(',').length == 1){
            window.location.href = `${location.href}?,${encodeURIComponent(addWord)}`;
        }else{
            window.location.href = `${location.href},${encodeURIComponent(addWord)}`;
        }

    }
}
