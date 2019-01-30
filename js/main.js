$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

        $(document).ready(function () {
            $(window).scroll(function () {
                
                //Method 1: Using addClass and removeClass
                if ($(document).scrollTop() > 100) {
                    $('.navbar-default').addClass('navbar-shrink');
                    $('.navbar-default').removeClass('navbar-fade');
                } else {
                    $('.navbar-default').removeClass('navbar-shrink');
                    $('.navbar-default').addClass('navbar-fade');
                }

            });
        });