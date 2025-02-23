// typescript animation

const words = [
  "Hello, I'm Diletta",
  "Ciao, sono Diletta",
  "你好 , 我叫Diletta",
];
let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;
const speed = 100;
const delayBetweenWords = 1000;
const element = document.querySelector(".typewriter");

function typeEffect() {
  const currentWord = words[wordIndex];
  const displayedText = currentWord.substring(0, letterIndex);

  element.innerHTML = displayedText + '<span class="cursor"></span>';

  if (!isDeleting && letterIndex < currentWord.length) {
    letterIndex++;
    setTimeout(typeEffect, speed);
  } else if (isDeleting && letterIndex > 0) {
    letterIndex--;
    setTimeout(typeEffect, speed / 2);
  } else if (!isDeleting && letterIndex === currentWord.length) {
    isDeleting = true;
    setTimeout(typeEffect, delayBetweenWords);
  } else {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(typeEffect, speed);
  }
}

typeEffect();

//button animation

import { animate } from "motion";

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("animate-btn");

  if (button) {
    button.addEventListener("click", () => {
      animate(
        "#animate-btn",
        { scale: [1, 1.2, 1] },
        { duration: 0.3, easing: "ease-in-out" }
      );
    });
  } else {
    console.error("Button with id 'animate-btn' not found!");
  }
});

//extended page
document.addEventListener("DOMContentLoaded", () => {
  const chevronDown = document.querySelector(".chevron-down");
  const container = document.querySelector("body");

  chevronDown.addEventListener("click", () => {
    const newSection = document.createElement("div");
    newSection.classList.add("extra-content");

    newSection.innerHTML = `
          <div class="container">
              <h2>More About Me</h2>
              <p>This section expands to reveal more details about my journey, skills, and projects.</p>
          </div>
      `;

    container.appendChild(newSection);

    newSection.scrollIntoView({ behavior: "smooth" });
  });
});
