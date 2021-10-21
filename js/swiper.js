const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',

    slidesPerView: 4,
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