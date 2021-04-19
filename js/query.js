$('#url-text').text() = location.href.split('?,')[0];
console.log($('#url-text').text());

var queries = location.href.split(',');
queries.shift();
if (queries.length != 0) {
    $('#url-text').text($('#url-text').text() + '?');
}
console.log(queries);
queries.forEach((e) => {
    $('#url-text').text($('#url-text').text() + `,${e}`);
});

$('#copy-button').on('click', () => {
    console.log('push');
    // コピー内容を選択する.
    let range = document.createRange();
    range.selectNodeContents(urlLabel);
    let selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    // 選択したものをコピーする.
    document.execCommand('copy');
    // コピー内容の選択を解除する.
    selection.removeAllRanges();
});
