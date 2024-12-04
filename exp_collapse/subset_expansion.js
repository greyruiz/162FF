$(document).ready(() => {
    //E.H. to all <a> elements
    $("main a").click(function (event) {

        event.preventDefault();

        //current element
        const link = $(this);

        //find div related to link
        const contentDiv = link.prev("div");

        //toggle hide
        contentDiv.toggleClass("hide");

        if (contentDiv.hasClass("hide")) {
            link.text("Show more");
        } else {
            link.text("Show less");
        }
    });
});
