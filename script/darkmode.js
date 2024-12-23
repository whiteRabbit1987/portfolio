// Select necessary elements
const themeToggleButton = document.getElementById("theme-toggle");
const bodyElement = document.body;
const headerElement = document.querySelector("header");
const footerElement = document.querySelector("footer");

// Helper function to apply dark mode
function applyDarkMode() {
    bodyElement.classList.add("dark-mode");
    headerElement.classList.add("header-dark");
    footerElement.classList.add("footer-dark");
    themeToggleButton.innerHTML = '<i id="theme-icon" class="fa-solid fa-moon"></i>';
    localStorage.setItem("theme", "dark");

    // Dark mode styles
    bodyElement.style.background = "#4a3f83";
    bodyElement.style.color = "white";
    updateStyles('.list-group-item', { backgroundColor: "#444", color: "white" }, "#c5bebe");
    updateStyles('.content', { color: "white" }, "#121212", true);
    updateStyles('h1, h2, h3, h4, h5, h6', { color: "#f1f1f1" });
    headerElement.style.backgroundImage = "linear-gradient(to top, #4a3f83, #2e2b47)";
    footerElement.style.backgroundImage = "linear-gradient(to bottom, #4a3f83, #2e2b47)";

    // Styles for military career card
    updateStyles('.card.border-secondary', { backgroundColor: "#2e2b47", borderColor: "#6c757d" });
    updateStyles('.card-header.bg-secondary', { backgroundColor: "#4a3f83" });
    updateStyles('.card-body', { color: "white" });

    // Updated styles for quote card using custom class
    updateStyles('.quote-card', { 
        backgroundColor: "#2e2b47", 
        color: "white" 
    });
    updateStyles('.quote-card .card-body', { 
        backgroundColor: "#2e2b47", 
        color: "white" 
    });
    updateStyles('.blockquote', { color: "white" });
    updateStyles('.blockquote-footer', { color: "#adb5bd" });
    updateStyles('.blockquote cite', { color: "#6c757d" });

    // Styles for timeline table
    updateStyles('.table-secondary', { backgroundColor: "#2e2b47", color: "white" });
    updateStyles('.table-dark', { backgroundColor: "#1a1a2e" });
    updateStyles('.table-striped tbody tr:nth-of-type(odd)', { backgroundColor: "#3a3456" });
    updateStyles('.table', { borderColor: "#6c757d" });

    // Dark mode styles for the button
    const btn = document.querySelector('.btn');
    if (btn) {
        btn.classList.add('btn-dark');
    }

    // Dark mode styles for the accordion-body
    updateStyles('.accordion-body', { 
        backgroundColor: "rgba(71, 63, 131)", 
        color: "white" 
    });
}

// Helper function to apply light mode
function applyLightMode() {
    bodyElement.classList.remove("dark-mode");
    headerElement.classList.remove("header-dark");
    footerElement.classList.remove("footer-dark");
    themeToggleButton.innerHTML = '<i id="theme-icon" class="fa-solid fa-sun"></i>';
    localStorage.setItem("theme", "light");

    // Reset styles to default
    bodyElement.style.background = "";
    bodyElement.style.color = "";
    resetStyles('.list-group-item');
    resetStyles('.content', true);
    resetStyles('h1, h2, h3, h4, h5, h6');
    headerElement.style.backgroundImage = "";
    footerElement.style.backgroundImage = "";

    // Reset military career card styles
    resetStyles('.card.border-secondary');
    resetStyles('.card-header.bg-secondary');
    resetStyles('.card-body');
    
    // Reset quote card styles using custom class
    resetStyles('.quote-card');
    resetStyles('.quote-card .card-body');
    
    // Reset other components
    resetStyles('.blockquote');
    resetStyles('.blockquote-footer');
    resetStyles('.blockquote cite');

    // Reset timeline table styles
    resetStyles('.table-secondary');
    resetStyles('.table-dark');
    resetStyles('.table-striped tbody tr:nth-of-type(odd)');

    // Reset button styles
    const btn = document.querySelector('.btn');
    if (btn) {
        btn.classList.remove('btn-dark');
    }

    // Reset light mode styles for accordion-body
    resetStyles('.accordion-body');
}

// Helper to update styles
function updateStyles(selector, styles, hoverBg = null, useHoverEffect = false) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
        Object.assign(el.style, styles);
        if (hoverBg || useHoverEffect) {
            el.addEventListener('mouseover', () => {
                if (hoverBg) el.style.backgroundColor = hoverBg;
                if (useHoverEffect) el.style.backgroundImage = "linear-gradient(to bottom left, #444, #121212, #121212)";
            });
            el.addEventListener('mouseout', () => {
                if (hoverBg) el.style.backgroundColor = styles.backgroundColor || "";
                if (useHoverEffect) el.style.backgroundImage = "";
            });
        }
    });
}

// Helper to reset styles
function resetStyles(selector, useHoverEffect = false) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
        // Clear all inline styles
        el.style.cssText = "";
        
        // Remove hover effects if applied
        if (useHoverEffect) {
            el.onmouseover = null;
            el.onmouseout = null;
        }
    });
}

// Check saved theme preference and apply on load
if (localStorage.getItem("theme") === "dark") {
    applyDarkMode();
} else {
    applyLightMode(); // Apply light mode if no preference is found
}

// Toggle theme on button click
themeToggleButton.addEventListener("click", function() {
    if (bodyElement.classList.contains("dark-mode")) {
        applyLightMode();
    } else {
        applyDarkMode();
    }
});