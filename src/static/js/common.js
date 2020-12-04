$(document).ready(function () {
    $('.burger').click(function () {
        $(this).toggleClass('is-active')
        $('.dropdown').toggleClass('is-active')
    })

    var cardSlider = new Swiper('.cards-gallery', {
        slidesPerView: 2,
        spaceBetween: 0,
        loop: true,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.cards-wrap__next',
            prevEl: '.cards-wrap__prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            1279: {
                slidesPerView: 1,
                spaceBetween: 20,
            }
        }
    })
});
