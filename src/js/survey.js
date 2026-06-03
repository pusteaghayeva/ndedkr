$(document).ready(function () {

    let surveyModal = $('#surveyModal');

    let questionId = surveyModal.data('question');
    let voteUrl = surveyModal.data('url');
    let csrfToken = surveyModal.data('token');

    function surveyCaptchaResponse() {
        let response = surveyModal.find('textarea[name="g-recaptcha-response"]').val();

        if (!response && typeof grecaptcha !== 'undefined') {
            response = grecaptcha.getResponse();
        }

        return response || '';
    }

    function resetSurveyCaptcha() {
        if (typeof grecaptcha !== 'undefined') {
            grecaptcha.reset();
        }
    }

    function showResults(response) {
        $('#yesBar').css('width', response.yes_percent + '%');
        $('#noBar').css('width', response.no_percent + '%');

        $('#yesPercent').text(response.yes_percent + '%');
        $('#noPercent').text(response.no_percent + '%');

        $('.survey-content').hide();
        $('#surveyResults').show();
    }

    function lockSurvey(selected) {
        if (selected) {
            localStorage.setItem('survey_' + questionId, selected);
        }

        $('.vote-btn').prop('disabled', true);
        $('input[name="q1_modal"]').prop('disabled', true);
    }

    let voted = localStorage.getItem('survey_' + questionId);

    if (voted) {

        $('input[name="q1_modal"][value="' + voted + '"]')
            .prop('checked', true);

        lockSurvey();
    }

    $('.vote-btn').on('click', function () {

        let selected = $('input[name="q1_modal"]:checked').val();

        if (!selected) {
            alert('Cavab seçin');
            return;
        }

        $.ajax({
            url: voteUrl,
            type: "POST",
            data: {
                _token: csrfToken,
                question_id: questionId,
                answer: selected,
                'g-recaptcha-response': surveyCaptchaResponse()
            },
            success: function (response) {
                lockSurvey(selected);
                showResults(response);
            },
            error: function (xhr) {
                let response = xhr.responseJSON || {};

                if (xhr.status === 409) {
                    lockSurvey(selected);
                    showResults(response);
                    return;
                }

                alert(response.message || 'Sorğu göndərilmədi');
                resetSurveyCaptcha();
            }
        });

    });

    $('.result-btn').on('click', function () {
        $('.survey-content').hide();
        $('#surveyResults').show();
    });

    $('#backToVote').on('click', function () {
        $('#surveyResults').hide();
        $('.survey-content').show();
    });

});
