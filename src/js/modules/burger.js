const menuBurger = document.querySelector(".navbar-toggle");
const navBar = document.querySelector(".header__menu");
const dropsLink = document.querySelectorAll(".menu__scrol");
const overlay = document.querySelector(".overlay");
// const menuDropDown = document.querySelector('.menu-drop-down');
// const menuLogo = document.querySelector('.menu__logo');

export default function Burger() {
  menuBurger.addEventListener("click", (e) => {
    menuBurger.classList.toggle("burger-active");
    navBar.classList.toggle("navbar-active");
    if (
      navBar.classList.contains("navbar-active") &&
      menuBurger.classList.contains("burger-active")
    ) {
      // navBar.style.display = 'grid';
      // navBar.style.right = '0';
      // navBar.style.height = '100%';
      overlay.style.display = "block";
      // menuDropDown.style.display = 'flex';
      // menuLogo.style.display = 'block';
      document.body.style.overflow = "hidden";
    } else {
      // navBar.style.right = '-100%';
      // navBar.style.height = '0';
      // menuLogo.style.display = 'none';
      overlay.style.display = "none";
      document.body.style.overflow = "visible";
    }
  });

  document.addEventListener("mousedown", (event) => {
    if (
      !navBar.contains(event.target) &&
      !menuBurger.contains(event.target) &&
      !overlay.contains(event.target)
    ) {
      navBar.classList.remove("navbar-active");
      menuBurger.classList.remove("burger-active");
      overlay.style.display = "none";
      document.body.style.overflow = "visible";
    }
  });
  dropsLink.forEach((el) => {
    el.addEventListener("click", () => {
      navBar.classList.remove("navbar-active");
      menuBurger.classList.remove("burger-active");
      //  navBar.style.right = '-100%';
      // navBar.style.height = '0';
      overlay.style.display = "none";
      document.body.style.overflow = "visible";
      //  menuDropDown.style.display = 'none';
      //  menuLogo.style.display = 'none';
    });
  });
}
