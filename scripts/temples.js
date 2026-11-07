const hamButton = document.querySelector("#menu");
const navigationBar = document.querySelector(".navigation");
const header = document.querySelector("header");

hamButton.addEventListener("click", () => {
    hamButton.classList.toggle("open");
    header.classList.toggle("open");
    navigationBar.classList.toggle("open");
    hamButton.setAttribute("aria-label", hamButton.classList.contains("open") ? "close menu":"open menu" )    
})


