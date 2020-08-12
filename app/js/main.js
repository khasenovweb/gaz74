$(document).ready(function () {
  $("[data-auto-show]").each(function (i, el) {
    var timeout = $(el).attr("data-auto-show");
    var uniq = $(el).attr("data-uniq");
    if (uniq == "true") {
      setTimeout(function () {
        $(el).show();
        $("body").addClass("hidden");
      }, timeout);
    }
  });

  $("[data-modal-close]").click(function () {
    var id = $(this).attr("data-modal-close");
    $('[data-modal="' + id + '"]').hide();
    $("body").removeClass("hidden");
  });
  $("[data-modal]").click(function () {
    if ($(event.target).closest(".modal").length) return;
    $(this).hide();
    $("body").removeClass("hidden");
  });
});
