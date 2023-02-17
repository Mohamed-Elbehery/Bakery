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