"use strict";

$(document).ready(() => {
	//preload images
	$("#image_list a").each((index, element) => {
		const swappedImage = new Image();
		swappedImage.src = $(element).attr("href");
	});

	//set up event handlers for links    
	$("#image_list a").click((evt) => {
		const link = evt.currentTarget;

		//fade-out
		$("#image, #caption").fadeOut(1000, () => {
			//new url
			const imageURL = $(link).attr("href");
			const caption = $(link).attr("title");

			//update img
			$("#image").attr("src", imageURL);
			$("#caption").text(caption);

			//fade-in
			$("#image, #caption").fadeIn(1000);
		});

		//cancel default action
		evt.preventDefault();
	});

	//focus to first
	$("li:first-child a").focus();
});
