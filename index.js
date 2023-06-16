const cards = document.querySelectorAll(".card");
const heroEl = document.querySelector(".hero");
const logoMenuel = document.querySelector(".logo-menu");
const navbarEl = document.querySelector(".navbar");
var btn = document.getElementById("btn");
const header = document.querySelector("header");

let slideIndex = 0;

// INTERVAL
var timerObject = null;

logoMenuel.addEventListener("click", () => {
  navbarEl.classList.toggle("open");
});

function leftClick() {
  btn.style.left = "0";
}

function rightClick() {
  btn.style.left = "75px";
}

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 50);
});

window.onscroll = () => {
  navbarEl.classList.remove("open");
};

// * Hero section alide auto switch

startSlide();

function startSlide() {
  timerObject = setInterval(function () {
    showSlides();
  }, 2000);
}

function stopSlide() {
  clearInterval(timerObject);
}

heroEl.addEventListener("mouseenter", function () {
  stopSlide();
  // *  HERO section slide effect
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      removeActiveClasses();
      card.classList.add("active");
    });
  });

  function removeActiveClasses() {
    cards.forEach((card) => {
      card.classList.remove("active");
    });
  }
});

heroEl.addEventListener("mouseleave", function () {
  startSlide();
});

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("card");

  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].classList.add("active");
}
