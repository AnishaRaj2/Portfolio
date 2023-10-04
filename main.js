
/* Toggle functionality of the navigation bar. It selects the hamburger icon and the navigation links container using document.querySelector, and then adds a click event listener to the hamburger icon. When the hamburger icon is clicked, it toggles the nav-active class on the navigation links container, which triggers the display or hiding of the navigation links. Also, It toggles the change class on the hamburger icon for animiation (hamburger icon into X). */

const toggleNavLink = () => {
    const hamburger = document.querySelector('.hamburger');  
    const nav = document.querySelector('.nav-links');        
  
    hamburger.addEventListener('click', () => {
      // Toggle navbar with hamburger icon
      nav.classList.toggle('nav-active');
  
      // Hamburger icon animation
      hamburger.classList.toggle('change');
    });
}
  
/* StickyNavbar function, it add or remove the sticky class on the navbar when user scrolls. It selects the navbar using document.querySelector, and then adds a scroll event listener to the window. When the page is scrolled, it checks the current vertical position (window.pageYOffset) against the top offset of the navigation bar (navbar.offsetTop). If the scroll position is greater than the navbar's offset, it adds the sticky class to make the navbar stick to the top of the screen. Otherwise, it removes the sticky class. */

const stickyNavbar = () => {
    const navbar = document.querySelector('nav');       
        
    window.addEventListener('scroll', () => {      
      if (window.pageYOffset > navbar.offsetTop) {        
        navbar.classList.add('sticky');            
      } else {                                          
        navbar.classList.remove('sticky');
      }
    });
}
 
/* SmoothScroll function handles the smooth scrolling behavior when clicking on navigation links. It selects all the anchor elements within the navigation links using document.querySelectorAll. It then iterates over each link using forEach and adds a click event listener to it. When a navigation link is clicked, it prevents the default link behavior using e.preventDefault(). For other links (except resume link), it retrieves the target ID of the clicked link using link.getAttribute('href'). It then selects the target section on the page using document.querySelector and calculates the target position by subtracting the height of the navbar from the section's offset top.*/

const smoothScroll = () => {
    const navbarLinks = document.querySelectorAll('.nav-links li a');
  
    navbarLinks.forEach(link => {
        link.addEventListener('click', e => {
            const targetId = link.getAttribute('href');
  
            // Check if the link is the resume link
            if (targetId === 'documents/AnishaRajCV.pdf') {
                return; // Skip smooth scroll for the resume link
            }
  
            e.preventDefault(); //prevent the default behavior of an event
  
            const targetSection = document.querySelector(targetId);
            const navbarHeight = document.querySelector('nav').offsetHeight;
            const targetPosition = targetSection.offsetTop - (1.4*navbarHeight); //multiplied by 1.4 so that navbar doesn't overlap/hide top of target section
            
            // to smoothly scroll to the target position
            window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
            });
  
            // Close the mobile navigation after clicking a link by removing the change class from the hamburger icon and the nav-active class from the navigation links container.
            const hamburger = document.querySelector('.hamburger');
            const nav = document.querySelector('.nav-links');
            hamburger.classList.remove('change');
            nav.classList.remove('nav-active');
        });
    });
  
    // Smooth scroll to top when the logo is clicked
    const logoLink = document.querySelector('.logo a');
    logoLink.addEventListener('click', e => {
      e.preventDefault();
  
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
  
      // Close the mobile navigation after clicking the logo
      const hamburger = document.querySelector('.hamburger');
      const nav = document.querySelector('.nav-links');
      hamburger.classList.remove('change');
      nav.classList.remove('nav-active');
    });
}
  
toggleNavLink();
stickyNavbar();
smoothScroll();
