(function ($) {
    ("use strict");

    let counter = $(".mavo-counter"),
        closeForm = $(".close-form"),
        mobileIcon = $(".mavo-mobile-icon"),
        searchIcon = $(".header-top-search");

    searchIcon.on("click", function (e) {
        e.preventDefault();
        let $this = $(this),
            searchForm = $(".mavo-header-search-form");
            closeOnBgClick: false,
        searchForm.addClass("active-form");
    });

    closeForm.on("click", function (e) {
        e.preventDefault();
        let $this = $(this);

        $this.closest(".mavo-header-search-form").removeClass("active-form");
    });

    mobileIcon.on("click", function (e) {
        e.preventDefault();
        $(this).toggleClass("open");
        $("#edumint_main_menu").slideToggle();
    });

    $(".mavo-main-menu li.menu-item-has-children").on("click", function (e) {
        e.stopPropagation();
        let thisElement = $(e.target);
        if (!$(thisElement).hasClass("menu-item-has-children")) {
            return;
        }
        thisElement.find("> .sub-menu > li").fadeToggle();
        thisElement.find("> .sub-menu").slideToggle();
        thisElement.toggleClass("menu-expanded");
    });

    // mavo banner -1

    var mavoBanner1 = new Swiper(".mavoBanner1", {
        speed: 2000,
        slidesPerView: 1,
        effect: "fade",
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        loop: true,
        autoplay: {
            delay: 8000,
        },
    });

    // mavo product

    var mavoProduct1 = new Swiper(".mavoProduct1", {
        speed: 1000,
        slidesPerView: 4,
        spaceBetween: 30,
        grabCursor: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 4,
            },
            1360: {
                slidesPerView: 4,
            },
            1199: {
                slidesPerView: 3,
            },
        },
    });

    var mavoProduct2 = new Swiper(".mavoProduct2", {
        speed: 1000,
        slidesPerView: 5,
        spaceBetween: 30,
        grabCursor: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
            },
            1360: {
                slidesPerView: 5,
            },
            1199: {
                slidesPerView: 4,
            },
        },
    });

    var mavoProduct4 = new Swiper(".mavoProduct4", {
        speed: 1000,
        slidesPerView: 5,
        spaceBetween: 30,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
            1360: {
                slidesPerView: 5,
            },
            1199: {
                slidesPerView: 4,
            },
        },
    });

    var mavoProduct5 = new Swiper(".mavoProduct5", {
        speed: 1000,
        slidesPerView: 5,
        spaceBetween: 30,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
            },
            1360: {
                slidesPerView: 4,
            },
            1680: {
                slidesPerView: 5,
            },
            1199: {
                slidesPerView: 4,
            },
        },
    });

    var mavoProduct5 = new Swiper(".mavoGallery", {
        speed: 1000,
        slidesPerView: 9,
        spaceBetween: 10,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 4,
            },
            1024: {
                slidesPerView: 5,
            },
            1360: {
                slidesPerView: 8,
            },
            1199: {
                slidesPerView: 6,
            },
        },
    });

    var mavoProduct5 = new Swiper(".mavoMeta", {
        speed: 1000,
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
            },
            1360: {
                slidesPerView: 5,
            },
            1199: {
                slidesPerView: 4,
            },
        },
    });

    var productStyle5 = new Swiper(".productStyle5", {
        speed: 1000,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    // mavo Testimonial
    var mavoTestimonial = new Swiper(".mavoTestimonial", {
        speed: 1000,
        effect: "fade",
        fadeEffect: {
            crossFade: true,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    // mavo testimonial
    var mavoTestimonial2 = new Swiper(".mavoTestimonial2", {
        effect: "fade",
        fadeEffect: {
            crossFade: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    var mavoTestimonial5 = new Swiper(".mavoTestimonial5", {
        effect: "fade",
        fadeEffect: {
            crossFade: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    // mavo posts-slider
    var postSlider = new Swiper(".postSlider", {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 4,
            },
            1360: {
                slidesPerView: 4,
            },
            1199: {
                slidesPerView: 3,
            },
        },
    });

    // Aboout

    var aboutProduct1 = new Swiper(".aboutProduct1", {
        speed: 1000,
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
            },
            1360: {
                slidesPerView: 5,
            },
            1199: {
                slidesPerView: 4,
            },
        },
    });

    var swiper = new Swiper(".blogSwiper1", {
        speed: 1000,
        slidesPerView: 2,
        spaceBetween: 30,
        slidesPerGroup: 2,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });

    // gallery-thumbs

    var slider = new Swiper(".gallery-slider", {
        slidesPerView: 1,
        centeredSlides: true,
        loop: true,
        loopedSlides: 6,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    var thumbs = new Swiper(".gallery-thumbs", {
        slidesPerView: "auto",
        spaceBetween: 10,
        centeredSlides: true,
        loop: true,
        slideToClickedSlide: true,
    });

    // ====================================
    var galleryThumbs = new Swiper(".products-layout-2-gallery-thumbs", {
        centeredSlides: true,
        centeredSlidesBounds: true,
        slidesPerView: 3,
        watchOverflow: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        direction: "vertical",
    });

    var galleryMain = new Swiper(".products-layout-2-gallery-main", {
        watchOverflow: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        preventInteractionOnTransition: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        effect: "fade",
        fadeEffect: {
            crossFade: true,
        },
        thumbs: {
            swiper: galleryThumbs,
        },
    });
    // counterUp
    galleryMain.on("slideChangeTransitionStart", function () {
        galleryThumbs.slideTo(galleryMain.activeIndex);
    });

    galleryThumbs.on("transitionStart", function () {
        galleryMain.slideTo(galleryThumbs.activeIndex);
    });

    $(document).ready(function () {
        if (counter.length) {
            counter.counterUp({
                delay: 10,
                time: 1000,
            });
        }
    });
    //canvas sidebar
    var canva_expander = $("#canva_expander");
    if (canva_expander.length) {
        $("#canva_expander, #canva_close, #sc-overlay-bg2").on("click", function (e) {
            e.preventDefault();
            $("body").toggleClass("canvas_expanded");
        });
    }

    // Cart Quantity Js
    $(".minus").click(function () {
        var $input = $(this).parent().find("input");
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $(".plus").click(function () {
        var $input = $(this).parent().find("input");
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
    // magnific-popup
    $(".video-play-btn").magnificPopup({
        type: "iframe",
        removalDelay: 260,
        callbacks: {
            beforeOpen: function () {
                // just a hack that adds mfp-anim class to markup
                this.st.image.markup = this.st.image.markup.replace("mfp-figure", "mfp-figure mfp-with-anim");
                this.st.mainClass = this.st.el.attr("data-effect");
            },
        },
    });

    // mavo-counter
    $(document).ready(function () {
        // ========== odometer initialize==========
        $(".odometer").appear(function (e) {
            var odo = $(".odometer");
            odo.each(function () {
                var countNumber = $(this).attr("data-count");
                $(this).html(countNumber);
            });
        });
    });

    // Smooth About
    if ($(".smoothScroll").length) {
        $(".smoothScroll").on(" click ", function () {
            $("html, body").animate(
                {
                    scrollTop: $("#mavoo-scroll").offset().top,
                },
                1000
            );
        });
    }

    // mavo-filter
    const rangeInput = document.querySelectorAll(".range-input input"),
        priceInput = document.querySelectorAll(".price-input input"),
        range = document.querySelector(".slider .progress");
    let priceGap = 1000;

    priceInput.forEach((input) => {
        input.addEventListener("input", (e) => {
            let minPrice = parseInt(priceInput[0].value),
                maxPrice = parseInt(priceInput[1].value);

            if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
                if (e.target.className === "input-min") {
                    rangeInput[0].value = minPrice;
                    range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
                } else {
                    rangeInput[1].value = maxPrice;
                    range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
                }
            }
        });
    });

    rangeInput.forEach((input) => {
        input.addEventListener("input", (e) => {
            let minVal = parseInt(rangeInput[0].value),
                maxVal = parseInt(rangeInput[1].value);

            if (maxVal - minVal < priceGap) {
                if (e.target.className === "range-min") {
                    rangeInput[0].value = maxVal - priceGap;
                } else {
                    rangeInput[1].value = minVal + priceGap;
                }
            } else {
                priceInput[0].value = minVal;
                priceInput[1].value = maxVal;
                range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
                range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
            }
        });
    });

    // image loaded portfolio init
    var gridfilter = $(".grid");
    if (gridfilter.length) {
        $(".grid").imagesLoaded(function () {
            $(".gridFilter").on("click", "button", function () {
                var filterValue = $(this).attr("data-filter");
                $grid.isotope({
                    filter: filterValue,
                });
            });
            var $grid = $(".grid").isotope({
                itemSelector: ".grid-item",
                percentPosition: true,
                masonry: {
                    columnWidth: ".grid-item",
                },
            });
        });
    }

    // project Filter
    if ($(".gridFilter button").length) {
        var projectfiler = $(".gridFilter button");
        if (projectfiler.length) {
            $(".gridFilter button").on("click", function (event) {
                $(this).siblings(".active").removeClass("active");
                $(this).addClass("active");
                event.preventDefault();
            });
        }
    }

    $(".mavo-gallery-zoom").magnificPopup({
        type: "image",
        gallery: {
            enabled: true,
        },
        removalDelay: 500, //delay removal by X to allow out-animation
        callbacks: {
            beforeOpen: function () {
                // just a hack that adds mfp-anim class to markup
                this.st.image.markup = this.st.image.markup.replace("mfp-figure", "mfp-figure mfp-with-anim");
                this.st.mainClass = this.st.el.attr("data-effect");
            },
        },
        closeOnContentClick: true,
        midClick: true,
    });

    // Sal Animation
    sal({
        threshold: 0.1,
        once: true,
    });

    /******** Mobile Menu Start ********/
    $(".mobile-navbar-menu a").each(function () {
        var href = $(this).attr("href");
        if ((href = "#")) {
            $(this).addClass("hash");
        } else {
            $(this).removeClass("hash");
        }
    });

    $.fn.menumaker = function (options) {
        var mobile_menu = $(this),
            settings = $.extend(
                {
                    format: "dropdown",
                    sticky: false,
                },
                options
            );

        return this.each(function () {
            mobile_menu.find("li ul").parent().addClass("has-sub");
            var multiTg = function () {
                mobile_menu.find(".has-sub").prepend('<span class="submenu-button"><em></em></span>');
                mobile_menu.find(".hash").parent().addClass("hash-has-sub");
                mobile_menu.find(".submenu-button").on("click", function () {
                    $(this).toggleClass("submenu-opened");
                    if ($(this).siblings("ul").hasClass("open-sub")) {
                        $(this).siblings("ul").removeClass("open-sub").hide("fadeIn");
                        $(this).siblings("ul").hide("fadeIn");
                    } else {
                        $(this).siblings("ul").addClass("open-sub").hide("fadeIn");
                        $(this).siblings("ul").slideToggle().show("fadeIn");
                    }
                });
            };

            if (settings.format === "multitoggle") multiTg();
            else mobile_menu.addClass("dropdown");
            if (settings.sticky === true) mobile_menu.css("position", "fixed");
            var resizeFix = function () {
                if ($(window).width() > 991) {
                    mobile_menu.find("ul").show("fadeIn");
                    mobile_menu.find("ul.sub-menu").hide("fadeIn");
                }
            };
            resizeFix();
            return $(window).on("resize", resizeFix);
        });
    };

    $(document).ready(function () {
        $("#mobile-navbar-menu").menumaker({
            format: "multitoggle",
        });
    });

    new WOW().init();
})(jQuery);
