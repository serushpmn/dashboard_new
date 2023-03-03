const links = document.querySelectorAll(".links");
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
