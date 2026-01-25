// Scroll reveal animation: Generated using ChatGPT for a smooth scroll.
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // Run on load
