export var dataReturnProcess = function dataReturnProcess(){
    $('#url-text').text(location.href.split('?,')[0]);
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
}
