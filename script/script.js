$(document).ready(function() {
    $('.menu-toggle').click(function() {
        $(this).toggleClass('active');
        $('.menu').toggleClass('active');
    });
});