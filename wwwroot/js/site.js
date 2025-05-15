document.addEventListener('DOMContentLoaded', function () {
    // Toggle sidebar on mobile
    const iconSidenav = document.getElementById('iconSidenav');
    const sidenav = document.getElementById('sidenav-main');
    const mainContent = document.querySelector('.main-content');

    // Function to toggle sidebar visibility and adjust main content
    function toggleSidebar() {
 sidenav.classList.toggle('visible');
        // Adjust main content margin only if mainContent exists
        if (mainContent) {
            if (window.innerWidth < 992) {
 mainContent.style.marginLeft = sidenav.classList.contains('visible') ? '250px' : '0';
            } else {
                mainContent.style.marginLeft = '250px'; // Keep margin on larger screens when visible
            }
        }
    }

    if (iconSidenav && sidenav) {
 iconSidenav.addEventListener('click', toggleSidebar);
    }

    // Handle navigation link clicks
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            // Prevent default if it's not a real link (for demo)
            if (this.getAttribute('href') === '#') {
                e.preventDefault();
            }

            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));

            // Add active class to clicked link
            this.classList.add('active');

            // Close sidebar on mobile after clicking a link
            if (window.innerWidth < 992 && sidenav.classList.contains('visible')) {
                sidenav.classList.remove('visible');
                if (mainContent) {
 mainContent.style.marginLeft = '0';
                }
            }
        });
    });

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function (e) {
        // Ensure iconSidenav and sidenav exist before proceeding
        if (iconSidenav && sidenav) {
            if (window.innerWidth < 992 &&
 sidenav.classList.contains('visible') &&
 !sidenav.contains(e.target) && // Check if click is outside the sidebar
 !iconSidenav.contains(e.target)) // Check if click is not on the toggle icon itself
 {
 toggleSidebar(); // Use the toggle function to hide and adjust margin
            }
        }
    });

    // Adjust layout on window resize
    window.addEventListener('resize', function () {
        // Ensure mainContent exists before adjusting margin
        if (mainContent && window.innerWidth >= 992) {
            mainContent.style.marginLeft = '250px';
        }
    });

    // Set initial active link based on current page (simplified)
    function setActiveLink() {
        const path = window.location.pathname;
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === path) {
                // Add active class to the direct match or if a root page matches a link
                if (link.getAttribute('href') === path || (path === '/' && link.getAttribute('href') === '/')) {
 link.classList.add('active');
                }
            }
        });
    }

    setActiveLink();
});