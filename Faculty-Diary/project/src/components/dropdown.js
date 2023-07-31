const dropdown = document.querySelector('.dropdown-container');
const button = dropdown.querySelector('button');
const menu = dropdown.querySelector('.dropdown-menu');

button.addEventListener('click', () => {
  menu.classList.toggle('show');
});
