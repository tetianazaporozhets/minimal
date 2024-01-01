$(document).ready(function () {
  //nav btn
  $(".header__btn").click(function () {
    $(".header__nav").toggleClass("active");
  });

  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $("html, body").animate(
      {
        scrollTop: $target.offset().top - 106,
      },
      1000,
      "swing"
    );
  });

  $(".header__item a").click(function () {
    $(".header__nav").removeClass("active");

    var target = $(this).attr("href");

    $("html, body").animate(
      {
        scrollTop: $(target).offset().top - 106,
      },
      800
    );

    return false;
  });
});
