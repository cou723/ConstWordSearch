var button = document.getElementById('add-word-button');

function buttonClick(){
    var addWord = document.getElementById('add-word-input').value;
    if(addWord === ""){
        alert('単語を入力してください');
    }else{
        console.log(`${addWord}:${encodeURIComponent(addWord)}`);
        window.location.href = `${location.href},${encodeURIComponent(addWord)}`;
    }
}
