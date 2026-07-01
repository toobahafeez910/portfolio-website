const counters = document.querySelectorAll(".stat-card h3");

counters.forEach(counter => {

    const target = parseInt(counter.innerText);

    let count = 0;

    function updateCounter() {

        if (count < target) {

            count++;

            counter.innerText = count + "+";

            setTimeout(updateCounter, 100);

        } else {

            counter.innerText = target + "+";

        }

    }

    updateCounter();

});
const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

});

hiddenElements.forEach(el => observer.observe(el));
const words = [
    "chemist",
    "Researcher",
    "Laboratory Professional",
    "Aspiring Scientist"
];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {

    const currentWord = words[wordIndex];

    if (isDeleting) {
        typingElement.textContent = currentWord.substring(0, charIndex--);
    } else {
        typingElement.textContent = currentWord.substring(0, charIndex++);
    }

    let speed = isDeleting ? 60 : 120;

    if (!isDeleting && charIndex === currentWord.length + 1) {
        speed = 1500;
        isDeleting = true;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};