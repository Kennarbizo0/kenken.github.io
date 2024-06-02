// Animation Text // 

document.addEventListener("DOMContentLoaded", function() {
    const text = "Welcome!"; // The text you want to display
    const typingSpeed = 100; // Adjust the speed of typing (milliseconds)

    let index = 0;
    const typedTextElement = document.getElementById("animation-text");

    function typeText() {
        if (index < text.length) {
            typedTextElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, typingSpeed);
        }
    }

    typeText();
});

// scroll fixed page //

// script.js

document.querySelector('a').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
});
