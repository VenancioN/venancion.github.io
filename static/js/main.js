const menu = document.getElementById("menu")
const menuIcon = document.querySelector(".menu-icon")
let mql = window.matchMedia('(max-width: 900px)');

const spin = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(180deg) scale(1)' }
];

const spinTiming = {
  duration: 150,
  iterations: 1,
}

const openMenu = () => {
  if (menu.classList.contains("hide") && menu.classList.contains("nav-mobile")) {
    menu.classList.remove("hide")
    menuIcon.animate(spin, spinTiming);
    menuIcon.textContent = "x"
    document.querySelector("html").style.overflow = "hidden"
  } else if (menu.classList.contains("nav-mobile")) {
    menuIcon.animate(spin, spinTiming);
    menuIcon.textContent = "☰"
    menu.classList.add("hide")
    document.querySelector("html").style.overflow = "auto"
  }
}

const changeMenuType = (x) => {
  if (x.matches) { // If media query matches
    menu.classList.remove("nav-desktop");
    menu.classList.add("nav-mobile", "hide");
    menuIcon.classList.remove("hide")
  } else {
    menu.className = "nav-desktop"
    menuIcon.classList.add("hide")
  }
}

changeMenuType(mql)
mql.addEventListener("change", changeMenuType)



