// JavaScript for Swaastya

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Check if the link is for an internal section or an external page
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault(); // Prevent default anchor click behavior

                const targetId = this.getAttribute('href').substring(1); // Remove '#'
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
            // If it's an external link (like auth.html), let default behavior happen
        });
    });
});
