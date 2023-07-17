import '../../node_modules/swiper/swiper-bundle.min.js'

$(document).ready(function () {


    // pop-ups
    $(".popup-triger").on("click", function () {
        const target = $(this).data("target");

        $(`#${target}`).stop().fadeIn(300).addClass("visible");
        $("body").addClass("block-scroll");
    });

    $(".close-popup").on("click", function () {
        $(".pop-up").stop().fadeOut(300).removeClass("visible");
        $("body").removeClass("block-scroll");
    });

});