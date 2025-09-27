/* script.js */



const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const darkToggle = document.getElementById("darkToggle");

// Apply dark mode 
if (localStorage.getItem("darkMode") === "on") {
  document.body.classList.add("dark-mode");
  darkToggle.textContent = "☀️";
}

darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  darkToggle.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("darkMode", isDark ? "on" : "off");
});

const text = "Enjoy Your helthy and delecious food...!";
const target = document.getElementById("hero-title");

let index = 0;
function showLetter() {
  if (index < text.length) {
    target.textContent += text.charAt(index);
    index++;
    setTimeout(showLetter, 200)


  } else {
    setTimeout(() => {
      target.textContent = "";
      index = 0;
      showLetter();
    }, 1000);
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
},
  {
    threshold: 0.2
  });

sections.forEach(section => {
  observer.observe(section);
});

// document.addEventListener("DOMContentLoaded", () => {
//   const cartCount = document.querySelector(".cart-count");
//   let count = 0;

//   // Add to Cart buttons
//   document.querySelectorAll(".addCart button").forEach(btn => {
//     btn.addEventListener("click", () => {
//       count++;
//       cartCount.textContent = count;
//     });
//   });



// });

document.addEventListener("DOMContentLoaded", () => {
  const cartCount = document.querySelector(".cart-count");
  const cartItemsList = document.querySelector(".cart-items");
  const cartTotal = document.querySelector(".total-cart");
  let count = 0;
  let total = 0;
  document.querySelectorAll(".menu-item").forEach(item => {
    const btn = item.querySelector(".addCart button");
    btn.addEventListener("click", () => {
      const name = item.querySelector("h3").textContent;
      const priceText = item.querySelector(".price").textContent.replace("Rs.", "").replace("/-", "");
      const price = parseFloat(priceText);
      const img = item.querySelector("img").src;


      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      // Push new item
      cart.push({ name, price, img });
      localStorage.setItem("cart", JSON.stringify(cart));
      count++;
      total += price;

      // Update cart count
     cartCount.textContent = cart.length;

      // Add item to cart list

    });

  });
});


document.getElementById("cartIcon").addEventListener("click", () => {
  window.location.href = "cart.html";  // opens your cart page
});

