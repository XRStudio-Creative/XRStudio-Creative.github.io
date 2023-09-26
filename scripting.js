
document.addEventListener('DOMContentLoaded', function() {

    // Select the sticky menu
    const stickyMenu = document.querySelector('header'); // Adjust the selector as needed
    
    // Calculate the scroll position to make not-sticky
    const scrollTriggerPosition = window.innerHeight * .5; // Adjust as needed

    function updateMenuState() {
        const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

        if (scrollPosition >= scrollTriggerPosition) {
            // If scrolled past the trigger position, remove sticky behavior
            stickyMenu.classList.add('menu-hidden');
        } else {
            // If not scrolled past the trigger position, make it sticky again!!!
            stickyMenu.style.position = 'sticky';
            stickyMenu.classList.remove('menu-hidden');
        }
    }

    // Listen for scroll events
    window.addEventListener('scroll', updateMenuState);
    // Initial update when the page loads
    window.addEventListener('load', updateMenuState);

});