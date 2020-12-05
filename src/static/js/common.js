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

    $('.custom-select select').selectric()

    ymaps.ready(init);

    function init() {
        var center = [55.59113656911934, 37.88662649999996];
        var myMap = new ymaps.Map('placemap', {
            center: center,
            controls: [],
            zoom: 8
        }, {
            searchControlProvider: 'yandex#search'

        });

        myMap.behaviors.disable('scrollZoom');

        var myPlacemark = new ymaps.Placemark(center, {
            // Свойства.
            // Содержимое иконки, балуна и хинта.
            balloonContent: 'улица Ивана Франко, 4к4',
            hintContent: 'улица Ивана Франко, 4к4'
        }, {
            // Опции.
            iconLayout: 'default#image',
            // iconImageHref: 'img/map-ic.png',
            // iconImageSize: [42, 42]
            // preset: 'twirl#violetIcon'
        });

        myMap.geoObjects.add(myPlacemark);
    }

});
