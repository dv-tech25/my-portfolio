//handle navbar
const navbar = document.querySelectorAll(".nav-link");
const nav_collapse = document.querySelector(".navbar-collapse ");

navbar.forEach(navLink => {
    navLink.addEventListener('click', () => {
        nav_collapse.classList.remove("show");
    });
});


window.addEventListener('scroll', function (e) {
    var nav = document.querySelector(".navbar");
    nav.style.backgroundColor = "black";


    setTimeout(function () {
        nav.style.backgroundColor = "transparent";
    }, 800);
});

