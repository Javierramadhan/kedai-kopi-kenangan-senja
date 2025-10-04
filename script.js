// Mengambil Data Navbar Nav
const navbarNav = document.querySelector('.navbar-nav');

// Menambahkan Class Active
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

// cara Menutup Navbar
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});
