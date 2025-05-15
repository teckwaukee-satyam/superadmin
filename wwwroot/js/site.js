document.addEventListener('DOMContentLoaded', function () {
    // Toggle sidebar on mobile
    const iconSidenav = document.getElementById('iconSidenav');
    const sidenav = document.getElementById('sidenav-main');
    const mainContent = document.querySelector('.main-content');

    if (iconSidenav && sidenav) {
        iconSidenav.addEventListener('click', function () {
            sidenav.classList.toggle('visible');

            // On mobile, adjust main content when sidebar is visible
            if (window.innerWidth < 992) {
                if (sidenav.classList.contains('visible')) {
                    mainContent.style.marginLeft = '250px';
                } else {
                    mainContent.style.marginLeft = '0';
                }
            }
        });
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
            if (window.innerWidth < 992) {
                sidenav.classList.remove('visible');
                mainContent.style.marginLeft = '0';
            }
        });
    });

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function (e) {
        if (window.innerWidth < 992 &&
            sidenav.classList.contains('visible') &&
            !e.target.closest('#sidenav-main') &&
            e.target !== iconSidenav) {
            sidenav.classList.remove('visible');
            mainContent.style.marginLeft = '0';
        }
    });

    // Adjust layout on window resize
    window.addEventListener('resize', function () {
        if (window.innerWidth >= 992) {
            mainContent.style.marginLeft = '250px';
        } else if (!sidenav.classList.contains('visible')) {
            mainContent.style.marginLeft = '0';
        }
    });

    // Set initial active link based on current page (simplified)
    function setActiveLink() {
        const path = window.location.pathname;
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === path) {
                link.classList.add('active');
            }
        });
    }

    setActiveLink();
});