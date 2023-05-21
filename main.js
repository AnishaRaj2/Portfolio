
const toggleNavLink = () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-links');
        
    hamburger.addEventListener('click', () => {
        //Toggle navbar with hamburger icon
        nav.classList.toggle('nav-active');
        
        //Hamburger icon animation
        hamburger.classList.toggle('change');
    });
}

toggleNavLink();




// let isVisible = false;
// let dropdownMenu = document.getElementById("dropdown_menu");

// function toggleMenu () {
//     if (isVisible === false) {
//         isVisible = true;
//     } else {
//         isVisible = false;
//     }

//     if (isVisible) {
//         isVisible = false;
//     }

//     console.log("is", isVisible);

//     if (isVisible) {
//         dropdownMenu.className = "hide"
//     } else{
//         dropdownMenu.className = "dropdown_menu"

//     }
//     isVisible = !isVisible;
// }