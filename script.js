/* script.js */

const menuNav = document.getElementById('menuNav')
const menuContainer = document.getElementById('menuContainer')
document.getElementById("menu-toggle").addEventListener("click", () => {
  document.getElementById("navmenu").classList.toggle("active");
});

const darkToggle = document.getElementById("darkToggle");

  // Apply dark mode 
  if (localStorage.getItem("darkMode") === "on") {
    document.body.classList.add("dark-mode");
    darkToggle.textContent = "☀️ Dark OFF";
  }

  darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    darkToggle.textContent = isDark ? "☀️ Dark OFF" : "🌙 Dark ON";
    localStorage.setItem("darkMode", isDark ? "on" : "off");
  });

  const text = "Enjoy Your helthy and delecious food...!";
const target= document.getElementById("hero-title");

let index=0;
function showLetter() {
  if (index < text.length) {
    target.textContent += text.charAt(index);
    index++;
    setTimeout(showLetter,200)

    
  }else{
    setTimeout(()=>{
      target.textContent = "";
      index = 0;
      showLetter();
    },1000);
  }
  
}
showLetter();

function myFunction() {
  alert("Thank You for booking a table");
}



let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons and tabs
    tabButtons.forEach(btn => btn.classList.remove("active"));
    tabContents.forEach(content => content.classList.remove("active"));

    // Add active class to the clicked tab and its content
    button.classList.add("active");
    document.getElementById(button.dataset.tab).classList.add("active");
  });
});



const sections = document.querySelectorAll('.section, .horizontal-card, .testimonials-card');

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      obs.unobserve(entry.target); // optional: animate only once
    }
  });
}, {
  threshold: 0.2
});

sections.forEach(section => {
  observer.observe(section);
});

