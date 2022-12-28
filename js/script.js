// hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// klik diluar hamburger menu
window.addEventListener("click", function (e) {
  if (e.target != hamburger) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.add("hidden");
    toTop.classList.remove("flex");
  }
};

// dark mode
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// pindah posisis toggle mode
if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}

// add-remove underline portofolio
// add-remove active
const programming = document.getElementById("programming");
const design = document.getElementById("design");
const designPart = document.getElementById("design-part");
const programmingPart = document.getElementById("programming-part");
programming.addEventListener("click", function (e) {
  if (!programming.classList.contains("underline", "underline-offset-8")) {
    programming.classList.add("underline", "underline-offset-8", "text-white");
    programming.classList.remove("text-gray-400");
    design.classList.add("text-gray-400");
    design.classList.remove("underline", "underline-offset-8", "text-white");

    designPart.classList.remove("flex", "flex-wrap");
    designPart.classList.add("hidden");
    programmingPart.classList.add("flex", "flex-wrap");
    programmingPart.classList.remove("hidden");
  }
  e.preventDefault();
});

design.addEventListener("click", function (e) {
  if (!design.classList.contains("underline", "underline-offset-8")) {
    programming.classList.remove("underline", "underline-offset-8", "text-white");
    programming.classList.add("text-gray-400");
    design.classList.remove("text-gray-400");
    design.classList.add("underline", "underline-offset-8", "text-white");

    programmingPart.classList.remove("flex", "flex-wrap");
    programmingPart.classList.add("hidden");
    designPart.classList.remove("hidden");
    designPart.classList.add("flex", "flex-wrap");
  }
  e.preventDefault();
});
