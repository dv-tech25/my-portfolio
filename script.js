//handle navbar slider
const navbar = document.querySelectorAll(".nav-link");
const nav_collapse = document.querySelector(".navbar-collapse ");

navbar.forEach(navLink => {
    navLink.addEventListener('click', () => {
        nav_collapse.classList.remove("show");
    });
});


// navbar icon
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
