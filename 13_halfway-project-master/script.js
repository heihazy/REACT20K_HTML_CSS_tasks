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

function toggleNav() {
  if (document.documentElement.clientWidth < 900) {
    checkNavbarVisibility();
  }
}

function showNav() {
  if (document.documentElement.clientWidth > 900) {
    checkNavbarVisibility();
  }
}

function checkNavbarVisibility() {
  var dropDownContent = document.querySelector(".dropdown-content");
  dropDownContent.style.display == "block"
    ? (dropDownContent.style.display = "none")
    : (dropDownContent.style.display = "block");
}
