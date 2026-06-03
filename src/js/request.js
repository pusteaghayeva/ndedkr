// sorgu
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("surveyModal");
    const overlay = document.getElementById("surveyOverlay");
    const modalClose = document.getElementById("modalClose");
    const toggle = document.getElementById("surveyToggle");

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

    setTimeout(openModal, 500);

    modalClose.addEventListener("click", closeModal);
    overlay.addEventListener("click", closeModal);
    toggle.addEventListener("click", function () {
        if (modal.classList.contains("active")) {
            closeModal();
        } else {
            openModal();
        }
    });

    const voteBtn = modal.querySelector(".vote-btn");
    const resultBtn = modal.querySelector(".result-btn");
    const surveyContent = modal.querySelector(".survey-content");
    const surveyResults = document.getElementById("surveyResults");
    const radios = modal.querySelectorAll('input[name="q1_modal"]');
    const backBtn = document.getElementById("backToVote");

    voteBtn.disabled = true;
    radios.forEach(r => r.addEventListener("change", () => voteBtn.disabled = false));

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
    const modal = document.getElementById('surveyModal');
    const toggle = document.getElementById('surveyToggle');
    const progressWrap = document.querySelector('.progress-wrap');

    const modalRect = modal.getBoundingClientRect();
    const modalCenterY = modalRect.top + modalRect.height / 2;

    const progressTop = progressWrap
        ? progressWrap.getBoundingClientRect().top
        : window.innerHeight;

    const toggleHeight = toggle.offsetHeight;
    const maxAllowedCenter = progressTop - toggleHeight / 2 - 8;

    const finalY = Math.min(modalCenterY, maxAllowedCenter);

    toggle.style.top = finalY + 'px';
    toggle.style.transform = 'translateY(-50%)';
    toggle.style.top = finalY + 'px';
    toggle.style.transform = 'translateY(-50%)';
    toggle.style.opacity = '1'; // ← bunu əlavə et
}

window.addEventListener('load', alignToggleToModal);

window.addEventListener('resize', alignToggleToModal);
