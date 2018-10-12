$(function () {
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 50) {
            $(".header-fixed").addClass("shadow");
        } else {
            //remove the background property so it comes transparent again
            $(".header-fixed").removeClass("shadow");
        }
    });
    //    scroll
    $(".copyright a").click(function () {

        $('html, body').animate({

            scrollTop: 0

        }, 1000);
    });

    $(".owl-carousel").owlCarousel();



    // Nav Mobile
    // $(".nav-mobile").click(function () {
    //     $(".menu").addClass("show");
    //     $(".show").css("display", "block");
    // });

    $(".nav-mobile").click(function () {
        $(".menu").css({
            marginLeft: "0px"
        });
    })
    $(".fa-close").click(function () {
        $(".menu").css({
            marginLeft: "-215px"
        });
    })


    // $(".fa-close").click(function () {
    //     $(".show").css("display", "none");
    //     $(this).parent().removeClass("show");
    // });

    // $(".about-salon p").click(function () {
    //     $(this).next().children().toggle()
    // });


    // $(".about-salon li").click(function () {
    //     $(this).css("background", "#504b4b");
    // });

    $('#Container').mixItUp();
    // Selected color
    $('.shuffle li').click(function () {
        $(this).addClass('selected').siblings().removeClass('selected');
    });
});