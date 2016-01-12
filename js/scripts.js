$(document).ready(function() {
  $("button#changebg").click(function() {
    $("body").addClass("dark-theme");
  });
  $("button#resettheme").click(function() {
    $("body").removeClass();
  });
})
