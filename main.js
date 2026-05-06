// Navbar background on scroll (Debounced for performance)
const navbar = document.querySelector('.navbar');
let isScrolling = false;

window.addEventListener('scroll', () => {
    if (!isScrolling) {
        window.requestAnimationFrame(() => {
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(17, 17, 17, 0.9)';
                navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.5)';
            } else {
                navbar.style.background = 'transparent';
                navbar.style.boxShadow = 'none';
            }
            isScrolling = false;
        });
        isScrolling = true;
    }
});
