$(window).on("scroll", function() {
    if($(window).scrollTop()) {
        $('nav-wraper').addClass('black');
    }
    else {
        $('nav-wraper').removeClass('black');
    }
})