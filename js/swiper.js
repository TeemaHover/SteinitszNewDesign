const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 4,
    breakpoints: {
        // when window width is >= 320px
        300: {
            slidesPerView: 1,
            spaceBetween: 20
        },

        // when window width is >= 640px
        600: {
            slidesPerView: 4,
            spaceBetween: 40
        }
    },
    autoplay: {
        delay: 2000,
    },

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


    scrollbar: {
        el: '.swiper-scrollbar',
    },
});