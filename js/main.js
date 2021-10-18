 $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            if (scroll >= 100) {
                $(".navbar").addClass("header");
            }
            if (scroll <= 99) {
                $(".navbar").removeClass("header");
            }
        });