// Hamburger menu section starts
const hamburger = document.querySelector(".hamburger");
const navSection = document.querySelector(".nav-section");

hamburger.addEventListener("click", () => {
    navSection.classList.toggle("show-nav-section");
});
// Hamburger menu section ends