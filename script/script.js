// Get the theme toggle button and body element
const themeToggleButton = document.getElementById("theme-toggle");
const bodyElement = document.body;
const headerElement = document.querySelector("header");
const footerElement = document.querySelector("footer");

// Check the saved theme preference from localStorage (if any)
const savedTheme = localStorage.getItem("theme");

// Apply the saved theme on page load (if exists)
if (savedTheme === "dark") {
    bodyElement.classList.add("dark-mode");
    headerElement.classList.add("header-dark");
    footerElement.classList.add("footer-dark");
    themeToggleButton.innerHTML = `<i id="theme-icon" class="fa-solid fa-moon"></i>`; // Set icon to moon for dark mode
} else {
    bodyElement.classList.remove("dark-mode");
    headerElement.classList.add("header-light");
    footerElement.classList.add("footer-light");
    themeToggleButton.innerHTML = `<i id="theme-icon" class="fa-solid fa-sun"></i>`; // Set icon to sun for light mode
}

// Toggle dark/light mode when the button is clicked
themeToggleButton.addEventListener("click", () => {
    if (bodyElement.classList.contains("dark-mode")) {
        bodyElement.classList.remove("dark-mode");
        headerElement.classList.remove("header-dark");
        footerElement.classList.remove("footer-dark");
        headerElement.classList.add("header-light");
        footerElement.classList.add("footer-light");
        themeToggleButton.innerHTML = `<i id="theme-icon" class="fa-solid fa-sun"></i>`; // Set icon to sun for light mode
        localStorage.setItem("theme", "light"); // Save preference
    } else {
        bodyElement.classList.add("dark-mode");
        headerElement.classList.remove("header-light");
        footerElement.classList.remove("footer-light");
        headerElement.classList.add("header-dark");
        footerElement.classList.add("footer-dark");
        themeToggleButton.innerHTML = `<i id="theme-icon" class="fa-solid fa-moon"></i>`; // Set icon to moon for dark mode
        localStorage.setItem("theme", "dark"); // Save preference
    }
});