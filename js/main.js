document.addEventListener('DOMContentLoaded', () => {
  // Functionality for hamburger menu
  const hamburgerButton = document.querySelector('#hamburgerButton');
  const mobileMenu = document.querySelector('#mobileMenu');

  console.log('hamburgerButton:', hamburgerButton);
  console.log('mobileMenu', mobileMenu);

  hamburgerButton.addEventListener('click', () =>
    mobileMenu.classList.toggle('active'));

  // Functionality for form validation
  const form = document.getElementById('subscriptionForm');
  const messageContainer = document.getElementById('messageContainer');

  form.onsubmit = function (event) {
    const emailValue = form.email.value.trim();

    if (emailValue === "") {
      setMessage("Please enter an email address.");
      event.preventDefault();
    } else if (!isValidEmail(emailValue)) {
      setMessage("Please enter valid email");
      event.preventDefault();
    } else {
      setMessage("Subscription successful!");
    }
  };

  function setMessage(message) {
    messageContainer.innerHTML = message;
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});