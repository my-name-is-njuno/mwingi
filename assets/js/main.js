$(window).scroll(function() {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 200)
})

$(function () {
    $("#tabs").tabs();
});

$(function () {

    $("#preloader").animate({
        'opacity': '0'
    }, 600, function () {
        setTimeout(function () {
            $("#preloader").css("visibility", "hidden").fadeOut();
        }, 500);
    });

    if ($('.owl-trusted').length) {
        $('.owl-trusted').owlCarousel({
            loop: true,
            nav: false,
            dots: true,
            items: 7,
            margin: 30,
            autoplay: true,
            smartSpeed: 600,
            autoplayTimeout: 3000,
            responsive: {
                0: {
                    items: 1,
                    margin: 0
                },
                460: {
                    items: 2,
                    margin: 0
                },
                576: {
                    items: 3,
                    margin: 20
                },
                992: {
                    items: 4,
                    margin: 30
                },
                1408: {
                    items: 5,
                    margin: 30
                },
                1824: {
                    items: 6,
                    margin: 30
                }
            }
        });
    }
    if ($('.owl-testimonials').length) {
        $('.owl-testimonials').owlCarousel({
            loop: true,
            nav: false,
            dots: true,
            items: 1,
            margin: 30,
            autoplay: false,
            smartSpeed: 700,
            autoplayTimeout: 6000,
            responsive: {
                0: {
                    items: 1,
                    margin: 0
                },
                460: {
                    items: 1,
                    margin: 0
                },
                576: {
                    items: 1,
                    margin: 20
                },
                992: {
                    items: 1,
                    margin: 30
                }
            }
        });
    }

     

});

