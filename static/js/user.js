$(function() {
    $(document).ready(function() {

        $('#current-user').click(function() {
            console.log('enabling menu');
            var menu = $('#user-menu ul'); 
            if (menu.hasClass('menu-hidden')) {
                menu.removeClass('menu-hidden'); 
            } else {
                menu.addClass('menu-hidden'); 
            }
        });

        $('#logout').click(function() {
            $.get('/logout.do', function(response) {
                var logoutURL = 'https://servicenowsignon.okta.com/login/signout?fromURI='; 
                logoutURL += 'https://devportalblog.service-now.com/app.do'; 
                window.location.href = logoutURL; 
            }); 
        });
        
        $.get('/getSession.do', function(response) {
            $('#current-user').html(response.display_name); 
        }); 
    });
})