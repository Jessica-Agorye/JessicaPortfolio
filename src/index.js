let menuBtn = document.querySelector(".menu-btn");
let navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener(
  "click",
  (click = () => {
    navMenu.classList.toggle("hidden");
  })
);

let educationEl = document.querySelector("#edu");
let aboutEl = document.querySelector("#about-me");
let eduText = document.querySelector("#edu-text");
let aboutText = document.querySelector("#aboutme-text");

aboutEl.style.borderBottom = "solid 4px blue";

// When I click on educationEl I want aboutMe to be hidden and I want educationText  to be revealed.
educationEl.addEventListener("click", function () {
  aboutText.classList.add("hidden");
  eduText.classList.remove("hidden");
  aboutEl.style.borderBottom = "none";

  educationEl.classList.add("active");
  aboutEl.classList.remove("active");
  educationEl.style.borderBottom = "solid 4px blue";
});
// Also I want the style (border bottom to become fuchia, also I want the style of about me to become hidden)
aboutEl.addEventListener("click", function () {
  aboutText.classList.remove("hidden");
  eduText.classList.add("hidden");
  educationEl.style.borderBottom = "none";

  educationEl.classList.remove("active");
  aboutEl.classList.add("active");
  aboutEl.style.borderBottom = "solid 4px blue";
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
