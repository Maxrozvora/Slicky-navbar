$(function() {    
    $(window).on('scroll', function() {
        if($(window).scrollTop()) {
            $('.nav-bar').addClass('black');
        }else {
            $('.nav-bar').removeClass('black')
        }
    })
});