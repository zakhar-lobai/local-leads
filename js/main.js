$('.owl-carousel').owlCarousel({
    loop:true,
    margin:80,
    nav:true,
    items: 1,
    lazyLoad:true
})

$('.slider__btn--prev').click(function () {
	owl.trigger('prev.owl.carousel');
});


$('.slider__btn--next').click(function () {
	owl.trigger('next.owl.carousel');
});
