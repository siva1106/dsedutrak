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
/* ================= DYNAMIC CIRCULAR FAVICON ================= */
window.addEventListener("load", function() {
    // Create an invisible canvas to draw on
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext("2d");

    // 1. Draw a perfect, solid white circle for the background
    ctx.beginPath();
    ctx.arc(32, 32, 32, 0, 2 * Math.PI);
    ctx.fillStyle = "#ffffff"; // Clean white background
    ctx.fill();

    // 2. Load the original logo image
    const img = new Image();
    img.src = "images/logo.png";
    
    // 3. When logo loads, shrink it slightly and draw it inside the white circle
    img.onload = function() {
        // (image, x-position, y-position, width, height)
        // Shrunk to 52x52 to leave a nice white border around the 64x64 circle
        ctx.drawImage(img, 6, 6, 52, 52); 

        // 4. Update the website's favicon live!
        let links = document.querySelectorAll("link[rel*='icon']");
        links.forEach(link => {
            link.href = canvas.toDataURL("image/png"); // Converts drawing to a PNG code
        });
    };
});