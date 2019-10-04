// Navbar show on scroll

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const navEl = $('#navbar');
const height = window.innerHeight;
let lastScrollPosition = 0;

function showNavOnScroll() {
  const scrollPosition = document.body.getBoundingClientRect().top;
  const isScrollDirectionBackwards = lastScrollPosition < scrollPosition;

  if (isScrollDirectionBackwards && scrollPosition < -height) {
    navEl.classList.add('navbar_active');
  } else {
    navEl.classList.remove('navbar_active');
  }

  lastScrollPosition = scrollPosition;
};

window.addEventListener('scroll', showNavOnScroll);
