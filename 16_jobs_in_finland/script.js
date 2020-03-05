$("document").ready(function() {
  $(".fa-search").click(function() {
    $(".toggle-search").toggle();
    $("input[type='text']").focus();
  });
});
