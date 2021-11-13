const Homeswiper = new Swiper('.Homeswiper', {

    direction: 'horizontal',
    loop: true,

    autoplay: {
        delay: 2000,
    },

    pagination: {
        el: '.swiper-pagination',
    },


});

document.getElementById("Homeswiper").onmouseover = function() { mouseOver() };
document.getElementById("Homeswiper").onmouseout = function() { mouseOut() };

const aboutsiper = new Swiper('.swiperAbout', {
    direction: 'horizontal',
    slidesPerView: 1,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

})


const swiper = new Swiper('.swiper', {

    direction: 'horizontal',

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


    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

document.getElementById("swiper").onmouseover = function() { mouseOver() };
document.getElementById("swiper").onmouseout = function() { mouseOut() };

function mouseOver() {
    swiper.autoplay.stop();
    Homeswiper.autoplay.stop();
}

function mouseOut() {
    swiper.autoplay.start();
    Homeswiper.autoplay.start();
}

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