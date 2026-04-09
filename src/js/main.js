$(() => {


    function fixMenu() {
        let imgHeight = $(".header-img").height() + $(".header-info").height();
        if ($(window).scrollTop() > imgHeight) {
            $(".menu-section").css({ position: "fixed", top: "0" });
            $(".navbar").css({ "background-color": "rgba(225, 225, 225, 1)" });
            $(".dropdown-menu").css({ "background-color": "rgba(25, 106, 180, 1)" });
            $(".form-section").css({ "background-color": "rgba(20, 52, 99, .7)" });
        } else {
            $(".menu-section").css({ position: "sticky", top: "0" });
            $(".navbar").css({ "background-color": "rgba(225, 225, 225, 1)" }); //deyisdim
            $(".dropdown-menu").css({ "background-color": "rgba(25, 106, 180, 1)" });
            $(".form-section").css({ "background-color": "#375074" });
        }
    }

    fixMenu();

    $(window).scroll(function () {
        fixMenu();
    })

    $(window).resize(function () {
        fixMenu();
    })

$(document).on("click", ".menu-btn", () => {

    $("#menuContainer").css({
        "margin-left": "0",
        "margin-right": "0",
        "min-width": "100vw",
        "max-width": "100vw"
    });

    $(".navbar-collapse").addClass("show");

    $(".navbar-toggler")
        .removeClass("menu-btn")
        .addClass("menu-open");

});

    $(document).on("click", ".menu-open", () => {
        $("#menuContainer").css({ "margin-left": "auto", "margin-right": "auto", "min-width": "auto", "max-width": "auto" });
        $(".dropdown-menu").css({ "border-top-right-radius": "0px", "border-top-left-radius": "0px" });
        $(".navbar-toggler").removeClass("menu-open");
        $(".navbar-toggler").addClass("menu-btn");
        $(".menu-section").css({ "position": "static" });
        fixMenu();
    })

    document.addEventListener("DOMContentLoaded", function () {

    // const dropdowns = document.querySelectorAll(".navbar .dropdown");

    // dropdowns.forEach(drop => {

    //     const toggle = drop.querySelector(".dropdown-toggle");
    //     const menu = drop.querySelector(".dropdown-menu");

    //     toggle.addEventListener("click", function (e) {

    //         if (window.innerWidth < 992) {

    //             e.preventDefault();
    //             e.stopPropagation();

    //             const isOpen = drop.classList.contains("show");

    //             // digerlerini bagla
    //             dropdowns.forEach(item => {
    //                 item.classList.remove("show");
    //                 const m = item.querySelector(".dropdown-menu");
    //                 if (m) m.classList.remove("show");
    //             });

    //             // eger bagli idise ac
    //             if (!isOpen) {
    //                 drop.classList.add("show");
    //                 menu.classList.add("show");
    //             }

    //         }

    //     });

    // });
$(document).ready(function () {

    function mobileDropdown() {

        if ($(window).width() < 992) {

            $(".dropdown-toggle").attr("data-bs-toggle", "");

            $(".navbar .dropdown-toggle").off("click").on("click", function (e) {

                e.preventDefault();

                let parent = $(this).parent();
                let menu = parent.find(".dropdown-menu");

                if (parent.hasClass("show")) {

                    parent.removeClass("show");
                    menu.removeClass("show");

                } else {

                    $(".navbar .dropdown").removeClass("show");
                    $(".dropdown-menu").removeClass("show");

                    parent.addClass("show");
                    menu.addClass("show");

                }

            });

        } else {

            $(".dropdown-toggle").attr("data-bs-toggle", "dropdown");

            $(".navbar .dropdown").removeClass("show");
            $(".dropdown-menu").removeClass("show");

        }

    }

    mobileDropdown();

    $(window).resize(function () {
        mobileDropdown();
    });

});
    // menu xaricine klik edende baglansin
    document.addEventListener("click", function () {

        if (window.innerWidth < 992) {

            dropdowns.forEach(item => {
                item.classList.remove("show");

                const m = item.querySelector(".dropdown-menu");
                if (m) m.classList.remove("show");
            });

        }

    });

});
})
$(() => {

  function mobileDropdown() {
    if ($(window).width() < 992) {

      $(".dropdown-toggle").attr("data-bs-toggle", "");

      $(".navbar .dropdown-toggle").off("click").on("click", function (e) {
        e.preventDefault();
        e.stopPropagation(); // önəmli: document click-in qarışmasının qarşısı alınır

        let parent = $(this).parent();
        let menu = parent.find(".dropdown-menu");
        let icon = $(this).find("i.fa-chevron-down");

        if (parent.hasClass("show")) {
          parent.removeClass("show");
          menu.slideUp(200);
          icon.css("transform", "rotate(0deg)");
        } else {
          // digərlərini bağla
          $(".navbar .dropdown").not(parent).removeClass("show");
          $(".navbar .dropdown .dropdown-menu").not(menu).slideUp(200);
          $(".navbar .dropdown i.fa-chevron-down").not(icon).css("transform", "rotate(0deg)");

          parent.addClass("show");
          menu.slideDown(200);
          icon.css("transform", "rotate(180deg)");
        }
      });

      // xarici kliklə bağlama
      $(document).off("click.mobileDropdown").on("click.mobileDropdown", function (e) {
        if (!$(e.target).closest(".navbar .dropdown").length) {
          $(".navbar .dropdown").removeClass("show");
          $(".navbar .dropdown .dropdown-menu").slideUp(200);
          $(".navbar .dropdown i.fa-chevron-down").css("transform", "rotate(0deg)");
        }
      });

    } else {
      $(".dropdown-toggle").attr("data-bs-toggle", "dropdown");
      $(".navbar .dropdown").removeClass("show");
      $(".navbar .dropdown .dropdown-menu").hide();
      $(".navbar .dropdown i.fa-chevron-down").css("transform", "rotate(0deg)");
      $(document).off("click.mobileDropdown");
    }
  }

  mobileDropdown();
  $(window).resize(mobileDropdown);

});


// nav media
// JavaScript
// document.addEventListener("DOMContentLoaded", function () {
//     // dropdown-toggle elementlərinin hamısı
//     var dropdownToggles = document.querySelectorAll('.dropdown-toggle');

//     // Hər bir dropdown-toggle-ı 
//     dropdownToggles.forEach(function (toggle) {
//         // Click eventini 
//         toggle.addEventListener('click', function () {
//             // toggleParent dəyişənində dropdown parent
//             var toggleParent = this.parentElement;
//             // Dropdown-menu-nu tap
//             var dropdownMenu = toggleParent.querySelector('.dropdown-menu');

//             // Dropdown-menu-nun display atribut
//             var displayStyle = window.getComputedStyle(dropdownMenu).getPropertyValue('display');

//             // Dropdown-menu-nun display atribut toggle 
//             if (displayStyle === 'block') {
//                 dropdownMenu.style.display = 'none';
//             } else {
//                 dropdownMenu.style.display = 'block';
//             }
//         });
//     });
// });

// menyu
// document.addEventListener("DOMContentLoaded", function() {
//     const dropdowns = document.querySelectorAll(".navbar .dropdown");

//     function handleDropdowns() {
//         const width = window.innerWidth;

//         dropdowns.forEach(drop => {
//             const toggle = drop.querySelector(".dropdown-toggle");
//             const menu = drop.querySelector(".dropdown-menu");

//             // Hover böyük ekran üçün
//             if(width >= 992) {
//                 toggle.removeAttribute("data-bs-toggle"); // klik deaktiv
//                 drop.addEventListener("mouseenter", () => menu.classList.add("show"));
//                 drop.addEventListener("mouseleave", () => menu.classList.remove("show"));
//             } else {
//                 // Kiçik ekran klik üçün
//                 toggle.setAttribute("data-bs-toggle", "dropdown");
//                 menu.classList.remove("show"); // hover varsa sil
//             }
//         });
//     }

//     handleDropdowns();
//     window.addEventListener("resize", handleDropdowns);

//     // Sticky/fixed menyu scroll ilə
//     const menuSection = document.querySelector(".menu-section");
//     const headerHeight = document.querySelector(".header-img").offsetHeight;

//     window.addEventListener("scroll", () => {
//         if(window.scrollY > headerHeight) {
//             menuSection.style.position = "fixed";
//             menuSection.style.top = "0";
//         } else {
//             menuSection.style.position = "sticky";
//             menuSection.style.top = "0";
//         }
//     });
// });


// son menyu

// as

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
        nav: true,
        dots: false,

        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        smartSpeed: 600,

        // navText: [
        //     "<img src='./src/img/arrowleft.svg'>",
        //     "<img src='./src/img/arrowright.svg'>"
        // ],

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
