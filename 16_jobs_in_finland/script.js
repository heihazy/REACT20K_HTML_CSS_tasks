$("document").ready(function() {
  // display search area
  $(".fa-search").click(function() {
    $(".toggle-search").toggle();
    $("input[type='text']").focus();
  });

  // sticky navbar
  var navbar = document.getElementById("menu");
  var sticky = navbar.offsetTop;
  function stickyNav() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }

  // back to top button
  var myBtn = document.getElementById("back-to-top");
  window.onscroll = function() {
    stickyNav();
    scrollFunction();
  };
  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      myBtn.style.display = "block";
    } else {
      myBtn.style.display = "none";
    }
  }
  $("#back-to-top").click(function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
});
