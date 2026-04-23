document.addEventListener("DOMContentLoaded", function () {

    const searchIcon = document.querySelector(".search-icon");
    const searchBox = document.querySelector(".search-box");
    const input = document.querySelector(".search-box input");
    const clearIcon = document.querySelector(".clear-icon");
    searchIcon.addEventListener("click", function () {
        searchBox.classList.toggle("active");
        input.focus();
    });

    input.addEventListener("input", function () {
        if (input.value.trim().length > 0) {
            searchBox.classList.add("has-text");
        } else {
            searchBox.classList.remove("has-text");
        }
    });

    clearIcon.addEventListener("click", function () {
        input.value = "";
        searchBox.classList.remove("has-text");
        input.focus();
    });

    input.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            const query = input.value.trim();
            if (!query) return;

            console.log("Axtar:", query);

        }
    });

    document.querySelectorAll('.dropdown-toggle').forEach(function (dropdown) {
        dropdown.addEventListener('click', function (e) {
            if (window.innerWidth >= 992) {
                e.preventDefault();
            }
        });
    });

    const menu = document.querySelector(".menu-section");
    const header = document.querySelector(".header-img");

    function fixMenu() {
        const headerHeight = header.offsetHeight;

        if (window.scrollY >= headerHeight) {
            menu.classList.add("fixed");
            document.body.style.paddingTop = menu.offsetHeight + "px";
        } else {
            menu.classList.remove("fixed");
            document.body.style.paddingTop = "0px";
        }
    }

    window.addEventListener("scroll", fixMenu);
    window.addEventListener("resize", fixMenu);
});

$(document).ready(function () {

    $("#services-slider").owlCarousel({

        loop: true,
        margin: 20,
        nav: true,
        dots: false,

        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        smartSpeed: 600,

        navText: [
            "<img src='./src/img/arrowleft.svg'>",
            "<img src='./src/img/arrowright.svg'>"
        ],

        responsive: {
            0: { items: 1 },
            480: { items: 2 },
            768: { items: 2 },
            992: { items: 3 },
            1200: { items: 4 },
            1400: { items: 4 }
        }

    });

});

// news
$(document).ready(function () {
    $("#news-slider").owlCarousel({

        loop: true,
        margin: 20,
        nav: false,
        dots: false,

        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        smartSpeed: 600,
        responsive: {
            0: { items: 1 },
            480: { items: 2 },
            768: { items: 2 },
            992: { items: 3 },
            1200: { items: 4 },
            1400: { items: 4 }
        }
    });
});

// useful links
$(document).ready(function () {
    $("#useful-links").owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        smartSpeed: 600,

        responsive: {
            0: { items: 1 },
            480: { items: 2 },
            768: { items: 2 },
            992: { items: 3 },
            1200: { items: 4 },
            1400: { items: 4 }
        }
    });
});
// single news
jQuery("#carousel").owlCarousel({
    autoplay: true,
    rewind: false,
    margin: 0,
    loop: true,

    animateOut: 'fadeOut',
    animateIn: 'fadeIn',

    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 10000,
    smartSpeed: 2500,
    nav: true,
    navText: [
        '<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path  fill="#306279" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>',
        '<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path  fill="#306279" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>'],
    responsive: {
        0: {
            items: 1
        },

        600: {
            items: 1
        },

        1024: {
            items: 1
        },

        1366: {
            items: 1
        }
    }
});

$(document).ready(function () {

    $("#transitions-slider").owlCarousel({

        loop: true,
        margin: 20,
        nav: false,
        dots: false,

        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        smartSpeed: 600,

        navText: [
            "<img src='./src/img/arrowleft.svg'>",
            "<img src='./src/img/arrowright.svg'>"
        ],

        responsive: {
            0: { items: 1 },
            480: { items: 2 },
            768: { items: 2 },
            992: { items: 3 },
            1200: { items: 3 },
            1400: { items: 3 }
        }

    });

});

// back to top
(function ($) {
    "use strict";

    $(".switch").on("click", function () {
        if ($("body").hasClass("light")) {
            $("body").removeClass("light");
            $(".switch").removeClass("switched");
        } else {
            $("body").addClass("light");
            $(".switch").addClass("switched");
        }
    });

    $(document).ready(function () {

        var progressPath = document.querySelector(".progress-wrap path");

        if (progressPath) {
            var pathLength = progressPath.getTotalLength();
            progressPath.style.transition = progressPath.style.WebkitTransition = "none";
            progressPath.style.strokeDasharray = pathLength + " " + pathLength;
            progressPath.style.strokeDashoffset = pathLength;
            progressPath.getBoundingClientRect();
            progressPath.style.transition =
                progressPath.style.WebkitTransition = "stroke-dashoffset 10ms linear";
            var updateProgress = function () {
                var scroll = $(window).scrollTop();
                var height = $(document).height() - $(window).height();
                var progress = pathLength - (scroll * pathLength) / height;
                progressPath.style.strokeDashoffset = progress;
            };
            updateProgress();
            $(window).scroll(updateProgress);
        }

        var offset = 50;
        var duration = 550;

        $(window).on("scroll", function () {
            if ($(this).scrollTop() > offset) {
                $(".progress-wrap").addClass("active-progress");
            } else {
                $(".progress-wrap").removeClass("active-progress");
            }
        });

        $(".progress-wrap").on("click", function (event) {
            event.preventDefault();
            $("html, body").animate({ scrollTop: 0 }, duration);
            return false;
        });

    });

})(jQuery);

// sorgu
// document.addEventListener("DOMContentLoaded", function () {
//   const panel = document.getElementById("surveyPanel");
//   const toggle = document.getElementById("surveyToggle");
//   const closeBtn = document.getElementById("surveyClose");

//   // İlk açılış (delay ilə daha smooth)
//   setTimeout(() => {
//     panel.classList.add("active");
//     toggle.classList.add("active");
//   }, 800);

//   // Toggle klik
//   toggle.addEventListener("click", () => {
//     panel.classList.toggle("active");
//     toggle.classList.toggle("active");
//   });

//   // Close klik
//   closeBtn.addEventListener("click", () => {
//     panel.classList.remove("active");
//     toggle.classList.remove("active");
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("surveyModal");
    const overlay = document.getElementById("surveyOverlay");
    const modalClose = document.getElementById("modalClose");

    const panel = document.getElementById("surveyPanel");
    const toggle = document.getElementById("surveyToggle");
    const panelClose = document.getElementById("surveyClose");

    // ✅ İlk giriş → modal açılır
    setTimeout(() => {
        modal.classList.add("active");
        overlay.classList.add("active");
    }, 500);

    // ❌ Modal bağlanır → sağ panel aktiv olur
    modalClose.addEventListener("click", () => {
        modal.classList.remove("active");
        overlay.classList.remove("active");

        // sağ panelə keçid
        panel.classList.add("active");
        toggle.classList.add("active");
    });

    // Overlay klik də bağlasın
    overlay.addEventListener("click", () => {
        modalClose.click();
    });

    // 👉 Toggle ( < )
    toggle.addEventListener("click", () => {
        panel.classList.toggle("active");
        toggle.classList.toggle("active");
    });

    // ❌ Panel close
    panelClose.addEventListener("click", () => {
        panel.classList.remove("active");
        toggle.classList.remove("active");
    });
});