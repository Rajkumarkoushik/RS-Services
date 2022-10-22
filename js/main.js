// Hamburger menu section starts
const hamburger = document.querySelector(".hamburger");
const navSection = document.querySelector(".nav-section");

hamburger.addEventListener("click", () => {
    navSection.classList.toggle("show-nav-section");
});
// Hamburger menu section ends

// Appointment form section statrs

const appointmentMain = document.querySelector(".appointment-main");
const appointmentBtn = document.querySelector(".appointment-btn");

appointmentBtn.addEventListener("click", () => {
    appointmentMain.classList.toggle("show-appointmentform");
});
// Appointment form section ends

