"use strict";

const _$ = document.querySelector.bind(document);
const _$$ = document.querySelectorAll.bind(document);

import log from './test.js';


window.addEventListener('scroll', log('TEST'));

// (function() {
//   var menuImg = document.getElementById("menu-image");
//   var menuClose = document.getElementById("menu-close");
//   var menuContent = document.getElementById("menu-content");

//   const onToogleMenu = () => {
//     menuContent.classList.toggle("menu-show");
//   };

//   menuImg.addEventListener("click", onToogleMenu);
//   menuImg.addEventListener("touch", onToogleMenu);
//   menuClose.addEventListener("click", onToogleMenu);
// })();

// Topics TAB
(function() {
  const tabcontents = _$$('.tab__content');
  const tablinks = _$$('.tab__links');

  console.log('tabcontents', tabcontents);
  console.log('tablinks', tablinks);

  if (tabcontents.length < 1 || tablinks.length < 1) {
    return;
  };

  const tabToggler = index => {
    tabcontents.forEach(tabContent => tabContent.style.display = "none");
    tablinks.forEach(tabLink => tabLink.classList.remove('active'));

    tabcontents[index].style.display = "flex";
    tablinks[index].classList.add('active');
  };

  tablinks.forEach((tabLink, index) => tabLink.addEventListener('click', () => tabToggler(index)));

  tablinks[0].click();

})();
