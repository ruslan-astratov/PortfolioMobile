$(document).ready(function () {
  $("#burger").click(function () {
    $("#burger").toggleClass("active");
    $("#dropdown").toggleClass("active");
    $("#body").toggleClass("active");
  });

  $(document).mouseup(function (e) {
    var $target = $(e.target);
    if (
      $target.closest("#dropdown").length == 0 &&
      $target.closest("#burger").length == 0
    ) {
      $("#dropdown").removeClass("active");
      $("#burger").removeClass("active");
      $("#body").removeClass("active");
    }
  });

  //

  let containerE1 = document.querySelector("#portfolio-projects");

  let mixer = mixitup(containerE1, {
    classNames: {
      block: "",
    },
  });
});
