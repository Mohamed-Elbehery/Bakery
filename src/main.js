//! Menu for Mobiles
const menu = document.querySelector('header nav ul');
const menuBar = document.getElementById('menu-bar');
const xMark = document.getElementById('x-mark');

menuBar.addEventListener('click', () => {
  menu.style.transform = 'translateY(0%)';
  menuBar.style.display = 'none';
  xMark.style.display = 'block';
});

xMark.addEventListener('click', () => {
  menu.style.transform = 'translateY(-125%)';
  menuBar.style.display = 'block';
  xMark.style.display = 'none';
})

//! Animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => entry.isIntersecting ? entry.target.classList.add('show') : entry.target.classList.remove('show'))
})

document.querySelectorAll('.hidden').forEach(el => observer.observe(el));