const links = document.querySelectorAll(".links");
const closeMenu = document.querySelector(".close-menu");
const closeMenuMobile = document.querySelector(".close-menu-mobile");
const sideBar = document.querySelector(".side-bar");
const expandArrow = document.querySelectorAll(".expand");
const sideNav = document.getElementById("side-nav");

links.forEach((link) => {
  link.addEventListener("click", () => {
    console.log("clicked");
    const subMenu = link.nextElementSibling;

    if (subMenu.classList.contains("active")) {
      subMenu.classList.remove("active");
      console.log("remove class active");
      subMenu.style.maxHeight = "0px";
    } else {
      subMenu.classList.toggle("active");
      subMenu.style.maxHeight = subMenu.scrollHeight + "px";
    }
  });
});

sideNav.addEventListener("mouseover", () => {
  console.log("mouse hover on sidebar");
  sideBar.classList.remove("closed");
  document.getElementById("main").style.width = "calc(100% - 28rem)";
  document.getElementById("header").style.width = "calc(100% - 28rem)";
});

closeMenu.addEventListener("click", () => {
  if (sideBar.classList.contains("closed")) {
    sideBar.classList.remove("closed");
    document.getElementById("main").style.width = "calc(100% - 28rem)";
    document.getElementById("header").style.width = "calc(100% - 28rem)";
  } else {
    document.getElementById("main").style.width = "calc(100% - 8rem)";
    document.getElementById("header").style.width = "calc(100% - 8rem)";
    sideBar.classList.add("closed");
  }
  console.log("close button clicked");
});
closeMenuMobile.addEventListener("click", () => {
  if (sideBar.classList.contains("closed")) {
    sideBar.classList.remove("closed");
    // document.getElementById("main").style.width = "100%";
    // document.getElementById("header").style.width = "100%";
  } else {
    // document.getElementById("main").style.width = "calc(100% - 8rem)";
    // document.getElementById("header").style.width = "calc(100% - 8rem)";
    sideBar.classList.add("closed");
  }

  // document.getElementById("main").style.width = "calc(100% - 4rem)";
  console.log("close mobile button clicked");
});

// .console.log(closeMenu.addEventListener("mouseOver"));
