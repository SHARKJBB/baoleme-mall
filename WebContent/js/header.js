$(function () {
    $('.menu_list').mousemove(function () {
        $(this).find('.i-list').show();
        $(this).find('h3').addClass('hover');
    });
    $('.menu_list').mouseleave(function () {
        $(this).find('.i-list').hide();
        $(this).find('h3').removeClass('hover');
    });
});