const navbar = document.querySelector(".nav");
const navbarToggler = document.querySelector(".navbar-toggler");
const tl = new TimelineLite();
var menuOpen = false;

// AOS JS
AOS.init({
  duration: 1000,
  once: true,
});

// Navbar Scroll Animation
function navScrollAnimation() {
  window.addEventListener("scroll", () => {
    const navLogo = document.querySelector(".logo");

    if (window.pageYOffset > 0) {
      navbar.classList.add("activeNavScroll");
    } else {
      navbar.classList.remove("activeNavScroll");
    }
  });
}

// Toggle Navbar Animation
function toggleNavbar() {
  navbarToggler.addEventListener("click", () => {
    if (!menuOpen) {
      menuOpen = true;
      navbarToggler.classList.add("activeToggle");
      navbar.classList.add("activeNavbar");
    } else {
      menuOpen = false;
      navbarToggler.classList.remove("activeToggle");
      navbar.classList.remove("activeNavbar");
    }
  });
}

// Landing Page Animation With GSAP
tl.staggerFrom(
  ".nav .logo, .nav ul li",
  2,
  {
    opacity: 0,
  },
  0.1
);

tl.staggerFrom(
  "#home h5, #home h1, #home .btn, #home img",
  1,
  {
    opacity: 0,
  },
  0.1
);

toggleNavbar();
navScrollAnimation();
