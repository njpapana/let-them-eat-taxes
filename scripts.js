/* JavaScript for the Income Equality Initiative website */

// Toggle mobile navigation menu
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
}

// Attach event listener to hamburger menu
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  if (hamburger) {
    hamburger.addEventListener('click', toggleMenu);
  }
});

// Dynamic year in footer
document.addEventListener('DOMContentLoaded', () => {
  const yearSpan = document.querySelector('#current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});