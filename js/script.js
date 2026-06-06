// Simple slider interaction
const dots = document.querySelectorAll('.dot');
dots.forEach(dot => {
  dot.addEventListener('click', () => {
    dots.forEach(d => d.classList.remove('active'));
    dot.classList.add('active');
  });
});

// Hamburger menu toggle for responsive navbar
// Make sure this runs after DOM is loaded

document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const navLinkItems = document.querySelectorAll('.nav-link');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }

  navLinkItems.forEach(link => {
    link.addEventListener('click', function() {
      navLinkItems.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });
});
