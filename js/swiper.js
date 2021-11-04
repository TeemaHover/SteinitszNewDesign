const swiper = new Swiper('.swiper', {

    direction: 'horizontal',
    slidesPerView: 4,
    breakpoints: {

        300: {
            slidesPerView: 1,
            spaceBetween: 20
        },

        1000: {
            slidesPerView: 3,
            spaceBetween: 40
        },
        1400: {
            slidesPerView: 4,
            spaceBetween: 40
        },
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
const swiper2 = new Swiper('.swiperTeachers', {

    autoHeight: true,
    direction: 'vertical',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    freeMode: true,
    mousewheel: true,

});