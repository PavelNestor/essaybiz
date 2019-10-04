const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const menuOpen = $("#menu-open");
const menuClose = $("#menu-close");
const menuContent = $("#menu-mobile");
// const body = $("body");

// let scrollPosition = 0;

// const calculateScrollPosition = () => {
//   scrollPosition = document.body.getBoundingClientRect().top
// };

// window.addEventListener('scroll', calculateScrollPosition);

(function() {
  const onOpenMenu = () => {
    // body.style.top = `${- scrollPosition}px`;
    // body.classList.add('fixedBody');
    menuContent.classList.add('menu-mobile_active');
  };

  const onCloseMenu = () => {
    menuContent.classList.remove('menu-mobile_active');
    // body.classList.remove('fixedBody');
  };

  menuOpen.addEventListener("click", onOpenMenu);
  menuClose.addEventListener("click", onCloseMenu);
})();
