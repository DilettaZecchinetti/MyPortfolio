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

document.querySelector(".menu-toggle").addEventListener("click", function () {
  document.querySelector(".sidebar").classList.toggle("expanded");
});
