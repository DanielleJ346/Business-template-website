const eyeBall = document.querySelector(".eyeball");

const loginForm = document.querySelector(".loginForm");

const emailInput = document.querySelector(".email")

const eyeLid = document.querySelector(".eyelid span")

document.onmousemove = () => {
    const x = event.clientX * 100 / window.innerWidth + "%";
    const y = event.clientY * 100 / window.innerHeight + "%";

    eyeBall.style.left = x;
    eyeBall.style.top = y;
    eyeBall.style.transform ="translate(-"+x+", -"+y+")";
}

window.addEventListener('click', (e) => {
    //randomise colour
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    eyeLid.contains(e.target) ? eyeBall.style.borderColor = `#${randomColor}` : null;
})



const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }))