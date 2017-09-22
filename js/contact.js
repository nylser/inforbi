$(function () {

    $('#contact-form').on('submit', function (e) {
        if (grecaptcha.getResponse() == ""){
            var alertBox = '<div class="alert alert-danger alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>Bitte das Captcha bestätigen!</div>';
            $('#contact-form').find('.messages').html(alertBox);
            $('html, body').animate({
                scrollTop: $(".messages").offset().top
            }, 500);
            return false;
        }
        if (!e.isDefaultPrevented()) {
            var url = "/mailer.php";

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#contact-form').find('.messages').html(alertBox);
                        $('#contact-form')[0].reset();
                        grecaptcha.reset();
                    }
                    $('html, body').animate({
                        scrollTop: $(".messages").offset().top
                    }, 500);
                }
            });
            return false;
        }
    })
});
