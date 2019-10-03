
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Topics TAB
(function() {
  const tabcontents = $$('.tab__content');
  const tablinks = $$('.tab__links');

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