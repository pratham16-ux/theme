function toggleMenu() {
  document.getElementById("mobileMenu").classList.toggle("show");
}

const hero = document.getElementById("hero"); 

const images = [ 
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
     "https://images.unsplash.com/photo-1497366754035-f200968a6e72", 
     "https://images.unsplash.com/photo-1522202176988-66273c2fd55f", 
     "https://images.unsplash.com/photo-1552664730-d307ca884978" 
    ]; 
    let index = 0;
    
    function changeHeroImage() { 
        hero.style.backgroundImage = `url(${images[index]}`; 
        index = (index + 1) % images.length; 
    }

        changeHeroImage(); 
        setInterval(changeHeroImage, 4000);

window.onload = function () {
  setTimeout(function () {
    document.getElementById("loader").style.display = "none";
  }, 2000); 
};