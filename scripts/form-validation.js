
$("#sendMessage").click(function () {

    if (contactUsForm.valid() != false) {
        $("#loading").fadeIn();
        var opts = {
            lines: 12,
            length: 7,
            width: 4,
            radius: 10,
            color: '#000',
            speed: 1,
            trail: 20,
            shadow: false,
            hwaccel: false
        };
        var target = document.getElementById('loading');
        var spinner = new Spinner(opts).spin(target);
    }
});

// Bengin Contact Us Validation

var contactUsForm = false;

// Validation for contact us form
var contactUsValidation = function () {

    var contactUsValidationForm = function () {

        contactUsForm = $('#contactUsForm');
        var error = $('.alert-danger', contactUsForm);
        var success = $('.alert-success', contactUsForm);

        contactUsForm.validate({
            errorElement: 'span',
            errorClass: 'help-block',
            focusInvalid: false,
            rules: {
                firstName: {
                    required: true
                },
                lastName: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                phone: {
                    required: true
                },
                subject: {
                    required: true
                },
                message: {
                    required: true
                },
            },
            messages: {
                firstName: {
                    required: "Field is required."
                },
                lastName: {
                    required: "Field is required."
                },
                email: {
                    required: "Field is required."
                },
                phone: {
                    required: "Field is required."
                },
                subject: {
                    required: "Field is required."
                },
                message: {
                    required: "Field is required."
                }
            },

            invalidHandler: function (event, validator) { //display error alert on form submit              
                success2.hide();
                error2.show();
                App.scrollTo(error2, -200);
            },

            invalidHandler: function (event, validator) { //display error alert on form submit   
                $('.alert-danger', $('.contactus-form')).show();
            },

            highlight: function (element) { // hightlight error inputs
                $(element)
                    .closest('.form-group').addClass('has-error'); // set error class to the control group
            },

            success: function (label) {
                label.closest('.form-group').removeClass('has-error');
                label.remove();
            },

            errorPlacement: function (error, element) {
                error.insertAfter(element.closest('.input-icon'));
            },

            submitHandler: function (contactUsForm) {
                contactUsForm.submit(); // form validation success, call ajax form submit
            }
        });

        $('.contactus-form input').keypress(function (e) {
            if (e.which == 13) {
                if ($('.contactus-form').validate().form()) {
                    $('.contactus-form').submit(); //form validation success, call ajax form submit
                }
                return false;
            }
        });
    }

    return {
        //main function to initiate the module
        init: function () {

            contactUsValidationForm();
        }
    };
}();

jQuery(document).ready(function () {
    contactUsValidation.init();
});