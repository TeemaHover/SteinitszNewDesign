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
        disableOnInteraction: true
    },

    freeMode: true,
    speed: 10000,

    grabCursor: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    freeModeMomentum: false

})
$(".swiper").mouseenter(function() {
    console.log("mouse over");
    swiper.autoplay.stop();
});

$(".swiper").mouseleave(function() {
    console.log("mouse leave");
    swiper.autoplay.start();
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


})