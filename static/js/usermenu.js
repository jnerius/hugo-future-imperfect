$(function() {
    $(document).ready(function() {

        $('.current-user').click(function(e) {
            e.stopPropagation();
            var menu = $('.user-menu ul'); 
            menu.toggleClass('menu-hidden');

            $('body').on('click', function() {
                menu.attr('class', 'menu-hidden');
            });
        });

        $('.logout').click(function() {
            $.get('/logout.do', function(response) {
                var logoutURL = 'https://servicenowsignon.okta.com/login/signout?fromURI='; 
                logoutURL += 'https://devportalblog.service-now.com/app.do'; 
                window.location.href = logoutURL; 
            }); 
        });
        
        $.get('/getSession.do', function(response) {
            var displayName = response.display_name; 
            if (displayName == 'Guest') {
                $('.current-user').hide();
                $('.login').each(function() {
                    console.log('Showing...'); 
                    console.log($(this));
                    $(this).removeClass('menu-hidden');
                });
            } else {
                $('.current-user').html(displayName);
            }
        }); 
    });
})