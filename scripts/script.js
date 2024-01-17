"use strict";

// Function to create navigation buttons
function createCarouselNavigation(element) {
  const items = element.querySelectorAll(".carousel-item");
  const buttonsHtml = Array.from(items, () => `<span class="carousel-button"></span>`);
  element.insertAdjacentHTML(
    "beforeend",
    `<div class="carousel-nav">${buttonsHtml.join("")}</div>`
  );
  return element.querySelector(".carousel-nav"); // Return the container for easier removal
}

// Function to handle button click event
function handleButtonClick(items, buttons, i) {
  items.forEach((item) => item.classList.remove("item-selected"));
  buttons.forEach((button) => button.classList.remove("button-selected"));
  items[i].classList.add("item-selected");
  buttons[i].classList.add("button-selected");
}

document.querySelectorAll(".carousel").forEach((element) => {
  const items = element.querySelectorAll(".carousel-item");
  let navContainer = null;
  let isNavVisible = true;
  let selectedCarouselItem = 0; // Track the currently selected item's index

  const recreateNavigation = () => {
    if (navContainer) {
      navContainer.remove(); // Remove the existing navigation
    }
    navContainer = createCarouselNavigation(element);

    const buttons = Array.from(navContainer.querySelectorAll(".carousel-button")); // Select buttons inside the container

    buttons.forEach((button, i) => {
      button.addEventListener("click", () => {
        selectedCarouselItem = i; // Update the selected item index
        handleButtonClick(items, buttons, i);
      });
    });

    // Set the initial state of the carousel based on the selectedCarouselItem
    items[selectedCarouselItem].classList.add("item-selected");
    buttons[selectedCarouselItem].classList.add("button-selected");
  };

  recreateNavigation(); // Create initial navigation

  // Set the click event for the hamburger menu
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.menu');

  hamburger.addEventListener('click', (event) => {
    event.preventDefault();
    toggleClasses();

    if (!isNavVisible) {
      // Show navigation with a delay (e.g., 500 milliseconds)
      setTimeout(() => {
        recreateNavigation(); // Recreate the navigation
        isNavVisible = true;
      }, 500);
    } else {
      // Hide navigation immediately
      if (navContainer) {
        navContainer.remove(); // Remove the navigation
        navContainer = null;
      }
      isNavVisible = false;
    }
  });

  function toggleClasses() {
    hamburger.classList.toggle('open');
    menu.classList.toggle('open');
  }
});