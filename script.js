const hero = document.getElementById("hero");

const images = [
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
];

let index = 0;

function changeBackground() {
  hero.style.background = `url('${images[index]}') center/cover no-repeat`;
}

setInterval(changeBackground, 5000);

changeBackground();

function toggleMenu(icon) {
  const nav = document.getElementById("navMenu");

  nav.classList.toggle("active");
  icon.classList.toggle("open");
}

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  const update = () => {
    const target = +counter.getAttribute("data-target");
    let count = +counter.innerText;

    let speed = target / 120;

    if (count < target) {
      counter.innerText = Math.ceil(count + speed);
      setTimeout(update, 25);
    } else {
      counter.innerText = target;
    }
  };

  update();
});

window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  const text = loader.querySelector("h2");

  let dots = 0;
  const loadingAnimation = setInterval(() => {
    dots = (dots + 1) % 4;
    text.innerText = "Loading" + ".".repeat(dots);
  }, 400);

  
  setTimeout(() => {
    clearInterval(loadingAnimation);

    loader.style.transition = "all 0.6s ease";
    loader.style.opacity = "0";
    loader.style.transform = "scale(1.1)";

    setTimeout(() => {
      loader.style.display = "none";
    }, 600);

  }, 1500); 
});