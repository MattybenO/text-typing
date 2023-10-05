
const dynamicText = document.querySelector ("h1 span");
const words = ["love", "cool","the future", "Everything",];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentword = words[wordIndex];
    const currentChar = currentword.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");


    if(!isDeleting && charIndex < currentword.length) {
        // if condition istrue, type d next character
        charIndex++;
        setTimeout(typeEffect, 200);
    }else if(isDeleting && charIndex > 0) {
         // if condition istrue remove d previous  character
         charIndex--;
         setTimeout(typeEffect, 100);
    } else {
        //if word deleted then switch to d next words
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}

typeEffect();