(function() {
    $('#keyword').autocomplete({
        source: function(request, response) {
            $.ajax({
                url: "http://www.google.com/complete/search",
                data: {hl:'ja', client:'firefox', q: request.term},
                dataType: "jsonp",
                type: "GET",
                success :function(data) {
                    response(data[1]);
                }
            });
        },
        autoFocus: true,
        delay: 300,
        minLength: 2,
    });
});
