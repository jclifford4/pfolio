// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
const button = document.getElementById('theme');
const body = document.body;
const toggleTheme = () => {
    const isLightMode = body.classList.toggle("light-mode");
    button.textContent = isLightMode ? "Dark Theme" : "Light Theme";
    localStorage.setItem("theme", body.classList.contains("light-mode") ? "light" : "dark");
};

// Apply saved theme on page load
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light-mode");
        button.textContent = "Dark Theme";
    }
    else {
        button.textContent = "Light Theme";
    }
});

// Lighting Button visibility on mobile
function toggleVisibility() {
    let button = document.getElementById("lights");
    let isMobile = window.matchMedia("(max-width: 768px)").matches;

    button.style.display = isMobile ? "none" : "block";
}

toggleVisibility();
window.addEventListener("resize", toggleVisibility);


const lightButton = document.getElementById('lights');
let elements = document.querySelectorAll(".side-light");
const toggleLights = () => {
    const isSideLight = lightButton.classList.toggle("side-light");
    elements.forEach(element => {
        element.classList.toggle("side-light");
    });
    lightButton.textContent = isSideLight ? "Lighting Off" : "Lighting On";
    localStorage.setItem("lights", lightButton.classList.contains("side-light") ? "on" : "off");
};

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("lights") === "on") {
        lightButton.textContent = "Lighting Off";
        elements.forEach(element => {
            element.classList.add("side-light");
        });
    }
    else {
        lightButton.textContent = "Lighting On";
        elements.forEach(element => {
            element.classList.remove("side-light");
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const tboxes = document.querySelectorAll(".tbox");
    const titles = document.querySelectorAll(".title");
    const slides = document.querySelectorAll(".slide");
    const projects = document.querySelectorAll(".pr-item");
    const projectSqs = document.querySelectorAll(".pr-item-sq");
    const lines = document.querySelectorAll(".section-line");
    const dots = document.querySelectorAll(".section-dot");


    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target); // Stop observing after first trigger
                }
            });
        },
        { threshold: .25 } // Trigger when 25% of the element is visible
    );

    tboxes.forEach((tbox) => observer.observe(tbox));
    titles.forEach((title) => observer.observe(title));
    slides.forEach((slide) => observer.observe(slide));
    projects.forEach((project) => observer.observe(project));
    projectSqs.forEach((projectSq) => observer.observe(projectSq));
    lines.forEach((line) => observer.observe(line));
    dots.forEach((dot) => observer.observe(dot));
});
