let $ = document;

// Show responsive menu

let menu = $.getElementById("menu");
let menuActive = $.getElementById("menu-active");
let closeMenu = $.getElementById("close-menu");

menu.addEventListener("click", () => {
  menuActive.style.display = "block";
});
closeMenu.addEventListener("click", () => {
  menuActive.style.display = "none";
});

let themeSwitcher = $.getElementById("theme-switcher");
let themeSwitcherAct = $.querySelector(".menu-active img");

// function themeSwitcherFunc() {
//   document.body.classList.toggle("light");

//   themeSwitcher.setAttribute(
//     "src",
//     themeSwitcher.getAttribute("src") === "./Images/icon-sun.svg"
//       ? "./Images/icon-moon.svg"
//       : "./Images/icon-sun.svg"
//   );
// }

const KEY = "theme";

function applyTheme(theme, save = true) {
  document.documentElement.setAttribute("data-theme", theme);
  if (save) {
    localStorage.setItem(KEY, theme);
  }
}

let saved = localStorage.getItem(KEY) || "dark";

applyTheme(saved, false);

themeSwitcher.addEventListener("click", () => {
  saved = saved === "light" ? "dark" : "light";

  applyTheme(saved);
});
  themeSwitcherAct.addEventListener("click",() => {
    saved = saved === "light" ? "dark" : "light";

    applyTheme(saved);
  
  })


// themeSwitcher.addEventListener("click", themeSwitcherFunc);
// themeSwitcherAct.addEventListener("click", themeSwitcherFunc);

let navBar = $.getElementById("nav");

document.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 0) {
    navBar.style.height = "60px";
  } else {
    navBar.style.height = "75px";
  }
});
document.querySelector(".projects").addEventListener("click", function () {
  const targetSection = document.querySelector(".projects-title");
  const targetPosition = targetSection.offsetTop;
  window.scrollTo({
    top: targetPosition,
    behavior: "smooth",
  });
});

document.querySelector(".about").addEventListener("click", function () {
  const targetSection = document.querySelector(".experience");
  const targetPosition = targetSection.offsetTop;
  window.scrollTo({
    top: targetPosition,
    behavior: "smooth",
  });
});
document.querySelector(".contact").addEventListener("click", function () {
  const targetSection = document.querySelector(".contact-title");
  const targetPosition = targetSection.offsetTop;
  window.scrollTo({
    top: targetPosition,
    behavior: "smooth",
  });
});
