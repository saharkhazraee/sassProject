"use strict";

// Modal
const modalSection = document.querySelector("#modal-sec");
const closeModalBtn = document.querySelector("#modal-close-btn");

let modalShow = setTimeout(() => {
  modalSection.style.display = "block";
}, 4000);

closeModalBtn.addEventListener("click", () => {
  modalSection.style.display = "none";
});

// Hamburger menu
const hamburgerMenu = document.querySelector("#ham-menu");
const openMenuBtn = document.querySelector("#ham-menu-icon");
const closeMenuBtn = document.querySelector("#menu-close-btn");

openMenuBtn.addEventListener("click", () => {
  hamburgerMenu.classList.add("show-ham-menu");
});
closeMenuBtn.addEventListener("click", () => {
  hamburgerMenu.classList.remove("show-ham-menu");
});

// login form
const loginForm = document.querySelector("#login-form");
const submitEmailBtn = document.querySelector("#submit-modal-btn");
const emailInp = document.querySelector("#email-input");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  try {
    const res = await fetch(
      "https://pozzad-email-validator.p.rapidapi.com/emailvalidator/validateEmail/john@gmail.com",
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
          "X-RapidAPI-Host": "pozzad-email-validator.p.rapidapi.com",
        },
      }
    );
    emailInp.value = "";
  } catch (error) {
    console.log(error);
  }
});
