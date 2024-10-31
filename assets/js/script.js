'use strict';



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const menuToggleBtn = document.querySelector("[data-menu-toggle-btn]");

menuToggleBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    menuToggleBtn.classList.toggle("active");
  });
}



/**
 * header sticky & back to top
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});



/**
 * search box toggle
 */

const searchBtn = document.querySelector("[data-search-btn]");
const searchContainer = document.querySelector("[data-search-container]");
const searchSubmitBtn = document.querySelector("[data-search-submit-btn]");
const searchCloseBtn = document.querySelector("[data-search-close-btn]");

const searchBoxElems = [searchBtn, searchSubmitBtn, searchCloseBtn];

for (let i = 0; i < searchBoxElems.length; i++) {
  searchBoxElems[i].addEventListener("click", function () {
    searchContainer.classList.toggle("active");
    document.body.classList.toggle("active");
  });
}


function book(){
 
function sendToWhatsApp(event) {
  event.preventDefault();

  const name = document.querySelector('input[name="full_name"]').value;
  const email = document.querySelector('input[name="email_address"]').value;
  const persons = document.querySelector('select[name="total_person"]').value;
  const date = document.querySelector('input[name="booking_date"]').value;
  const message = document.querySelector('textarea[name="message"]').value;

  const whatsappMessage = `Hello! I would like to book a table. Here are my details:%0A
  - Name: ${name}%0A
  - Email: ${email}%0A
  - Total Persons: ${persons}%0A
  - Date: ${date}%0A
  - Message: ${message}`;

  const whatsappUrl = `https://wa.me/08092848216?text=${whatsappMessage}`;

  window.open(whatsappUrl, '_blank');
}

/**
 * move cycle on scroll
 */

// const deliveryBoy = document.querySelector("[data-delivery-boy]");

// let deliveryBoyMove = -80;
// let lastScrollPos = 0;

// window.addEventListener("scroll", function () {

//   let deliveryBoyTopPos = deliveryBoy.getBoundingClientRect().top;

//   if (deliveryBoyTopPos < 500 && deliveryBoyTopPos > -250) {
//     let activeScrollPos = window.scrollY;

//     if (lastScrollPos < activeScrollPos) {
//       deliveryBoyMove += 1;
//     } else {
//       deliveryBoyMove -= 1;
//     }

//     lastScrollPos = activeScrollPos;
//     deliveryBoy.style.transform = `translateX(${deliveryBoyMove}px)`;
//   }

// });