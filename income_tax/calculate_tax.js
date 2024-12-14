"use strict";

$(document).ready(() => {

    $("#income").focus();

    $("#tax-form").validate({
        rules: {
            income: {
                required: true,
                number: true,
                min: 1
            }
        },
        messages: {
            income: {
                required: "<span class='anti-error'>Please enter your income.</span>",
                number: "Do not include letters or special characters.",
                min: "Number must be greater than zero."
            }
        },
        errorPlacement: function (error, element) {
            error.insertAfter(element);
        }
    });

    $("#tax-form").on("submit", (event) => {
        event.preventDefault();
        //handles leading/trailing spaces in user income
        const trimmedIncome = $("#income").val().trim();
        $("#income").val(trimmedIncome);

        if ($("#tax-form").valid()) {
            const userIncome = parseFloat(trimmedIncome);
            const tax = calculateTax(userIncome);
            $("#tax").val(`$${tax.toFixed(2)}`);
        } else {
            $("#tax").val("");
            $("#income").focus();
        }
    });
});

function calculateTax(userIncome) {
    let tax = 0;

    if (userIncome <= 9875) {
        tax = userIncome * 0.10;
    } else if (userIncome <= 40125) {
        tax = 987.50 + 0.12 * (userIncome - 9875);
    } else if (userIncome <= 85525) {
        tax = 4617.50 + 0.22 * (userIncome - 40125);
    } else if (userIncome <= 163300) {
        tax = 14605.50 + 0.24 * (userIncome - 85525);
    } else if (userIncome <= 207350) {
        tax = 33271.50 + 0.32 * (userIncome - 163300);
    } else if (userIncome <= 518400) {
        tax = 47367.50 + 0.35 * (userIncome - 207350);
    } else {
        tax = 156235 + 0.37 * (userIncome - 518400);
    }

    return tax;
}
