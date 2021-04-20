$('#copy-button').on('click', () => {
    console.log('push');
    // コピー内容を選択する.
    let range = document.createRange();
    range.selectNodeContents(document.getElementById('url-text'));
    let selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    // 選択したものをコピーする.
    document.execCommand('copy');
    // コピー内容の選択を解除する.
    selection.removeAllRanges();
});
