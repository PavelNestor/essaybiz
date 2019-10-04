const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

(function() {
  const menuOpen = $("#menu-open");
  const menuClose = $("#menu-close");
  const menuContent = $("#menu-mobile");
  const body = $("body");

  const onToggleMenu = () => {
    menuContent.classList.toggle('menu-mobile_active');
    body.classList.toggle('fixedBody');
  };

  menuOpen.addEventListener("click", onToggleMenu);
  menuClose.addEventListener("click", onToggleMenu);
})();
