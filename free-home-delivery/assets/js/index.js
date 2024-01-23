$(document).ready(function() {
    $('.carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        responsive: [{
                breakpoint: 1500,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true

                }
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true

                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    autoplay: true,
                    dots: true
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});