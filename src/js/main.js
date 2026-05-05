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
document.addEventListener('DOMContentLoaded', () => {
    const social = document.querySelector('.e-services-social');
    const services = document.querySelector('.e-services');
    if (!social || !services) return;


    const ENTER_OFFSET = 120;

    function update() {
        const esTop = services.getBoundingClientRect().top;

        if (esTop <= ENTER_OFFSET) {
            social.classList.add('is-visible');
            social.classList.remove('no-hit');
        } else {
            social.classList.remove('is-visible');
            social.classList.add('no-hit');
        }
    }

    let ticking = false;
    const onScrollOrResize = () => {
        if (!ticking) {
            requestAnimationFrame(() => { update(); ticking = false; });
            ticking = true;
        }
    };

    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize);

    update();
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
        loop: false,
        margin: 20,
        nav: true,
        dots: false,
        autoplay: false,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        smartSpeed: 600,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,

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
//     const modal = document.getElementById("surveyModal");
//     const overlay = document.getElementById("surveyOverlay");
//     const modalClose = document.getElementById("modalClose");
//     const toggle = document.getElementById("surveyToggle");

//     // 🔹 ilk açılış
//     setTimeout(() => {
//         openModal();
//     }, 500);

//     function openModal() {
//         modal.classList.remove("closing");
//         modal.style.transform = "";

//         modal.classList.add("active");
//         overlay.classList.add("active");

//         toggle.classList.remove("visible");
//     }

//     function closeModal() {
//         modal.classList.add("closing");

//         setTimeout(() => {
//             modal.classList.remove("active", "closing");
//             overlay.classList.remove("active");

//             toggle.classList.add("visible");
//         }, 400);
//     }

//     // ❌ close
//     modalClose.addEventListener("click", closeModal);
//     overlay.addEventListener("click", closeModal);

//     // 🔁 toggle → AÇ
//     toggle.addEventListener("click", () => {
//         openModal();
//     });
// });

// document.addEventListener("DOMContentLoaded", function () {
//     const modal = document.getElementById("surveyModal");
//     const overlay = document.getElementById("surveyOverlay");
//     const modalClose = document.getElementById("modalClose");
//     const toggle = document.getElementById("surveyToggle");

//     function openModal() {
//         modal.classList.remove("closing");
//         modal.classList.add("active");
//         overlay.classList.add("active");

//         toggle.classList.remove("visible");
//     }

//   function closeModal() {
//     modal.classList.add("closing");

//     // 🔥 toggle anim effect (modal gedərkən “çıxırmış kimi” hiss)
//     toggle.classList.add("pop");

//     setTimeout(() => {
//         toggle.classList.remove("pop");
//     }, 300);

//     setTimeout(() => {
//         modal.classList.remove("active", "closing");
//         overlay.classList.remove("active");

//         toggle.classList.add("visible");
//     }, 750); // modal animasiya ilə eyni olmalıdır
// }

//     // initial open
//     setTimeout(openModal, 500);

//     modalClose.addEventListener("click", closeModal);
//     overlay.addEventListener("click", closeModal);

//     toggle.addEventListener("click", function () {
//         openModal();
//     });
// });

// // survey result
// document.addEventListener("DOMContentLoaded", function () {
//     const modal = document.getElementById("surveyModal");
//     const overlay = document.getElementById("surveyOverlay");
//     const modalClose = document.getElementById("modalClose");
//     const toggle = document.getElementById("surveyToggle");

//     function openModal() {
//         modal.classList.remove("closing");
//         modal.classList.add("active");
//         overlay.classList.add("active");
//         toggle.classList.remove("visible");
//     }

//     function closeModal() {
//         modal.classList.add("closing");

//         toggle.classList.add("pop");

//         setTimeout(() => {
//             toggle.classList.remove("pop");
//         }, 300);

//         setTimeout(() => {
//             modal.classList.remove("active", "closing");
//             overlay.classList.remove("active");
//             toggle.classList.add("visible");
//         }, 750);
//     }

//     setTimeout(openModal, 500);

//     modalClose.addEventListener("click", closeModal);
//     overlay.addEventListener("click", closeModal);
//     toggle.addEventListener("click", openModal);

//     // =========================
//     // ✅ SURVEY RESULT LOGIC
//     // =========================

//     const voteBtn = modal.querySelector(".vote-btn");
//     const resultBtn = modal.querySelector(".result-btn");
//     const surveyContent = modal.querySelector(".survey-content");
//     const surveyResults = document.getElementById("surveyResults");
//     const radios = modal.querySelectorAll('input[name="q1"]');
//     const backBtn = document.getElementById("backToVote");

//     voteBtn.disabled = true;

//     radios.forEach(radio => {
//         radio.addEventListener("change", () => {
//             voteBtn.disabled = false;
//         });
//     });

//     voteBtn.addEventListener("click", () => {
//         surveyContent.style.display = "none";
//         surveyResults.style.display = "flex";
//     });

//     resultBtn.addEventListener("click", () => {
//         surveyContent.style.display = "none";
//         surveyResults.style.display = "flex";
//     });

//     backBtn.addEventListener("click", () => {
//         surveyResults.style.display = "none";
//         surveyContent.style.display = "flex";
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("surveyModal");
    const overlay = document.getElementById("surveyOverlay");
    const modalClose = document.getElementById("modalClose");
    const toggle = document.getElementById("surveyToggle");

    function openModal() {
        modal.classList.remove("closing");
        modal.classList.add("active");
        overlay.classList.add("active");
        toggle.classList.remove("visible");
    }

    function closeModal() {
        modal.classList.add("closing");

        toggle.classList.add("pop");

        setTimeout(() => {
            toggle.classList.remove("pop");
        }, 300);

        setTimeout(() => {
            modal.classList.remove("active", "closing");
            overlay.classList.remove("active");
            toggle.classList.add("visible");
        }, 750);
    }

    setTimeout(openModal, 500);

    modalClose.addEventListener("click", closeModal);
    overlay.addEventListener("click", closeModal);
    toggle.addEventListener("click", openModal);

    // =========================
    // ✅ SURVEY RESULT LOGIC (FIXED)
    // =========================

    const voteBtn = modal.querySelector(".vote-btn");
    const resultBtn = modal.querySelector(".result-btn");
    const surveyContent = modal.querySelector(".survey-content");
    const surveyResults = document.getElementById("surveyResults");
    const radios = modal.querySelectorAll('input[name="q1_modal"]');
    const backBtn = document.getElementById("backToVote");

    // əvvəlcə deaktiv
    voteBtn.disabled = true;

    // radio seçiləndə aktivləşsin
    radios.forEach(radio => {
        radio.addEventListener("change", () => {
            voteBtn.disabled = false;
        });
    });

    // Səs ver
    voteBtn.addEventListener("click", () => {
        surveyContent.style.display = "none";
        surveyResults.style.display = "flex";
    });

    // Nəticələr
    resultBtn.addEventListener("click", () => {
        surveyContent.style.display = "none";
        surveyResults.style.display = "flex";
    });

    // Geri
    backBtn.addEventListener("click", () => {
        surveyResults.style.display = "none";
        surveyContent.style.display = "flex";
    });
});