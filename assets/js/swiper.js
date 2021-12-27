const Homeswiper = new Swiper('.Homeswiper', {

    direction: 'horizontal',
    loop: true,

    autoplay: {
        delay: 2000,
    },
    speed: 2000,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },

    pagination: {
        el: '.swiper-pagination',
    },


})


const aboutswiper = new Swiper('.swiperAbout', {
    direction: 'horizontal',
    slidesPerView: 1,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

})


const swiper = new Swiper('.swiper', {
    loop: true,
    direction: 'horizontal',

    breakpoints: {

        300: {
            slidesPerView: 1,
            spaceBetween: 20
        },

        900: {
            slidesPerView: 3,
            spaceBetween: 40
        },
        1400: {
            slidesPerView: 4,
            spaceBetween: 40
        },
    },
    autoplay: {
        delay: 1,
    },

    speed: 20000,

    grabCursor: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

})

const swiper2 = new Swiper('.swiperTeachers', {

    autoHeight: true,
    direction: 'vertical',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    freeMode: true,
    mousewheel: true,


})