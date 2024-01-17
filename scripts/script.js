"use strict";

// Function to create navigation buttons
function createCarouselNavigation(element) {
    const items = element.querySelectorAll(".carousel-item");
    const buttonsHtml = Array.from(items, () => `<span class="carousel-button"></span>`);
    element.insertAdjacentHTML(
      "beforeend",
      `<div class="carousel-nav">${buttonsHtml.join("")}</div>`
    );
    return element.querySelectorAll(".carousel-button");
  }
  
  // Function to handle button click event
  function handleButtonClick(items, buttons, i) {
    items.forEach((item) => item.classList.remove("item-selected"));
    buttons.forEach((button) => button.classList.remove("button-selected"));
    items[i].classList.add("item-selected");
    buttons[i].classList.add("button-selected");
  }
  
  document.querySelectorAll(".carousel").forEach((element) => {
    const buttons = createCarouselNavigation(element);
    const items = element.querySelectorAll(".carousel-item");
  
    buttons.forEach((button, i) => {
      button.addEventListener("click", () => handleButtonClick(items, buttons, i));
    });
  
    // Set the initial state of the carousel (select the first item on page load)
    items[0].classList.add("item-selected");
    buttons[0].classList.add("button-selected");
  });
  
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.menu');
  
  hamburger.addEventListener('click', (event) => {
      event.preventDefault();
      toggleClasses();
  });
  
  function toggleClasses() {
      hamburger.classList.toggle('open');
      menu.classList.toggle('open');
  }
  