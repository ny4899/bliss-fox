// "use strict";
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 80) {
      $(".my__nav").addClass("my__nav__bnavbarg");
    }
    if ($(this).scrollTop() <= 80) {
      $(".my__nav").removeClass("my__nav__bnavbarg");
    }
  });

  $(window).scroll(function () {
    var hTs1 = $("#slide1").offset().top,
      hHs1 = $("#slide1").outerHeight(),
      hTs2 = $("#slide2").offset().top,
      hHs2 = $("#slide2").outerHeight(),
      hTs3 = $("#slide3").offset().top,
      hHs3 = $("#slide3").outerHeight(),
      hTs4 = $("#slide4").offset().top,
      hHs4 = $("#slide4").outerHeight(),
      wH = $(window).height(),
      wS = $(this).scrollTop();

    if (wS + 450 > hTs1 - hHs1 + wH) {
      $(".carousel__main__container").removeClass("bg1 , bg2 , bg3 , bg4 ");
      $(".carousel__main__container").addClass("bg1");
    }
    if (wS + 450 > hTs2 - hHs2 + wH) {
      $(".carousel__main__container").removeClass("bg1 , bg2 , bg3 , bg4 ");
      $(".carousel__main__container").addClass("bg2");
    }

    if (wS + 450 > hTs3 - hHs3 + wH) {
      $(".carousel__main__container").removeClass("bg1 , bg2 , bg3 , bg4 ");
      $(".carousel__main__container").addClass("bg3");
    }
    if (wS + 450 > hTs4 - hHs4 + wH) {
      $(".carousel__main__container").removeClass("bg1 , bg2 , bg3 , bg4 ");
      $(".carousel__main__container").addClass("bg4");
    }
  });
});
