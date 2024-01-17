const navbarToggler = document.querySelector('.navbar__top--toggler');

const navbarCollapse = document.querySelector('.navbar__collapse');

 // Toggle the 'active' class on the nav element when the menu bar is clicked
navbarToggler.addEventListener('click', () => {
 navbarToggler.classList.toggle('change');   
 navbarCollapse.classList.toggle('show__nav');   
})
