$(document).ready(() => {
    /*phoneUS method from JQuery Validation library.
    Using this in lieu of adding "additional-methods.js" */
    $.validator.addMethod("phoneUS", function (phone_number, element) {
        phone_number = phone_number.replace(/\s+/g, "");
        return phone_number.length === 0 || 
            (this.optional(element) || phone_number.match(/^(\+?1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}$/));
    }, "Please specify a valid phone number");

    $.validator.addMethod("validName", function (value, element) {
        return this.optional(element) || /^[a-zA-Z\s'-]+$/.test(value);
    }, "Enter a valid name (letters only).");

    $("#arrival_date").datepicker({
        dateFormat: "mm/dd/yy",
        minDate: 0
    });

    $("#reservation_form").validate({
        rules: {
            arrival_date: "required",
            nights: {
                required: true
            },
            name: {
                required: true,
                validName: true
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
                phoneUS: true
            }
        },
        messages: {
            arrival_date: "Select an arrival date.",
            nights: "Select the number of nights.",
            name: {
                required: "Your name is required.",
                validName: "Enter a valid name (letters only)."
            },
            email: {
                required: "Email is required.",
                email: "Enter a valid email."
            },
            phone: {
                required: "Phone number is required.",
                phoneUS: "Enter a valid phone number (e.g., 999-999-9999)."
            }
        },
        submitHandler: (form) => {
            form.submit();
        }
    });
});
