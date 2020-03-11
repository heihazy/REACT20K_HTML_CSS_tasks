var myBtn = document.getElementById("back-to-top");
window.onscroll = function() {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myBtn.style.display = "block";
  } else {
    myBtn.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.onresize = function(event) {
  viewportwidth = $(window).width();
  if (viewportwidth < 769) {
    $(".dropdown").click(function(e) {
      e.preventDefault();
      $(this).removeClass("nav");
    });
    $(".dropbtn").click(function() {
      $(".dropdown").css("display", "block");
    });
  }
};
