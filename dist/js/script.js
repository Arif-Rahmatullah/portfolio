//Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const sildeUp = document.querySelector("#slideup");

  const fixedNav = header.offsetTop;
  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    sildeUp.classList.remove("hidden");
    sildeUp.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    sildeUp.classList.remove("flex");
    sildeUp.classList.add("hidden");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

//dark mode
const darkToggle = document.querySelect("#dark-toggle");
const html = document.querySelect("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});
