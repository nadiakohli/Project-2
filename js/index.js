window.onload = () => {
  // Get burger button from DOM
  const burgerButton = document.querySelector('.burger-button');
  // Get menu from DOM
  const menu = document.querySelector('.burger-menu');
  
  // Function which toogle state of menu
  const toggleMenu = (el) => {
    // Set display style for menu. Check if burger button element have 'active' class
    menu.style.display = el.currentTarget.classList.contains('active') ? 'flex' : 'none';
    // Toogle 'active' class by each click on the burger button
    el.currentTarget.classList.toggle('active')
  };

  // Add click event on burger button
  burgerButton.addEventListener('click', toggleMenu);
}
