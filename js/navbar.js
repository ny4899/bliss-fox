$(document).ready(function () {
  $(".hum__icon").click(function () {
    $(".mob__nav__main__slide").toggleClass("mob__nav__show");

    if ($(".hum__icon").hasClass("bi-list")) {
      $(".hum__icon").removeClass("bi-list");
      $(".hum__icon").addClass("bi-x");
    } else if ($(".hum__icon").hasClass("bi-x")) {
      $(".hum__icon").removeClass("bi-x");
      $(".hum__icon").addClass("bi-list");
    }
  });
  $(".mob__nav__main__link").click(function () {
    $(this).siblings(".mob__nav__sub__drop__container").toggleClass("dis_none");
  });
});
