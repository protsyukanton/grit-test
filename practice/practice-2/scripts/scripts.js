$(document).ready(function () {

    $(".modal-link").on("click", function () {

        $('.modal-overlay[data-modal="' + $(this).data('modal') + '"]').addClass("modal-overlay_visible");

    });

    $(".modal__close").on("click", function () {

        $(".modal-overlay").removeClass("modal-overlay_visible");

    });

    $(document).on("click", function (e) {

        if ($(".modal-overlay_visible").length) {

            if (!$(e.target).closest(".modal").length && !$(e.target).closest(".modal-link").length) {

                $(".modal-overlay").removeClass("modal-overlay_visible");

            }

        }

    });

    /** ----------- */

    $('input[type=tel]').mask('+7 (999) 999-99-99');

    /** ----------- */

    $(".modal__registration").on("click", function () {

        let organization = $('input[name=organization]'),
            phone = $('input[name=phone]'),
            email = $('input[name=email]'),
            website = $('input[name=website]'),
            activity = $('select[name=activity]');

        /** ------- */

        $.ajax({
            url: "../registration.php",
            type: "post",
            data: {
                "organization": organization.val(),
                "phone": phone.val(),
                "email": email.val(),
                "website": website.val(),
                "activity": activity.val(),
            },

            success: function (data) {

                if (data == 'error') {

                    $('.field').not('select.field').each(function(item) {

                        if ($(this).val() == '') {

                            $(this).addClass('empty');

                        }

                    });

                    $('.field').on('focus', function() {

                        $(this).removeClass('empty');

                    });

                }

                if (data == 'success') {

                    $('.field').not('select.field').val('');

                    $('.modal__registration').text('Вы зарегистрированы!');

                    setTimeout(() => {
                        
                        $(".modal-overlay").removeClass("modal-overlay_visible");
                        $('.modal__registration').text('Зарегистрироваться');

                    }, 3000);

                }

            }

        });

    });

});