document.addEventListener("DOMContentLoaded", function() {
    const themeToggleButton = document.getElementById("theme-toggle");
    const bodyElement = document.body;
    const headerElement = document.querySelector("header");
    const footerElement = document.querySelector("footer");

    // Check if there's a saved theme preference in localStorage
    const savedTheme = localStorage.getItem("theme");

    // Apply saved theme when the page loads
    if (savedTheme === "dark") {
        bodyElement.classList.add("dark-mode");
        headerElement.classList.add("header-dark");
        footerElement.classList.add("footer-dark");
        themeToggleButton.innerHTML = `<i id="theme-icon" class="fa-solid fa-moon"></i>`; // Moon icon for dark mode

        // Apply dark mode styles
        bodyElement.style.background = "#4a3f83";
        bodyElement.style.color = "white";

        const listItems = document.querySelectorAll('.list-group-item');
        listItems.forEach(item => {
            item.style.backgroundColor = "#444";
            item.style.color = "white";
            item.addEventListener('mouseover', () => {
                item.style.backgroundColor = "#c5bebe";
            });
            item.addEventListener('mouseout', () => {
                item.style.backgroundColor = "#444";
            });
        });

        const contentItems = document.querySelectorAll('.content');
        contentItems.forEach(content => {
            content.style.color = "white";
            content.addEventListener('mouseover', () => {
                content.style.backgroundImage = "linear-gradient(to bottom left, #444, #121212, #121212)";
            });
            content.addEventListener('mouseout', () => {
                content.style.backgroundImage = "";
            });
        });

        const contentMidItems = document.querySelectorAll('.content-mid');
        contentMidItems.forEach(contentMid => {
            contentMid.addEventListener('mouseover', () => {
                contentMid.style.backgroundImage = "linear-gradient(to bottom right, #444, #121212, #121212)";
            });
            contentMid.addEventListener('mouseout', () => {
                contentMid.style.backgroundImage = "";
            });
        });

        const headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
        headers.forEach(header => {
            header.style.color = "#f1f1f1";
        });

        const paragraphs = document.querySelectorAll('p');
        paragraphs.forEach(p => {
            p.style.color = "#ccc";
        });

        // Dark Mode Header and Footer
        headerElement.style.backgroundImage = "linear-gradient(to top, #4a3f83, #2e2b47)";
        headerElement.style.color = "#f1f1f1";
        footerElement.style.backgroundImage = "linear-gradient(to bottom, #4a3f83, #2e2b47)";
    } else {
        bodyElement.classList.remove("dark-mode");
        headerElement.classList.remove("header-dark");
        footerElement.classList.remove("footer-dark");
        themeToggleButton.innerHTML = `<i id="theme-icon" class="fa-solid fa-sun"></i>`; // Sun icon for light mode
    }

    // Toggle theme on button click
    themeToggleButton.addEventListener("click", function() {
        if (bodyElement.classList.contains("dark-mode")) {
            bodyElement.classList.remove("dark-mode");
            headerElement.classList.remove("header-dark");
            footerElement.classList.remove("footer-dark");
            themeToggleButton.innerHTML = `<i id="theme-icon" class="fa-solid fa-sun"></i>`;
            localStorage.setItem("theme", "light"); // Save light mode preference

            // Remove dark mode specific styles
            bodyElement.style.background = "";
            bodyElement.style.color = "";

            const listItems = document.querySelectorAll('.list-group-item');
            listItems.forEach(item => {
                item.style.backgroundColor = "";
                item.style.color = "";
            });

            const contentItems = document.querySelectorAll('.content');
            contentItems.forEach(content => {
                content.style.color = "";
                content.style.backgroundImage = "";
            });

            const contentMidItems = document.querySelectorAll('.content-mid');
            contentMidItems.forEach(contentMid => {
                contentMid.style.backgroundImage = "";
            });

            const headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
            headers.forEach(header => {
                header.style.color = "";
            });

            const paragraphs = document.querySelectorAll('p');
            paragraphs.forEach(p => {
                p.style.color = "";
            });

            // Light Mode Header and Footer
            headerElement.style.backgroundImage = "";
            footerElement.style.backgroundImage = "";

            // Reset hover effect styles for list items and content blocks
            const allItems = document.querySelectorAll('.list-group-item, .content, .content-mid');
            allItems.forEach(item => {
                item.addEventListener('mouseover', () => {
                    item.style.backgroundColor = "";
                    item.style.backgroundImage = "";
                });
            });

            // Reset specific text styles for light mode (e.g., h1 and h2)
            const headerTitles = document.querySelectorAll('h1, h2');
            headerTitles.forEach(title => {
                title.style.color = "#000";  // Set to black or your preferred light mode color
            });
        } else {
            bodyElement.classList.add("dark-mode");
            headerElement.classList.add("header-dark");
            footerElement.classList.add("footer-dark");
            themeToggleButton.innerHTML = `<i id="theme-icon" class="fa-solid fa-moon"></i>`;
            localStorage.setItem("theme", "dark"); // Save dark mode preference

            // Apply dark mode styles
            bodyElement.style.background = "#4a3f83";
            bodyElement.style.color = "white";

            const listItems = document.querySelectorAll('.list-group-item');
            listItems.forEach(item => {
                item.style.backgroundColor = "#444";
                item.style.color = "white";
                item.addEventListener('mouseover', () => {
                    item.style.backgroundColor = "#c5bebe";
                });
                item.addEventListener('mouseout', () => {
                    item.style.backgroundColor = "#444";
                });
            });

            const contentItems = document.querySelectorAll('.content');
            contentItems.forEach(content => {
                content.style.color = "white";
                content.addEventListener('mouseover', () => {
                    content.style.backgroundImage = "linear-gradient(to bottom left, #444, #121212, #121212)";
                });
                content.addEventListener('mouseout', () => {
                    content.style.backgroundImage = "";
                });
            });

            const contentMidItems = document.querySelectorAll('.content-mid');
            contentMidItems.forEach(contentMid => {
                contentMid.addEventListener('mouseover', () => {
                    contentMid.style.backgroundImage = "linear-gradient(to bottom right, #444, #121212, #121212)";
                });
                contentMid.addEventListener('mouseout', () => {
                    contentMid.style.backgroundImage = "";
                });
            });

            const headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
            headers.forEach(header => {
                header.style.color = "#f1f1f1";
            });

            const paragraphs = document.querySelectorAll('p');
            paragraphs.forEach(p => {
                p.style.color = "#ccc";
            });

            // Dark Mode Header and Footer
            headerElement.style.backgroundImage = "linear-gradient(to top, #4a3f83, #2e2b47)";
            headerElement.style.color = "#f1f1f1";
            footerElement.style.backgroundImage = "linear-gradient(to bottom, #4a3f83, #2e2b47)";

            // Reset hover effect styles for list items and content blocks
            const allItems = document.querySelectorAll('.list-group-item, .content, .content-mid');
            allItems.forEach(item => {
                item.addEventListener('mouseover', () => {
                    item.style.backgroundColor = "";
                    item.style.backgroundImage = "";
                });
            });

            // Reset specific text styles for dark mode (e.g., h1 and h2)
            const headerTitles = document.querySelectorAll('h1, h2');
            headerTitles.forEach(title => {
                title.style.color = "#f1f1f1";  // Set to light color for dark mode
            });
        }
    });
});