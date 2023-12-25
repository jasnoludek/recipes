// Functionality for form validation
const form = document.getElementById('contactForm');
const messageContainer = document.getElementById('contactMessageContainer');

form.onsubmit = function (event) {

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
