document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menu-btn");
    const navMenu = document.getElementById("nav-menu");
    const icon = menuBtn.querySelector("i");

    menuBtn.addEventListener("click", () => {
        // Toggle the active class to show/hide the menu
        navMenu.classList.toggle("active");
        
        // Change the hamburger icon to an 'X' when open
        if(navMenu.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }
    });
});