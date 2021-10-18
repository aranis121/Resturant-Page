$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() < 50) {
            // hide nav
            $("#mainNav").removeClass("navbar-shrink");
            $("#back-to-top").fadeOut();
        } else {
            // show nav
            $("#mainNav").addClass("navbar-shrink");
            $("#back-to-top").fadeIn();
        }
    });

});

$(function () {

    $("a.poka-scroll").click(function (event) {
        event.preventDefault();
        var section = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(section).offset().top - 50
        }, 1250);
    });

});

$('body').scrollspy({
    target: '#mainNav',
    offset: 50
  });


$(function () {

    $(".navbar-collapse ul li a").on("click touch", function () {
        $(".navbar-toggle").click();
    });

});