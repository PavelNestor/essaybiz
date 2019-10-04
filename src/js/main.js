"use strict";

const _$ = document.querySelector.bind(document);
const _$$ = document.querySelectorAll.bind(document);

// console.log('_$', _$);


// import { log } from './test.js';

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


$(".upload").upload({
  action: '#', // TODO change to real handler
  label: 'Drop Your File Here or Click to Upload',
  autoUpload: true
});
