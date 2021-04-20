function buttonClick(){
    if($('#add-word-input').val() === ""){
        alert('単語を入力してください');
    }else{
        if(location.href.split(',').length == 1){
            window.location.href = `${location.href}?,${encodeURIComponent($('#add-word-input').val())}`;
        }else{
            window.location.href = `${location.href},${encodeURIComponent($('#add-word-input').val())}`;
        }
    }
}
