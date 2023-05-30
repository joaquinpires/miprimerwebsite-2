function showAlert() {  alert(' esta es una prueba de javascript ');}

document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
        document.querySelector(".nav-links").
                    classList.toggle("nav-links-responsive")})