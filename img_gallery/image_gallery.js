$(document).ready(() => {
    //preload
    $("#image_list a").each(function () {
        const link = $(this); //current element
        const imageURL = link.attr("href");
        const caption = link.attr("title");

        //preload
        const image = new Image();
        image.src = imageURL;
    });

    //on click E.H.
    $("#image_list a").click(function (event) {
        event.preventDefault();

        const link = $(this); //clicked link
        const imageURL = link.attr("href");
        const caption = link.attr("title");

        //update
        $("#image").attr("src", imageURL); //change image source
        $("#caption").text(caption); //change caption
    });
});
