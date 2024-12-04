"use strict";
const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
	//event handler
	$("#calculate").addEventListener("click", processEntry);

});

function processEntry() {
	//user input
	var userIncome = parseFloat(document.querySelector("#income").value);

	//validation block
	if (isNaN(userIncome) || userIncome <= 0) {
		alert("Please enter a valid number greater than zero.");
		document.querySelector("#tax").value = ""; //clear field
	} else {
		//call calculateTax
		var tax = calculateTax(userIncome);
		document.querySelector("#tax").value = tax.toFixed(2); //two decimal places
	}

	//focus on input field
	document.querySelector("#income").focus();
}

function calculateTax(userIncome) {
	var tax = 0;

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
