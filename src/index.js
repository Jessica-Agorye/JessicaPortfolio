let menuBtn = document.querySelector(".menu-btn");
let navMenu = document.querySelector(".nav-menu");
let educationEl = document.querySelector("#edu");
let aboutEl = document.querySelector("#about-me");
let eduText = document.querySelector("#edu-text");
let aboutText = document.querySelector("#aboutme-text");

menuBtn.addEventListener(
  "click",
  (click = () => {
    navMenu.classList.toggle("hidden");
  })
);

aboutEl.style.borderBottom = "solid 6px #FF00FF";

educationEl.addEventListener("click", function () {
  aboutText.classList.add("hidden");
  eduText.classList.remove("hidden");
  aboutEl.style.borderBottom = "none";

  educationEl.classList.add("active");
  aboutEl.classList.remove("active");
  educationEl.style.borderBottom = "solid 6px #FF00FF";
});

aboutEl.addEventListener("click", function () {
  aboutText.classList.remove("hidden");
  eduText.classList.add("hidden");
  educationEl.style.borderBottom = "none";

  educationEl.classList.remove("active");
  aboutEl.classList.add("active");
  aboutEl.style.borderBottom = "solid 6px #FF00FF";
});

// Form Script for form data to google sheet

const scriptURL =
  "https://script.google.com/macros/s/AKfycbwuxKGFM4LnEDqe-5YZSLSnqrClADUs_GNJ4X7yCSEwgq7rD0pGo8fRc4uZ3vzAPHqA/exec";
const form = document.forms["submit-to-google-sheet"];
const msgSpan = document.getElementById("msg-span");
console.log(msgSpan);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msgSpan.innerHTML = "message sent";
      setTimeout(function () {
        msgSpan.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

const fadeInText = document.querySelector("#fade-in-text");

document.addEventListener("DOMContentLoaded", function () {
  fadeInText.classList.add("visible");
});
