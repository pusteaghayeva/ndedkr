document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("surveyModal");
    const overlay = document.getElementById("surveyOverlay");
    const modalClose = document.getElementById("modalClose");
    const toggle = document.getElementById("surveyToggle");
    const surveyContent = modal.querySelector(".survey-content");
    const surveyResults = document.getElementById("surveyResults");
    const radios = modal.querySelectorAll('input[name="q1_modal"]');
    const backBtn = document.getElementById("backToVote");
    const voteBtn = modal.querySelector(".vote-btn");
    const resultBtn = modal.querySelector(".result-btn");

    let userClosed = false;

    function openModal() {
        modal.style.visibility = "";
        modal.classList.remove("closing");
        modal.classList.add("active");
        overlay.classList.add("active");
        toggle.classList.add("modal-open");
        toggle.innerHTML = "&#10095;";
        modalClose.style.display = "block";
        surveyContent.style.display = "flex";
        surveyResults.style.display = "none";
    }

    function closeModal() {
        modal.classList.remove("active");
        modal.classList.add("closing");
        overlay.classList.remove("active");
        toggle.classList.remove("modal-open");
        toggle.innerHTML = "&#10094;";
        setTimeout(() => {
            modal.classList.remove("closing");
        }, 700);
    }

    const services = document.querySelector(".e-services");
    const ENTER_OFFSET = 120;


    function updateSurvey() {
    if (!services) return;
    if (window.innerWidth < 992) return;

    if (userClosed) return;

    const esTop = services.getBoundingClientRect().top;
    if (esTop <= ENTER_OFFSET) {
        if (!modal.classList.contains("active") && !modal.classList.contains("closing")) {
            openModal();
        }
    } else {
        if (modal.classList.contains("active")) {
            closeModal();
        }
    }
}

    let ticking = false;
    window.addEventListener("scroll", () => {
        if (!ticking) {
            requestAnimationFrame(() => { updateSurvey(); ticking = false; });
            ticking = true;
        }
    }, { passive: true });

    window.addEventListener("resize", updateSurvey);

    // Mobil üçün - yalnız bir dəfə açılsın
    if (window.innerWidth < 992) {
        let mobileOpened = false;
        const mobileObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !mobileOpened && !userClosed) {
                        mobileOpened = true;
                        openModal();
                        mobileObserver.disconnect();
                    }
                });
            },
            { threshold: 0.2 }
        );
        if (services) mobileObserver.observe(services);
    }

    modalClose.addEventListener("click", () => {
        userClosed = true;
        closeModal();
    });

    overlay.addEventListener("click", () => {
        userClosed = true;
        closeModal();
    });




    toggle.addEventListener("click", function () {
    if (modal.classList.contains("active")) {
        userClosed = true;
        closeModal();
    } else {
        userClosed = false;
        openModal();
    }
});

    voteBtn.disabled = true;
    radios.forEach((r) => r.addEventListener("change", () => (voteBtn.disabled = false)));

    resultBtn.addEventListener("click", () => {
        surveyContent.style.display = "none";
        surveyResults.style.display = "flex";
        modalClose.style.display = "none";
    });

    backBtn.addEventListener("click", () => {
        surveyResults.style.display = "none";
        surveyContent.style.display = "flex";
        modalClose.style.display = "block";
    });
});

function alignToggleToModal() {
    const modal = document.getElementById("surveyModal");
    const toggle = document.getElementById("surveyToggle");
    const progressWrap = document.querySelector(".progress-wrap");

    const modalRect = modal.getBoundingClientRect();
    const modalCenterY = modalRect.top + modalRect.height / 2;

    const progressTop = progressWrap
        ? progressWrap.getBoundingClientRect().top
        : window.innerHeight;

    const toggleHeight = toggle.offsetHeight;
    const maxAllowedCenter = progressTop - toggleHeight / 2 - 8;

    const finalY = Math.min(modalCenterY, maxAllowedCenter);

    toggle.style.top = finalY + "px";
    toggle.style.transform = "translateY(-50%)";
    toggle.style.opacity = "1";
}

window.addEventListener("load", alignToggleToModal);
window.addEventListener("resize", alignToggleToModal);