/* ====================================
   Onload functions
   ==================================== */

$(function() {
    $('.slider ul').bxSlider({
        pager: 0,
        nextText: '',
        prevText: '',
        nextSelector: '.slider-next',
        prevSelector: '.slider-prev',
        minSlides: 2,
        maxSlides: 2,
        slideWidth: 490,
        slideMargin: 20,
        moveSlides: 1
    });
});