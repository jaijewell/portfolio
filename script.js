$('a').smoothScroll({
    offset: 100,
    autoFocus: false
});

$(document).ready(function () {
    $('.hamburger').on('click', function () {
        $('.siteNav').toggleClass('show');
    });

    $('li').on('click', function () {
        $('.siteNav').toggleClass('hide');
    })

    $('.exitResponsive').on('click', function () {
        $('.siteNav').toggleClass('show');
    });
});