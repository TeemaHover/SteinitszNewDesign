AOS.init();

function showMenu() {
    var element = document.getElementById("navList");
    element.classList.toggle("open");
}

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() > $(window).height()) {
            $(".navigation").css({ "background-color": "black" });
        } else {
            $(".navigation").css({ "background-color": "transparent" });
        }

    })
})

$(function() {
    $(document).scroll(function() {
        var $nav = $(".navigation");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

$(function() {
    "use strict";

    $(".enviromentBox img").click(function() {
        var $src = $(this).attr("src");
        $(".show").fadeIn();
        $(".img-show img").attr("src", $src);
    });

    $("span, .overlay").click(function() {
        $(".show").fadeOut();
    });

});