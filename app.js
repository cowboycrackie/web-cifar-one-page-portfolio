const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobileMenu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', ()=>{
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
})

document.addEventListener('scroll', ()=>{
  var scroll_position = window.scrollY;

  if (scroll_position > 250) {
    header.style.backgroundColor = 'var(--card-gradient-color1)';
  } else {
    header.style.backgroundColor = 'transparent';
  }
})