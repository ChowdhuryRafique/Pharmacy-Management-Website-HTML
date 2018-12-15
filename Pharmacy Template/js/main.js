$(document).ready(function () {

    $('.carousel').carousel()

    //smooth scroll up part

    $(".arrow").on('click', function () {

        $("html,body").animate({
            scrollTop: 0
        }, 1000);

    });
    //smooth scroll up part


    $(window).scroll(function () {
        //Scroll up part
        var $scrolling = $(this).scrollTop();
        if ($scrolling >= 200) {

            $(".arrow").fadeIn();
        } else {
            $(".arrow").fadeOut();
        }
        //End Scroll up part
        //when scroll menu change background color

        if ($scrolling >= 100) {
            $(".full_menu").addClass("position-fixed");
        } else {
            $(".full_menu").removeClass("position-fixed");
        }
        //End when scroll menu change background color
    })
      $('.team_slick').slick({
   slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2500,
        responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
 });
  //end of team part
    //init wow plagin
    new WOW().init();

    //preloader
    $("#fakeLoader").fakeLoader({
        timeToHide: 1200,
        zIndex: 888888,
        spinner: "spinner2",
        bgColor: "gray",
    });

    //smooth scroll when click menu
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 5000);
    });
});
