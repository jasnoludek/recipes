document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM content loaded');
  // Functionality for hamburger menu
  const hamburgerButton = document.querySelector('#hamburgerButton');
  const mobileMenu = document.querySelector('#mobileMenu');

  console.log('hamburgerButton:', hamburgerButton);
  console.log('mobileMenu', mobileMenu);

  hamburgerButton.addEventListener('click', () =>
    mobileMenu.classList.toggle('active'));

  // Functionality for scroll navigation
  const heroButton = document.getElementById('heroButton');
  const featuredRecipes = document.getElementById('featuredRecipes');

  heroButton.addEventListener('click', (event) => {
    event.preventDefault();
    featuredRecipes.scrollIntoView({ behavior: 'smooth' });
  })

  // Functionality for form validation
  const form = document.getElementById('subscriptionForm');
  const messageContainer = document.getElementById('messageContainer');

  form.onsubmit = function (event) {
    console.log('Form submitted');
    console.log('Form submission attempted');

    event.preventDefault();

    const emailValue = form.email.value.trim();

    if (emailValue === "") {
      setMessage("Please enter an email address.");
    } else if (!isValidEmail(emailValue)) {
      setMessage("Please enter valid email");
      form.email.value = "";
    } else {
      setMessage("Subscription successful!");
      form.email.value = "";
    }
  };

  function setMessage(message) {
    messageContainer.innerHTML = message;
  }

  function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  }

});