$(document).ready(function() {
  $("button#changebg").click(function() {
    $("body").addClass("dark-theme");
    $("button#changebg").hide();
    $("button#resettheme").show();

  });
  $("button#resettheme").click(function() {
    $("body").removeClass();
    $("button#changebg").show();
    $("button#resettheme").hide();

  });
})
