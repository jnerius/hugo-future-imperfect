$(function() {
    $(document).ready(function() {
        var p = getUrlParameter("p");   
        if (! p.endsWith("index.html")) {
            if (p.endsWith("/")) {
                p = p + "index.html";
            } else {
                p = p + "/index.html";
            }
        }
        $.get('/api/x_snc_devblog/v1/vfs/getCount?p=' + p , 
            function(response) {
                $('#read-count').html("Read Count: " + response.result.count); 
            }
        ); 
    });
})

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};