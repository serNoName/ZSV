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

    //lazyload
    function lazyLoadImages() {
        const lazyloadImages = document.querySelectorAll("img.lazyload");

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (
                    entry.isIntersecting &&
                    entry.target.classList.contains("lazyload")
                ) {
                    entry.target.src = entry.target.dataset.src;
                    entry.target.classList.remove("lazyload");
                    observer.unobserve(entry.target);
                }
            });
        });

        lazyloadImages.forEach((image) => {
            observer.observe(image);
        });
    }
    function debounce(func, wait) {
        let timeout;
        return function () {
            const context = this;
            const args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                func.apply(context, args);
            }, wait);
        };
    }

    $(window).ready(debounce(lazyLoadImages, 0));
    $(window).scroll(debounce(lazyLoadImages, 0));

    //accordions
    $(".faq__btn").on("click", function (e) {
        const parent = $(this).parent();
        e.preventDefault();

        parent
            .toggleClass("active")
            .find(".faq__content")
            .stop()
            .slideToggle(300);
    });

    //tabs
    $("[data-target-tab]").on("click", function () {
        const target = $(`[data-tab="${$(this).data("target-tab")}"]`);

        $("[data-target-tab]").removeClass("active");
        $(this).addClass("active");

        $("[data-tab]").hide().removeClass("active");
        target.show().addClass("active");
    });

    //input
    $(".input__field").on("focusin", function () {
        const parent = $(this).parents(".input");

        parent.addClass("focus").addClass("active");
    });
    $(".input__field").on("focusout", function () {
        const parent = $(this).parents(".input");

        if (!$(this).val().length) parent.removeClass("focus");
        parent.removeClass("active")
    });

    $(".input__field").each(function () {
        if($(this).val().length) $(this).parents('.input').addClass('focus');
    });
});
// init Swiper
if ($(".splide").length) {
    new Splide(".splide", {
        type: "loop",
        perPage: 1,
        speed: 1000,
        gap: "32px",
        autoplay: true,
        interval: 4000,
        lazyLoad: "nearby",
        arrowPath:
            "M2 13.4932C0.89543 13.4932 0 14.3886 0 15.4932C0 16.5977 0.89543 17.4932 2 17.4932V13.4932ZM67.4142 16.9074C68.1953 16.1263 68.1953 14.86 67.4142 14.079L54.6863 1.35103C53.9052 0.56998 52.6389 0.56998 51.8579 1.35103C51.0768 2.13208 51.0768 3.39841 51.8579 4.17946L63.1716 15.4932L51.8579 26.8069C51.0768 27.5879 51.0768 28.8543 51.8579 29.6353C52.6389 30.4163 53.9052 30.4163 54.6863 29.6353L67.4142 16.9074ZM2 17.4932H66V13.4932H2V17.4932Z",
        breakpoints: {
            640: {
                perPage: 1,
            },
        },
    }).mount();
}
