// Select elements
const navLinks = document.querySelectorAll("header .navlinks a");
const footerSocialLinks = document.querySelectorAll("footer .socials a");
const logoImage = document.querySelector("footer .logo-container img");

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").slice(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

// Hover effect on social media links in footer
footerSocialLinks.forEach(link => {
    link.addEventListener("mouseover", () => {
        link.style.backgroundColor = "#ffd7c2"; // Light opal hover
        link.style.color = "#7a3e3e"; // Auburn text
    });
    link.addEventListener("mouseout", () => {
        link.style.backgroundColor = "transparent";
        link.style.color = "#e7dedf"; // Revert to original color
    });
});

// Add interaction for the logo in the footer
if (logoImage) {
    logoImage.addEventListener("click", () => {
        window.location.href = "https://www.stefhanorlando.com"; // Redirect to Stefhan's website
    });

    logoImage.addEventListener("mouseover", () => {
        logoImage.style.transform = "scale(1.1)"; // Slightly zoom in
        logoImage.style.transition = "transform 0.3s ease";
    });

    logoImage.addEventListener("mouseout", () => {
        logoImage.style.transform = "scale(1)"; // Revert to original size
    });
}

// Responsive header toggle (if adding a mobile menu in the future)
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("header nav");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active"); // Add/remove 'active' class
        menuToggle.classList.toggle("open"); // Toggle icon state
    });
}