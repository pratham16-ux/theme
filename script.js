const hero = document.getElementById("hero");

const images = [
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1169&auto=format&fit=crop"
];

let index = 0;

function changeBackground() {
  if (!hero) return;

  hero.style.background = `url('${images[index]}') center/cover no-repeat`;
  hero.style.transition = "background 1s ease-in-out";
}

setInterval(() => {
  index = (index + 1) % images.length;
  changeBackground();
}, 5000);

changeBackground();


function toggleMenu(icon) {
  const nav = document.getElementById("navMenu");

  if (!nav || !icon) return;

  nav.classList.toggle("active");
  icon.classList.toggle("open");
}


const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  const update = () => {
    const target = +counter.getAttribute("data-target");
    let count = +counter.innerText;

    const speed = target / 100;

    if (count < target) {
      counter.innerText = Math.ceil(count + speed);
      setTimeout(update, 20);
    } else {
      counter.innerText = target;
    }
  };

  update();
});


window.addEventListener("DOMContentLoaded", function () {
  const loader = document.getElementById("loader");

  if (!loader) return;

  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.transition = "0.6s ease";

    setTimeout(() => {
      loader.style.display = "none";
    }, 300);

  }, 2000); 
});

console.log("Website Loaded Successfully 🚀");